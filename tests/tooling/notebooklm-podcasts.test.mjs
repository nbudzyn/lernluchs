// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { chromium } from "@playwright/test";
import { resolve } from "node:path";
import {
  buildPodcastJob,
  readTopicPlans,
  readPublicAudio,
  reconcilePublishedJobs,
  isNotebookUrl,
  importSources,
  requestAudio,
  assertOutsideRepository,
  assertExpectedSources,
  shareNotebook,
} from "../../scripts/notebooklm-podcasts.mjs";

const topic = {
  id: "skills",
  title: "Agent Skills",
  sourceUrls: ["https://example.org/skills", "https://example.org/evals"],
};

it("keeps status and browser profiles outside the repository, including dot-prefixed children", () => {
  for (const directory of [".", "profile", "..status"])
    expect(() => assertOutsideRepository(resolve(directory))).toThrow();
  expect(() => assertOutsideRepository(resolve("../status"))).not.toThrow();
});

it("requires exactly the expected successfully imported original URLs", () => {
  const actual = topic.sourceUrls.map((url) => ({ url, ready: true }));
  expect(() => assertExpectedSources(actual, topic.sourceUrls)).not.toThrow();
  for (const sources of [
    actual.slice(1),
    [{ url: "https://wrong.example", ready: true }, actual[1]],
    [actual[0], actual[0]],
    [actual[0], { ...actual[1], ready: false }],
  ])
    expect(() => assertExpectedSources(sources, topic.sourceUrls)).toThrow();
});

it("waits for a durable notebook identity instead of recording the creating route", () => {
  expect(
    isNotebookUrl(
      "https://notebook.google.com/notebook/ae71e380-e0d3-4e72-b918-7d0640e22297",
    ),
  ).toBe(true);
  expect(isNotebookUrl("https://notebook.google.com/notebook/creating")).toBe(
    false,
  );
  expect(
    isNotebookUrl(
      "https://other.example/notebook/ae71e380-e0d3-4e72-b918-7d0640e22297",
    ),
  ).toBe(false);
});

it("selects only separate textual primary sources without executing the catalog", () => {
  const source = `import { unused } from "./not-executed";
    export const topics: Topics = { items: [{ id: "skills", title: "Agent Skills", sources: [
      { url: "https://example.org/skills", origin: "primary", mediaType: "text" },
      { url: "https://example.org/skills", origin: "primary", mediaType: "text" },
      { url: "https://example.org/video", origin: "primary", mediaType: "video" },
      { url: "https://example.org/audio", origin: "secondary", mediaType: "audio" },
      { url: "https://example.org/evals", origin: "primary", mediaType: "text" }
    ] }], paths: unused };`;
  expect(readTopicPlans(source)).toEqual([topic]);
  expect(readTopicPlans(source, { allSources: true })[0].sourceUrls).toEqual([
    "https://example.org/skills",
    "https://example.org/video",
    "https://example.org/audio",
    "https://example.org/evals",
  ]);
});

it("builds the agreed name, audience, calendar period and stable job identity", () => {
  const job = buildPodcastJob(topic, "2026-10-21");
  expect(job.notebookName).toBe("Agent Skills - Primärquellen");
  expect(job.prompt).toContain(
    "Senior Java/Web-Entwickler mit KI im Oktober 2026",
  );
  expect(job.prompt).toContain("35 Minuten");
  expect(job.prompt).toContain("2026-04-21");
  expect(job.prompt).toContain("2026-10-21");
  expect(job.key).toBe(
    buildPodcastJob(
      { ...topic, sourceUrls: [...topic.sourceUrls].reverse() },
      "2026-10-22",
    ).key,
  );
  expect(job.key).not.toBe(buildPodcastJob(topic, "2026-11-21").key);
  expect(buildPodcastJob(topic, "2025-08-31").prompt).toContain("2025-02-28");
});

it("reads the generated title, real duration and source count instead of the requested length", () => {
  expect(
    readPublicAudio(
      "Agent Skills und Evals für verlässlichen Code",
      "Basierend auf 8 Quellen\n00:00 / 22:33",
    ),
  ).toEqual({
    title: "Agent Skills und Evals für verlässlichen Code",
    duration: "22:33",
    sourceCount: 8,
  });
  expect(() =>
    readPublicAudio("Agent Skills", "Audio-Zusammenfassung wird erstellt…"),
  ).toThrow();
  expect(() =>
    readPublicAudio("Agent Skills", "Basierend auf 8 Quellen\n00:00 / 00:00"),
  ).toThrow();
});

it("stops offering a podcast only when its audio URL is published under the matching topic", () => {
  const jobs = [
    {
      topicId: "skills",
      status: "ready",
      audio: { url: "https://example.org/audio" },
    },
    {
      topicId: "java",
      status: "ready",
      audio: { url: "https://example.org/audio" },
    },
    { topicId: "skills", status: "generating" },
  ];
  reconcilePublishedJobs(jobs, [
    { id: "skills", sourceUrls: ["https://example.org/audio"] },
  ]);
  expect(jobs.map((job) => job.status)).toEqual([
    "integrated",
    "ready",
    "generating",
  ]);
});

describe("responsive NotebookLM controls", () => {
  let browser;
  beforeAll(async () => {
    browser = await chromium.launch({ channel: "chrome", headless: true });
  });
  afterAll(async () => {
    await browser?.close();
  });

  it("resumes existing sources without importing them again when checkbox labels differ", async () => {
    const page = await browser.newPage();
    page.setDefaultTimeout(500);
    try {
      await page.setContent(`<button onclick="window.imports=(window.imports||0)+1">Quelle hinzufügen</button>
        <input type="checkbox" checked aria-label="Alle Quellen auswählen">
        ${topic.sourceUrls.map((url, index) => `<div class="single-source-container"><button class="source-stretched-button">Quelle ${index}</button><img class="favicon-icon" src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}"><input type="checkbox" checked aria-label="Quelle ${index}"></div>`).join("")}`);
      const job = buildPodcastJob(topic, "2026-10-21");
      expect(await importSources(page, job, () => {})).toBe(true);
      expect(await page.evaluate(() => window.imports ?? 0)).toBe(0);
      await page
        .locator("img.favicon-icon")
        .first()
        .evaluate((image) => {
          image.src =
            "https://www.google.com/s2/favicons?domain=https://wrong.example";
        });
      await expect(importSources(page, job, () => {})).rejects.toThrow(
        /Original-URLs/,
      );
      expect(await page.evaluate(() => window.imports ?? 0)).toBe(0);
    } finally {
      await page.close();
    }
  });

  it.each([
    { initial: "restricted", ignoreSave: false },
    { initial: "link", ignoreSave: false },
    { initial: "restricted", ignoreSave: true },
  ])(
    "rereads persisted access with stale local sharing state: %j",
    async ({ initial, ignoreSave }) => {
      const page = await browser.newPage();
      page.setDefaultTimeout(500);
      try {
        await page.setContent(`<button onclick="document.querySelector('dialog').showModal();document.querySelector('[role=combobox]').setAttribute('aria-label',window.access==='link'?'Nutzer mit einem Link':'Eingeschränkt')">Notebook freigeben</button>
        <dialog><button role="combobox" aria-label="Eingeschränkt" onclick="document.querySelector('[role=option]').hidden=false">Zugriff</button><button role="option" hidden onclick="window.selected='link';document.querySelector('[role=combobox]').setAttribute('aria-label','Nutzer mit einem Link');this.hidden=true">Linkzugriff</button>
        <label><input type="checkbox" aria-label="check_box" checked>Kopieren</label>
        <button onclick="window.access=window.selected;window.saved=(window.saved||0)+1;document.querySelector('dialog').close()">Speichern</button><button onclick="document.querySelector('dialog').close()">Fertig</button></dialog>`);
        const job = { shared: true };
        await page.evaluate(
          ({ initial, ignoreSave }) => {
            window.access = initial;
            if (initial === "link")
              document.querySelector("input").checked = false;
            if (ignoreSave)
              document.querySelector(
                'button[onclick*="window.access=window.selected"]',
              ).onclick = () => document.querySelector("dialog").close();
          },
          { initial, ignoreSave },
        );
        if (ignoreSave)
          await expect(shareNotebook(page, job, () => {})).rejects.toThrow(
            /Linkfreigabe/,
          );
        else {
          await shareNotebook(page, job, () => {});
          expect(await page.evaluate(() => window.access)).toBe("link");
          expect(await page.evaluate(() => window.saved ?? 0)).toBe(
            initial === "link" ? 0 : 1,
          );
        }
        expect(await page.getByRole("dialog").isVisible()).toBe(false);
      } finally {
        await page.close();
      }
    },
  );

  for (const viewport of [
    { width: 430, height: 700 },
    { width: 800, height: 650 },
    { width: 1600, height: 800 },
  ]) {
    it(`submits the configured audio once at ${viewport.width} × ${viewport.height}`, async () => {
      const page = await browser.newPage({ viewport });
      try {
        await page.setContent(`
          <button id="studio" onclick="document.querySelector('section').hidden=false">Studio</button>
          <section hidden>
            <button onclick="document.querySelector('dialog').showModal()">Audio-Zusammenfassung</button>
          </section>
          <dialog>
            <label><input type="radio" name="format" checked>Detaillierte Analyse</label>
            <label><input type="radio" name="length" checked>Standard</label>
            <label>Sprache auswählen<select aria-label="Sprache auswählen"><option>Deutsch</option></select></label>
            <button>2 Quellen</button>
            <label>Worauf sollen sich die KI‑Moderatoren in dieser Folge konzentrieren?<textarea></textarea></label>
            <button onclick="window.submissions=(window.submissions||0)+1;window.submittedPrompt=document.querySelector('textarea').value;document.querySelector('dialog').close();document.querySelector('section').innerHTML='<button disabled>Audio-Zusammenfassung wird erstellt… Kommen Sie in ein paar Minuten wieder</button>'">Jetzt generieren</button>
          </dialog>
          <style>@media (min-width: 1000px) {#studio {display:none}}</style>
          <script>if(innerWidth>=1000)document.querySelector('section').hidden=false;</script>
        `);
        const job = buildPodcastJob(topic, "2026-10-21");
        const checkpoints = [];
        await requestAudio(page, job, () => checkpoints.push(job.status));
        expect(job.status).toBe("generating");
        expect(checkpoints).toContain("submitting");
        expect(await page.evaluate(() => window.submittedPrompt)).toBe(
          job.prompt,
        );
        await requestAudio(page, job, () => {});
        expect(await page.evaluate(() => window.submissions)).toBe(1);
      } finally {
        await page.close();
      }
    });
  }
});

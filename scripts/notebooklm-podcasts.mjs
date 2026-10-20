import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  openSync,
  closeSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { parseSync } from "@swc/core";
import { chromium } from "@playwright/test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const focusLabel =
  "Worauf sollen sich die KI‑Moderatoren in dieser Folge konzentrieren?";
const pendingAudio = /Audio-Zusammenfassung wird erstellt/;

export function assertOutsideRepository(directory) {
  const path = resolve(directory);
  const fromRoot = relative(root, path);
  if (
    !isAbsolute(fromRoot) &&
    fromRoot !== ".." &&
    !fromRoot.startsWith(`..${sep}`)
  )
    throw new Error(
      "Status und Browserprofil müssen außerhalb des Repositorys liegen.",
    );
  return path;
}

export function assertExpectedSources(actual, expected) {
  const urls = actual.map((source) => source.url);
  if (
    actual.length !== expected.length ||
    new Set(urls).size !== expected.length ||
    actual.some((source) => !source.ready) ||
    expected.some((url) => !urls.includes(url))
  )
    throw new Error(
      "Importierte Original-URLs oder Importstatus stimmen nicht mit dem Auftrag überein.",
    );
}

export async function readImportedSources(page) {
  return page.locator(".single-source-container").evaluateAll((rows) =>
    rows.map((row) => {
      const image = row.querySelector("img.favicon-icon");
      const checkbox = row.querySelector('input[type="checkbox"]');
      const url = image ? new URL(image.src).searchParams.get("domain") : null;
      return {
        url,
        ready: Boolean(
          url &&
          checkbox?.checked &&
          !checkbox.disabled &&
          !row.querySelector('[role="progressbar"]'),
        ),
      };
    }),
  );
}

export function isNotebookUrl(value) {
  return /^https:\/\/notebook\.google\.com\/notebook\/[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}$/i.test(
    value ?? "",
  );
}

export function reconcilePublishedJobs(jobs, publishedTopics) {
  for (const job of jobs) {
    if (
      job.audio &&
      publishedTopics.some(
        (topic) =>
          topic.id === job.topicId && topic.sourceUrls.includes(job.audio.url),
      )
    )
      job.status = "integrated";
  }
}

export function readPublicAudio(title, text) {
  const duration = /00:00\s*\/\s*(\d+(?::[0-5]\d){1,2})/.exec(text);
  const sources = /Basierend auf\s+(\d+)\s+Quelle[n]?/.exec(text);
  if (
    !title.trim() ||
    !duration ||
    !duration[1].split(":").some((part) => Number(part) > 0) ||
    !sources
  )
    throw new Error(
      "Keine fertige öffentliche Audio-Ausgabe mit Titel, Laufzeit und Quellenanzahl.",
    );
  return {
    title: title.trim(),
    duration: duration[1],
    sourceCount: Number(sources[1]),
  };
}

function field(node, name) {
  return node?.properties?.find(
    (property) => (property.key?.value ?? property.key?.name) === name,
  )?.value;
}

export function readTopicPlans(source, { allSources = false } = {}) {
  const ast = parseSync(source, { syntax: "typescript" });
  const declaration = ast.body
    .flatMap((statement) => statement.declaration?.declarations ?? [])
    .find((item) => item.id?.value === "topics");
  const items = field(declaration?.init, "items");
  if (items?.type !== "ArrayExpression")
    throw new Error("Themenkatalog enthält keine statische Themenliste.");
  return items.elements.map(({ expression }) => {
    const sources = field(expression, "sources");
    if (sources?.type !== "ArrayExpression")
      throw new Error("Statische Themenquellen fehlen.");
    return {
      id: field(expression, "id")?.value,
      title: field(expression, "title")?.value,
      sourceUrls: [
        ...new Set(
          sources.elements
            .map((element) => element.expression)
            .filter(
              (item) =>
                allSources ||
                (field(item, "origin")?.value === "primary" &&
                  field(item, "mediaType")?.value === "text"),
            )
            .map((item) => field(item, "url")?.value),
        ),
      ],
    };
  });
}

export function buildPodcastJob(topic, date) {
  const end = new Date(`${date}T12:00:00Z`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !Number.isFinite(end.getTime()) ||
    end.toISOString().slice(0, 10) !== date
  )
    throw new Error("Ungültiger Stichtag.");
  if (
    !topic.id ||
    !topic.title ||
    !topic.sourceUrls.length ||
    topic.sourceUrls.some(
      (url) => !URL.canParse(url) || new URL(url).protocol !== "https:",
    )
  )
    throw new Error("Thema benötigt geprüfte textuelle HTTPS-Primärquellen.");
  const start = new Date(end);
  start.setUTCDate(1);
  start.setUTCMonth(start.getUTCMonth() - 6);
  const lastDay = new Date(
    Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 0),
  ).getUTCDate();
  start.setUTCDate(Math.min(end.getUTCDate(), lastDay));
  const month = new Intl.DateTimeFormat("de-DE", {
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(end);
  const key = createHash("sha256")
    .update(
      JSON.stringify([
        topic.id,
        date.slice(0, 7),
        [...topic.sourceUrls].sort((left, right) => left.localeCompare(right)),
      ]),
    )
    .digest("hex");
  return {
    key,
    topicId: topic.id,
    notebookName: `${topic.title} - Primärquellen`,
    sourceUrls: topic.sourceUrls,
    date,
    status: "planned",
    prompt: `Erstellt einen ausführlichen deutschsprachigen Podcast zum Thema ${topic.title}. Adressat: Senior Java/Web-Entwickler mit KI im ${month}. Wunschdauer: ungefähr 35 Minuten. Verbindet die wesentlichen Inhalte aller ${topic.sourceUrls.length} ausgewählten Primärquellen zu einer zusammenhängenden, fachlich gehaltvollen Diskussion. Behandelt passende Arbeitsweisen und Beispiele für Java-/Webentwicklung, Entscheidungen, Grenzen und begründete Gegenpositionen. Ordnet belegte Entwicklungen vom ${start.toISOString().slice(0, 10)} bis zum ${date} ein und nutzt passende zeitlose Grundlagen. Beschränkt Tatsachenbehauptungen auf die Quellen; kennzeichnet persönliche Positionen als solche und erfindet keine Entwicklungen. Keine pauschalen Ansagen darüber, dass aktuelle Neuigkeiten fehlen.`,
  };
}

export async function openPanel(page, name) {
  const button = page.getByRole("button", { name, exact: true });
  if (await button.isVisible()) await button.click();
  const control =
    name === "Sources"
      ? /^Quelle hinzufügen$/
      : /^Audio-Zusammenfassung(?:$| wird erstellt)/;
  await page.getByRole("button", { name: control }).first().waitFor();
}

export async function requestAudio(page, job, save) {
  await openPanel(page, "Studio");
  if (await page.getByRole("button", { name: pendingAudio }).count()) {
    job.status = "generating";
    await save();
    return;
  }
  if (["submitting", "generating", "ready", "integrated"].includes(job.status))
    return;
  await page
    .getByRole("button", { name: "Audio-Zusammenfassung", exact: true })
    .click();
  const dialog = page.getByRole("dialog");
  const detailed = dialog.getByRole("radio", { name: /^Detaillierte Analyse/ });
  if (!(await detailed.isChecked()))
    await dialog.getByText("Detaillierte Analyse", { exact: true }).click();
  const standard = dialog.getByRole("radio", { name: "Standard", exact: true });
  if (!(await standard.isChecked())) await standard.press("Space");
  const language = dialog.getByRole("combobox", {
    name: "Sprache auswählen",
    exact: true,
  });
  const languageText = await language.innerText();
  if (!languageText.includes("Deutsch"))
    throw new Error("Vor der Erzeugung Deutsch als Sprache auswählen.");
  await dialog
    .getByRole("button", {
      name: new RegExp(`^${job.sourceUrls.length}\\s+Quelle[n]?$`),
    })
    .waitFor();
  await dialog
    .getByRole("textbox", { name: focusLabel, exact: true })
    .fill(job.prompt);
  job.status = "submitting";
  await save();
  await dialog
    .getByRole("button", { name: "Jetzt generieren", exact: true })
    .click();
  await page.getByRole("button", { name: pendingAudio }).waitFor();
  job.status = "generating";
  await save();
}

async function createNotebook(page, job, save) {
  if (
    (job.notebookUrl && !isNotebookUrl(job.notebookUrl)) ||
    (!job.notebookUrl && job.status === "creating")
  ) {
    await page.goto("https://notebook.google.com/");
    const escapedName = job.notebookName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const existing = page.getByRole("link", {
      name: new RegExp(`^${escapedName}(?:\\s|$)`),
    });
    await existing.first().waitFor({ timeout: 12_000 });
    if ((await existing.count()) !== 1)
      throw new Error(
        "Notebook-Zuordnung ist unklar; vorhandenes Notebook manuell zuordnen.",
      );
    const url = new URL(await existing.getAttribute("href"), page.url()).href;
    if (!isNotebookUrl(url))
      throw new Error("Vorhandenes Notebook hat noch keine dauerhafte ID.");
    job.notebookUrl = url;
    await save();
  }
  if (job.notebookUrl) {
    await page.goto(job.notebookUrl);
  } else {
    await page.goto("https://notebook.google.com/");
    job.status = "creating";
    await save();
    await page
      .getByRole("button", { name: "Neues Notebook", exact: true })
      .click();
    await page.waitForURL((url) => isNotebookUrl(url.href), {
      timeout: 60_000,
    });
    job.notebookUrl = page.url();
    await save();
  }
  await page
    .getByRole("textbox", { name: "", exact: true, includeHidden: true })
    .first()
    .waitFor({ timeout: 60_000 });
  const infoClose = page.getByRole("button", {
    name: "Dialogfeld schließen",
    exact: true,
  });
  if (await infoClose.isVisible()) await infoClose.click();
  const sourceDialog = page.getByRole("dialog");
  if (await sourceDialog.isVisible())
    await sourceDialog
      .getByRole("button", { name: "Schließen", exact: true })
      .click();
  const title = page.getByRole("textbox", { name: "", exact: true });
  await title.fill(job.notebookName);
  await page.keyboard.press("Tab");
}

async function collectAudio(page, job, save) {
  await openPanel(page, "Studio");
  const cards = page.getByRole("button", {
    name: /\d+:\d{2}\s*·\s*Detaillierte Analyse/,
  });
  const pending = page.getByRole("button", { name: pendingAudio });
  await cards
    .or(pending)
    .first()
    .waitFor({ timeout: 3000 })
    .catch(() => {});
  if (await pending.count()) {
    job.status = "generating";
    await save();
    return false;
  }
  if ((await cards.count()) !== 1) return false;
  await openPanel(page, "Sources");
  assertExpectedSources(await readImportedSources(page), job.sourceUrls);
  await openPanel(page, "Studio");
  let details;
  await page.getByRole("button", { name: "Mehr", exact: true }).click();
  const opened = page.context().waitForEvent("page", { timeout: 12_000 });
  await page
    .getByRole("menuitem", { name: "In neuem Tab öffnen", exact: true })
    .click();
  const artifact = await opened;
  try {
    await artifact.waitForLoadState("domcontentloaded");
    const url = artifact.url();
    if (
      !/^https:\/\/notebook\.google\.com\/notebook\/[\w-]+\/artifact\/[\w-]+$/.test(
        url,
      )
    )
      throw new Error("Kein eindeutiger Audio-Artefaktlink.");
    const anonymous = await page
      .context()
      .browser()
      .newContext({ locale: "de-DE" });
    try {
      const publicPage = await anonymous.newPage();
      await publicPage.goto(url);
      await publicPage
        .getByRole("button", { name: "Audio wiedergeben", exact: true })
        .waitFor({ timeout: 12_000 });
      const title = await publicPage
        .getByRole("heading", { level: 1 })
        .innerText();
      await publicPage.waitForFunction(
        () => {
          const total = /00:00\s*\/\s*(\d+(?::[0-5]\d){1,2})/.exec(
            document.body.innerText,
          )?.[1];
          return total?.split(":").some((part) => Number(part) > 0);
        },
        null,
        { timeout: 12_000 },
      );
      details = readPublicAudio(
        title,
        await publicPage.locator("body").innerText(),
      );
      if (details.sourceCount !== job.sourceUrls.length)
        throw new Error(
          "Audio verwendet eine andere Quellenanzahl als beauftragt.",
        );
    } finally {
      await anonymous.close();
    }
    job.audio = {
      title: details.title,
      url,
      duration: details.duration,
      type: "audio-summary",
      mediaType: "audio",
      origin: "secondary",
      language: "de",
      checkedAt: new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Europe/Berlin",
      }).format(new Date()),
    };
    job.status = "ready";
    await save();
    return true;
  } finally {
    await artifact.close();
  }
}

export async function importSources(page, job, save) {
  await openPanel(page, "Sources");
  const selected = page.getByRole("checkbox");
  const empty = page.getByText("Gespeicherte Quellen werden hier angezeigt", {
    exact: true,
  });
  if (!job.sourcesSubmitted && (await empty.isVisible())) {
    await page
      .getByRole("button", { name: "Quelle hinzufügen", exact: true })
      .first()
      .click();
    await page.getByRole("button", { name: "Websites", exact: true }).click();
    await page
      .getByRole("textbox", { name: "URLs eingeben", exact: true })
      .fill(job.sourceUrls.join("\n"));
    job.sourcesSubmitted = true;
    job.status = "importing";
    await save();
    await page.getByRole("button", { name: "Einfügen", exact: true }).click();
    await page.getByRole("dialog").waitFor({ state: "hidden" });
  }
  const deadline = Date.now() + 15_000;
  while (Date.now() < deadline) {
    if ((await selected.count()) > job.sourceUrls.length + 1)
      throw new Error(
        "Mehr Quellen als vorgesehen; Bestand vor der Erzeugung manuell prüfen.",
      );
    if ((await selected.count()) === job.sourceUrls.length + 1) {
      if (
        (await selected.filter({ visible: true }).count()) !==
        job.sourceUrls.length + 1
      )
        throw new Error("Quellenauswahl nicht vollständig sichtbar.");
      const checked = page.getByRole("checkbox", { checked: true });
      if ((await checked.count()) !== job.sourceUrls.length + 1)
        throw new Error("Nicht alle vorgesehenen Quellen sind ausgewählt.");
      assertExpectedSources(await readImportedSources(page), job.sourceUrls);
      job.status = "imported";
      await save();
      return true;
    }
    await page.waitForTimeout(500);
  }
  job.status = "importing";
  await save();
  return false;
}

async function openSharing(page) {
  await page
    .getByRole("button", { name: "Notebook freigeben", exact: true })
    .click();
  const dialog = page.getByRole("dialog").last();
  await dialog
    .getByRole("combobox", { name: /^(Eingeschränkt|Nutzer mit einem Link)$/ })
    .waitFor();
  return dialog;
}

async function readNotebookSharing(dialog) {
  return {
    linkAccess:
      (await dialog
        .getByRole("combobox", {
          name: /^(Eingeschränkt|Nutzer mit einem Link)$/,
        })
        .getAttribute("aria-label")) === "Nutzer mit einem Link",
    copying: await dialog
      .getByRole("checkbox", { name: /^check_box/ })
      .isChecked(),
  };
}

async function closeSharing(page, dialog) {
  const done = dialog.getByRole("button", { name: /^(Fertig|Schließen)$/ });
  if (await done.isVisible()) await done.click();
  else await page.keyboard.press("Escape");
  await dialog.waitFor({ state: "hidden" });
}

export async function shareNotebook(page, job, save) {
  let dialog = await openSharing(page);
  const current = await readNotebookSharing(dialog);
  if (!current.linkAccess) {
    await dialog
      .getByRole("combobox", { name: "Eingeschränkt", exact: true })
      .click();
    await page
      .getByRole("option", { name: "Linkzugriff", exact: true })
      .click();
  }
  const copying = dialog.getByRole("checkbox", {
    name: /^check_box/,
  });
  if ((await copying.isVisible()) && (await copying.isChecked()))
    await copying.uncheck();
  if (!current.linkAccess || current.copying) {
    await dialog
      .getByRole("button", { name: "Speichern", exact: true })
      .click();
    await dialog.waitFor({ state: "hidden" });
    dialog = await openSharing(page);
  }
  const persisted = await readNotebookSharing(dialog);
  await closeSharing(page, dialog);
  if (!persisted.linkAccess || persisted.copying)
    throw new Error("Gespeicherte Linkfreigabe konnte nicht bestätigt werden.");
  job.shared = true;
  await save();
}

function localState(directory) {
  const localDirectory = assertOutsideRepository(directory);
  mkdirSync(localDirectory, { recursive: true });
  const file = join(localDirectory, "jobs.json");
  const state = existsSync(file)
    ? JSON.parse(readFileSync(file, "utf8"))
    : { version: 1, jobs: [] };
  if (state.version !== 1 || !Array.isArray(state.jobs))
    throw new Error(
      "Lokaler Arbeitsstatus ist ungültig und wird nicht überschrieben.",
    );
  return {
    directory: localDirectory,
    state,
    save() {
      const temporary = `${file}.${process.pid}.tmp`;
      writeFileSync(temporary, `${JSON.stringify(state, null, 2)}\n`, {
        mode: 0o600,
      });
      renameSync(temporary, file);
    },
  };
}

async function main(argv) {
  const { values, positionals } = parseArgs({
    args: argv,
    allowPositionals: true,
    options: {
      topic: { type: "string", multiple: true },
      max: { type: "string", default: "1" },
      "state-dir": { type: "string" },
      profile: { type: "string" },
      "notebook-url": { type: "string" },
      viewport: { type: "string", default: "1280x800" },
    },
  });
  const command = positionals[0] ?? "help";
  if (!["plan", "start", "check", "login"].includes(command)) {
    console.log(
      "node scripts/notebooklm-podcasts.mjs <plan|start|check|login> --topic ID [--topic ID] [--max 1] [--viewport 800x650]",
    );
    return;
  }
  const source = readFileSync(
    join(root, "src/verticals/topics/topics.ts"),
    "utf8",
  );
  const plans = readTopicPlans(source);
  const publishedTopics = readTopicPlans(source, { allSources: true });
  const chosen =
    values.topic?.map((id) => {
      const plan = plans.find((topic) => topic.id === id);
      if (!plan) throw new Error(`Unbekannte Themen-ID: ${id}`);
      return plan;
    }) ?? [];
  if (command === "plan") {
    console.log(
      JSON.stringify(
        (chosen.length ? chosen : plans).map((topic) => ({
          id: topic.id,
          title: topic.title,
          sources: topic.sourceUrls.length,
        })),
        null,
        2,
      ),
    );
    return;
  }
  if (command === "start" && !chosen.length)
    throw new Error(
      "Neue Aufträge benötigen mindestens eine ausdrückliche --topic-Auswahl.",
    );
  const max = Number(values.max);
  if (!Number.isSafeInteger(max) || max < 1)
    throw new Error("--max muss eine positive ganze Zahl sein.");
  const viewport = /^(\d+)x(\d+)$/.exec(values.viewport);
  if (!viewport || Number(viewport[1]) < 360 || Number(viewport[2]) < 400)
    throw new Error("Viewport mindestens 360x400 angeben.");
  const local = localState(
    values["state-dir"] ??
      join(
        process.env.LOCALAPPDATA ?? homedir(),
        "Lernluchs",
        "notebooklm-podcasts",
      ),
  );
  const lockFile = join(local.directory, "writer.lock");
  const lock = openSync(lockFile, "wx");
  let context;
  let page;
  try {
    local.state.profile = assertOutsideRepository(
      values.profile ??
        local.state.profile ??
        join(local.directory, "chrome-profile"),
    );
    reconcilePublishedJobs(local.state.jobs, publishedTopics);
    local.save();
    context = await chromium.launchPersistentContext(local.state.profile, {
      channel: "chrome",
      headless: false,
      viewport: { width: Number(viewport[1]), height: Number(viewport[2]) },
    });
    page = context.pages()[0] ?? (await context.newPage());
    page.setDefaultTimeout(12_000);
    if (command === "login") {
      await page.goto("https://notebook.google.com/");
      console.log(
        "Im Chrome-Fenster selbst anmelden und es anschließend schließen. Das lokale Profil bleibt erhalten.",
      );
      await context.waitForEvent("close", { timeout: 0 });
      return;
    }
    const date = new Intl.DateTimeFormat("sv-SE", {
      timeZone: "Europe/Berlin",
    }).format(new Date());
    const jobs =
      command === "check"
        ? local.state.jobs.filter(
            (job) =>
              job.notebookUrl &&
              (!chosen.length ||
                chosen.some((topic) => topic.id === job.topicId)),
          )
        : chosen.map((topic) => {
            const next = buildPodcastJob(topic, date);
            const existing = local.state.jobs.find(
              (job) => job.key === next.key,
            );
            if (existing && !values["notebook-url"]) return existing;
            if (values["notebook-url"]) {
              if (chosen.length !== 1 || !isNotebookUrl(values["notebook-url"]))
                throw new Error(
                  "Eine gültige vorhandene Notebook-URL benötigt genau ein Thema.",
                );
              (existing ?? next).notebookUrl = values["notebook-url"];
            }
            if (existing) {
              local.save();
              return existing;
            }
            local.state.jobs.push(next);
            local.save();
            return next;
          });
    for (const job of jobs.slice(0, command === "start" ? max : jobs.length)) {
      if (job.status === "integrated") {
        console.log(`${job.topicId}: integrated`);
        continue;
      }
      await createNotebook(page, job, () => local.save());
      await openPanel(page, "Studio");
      const ready = await collectAudio(page, job, () => local.save());
      if (
        !ready &&
        command === "start" &&
        !["generating", "submitting", "ready", "integrated"].includes(
          job.status,
        )
      ) {
        if (await importSources(page, job, () => local.save())) {
          await shareNotebook(page, job, () => local.save());
          await requestAudio(page, job, () => local.save());
        }
      }
      reconcilePublishedJobs(local.state.jobs, publishedTopics);
      local.save();
      writeFileSync(
        join(local.directory, "last-page.yml"),
        await page.locator("body").ariaSnapshot(),
        { mode: 0o600 },
      );
      console.log(`${job.topicId}: ${job.status}`);
    }
    const ready = local.state.jobs
      .filter((job) => job.status === "ready" && job.audio)
      .map((job) => ({ topicId: job.topicId, source: job.audio }));
    writeFileSync(
      join(local.directory, "ready-podcasts.json"),
      `${JSON.stringify(ready, null, 2)}\n`,
      { mode: 0o600 },
    );
  } catch (error) {
    if (page?.url().startsWith("https://notebook.google.com/")) {
      const snapshot = await page
        .locator("body")
        .ariaSnapshot()
        .catch(() => "");
      writeFileSync(join(local.directory, "last-page.yml"), snapshot, {
        mode: 0o600,
      });
    }
    writeFileSync(
      join(local.directory, "last-error.txt"),
      String(error.stack ?? error),
      { mode: 0o600 },
    );
    throw new Error(
      `Verarbeitung angehalten. Details nur lokal: ${join(local.directory, "last-error.txt")}`,
    );
  } finally {
    await context?.close().catch(() => {});
    closeSync(lock);
    unlinkSync(lockFile);
  }
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

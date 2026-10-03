import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks/questionCatalog";
import { congratulations } from "../../../src/verticals/learning-checks/congratulations";
import { topics } from "../../../src/verticals/topics/topics";

const foundationIds = [
  "human-ai-responsibility",
  "problem-understanding-and-change-boundaries",
  "agents-md",
  "ears-requirements",
  "research-plan-tasks",
  "spec-driven-development-openspec",
];

function topicTitle(id: string) {
  const topic = topics.items.find((item) => item.id === id);
  if (!topic) throw new Error(`Missing topic: ${id}`);
  return topic.title;
}

// A broken pool must not prevent the remaining data sets from being exercised.
async function forPools(ids: string[], check: (id: string) => Promise<void>) {
  const failures: string[] = [];
  for (const id of ids) {
    try {
      await test.step(`Pool: ${id}`, () => check(id));
    } catch (error) {
      failures.push(
        `${id}: ${error instanceof Error ? error.stack : String(error)}`,
      );
    }
  }
  expect(failures, "Failures by question pool").toEqual([]);
}

async function start(page: Page, id: string) {
  await page.goto("/");
  await expect(page.getByRole("article")).toHaveCount(0);
  await page
    .getByRole("button", { name: `Fragen starten: ${topicTitle(id)}` })
    .click();
  await expect(
    page.getByRole("heading", { name: `${topicTitle(id)}: Fragen` }),
  ).toBeVisible();
  await expect(page.getByText("Frage 1 von 5")).toBeVisible();
}

async function answer(page: Page, id: string, correct: boolean) {
  const prompt = await page.getByRole("heading", { level: 2 }).textContent();
  const question = questionsForTopic(id)?.find(
    (candidate) => candidate.prompt === prompt,
  );
  if (!question) throw new Error(`${id}: unknown question ${prompt}`);
  const option = question.options.find(
    (candidate) => candidate.correct === correct,
  );
  if (!option)
    throw new Error(`${id}/${question.id}: missing answer, correct=${correct}`);
  const buttons = page
    .getByRole("group", { name: "Antwortoptionen" })
    .getByRole("button");
  expect(
    await buttons.count(),
    `${id}/${question.id}: option count`,
  ).toBeGreaterThanOrEqual(3);
  expect(
    await buttons.count(),
    `${id}/${question.id}: option count`,
  ).toBeLessThanOrEqual(5);
  await buttons.getByText(option.text, { exact: true }).click();
  return { question, option };
}

async function answerRun(page: Page, id: string, wrongFirst = false) {
  const answered = [];
  const seen = new Set<string>();
  for (let number = 1; number <= 5; number += 1) {
    await expect(page.getByText(`Frage ${number} von 5`)).toBeVisible();
    await expect(page.getByRole("article")).toHaveCount(0);
    await expect(page.getByRole("status")).toHaveCount(0);
    const selected = await answer(page, id, !(wrongFirst && number === 1));
    expect(
      seen.has(selected.question.id),
      `${id}/${selected.question.id}: repeated question`,
    ).toBe(false);
    seen.add(selected.question.id);
    answered.push(selected);
  }
  return answered;
}

test("each published topic starts its corresponding check using the keyboard", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await forPools(availableLearningCheckTopicIds, async (id) => {
    const title = topicTitle(id);
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /^Lernluchs(?: KI)? [–-] Themen$/,
      }),
    ).toBeVisible();
    const button = page.getByRole("button", {
      name: `Fragen starten: ${title}`,
    });
    await expect(button).toHaveAttribute("title", `Fragen starten: ${title}`);
    await expect(button.locator("svg[aria-hidden='true']")).toBeVisible();
    await button.focus();
    await page.keyboard.press("Enter");
    await expect(
      page.getByRole("heading", { level: 1, name: "Lernluchs" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: `${title}: Fragen` }),
    ).toBeVisible();
    await expect(page.getByText("Frage 1 von 5")).toBeVisible();
  });
});

test("quiz icon buttons align with topic buttons without stretching the list row", async ({
  page,
}) => {
  await page.goto("/");
  const title = topicTitle("human-ai-responsibility");
  const topicBox = await page
    .getByRole("button", { name: title, exact: true })
    .boundingBox();
  const quizBox = await page
    .getByRole("button", { name: `Fragen starten: ${title}` })
    .boundingBox();
  expect(topicBox).not.toBeNull();
  expect(quizBox).not.toBeNull();
  expect(Math.abs(quizBox!.height - topicBox!.height)).toBeLessThan(1);
  expect(Math.abs(quizBox!.y - topicBox!.y)).toBeLessThan(1);
  expect(
    Math.abs(quizBox!.y + quizBox!.height - (topicBox!.y + topicBox!.height)),
  ).toBeLessThan(1);
});

test("five correct answers produce a passed summary with explanations and sources", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await forPools(
    [
      "human-ai-responsibility",
      "module-boundaries-and-public-interfaces",
      "domain-language-and-complexity",
      "parallel-agent-task-boundaries",
      "open-knowledge-format",
    ],
    async (id) => {
      await start(page, id);
      const answered = await answerRun(page, id);
      await expect(
        page.getByRole("heading", { name: "Lerncheck bestanden" }),
      ).toBeVisible();
      const status = page.getByRole("status");
      await expect(status).toHaveCount(1);
      expect(congratulations).toContain(await status.textContent());
      await expect(page.getByRole("listitem")).toHaveCount(5);
      await expect(page.getByText(/^Gewählt:/)).toHaveCount(0);
      const sources = page.getByRole("link", { name: "Quelle öffnen" });
      await expect(sources).toHaveCount(5);
      for (const [index, { option }] of answered.entries()) {
        const row = page.getByRole("listitem").nth(index);
        await expect(
          row.getByText(option.explanation, { exact: false }),
        ).toBeVisible();
        await expect(sources.nth(index)).toHaveAttribute(
          "href",
          option.sourceUrl,
        );
        await expect(sources.nth(index)).toHaveAttribute("target", "_blank");
      }
      if (id === "open-knowledge-format") {
        await expect(sources.first()).toHaveAttribute(
          "href",
          /open-knowledge-format/,
        );
      }
      await page.getByRole("button", { name: "Zur Themenliste" }).click();
      await expect(
        page.getByRole("navigation", { name: "Lernthemen" }),
      ).toBeVisible();
    },
  );
});

test("arbitrary answers complete a sourced check and allow returning to the topics", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await forPools(
    [
      "specialized-subagents-and-ownership",
      "agent-skills-and-commands",
      "context-selection-and-reset",
      "coding-harness-design",
      "ui-design-system-workflow",
    ],
    async (id) => {
      await start(page, id);
      for (let number = 1; number <= 5; number += 1) {
        await expect(page.getByText(`Frage ${number} von 5`)).toBeVisible();
        await page
          .getByRole("group", { name: "Antwortoptionen" })
          .getByRole("button")
          .first()
          .click();
      }
      await expect(page.getByRole("listitem")).toHaveCount(5);
      await expect(
        page.getByRole("link", { name: "Quelle öffnen" }).first(),
      ).toHaveAttribute("href", /^https:\/\//);
      await page.getByRole("button", { name: "Zur Themenliste" }).click();
      await expect(
        page.getByRole("navigation", { name: "Lernthemen" }),
      ).toBeVisible();
    },
  );
});

test("a wrong answer retains both explanations and sources even when the source fails", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await page.context().route("https://**", (route) => route.abort());
  await forPools(
    [
      ...foundationIds,
      "coding-agent-context-and-trust-boundaries",
      "web-xss-and-safe-dom",
    ],
    async (id) => {
      await start(page, id);
      const [wrong] = await answerRun(page, id, true);
      const right = wrong.question.options.find((option) => option.correct)!;
      await expect(
        page.getByRole("heading", { name: "Antworten im Überblick" }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "Lerncheck bestanden" }),
      ).toHaveCount(0);
      await expect(page.getByRole("status")).toHaveCount(0);
      await expect(page.getByText(/^Gewählt:/)).toHaveCount(1);
      await expect(page.getByText(/^Richtig:/)).toHaveCount(5);
      const row = page.getByRole("listitem").first();
      await expect(
        row.getByText(wrong.option.explanation, { exact: false }),
      ).toBeVisible();
      await expect(
        row.getByText(right.explanation, { exact: false }),
      ).toBeVisible();
      const sources = row.getByRole("link", { name: "Quelle öffnen" });
      await expect(sources).toHaveCount(2);
      await expect(sources.first()).toHaveAttribute("href", right.sourceUrl);
      await expect(sources.last()).toHaveAttribute(
        "href",
        wrong.option.sourceUrl,
      );
      const [popup] = await Promise.all([
        page.waitForEvent("popup"),
        sources.last().click(),
      ]);
      await popup.close();
      await expect(
        page.getByRole("heading", { name: "Antworten im Überblick" }),
      ).toBeVisible();
    },
  );
});

test("a completed check can be repeated with five distinct questions and reset status", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await forPools(
    [
      "human-ai-responsibility",
      "focused-git-commits",
      "playwright-for-web-flows",
    ],
    async (id) => {
      await start(page, id);
      await answerRun(page, id);
      await expect(
        page.getByRole("heading", { name: "Lerncheck bestanden" }),
      ).toBeVisible();
      await page.getByRole("button", { name: "Zur Themenliste" }).click();
      await page
        .getByRole("button", { name: `Fragen starten: ${topicTitle(id)}` })
        .click();
      await answerRun(page, id);
      await page.getByRole("button", { name: "Zur Themenliste" }).click();
      await page
        .getByRole("button", { name: `Fragen starten: ${topicTitle(id)}` })
        .click();
      await expect(page.getByText("Frage 1 von 5")).toBeVisible();
      await expect(page.getByRole("status")).toHaveCount(0);
      await page.reload();
      await expect(
        page.getByRole("navigation", { name: "Lernthemen" }),
      ).toBeVisible();
      await page
        .getByRole("button", { name: `Fragen starten: ${topicTitle(id)}` })
        .click();
      await expect(page.getByText("Frage 1 von 5")).toBeVisible();
    },
  );
});

test("cancelling before or after an answer returns to the topic list and discards the run", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await forPools(
    [
      "agents-md",
      "standards-and-constraint-rationale",
      "domain-language-and-complexity",
      "project-documentation-and-checklists",
    ],
    async (id) => {
      for (const answered of [false, true]) {
        await start(page, id);
        if (answered) await answer(page, id, true);
        await page.getByRole("button", { name: "Abbrechen" }).click();
        await expect(
          page.getByRole("navigation", { name: "Lernthemen" }),
        ).toBeVisible();
        await expect(page.getByText("Frage 2 von 5")).toHaveCount(0);
      }
    },
  );
});

test("question and result inherit the editorial surfaces and remain usable", async ({
  page,
}) => {
  const id = "human-ai-responsibility";
  await page.goto("/");
  const pageBackground = await page
    .locator(".topic-stage")
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  await page
    .getByRole("button", { name: `Fragen starten: ${topicTitle(id)}` })
    .click();
  await expect(page.locator(".learning-check-overlay")).toHaveCSS(
    "background-color",
    pageBackground,
  );
  const options = page
    .getByRole("group", { name: "Antwortoptionen" })
    .getByRole("button");
  expect(
    await options
      .first()
      .evaluate((element) => element.getBoundingClientRect().height),
  ).toBeGreaterThanOrEqual(44);
  await options.first().focus();
  await page.keyboard.press("Tab");
  await expect(options.nth(1)).toHaveCSS("outline-style", "solid");
  await answerRun(page, id, true);
  await expect(
    page.getByRole("heading", { name: "Antworten im Überblick" }),
  ).toBeVisible();
  await expect(page.getByText(/^Richtig:/)).toHaveCount(5);
  await expect(page.getByText(/^Gewählt:/)).toHaveCount(1);
  expect(
    await page
      .locator("[style*='color: green'], [style*='color: red']")
      .count(),
  ).toBe(0);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(await page.evaluate(() => window.innerWidth));
});

test("passed result uses the same dark palette and restrained success treatment", async ({
  page,
}) => {
  const id = "human-ai-responsibility";
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  const pageBackground = await page
    .locator(".topic-stage")
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  await page
    .getByRole("button", { name: `Fragen starten: ${topicTitle(id)}` })
    .click();
  await expect(page.locator(".learning-check-overlay")).toHaveCSS(
    "background-color",
    pageBackground,
  );
  await answerRun(page, id);
  const celebration = page.getByRole("region", { name: "Glückwunsch" });
  await expect(celebration).toBeVisible();
  await expect(celebration).toHaveCSS("box-shadow", "none");
  expect(
    await celebration.evaluate(
      (element) => getComputedStyle(element, "::before").content,
    ),
  ).toBe("none");
  await expect(page.getByText("Als gelernt gespeichert.")).toBeVisible();
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(
    page.getByRole("navigation", { name: "Lernthemen" }),
  ).toBeVisible();
});

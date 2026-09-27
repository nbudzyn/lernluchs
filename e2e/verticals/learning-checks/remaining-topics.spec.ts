import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

import { remainingQuestions } from "../../../src/verticals/topics/remainingQuestions";

const titles = {
  "coding-agent-context-and-trust-boundaries":
    "Kontext und Vertrauensgrenzen für Coding-Agenten",
  "protect-secrets-and-sensitive-data-with-ai":
    "Geheimnisse und sensible Daten beim KI-Einsatz schützen",
  "review-and-accept-ai-generated-changes":
    "KI-generierte Änderungen prüfen und übernehmen",
  "focused-git-commits": "Git-Commits klein und nachvollziehbar halten",
};

type TopicId = keyof typeof titles;

async function start(page: Page, id: TopicId) {
  await page.goto("/");
  await page
    .getByRole("button", { name: `Fragen starten: ${titles[id]}` })
    .click();
  await expect(
    page.getByRole("heading", { name: `${titles[id]}: Fragen` }),
  ).toBeVisible();
}

async function answer(page: Page, id: TopicId, correct: boolean) {
  const prompt = await page.getByRole("heading", { level: 2 }).textContent();
  const question = remainingQuestions[id].find(
    (item) => item.prompt === prompt,
  );
  if (!question) throw new Error(`Unknown question in ${id}: ${prompt}`);
  const option = question.options.find(
    (candidate) => candidate.correct === correct,
  );
  if (!option) throw new Error(`Missing answer for ${question.id}`);
  await page
    .getByRole("group", { name: "Antwortoptionen" })
    .getByRole("button", { name: option.text, exact: true })
    .click();
  return { question, option };
}

test("all four remaining topics offer learning checks", async ({ page }) => {
  for (const id of Object.keys(titles) as TopicId[]) {
    await start(page, id);
    await expect(page.getByText("Frage 1 von 5")).toBeVisible();
  }
});

test("a third-path check explains a failed answer", async ({ page }) => {
  const id = "coding-agent-context-and-trust-boundaries";
  await start(page, id);
  const wrong = await answer(page, id, false);
  for (let index = 0; index < 4; index += 1) await answer(page, id, true);
  await expect(
    page.getByRole("heading", { name: "Antworten im Überblick" }),
  ).toBeVisible();
  const result = page.getByRole("listitem").first();
  await expect(result.getByText(wrong.option.explanation)).toBeVisible();
  await expect(
    result.getByText(
      wrong.question.options.find((option) => option.correct)!.explanation,
    ),
  ).toBeVisible();
  await expect(result.getByRole("link", { name: "Quelle öffnen" })).toHaveCount(
    2,
  );
});

test("the Git topic can be passed and repeated", async ({ page }) => {
  const id = "focused-git-commits";
  await start(page, id);
  for (let index = 1; index <= 5; index += 1) {
    await expect(page.getByText(`Frage ${index} von 5`)).toBeVisible();
    await answer(page, id, true);
  }
  await expect(
    page.getByRole("heading", { name: "Lerncheck bestanden" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await page
    .getByRole("button", { name: `Fragen starten: ${titles[id]}` })
    .click();
  await expect(page.getByText("Frage 1 von 5")).toBeVisible();
});

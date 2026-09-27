import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

import { secondPathQuestions } from "../../../src/verticals/learning-checks/secondPathQuestions";

const titles = {
  "module-boundaries-and-public-interfaces":
    "Modulgrenzen und öffentliche Schnittstellen gestalten",
  "tdd-for-domain-behavior": "Fachverhalten mit TDD absichern",
  "archunit-for-java-architecture":
    "Java-Architekturregeln mit ArchUnit prüfen",
  "playwright-for-web-flows": "Webabläufe mit Playwright prüfen",
  "web-xss-and-safe-dom":
    "Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen",
  "dependency-security-assessment":
    "Abhängigkeiten und Sicherheitslücken risikobasiert bewerten",
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
  const question = secondPathQuestions[id].find(
    (candidate) => candidate.prompt === prompt,
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

test("all six second-path topics offer a learning check", async ({ page }) => {
  for (const id of Object.keys(titles) as TopicId[]) {
    await start(page, id);
    await expect(page.getByText("Frage 1 von 5")).toBeVisible();
  }
});

test("a second-path check passes after five correct answers", async ({
  page,
}) => {
  const id = "module-boundaries-and-public-interfaces";
  await start(page, id);
  for (let index = 1; index <= 5; index += 1) {
    await expect(page.getByText(`Frage ${index} von 5`)).toBeVisible();
    await answer(page, id, true);
  }
  await expect(
    page.getByRole("heading", { name: "Lerncheck bestanden" }),
  ).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(5);
});

test("a failed check shows the chosen and correct explanations even when the source fails", async ({
  page,
}) => {
  const id = "web-xss-and-safe-dom";
  await page.context().route("https://**", (route) => route.abort());
  await start(page, id);
  let wrongAnswer: Awaited<ReturnType<typeof answer>> | undefined;
  for (let index = 0; index < 5; index += 1) {
    const selected = await answer(page, id, index !== 0);
    if (index === 0) wrongAnswer = selected;
  }
  if (!wrongAnswer) throw new Error("Missing wrong answer");
  await expect(
    page.getByRole("heading", { name: "Antworten im Überblick" }),
  ).toBeVisible();
  const result = page.getByRole("listitem").first();
  await expect(result.getByText(wrongAnswer.option.explanation)).toBeVisible();
  await expect(
    result.getByText(
      wrongAnswer.question.options.find((option) => option.correct)!
        .explanation,
    ),
  ).toBeVisible();
  await expect(result.getByRole("link", { name: "Quelle öffnen" })).toHaveCount(
    2,
  );
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    result.getByRole("link", { name: "Quelle öffnen" }).last().click(),
  ]);
  await popup.close();
  await expect(
    page.getByRole("heading", { name: "Antworten im Überblick" }),
  ).toBeVisible();
});

test("a new run draws five questions again", async ({ page }) => {
  const id = "playwright-for-web-flows";
  await start(page, id);
  for (let index = 0; index < 5; index += 1) await answer(page, id, true);
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await page
    .getByRole("button", { name: `Fragen starten: ${titles[id]}` })
    .click();
  const seen = new Set<string>();
  for (let index = 1; index <= 5; index += 1) {
    await expect(page.getByText(`Frage ${index} von 5`)).toBeVisible();
    const prompt = await page.getByRole("heading", { level: 2 }).textContent();
    if (!prompt) throw new Error("Missing question prompt");
    expect(
      secondPathQuestions[id].some((question) => question.prompt === prompt),
    ).toBe(true);
    seen.add(prompt);
    await answer(page, id, true);
  }
  expect(seen.size).toBe(5);
});

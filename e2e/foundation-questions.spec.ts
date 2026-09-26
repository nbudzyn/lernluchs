import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

import foundationQuestions from "../src/verticals/catalog/foundationQuestions.json" with { type: "json" };

async function answerCurrent(page: Page, chooseCorrect: boolean) {
  const prompt = await page.getByRole("heading", { level: 2 }).textContent();
  const question = foundationQuestions["human-ai-responsibility"].find(
    (candidate) => candidate.prompt === prompt,
  );
  if (!question) throw new Error(`Unknown question: ${prompt}`);
  const option = question.options.find(
    (candidate) => candidate.correct === chooseCorrect,
  );
  if (!option) throw new Error(`Missing option for ${question.id}`);
  await page
    .getByRole("group", { name: "Antwortoptionen" })
    .getByRole("button", { name: option.text, exact: true })
    .click();
}

test("answers five questions correctly from the closed card and shows a summary", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("article")).toHaveCount(0);
  await page
    .getByRole("button", {
      name: "Fragen starten: Mensch und KI: Verantwortung bleibt menschlich",
    })
    .click();

  for (let index = 1; index <= 5; index += 1) {
    await expect(page.getByText(`Frage ${index} von 5`)).toBeVisible();
    await expect(page.getByRole("article")).toHaveCount(0);
    await answerCurrent(page, true);
  }

  await expect(
    page.getByRole("heading", { name: "Alle Antworten richtig" }),
  ).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(5);
  await expect(page.getByText(/^Gewählt:/)).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Quelle öffnen" }).first(),
  ).toHaveAttribute("target", "_blank");
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(
    page.getByRole("navigation", { name: "Lernthemen" }),
  ).toBeVisible();
});

test("shows a wrong choice and keeps the result readable when its source fails", async ({
  page,
}) => {
  await page.context().route("https://**", (route) => route.abort());
  await page.goto("/");
  await page
    .getByRole("button", {
      name: "Fragen starten: Mensch und KI: Verantwortung bleibt menschlich",
    })
    .click();
  for (let index = 0; index < 5; index += 1)
    await answerCurrent(page, index !== 0);
  await expect(
    page.getByRole("heading", { name: "Nicht alle Antworten richtig" }),
  ).toBeVisible();
  await expect(page.getByText(/^Gewählt:/)).toHaveCount(1);
  await expect(page.getByText(/^Richtig:/)).toHaveCount(5);
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole("link", { name: "Quelle öffnen" }).first().click(),
  ]);
  await popup.close();
  await expect(
    page.getByRole("heading", { name: "Nicht alle Antworten richtig" }),
  ).toBeVisible();
});

test("can cancel a run and return to the topic list", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("button", {
      name: "Fragen starten: AGENTS.md: dauerhafter Kontext für Coding-Agenten",
    })
    .click();
  await page
    .getByRole("group", { name: "Antwortoptionen" })
    .getByRole("button")
    .first()
    .click();
  await page.getByRole("button", { name: "Abbrechen" }).click();
  await expect(
    page.getByRole("navigation", { name: "Lernthemen" }),
  ).toBeVisible();
  await expect(page.getByText("Frage 2 von 5")).toHaveCount(0);
});

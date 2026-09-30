import { expect, test } from "@playwright/test";

import { questionsForTopic } from "../../../src/verticals/learning-checks/questionCatalog";

const id = "human-ai-responsibility";
const title = "Mensch und KI: Verantwortung bleibt menschlich";

test("question and result inherit the editorial surfaces and remain usable", async ({
  page,
}) => {
  await page.goto("/");
  const stage = page.locator(".topic-stage");
  const pageBackground = await stage.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  await page.getByRole("button", { name: `Fragen starten: ${title}` }).click();

  const overlay = page.locator(".learning-check-overlay");
  await expect(overlay).toHaveCSS("background-color", pageBackground);
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

  for (let index = 0; index < 5; index += 1) {
    const prompt = await page.getByRole("heading", { level: 2 }).textContent();
    const question = questionsForTopic(id)?.find(
      (item) => item.prompt === prompt,
    );
    if (!question) throw new Error(`Unknown question: ${prompt}`);
    const answer = question.options.find(
      (option) => option.correct !== (index === 0),
    );
    if (!answer) throw new Error(`Missing answer: ${prompt}`);
    await page
      .getByRole("group", { name: "Antwortoptionen" })
      .getByRole("button", { name: answer.text, exact: true })
      .click();
  }

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
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  const pageBackground = await page
    .locator(".topic-stage")
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  await page.getByRole("button", { name: `Fragen starten: ${title}` }).click();
  await expect(page.locator(".learning-check-overlay")).toHaveCSS(
    "background-color",
    pageBackground,
  );

  for (let index = 0; index < 5; index += 1) {
    const prompt = await page.getByRole("heading", { level: 2 }).textContent();
    const question = questionsForTopic(id)?.find(
      (item) => item.prompt === prompt,
    );
    if (!question) throw new Error(`Unknown question: ${prompt}`);
    const answer = question.options.find((option) => option.correct);
    if (!answer) throw new Error(`Missing correct answer: ${prompt}`);
    await page
      .getByRole("group", { name: "Antwortoptionen" })
      .getByRole("button", { name: answer.text, exact: true })
      .click();
  }

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

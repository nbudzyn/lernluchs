import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

import { fiveNewQuestions } from "../../../src/verticals/learning-checks/fiveNewQuestions";

test("starts and cancels a new standards check from the topic list", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", {
      name: `Fragen starten: ${topicTitle("standards-and-constraint-rationale")}`,
    })
    .click();
  await expect(
    page.getByRole("heading", {
      name: `${topicTitle("standards-and-constraint-rationale")}: Fragen`,
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Abbrechen" }).click();
  await expect(
    page.getByRole("navigation", { name: "Lernthemen" }),
  ).toBeVisible();
});

test("completes a sourced OKF check and shows answer explanations", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", {
      name: `Fragen starten: ${topicTitle("open-knowledge-format")}`,
    })
    .click();

  const questions = fiveNewQuestions["open-knowledge-format"];
  for (let index = 0; index < 5; index += 1) {
    const prompt = await page.getByRole("heading", { level: 2 }).textContent();
    const question = questions.find((candidate) => candidate.prompt === prompt);
    if (!question) throw new Error(`Unknown OKF question: ${prompt}`);
    const right = question.options.find((option) => option.correct)!;
    await page
      .getByRole("group", { name: "Antwortoptionen" })
      .getByRole("button", { name: right.text, exact: true })
      .click();
  }

  await expect(
    page.getByRole("heading", { name: "Lerncheck bestanden" }),
  ).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(5);
  await expect(
    page.getByRole("link", { name: "Quelle öffnen" }).first(),
  ).toHaveAttribute("href", /open-knowledge-format/);
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}

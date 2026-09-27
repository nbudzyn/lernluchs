import { expect, test } from "@playwright/test";

import { newFourQuestions } from "../../../src/verticals/learning-checks/newFourQuestions";

test("a newly covered parallel-agent topic completes a sourced check", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", {
      name: "Fragen starten: Aufgaben und Abbruchkriterien für parallele Agenten festlegen",
    })
    .click();

  const questions = newFourQuestions["parallel-agent-task-boundaries"];
  const answered = [];
  for (let number = 1; number <= 5; number += 1) {
    await expect(page.getByText(`Frage ${number} von 5`)).toBeVisible();
    const prompt = await page.getByRole("heading", { level: 2 }).textContent();
    const question = questions.find((candidate) => candidate.prompt === prompt);
    if (!question)
      throw new Error(`Unknown parallel-agent question: ${prompt}`);
    answered.push(question);
    await page
      .getByRole("group", { name: "Antwortoptionen" })
      .getByRole("button", {
        name: question.options.find((option) => option.correct)!.text,
        exact: true,
      })
      .click();
  }

  await expect(
    page.getByRole("heading", { name: "Lerncheck bestanden" }),
  ).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(5);
  await expect(
    page.getByText(
      answered[0].options.find((option) => option.correct)!.explanation,
    ),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Quelle öffnen" })).toHaveCount(
    5,
  );
  await expect(
    page.getByRole("link", { name: "Quelle öffnen" }).first(),
  ).toHaveAttribute("href", /^https:\/\//);
});

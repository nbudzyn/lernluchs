import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

import foundationQuestions from "../../src/verticals/topics/foundationQuestions.json" with { type: "json" };
import { congratulations } from "../../src/verticals/learning-checks/congratulations";

const foundationTitles: Record<keyof typeof foundationQuestions, string> = {
  "human-ai-responsibility": "Mensch und KI: Verantwortung bleibt menschlich",
  "problem-understanding-and-change-boundaries":
    "Problem verstehen und Änderungsgrenzen setzen",
  "agents-md": "AGENTS.md: dauerhafter Kontext für Coding-Agenten",
  "ears-requirements": "EARS: Anforderungen präzise formulieren",
  "research-plan-tasks": "Research, Plan und Tasks trennen",
  "spec-driven-development-openspec": "Spec-Driven Development mit OpenSpec",
};

test("each icon button starts the corresponding learning check", async ({
  page,
}) => {
  for (const title of Object.values(foundationTitles)) {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "Lernluchs – Themen" }),
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
  }
});

test("quiz icon buttons align with topic buttons without stretching the list row", async ({
  page,
}) => {
  await page.goto("/");
  const topic = page.getByRole("button", {
    name: foundationTitles["human-ai-responsibility"],
    exact: true,
  });
  const quiz = page.getByRole("button", {
    name: `Fragen starten: ${foundationTitles["human-ai-responsibility"]}`,
  });
  const topicBox = await topic.boundingBox();
  const quizBox = await quiz.boundingBox();
  expect(topicBox).not.toBeNull();
  expect(quizBox).not.toBeNull();
  expect(Math.abs(quizBox!.height - topicBox!.height)).toBeLessThan(1);
  expect(Math.abs(quizBox!.y - topicBox!.y)).toBeLessThan(1);
  expect(
    Math.abs(quizBox!.y + quizBox!.height - (topicBox!.y + topicBox!.height)),
  ).toBeLessThan(1);

  const rows = page
    .getByRole("navigation", { name: "Lernthemen" })
    .locator("li");
  const quizRow = await rows.nth(0).boundingBox();
  const plainRow = await rows.nth(3).boundingBox();
  expect(quizRow).not.toBeNull();
  expect(plainRow).not.toBeNull();
  expect(Math.abs(quizRow!.height - plainRow!.height)).toBeLessThan(1);
});

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

test("answers five questions correctly from the topic list and shows a summary", async ({
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
    await expect(page.getByRole("status")).toHaveCount(0);
    await answerCurrent(page, true);
  }

  await expect(
    page.getByRole("heading", { name: "Lerncheck bestanden" }),
  ).toBeVisible();
  const status = page.getByRole("status");
  await expect(status).toHaveCount(1);
  expect(congratulations).toContain(await status.textContent());
  await expect(page.getByRole("listitem")).toHaveCount(5);
  await expect(page.getByText(/^Gewählt:/)).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Quelle öffnen" }).first(),
  ).toHaveAttribute("target", "_blank");
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(
    page.getByRole("navigation", { name: "Lernthemen" }),
  ).toBeVisible();
  await page
    .getByRole("button", {
      name: "Fragen starten: Mensch und KI: Verantwortung bleibt menschlich",
    })
    .click();
  await expect(page.getByText("Frage 1 von 5")).toBeVisible();
  await expect(page.getByRole("status")).toHaveCount(0);
  await page.reload();
  await expect(
    page.getByRole("navigation", { name: "Lernthemen" }),
  ).toBeVisible();
  await page
    .getByRole("button", {
      name: "Fragen starten: Mensch und KI: Verantwortung bleibt menschlich",
    })
    .click();
  await expect(page.getByText("Frage 1 von 5")).toBeVisible();
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
    page.getByRole("heading", { name: "Antworten im Überblick" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Lerncheck bestanden" }),
  ).toHaveCount(0);
  await expect(page.getByRole("status")).toHaveCount(0);
  await expect(page.getByText(/^Gewählt:/)).toHaveCount(1);
  await expect(page.getByText(/^Richtig:/)).toHaveCount(5);
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole("link", { name: "Quelle öffnen" }).first().click(),
  ]);
  await popup.close();
  await expect(
    page.getByRole("heading", { name: "Antworten im Überblick" }),
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

test("each foundation pool shows sourced answer explanations", async ({
  page,
}) => {
  for (const [poolId, questions] of Object.entries(foundationQuestions)) {
    const title = foundationTitles[poolId as keyof typeof foundationQuestions];
    await page.goto("/");
    await page
      .getByRole("button", { name: `Fragen starten: ${title}` })
      .click();

    let wrongAnswer: (typeof questions)[number]["options"][number] | undefined;
    for (let index = 0; index < 5; index += 1) {
      const prompt = await page
        .getByRole("heading", { level: 2 })
        .textContent();
      const question = questions.find(
        (candidate) => candidate.prompt === prompt,
      );
      if (!question)
        throw new Error(`Unknown question in ${poolId}: ${prompt}`);
      const buttons = page
        .getByRole("group", { name: "Antwortoptionen" })
        .getByRole("button");
      const count = await buttons.count();
      expect(count).toBeGreaterThanOrEqual(3);
      expect(count).toBeLessThanOrEqual(5);
      const answer = question.options.find(
        (option) => option.correct !== (index === 0),
      );
      if (!answer) throw new Error(`Missing answer for ${question.id}`);
      if (index === 0) wrongAnswer = answer;
      await page
        .getByRole("group", { name: "Antwortoptionen" })
        .getByRole("button", { name: answer.text, exact: true })
        .click();
    }

    if (!wrongAnswer) throw new Error(`Missing wrong answer for ${poolId}`);
    await expect(
      page.getByText(wrongAnswer.explanation, { exact: false }),
    ).toBeVisible();
    const firstResult = page.getByRole("listitem").first();
    await expect(
      firstResult.getByRole("link", { name: "Quelle öffnen" }),
    ).toHaveCount(2);
    await expect(firstResult.getByRole("link").last()).toHaveAttribute(
      "href",
      wrongAnswer.sourceUrl,
    );
  }
});

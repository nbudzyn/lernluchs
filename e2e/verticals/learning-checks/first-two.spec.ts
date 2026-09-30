import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

import { questionsForTopic } from "../../../src/verticals/learning-checks/questionCatalog";

const titles = {
  "domain-language-and-complexity": topicTitle(
    "domain-language-and-complexity",
  ),
  "project-documentation-and-checklists": topicTitle(
    "project-documentation-and-checklists",
  ),
};

test("the first two new topics start a learning check", async ({ page }) => {
  await page.goto("/");
  for (const title of Object.values(titles)) {
    await page
      .getByRole("button", { name: `Fragen starten: ${title}` })
      .click();
    await expect(
      page.getByRole("heading", { name: `${title}: Fragen` }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Abbrechen" }).click();
  }
});

test("a new learning check reveals explanations after five answers", async ({
  page,
}) => {
  const id = "domain-language-and-complexity";
  await page.goto("/");
  await page
    .getByRole("button", { name: `Fragen starten: ${titles[id]}` })
    .click();
  for (let index = 0; index < 5; index += 1) {
    const prompt = await page.getByRole("heading", { level: 2 }).textContent();
    const question = questionsForTopic(id)?.find(
      (item) => item.prompt === prompt,
    );
    if (!question) throw new Error(`Missing question: ${prompt}`);
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
  await expect(page.getByRole("link", { name: "Quelle öffnen" })).toHaveCount(
    5,
  );
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}

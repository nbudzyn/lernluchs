import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

import foundationQuestions from "../../../src/verticals/topics/foundationQuestions.json" with { type: "json" };

const key = "lernluchs.learning-progress.v1";
const topicId = "human-ai-responsibility";
const title = "Mensch und KI: Verantwortung bleibt menschlich";

async function startCheck(page: Page) {
  await page.getByRole("button", { name: `Fragen starten: ${title}` }).click();
}

async function answerCheck(page: Page, correct: boolean) {
  await startCheck(page);
  for (let index = 0; index < 5; index += 1) {
    const prompt = await page.getByRole("heading", { level: 2 }).textContent();
    const question = foundationQuestions[topicId].find(
      (candidate) => candidate.prompt === prompt,
    );
    if (!question) throw new Error(`Unknown question: ${prompt}`);
    const option = question.options.find(
      (candidate) => candidate.correct === (correct || index > 0),
    );
    if (!option) throw new Error(`Missing option for ${question.id}`);
    await page
      .getByRole("group", { name: "Antwortoptionen" })
      .getByRole("button", { name: option.text, exact: true })
      .click();
  }
}

test("saves a pass by durable ID through reload and a later failed run", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate((storageKey) => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ version: 1, learnedTopicIds: ["temporarily-missing"] }),
    );
  }, key);
  await page.reload();
  await answerCheck(page, true);
  await expect(page.getByText("Als gelernt gespeichert.")).toBeVisible();
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(page.getByRole("img", { name: "Gelernt" })).toHaveCount(1);
  await expect(page.getByText("Gelernt", { exact: true })).toHaveCount(0);
  await page.reload();
  await expect(page.getByRole("img", { name: "Gelernt" })).toHaveCount(1);
  await answerCheck(page, false);
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(page.getByRole("img", { name: "Gelernt" })).toHaveCount(1);
  expect(
    await page.evaluate((storageKey) => localStorage.getItem(storageKey), key),
  ).toContain("temporarily-missing");
  expect(
    await page.evaluate((storageKey) => localStorage.getItem(storageKey), key),
  ).toContain(topicId);
});

test("shows a failed write immediately and retries on a new perfect run", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate((storageKey) => {
    const original = Storage.prototype.setItem.bind(localStorage);
    let failures = 1;
    Storage.prototype.setItem = function (name, value) {
      if (name === storageKey && failures-- > 0)
        throw new Error("Storage unavailable");
      return original(name, value);
    };
  }, key);
  await answerCheck(page, true);
  await expect(page.getByRole("alert")).toContainText(
    "nicht dauerhaft gespeichert",
  );
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(page.getByRole("img", { name: "Gelernt" })).toHaveCount(0);
  await answerCheck(page, true);
  await expect(page.getByText("Als gelernt gespeichert.")).toBeVisible();
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(page.getByRole("img", { name: "Gelernt" })).toHaveCount(1);
});

test("resets only damaged progress and informs the user", async ({ page }) => {
  await page.goto("/");
  await page.evaluate((storageKey) => {
    localStorage.setItem(storageKey, "not json");
    localStorage.setItem("unrelated", "keep me");
  }, key);
  await page.reload();
  await expect(page.getByRole("alert")).toContainText("beschädigt");
  expect(
    await page.evaluate((storageKey) => localStorage.getItem(storageKey), key),
  ).toBeNull();
  expect(await page.evaluate(() => localStorage.getItem("unrelated"))).toBe(
    "keep me",
  );
});

test("keeps the check usable after a failed reset and retries on saving", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(
    (storageKey) => localStorage.setItem(storageKey, "not json"),
    key,
  );
  await page.addInitScript((storageKey) => {
    const original = Storage.prototype.removeItem.bind(localStorage);
    Storage.prototype.removeItem = function (name) {
      if (name === storageKey) throw new Error("Storage unavailable");
      return original.call(this, name);
    };
    (window as unknown as { restoreRemoveItem: () => void }).restoreRemoveItem =
      () => {
        Storage.prototype.removeItem = original;
      };
  }, key);
  await page.reload();
  await expect(page.getByRole("alert")).toContainText("nicht zurückgesetzt");
  await page.evaluate(() =>
    (
      window as unknown as { restoreRemoveItem: () => void }
    ).restoreRemoveItem(),
  );
  await answerCheck(page, true);
  await expect(page.getByText("Als gelernt gespeichert.")).toBeVisible();
});

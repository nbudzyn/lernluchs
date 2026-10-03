import { expect, test } from "@playwright/test";

const removedId = "code-navigation-with-symbols-and-references";
const removedTitle =
  "Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen";
const storageKey = "lernluchs.learning-progress.v1";
const remainingTitle = "Mensch und KI: Verantwortung bleibt menschlich";

for (const learned of [false, true]) {
  test(`ignores a removed topic with a learned entry: ${learned}`, async ({
    page,
  }) => {
    await page.goto("/");
    const saved = JSON.stringify({
      version: 1,
      learnedTopicIds: [
        "human-ai-responsibility",
        ...(learned ? [removedId] : []),
      ],
    });
    await page.evaluate(({ key, value }) => localStorage.setItem(key, value), {
      key: storageKey,
      value: saved,
    });
    await page.reload();
    await expect(
      page.getByRole("navigation", { name: "Themen" }).locator("li"),
    ).toHaveCount(48);
    await expect(page.getByRole("button", { name: removedTitle })).toHaveCount(
      0,
    );
    await expect(
      page.getByRole("button", { name: `Lerncheck starten: ${removedTitle}` }),
    ).toHaveCount(0);
    await expect(page.getByRole("alert")).toHaveCount(0);
    await expect(page.getByRole("img", { name: "Gelernt" })).toHaveCount(1);
    await page
      .getByRole("button", { name: `Lerncheck starten: ${remainingTitle}` })
      .click();
    await expect(page.getByText("Frage 1 von 5")).toBeVisible();
    await page.getByRole("button", { name: "Abbrechen" }).click();
    await page.reload();
    await expect(page.getByRole("img", { name: "Gelernt" })).toHaveCount(1);
    expect(
      await page.evaluate((key) => localStorage.getItem(key), storageKey),
    ).toBe(saved);
  });
}

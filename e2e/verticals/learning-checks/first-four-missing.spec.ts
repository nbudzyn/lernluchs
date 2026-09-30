import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

test("a newly covered context topic offers a sourced learning check", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", {
      name: `Fragen starten: ${topicTitle("context-selection-and-reset")}`,
    })
    .click();
  await expect(page.getByText("Frage 1 von 5")).toBeVisible();

  for (let number = 1; number <= 5; number += 1) {
    await expect(page.getByText(`Frage ${number} von 5`)).toBeVisible();
    await page
      .getByRole("group", { name: "Antwortoptionen" })
      .getByRole("button")
      .first()
      .click();
  }

  await expect(page.getByRole("listitem")).toHaveCount(5);
  await expect(
    page.getByRole("link", { name: "Quelle öffnen" }).first(),
  ).toHaveAttribute("href", /^https:\/\//);
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(
    page.getByRole("navigation", { name: "Lernthemen" }),
  ).toBeVisible();
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}

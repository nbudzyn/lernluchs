import { expect, test } from "@playwright/test";

import { topics } from "../../../src/verticals/topics/topics";

test("filters immediately, closes excluded details, and resets search and path together", async ({
  page,
}) => {
  await page.goto("/");
  const search = page.getByRole("textbox", { name: "Schnellfilter" });
  const list = page.getByRole("navigation", { name: "Themen" });
  const first = topics.items[0];
  const mobile = (page.viewportSize()?.width ?? 0) < 800;
  await expect(search).toBeVisible();
  await page.getByRole("button", { name: first.title, exact: true }).click();
  if (mobile)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await search.fill("unerreichbarer Suchbegriff");
  await expect(list.locator("li")).toHaveCount(0);
  await expect(page.getByRole("article")).toHaveCount(0);
  await expect(page.getByRole("status")).toHaveText("Keine Themen gefunden.");
  if (mobile) await page.getByRole("button", { name: "Hilfe öffnen" }).click();
  await expect(
    page.getByRole("region", { name: "Hilfe zu Themen" }),
  ).toBeVisible();
  if (mobile)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await search.fill("");
  await expect(list.locator("li")).toHaveCount(topics.items.length);
  await expect(page.getByRole("article")).toHaveCount(0);
  await page
    .getByRole("button", { name: `Lernpfade von ${first.title} filtern` })
    .click();
  const activeIds = new Set(
    topics
      .paths!.filter((path) => path.topicIds.includes(first.id))
      .flatMap((path) => path.topicIds),
  );
  await search.fill(first.title.toUpperCase());
  await expect(list.locator("li")).toHaveCount(1);
  await expect(
    page.getByRole("button", { name: "Filter aufheben" }),
  ).toHaveCount(1);
  await expect(search).toBeFocused();
  await search.press("Backspace");
  await expect(search).toHaveValue(first.title.toUpperCase().slice(0, -1));
  await expect(list.locator("li")).toHaveCount(1);
  await search.press("Escape");
  await expect(search).toHaveValue("");
  await expect(search).toBeFocused();
  await expect(
    page.getByRole("region", { name: "Aktive Lernpfade" }),
  ).toBeVisible();
  await expect(list.locator("li")).toHaveCount(activeIds.size);
  await search.fill("unerreichbarer Suchbegriff");
  await page.getByRole("button", { name: "Filter aufheben" }).click();
  await expect(search).toHaveValue("");
  await expect(list.locator("li")).toHaveCount(topics.items.length);
  await expect(
    page.getByRole("region", { name: "Aktive Lernpfade" }),
  ).toHaveCount(0);
  await search.fill(first.title);
  await page.getByRole("button", { name: "Filter aufheben" }).click();
  await expect(list.locator("li")).toHaveCount(topics.items.length);
  await expect(search).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(page.viewportSize()!.width);
});

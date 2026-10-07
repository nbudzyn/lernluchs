import { expect, test } from "@playwright/test";

import { topics } from "../../../src/verticals/topics/topics";

// A fresh browser must start with anchors, independent of title workflows.
test.use({ storageState: { cookies: [], origins: [] } });

test("finds everyday anchors, changes the list and retains the topic, path and learning check", async ({
  page,
}) => {
  await page.goto("/");
  const topic = topics.items.find(
    (item) => item.id === "protect-secrets-and-sensitive-data-with-ai",
  )!;
  const mobile = (page.viewportSize()?.width ?? 0) < 800;
  const titles = page.getByRole("button", { name: "Themen", exact: true });
  const anchors = page.getByRole("button", {
    name: "Kommt mir bekannt vor",
    exact: true,
  });
  const list = page.getByRole("navigation", { name: "Themen" });
  const search = page.getByRole("textbox", { name: "Schnellfilter" });
  await expect(anchors).toHaveAttribute("aria-pressed", "true");
  await titles.click();
  await anchors.click();
  await page.reload();
  await expect(anchors).toHaveAttribute("aria-pressed", "true");
  const titleBox = (await titles.boundingBox())!;
  const anchorBox = (await anchors.boundingBox())!;
  const searchBox = (await search.boundingBox())!;
  expect(titleBox.x).toBeCloseTo(searchBox.x, 0);
  expect(anchorBox.x + anchorBox.width).toBeCloseTo(
    searchBox.x + searchBox.width,
    0,
  );
  expect(titleBox.width).toBeCloseTo(anchorBox.width, 0);
  await search.fill(topic.everydayAnchor);
  await expect(list.locator("li")).toHaveCount(1);
  await page
    .getByRole("button", { name: topic.everydayAnchor, exact: true })
    .click();
  const note = page.getByRole("note", { name: "Kommt mir bekannt vor" });
  await expect(note).toBeVisible();
  await expect(note).toContainText(topic.everydayAnchor);
  await expect(
    page.getByRole("heading", { name: topic.title, exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Problem", exact: true }),
  ).toBeVisible();
  if (mobile)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await anchors.click();
  await expect(anchors).toHaveAttribute("aria-pressed", "true");
  await expect(
    page.getByRole("button", { name: topic.everydayAnchor, exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(search).toHaveValue(topic.everydayAnchor);
  await page
    .getByRole("button", { name: `Lernpfade von ${topic.title} filtern` })
    .click();
  await expect(
    page.getByRole("region", { name: "Aktive Lernpfade" }),
  ).toBeVisible();
  await expect(list.locator("li")).toHaveCount(1);
  await expect(
    page.getByRole("button", { name: `Lerncheck starten: ${topic.title}` }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: topic.everydayAnchor, exact: true })
    .click();
  await expect(note).toBeVisible();
  if (mobile)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await titles.click();
  await expect(
    page.getByRole("button", { name: topic.title, exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(search).toHaveValue(topic.everydayAnchor);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(page.viewportSize()!.width);
  await page.reload();
  await expect(titles).toHaveAttribute("aria-pressed", "true");
  await expect(search).toHaveValue("");
});

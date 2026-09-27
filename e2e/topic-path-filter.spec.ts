import { expect, test } from "@playwright/test";

test("filters with a keyboard accessible icon and keeps its row visible", async ({
  page,
}) => {
  await page.goto("/");
  const title = "Mensch und KI: Verantwortung bleibt menschlich";
  const icon = page.getByRole("button", {
    name: `Lernpfade von ${title} filtern`,
  });
  await expect(
    page.getByRole("button", {
      name: "Lernpfade von Git-Commits klein und nachvollziehbar halten filtern",
    }),
  ).toHaveCount(0);
  await icon.focus();
  await expect(icon).toBeFocused();
  await expect(icon).toHaveCSS("outline-style", /^(?!none$).+/);
  const row = icon.locator("xpath=../..");
  const before = await row.boundingBox();
  const iconBox = await icon.boundingBox();
  if (!before || !iconBox) throw new Error("Missing topic row");
  expect(iconBox.height).toBeLessThanOrEqual(before.height);
  await page.keyboard.press("Enter");
  await expect(icon).toHaveAttribute("aria-pressed", "true");
  await expect(
    page.getByText(/Themen gefiltert nach Lernpfaden:/),
  ).toBeVisible();
  const after = await row.boundingBox();
  if (!after) throw new Error("Filtered topic row disappeared");
  expect(Math.abs(after.x - before.x)).toBeLessThan(2);
  expect(Math.abs(after.y - before.y)).toBeLessThan(2);
  await icon.click();
  await expect(page.getByText(/Themen gefiltert nach Lernpfaden:/)).toHaveCount(
    0,
  );
  await page.getByRole("button", { name: title, exact: true }).click();
  await expect(
    page.getByRole("heading", {
      name: "Anwendung in der Java- und Webentwicklung",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Grenzen des Konzepts" }),
  ).toBeVisible();
});

test("keeps a later clicked row in view as preceding topics disappear", async ({
  page,
}) => {
  await page.goto("/");
  const icon = page.getByRole("button", {
    name: "Lernpfade von Fachverhalten mit TDD absichern filtern",
  });
  await icon.scrollIntoViewIfNeeded();
  const before = await icon.boundingBox();
  if (!before) throw new Error("Missing filter icon");
  await icon.click();
  const after = await icon.boundingBox();
  if (!after) throw new Error("Filter icon disappeared");
  expect(after.y).toBeGreaterThanOrEqual(0);
  expect(after.y).toBeLessThan(await page.evaluate(() => window.innerHeight));
  expect(Math.abs(after.x - before.x)).toBeLessThan(2);
});

test("closes hidden details and does not reopen them when the filter is cleared", async ({
  page,
}) => {
  await page.goto("/");
  const hiddenTitle = "Git-Commits klein und nachvollziehbar halten";
  await page.getByRole("button", { name: hiddenTitle }).click();
  await expect(page.getByRole("article", { name: hiddenTitle })).toBeVisible();
  const filter = page.getByRole("button", {
    name: "Lernpfade von Spec-Driven Development mit OpenSpec filtern",
  });
  await filter.click();
  await expect(page.getByRole("article")).toHaveCount(0);
  await filter.click();
  await expect(page.getByRole("button", { name: hiddenTitle })).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(0);

  const keptTitle = "Problem verstehen und Änderungsgrenzen setzen";
  await page.getByRole("button", { name: keptTitle, exact: true }).click();
  await filter.click();
  await expect(page.getByRole("article", { name: keptTitle })).toBeVisible();
});

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
  ).toBeVisible();
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
  const summary = page.locator(".path-filter-summary");
  await expect(summary.getByText("Gefiltert nach")).toBeVisible();
  await expect(page.getByText("10 / 46 Themen")).toBeVisible();
  const after = await row.boundingBox();
  const summaryBox = await summary.boundingBox();
  if (!after) throw new Error("Filtered topic row disappeared");
  if (!summaryBox) throw new Error("Active paths are not visible");
  expect(Math.abs(after.x - before.x)).toBeLessThan(2);
  expect(summaryBox.y + summaryBox.height).toBeLessThanOrEqual(after.y);
  await page.getByRole("button", { name: "Filter aufheben" }).click();
  await expect(summary).toHaveCount(0);
  await expect(page.getByText("46 Themen")).toBeVisible();
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

test("shows all active path names above the list without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/");
  await page
    .getByRole("button", {
      name: "Lernpfade von Spec-Driven Development mit OpenSpec filtern",
    })
    .click();
  const summary = page.getByRole("region", { name: "Aktive Lernpfade" });
  await expect(summary.locator(".path-name-button")).toHaveCount(3);
  await expect(page.getByText("15 / 46 Themen")).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(320);
  const summaryBox = await summary.boundingBox();
  const listBox = await page
    .getByRole("navigation", { name: "Lernthemen" })
    .boundingBox();
  expect(
    summaryBox && listBox && summaryBox.y + summaryBox.height <= listBox.y,
  ).toBeTruthy();
});

test("closes hidden details and does not reopen them when the filter is cleared", async ({
  page,
}) => {
  await page.goto("/");
  const hiddenTitle = "Git-Commits klein und nachvollziehbar halten";
  await page.getByRole("button", { name: hiddenTitle, exact: true }).click();
  await expect(page.getByRole("article", { name: hiddenTitle })).toBeVisible();
  const mobile = (page.viewportSize()?.width ?? 0) < 800;
  if (mobile)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  const filter = page.getByRole("button", {
    name: "Lernpfade von Spec-Driven Development mit OpenSpec filtern",
  });
  await filter.click();
  await expect(page.getByRole("article")).toHaveCount(0);
  await filter.click();
  await expect(
    page.getByRole("button", { name: hiddenTitle, exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(0);

  const keptTitle = "Problem verstehen und Änderungsgrenzen setzen";
  await page.getByRole("button", { name: keptTitle, exact: true }).click();
  if (mobile)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await filter.click();
  if (mobile) {
    await expect(
      page.getByRole("button", { name: keptTitle, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
  } else {
    await expect(page.getByRole("article", { name: keptTitle })).toBeVisible();
  }
});

test("scrolls to the first topic when a selected path is taller than the viewport", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 160 });
  await page.goto("/");
  await page
    .getByRole("button", {
      name: "Lernpfade von Problem verstehen und Änderungsgrenzen setzen filtern",
    })
    .click();
  await page
    .getByRole("button", {
      name: "Änderungen gestalten und absichern",
    })
    .click();

  const firstTopic = page.getByRole("button", {
    name: "Problem verstehen und Änderungsgrenzen setzen",
    exact: true,
  });
  await expect
    .poll(async () => (await firstTopic.boundingBox())?.y)
    .toBeGreaterThanOrEqual(-1);
  const position = await firstTopic.boundingBox();
  expect(position?.y).toBeLessThan(160);
  await expect(firstTopic).toBeFocused();
});

test("selects one short path, keeps its topics visible, and restores the icon filter", async ({
  page,
}) => {
  await page.goto("/");
  const icon = page.getByRole("button", {
    name: "Lernpfade von Mensch und KI: Verantwortung bleibt menschlich filtern",
  });
  await icon.click();
  const path = page.getByRole("button", {
    name: "Grundlagen für KI-gestützte Softwareentwicklung",
  });
  await path.click();
  await expect(path).toHaveAttribute("aria-pressed", "true");
  await expect(
    page.getByRole("button", {
      name: "Kontext und Vertrauensgrenzen für Coding-Agenten",
      exact: true,
    }),
  ).toHaveCount(0);
  const rows = page
    .getByRole("navigation", { name: "Lernthemen" })
    .locator("li");
  for (const row of await rows.all()) {
    const box = await row.boundingBox();
    expect(box?.y).toBeGreaterThanOrEqual(-1);
    expect((box?.y ?? 0) + (box?.height ?? 0)).toBeLessThanOrEqual(800);
  }
  await path.click();
  await expect(path).toHaveAttribute("aria-pressed", "true");
  await icon.click();
  await expect(
    page.getByRole("button", {
      name: "Sicher mit Coding-Agenten arbeiten",
    }),
  ).toBeVisible();
  await icon.click();
  await expect(
    page.getByRole("button", {
      name: "Git-Commits klein und nachvollziehbar halten",
      exact: true,
    }),
  ).toBeVisible();
});

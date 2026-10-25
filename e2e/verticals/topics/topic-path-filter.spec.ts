import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

test("opens all paths without adding list height and preserves explicit selections", async ({
  page,
}) => {
  if ((page.viewportSize()?.width ?? 0) < 800) {
    await page.setViewportSize({ width: 320, height: 740 });
  }
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Lernpfade", exact: true });
  const navigation = page.getByRole("navigation", { name: "Themen" });
  const start = await navigation.boundingBox();
  await trigger.evaluate((button) => {
    button.style.display = "none";
  });
  const withoutTrigger = await navigation.boundingBox();
  await page
    .locator('[aria-controls="learning-path-picker"]')
    .evaluate((button) => {
      button.style.display = "";
    });
  expect(
    start && withoutTrigger && Math.abs(start.y - withoutTrigger.y),
  ).toBeLessThan(1);
  await trigger.click();
  const picker = page.locator("#learning-path-picker");
  const pickerBox = await picker.boundingBox();
  expect(pickerBox && pickerBox.y + pickerBox.height).toBeLessThanOrEqual(
    (page.viewportSize()?.height ?? 0) - 8,
  );
  const choices = picker.getByRole("checkbox");
  await expect(choices).toHaveCount(14);
  await expect(picker.locator("input:checked")).toHaveCount(0);
  await expect(
    picker.getByText("0 / 14 Lernpfade (alle Themen)"),
  ).toBeVisible();
  await choices.nth(0).check();
  await choices.nth(1).check();
  await expect(
    picker.getByText("2 / 14 Lernpfade (10 / 48 Themen)"),
  ).toBeVisible();
  await expect(page.getByText("10 / 48 Themen", { exact: true })).toBeVisible();
  await picker.getByRole("button", { name: "Schließen" }).click();
  await page.reload();
  await trigger.click();
  await expect(picker.locator("input:checked")).toHaveCount(2);
  await page
    .getByRole("textbox", { name: "Schnellfilter" })
    .fill("Verantwortung");
  const reset = picker.getByRole("button", { name: "Zurücksetzen" });
  const close = picker.getByRole("button", { name: "Schließen" });
  const resetBox = await reset.boundingBox();
  const closeBox = await close.boundingBox();
  if (!resetBox || !closeBox) throw new Error("Missing picker actions");
  expect(resetBox.x + resetBox.width).toBeLessThan(closeBox.x);
  expect(resetBox.y).toBeCloseTo(closeBox.y, 0);
  await reset.focus();
  await page.keyboard.press("Enter");
  await expect(picker).toBeVisible();
  await expect(picker.locator("input:checked")).toHaveCount(0);
  await expect(
    picker.getByText("0 / 14 Lernpfade (alle Themen)"),
  ).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Schnellfilter" }),
  ).toHaveValue("Verantwortung");
  for (const choice of await choices.all()) await choice.check();
  await expect(picker.locator("input:checked")).toHaveCount(14);
  await expect(picker).toBeInViewport({ ratio: 1 });
  await expect(
    picker.getByText("14 / 14 Lernpfade (alle Themen)"),
  ).toBeVisible();
  await expect(
    picker.getByText("14 / 14 Lernpfade (alle Themen)"),
  ).toBeInViewport();
  await choices.last().uncheck();
  await expect(picker.locator("input:checked")).toHaveCount(13);
  await choices.last().check();
  await picker.getByRole("button", { name: "Schließen" }).click();
  await expect(
    page.getByRole("region", { name: "Aktive Lernpfade" }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("textbox", { name: "Schnellfilter" }),
  ).toHaveValue("Verantwortung");
  await page.reload();
  await trigger.click();
  await expect(picker.locator("input:checked")).toHaveCount(14);
  await picker.getByRole("button", { name: "Zurücksetzen" }).click();
  await page.reload();
  await trigger.click();
  await expect(picker.locator("input:checked")).toHaveCount(0);
  await page
    .getByRole("textbox", { name: "Schnellfilter" })
    .fill("Verantwortung");
  await choices.first().check();
  await choices.first().uncheck();
  await expect(picker.locator("input:checked")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await expect(picker.locator("input:checked")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Filter aufheben" }).click();
  await expect(page.getByText("48 Themen")).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(page.viewportSize()?.width ?? 0);
});

test("filters with a keyboard accessible icon and keeps its row visible", async ({
  page,
}) => {
  await page.goto("/");
  const title = topicTitle("human-ai-responsibility");
  const icon = page.getByRole("button", {
    name: `Lernpfade von ${title} filtern`,
  });
  await expect(
    page.getByRole("button", {
      name: `Lernpfade von ${topicTitle("focused-git-commits")} filtern`,
    }),
  ).toBeVisible();
  await icon.focus();
  await expect(icon).toBeFocused();
  await expect(icon).toHaveCSS("outline-style", /^(?!none$).+/);
  const row = icon.locator("xpath=../..");
  const before = await row.boundingBox();
  const iconBox = await icon.boundingBox();
  if (!before || !iconBox) throw new Error("Missing topic row");
  const checkBox = await page
    .getByRole("button", { name: `Lerncheck starten: ${title}` })
    .boundingBox();
  if (!checkBox) throw new Error("Missing learning check icon");
  expect(
    Math.abs(iconBox.y + iconBox.height / 2 - checkBox.y - checkBox.height / 2),
  ).toBeLessThan(1);
  expect(iconBox.height).toBeLessThanOrEqual(before.height);
  await page.keyboard.press("Enter");
  await expect(icon).toHaveAttribute("aria-pressed", "true");
  const summary = page.locator(".path-filter-summary");
  await expect(summary.getByText("Gefiltert nach")).toBeVisible();
  await expect(page.getByText("10 / 48 Themen")).toBeVisible();
  const after = await row.boundingBox();
  const summaryBox = await summary.boundingBox();
  if (!after) throw new Error("Filtered topic row disappeared");
  if (!summaryBox) throw new Error("Active paths are not visible");
  expect(Math.abs(after.x - before.x)).toBeLessThan(2);
  expect(summaryBox.y + summaryBox.height).toBeLessThanOrEqual(after.y);
  await page.getByRole("button", { name: "Filter aufheben" }).click();
  await expect(summary).toHaveCount(0);
  await expect(page.getByText("48 Themen")).toBeVisible();
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

test("distinguishes row hover, selected topic text and active path filters", async ({
  page,
}) => {
  const narrow = (page.viewportSize()?.width ?? 0) < 800;
  await page.setViewportSize(
    narrow ? { width: 390, height: 740 } : { width: 1920, height: 1080 },
  );
  const title = topicTitle("human-ai-responsibility");
  const transparent = "rgba(0, 0, 0, 0)";
  const assert = expect.configure({ soft: true, timeout: 500 });
  for (const colorScheme of ["light", "dark"] as const) {
    for (const view of ["Themen", "Kommt mir bekannt vor"]) {
      await test.step(`${colorScheme}, ${view}`, async () => {
        await page.emulateMedia({ colorScheme });
        await page.goto("/");
        await page.getByRole("button", { name: view, exact: true }).click();
        await page.mouse.move(0, 0);
        const icon = page.getByRole("button", {
          name: `Lernpfade von ${title} filtern`,
        });
        const row = icon.locator("xpath=../..");
        const text = row.locator(
          ".topic-actions > button:not(.path-filter-button):not(.learning-check-start-button)",
        );
        const check = row.getByRole("button", {
          name: `Lerncheck starten: ${title}`,
        });
        await assert(row).toHaveCSS("background-color", transparent);
        await assert(text).toHaveCSS("background-color", transparent);
        if (await page.evaluate(() => matchMedia("(hover: hover)").matches)) {
          for (const target of [text, icon, check]) {
            await target.hover();
            await assert(row).not.toHaveCSS("background-color", transparent);
            await assert(text).toHaveCSS("background-color", transparent);
          }
        }
        await icon.click();
        await page.mouse.move(0, 0);
        await assert(icon).toHaveAttribute("aria-pressed", "true");
        await assert(icon).toHaveCSS("background-color", transparent);
        await assert(row).toHaveCSS("background-color", transparent);
        await assert(
          page.getByRole("region", { name: "Aktive Lernpfade" }),
        ).toBeVisible();
        await text.click();
        await page.mouse.move(0, 0);
        await assert(page.getByRole("article", { name: title })).toBeVisible();
        if (narrow) {
          await page.getByRole("button", { name: "Zur Themenliste" }).click();
          await page.mouse.move(0, 0);
        }
        await assert(text).not.toHaveCSS("background-color", transparent);
        await assert(row).toHaveCSS("background-color", transparent);
        await assert(icon).toHaveCSS("background-color", transparent);
        await page.getByRole("button", { name: "Hilfe öffnen" }).click();
        if (narrow)
          await page.getByRole("button", { name: "Zur Themenliste" }).click();
        await page.getByRole("button", { name: "Filter aufheben" }).click();
        await page.mouse.move(0, 0);
        await assert(text).toHaveCSS("background-color", transparent);
        await assert(icon).toHaveCSS("background-color", transparent);
        await assert(row).toHaveCSS("background-color", transparent);
      });
    }
  }
});

test("keeps a later clicked row in view as preceding topics disappear", async ({
  page,
}) => {
  await page.goto("/");
  const icon = page.getByRole("button", {
    name: `Lernpfade von ${topicTitle("tdd-for-domain-behavior")} filtern`,
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
      name: `Lernpfade von ${topicTitle("spec-driven-development-openspec")} filtern`,
    })
    .click();
  const summary = page.getByRole("region", { name: "Aktive Lernpfade" });
  await expect(summary.locator(".path-name-button")).toHaveCount(3);
  await expect(page.getByText("16 / 48 Themen")).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(320);
  const summaryBox = await summary.boundingBox();
  const listBox = await page
    .getByRole("navigation", { name: "Themen" })
    .boundingBox();
  expect(
    summaryBox && listBox && summaryBox.y + summaryBox.height <= listBox.y,
  ).toBeTruthy();
});

test("closes hidden details and does not reopen them when the filter is cleared", async ({
  page,
}) => {
  await page.goto("/");
  const hiddenTitle = topicTitle("focused-git-commits");
  await page.getByRole("button", { name: hiddenTitle, exact: true }).click();
  await expect(page.getByRole("article", { name: hiddenTitle })).toBeVisible();
  const mobile = (page.viewportSize()?.width ?? 0) < 800;
  if (mobile)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  const filter = page.getByRole("button", {
    name: `Lernpfade von ${topicTitle("spec-driven-development-openspec")} filtern`,
  });
  await filter.click();
  await expect(page.getByRole("article")).toHaveCount(0);
  await filter.click();
  await expect(
    page.getByRole("button", { name: hiddenTitle, exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(0);

  const keptTitle = topicTitle("problem-understanding-and-change-boundaries");
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
      name: `Lernpfade von ${topicTitle("problem-understanding-and-change-boundaries")} filtern`,
    })
    .click();
  await page
    .getByRole("button", {
      name: pathName(1),
    })
    .click();

  const firstTopic = page.getByRole("button", {
    name: topicTitle("problem-understanding-and-change-boundaries"),
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
    name: `Lernpfade von ${topicTitle("human-ai-responsibility")} filtern`,
  });
  await icon.click();
  const path = page.getByRole("button", {
    name: pathName(0),
  });
  await path.click();
  await expect(path).toHaveAttribute("aria-pressed", "true");
  await expect(
    page.getByRole("button", {
      name: topicTitle("coding-agent-context-and-trust-boundaries"),
      exact: true,
    }),
  ).toHaveCount(0);
  const rows = page.getByRole("navigation", { name: "Themen" }).locator("li");
  for (const row of await rows.all()) {
    const box = await row.boundingBox();
    expect(box?.y).toBeGreaterThanOrEqual(-1);
    expect((box?.y ?? 0) + (box?.height ?? 0)).toBeLessThanOrEqual(
      page.viewportSize()!.height,
    );
  }
  await path.click();
  await expect(path).toHaveAttribute("aria-pressed", "true");
  await icon.click();
  await expect(
    page.getByRole("button", {
      name: pathName(2),
    }),
  ).toBeVisible();
  await icon.click();
  await expect(
    page.getByRole("button", {
      name: topicTitle("focused-git-commits"),
      exact: true,
    }),
  ).toBeVisible();
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}
function pathName(index: number) {
  return topics.paths![index].name;
}

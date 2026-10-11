import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

const firstTitle = topicTitle("human-ai-responsibility");
const otherTitle = topicTitle("spec-driven-development-openspec");
const supplementaryViews = [
  { button: "Hilfe öffnen", region: "Hilfe zu Themen" },
  { button: "Impressum öffnen", region: "Impressum" },
];

test("editorial topic design adapts to color scheme and mobile touch", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 740 });
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await expect(page).toHaveTitle("Lernluchs KI");
  const stage = page.locator(".topic-stage");
  const topic = page.getByRole("button", { name: firstTitle, exact: true });
  const light = await stage.evaluate((element) => ({
    background: getComputedStyle(element).backgroundColor,
    color: getComputedStyle(element).color,
  }));
  expect(light.background).not.toBe("rgba(0, 0, 0, 0)");
  expect((await topic.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  for (const view of supplementaryViews) {
    const box = await page
      .getByRole("button", { name: view.button })
      .boundingBox();
    expect(box?.height, view.button).toBeGreaterThanOrEqual(44);
    expect(box?.width, view.button).toBeGreaterThanOrEqual(44);
  }

  await page.emulateMedia({ colorScheme: "dark" });
  const dark = await stage.evaluate((element) => ({
    background: getComputedStyle(element).backgroundColor,
    color: getComputedStyle(element).color,
  }));
  expect(dark.background).not.toBe(light.background);
  expect(dark.color).not.toBe(light.color);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
});

test("wide view restores the same filter, scroll and independent detail after a check", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  const list = page.getByRole("navigation", { name: "Themen" });
  const guidance = page.getByRole("region", { name: "Hilfe zu Themen" });
  await expect(guidance).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Hilfe öffnen" }),
  ).toBeVisible();
  const listBox = await list.boundingBox();
  const helpBox = await guidance.boundingBox();
  expect(
    listBox && helpBox && listBox.x + listBox.width <= helpBox.x,
  ).toBeTruthy();

  await page
    .getByRole("button", { name: `Lerncheck starten: ${firstTitle}` })
    .click();
  for (let answer = 0; answer < 5; answer += 1) {
    await page
      .getByRole("group", { name: "Antwortoptionen" })
      .getByRole("button")
      .first()
      .click();
  }
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(guidance).toBeVisible();

  const filter = page.getByRole("button", {
    name: `Lernpfade von ${firstTitle} filtern`,
  });
  await filter.click();
  await page.getByRole("button", { name: firstTitle, exact: true }).click();
  const detail = page.getByRole("article", { name: firstTitle });
  await expect(detail).toBeVisible();
  const check = page.getByRole("button", {
    name: `Lerncheck starten: ${otherTitle}`,
  });
  for (const returnMode of ["button", "browser back"]) {
    await test.step(returnMode, async () => {
      await check.scrollIntoViewIfNeeded();
      const scrollBefore = await page.evaluate(() => window.scrollY);
      await check.click();
      if (returnMode === "button") {
        await page.getByRole("button", { name: "Abbrechen" }).click();
      } else {
        await page.goBack();
      }
      await expect(filter).toHaveAttribute("aria-pressed", "true");
      await expect(detail).toBeVisible();
      await expect
        .poll(() => page.evaluate(() => window.scrollY))
        .toBe(scrollBefore);
    });
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("wide list opens supplementary views while clearing the topic and retaining filters", async ({
  page,
}) => {
  for (const view of supplementaryViews) {
    await test.step(view.region, async () => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto("/");
      const browser = await page.locator(".topic-browser").boundingBox();
      const list = await page.locator(".topic-browser-list").boundingBox();
      if (!browser || !list) throw new Error("Missing wide layout");
      expect(list.width / browser.width).toBeCloseTo(0.42, 2);
      const icon = page.getByRole("button", {
        name: `Lernpfade von ${firstTitle} filtern`,
      });
      await icon.click();
      await page
        .getByRole("textbox", { name: "Schnellfilter" })
        .fill("Verantwortung");
      await page.getByRole("button", { name: firstTitle, exact: true }).click();
      await expect(
        page.getByRole("article", { name: firstTitle }),
      ).toBeVisible();
      const help = page.getByRole("button", { name: view.button });
      await expect(help).toBeVisible();
      const header = await page.locator(".topic-list-header").boundingBox();
      const helpBox = await help.boundingBox();
      expect(
        header &&
          helpBox &&
          helpBox.x + helpBox.width <= header.x + header.width + 1,
      ).toBeTruthy();
      await help.click();
      await expect(page.getByRole("article")).toHaveCount(0);
      await expect(
        page.getByRole("region", { name: view.region }),
      ).toBeVisible();
      await expect(icon).toHaveAttribute("aria-pressed", "true");
      await expect(
        page.getByRole("textbox", { name: "Schnellfilter" }),
      ).toHaveValue("Verantwortung");
      await page.setViewportSize({ width: 390, height: 740 });
      await page.getByRole("button", { name: "Zur Themenliste" }).click();
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect(page.getByRole("article")).toHaveCount(0);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(1920);
    });
  }
});

test("mobile supplementary views and topics return to the list at its former position", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 740 });
  await page.goto("/");
  const help = page.getByRole("button", { name: "Hilfe öffnen" });
  for (const view of supplementaryViews) {
    for (const returnMode of ["button", "browser back"]) {
      await test.step(`${view.region}, ${returnMode}`, async () => {
        const open = page.getByRole("button", { name: view.button });
        await expect(open).toBeVisible();
        await open.focus();
        await page.evaluate(() => window.scrollTo(0, 40));
        const scrollBefore = await page.evaluate(() => window.scrollY);
        await page.keyboard.press("Enter");
        await expect(
          page.getByRole("region", { name: view.region }),
        ).toBeVisible();
        await expect(
          page.getByRole("navigation", { name: "Themen" }),
        ).toBeHidden();
        await expect(
          page.getByRole("button", { name: /^Lerncheck starten:/ }),
        ).toHaveCount(0);
        if (returnMode === "button") {
          await page.getByRole("button", { name: "Zur Themenliste" }).click();
        } else {
          await page.goBack();
        }
        await expect(
          page.getByRole("navigation", { name: "Themen" }),
        ).toBeVisible();
        await expect
          .poll(() => page.evaluate(() => window.scrollY))
          .toBe(scrollBefore);
      });
    }
  }

  const filter = page.getByRole("button", {
    name: `Lernpfade von ${firstTitle} filtern`,
  });
  await filter.click();
  const topic = page.getByRole("button", { name: firstTitle, exact: true });
  for (const returnMode of ["button", "browser back"]) {
    await test.step(`topic, ${returnMode}`, async () => {
      await topic.scrollIntoViewIfNeeded();
      const scrollBeforeTopic = await page.evaluate(() => window.scrollY);
      await topic.click();
      await expect(
        page.getByRole("article", { name: firstTitle }),
      ).toBeVisible();
      await expect(help).toHaveCount(0);
      if (returnMode === "button") {
        await page.getByRole("button", { name: "Zur Themenliste" }).click();
      } else {
        await page.goBack();
      }
      await expect(filter).toHaveAttribute("aria-pressed", "true");
      await expect
        .poll(() => page.evaluate(() => window.scrollY))
        .toBe(scrollBeforeTopic);
    });
  }

  const check = page.getByRole("button", {
    name: `Lerncheck starten: ${otherTitle}`,
  });
  for (const returnMode of ["button", "browser back"]) {
    await test.step(`check, ${returnMode}`, async () => {
      await check.scrollIntoViewIfNeeded();
      const scrollBeforeCheck = await page.evaluate(() => window.scrollY);
      await check.click();
      if (returnMode === "button") {
        await page.getByRole("button", { name: "Abbrechen" }).click();
      } else {
        await page.goBack();
      }
      await expect(filter).toHaveAttribute("aria-pressed", "true");
      await expect(
        page.getByRole("navigation", { name: "Themen" }),
      ).toBeVisible();
      await expect
        .poll(() => page.evaluate(() => window.scrollY))
        .toBe(scrollBeforeCheck);
    });
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}

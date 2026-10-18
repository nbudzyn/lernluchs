import { expect, test } from "@playwright/test";
import type { Locator } from "@playwright/test";

async function presentation(region: Locator) {
  return region.evaluate((element) => {
    const selectors = ["h2", "ul", "li"];
    const properties = [
      "font-family",
      "font-size",
      "font-weight",
      "line-height",
      "color",
      "margin-top",
      "margin-bottom",
      "padding-top",
      "padding-bottom",
      "border-top",
      "border-bottom",
      "gap",
    ];
    return selectors.map((selector) => {
      const style = getComputedStyle(element.querySelector(selector)!);
      return properties.map((property) => style.getPropertyValue(property));
    });
  });
}

test("shows the approved imprint with the same presentation as help", async ({
  page,
}) => {
  const scenarioFailures: string[] = [];
  for (const width of [390, 1280]) {
    for (const colorScheme of ["light", "dark"] as const) {
      const scenario = `${width}px, ${colorScheme}`;
      try {
        await test.step(scenario, async () => {
          await page.setViewportSize({ width, height: 800 });
          await page.emulateMedia({ colorScheme });
          await page.goto("/");
          const open = page.getByRole("button", { name: "Impressum öffnen" });
          const helpButton = page.getByRole("button", { name: "Hilfe öffnen" });
          const imprintBox = await open.boundingBox();
          const helpBox = await helpButton.boundingBox();
          expect(
            imprintBox &&
              helpBox &&
              imprintBox.x + imprintBox.width <= helpBox.x,
          ).toBeTruthy();
          expect(imprintBox?.y).toBe(helpBox?.y);
          expect(imprintBox?.width).toBe(helpBox?.width);
          expect(imprintBox?.height).toBe(helpBox?.height);
          await helpButton.click();
          const help = page.getByRole("region", { name: "Hilfe zu Themen" });
          const helpPresentation = await presentation(help);
          const helpWidth = (await help.boundingBox())?.width;
          if (width < 800)
            await page.getByRole("button", { name: "Zur Themenliste" }).click();
          await open.click();
          const imprint = page.getByRole("region", { name: "Impressum" });
          await expect(imprint).toBeVisible();
          await expect(
            imprint.getByRole("heading", { name: "Impressum" }),
          ).toBeVisible();
          await expect(
            imprint.getByText("Autor: N. Budzyn", { exact: true }),
          ).toBeVisible();
          await expect(
            imprint.getByText(/Inhalte mithilfe von KI erstellt/),
          ).toBeVisible();
          await expect(
            imprint.getByText(/Für die Inhalte verlinkter Websites/),
          ).toBeVisible();
          expect(await presentation(imprint)).toEqual(helpPresentation);
          expect((await imprint.boundingBox())?.width).toBe(helpWidth);
          expect(
            await page.evaluate(() => document.documentElement.scrollWidth),
          ).toBeLessThanOrEqual(width);
        });
      } catch (error) {
        const details =
          error instanceof Error
            ? (error.stack ?? error.message)
            : String(error);
        scenarioFailures.push(`${scenario}: ${details}`);
      }
    }
  }
  expect(scenarioFailures, scenarioFailures.join("\n\n")).toEqual([]);
});

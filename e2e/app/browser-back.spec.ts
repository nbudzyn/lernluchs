import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

const topicTitle = "Mensch und KI: Verantwortung bleibt menschlich";
const previousUrl = "https://previous.example/";

async function enterFromPreviousPage(page: Page, baseURL: string) {
  const appUrl = new URL("?source=back-test#entry", baseURL).href;
  await page.route(previousUrl, (route) =>
    route.fulfill({
      contentType: "text/html",
      body: `<meta charset="utf-8"><a href="${appUrl}">Lernluchs öffnen</a>`,
    }),
  );
  await page.goto(previousUrl);
  await page.getByRole("link", { name: "Lernluchs öffnen" }).click();
  await expect(page.getByRole("navigation", { name: "Themen" })).toBeVisible();
}

test("browser back returns narrow topics and help to the list, then leaves the app", async ({
  page,
  baseURL,
}) => {
  for (const scenario of [
    { name: "narrow topic", widths: [390], help: false },
    { name: "narrow help", widths: [390], help: true },
    { name: "topic below breakpoint", widths: [799], help: false },
    { name: "wide topic resized narrow", widths: [1280, 390], help: false },
    {
      name: "retained wide topic resized narrow after returning to the list",
      widths: [1280, 390],
      help: false,
      returnedToList: true,
    },
    {
      name: "help resized wide and narrow",
      widths: [390, 1280, 390],
      help: true,
    },
  ]) {
    await test.step(scenario.name, async () => {
      await page.setViewportSize({ width: scenario.widths[0], height: 740 });
      await enterFromPreviousPage(page, baseURL!);
      await page.getByRole("textbox", { name: "Schnellfilter" }).fill("KI");
      const open = page.getByRole("button", {
        name: scenario.help ? "Hilfe öffnen" : topicTitle,
        exact: true,
      });
      await open.scrollIntoViewIfNeeded();
      await page.evaluate(() => window.scrollTo(0, 40));
      const listScroll = await page.evaluate(() => window.scrollY);
      const appUrl = page.url();
      await open.click();
      if ("returnedToList" in scenario) {
        await page.setViewportSize({ width: 390, height: 740 });
        await page.getByRole("button", { name: "Zur Themenliste" }).click();
        await expect(
          page.getByRole("navigation", { name: "Themen" }),
        ).toBeVisible();
        await page.setViewportSize({ width: 1280, height: 740 });
        await expect(
          page.getByRole("article", { name: topicTitle }),
        ).toBeVisible();
        // Let the intermediate wide view be painted before narrowing again,
        // as in the reported flow where the learner already sees its topic.
        await page.evaluate(
          () =>
            new Promise<void>((resolve) =>
              requestAnimationFrame(() => resolve()),
            ),
        );
      }
      for (const width of scenario.widths.slice(1)) {
        await page.setViewportSize({ width, height: 740 });
      }
      await expect(
        page.getByRole("navigation", { name: "Themen" }),
      ).toBeHidden();
      await page.goBack();
      await expect(
        page.getByRole("navigation", { name: "Themen" }),
      ).toBeVisible();
      await expect(
        page.getByRole("textbox", { name: "Schnellfilter" }),
      ).toHaveValue("KI");
      await expect(page).toHaveURL(appUrl);
      if (scenario.widths[0] < 800) {
        await expect
          .poll(() => page.evaluate(() => window.scrollY))
          .toBe(listScroll);
      }
      await page.goBack();
      await expect(page).toHaveURL(previousUrl);
    });
  }
});

test("list back leaves after repeated returns, native forward or reload without restoring views", async ({
  page,
  baseURL,
}) => {
  test.setTimeout(120_000);
  for (const width of [390, 1280]) {
    await test.step(`initial list, ${width}px`, async () => {
      await page.setViewportSize({ width, height: 740 });
      await enterFromPreviousPage(page, baseURL!);
      await page.goBack();
      await expect(page).toHaveURL(previousUrl);
    });
  }
  for (const view of ["topic", "help", "check"] as const) {
    for (const returnMode of ["button", "forward", "reload"] as const) {
      await test.step(`${view}, ${returnMode}`, async () => {
        await page.setViewportSize({ width: 390, height: 740 });
        await enterFromPreviousPage(page, baseURL!);
        const open = page.getByRole("button", {
          name:
            view === "check"
              ? `Lerncheck starten: ${topicTitle}`
              : view === "help"
                ? "Hilfe öffnen"
                : topicTitle,
          exact: true,
        });
        for (let repeat = 0; repeat < 2; repeat += 1) {
          await open.click();
          if (returnMode === "button") {
            await page
              .getByRole("button", {
                name: view === "check" ? "Abbrechen" : "Zur Themenliste",
              })
              .click();
          } else if (returnMode === "reload") {
            await page.reload();
          } else {
            await page.goBack();
            await expect(
              page.getByRole("navigation", { name: "Themen" }),
            ).toBeVisible();
            const length = await page.evaluate(() => history.length);
            await page.goForward();
            expect(await page.evaluate(() => history.length)).toBe(length);
          }
          await expect(
            page.getByRole("navigation", { name: "Themen" }),
          ).toBeVisible();
          await expect(page.locator(".learning-check-overlay")).toHaveCount(0);
        }
        await page.goBack();
        await expect(page).toHaveURL(previousUrl);
      });
    }
  }
});

test("browser back leaves wide topics and help immediately, including after resize", async ({
  page,
  baseURL,
}) => {
  for (const scenario of [
    { name: "wide topic", widths: [1280], help: false },
    { name: "topic at breakpoint", widths: [800], help: false },
    {
      name: "wide topic with native history back",
      widths: [1280],
      help: false,
      nativeBack: true,
    },
    {
      name: "retained topic widened after browser back to the list",
      widths: [390, 1280],
      help: false,
      returnedToList: true,
    },
    { name: "initial wide help", widths: [1280], help: true },
    { name: "narrow topic resized wide", widths: [390, 1280], help: false },
    { name: "narrow help resized wide", widths: [390, 1280], help: true },
  ]) {
    await test.step(scenario.name, async () => {
      await page.setViewportSize({ width: scenario.widths[0], height: 740 });
      await enterFromPreviousPage(page, baseURL!);
      if (!scenario.help || scenario.widths[0] < 800) {
        await page
          .getByRole("button", {
            name: scenario.help ? "Hilfe öffnen" : topicTitle,
            exact: true,
          })
          .click();
      }
      if ("returnedToList" in scenario) {
        await page.goBack();
        await expect(
          page.getByRole("navigation", { name: "Themen" }),
        ).toBeVisible();
      }
      for (const width of scenario.widths.slice(1)) {
        await page.setViewportSize({ width, height: 740 });
      }
      if ("returnedToList" in scenario) {
        await expect(
          page.getByRole("article", { name: topicTitle }),
        ).toBeVisible();
        await page.evaluate(
          () =>
            new Promise<void>((resolve) =>
              requestAnimationFrame(() => resolve()),
            ),
        );
      }
      await expect(
        page.getByRole("navigation", { name: "Themen" }),
      ).toBeVisible();
      if ("nativeBack" in scenario) {
        await page.evaluate(() => window.history.back());
      } else {
        await page.goBack();
      }
      await expect(page).toHaveURL(previousUrl);
    });
  }
});

test("browser back cancels questions and results and discards the check at any width", async ({
  page,
  baseURL,
}) => {
  test.setTimeout(120_000);
  for (const width of [390, 1280]) {
    for (const answered of [0, 1, 2, 3, 4, 5]) {
      await test.step(`${width}px, ${answered} answered`, async () => {
        await page.setViewportSize({ width: 1280, height: 740 });
        await enterFromPreviousPage(page, baseURL!);
        await page.getByRole("textbox", { name: "Schnellfilter" }).fill("KI");
        await page
          .getByRole("button", { name: topicTitle, exact: true })
          .click();
        const start = page.getByRole("button", {
          name: `Lerncheck starten: ${topicTitle}`,
        });
        await start.click();
        await page.setViewportSize({ width, height: 740 });
        for (let index = 0; index < answered; index += 1) {
          await page
            .getByRole("group", { name: "Antwortoptionen" })
            .getByRole("button")
            .first()
            .click();
        }
        if (answered === 5) {
          await expect(
            page.getByRole("button", { name: "Zur Themenliste" }),
          ).toBeVisible();
        } else {
          await expect(
            page.getByText(`Frage ${answered + 1} von 5`),
          ).toBeVisible();
        }
        await page.goBack();
        await expect(
          page.getByRole("navigation", { name: "Themen" }),
        ).toBeVisible();
        await expect(page.locator(".learning-check-overlay")).toHaveCount(0);
        await expect(
          page.getByRole("textbox", { name: "Schnellfilter" }),
        ).toHaveValue("KI");
        await start.click();
        await expect(page.getByText("Frage 1 von 5")).toBeVisible();
        await page.goBack();
        await expect(
          page.getByRole("navigation", { name: "Themen" }),
        ).toBeVisible();
        await page.goBack();
        await expect(page).toHaveURL(previousUrl);
      });
    }
  }
});

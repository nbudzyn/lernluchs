import { expect, test } from "@playwright/test";
import { topics } from "../../../src/verticals/topics/topics";

test("runs local inference, combines filters and rejects an unrelated question", async ({
  page,
  context,
  baseURL,
}, testInfo) => {
  test.setTimeout(90_000);
  const requests: { url: string; body: string | null }[] = [];
  context.on("request", (request) =>
    requests.push({ url: request.url(), body: request.postData() }),
  );
  await page.goto("/");
  expect(requests.filter(({ url }) => url.includes("/ai-search/"))).toEqual([]);
  const trigger = page.getByRole("button", {
    name: "Suche mit KI",
    exact: true,
  });
  const query = page.getByRole("textbox", {
    name: "Deine Frage oder Stichwörter",
  });
  const list = page.getByRole("navigation", { name: "Themen" });
  await trigger.click();
  await expect(query).toBeFocused();
  await expect(
    page.getByText("Enter übernimmt · Umschalt+Enter für eine neue Zeile"),
  ).toBeVisible();
  await query.fill("Was weißt du über Spec-driven-Development?");
  await query.press("Shift+Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await query.press("Enter");
  await expect(page.locator(".ai-filter-query")).toHaveText(
    "Was weißt du über Spec-driven-Development?",
  );
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(list).toHaveAttribute("aria-busy", "false", { timeout: 60_000 });
  await expect(page.getByRole("alert")).toHaveCount(0);
  await expect(
    list.getByRole("button", {
      name: title("spec-driven-development-openspec"),
      exact: true,
    }),
  ).toBeVisible();
  await trigger.click();
  await expect(query).toHaveValue("Was weißt du über Spec-driven-Development?");
  await query.fill("Was ist besser, Ponytail oder MCP?");
  const started = Date.now();
  await query.press("Enter");
  await expect(list).toHaveAttribute("aria-busy", "false", { timeout: 20_000 });
  const warmMilliseconds = Date.now() - started;
  await expect(
    list.getByRole("button", {
      name: title("token-efficiency-tools"),
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    list.getByRole("button", {
      name: title("agent-protocol-integration"),
      exact: true,
    }),
  ).toBeVisible();
  const quick = page.getByRole("textbox", { name: "Schnellfilter" });
  await quick.fill("Ponytail");
  await expect(list.locator("li")).toHaveCount(1);
  await quick.fill("");
  await trigger.click();
  await query.fill("Wie backt man einen Pfannkuchen?");
  await query.press("Enter");
  await expect(list).toHaveAttribute("aria-busy", "false", { timeout: 20_000 });
  await expect(list.locator("li")).toHaveCount(0);
  await expect(
    page.getByText("Keine Themen gefunden.", { exact: true }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Filter aufheben", exact: true })
    .click();
  await expect(list.locator("li")).toHaveCount(topics.items.length);
  const origin = new URL(baseURL!).origin;
  expect(requests.filter(({ url }) => new URL(url).origin !== origin)).toEqual(
    [],
  );
  expect(
    requests.some(({ url, body }) =>
      /Ponytail|Pfannkuchen/.test(url + (body ?? "")),
    ),
  ).toBe(false);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(page.viewportSize()!.width);
  await testInfo.attach("local-ai-latency", {
    body: JSON.stringify({ warmMilliseconds, project: testInfo.project.name }),
    contentType: "application/json",
  });
});

test("keeps normal filters available when model loading fails and allows retry", async ({
  page,
}) => {
  test.setTimeout(90_000);
  await page.route("**/ai-search/**", (route) => route.abort());
  await page.goto("/");
  const trigger = page.getByRole("button", {
    name: "Suche mit KI",
    exact: true,
  });
  const query = page.getByRole("textbox", {
    name: "Deine Frage oder Stichwörter",
  });
  await trigger.click();
  await query.fill("Was weißt du über Spec-driven-Development?");
  await query.press("Enter");
  await expect(page.getByRole("alert")).toContainText(
    "Schnellfilter und Lernpfade bleiben nutzbar",
    { timeout: 20_000 },
  );
  const quick = page.getByRole("textbox", { name: "Schnellfilter" });
  await quick.fill("OpenSpec");
  const list = page.getByRole("navigation", { name: "Themen" });
  await expect(
    list.getByRole("button", {
      name: title("spec-driven-development-openspec"),
      exact: true,
    }),
  ).toBeVisible();
  await quick.fill("");
  await page.unroute("**/ai-search/**");
  await page.getByRole("button", { name: "Erneut versuchen" }).click();
  await expect(list).toHaveAttribute("aria-busy", "false", { timeout: 60_000 });
  await expect(page.getByRole("alert")).toHaveCount(0);
  await expect(
    list.getByRole("button", {
      name: title("spec-driven-development-openspec"),
      exact: true,
    }),
  ).toBeVisible();
});

function title(id: string) {
  return topics.items.find((topic) => topic.id === id)!.title;
}

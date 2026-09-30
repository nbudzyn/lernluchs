import { expect, test } from "@playwright/test";

test("shows learning videos without external loading and opens one on request", async ({
  page,
  context,
}) => {
  const externalRequests: string[] = [];
  context.on("request", (request) => {
    if (!request.url().startsWith("http://127.0.0.1:4173"))
      externalRequests.push(request.url());
  });
  await context.route("https://www.youtube.com/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<h1>Videoziel</h1>",
    }),
  );
  await page.goto("/");
  await page
    .getByRole("button", {
      name: "Mensch und KI: Verantwortung bleibt menschlich",
      exact: true,
    })
    .click();
  const article = page.getByRole("article");
  await expect(
    article.getByRole("img", { name: "Video", exact: true }),
  ).toHaveCount(4);
  const german = article.getByRole("link", {
    name: "Was ist Vertrauenswürdige KI? [DE]",
    exact: true,
  });
  await expect(german.locator("..")).toHaveText(
    "Was ist Vertrauenswürdige KI? [DE] 19:43",
  );
  await expect(german).toHaveAttribute("target", "_blank");
  await expect(page.locator("iframe, video, img[src*='youtube']")).toHaveCount(
    0,
  );
  expect(externalRequests).toEqual([]);
  const popupReady = page.waitForEvent("popup");
  await german.click();
  const popup = await popupReady;
  await popup.waitForLoadState();
  expect(popup.url()).toBe("https://www.youtube.com/watch?v=sNHZjpXlZl8");
  await popup.close();

  if ((page.viewportSize()?.width ?? 0) < 800)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await page
    .getByRole("button", {
      name: "EARS: Anforderungen präzise formulieren",
      exact: true,
    })
    .click();
  await expect(
    article.getByRole("img", { name: "Video", exact: true }),
  ).toHaveCount(3);
  await expect(
    article
      .locator("li")
      .filter({ has: page.getByRole("img", { name: "Video", exact: true }) })
      .filter({ hasText: "[DE]" }),
  ).toHaveCount(0);

  if ((page.viewportSize()?.width ?? 0) < 800)
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await page
    .getByRole("button", {
      name: "Werkzeugrechte und MCP-Zugriffe begrenzen",
      exact: true,
    })
    .click();
  const longVideo = article.getByRole("link", {
    name: "MCP Security: Sicherheitsrisiken beim Model Context Protocol | Security Podcast [DE]",
    exact: true,
  });
  await expect(longVideo.locator("..")).not.toContainText("Gesamtlänge:");
  await expect(longVideo.locator("..")).toContainText("[DE] 96:14");
  await expect(longVideo.locator("..")).toContainText(
    "Lernabschnitt: 10:00–52:36",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

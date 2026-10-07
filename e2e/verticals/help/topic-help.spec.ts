import { expect, test } from "@playwright/test";

test("shows the independent guidance beside the topic list", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  const help = page.getByRole("region", { name: "Hilfe zu Themen" });
  await expect(help).toBeVisible();
  await expect(help.locator("li").first()).toHaveText(
    "Klick auf ein Thema öffnet das Thema",
  );
  await expect(help.getByText("Thema gelernt")).toBeVisible();
  await expect(
    help.getByText(
      "Über der Liste wechselst du zwischen Themen und „Kommt mir bekannt vor“",
    ),
  ).toBeVisible();
  await expect(page.getByRole("navigation")).toBeVisible();
});

test("opens the same guidance as a mobile view and returns to the list", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 740 });
  await page.goto("/");
  await page.getByRole("button", { name: "Hilfe öffnen" }).click();
  const help = page.getByRole("region", { name: "Hilfe zu Themen" });
  await expect(help).toBeVisible();
  await expect(help.locator("li").first()).toHaveText(
    "Klick auf ein Thema öffnet das Thema",
  );
  await expect(help.getByText("startet einen Lerncheck")).toBeVisible();
  await expect(
    help.getByText(
      "Der Schnellfilter durchsucht auch die Texte unter „Kommt mir bekannt vor“ in beiden Ansichten",
    ),
  ).toBeVisible();
  await page.getByRole("button", { name: "Zur Themenliste" }).click();
  await expect(page.getByRole("navigation")).toBeVisible();
});

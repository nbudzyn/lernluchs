import { expect, test } from "@playwright/test";

test("zeigt einen neuen Lernpfad und eine quellengebundene Karte", async ({
  page,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Lernthemen" });
  await expect(navigation.locator("li")).toHaveCount(46);

  await page
    .getByRole("button", {
      name: "Lernpfade von Fachsprache vereinheitlichen und Komplexität begrenzen filtern",
    })
    .click();
  await page
    .getByRole("button", {
      name: "Projektwissen für kleine Java-/Web-Teams pflegen",
      exact: true,
    })
    .click();

  await expect(navigation.locator("li")).toHaveCount(7);
  await page
    .getByRole("button", {
      name: "Langlebiges Domänenwissen mit OKF strukturieren",
      exact: true,
    })
    .click();
  const article = page.getByRole("article", {
    name: "Langlebiges Domänenwissen mit OKF strukturieren",
  });
  await expect(article).toBeVisible();
  await expect(
    article.getByRole("link", {
      name: "Open Knowledge Format – canonical repository",
    }),
  ).toBeVisible();
  await expect(article.getByText("2026-12-27")).toBeVisible();
  if ((page.viewportSize()?.width ?? 0) < 800) {
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  }
  await expect(
    page.getByRole("button", {
      name: "Fragen starten: Langlebiges Domänenwissen mit OKF strukturieren",
    }),
  ).toBeVisible();
});

import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

test("zeigt einen neuen Lernpfad und eine quellengebundene Karte", async ({
  page,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Lernthemen" });
  await expect(navigation.locator("li")).toHaveCount(45);

  await page
    .getByRole("button", {
      name: `Lernpfade von ${topicTitle("domain-language-and-complexity")} filtern`,
    })
    .click();
  await page
    .getByRole("button", {
      name: pathName(5),
      exact: true,
    })
    .click();

  await expect(navigation.locator("li")).toHaveCount(7);
  await page
    .getByRole("button", {
      name: topicTitle("open-knowledge-format"),
      exact: true,
    })
    .click();
  const article = page.getByRole("article", {
    name: topicTitle("open-knowledge-format"),
  });
  await expect(article).toBeVisible();
  await expect(
    article.getByRole("link", {
      name: sourceTitle("open-knowledge-format", 0),
    }),
  ).toBeVisible();
  await expect(article.getByText("2026-12-27")).toBeVisible();
  if ((page.viewportSize()?.width ?? 0) < 800) {
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  }
  await expect(
    page.getByRole("button", {
      name: `Fragen starten: ${topicTitle("open-knowledge-format")}`,
    }),
  ).toBeVisible();
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}
function sourceTitle(id: string, index: number) {
  return topics.items.find((item) => item.id === id)!.sources[index].title;
}
function pathName(index: number) {
  return topics.paths![index].name;
}

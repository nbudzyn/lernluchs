import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

test("shows the curated sources of topics outside the foundation path", async ({
  page,
}) => {
  await page.goto("/");

  for (const [topic, expectedLinks, audioTitle] of [
    [
      topicTitle("coding-agent-context-and-trust-boundaries"),
      [
        sourceTitle("web-security-baseline", 5),
        sourceTitle("coding-agent-context-and-trust-boundaries", 1),
      ],
      sourceTitle("coding-agent-context-and-trust-boundaries", 2),
    ],
    [
      topicTitle("module-boundaries-and-public-interfaces"),
      [
        sourceTitle("module-boundaries-and-public-interfaces", 0),
        sourceTitle("module-boundaries-and-public-interfaces", 1),
        sourceTitle("module-boundaries-and-public-interfaces", 2),
      ],
      null,
    ],
    [
      topicTitle("playwright-for-web-flows"),
      [
        sourceTitle("playwright-for-web-flows", 0),
        sourceTitle("playwright-for-web-flows", 1),
      ],
      null,
    ],
  ] as const) {
    await page.getByRole("button", { name: topic, exact: true }).click();
    const article = page.getByRole("article", { name: topic });
    expect(
      (await article.locator("section > h3").allTextContents()).slice(-2),
    ).toEqual(["Quellen", "Redaktionelle Metadaten"]);
    await expect(
      article.getByRole("heading", { name: "Primärquellen" }),
    ).toBeVisible();
    await expect(
      article.getByRole("heading", { name: "Sekundärquellen" }),
    ).toHaveCount(1);
    expect(
      (await article.getByRole("link").allTextContents()).slice(
        0,
        expectedLinks.length + (audioTitle ? 1 : 0),
      ),
    ).toEqual([
      ...expectedLinks,
      ...(audioTitle ? [`${audioTitle} [DE]`] : []),
    ]);
    if (audioTitle) {
      const audioRow = article.locator("li").filter({ hasText: audioTitle });
      await expect(audioRow).toContainText(`${audioTitle} [DE] 23:50`);
      await expect(audioRow.locator("svg[aria-label='Audio']")).toHaveCount(1);
    }
    for (const link of await article.getByRole("link").all()) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("href", /^https:\/\//);
    }
    if ((page.viewportSize()?.width ?? 0) < 800) {
      await page.getByRole("button", { name: "Zur Themenliste" }).click();
    }
  }
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}
function sourceTitle(id: string, index: number) {
  return topics.items.find((item) => item.id === id)!.sources[index].title;
}

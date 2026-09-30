import { expect, test } from "@playwright/test";

test("shows the curated sources of topics outside the foundation path", async ({
  page,
}) => {
  await page.goto("/");

  for (const [topic, expectedLinks, audioTitle] of [
    [
      "Kontext und Vertrauensgrenzen für Coding-Agenten",
      [
        "OWASP LLM01:2025 Prompt Injection",
        "Risks and mitigations for GitHub Copilot cloud agent",
      ],
      "Vektor-Rotation stoppt bösartige Befehle in READMEs",
    ],
    [
      "Modulgrenzen und öffentliche Schnittstellen gestalten",
      [
        "Introduction to Modules in Java - Dev.java",
        "Modules - Dev.java",
        "Modules - TypeScript Handbook",
      ],
      null,
    ],
    [
      "Webabläufe mit Playwright prüfen",
      ["Playwright Test Assertions", "Playwright Locators"],
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

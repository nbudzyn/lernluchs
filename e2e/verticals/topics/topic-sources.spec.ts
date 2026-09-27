import { expect, test } from "@playwright/test";

test("shows the curated sources of topics outside the foundation path", async ({
  page,
}) => {
  await page.goto("/");

  for (const [topic, expectedLinks] of [
    [
      "Kontext und Vertrauensgrenzen für Coding-Agenten",
      [
        "OWASP LLM01:2025 Prompt Injection",
        "Risks and mitigations for GitHub Copilot cloud agent",
      ],
    ],
    [
      "Modulgrenzen und öffentliche Schnittstellen gestalten",
      [
        "Introduction to Modules in Java - Dev.java",
        "Modules - Dev.java",
        "Modules - TypeScript Handbook",
      ],
    ],
    [
      "Webabläufe mit Playwright prüfen",
      ["Playwright Test Assertions", "Playwright Locators"],
    ],
  ] as const) {
    await page.getByRole("button", { name: topic, exact: true }).click();
    const article = page.getByRole("article", { name: topic });
    await expect(
      article.getByRole("heading", { name: "Primärquellen" }),
    ).toBeVisible();
    await expect(
      article.getByRole("heading", { name: "Sekundärquellen" }),
    ).toHaveCount(0);
    await expect(article.getByRole("link")).toHaveText(expectedLinks);
    for (const link of await article.getByRole("link").all()) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("href", /^https:\/\//);
    }
  }
});

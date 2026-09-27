import { expect, test } from "@playwright/test";

const pathCases = [
  {
    name: "Java-/Web-Code technisch analysieren und modernisieren",
    startingTopic: "Git-Worktrees für isolierte Änderungen nutzen",
    titles: [
      "Git-Worktrees für isolierte Änderungen nutzen",
      "Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen",
      "Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen",
      "Modulgrenzen und öffentliche Schnittstellen gestalten",
      "Fachverhalten mit TDD absichern",
      "Java-Architekturregeln mit ArchUnit prüfen",
      "Java-/Spring-Migrationen mit OpenRewrite durchführen",
      "Webabläufe mit Playwright prüfen",
    ],
    source: "Git: git-worktree Documentation",
  },
  {
    name: "Parallele Coding-Agenten kritisch erproben",
    startingTopic:
      "Aufgaben und Abbruchkriterien für parallele Agenten festlegen",
    titles: [
      "Aufgaben und Abbruchkriterien für parallele Agenten festlegen",
      "Git-Worktrees für isolierte Änderungen nutzen",
      "Spezialisierte Subagents mit klarem Aufgabenbesitz einsetzen",
      "Kontext zwischen Agenten gezielt übergeben",
      "Werkzeugrechte und MCP-Zugriffe begrenzen",
      "Deterministische Prüf-Gates im Agenten-Harness gestalten",
      "KI-generierte Änderungen prüfen und übernehmen",
      "Parallelität gegen einen seriellen Ablauf messen",
    ],
    source: "A practical guide to building agents - OpenAI",
  },
] as const;

for (const path of pathCases) {
  test(`shows the ${path.name} path with sourced cards and a learning check`, async ({
    page,
  }) => {
    await page.goto("/");
    const navigation = page.getByRole("navigation", { name: "Lernthemen" });
    await expect(navigation.locator("li")).toHaveCount(46);
    await expect(
      page.getByRole("button", {
        name: "Git-Commits klein und nachvollziehbar halten",
        exact: true,
      }),
    ).toBeVisible();

    await page
      .getByRole("button", {
        name: `Lernpfade von ${path.startingTopic} filtern`,
      })
      .click();
    await page.getByRole("button", { name: path.name, exact: true }).click();
    await expect(
      navigation.locator(
        "li .topic-actions > button:not(.path-filter-button):not(.learning-check-start-button)",
      ),
    ).toHaveText(path.titles);

    await page
      .getByRole("button", { name: path.startingTopic, exact: true })
      .click();
    const article = page.getByRole("article", { name: path.startingTopic });
    await expect(article).toBeVisible();
    await expect(
      article.getByRole("link", { name: path.source }),
    ).toBeVisible();
    await expect(article.getByText("2026-09-27").first()).toBeVisible();
    await expect(
      page.getByRole("button", {
        name: `Fragen starten: ${path.startingTopic}`,
      }),
    ).toHaveCount(1);
  });
}

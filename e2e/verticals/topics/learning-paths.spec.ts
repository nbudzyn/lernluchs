import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

test("zeigt einen Lernpfad und ein quellengebundenes Thema", async ({
  page,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Themen" });
  await expect(navigation.locator("li")).toHaveCount(49);

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
      name: `Lerncheck starten: ${topicTitle("open-knowledge-format")}`,
    }),
  ).toBeVisible();
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}

test("reads current integration and eval topics through their paths without learning checks", async ({
  page,
}) => {
  await page.goto("/");
  const javaTitle = "KI-Funktionen in Java-Webanwendungen bauen";
  await page
    .getByRole("button", { name: `Lernpfade von ${javaTitle} filtern` })
    .click();
  await page
    .getByRole("button", { name: javaTitle, exact: true })
    .first()
    .click();
  const navigation = page.getByRole("navigation", { name: "Themen" });
  await expect(navigation.locator("li")).toHaveCount(9);
  for (const [title, source, reviewDue] of [
    [
      "Modellwechsel und API-Lebenszyklen absichern",
      "Gemini API – Abkündigungen und Ersatzmodelle",
      "2027-01-03",
    ],
    [
      "Agentensysteme über MCP, A2A und ACP verbinden",
      "Agent Client Protocol – Overview",
      "2027-01-07",
    ],
    [javaTitle, "LangChain4j – Introduction", "2027-01-07"],
    [
      "Agenten mit Evals und Traces systematisch prüfen",
      "Google ADK – Ergebnisse und Toolabläufe getrennt evaluieren",
      "2027-01-07",
    ],
  ]) {
    await navigation.getByRole("button", { name: title, exact: true }).click();
    const article = page.getByRole("article", { name: title });
    await expect(
      article.getByRole("link", { name: source, exact: true }),
    ).toBeVisible();
    await expect(article.getByText(reviewDue)).toBeVisible();
    await expect(
      page.getByRole("button", { name: `Lerncheck starten: ${title}` }),
    ).toHaveCount(0);
    if ((page.viewportSize()?.width ?? 0) < 800) {
      await page.getByRole("button", { name: "Zur Themenliste" }).click();
    }
  }
  await page.getByRole("button", { name: "Filter aufheben" }).click();
  const evalTitle = "Agenten mit Evals und Traces systematisch prüfen";
  await page
    .getByRole("button", { name: `Lernpfade von ${evalTitle} filtern` })
    .click();
  await page
    .getByRole("button", {
      name: "Wiederkehrende Entwicklungsarbeit kontrolliert automatisieren",
      exact: true,
    })
    .click();
  await expect(navigation.locator("li")).toHaveCount(8);
  await navigation
    .getByRole("button", { name: evalTitle, exact: true })
    .click();
  const evalArticle = page.getByRole("article", { name: evalTitle });
  await expect(
    evalArticle.getByRole("link", {
      name: "Build Trustworthy AI Agents Powered by Evals – Testμ-Konferenzbericht, September 2026",
      exact: true,
    }),
  ).toHaveAttribute(
    "href",
    "https://www.testmuai.com/blog/build-trustworthy-ai-agents/",
  );
  await expect(evalArticle.getByText("2026-10-07").first()).toBeVisible();
  if ((page.viewportSize()?.width ?? 0) < 800) {
    await page.getByRole("button", { name: "Zur Themenliste" }).click();
  }
  await expect(
    page.getByRole("button", {
      name: `Lerncheck starten: ${topicTitle("review-and-accept-ai-generated-changes")}`,
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Filter aufheben" }).click();
  const tokenTitle = topicTitle("token-efficiency-tools");
  await navigation
    .getByRole("button", { name: tokenTitle, exact: true })
    .click();
  const tokenArticle = page.getByRole("article", { name: tokenTitle });
  for (const source of [
    "Headroom – Kontextkompression und Originalabruf",
    "Ponytail – unnötigen Code vermeiden",
  ]) {
    await expect(
      tokenArticle.getByRole("link", { name: source, exact: true }),
    ).toBeVisible();
  }
  const videoRow = tokenArticle
    .getByRole("link", {
      name: "How to Cut Token Use in an AI Agent System – Julian Goldie",
      exact: true,
    })
    .locator("..");
  await expect(videoRow).toContainText("6:57");
  await expect(
    videoRow.getByRole("img", { name: "Video", exact: true }),
  ).toBeVisible();
});
function sourceTitle(id: string, index: number) {
  return topics.items.find((item) => item.id === id)!.sources[index].title;
}
function pathName(index: number) {
  return topics.paths![index].name;
}
const pathCases = [
  {
    name: pathName(3),
    startingTopic: topicTitle("git-worktrees-for-isolated-changes"),
    titles: [
      topicTitle("git-worktrees-for-isolated-changes"),
      topicTitle("versioned-library-docs-with-context7"),
      topicTitle("module-boundaries-and-public-interfaces"),
      topicTitle("tdd-for-domain-behavior"),
      topicTitle("archunit-for-java-architecture"),
      topicTitle("refactorings-and-migrations-with-openrewrite"),
      topicTitle("playwright-for-web-flows"),
    ],
    source: sourceTitle("git-worktrees-for-isolated-changes", 0),
  },
  {
    name: pathName(4),
    startingTopic: topicTitle("parallel-agent-task-boundaries"),
    titles: [
      topicTitle("parallel-agent-task-boundaries"),
      topicTitle("git-worktrees-for-isolated-changes"),
      topicTitle("specialized-subagents-and-ownership"),
      topicTitle("agent-context-handoffs"),
      topicTitle("agent-tool-and-mcp-permissions"),
      topicTitle("deterministic-agent-verification-gates"),
      topicTitle("review-and-accept-ai-generated-changes"),
      topicTitle("compare-parallel-and-serial-agent-work"),
    ],
    source: sourceTitle("agent-context-handoffs", 1),
  },
] as const;

for (const path of pathCases) {
  test(`shows the ${path.name} path with sourced topics and a learning check`, async ({
    page,
  }) => {
    await page.goto("/");
    const navigation = page.getByRole("navigation", { name: "Themen" });
    await expect(navigation.locator("li")).toHaveCount(49);
    await expect(
      page.getByRole("button", {
        name: topicTitle("focused-git-commits"),
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
    if ((page.viewportSize()?.width ?? 0) < 800) {
      await page.getByRole("button", { name: "Zur Themenliste" }).click();
    }
    await expect(
      page.getByRole("button", {
        name: `Lerncheck starten: ${path.startingTopic}`,
      }),
    ).toHaveCount(1);
  });
}

import { topics } from "../../../src/verticals/topics/topics";
import { expect, test } from "@playwright/test";

test("zeigt einen Lernpfad und eine quellengebundene Karte", async ({
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
  test(`shows the ${path.name} path with sourced cards and a learning check`, async ({
    page,
  }) => {
    await page.goto("/");
    const navigation = page.getByRole("navigation", { name: "Lernthemen" });
    await expect(navigation.locator("li")).toHaveCount(45);
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
        name: `Fragen starten: ${path.startingTopic}`,
      }),
    ).toHaveCount(1);
  });
}

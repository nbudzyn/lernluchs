import { describe, expect, it } from "vitest";

import { topics } from "../../../src/verticals/topics/topics";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

const coreTopicIds = [
  "human-ai-responsibility",
  "problem-understanding-and-change-boundaries",
  "agents-md",
  "ears-requirements",
  "coding-agent-context-and-trust-boundaries",
  "protect-secrets-and-sensitive-data-with-ai",
  "research-plan-tasks",
  "spec-driven-development-openspec",
  "parallel-agent-task-boundaries",
  "git-worktrees-for-isolated-changes",
  "versioned-library-docs-with-context7",
  "specialized-subagents-and-ownership",
  "agent-context-handoffs",
  "agent-tool-and-mcp-permissions",
  "module-boundaries-and-public-interfaces",
  "tdd-for-domain-behavior",
  "archunit-for-java-architecture",
  "deterministic-agent-verification-gates",
  "refactorings-and-migrations-with-openrewrite",
  "playwright-for-web-flows",
  "web-xss-and-safe-dom",
  "dependency-security-assessment",
  "review-and-accept-ai-generated-changes",
  "compare-parallel-and-serial-agent-work",
  "focused-git-commits",
];

const workflowTopicIds = [
  "domain-language-and-complexity",
  "project-documentation-and-checklists",
  "open-knowledge-format",
  "goal-discovery-and-stop-criteria",
  "design-and-legacy-specification",
  "standards-and-constraint-rationale",
  "llm-fallibility-and-counterchecks",
  "context-selection-and-reset",
  "codegraphs-for-large-repos",
  "token-efficiency-tools",
  "coding-agent-interface-selection",
  "agent-skills-and-commands",
  "spec-framework-selection",
  "automation-value-and-gates",
  "web-security-baseline",
  "ui-design-system-workflow",
  "technical-documentation-generation",
  "bug-triage-and-pr-automation",
  "local-model-stack-evaluation",
  "coding-harness-design",
];

// Neue Themen sind eigenständig; die relative Reihenfolge des Bestands bleibt.
const integrationTopicIds = [
  "model-and-api-lifecycle",
  "agent-protocol-integration",
  "java-ai-applications",
];

const coreLearningPaths = [
  {
    name: pathName(0),
    topicIds: [
      "human-ai-responsibility",
      "problem-understanding-and-change-boundaries",
      "agents-md",
      "ears-requirements",
      "research-plan-tasks",
      "spec-driven-development-openspec",
    ],
  },
  {
    name: pathName(1),
    topicIds: [
      "problem-understanding-and-change-boundaries",
      "ears-requirements",
      "module-boundaries-and-public-interfaces",
      "tdd-for-domain-behavior",
      "archunit-for-java-architecture",
      "playwright-for-web-flows",
      "web-xss-and-safe-dom",
      "dependency-security-assessment",
    ],
  },
  {
    name: pathName(2),
    topicIds: [
      "human-ai-responsibility",
      "problem-understanding-and-change-boundaries",
      "agents-md",
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
      "research-plan-tasks",
      "tdd-for-domain-behavior",
      "review-and-accept-ai-generated-changes",
    ],
  },
  {
    name: pathName(3),
    topicIds: [
      "git-worktrees-for-isolated-changes",
      "versioned-library-docs-with-context7",
      "module-boundaries-and-public-interfaces",
      "tdd-for-domain-behavior",
      "archunit-for-java-architecture",
      "refactorings-and-migrations-with-openrewrite",
      "playwright-for-web-flows",
    ],
  },
  {
    name: pathName(4),
    topicIds: [
      "parallel-agent-task-boundaries",
      "git-worktrees-for-isolated-changes",
      "specialized-subagents-and-ownership",
      "agent-context-handoffs",
      "agent-tool-and-mcp-permissions",
      "deterministic-agent-verification-gates",
      "review-and-accept-ai-generated-changes",
      "compare-parallel-and-serial-agent-work",
    ],
  },
];

describe("vollständige Lernpfade", () => {
  it("ordnet alle Themen einmal in der gemeinsamen Liste", () => {
    const ids = topics.items.map((item) => item.id);
    expect(ids).toHaveLength(
      coreTopicIds.length +
        workflowTopicIds.length +
        integrationTopicIds.length,
    );
    expect(ids.filter((id) => integrationTopicIds.includes(id))).toEqual(
      integrationTopicIds,
    );
    for (const [id, predecessor] of [
      [integrationTopicIds[0], "coding-agent-interface-selection"],
      [integrationTopicIds[1], "agent-tool-and-mcp-permissions"],
      [integrationTopicIds[2], "module-boundaries-and-public-interfaces"],
    ]) {
      expect(ids.indexOf(id), id).toBe(ids.indexOf(predecessor) + 1);
    }
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.filter((id) => coreTopicIds.includes(id))).toEqual(coreTopicIds);
    expect(ids.filter((id) => workflowTopicIds.includes(id))).toEqual(
      workflowTopicIds,
    );
    for (const id of workflowTopicIds) {
      const topic = topics.items.find((item) => item.id === id);
      expect(topic, id).toBeDefined();
      expect(topic?.editorial.reviewedAt, id).toBe(
        id === "token-efficiency-tools" ? "2026-10-03" : "2026-09-27",
      );
      expect(
        topic?.sources.some((source) => source.origin === "primary"),
        id,
      ).toBe(true);
      expect(
        topic?.sources.every(
          (source) => source.checkedAt >= topic.editorial.publishedAt,
        ),
        id,
      ).toBe(true);
    }
    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
  });

  it("bündelt die unabhängige Review in der bestehenden Thema", () => {
    const review = topics.items.find(
      (item) => item.id === "review-and-accept-ai-generated-changes",
    );
    expect(review?.content.coreConcept).toContain("zweite");
    expect(review?.content.boundary).toContain("Review-Agent");
    expect(
      topics.items.some((item) => item.id === "independent-agent-review"),
    ).toBe(false);
    const automationPath = topics.paths?.find(
      (path) => path.name === pathName(11),
    );
    expect(
      automationPath?.topicIds.filter(
        (id) => id === "review-and-accept-ai-generated-changes",
      ),
    ).toHaveLength(1);
  });

  it("bewahrt die Kernpfade und ordnet jedes Thema mindestens einem Pfad zu", () => {
    expect(topics.paths?.slice(0, 5)).toEqual(coreLearningPaths);
    expect(topics.paths?.slice(5).map((path) => path.name)).toEqual([
      pathName(5),
      pathName(6),
      pathName(7),
      pathName(8),
      pathName(9),
      pathName(10),
      pathName(11),
      pathName(12),
      "KI-Funktionen in Java-Webanwendungen bauen",
    ]);
    const positions = new Map(
      topics.items.map((item, index) => [item.id, index]),
    );
    const assigned = new Set(topics.paths?.flatMap((path) => path.topicIds));
    for (const id of [
      ...coreTopicIds,
      ...workflowTopicIds,
      ...integrationTopicIds,
    ]) {
      expect(assigned.has(id), id).toBe(true);
    }
    const selection = topics.paths?.find((path) => path.name === pathName(8));
    expect(selection?.topicIds).toContain("model-and-api-lifecycle");
    expect(selection?.topicIds).toContain("agent-protocol-integration");
    expect(topics.paths?.at(-1)?.topicIds).toEqual([
      "protect-secrets-and-sensitive-data-with-ai",
      "model-and-api-lifecycle",
      "agent-tool-and-mcp-permissions",
      "agent-protocol-integration",
      "module-boundaries-and-public-interfaces",
      "java-ai-applications",
      "tdd-for-domain-behavior",
      "web-security-baseline",
    ]);
    for (const path of topics.paths ?? []) {
      const pathPositions = path.topicIds.map((id) => positions.get(id));
      expect(pathPositions, path.name).toEqual(
        [...pathPositions].sort((a, b) => (a ?? 0) - (b ?? 0)),
      );
      expect(new Set(path.topicIds).size, path.name).toBe(path.topicIds.length);
    }
  });
});

function pathName(index: number) {
  return topics.paths![index].name;
}
const modernizationTopicIds = [
  "git-worktrees-for-isolated-changes",
  "versioned-library-docs-with-context7",
  "module-boundaries-and-public-interfaces",
  "tdd-for-domain-behavior",
  "archunit-for-java-architecture",
  "refactorings-and-migrations-with-openrewrite",
  "playwright-for-web-flows",
];

it("provides sourced modernization topics in path order", () => {
  const path = topics.paths?.find((item) => item.name === pathName(3));
  expect(path?.topicIds).toEqual(modernizationTopicIds);
  expect(
    topics.items
      .map((item) => item.id)
      .filter((id) => modernizationTopicIds.includes(id)),
  ).toEqual(modernizationTopicIds);

  for (const id of [
    modernizationTopicIds[0],
    modernizationTopicIds[1],
    modernizationTopicIds[2],
    modernizationTopicIds[5],
  ]) {
    const item = topics.items.find((candidate) => candidate.id === id);
    expect(item).toBeDefined();
    expect(item?.sources.some((source) => source.origin === "primary")).toBe(
      true,
    );
    expect(item?.editorial.reviewedAt).toBe("2026-09-27");
  }
  expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
});

const parallelAgentTopicIds = [
  "parallel-agent-task-boundaries",
  "git-worktrees-for-isolated-changes",
  "specialized-subagents-and-ownership",
  "agent-context-handoffs",
  "agent-tool-and-mcp-permissions",
  "deterministic-agent-verification-gates",
  "review-and-accept-ai-generated-changes",
  "compare-parallel-and-serial-agent-work",
];

it("provides sourced parallel agent topics in path order", () => {
  const path = topics.paths?.find((item) => item.name === pathName(4));
  expect(path?.topicIds).toEqual(parallelAgentTopicIds);
  expect(
    topics.items
      .map((item) => item.id)
      .filter((id) => parallelAgentTopicIds.includes(id)),
  ).toEqual(parallelAgentTopicIds);

  for (const id of parallelAgentTopicIds.filter(
    (candidate) =>
      candidate !== "git-worktrees-for-isolated-changes" &&
      candidate !== "review-and-accept-ai-generated-changes",
  )) {
    const item = topics.items.find((candidate) => candidate.id === id);
    expect(item).toBeDefined();
    expect(item?.sources.some((source) => source.origin === "primary")).toBe(
      true,
    );
    expect(item?.editorial.reviewedAt).toBe(
      id === "agent-tool-and-mcp-permissions" ? "2026-09-28" : "2026-09-27",
    );
  }
  expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
});

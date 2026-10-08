import { describe, expect, it } from "vitest";

import { topics } from "../../../src/verticals/topics/topics";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

const coreTopicIds = [
  "human-ai-responsibility",
  "problem-understanding-and-change-boundaries",
  "agents-md",
  "ears-requirements",
  "research-plan-tasks",
  "coding-agent-context-and-trust-boundaries",
  "protect-secrets-and-sensitive-data-with-ai",
  "spec-driven-development-openspec",
  "module-boundaries-and-public-interfaces",
  "tdd-for-domain-behavior",
  "archunit-for-java-architecture",
  "parallel-agent-task-boundaries",
  "git-worktrees-for-isolated-changes",
  "versioned-library-docs-with-context7",
  "agent-context-handoffs",
  "agent-tool-and-mcp-permissions",
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
  "design-and-legacy-specification",
  "standards-and-constraint-rationale",
  "llm-fallibility-and-counterchecks",
  "project-documentation-and-checklists",
  "open-knowledge-format",
  "context-selection-and-reset",
  "web-security-baseline",
  "local-model-stack-evaluation",
  "coding-agent-interface-selection",
  "agent-skills-and-commands",
  "codegraphs-for-large-repos",
  "ui-design-system-workflow",
  "automation-value-and-gates",
  "token-efficiency-tools",
  "technical-documentation-generation",
  "bug-triage-and-pr-automation",
  "coding-harness-design",
];

const updatedReviewIds = new Set([
  "archunit-for-java-architecture",
  "domain-language-and-complexity",
  "standards-and-constraint-rationale",
  "context-selection-and-reset",
  "coding-agent-interface-selection",
  "agent-skills-and-commands",
  "review-and-accept-ai-generated-changes",
  "coding-harness-design",
  "agent-context-handoffs",
  "deterministic-agent-verification-gates",
]);

// Alle Themen folgen der freigegebenen gemeinsamen Reihenfolge.
const integrationTopicIds = [
  "java-ai-applications",
  "task-based-model-routing",
  "ai-content-provenance-and-disclosure",
  "agent-protocol-integration",
  "model-and-api-lifecycle",
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
      "research-plan-tasks",
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
      "tdd-for-domain-behavior",
      "review-and-accept-ai-generated-changes",
    ],
  },
  {
    name: pathName(3),
    topicIds: [
      "design-and-legacy-specification",
      "module-boundaries-and-public-interfaces",
      "tdd-for-domain-behavior",
      "archunit-for-java-architecture",
      "git-worktrees-for-isolated-changes",
      "versioned-library-docs-with-context7",
      "refactorings-and-migrations-with-openrewrite",
      "playwright-for-web-flows",
    ],
  },
  {
    name: pathName(4),
    topicIds: [
      "parallel-agent-task-boundaries",
      "git-worktrees-for-isolated-changes",
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
        integrationTopicIds.length +
        1,
    );
    expect(ids.filter((id) => integrationTopicIds.includes(id))).toEqual(
      integrationTopicIds,
    );
    for (const [earlier, later] of [
      ["design-and-legacy-specification", "ears-requirements"],
      ["standards-and-constraint-rationale", "ears-requirements"],
      ["java-ai-applications", "module-boundaries-and-public-interfaces"],
      ["web-security-baseline", "web-xss-and-safe-dom"],
      ["local-model-stack-evaluation", "coding-agent-interface-selection"],
      ["ui-design-system-workflow", "playwright-for-web-flows"],
      ["archunit-for-java-architecture", "git-worktrees-for-isolated-changes"],
      ["versioned-library-docs-with-context7", "token-efficiency-tools"],
      ["automation-value-and-gates", "parallel-agent-task-boundaries"],
      ["agent-protocol-integration", "model-and-api-lifecycle"],
    ]) {
      expect(ids.indexOf(earlier), earlier + " vor " + later).toBeLessThan(
        ids.indexOf(later),
      );
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
        updatedReviewIds.has(id)
          ? "2026-10-09"
          : [
                "coding-harness-design",
                "codegraphs-for-large-repos",
                "spec-driven-development-openspec",
                "coding-agent-interface-selection",
                "agent-skills-and-commands",
                "review-and-accept-ai-generated-changes",
                "deterministic-agent-verification-gates",
                "agent-protocol-integration",
                "java-ai-applications",
                "technical-documentation-generation",
              ].includes(id)
            ? "2026-10-07"
            : id === "token-efficiency-tools"
              ? "2026-10-03"
              : "2026-09-27",
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
    expect(topics.paths).toHaveLength(14);
    const evalId = "agent-evals-and-traces";
    expect(
      topics.items.map((topic) => topic.id).filter((id) => id === evalId),
    ).toEqual([evalId]);
    expect(
      topics.paths
        ?.filter((path) => path.topicIds.includes(evalId))
        .map((path) => path.name),
    ).toEqual([
      "Wiederkehrende Entwicklungsarbeit kontrolliert automatisieren",
      "KI-Funktionen in Java-Webanwendungen bauen",
    ]);
    for (const id of [
      ...coreTopicIds,
      ...workflowTopicIds,
      ...integrationTopicIds,
    ]) {
      expect(assigned.has(id), id).toBe(true);
    }
    const selection = topics.paths?.find((path) => path.name === pathName(8));
    expect(selection?.topicIds).toContain("model-and-api-lifecycle");
    expect(selection?.topicIds).toContain("task-based-model-routing");
    expect(
      topics.paths?.find((path) => path.name === pathName(10))?.topicIds,
    ).toContain("ai-content-provenance-and-disclosure");
    expect(selection?.topicIds).toContain("agent-protocol-integration");
    expect(topics.paths?.at(-1)?.topicIds).toEqual([
      "java-ai-applications",
      "task-based-model-routing",
      "ai-content-provenance-and-disclosure",
      "web-security-baseline",
      "protect-secrets-and-sensitive-data-with-ai",
      "module-boundaries-and-public-interfaces",
      "tdd-for-domain-behavior",
      "agent-tool-and-mcp-permissions",
      "agent-protocol-integration",
      "agent-evals-and-traces",
      "model-and-api-lifecycle",
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
  "design-and-legacy-specification",
  "module-boundaries-and-public-interfaces",
  "tdd-for-domain-behavior",
  "archunit-for-java-architecture",
  "git-worktrees-for-isolated-changes",
  "versioned-library-docs-with-context7",
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
    "git-worktrees-for-isolated-changes",
    "versioned-library-docs-with-context7",
    "module-boundaries-and-public-interfaces",
    "refactorings-and-migrations-with-openrewrite",
  ]) {
    const item = topics.items.find((candidate) => candidate.id === id);
    expect(item).toBeDefined();
    expect(item?.sources.some((source) => source.origin === "primary")).toBe(
      true,
    );
    expect(item?.editorial.reviewedAt, id).toBe(
      id === "refactorings-and-migrations-with-openrewrite"
        ? "2026-10-07"
        : "2026-09-27",
    );
  }
  expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
});

const parallelAgentTopicIds = [
  "parallel-agent-task-boundaries",
  "git-worktrees-for-isolated-changes",
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
      updatedReviewIds.has(id)
        ? "2026-10-09"
        : id === "parallel-agent-task-boundaries"
          ? "2026-10-08"
          : id === "deterministic-agent-verification-gates"
            ? "2026-10-07"
            : id === "agent-tool-and-mcp-permissions"
              ? "2026-09-28"
              : "2026-09-27",
    );
  }
  expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
});

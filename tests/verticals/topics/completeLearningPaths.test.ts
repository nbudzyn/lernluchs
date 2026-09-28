import { describe, expect, it } from "vitest";

import { topics } from "../../../src/verticals/topics/topics";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

const existingIds = [
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
  "code-navigation-with-symbols-and-references",
  "versioned-library-docs-with-context7",
  "specialized-subagents-and-ownership",
  "agent-context-handoffs",
  "agent-tool-and-mcp-permissions",
  "module-boundaries-and-public-interfaces",
  "tdd-for-domain-behavior",
  "archunit-for-java-architecture",
  "deterministic-agent-verification-gates",
  "java-spring-migrations-with-openrewrite",
  "playwright-for-web-flows",
  "web-xss-and-safe-dom",
  "dependency-security-assessment",
  "review-and-accept-ai-generated-changes",
  "compare-parallel-and-serial-agent-work",
  "focused-git-commits",
];

const newIds = [
  "domain-language-and-complexity",
  "project-documentation-and-checklists",
  "open-knowledge-format",
  "goal-discovery-and-stop-criteria",
  "design-and-legacy-specification",
  "standards-and-constraint-rationale",
  "llm-fallibility-and-counterchecks",
  "context-selection-and-reset",
  "codebase-memory-for-large-repos",
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

const existingPaths = [
  {
    name: "Grundlagen für KI-gestützte Softwareentwicklung",
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
    name: "Änderungen gestalten und absichern",
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
    name: "Sicher mit Coding-Agenten arbeiten",
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
    name: "Java-/Web-Code technisch analysieren und modernisieren",
    topicIds: [
      "git-worktrees-for-isolated-changes",
      "code-navigation-with-symbols-and-references",
      "versioned-library-docs-with-context7",
      "module-boundaries-and-public-interfaces",
      "tdd-for-domain-behavior",
      "archunit-for-java-architecture",
      "java-spring-migrations-with-openrewrite",
      "playwright-for-web-flows",
    ],
  },
  {
    name: "Parallele Coding-Agenten kritisch erproben",
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
  it("ordnet alle bestehenden und neuen Themen einmal in der gemeinsamen Liste", () => {
    const ids = topics.items.map((item) => item.id);
    expect(ids).toHaveLength(existingIds.length + newIds.length);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.filter((id) => existingIds.includes(id))).toEqual(existingIds);
    expect(ids.filter((id) => newIds.includes(id))).toEqual(newIds);
    for (const id of newIds) {
      const topic = topics.items.find((item) => item.id === id);
      expect(topic, id).toBeDefined();
      expect(topic?.editorial.reviewedAt, id).toBe("2026-09-27");
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

  it("bündelt die unabhängige Review in der bestehenden Karte", () => {
    const review = topics.items.find(
      (item) => item.id === "review-and-accept-ai-generated-changes",
    );
    expect(review?.content.coreConcept).toContain("zweite");
    expect(review?.content.boundary).toContain("Review-Agent");
    expect(
      topics.items.some((item) => item.id === "independent-agent-review"),
    ).toBe(false);
    const automationPath = topics.paths?.find(
      (path) =>
        path.name ===
        "Wiederkehrende Entwicklungsarbeit kontrolliert automatisieren",
    );
    expect(
      automationPath?.topicIds.filter(
        (id) => id === "review-and-accept-ai-generated-changes",
      ),
    ).toHaveLength(1);
  });

  it("bewahrt die fünf Pfade und ordnet jedes Thema in mindestens einen neuen oder alten Pfad", () => {
    expect(topics.paths?.slice(0, 5)).toEqual(existingPaths);
    expect(topics.paths?.slice(5).map((path) => path.name)).toEqual([
      "Projektwissen für kleine Java-/Web-Teams pflegen",
      "Unklare Änderungswünsche in prüfbare Aufträge übersetzen",
      "Agentenkontext in großen Repositories steuern",
      "Coding-Agenten und Spec-Systeme gezielt auswählen",
      "Weboberflächen und technische Dokumentation gestalten",
      "Sicherheit und Qualität eines Webprodukts bewerten",
      "Wiederkehrende Entwicklungsarbeit kontrolliert automatisieren",
      "Lokale KI-Stacks für sensible Projekte prüfen",
    ]);
    const positions = new Map(
      topics.items.map((item, index) => [item.id, index]),
    );
    const assigned = new Set(topics.paths?.flatMap((path) => path.topicIds));
    for (const id of [...existingIds, ...newIds]) {
      expect(assigned.has(id), id).toBe(true);
    }
    for (const path of topics.paths ?? []) {
      const pathPositions = path.topicIds.map((id) => positions.get(id));
      expect(pathPositions, path.name).toEqual(
        [...pathPositions].sort((a, b) => (a ?? 0) - (b ?? 0)),
      );
      expect(new Set(path.topicIds).size, path.name).toBe(path.topicIds.length);
    }
  });
});

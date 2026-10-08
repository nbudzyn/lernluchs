import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks/questionPools";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

// These reviewed pools additionally reject giveaway absolutes in distractors.
const reviewedDistractorPools = new Set([
  "parallel-agent-task-boundaries",
  "agent-context-handoffs",
  "agent-tool-and-mcp-permissions",
  "deterministic-agent-verification-gates",
  "agent-skills-and-commands",
  "spec-driven-development-openspec",
  "automation-value-and-gates",
  "web-security-baseline",
  "ui-design-system-workflow",
  "technical-documentation-generation",
  "bug-triage-and-pr-automation",
  "local-model-stack-evaluation",
]);

const weakExamples: Record<string, string[]> = {
  "human-ai-responsibility": [
    "Mit dem abschließenden Audit",
    "Nur die Anzahl der UI-Klicks",
    "Nur den Speicherbedarf beim Training",
  ],
  "agents-md": [
    "Binärdatei",
    "Mit einer Datei im Browsercache",
    "Eine Liste aller früheren Chatnachrichten",
  ],
  "ears-requirements": [
    "Die Anzahl der Entwickler",
    "Genau fünf",
    "Langsame Netzwerkverbindungen",
  ],
  "problem-understanding-and-change-boundaries": [
    "Die Anzahl historischer Sterne",
    "Nur den Browser-Tabtitel ansehen",
    "Nur die Anzahl der Klassen zählen",
  ],
  "research-plan-tasks": [
    "Nur die Farbe der Entwicklungsumgebung",
    "Ein geheimes Token im Bild verstecken",
    "Welche Datei die meisten Leerzeichen hat",
  ],
  "spec-driven-development-openspec": [
    "Der Lockfile",
    "Ein Konsolenprotokoll",
    "Nur die geschätzte Arbeitszeit",
  ],
};

describe("questionPools", () => {
  it("owns the published pools by stable ID and leaves new topics without pools", () => {
    expect(availableLearningCheckTopicIds).toHaveLength(42);
    const topicsWithoutPool = [
      "task-based-model-routing",
      "ai-content-provenance-and-disclosure",
      "agent-evals-and-traces",
      "model-and-api-lifecycle",
      "agent-protocol-integration",
      "java-ai-applications",
    ];
    expect([...availableLearningCheckTopicIds].sort()).toEqual(
      topics.items
        .map((topic) => topic.id)
        .filter((id) => !topicsWithoutPool.includes(id))
        .sort(),
    );
    for (const id of topicsWithoutPool) {
      expect(
        topics.items.some((topic) => topic.id === id),
        id,
      ).toBe(true);
      expect(questionsForTopic(id), id).toBeUndefined();
    }
    expect(questionsForTopic("unknown-topic")).toBeUndefined();
  });

  it("provides 25 valid, distinct and sourced questions in every published pool", () => {
    for (const topic of topics.items.filter((item) =>
      availableLearningCheckTopicIds.includes(item.id),
    )) {
      const questions = questionsForTopic(topic.id);
      expect.soft(questions, `${topic.id}: missing pool`).toBeDefined();
      if (!questions) continue;
      const mergedSizes: Record<string, number> = {
        "problem-understanding-and-change-boundaries": 50,
        "spec-driven-development-openspec": 41,
        "parallel-agent-task-boundaries": 42,
      };
      expect
        .soft(questions, `${topic.id}: pool size`)
        .toHaveLength(mergedSizes[topic.id] ?? 25);
      expect
        .soft(validateQuestionPool(topic, questions), `${topic.id}: validation`)
        .toEqual([]);
      const seen = new Set<string>();
      for (const question of questions) {
        expect
          .soft(
            seen.has(question.prompt),
            `${topic.id}/${question.id}: duplicate prompt`,
          )
          .toBe(false);
        seen.add(question.prompt);
      }
    }
  });

  it("keeps reviewed distractors plausible and removes unrelated examples", () => {
    for (const topicId of new Set([
      ...reviewedDistractorPools,
      ...Object.keys(weakExamples),
    ])) {
      const questions = questionsForTopic(topicId);
      expect.soft(questions, `${topicId}: missing reviewed pool`).toBeDefined();
      if (!questions) continue;
      const distractors = questions.flatMap((question) =>
        question.options
          .filter((option) => !option.correct)
          .map((option) => ({ question, option })),
      );
      expect
        .soft(distractors.length, `${topicId}: distractor count`)
        .toBeGreaterThanOrEqual(50);
      for (const { question, option } of distractors) {
        const context = `${topicId}/${question.id}/${option.id}`;
        expect
          .soft(option.explanation.trim(), `${context}: explanation`)
          .not.toBe("");
        expect
          .soft(weakExamples[topicId] ?? [], `${context}: unrelated answer`)
          .not.toContain(option.text);
        // Preserve the extra review scope of each original pool after consolidation.
        if (
          reviewedDistractorPools.has(topicId) &&
          (topicId !== "spec-driven-development-openspec" ||
            question.id.startsWith("SF")) &&
          (topicId !== "parallel-agent-task-boundaries" ||
            question.id.startsWith("subagent-ownership-"))
        ) {
          expect
            .soft(option.text, `${context}: giveaway absolute`)
            .not.toMatch(/\b(nur|immer|nie|ausschließlich)\b/i);
        }
      }
    }
  });

  it("retains all reviewed distinct concepts", () => {
    const concepts: [string, string, RegExp][] = [
      [
        "parallel-agent-task-boundaries",
        "subagent-ownership-19",
        /Simulationen/,
      ],
      ["parallel-agent-task-boundaries", "subagent-ownership-23", /Skills/],
      ["agent-context-handoffs", "agent-handoff-22", /Werkzeugnamen/],
      [
        "deterministic-agent-verification-gates",
        "agent-verification-04",
        /schreibberechtigte/,
      ],
    ];
    for (const [topicId, questionId, concept] of concepts) {
      const question = questionsForTopic(topicId)?.find(
        (item) => item.id === questionId,
      );
      expect
        .soft(question, `${topicId}/${questionId}: missing concept question`)
        .toBeDefined();
      expect
        .soft(
          question?.options.find((option) => option.correct)?.text,
          `${topicId}/${questionId}: reviewed concept`,
        )
        .toMatch(concept);
    }
  });

  it("provides workspace pools in published topic order", () => {
    const positions = [
      "parallel-agent-task-boundaries",
      "git-worktrees-for-isolated-changes",
      "versioned-library-docs-with-context7",
    ].map((id) => topics.items.findIndex((topic) => topic.id === id));
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
    expect(positions[0]).toBeGreaterThanOrEqual(0);
  });
});

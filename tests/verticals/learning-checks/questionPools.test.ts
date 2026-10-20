import { fingerprint } from "../../shared/fingerprint";
import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks/questionPools";

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
  it("reuses deeply immutable pools and the published topic ID list", () => {
    expect(Object.isFrozen(availableLearningCheckTopicIds)).toBe(true);
    for (const id of availableLearningCheckTopicIds) {
      const pool = questionsForTopic(id)!;
      expect.soft(questionsForTopic(id), `${id}: stable view`).toBe(pool);
      expect.soft(Object.isFrozen(pool), `${id}: pool`).toBe(true);
      for (const question of pool) {
        expect
          .soft(Object.isFrozen(question), `${id}/${question.id}`)
          .toBe(true);
        expect
          .soft(
            Object.isFrozen(question.options),
            `${id}/${question.id}: options`,
          )
          .toBe(true);
        for (const option of question.options)
          expect
            .soft(Object.isFrozen(option), `${id}/${question.id}/${option.id}`)
            .toBe(true);
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

  it("preserves unchanged questions, answers, sources and IDs after merging and deduplication", async () => {
    const questions = availableLearningCheckTopicIds
      .flatMap((id) => questionsForTopic(id)!)
      .sort((a, b) => a.id.localeCompare(b.id));
    expect(availableLearningCheckTopicIds).toHaveLength(42);
    expect(await fingerprint(questions)).toBe(
      "a0fb39192cd37da1e476380da29b9b97210f20cc7e5d274bb03017bb60fbe5e1",
    );
  });
});

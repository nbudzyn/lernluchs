import { describe, expect, it } from "vitest";

import { catalog } from "../../../src/verticals/catalog/catalog";

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

describe("foundation distractors", () => {
  for (const [itemId, examples] of Object.entries(weakExamples)) {
    it(`${itemId} replaces unrelated and easy-to-dismiss answers`, () => {
      const questions = catalog.items.find(
        (item) => item.id === itemId,
      )?.questions;
      expect(questions?.length).toBeGreaterThanOrEqual(25);
      const distractors = questions?.flatMap((question) =>
        question.options.filter((option) => !option.correct),
      );
      expect(distractors?.length).toBeGreaterThanOrEqual(50);
      for (const option of distractors ?? []) {
        expect(option.explanation.trim()).not.toBe("");
        expect(examples).not.toContain(option.text);
      }
    });
  }
});

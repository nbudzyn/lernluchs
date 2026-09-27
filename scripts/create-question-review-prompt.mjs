import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { remainingQuestions } from "../src/verticals/learning-checks/remainingQuestions.ts";

const target = process.argv[2];
if (!target) throw new Error("Provide the output path for the review prompt.");
const requestedIds = new Set(process.argv.slice(3));

const titles = {
  "coding-agent-context-and-trust-boundaries":
    "Kontext und Vertrauensgrenzen für Coding-Agenten",
  "protect-secrets-and-sensitive-data-with-ai":
    "Geheimnisse und sensible Daten beim KI-Einsatz schützen",
  "review-and-accept-ai-generated-changes":
    "KI-generierte Änderungen prüfen und übernehmen",
  "focused-git-commits": "Git-Commits klein und nachvollziehbar halten",
};

const lines = [
  "# Unabhängige fachliche Prüfung der vier neuen Fragenpools",
  "",
  "Prüfe alle folgenden Fragen unabhängig gegen die angegebenen Originalquellen. Untersuche fachliche Fehler, mehrdeutige richtige Antworten, unplausible oder ebenfalls richtige Falschantworten, Wiederholungen innerhalb und zwischen Themen sowie Quellenbezüge, die die Aussage nicht tragen. Berücksichtige bei jeder Option Text, Erklärung und URL. Gib ausschließlich eine möglichst kurze Liste der beanstandeten stabilen Fragen-IDs mit je einem knappen Grund zurück; falls keine Frage beanstandet wird, antworte nur mit `Keine Beanstandungen`. Öffne die Quellen selbst und rate nicht bei unsicheren Aussagen.",
  "",
];

for (const [topicId, questions] of Object.entries(remainingQuestions)) {
  const selected = questions.filter(
    (question) => requestedIds.size === 0 || requestedIds.has(question.id),
  );
  if (selected.length === 0) continue;
  lines.push(`## ${titles[topicId]} (${topicId})`, "");
  for (const question of selected) {
    lines.push(`### ${question.id}: ${question.prompt}`);
    for (const option of question.options) {
      lines.push(
        `- ${option.id} ${option.correct ? "[richtig]" : "[falsch]"} ${option.text} — ${option.explanation} — ${option.sourceUrl}`,
      );
    }
    lines.push("");
  }
}

if (requestedIds.size > 0) {
  const count = lines.filter((line) => line.startsWith("### ")).length;
  if (count !== requestedIds.size)
    throw new Error("Unknown question ID requested.");
}

writeFileSync(resolve(target), `${lines.join("\n")}\n`, "utf8");

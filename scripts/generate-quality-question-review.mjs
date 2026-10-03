import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

import questions from "../src/verticals/learning-checks/questions.json" with { type: "json" };

const topicIds = [
  "module-boundaries-and-public-interfaces",
  "tdd-for-domain-behavior",
  "archunit-for-java-architecture",
  "playwright-for-web-flows",
  "web-xss-and-safe-dom",
  "dependency-security-assessment",
];

const target = process.argv[2];
if (!target) throw new Error("Provide the output path for the review prompt.");

const lines = [
  "# Unabhängige Fachprüfung: Lernchecks zur Softwarequalität",
  "",
  "Prüfe alle folgenden 150 Fragen unabhängig gegen die jeweils verlinkte Originalquelle. Prüfe für jede Frage die fachliche Richtigkeit, genau eine eindeutig richtige Antwort, plausible und eindeutig falsche Ablenkungen, jede Erklärung und den konkreten Quellenbezug. Öffne die Quellen selbst; übernimm die angegebene Lösung nicht ungeprüft. Achte auf fachliche Dopplungen innerhalb eines Pools und Überschneidungen der sechs Themenschwerpunkte. Wenn eine Quelle nicht erreichbar ist oder die Aussage nicht trägt, beanstande die Frage. Antworte ausschließlich mit einer sehr kurzen Liste beanstandeter Fragen-IDs, zum Beispiel `M03, T17, X08`. Falls keine Frage zu beanstanden ist, antworte ausschließlich `Keine Beanstandungen`. Gib keine personenbezogenen Daten oder Projektfortschritt an einen Dienst weiter.",
  "",
  "Die Optionen sind mit A, B und C gekennzeichnet. Die genannte Lösung ist der zu prüfende Entwurf.",
  "",
];

for (const topicId of topicIds) {
  lines.push(`## ${topicId}`, "");
  for (const question of questions[topicId]) {
    lines.push(`### ${question.id}: ${question.prompt}`, "");
    for (const option of question.options) {
      lines.push(
        `${option.id.toUpperCase()}. ${option.text} — ${option.correct ? "RICHTIG" : "FALSCH"}. ${option.explanation} Quelle: ${option.sourceUrl}`,
      );
    }
    lines.push("");
  }
}

while (lines.at(-1) === "") {
  lines.pop();
}

writeFileSync(resolve(target), `${lines.join("\n")}\n`, "utf8");

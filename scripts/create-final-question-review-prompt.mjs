import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { createServer } from "vite";

const target = process.argv[2];
if (!target) throw new Error("Provide the output path for the review prompt.");

const server = await createServer({
  configFile: false,
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const pools = await Promise.all(
    [
      ["OpenRewrite", "openRewriteQuestions.ts", "openRewriteQuestions"],
      [
        "Serielle und parallele Agenten",
        "parallelComparisonQuestions.ts",
        "parallelComparisonQuestions",
      ],
      [
        "Agenten-Harness",
        "harnessDesignQuestions.ts",
        "harnessDesignQuestions",
      ],
    ].map(async ([title, file, exportName]) => {
      const module = await server.ssrLoadModule(
        `/src/verticals/learning-checks/${file}`,
      );
      return { title, questions: module[exportName] };
    }),
  );
  const { topics } = await server.ssrLoadModule(
    "/src/verticals/topics/topics.ts",
  );
  const { validateQuestionPool } = await server.ssrLoadModule(
    "/src/verticals/learning-checks/validateQuestionPool.ts",
  );
  const topicIds = [
    "java-spring-migrations-with-openrewrite",
    "compare-parallel-and-serial-agent-work",
    "coding-harness-design",
  ];
  const ids = new Set();

  for (const [index, { title, questions }] of pools.entries()) {
    const topic = topics.items.find((item) => item.id === topicIds[index]);
    const errors = validateQuestionPool(topic, questions);
    if (errors.length) throw new Error(`${title}: ${errors.join("; ")}`);
    if (new Set(questions.map((question) => question.prompt)).size !== 25)
      throw new Error(`${title}: duplicate question prompt`);
    for (const question of questions) {
      if (ids.has(question.id)) throw new Error(`Duplicate ID: ${question.id}`);
      ids.add(question.id);
    }
  }

  const lines = [
    "# Unabhängige fachliche Prüfung der drei letzten Fragenpools",
    "",
    "Prüfe alle 75 Fragen anhand der jeweils verlinkten Originalquellen. Achte auf fachliche Fehler, Mehrdeutigkeit, ebenfalls richtige oder schwache Falschantworten, Wiederholung desselben Wissens und unzutreffende Quellenbezüge. Prüfe jede Option samt Erklärung. Wenn eine Quelle nicht erreichbar ist, kennzeichne die betroffene ID als ungeprüft. Gib nur eine sehr kurze Liste beanstandeter stabiler Fragen-IDs mit knappem Grund zurück. Wenn nichts zu beanstanden ist, antworte: Keine Beanstandungen.",
    "",
  ];

  for (const { title, questions } of pools) {
    if (questions.length !== 25) throw new Error(`Expected 25 for ${title}`);
    lines.push(`## ${title}`, "");
    for (const question of questions) {
      lines.push(`### ${question.id}: ${question.prompt}`);
      for (const option of question.options) {
        lines.push(
          `- ${option.id} [${option.correct ? "richtig" : "falsch"}] ${option.text} — ${option.explanation} — ${option.sourceUrl}`,
        );
      }
      lines.push("");
    }
  }

  writeFileSync(resolve(target), `${lines.join("\n")}\n`, "utf8");
  console.log(`Review prompt created with 75 questions: ${resolve(target)}`);
} finally {
  await server.close();
}

import { configDefaults, defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import questions from "./src/verticals/learning-checks/questions.json" with { type: "json" };
import type { Question } from "./src/shared/question";

// Ein gepflegter Fragenbestand, beim Produktionsbuild nach Pool aufteilbar.
function questionPoolModules() {
  const questionPoolsId = "\0question-pools";
  const poolPrefix = "\0question-pool:";
  const pools: Record<string, Question[]> = questions;

  return {
    name: "question-pool-modules",
    enforce: "pre" as const,
    apply: "build" as const,
    resolveId(source: string, importer?: string) {
      if (source.startsWith(poolPrefix)) return source;
      if (
        source === "./questions.json" &&
        importer
          ?.replaceAll("\\", "/")
          .endsWith("/learning-checks/questionPools.ts")
      ) {
        return questionPoolsId;
      }
    },
    load(id: string) {
      if (id === questionPoolsId) {
        const entries = Object.keys(pools);
        const imports = entries.map(
          (topicId, index) =>
            `import pool${index} from ${JSON.stringify(poolPrefix + topicId)};`,
        );
        const properties = entries.map(
          (topicId, index) => `${JSON.stringify(topicId)}: pool${index}`,
        );
        return `${imports.join("\n")}\nexport default {${properties.join(",")}};`;
      }
      if (id.startsWith(poolPrefix)) {
        const pool = pools[id.slice(poolPrefix.length)];
        const sources = [
          ...new Set(
            pool.flatMap((question) =>
              question.options.map((option) => option.sourceUrl),
            ),
          ),
        ];
        const rows = pool.map((question) => [
          question.id,
          question.prompt,
          question.options.map((option) => [
            option.id,
            option.text,
            option.correct,
            option.explanation,
            sources.indexOf(option.sourceUrl),
          ]),
        ]);
        // Wiederholte URLs und Feldnamen im ausgelieferten Code vermeiden.
        return `const sources = ${JSON.stringify(sources)};
export default ${JSON.stringify(rows)}.map(([id, prompt, options]) => ({
  id, prompt, options: options.map(([id, text, correct, explanation, source]) => ({
    id, text, correct, explanation, sourceUrl: sources[source]
  }))
}));`;
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const { PAGES_BASE_PATH: pagesBasePath } = loadEnv(mode, "", "");

  return {
    base: pagesBasePath || "/",
    plugins: [react(), questionPoolModules()],
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              // Themen und Fragenpools separat ausliefern; die 500-kB-Warngrenze bleibt aktiv.
              {
                name: "topics",
                test: /[\\/]verticals[\\/]topics[\\/]topics\.ts$/,
              },
              {
                name: "questions",
                test: /question-pool:/,
                maxSize: 400_000,
              },
            ],
          },
        },
      },
    },
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
    },
  };
});

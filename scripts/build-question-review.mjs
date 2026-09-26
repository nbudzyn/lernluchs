import { readFileSync, writeFileSync } from "node:fs";

const base =
  "docs/changes/implemented/answer-source-backed-foundation-questions";
const draft = readFileSync(`${base}/draft-questions.md`, "utf8");
const wrongReasons = new Map(
  readFileSync(`${base}/wrong-explanations.md`, "utf8")
    .split("\n")
    .filter((line) => /^\| [HAEPRS]\d{2} \|/.test(line))
    .map((line) => {
      const [id, reasonB, reasonC] = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim());
      if (!reasonB || !reasonC)
        throw new Error(`Missing explanation for ${id}`);
      return [id, { reasonB, reasonC }];
    }),
);
const sources = {
  H: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/",
  A: "https://agents.md/",
  V: "https://code.visualstudio.com/docs/agent-customization/custom-instructions",
  E: "https://alistairmavin.com/ears/",
  P: "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results",
  O: "https://openai.com/business/guides-and-resources/how-openai-uses-codex/",
  R: "https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate",
  S: "https://openspec.dev/docs/schemas/spec-driven",
  Q: "https://openspec.dev/docs/quickstart",
  T: "https://docs.github.com/en/copilot/tutorials/optimize-ai-usage",
};

const rows = draft
  .split("\n")
  .filter((line) => /^\| [HAEPRS]\d{2} \|/.test(line));
const ids = new Set();
const counts = new Map();
const questions = rows.map((line) => {
  const cells = line
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
  const [id, prompt, correct, wrongOne, wrongTwo, reason, sourceCode] = cells;
  if (ids.has(id)) throw new Error(`Duplicate question ID ${id}`);
  ids.add(id);
  counts.set(id[0], (counts.get(id[0]) ?? 0) + 1);
  if ([prompt, correct, wrongOne, wrongTwo, reason].some((value) => !value))
    throw new Error(`Incomplete question ${id}`);
  const source = sources[sourceCode ?? id[0]];
  if (!source) throw new Error(`Missing source ${id}`);
  const wrong = wrongReasons.get(id);
  if (!wrong) throw new Error(`Missing wrong-option explanation ${id}`);
  return { id, prompt, correct, wrongOne, wrongTwo, reason, source, ...wrong };
});

if (wrongReasons.size !== rows.length)
  throw new Error("Wrong-option explanation count differs from question count");

for (const card of ["H", "A", "E", "P", "R", "S"]) {
  if (counts.get(card) !== 25)
    throw new Error(
      `Expected 25 questions for ${card}, got ${counts.get(card) ?? 0}`,
    );
}

const prompt = [
  "# Unabhängige fachliche Prüfung der Grundlagenfragen",
  "",
  "Bitte prüfe alle 150 Fragen unabhängig anhand der jeweils angegebenen Originalquelle. Prüfe insbesondere fachliche Richtigkeit, genau eine richtige Antwort, plausible falsche Optionen, voneinander unterschiedliche Fakten innerhalb jeder Karte, Überschneidungen zwischen Karten, die Erklärungen jeder Option und ob die konkrete Quelle die Aussage wirklich trägt. Verwende nur die verlinkten Originalquellen als Beleg; wenn eine Seite nicht erreichbar ist, kennzeichne die Frage als ungeprüft. Gib ausschließlich eine sehr kurze Liste beanstandeter IDs mit je einem knappen Grund zurück. Wenn nichts zu beanstanden ist, antworte: Keine Beanstandungen.",
  "",
  ...questions.flatMap(
    ({
      id,
      prompt,
      correct,
      wrongOne,
      wrongTwo,
      reason,
      source,
      reasonB,
      reasonC,
    }) => [
      `## ${id}: ${prompt}`,
      `- A (richtig): ${correct}. Erklärung: ${reason} Quelle: ${source}`,
      `- B (falsch): ${wrongOne}. Erklärung: ${reasonB} Quelle: ${source}`,
      `- C (falsch): ${wrongTwo}. Erklärung: ${reasonC} Quelle: ${source}`,
      "",
    ],
  ),
];

writeFileSync(`${base}/review-prompt.md`, prompt.join("\n"));
console.log(`Review prompt created with ${questions.length} questions.`);

if (process.argv.includes("--integrate")) {
  const cardIds = {
    H: "human-ai-responsibility",
    A: "agents-md",
    E: "ears-requirements",
    P: "problem-understanding-and-change-boundaries",
    R: "research-plan-tasks",
    S: "spec-driven-development-openspec",
  };
  const byCard = Object.fromEntries(
    Object.values(cardIds).map((id) => [id, []]),
  );
  for (const {
    id,
    prompt,
    correct,
    wrongOne,
    wrongTwo,
    reason,
    reasonB,
    reasonC,
    source,
  } of questions) {
    byCard[cardIds[id[0]]].push({
      id,
      prompt,
      options: [
        {
          id: "a",
          text: correct,
          correct: true,
          explanation: reason,
          sourceUrl: source,
        },
        {
          id: "b",
          text: wrongOne,
          correct: false,
          explanation: reasonB,
          sourceUrl: source,
        },
        {
          id: "c",
          text: wrongTwo,
          correct: false,
          explanation: reasonC,
          sourceUrl: source,
        },
      ],
    });
  }
  writeFileSync(
    "src/verticals/catalog/foundationQuestions.json",
    `${JSON.stringify(byCard, null, 2)}\n`,
  );
  console.log("Reviewed questions integrated into the catalog data file.");
}

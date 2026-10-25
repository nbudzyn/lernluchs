// @vitest-environment node
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
import { afterAll, expect, it } from "vitest";
import manifest from "../../../src/verticals/topics/semanticModel.json";
import { openLocalModelFixture } from "./localModelFixture";
import { summarizeFormulation } from "./formulationExperiment";
import { formulationReportHtml } from "./formulationReport";
import type { FormulationCase } from "./formulationReport";
import {
  aggregateFormulations,
  randomFormulationReportHtml,
} from "./randomFormulationReport";
import type { RandomTopicResult } from "./randomFormulationReport";
import { requireExternalArtifactDirectory } from "../../shared/requireExternalArtifactDirectory";

type Form = "baseline" | "neutral" | "structured" | "questions";
const forms: { id: Form; label: string }[] = [
  { id: "baseline", label: "Bisheriger Suchtext" },
  { id: "neutral", label: "Sachlicher Absatz" },
  { id: "structured", label: "Problem–Vorgehen–Ergebnis" },
  { id: "questions", label: "Vier getrennte Fragen" },
];
let fixture: Awaited<ReturnType<typeof openLocalModelFixture>> | undefined;
afterAll(async () => {
  await fixture?.model.dispose();
});

it("compares three independently authored forms on four frozen random topics", async () => {
  const destination = requireExternalArtifactDirectory(
    process.env.LERNLUCHS_RANDOM_FORMULATION_REPORT,
  );
  const readJson = async (name: string) =>
    JSON.parse(await readFile(resolve(destination, name), "utf8"));
  const frozen = await readJson("frozen-inputs.json");
  expect(frozen.frozenBeforeInference).toBe(true);
  for (const [name, hash] of Object.entries(frozen.hashes)) {
    const actual = createHash("sha256")
      .update(await readFile(resolve(destination, name)))
      .digest("hex");
    expect(actual, name).toBe(hash);
  }
  const selection: {
    eligible: number;
    selected: { id: string; title: string; text: string }[];
  } = await readJson("selection.json");
  const candidates: {
    topics: {
      id: string;
      forms: Record<Exclude<Form, "baseline">, string[]>;
    }[];
  } = await readJson("candidate-texts.json");
  const questions: { topics: { id: string; cases: FormulationCase[] }[] } =
    await readJson("search-cases.json");
  const selectedIds = selection.selected.map(({ id }) => id).sort();
  expect(new Set(selectedIds).size).toBe(4);
  expect(candidates.topics.map(({ id }) => id).sort()).toEqual(selectedIds);
  expect(questions.topics.map(({ id }) => id).sort()).toEqual(selectedIds);
  for (const topic of questions.topics) {
    expect(topic.cases).toHaveLength(20);
    expect(new Set(topic.cases.map(({ id }) => id)).size).toBe(20);
    for (const split of ["calibration", "validation"])
      for (const relevant of [true, false]) {
        expect(
          topic.cases.filter(
            (sample) => sample.split === split && sample.relevant === relevant,
          ),
        ).toHaveLength(5);
      }
  }
  for (const topic of candidates.topics) {
    expect(topic.forms.neutral).toHaveLength(1);
    expect(topic.forms.structured).toHaveLength(1);
    expect(topic.forms.questions).toHaveLength(4);
  }
  fixture = await openLocalModelFixture();
  const { model, entries, fingerprint } = fixture;
  expect(selection.eligible).toBe(entries.length - 1);
  const cosine = (a: readonly number[], b: readonly number[]) =>
    a.reduce((sum, value, index) => sum + value * b[index], 0);
  const textForms = new Map<string, Record<Form, string[]>>();
  const vectors = new Map<Form, Map<string, number[][]>>();
  for (const form of forms) vectors.set(form.id, new Map());
  for (const topic of selection.selected) {
    const topicForms = {
      baseline: [topic.text.replace(/^passage: /, "")],
      ...candidates.topics.find(({ id }) => id === topic.id)!.forms,
    };
    textForms.set(topic.id, topicForms);
    for (const form of forms) {
      const encoded: number[][] = [];
      for (const text of topicForms[form.id])
        encoded.push(await model.embed(`passage: ${text}`));
      vectors.get(form.id)!.set(topic.id, encoded);
    }
  }
  const topics: RandomTopicResult[] = [];
  for (const topic of selection.selected) {
    const cases = questions.topics.find(({ id }) => id === topic.id)!.cases;
    const queries: (FormulationCase & { vector: number[] })[] = [];
    for (const sample of cases)
      queries.push({
        ...sample,
        vector: await model.embed(`query: ${sample.query}`),
      });
    const rows = forms.map((form) => {
      const catalog = entries.map((entry) => ({
        id: entry.id,
        vectors: vectors.get(form.id)!.get(entry.id) ?? [entry.vector],
      }));
      const measurements = queries.map(({ vector, ...sample }) => {
        const scores = catalog.map((entry) => ({
          id: entry.id,
          score: Math.max(
            ...entry.vectors.map((candidate) => cosine(vector, candidate)),
          ),
        }));
        const score = scores.find(({ id }) => id === topic.id)!.score;
        const rank =
          1 +
          scores.filter((entry) => entry.id !== topic.id && entry.score > score)
            .length;
        return { ...sample, score, rank };
      });
      return {
        id: form.id,
        label: form.label,
        texts: textForms.get(topic.id)![form.id],
        summary: summarizeFormulation(measurements),
        measurements,
      };
    });
    topics.push({ id: topic.id, title: topic.title, cases, rows });
  }
  const aggregates = aggregateFormulations(topics);
  expect(aggregates).toHaveLength(4);
  for (const row of aggregates) {
    expect(row.summary.calibration.positiveCount).toBe(20);
    expect(row.summary.validation.positiveCount).toBe(20);
    expect(row.summary.validation.negativeCount).toBe(20);
    expect(row.summary.calibration.missed).toBe(0);
  }
  const encoderHash = createHash("sha256")
    .update(await readFile("src/verticals/topics/sentenceEmbedder.ts"))
    .digest("hex");
  await writeFile(
    resolve(destination, "measurements.json"),
    JSON.stringify(
      {
        date: "2026-10-25",
        manifest,
        frozen,
        encoderHash,
        indexFingerprint: fingerprint,
        topics,
        aggregates,
      },
      null,
      2,
    ),
  );
  for (const topic of topics)
    await writeFile(
      resolve(destination, `${topic.id}.html`),
      formulationReportHtml(
        topic.rows,
        topic.cases,
        manifest.id,
        manifest.revision,
        {
          topicTitle: topic.title,
          contextNote:
            "Die vier gezogenen Themen werden gemeinsam in der jeweiligen Form ersetzt; die anderen 44 Themen bleiben unverändert.",
          blindAuthorship: true,
        },
      ),
    );
  const html = randomFormulationReportHtml(
    topics,
    manifest.id,
    manifest.revision,
  );
  expect(html.match(/<li>/g)).toHaveLength(4);
  await writeFile(resolve(destination, "vergleich.html"), html);
}, 180_000);

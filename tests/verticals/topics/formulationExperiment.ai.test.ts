// @vitest-environment node
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
import { afterAll, beforeAll, expect, it } from "vitest";
import { openLocalModelFixture } from "./localModelFixture";
import manifest from "../../../src/verticals/topics/semanticModel.json";
import { formulationCases } from "./formulationCases";
import { formulationTopicId, formulationVariants } from "./formulationVariants";
import { summarizeFormulation } from "./formulationExperiment";
import { formulationReportHtml } from "./formulationReport";
import type { FormulationRow } from "./formulationReport";
import { requireExternalArtifactDirectory } from "../../shared/requireExternalArtifactDirectory";

let model: Awaited<ReturnType<typeof openLocalModelFixture>>["model"];
let entries: { id: string; vector: number[] }[];
beforeAll(async () => {
  ({ model, entries } = await openLocalModelFixture());
}, 90_000);
afterAll(async () => {
  await model?.dispose();
});

it("measures all fixed text variants against the independently labelled queries and writes a reproducible report", async () => {
  const queries = [];
  for (const sample of formulationCases)
    queries.push({
      ...sample,
      vector: await model.embed(`query: ${sample.query}`),
    });
  const rows: FormulationRow[] = [];
  const cosine = (a: readonly number[], b: readonly number[]) =>
    a.reduce((sum, value, index) => sum + value * b[index], 0);
  for (const variant of formulationVariants) {
    const vectors: number[][] = [];
    for (const text of variant.texts)
      vectors.push(await model.embed(`passage: ${text}`));
    const measurements = queries.map(({ vector, ...sample }) => {
      const score = Math.max(
        ...vectors.map((candidate) => cosine(vector, candidate)),
      );
      const rank =
        1 +
        entries.filter(
          (entry) =>
            entry.id !== formulationTopicId &&
            cosine(vector, entry.vector) > score,
        ).length;
      return { ...sample, score, rank };
    });
    expect(measurements).toHaveLength(20);
    const summary = summarizeFormulation(measurements);
    expect(summary.calibration.missed).toBe(0);
    expect(summary.validation.positiveCount).toBe(5);
    expect(summary.validation.negativeCount).toBe(5);
    expect(summary.all.auc).toBeGreaterThanOrEqual(0);
    expect(summary.all.auc).toBeLessThanOrEqual(1);
    rows.push({ ...variant, summary, measurements });
  }
  const destination = requireExternalArtifactDirectory(
    process.env.LERNLUCHS_FORMULATION_REPORT,
  );
  await mkdir(destination, { recursive: true });
  const fingerprint = createHash("sha256")
    .update(
      JSON.stringify({
        manifest,
        entries,
        formulationCases,
        formulationVariants,
      }),
    )
    .digest("hex");
  await writeFile(
    resolve(destination, "measurements.json"),
    JSON.stringify(
      {
        date: "2026-10-25",
        manifest,
        fingerprint,
        cases: formulationCases,
        rows,
      },
      null,
      2,
    ),
  );
  const html = formulationReportHtml(
    rows,
    formulationCases,
    manifest.id,
    manifest.revision,
  );
  expect(html.match(/<details id=/g)).toHaveLength(formulationVariants.length);
  await writeFile(resolve(destination, "vergleich.html"), html);
}, 90_000);

// @vitest-environment node
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { afterAll, expect, it } from "vitest";
import cases from "./independentSemanticCases.json";
import { requireExternalArtifactDirectory } from "../../shared/requireExternalArtifactDirectory";
import { openLocalModelFixture } from "./localModelFixture";
import {
  searchSemanticTopics,
  semanticCutoffs,
} from "../../../src/verticals/topics/semanticSearch";

let fixture: Awaited<ReturnType<typeof openLocalModelFixture>> | undefined;
afterAll(async () => {
  await fixture?.model.dispose();
});

it("retains at least 95% of mandatory topics and rejects every independently authored unrelated query", async () => {
  fixture = await openLocalModelFixture();
  let mandatory = 0;
  let found = 0;
  let additional = 0;
  const rows = [];
  for (const sample of cases.cases) {
    const started = performance.now();
    const result = await searchSemanticTopics(
      sample.query,
      fixture.entries,
      fixture.model.embed,
    );
    const missing = sample.mandatory.filter((id) => !result.includes(id));
    const unexpected = result.filter(
      (id) => ![...sample.mandatory, ...sample.optional].includes(id),
    );
    mandatory += sample.mandatory.length;
    found += sample.mandatory.length - missing.length;
    additional += unexpected.length;
    rows.push({
      ...sample,
      result,
      missing,
      unexpected,
      milliseconds: performance.now() - started,
    });
  }
  const unrelatedFailures = rows.filter(
    (row) => !row.mandatory.length && row.result.length,
  );
  const summary = {
    mandatory,
    found,
    recall: found / mandatory,
    additional,
    additionalPerPositive:
      additional /
      cases.cases.filter((sample) => sample.mandatory.length).length,
    unrelatedFailures: unrelatedFailures.map((row) => row.id),
    missed: rows
      .filter((row) => row.missing.length)
      .map(({ id, missing }) => ({ id, missing })),
  };
  const destination = process.env.LERNLUCHS_QUALITY_REPORT;
  if (destination) {
    requireExternalArtifactDirectory(destination);
    await writeFile(
      resolve(destination, "independent-quality.json"),
      JSON.stringify(
        {
          fingerprint: fixture.fingerprint,
          cutoffs: semanticCutoffs,
          summary,
          rows,
        },
        null,
        2,
      ),
    );
  }
  const evidence = JSON.stringify(summary);
  expect.soft(found / mandatory, evidence).toBeGreaterThanOrEqual(0.95);
  expect
    .soft(
      unrelatedFailures.map(({ id, result }) => ({ id, result })),
      evidence,
    )
    .toEqual([]);
}, 90_000);

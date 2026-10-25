// @vitest-environment node
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { afterAll, expect, it } from "vitest";
import { openLocalModelFixture } from "./localModelFixture";
import { calibrationCases, topicAliases } from "./semanticCases";
import { requireExternalArtifactDirectory } from "../../shared/requireExternalArtifactDirectory";

let fixture: Awaited<ReturnType<typeof openLocalModelFixture>> | undefined;
afterAll(async () => {
  await fixture?.model.dispose();
});

it("measures only the existing calibration set before freezing a membership cutoff", async () => {
  const destination = requireExternalArtifactDirectory(
    process.env.LERNLUCHS_CALIBRATION_REPORT,
  );
  fixture = await openLocalModelFixture();
  const rows = [];
  for (const sample of calibrationCases) {
    const started = performance.now();
    const text =
      sample.query.trim().split(/\s+/).length === 1
        ? `Ich suche Informationen zum Thema ${sample.query}.`
        : sample.query;
    const vector = await fixture.model.embed(`query: ${text}`);
    rows.push({
      ...sample,
      must: sample.must?.map((id) => topicAliases[id]),
      any: sample.any?.map((id) => topicAliases[id]),
      exclude: sample.exclude?.map((id) => topicAliases[id]),
      milliseconds: performance.now() - started,
      scores: fixture.entries.map((entry) => ({
        id: entry.id,
        score: entry.vector.reduce(
          (sum, value, i) => sum + value * vector[i],
          0,
        ),
      })),
    });
  }
  expect(rows).toHaveLength(calibrationCases.length);
  await writeFile(
    resolve(destination, "calibration-contextual-measurements.json"),
    JSON.stringify({ fingerprint: fixture.fingerprint, rows }, null, 2),
  );
}, 90_000);

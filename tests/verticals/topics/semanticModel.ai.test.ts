// @vitest-environment node
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { afterAll, beforeAll, expect, it } from "vitest";
import {
  createSentenceEmbedder,
  inferenceEnvironment,
} from "../../../src/verticals/topics/sentenceEmbedder";
import { searchSemanticTopics } from "../../../src/verticals/topics/semanticSearch";
import type { TopicSearchEntry } from "../../../src/verticals/topics/semanticSearch";
import manifest from "../../../src/verticals/topics/semanticModel.json";
import {
  calibrationCases,
  topicAliases,
  validationCases,
} from "./semanticCases";
import { freshSemanticCases } from "./freshSemanticCases";

let model: Awaited<ReturnType<typeof createSentenceEmbedder>>;
let entries: TopicSearchEntry[];
const cases =
  process.env.LERNLUCHS_AI_SPLIT === "calibration"
    ? calibrationCases
    : [...calibrationCases, ...validationCases];
const matches = new Map<string, string[]>();

// Accepted first-release limitations. Keep the original relevance labels and
// allow improvements; additional false positives in null cases still fail.
const acceptedExtraTopics: Record<string, readonly string[]> = {
  "val-14": [topicAliases.tokens],
  "val-19": [topicAliases.javaAi],
  "fresh-17": [
    topicAliases.agentsMd,
    "coding-agent-context-and-trust-boundaries",
    topicAliases.handoffs,
  ],
};

beforeAll(async () => {
  const directory = resolve("public", manifest.directory);
  inferenceEnvironment.wasm.numThreads = 1;
  inferenceEnvironment.wasm.proxy = false;
  inferenceEnvironment.wasm.wasmPaths = {
    mjs: pathToFileURL(resolve(directory, "ort-wasm-simd-threaded.mjs")).href,
  };
  inferenceEnvironment.wasm.wasmBinary = new Uint8Array(
    await readFile(resolve(directory, "ort-wasm-simd-threaded.wasm")),
  );
  model = await createSentenceEmbedder(
    JSON.parse(await readFile(resolve(directory, "tokenizer.json"), "utf8")),
    JSON.parse(
      await readFile(resolve(directory, "tokenizer_config.json"), "utf8"),
    ),
    new Uint8Array(await readFile(resolve(directory, "model_quantized.onnx"))),
  );
  ({ entries } = JSON.parse(
    await readFile(resolve(directory, "index.json"), "utf8"),
  ));
}, 90_000);

afterAll(async () => {
  await model?.dispose();
});

it.each(cases)(
  "$id: $query",
  async (sample) => {
    const embedding = await model.embed(`query: ${sample.query}`);
    const result = await searchSemanticTopics(
      sample.query,
      entries,
      model.embed,
    );
    const scores = new Map<string, number>();
    for (const entry of entries) {
      const score = entry.vector.reduce(
        (sum, value, i) => sum + value * embedding[i],
        0,
      );
      scores.set(entry.id, Math.max(score, scores.get(entry.id) ?? -1));
    }
    matches.set(sample.id, result);
    const context = JSON.stringify({
      id: sample.id,
      result,
      best: [...scores].sort((a, b) => b[1] - a[1]).slice(0, 6),
      required: (sample.must ?? sample.any ?? []).map((id) => [
        topicAliases[id],
        scores.get(topicAliases[id]),
      ]),
    });
    const accepted = acceptedExtraTopics[sample.id] ?? [];
    if (sample.none)
      expect
        .soft(
          result.filter((id) => !accepted.includes(id)),
          context,
        )
        .toEqual([]);
    for (const id of sample.must ?? [])
      expect.soft(result, context).toContain(topicAliases[id]);
    if (sample.any)
      expect
        .soft(
          sample.any.some((id) => result.includes(topicAliases[id])),
          context,
        )
        .toBe(true);
    for (const id of sample.exclude ?? []) {
      if (!accepted.includes(topicAliases[id]))
        expect.soft(result, context).not.toContain(topicAliases[id]);
    }
  },
  15_000,
);

if (process.env.LERNLUCHS_AI_SPLIT !== "calibration") {
  it("retains historical recall and rejects unrelated matches beyond the accepted limitations", async () => {
    let relevant = 0;
    let returned = 0;
    let required = 0;
    let found = 0;
    const mismatches: Record<
      string,
      { missing: string[]; unexpected: string[] }
    > = {};
    for (const sample of freshSemanticCases) {
      const result = await searchSemanticTopics(
        sample.query,
        entries,
        model.embed,
      );
      const allowed = [...sample.mandatory, ...sample.optional];
      const missing = sample.mandatory.filter((id) => !result.includes(id));
      const unexpected = result.filter((id) => !allowed.includes(id));
      returned += result.length;
      relevant += result.filter((id) => allowed.includes(id)).length;
      required += sample.mandatory.length;
      found += sample.mandatory.length - missing.length;
      if (missing.length || unexpected.length)
        mismatches[sample.id] = { missing, unexpected };
      if (!sample.mandatory.length)
        expect
          .soft(
            result.filter(
              (id) => !(acceptedExtraTopics[sample.id] ?? []).includes(id),
            ),
            sample.id,
          )
          .toEqual([]);
    }
    const evidence = JSON.stringify({
      relevant,
      returned,
      found,
      required,
      mismatches,
    });
    expect.soft(found / required, evidence).toBeGreaterThanOrEqual(0.9);
  }, 30_000);
}

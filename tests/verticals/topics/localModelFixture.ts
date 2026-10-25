import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import {
  createSentenceEmbedder,
  inferenceEnvironment,
} from "../../../src/verticals/topics/sentenceEmbedder";
import manifest from "../../../src/verticals/topics/semanticModel.json";

export async function openLocalModelFixture() {
  const directory = resolve("public", manifest.directory);
  const index: {
    revision: string;
    fingerprint: string;
    entries: { id: string; vector: number[] }[];
  } = JSON.parse(await readFile(resolve(directory, "index.json"), "utf8"));
  if (index.revision !== manifest.revision)
    throw new Error("Incompatible experiment index");
  inferenceEnvironment.wasm.numThreads = 1;
  inferenceEnvironment.wasm.proxy = false;
  inferenceEnvironment.logLevel = "fatal";
  inferenceEnvironment.wasm.wasmPaths = {
    mjs: pathToFileURL(resolve(directory, "ort-wasm-simd-threaded.mjs")).href,
  };
  inferenceEnvironment.wasm.wasmBinary = new Uint8Array(
    await readFile(resolve(directory, "ort-wasm-simd-threaded.wasm")),
  );
  const model = await createSentenceEmbedder(
    JSON.parse(await readFile(resolve(directory, "tokenizer.json"), "utf8")),
    JSON.parse(
      await readFile(resolve(directory, "tokenizer_config.json"), "utf8"),
    ),
    new Uint8Array(await readFile(resolve(directory, "model_quantized.onnx"))),
  );
  return { model, entries: index.entries, fingerprint: index.fingerprint };
}

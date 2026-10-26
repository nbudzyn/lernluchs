import {
  createSentenceEmbedder,
  inferenceEnvironment,
} from "./sentenceEmbedder";
import { searchSemanticTopics } from "./semanticSearch";
import { readSemanticIndex } from "./semanticIndex";
import manifest from "./semanticModel.json";
import { semanticSearchError } from "./semanticSearchError";

const scope = globalThis as unknown as {
  location: Location;
  postMessage: (message: unknown) => void;
  onmessage: (event: MessageEvent<{ query: string }>) => void;
};
const base = new URL(
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${manifest.directory}`,
  scope.location.origin,
);
const cacheName = "lernluchs.ai-search.assets.v1";

async function asset(name: string) {
  const url = new URL(name, base).href;
  let cache: Cache | undefined;
  let response: Response | undefined;
  try {
    cache = await caches.open(cacheName);
    response = await cache.match(url);
  } catch {
    /* Cache is optional. */
  }
  if (!response) {
    response = await fetch(url, { credentials: "omit", redirect: "error" });
    if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
    try {
      await cache?.put(url, response.clone());
    } catch {
      /* Storage may be unavailable. */
    }
  }
  return response;
}

async function initialize() {
  scope.postMessage({ type: "phase", phase: "loading" });
  inferenceEnvironment.wasm.numThreads = 1;
  inferenceEnvironment.wasm.proxy = false;
  inferenceEnvironment.wasm.wasmPaths = base.href;
  inferenceEnvironment.logLevel = "fatal";
  const tokenizer = await (await asset("tokenizer.json")).json();
  const tokenizerConfig = await (await asset("tokenizer_config.json")).json();
  const bytes = new Uint8Array(
    await (await asset("model_quantized.onnx")).arrayBuffer(),
  );
  const model = await createSentenceEmbedder(tokenizer, tokenizerConfig, bytes);
  const index = await fetch(new URL("index.json", base), {
    credentials: "omit",
    cache: "no-cache",
    redirect: "error",
  });
  if (!index.ok) throw new Error(`index.json: HTTP ${index.status}`);
  const entries = readSemanticIndex(await index.json());
  return { model, entries };
}

let ready: ReturnType<typeof initialize> | undefined;
scope.onmessage = async ({ data }) => {
  try {
    if (
      typeof data.query !== "string" ||
      !data.query.trim() ||
      data.query.length > 2000
    )
      throw new Error("Invalid query");
    ready ??= initialize();
    const { model, entries } = await ready;
    scope.postMessage({ type: "phase", phase: "searching" });
    const ids = await searchSemanticTopics(data.query, entries, model.embed);
    scope.postMessage({ type: "result", ids });
  } catch (error) {
    ready = undefined;
    try {
      await caches.delete(cacheName);
    } catch {
      /* Only optional public model assets are cached. */
    }
    scope.postMessage({ type: "error", message: semanticSearchError(error) });
  }
};

import { createHash } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import {
  copyFile,
  mkdir,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));

async function checksum(path) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest("hex");
}

export async function ensureModelAsset(
  target,
  source,
  expected,
  download = fetch,
) {
  try {
    if ((await checksum(target)) === expected) return;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await mkdir(dirname(target), { recursive: true });
  await rm(target, { force: true });
  const partial = `${target}.partial-${process.pid}`;
  try {
    const response = await download(source, {
      signal: AbortSignal.timeout(180_000),
    });
    if (!response.ok || !response.body)
      throw new Error(`Model download HTTP ${response.status}`);
    await pipeline(Readable.fromWeb(response.body), createWriteStream(partial));
    if ((await checksum(partial)) !== expected)
      throw new Error("Model checksum mismatch");
    await rename(partial, target);
  } finally {
    await rm(partial, { force: true });
  }
}

export async function prepareAiSearch() {
  const manifest = JSON.parse(
    await readFile(
      resolve(root, "src/verticals/topics/semanticModel.json"),
      "utf8",
    ),
  );
  const directory = resolve(root, "public", manifest.directory);
  const sourceBase = `https://huggingface.co/${manifest.id}/resolve/${manifest.revision}/`;
  for (const [name, asset] of Object.entries(manifest.files)) {
    await ensureModelAsset(
      resolve(directory, name),
      sourceBase + asset.source,
      asset.sha256,
    );
  }
  for (const name of [
    "ort-wasm-simd-threaded.mjs",
    "ort-wasm-simd-threaded.wasm",
  ]) {
    await copyFile(
      resolve(root, "node_modules/onnxruntime-web/dist", name),
      resolve(directory, name),
    );
  }
  await copyFile(
    resolve(root, "public/licenses/onnxruntime-MIT.txt"),
    resolve(directory, "onnxruntime-LICENSE"),
  );
  await copyFile(
    resolve(root, "node_modules/@huggingface/tokenizers/LICENSE"),
    resolve(directory, "tokenizers-LICENSE"),
  );
  await copyFile(
    resolve(root, "public/licenses/local-ai-search.txt"),
    resolve(directory, "NOTICE.txt"),
  );
  const server = await createServer({
    configFile: false,
    appType: "custom",
    optimizeDeps: { noDiscovery: true },
    server: { middlewareMode: true, watch: null, hmr: false },
  });
  try {
    const { semanticCorpus } = await server.ssrLoadModule(
      "/src/verticals/topics/semanticCorpus.ts",
    );
    const fingerprint = createHash("sha256")
      .update(JSON.stringify({ manifest, semanticCorpus }))
      .update(
        await readFile(
          resolve(root, "src/verticals/topics/sentenceEmbedder.ts"),
        ),
      )
      .update(
        await readFile(resolve(root, "src/verticals/topics/semanticSearch.ts")),
      )
      .update(await readFile(resolve(root, "package-lock.json")))
      .digest("hex");
    const indexPath = resolve(directory, "index.json");
    try {
      const existing = JSON.parse(await readFile(indexPath, "utf8"));
      if (existing.fingerprint === fingerprint) {
        console.log(
          `PASS lokale KI-Assets geprüft; ${existing.entries.length} Themenpassagen; Exitcode 0`,
        );
        return;
      }
    } catch (error) {
      if (error.code !== "ENOENT" && !(error instanceof SyntaxError))
        throw error;
    }
    const { createSentenceEmbedder, inferenceEnvironment } =
      await server.ssrLoadModule("/src/verticals/topics/sentenceEmbedder.ts");
    inferenceEnvironment.wasm.numThreads = 1;
    inferenceEnvironment.wasm.proxy = false;
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
      new Uint8Array(
        await readFile(resolve(directory, "model_quantized.onnx")),
      ),
    );
    try {
      const entries = [];
      for (const { id, title, text } of semanticCorpus)
        entries.push({ id, title, text, vector: await model.embed(text) });
      await writeFile(
        indexPath,
        JSON.stringify({ fingerprint, revision: manifest.revision, entries }),
      );
      console.log(
        `PASS lokale KI-Assets vorbereitet; ${entries.length} Themenpassagen; Exitcode 0`,
      );
    } finally {
      await model.dispose();
    }
  } finally {
    await server.close();
  }
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await prepareAiSearch();

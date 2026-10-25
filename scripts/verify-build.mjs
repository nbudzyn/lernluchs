import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export async function verifyBuild(directory) {
  const builtIndex = resolve(directory, "index.html");

  await access(builtIndex, constants.R_OK);

  const html = await readFile(builtIndex, "utf8");
  if (!html.includes('<div id="root"></div>')) {
    throw new Error("The static build does not contain the application root.");
  }

  if (/https?:\/\//.test(html)) {
    throw new Error(
      "The static entry must not load external runtime resources.",
    );
  }

  const manifest = JSON.parse(
    await readFile(
      new URL("../src/verticals/topics/semanticModel.json", import.meta.url),
      "utf8",
    ),
  );
  const modelDirectory = resolve(directory, manifest.directory);
  const modelDirectories = await readdir(resolve(directory, "ai-search"));
  if (
    modelDirectories.length !== 1 ||
    modelDirectories[0] !== basename(modelDirectory)
  )
    throw new Error("Unexpected AI assets in release");
  for (const name of [
    ...Object.keys(manifest.files),
    "index.json",
    "ort-wasm-simd-threaded.mjs",
    "ort-wasm-simd-threaded.wasm",
    "onnxruntime-LICENSE",
    "tokenizers-LICENSE",
    "NOTICE.txt",
  ])
    await access(resolve(modelDirectory, name), constants.R_OK);
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await verifyBuild(fileURLToPath(new URL("../dist/", import.meta.url)));

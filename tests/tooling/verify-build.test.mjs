// @vitest-environment node
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { expect, it } from "vitest";
import { verifyBuild } from "../../scripts/verify-build.mjs";

it("requires complete local search assets and rejects obsolete model directories in the release", async () => {
  const root = await mkdtemp(join(tmpdir(), "lernluchs-build-assets-"));
  const manifest = JSON.parse(
    await readFile(
      new URL("../../src/verticals/topics/semanticModel.json", import.meta.url),
      "utf8",
    ),
  );
  const directory = join(root, manifest.directory);
  const runtime = join(directory, "ort-wasm-simd-threaded.wasm");
  try {
    await mkdir(directory, { recursive: true });
    await writeFile(join(root, "index.html"), '<div id="root"></div>');
    for (const name of [
      ...Object.keys(manifest.files),
      "index.json",
      "ort-wasm-simd-threaded.mjs",
      "ort-wasm-simd-threaded.wasm",
      "onnxruntime-LICENSE",
      "tokenizers-LICENSE",
      "NOTICE.txt",
    ])
      await writeFile(join(directory, name), "synthetic public asset");
    await expect(verifyBuild(root)).resolves.toBeUndefined();
    await rm(runtime);
    await expect(verifyBuild(root)).rejects.toThrow();
    await writeFile(runtime, "synthetic runtime");
    await mkdir(join(root, "ai-search", "obsolete-model"));
    await expect(verifyBuild(root)).rejects.toThrow("Unexpected AI assets");
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

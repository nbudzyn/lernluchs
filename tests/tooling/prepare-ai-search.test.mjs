// @vitest-environment node
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { expect, it, vi } from "vitest";
import { ensureModelAsset } from "../../scripts/prepare-ai-search.mjs";

it("verifies model downloads and cached files and never retains corrupt bytes", async () => {
  const directory = await mkdtemp(join(tmpdir(), "lernluchs-ai-assets-"));
  const target = join(directory, "model.onnx");
  const bytes = "synthetic public model fixture";
  const checksum = createHash("sha256").update(bytes).digest("hex");
  const download = vi.fn(async () => new Response(bytes));
  try {
    await ensureModelAsset(
      target,
      "https://example.invalid/pinned-model",
      checksum,
      download,
    );
    expect(await readFile(target, "utf8")).toBe(bytes);
    await ensureModelAsset(
      target,
      "https://example.invalid/pinned-model",
      checksum,
      download,
    );
    expect(download).toHaveBeenCalledTimes(1);
    await writeFile(target, "corrupt cache");
    await ensureModelAsset(
      target,
      "https://example.invalid/pinned-model",
      checksum,
      download,
    );
    expect(download).toHaveBeenCalledTimes(2);
    await writeFile(target, "corrupt cache");
    await expect(
      ensureModelAsset(
        target,
        "https://example.invalid/pinned-model",
        checksum,
        async () => new Response("corrupt download"),
      ),
    ).rejects.toThrow("checksum");
    await expect(readFile(target)).rejects.toThrow();
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

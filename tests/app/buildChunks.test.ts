// @vitest-environment node
import { build } from "vite";
import { expect, it } from "vitest";

it("separates topic content from app code and keeps production chunks below the warning limit", async () => {
  const result = await build({ build: { write: false }, logLevel: "silent" });
  if (Array.isArray(result) || !("output" in result)) {
    throw new Error("Expected one production build output.");
  }
  const chunks = result.output.filter((item) => item.type === "chunk");
  const topicChunk = chunks.find((chunk) =>
    Object.keys(chunk.modules).some((id) =>
      /[\\/]verticals[\\/]topics[\\/]topics\.ts$/.test(id),
    ),
  );
  expect(topicChunk).toBeDefined();
  expect(topicChunk?.isEntry).toBe(false);
  expect(Object.keys(topicChunk?.modules ?? {})).not.toEqual(
    expect.arrayContaining([expect.stringMatching(/[\\/]app[\\/]App\.tsx$/)]),
  );
  for (const chunk of chunks) {
    expect(
      new TextEncoder().encode(chunk.code).byteLength,
      chunk.fileName,
    ).toBeLessThan(500_000);
  }
}, 30_000);

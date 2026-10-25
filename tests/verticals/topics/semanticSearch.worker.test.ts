import { afterEach, expect, it, vi } from "vitest";
import { searchDescriptions } from "../../../src/verticals/topics/searchDescriptions";
import manifest from "../../../src/verticals/topics/semanticModel.json";

vi.mock("../../../src/verticals/topics/sentenceEmbedder", () => ({
  createSentenceEmbedder: () =>
    Promise.resolve({ embed: () => Promise.resolve([1, 0]) }),
  inferenceEnvironment: { wasm: {} },
}));

const previousHandler = globalThis.onmessage;
afterEach(() => {
  globalThis.onmessage = previousHandler;
  vi.unstubAllGlobals();
  vi.resetModules();
});

it("searches locally even when the public-asset cache is unavailable or full", async () => {
  const entries = Object.entries(searchDescriptions).map(([id, text]) => ({
    id,
    text: `passage: ${text}`,
    vector: [1, 0],
  }));
  for (const cache of [
    undefined,
    { open: () => Promise.reject(new Error("storage disabled")) },
    {
      open: () =>
        Promise.resolve({
          match: () => Promise.resolve(undefined),
          put: () => Promise.reject(new Error("quota exceeded")),
        }),
    },
  ]) {
    vi.resetModules();
    const messages = vi.fn();
    const fetchAsset = vi.fn((url: string | URL) =>
      Promise.resolve(
        new Response(
          String(url).endsWith("index.json")
            ? JSON.stringify({ revision: manifest.revision, entries })
            : "{}",
        ),
      ),
    );
    vi.stubGlobal("postMessage", messages);
    vi.stubGlobal("caches", cache);
    vi.stubGlobal("fetch", fetchAsset);
    await import("../../../src/verticals/topics/semanticSearch.worker");
    await globalThis.onmessage?.call(
      window,
      new MessageEvent("message", {
        data: { query: "synthetische Suchfrage" },
      }),
    );
    expect.soft(messages.mock.calls.map(([message]) => message)).toEqual([
      { type: "phase", phase: "loading" },
      { type: "phase", phase: "searching" },
      { type: "result", ids: entries.map((entry) => entry.id) },
    ]);
    expect.soft(fetchAsset).toHaveBeenCalledTimes(4);
    for (const [url] of fetchAsset.mock.calls) {
      expect.soft(new URL(url).origin).toBe(location.origin);
      expect.soft(String(url)).not.toContain("synthetische");
    }
  }
});

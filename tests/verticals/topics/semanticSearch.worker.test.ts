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

it.each([
  [
    new TypeError("synthetic network failure"),
    "TypeError: synthetic network failure",
  ],
  ["synthetic plain failure", "synthetic plain failure"],
  [123, "123"],
  [undefined, "Unbekannter Fehler ohne weitere Angaben"],
])(
  "reports model download failure %s to the browser",
  async (failure, message) => {
    const messages = vi.fn();
    vi.stubGlobal("postMessage", messages);
    vi.stubGlobal("caches", undefined);
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(failure));
    await import("../../../src/verticals/topics/semanticSearch.worker");
    await globalThis.onmessage?.call(
      window,
      new MessageEvent("message", {
        data: { query: "synthetische Suchfrage" },
      }),
    );
    expect(messages).toHaveBeenLastCalledWith({
      type: "error",
      message,
    });
  },
);

it("identifies missing local assets by file and HTTP status", async () => {
  const messages = vi.fn();
  vi.stubGlobal("postMessage", messages);
  vi.stubGlobal("caches", undefined);
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue(new Response("", { status: 404 })),
  );
  await import("../../../src/verticals/topics/semanticSearch.worker");
  await globalThis.onmessage?.call(
    window,
    new MessageEvent("message", {
      data: { query: "synthetische Suchfrage" },
    }),
  );
  expect(messages).toHaveBeenLastCalledWith({
    type: "error",
    message: "Error: tokenizer.json: HTTP 404",
  });
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

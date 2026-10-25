import { afterEach, expect, it, vi } from "vitest";
import { createSemanticSearchClient } from "../../../src/verticals/topics/semanticSearchClient";

class FakeWorker {
  onmessage: ((event: MessageEvent) => void) | null = null;
  onerror = null;
  onmessageerror = null;
  postMessage = vi.fn();
  terminate = vi.fn();
  send(data: unknown) {
    this.onmessage?.({ data } as MessageEvent);
  }
}

afterEach(() => vi.useRealTimers());

it("keeps a successful worker warm, cancels active work and releases idle memory", async () => {
  vi.useFakeTimers();
  const worker = new FakeWorker();
  const factory = vi.fn(() => worker as unknown as Worker);
  const client = createSemanticSearchClient(factory);
  const phase = vi.fn();
  expect(factory).not.toHaveBeenCalled();
  const first = client.search("Frage", phase, new AbortController().signal);
  expect(worker.postMessage).toHaveBeenCalledWith({ query: "Frage" });
  worker.send({ type: "phase", phase: "searching" });
  worker.send({ type: "result", ids: ["known"] });
  await expect(first).resolves.toEqual(["known"]);
  expect(phase).toHaveBeenCalledWith("searching");
  const controller = new AbortController();
  const second = client.search("weitere Frage", phase, controller.signal);
  const rejection = expect(second).rejects.toThrow();
  controller.abort();
  await rejection;
  expect(factory).toHaveBeenCalledTimes(1);
  expect(worker.terminate).toHaveBeenCalledTimes(1);
  const third = client.search(
    "erneuter Versuch",
    phase,
    new AbortController().signal,
  );
  worker.send({ type: "result", ids: [] });
  await expect(third).resolves.toEqual([]);
  vi.advanceTimersByTime(120_001);
  expect(worker.terminate).toHaveBeenCalledTimes(2);
});

it("stops initialization and slow inference at their separate time limits", async () => {
  vi.useFakeTimers();
  const worker = new FakeWorker();
  const client = createSemanticSearchClient(() => worker as unknown as Worker);
  const loading = client.search("laden", vi.fn(), new AbortController().signal);
  const loadingFailure = expect(loading).rejects.toThrow();
  vi.advanceTimersByTime(180_001);
  await loadingFailure;
  const searching = client.search(
    "suchen",
    vi.fn(),
    new AbortController().signal,
  );
  const searchFailure = expect(searching).rejects.toThrow();
  worker.send({ type: "phase", phase: "searching" });
  vi.advanceTimersByTime(20_001);
  await searchFailure;
  expect(worker.terminate).toHaveBeenCalledTimes(2);
});

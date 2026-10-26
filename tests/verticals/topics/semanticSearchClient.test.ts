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
  const loadingFailure = expect(loading).rejects.toThrow(/180 Sekunden/);
  vi.advanceTimersByTime(180_001);
  await loadingFailure;
  const searching = client.search(
    "suchen",
    vi.fn(),
    new AbortController().signal,
  );
  const searchFailure = expect(searching).rejects.toThrow(/20 Sekunden/);
  worker.send({ type: "phase", phase: "searching" });
  vi.advanceTimersByTime(20_001);
  await searchFailure;
  expect(worker.terminate).toHaveBeenCalledTimes(2);
});

it("preserves the actual cause and step of worker and model failures", async () => {
  for (const failure of [
    "startup",
    "event",
    "message",
    "inference",
    "transfer",
    "send",
  ] as const) {
    const worker = new FakeWorker();
    if (failure === "send")
      worker.postMessage.mockImplementation(() => {
        throw new DOMException("synthetic send failure", "DataCloneError");
      });
    const factory = () => {
      if (failure === "startup")
        throw new Error("synthetic worker creation failed");
      return worker as unknown as Worker;
    };
    const client = createSemanticSearchClient(factory);
    const result = client.search(
      "Frage",
      vi.fn(),
      new AbortController().signal,
    );
    const expected = {
      startup: /Worker starten: Error: synthetic worker creation failed/,
      event: /Worker ausführen: synthetic script failed.*worker.js:12:3/,
      message: /KI-Modell laden: TypeError: synthetic model failed/,
      inference: /Themensuche berechnen: TypeError: synthetic inference failed/,
      transfer: /Worker-Nachricht lesen/,
      send: /Worker-Nachricht senden: DataCloneError: synthetic send failure/,
    }[failure];
    const rejection = expect.soft(result, failure).rejects.toThrow(expected);
    if (failure === "event") {
      (worker as unknown as Worker).onerror?.call(
        worker as unknown as Worker,
        new ErrorEvent("error", {
          message: "synthetic script failed",
          filename: "worker.js",
          lineno: 12,
          colno: 3,
          cancelable: true,
        }),
      );
    } else if (failure === "message") {
      worker.send({
        type: "error",
        message: "TypeError: synthetic model failed",
      });
    } else if (failure === "inference") {
      worker.send({ type: "phase", phase: "searching" });
      worker.send({
        type: "error",
        message: "TypeError: synthetic inference failed",
      });
    } else if (failure === "transfer") {
      (worker as unknown as Worker).onmessageerror?.call(
        worker as unknown as Worker,
        new MessageEvent("messageerror"),
      );
    }
    await rejection;
    expect
      .soft(worker.terminate)
      .toHaveBeenCalledTimes(failure === "startup" ? 0 : 1);
  }
});

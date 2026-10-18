import { act, cleanup, renderHook } from "@testing-library/react";
import { StrictMode } from "react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";

import { useLearningState } from "../../../src/verticals/learning-state";

import type { Snapshot } from "../../../src/verticals/learning-state/learningState";

const key = "lernluchs.learning-progress.v1";

beforeEach(() => localStorage.clear());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("learning state", () => {
  it("represents storage capability and reset requirements through distinct states", () => {
    expectTypeOf<Snapshot["status"]>().toEqualTypeOf<
      "ready" | "unavailable" | "damaged"
    >();
    expectTypeOf<keyof Snapshot>().toEqualTypeOf<
      "status" | "learnedTopicIds" | "notice"
    >();
    expectTypeOf<
      Extract<Snapshot, { status: "ready" }>["learnedTopicIds"]
    >().toEqualTypeOf<string[]>();
    expectTypeOf<
      Extract<
        Snapshot,
        { status: "unavailable" | "damaged" }
      >["learnedTopicIds"]
    >().toEqualTypeOf<[]>();
    expectTypeOf<
      Extract<Snapshot, { status: "unavailable" }>["notice"]
    >().toEqualTypeOf<"Der Lernstand konnte nicht geladen werden.">();
    expectTypeOf<
      Extract<Snapshot, { status: "damaged" }>["notice"]
    >().toEqualTypeOf<
      | null
      | "Der gespeicherte Lernstand ist beschädigt und konnte nicht zurückgesetzt werden."
    >();
  });
  it("loads existing learned IDs, stores new ones and restores them after remount", () => {
    localStorage.setItem(
      key,
      JSON.stringify({ version: 1, learnedTopicIds: ["topic-a"] }),
    );
    const first = renderHook(() => useLearningState());
    expect(first.result.current.learnedTopicIds).toEqual(["topic-a"]);
    act(() => expect(first.result.current.markLearned("topic-a")).toBe(true));
    act(() => expect(first.result.current.markLearned("topic-b")).toBe(true));
    expect(first.result.current.learnedTopicIds).toEqual([
      "topic-a",
      "topic-b",
    ]);
    expect(JSON.parse(localStorage.getItem(key)!)).toEqual({
      version: 1,
      learnedTopicIds: ["topic-a", "topic-b"],
    });
    first.unmount();
    expect(
      renderHook(() => useLearningState()).result.current.learnedTopicIds,
    ).toEqual(["topic-a", "topic-b"]);
  });

  it("does not mark a failed write as saved and tries again for a new pass", () => {
    const hook = renderHook(() => useLearningState());
    vi.spyOn(Storage.prototype, "setItem").mockImplementationOnce(() => {
      throw new Error("Storage unavailable");
    });
    act(() => expect(hook.result.current.markLearned("topic-a")).toBe(false));
    expect(hook.result.current.learnedTopicIds).toEqual([]);
    expect(localStorage.getItem(key)).toBeNull();
    act(() => expect(hook.result.current.markLearned("topic-a")).toBe(true));
    expect(hook.result.current.learnedTopicIds).toEqual(["topic-a"]);
  });

  it("removes only corrupted learning state and informs the user for every invalid format", () => {
    const cases = [
      ["invalid JSON", "not json"],
      ["null", "null"],
      ["wrong version", JSON.stringify({ version: 2, learnedTopicIds: [] })],
      ["missing list", JSON.stringify({ version: 1 })],
      ["numeric ID", JSON.stringify({ version: 1, learnedTopicIds: [42] })],
      ["empty ID", JSON.stringify({ version: 1, learnedTopicIds: [""] })],
      [
        "duplicate IDs",
        JSON.stringify({ version: 1, learnedTopicIds: ["topic-a", "topic-a"] }),
      ],
    ] as const;
    for (const [label, value] of cases) {
      localStorage.setItem(key, value);
      localStorage.setItem("unrelated", "keep me");
      const hook = renderHook(() => useLearningState());
      expect.soft(hook.result.current.learnedTopicIds, label).toEqual([]);
      expect.soft(hook.result.current.notice, label).toContain("beschädigt");
      expect.soft(localStorage.getItem(key), label).toBeNull();
      expect.soft(localStorage.getItem("unrelated"), label).toBe("keep me");
      hook.unmount();
    }
  });

  it("reports a failed reset and retries it at the next save", () => {
    localStorage.setItem(key, "not json");
    vi.spyOn(Storage.prototype, "removeItem").mockImplementationOnce(() => {
      throw new Error("Storage unavailable");
    });
    const hook = renderHook(() => useLearningState());
    expect(hook.result.current.learnedTopicIds).toEqual([]);
    expect(hook.result.current.notice).toContain("nicht zurückgesetzt");
    expect(localStorage.getItem(key)).toBe("not json");
    act(() => expect(hook.result.current.markLearned("topic-a")).toBe(true));
    expect(hook.result.current.learnedTopicIds).toEqual(["topic-a"]);
  });

  it("reports the completed reset after a transient failure in StrictMode", () => {
    localStorage.setItem(key, "not json");
    vi.spyOn(Storage.prototype, "removeItem").mockImplementationOnce(() => {
      throw new Error("Storage unavailable");
    });
    const hook = renderHook(() => useLearningState(), { wrapper: StrictMode });
    expect(localStorage.getItem(key)).toBeNull();
    expect(hook.result.current.notice).toBe(
      "Der gespeicherte Lernstand war beschädigt und wurde zurückgesetzt.",
    );
  });

  it("reports unreadable storage and preserves existing data until reading recovers", () => {
    const saved = JSON.stringify({ version: 1, learnedTopicIds: ["topic-a"] });
    localStorage.setItem(key, saved);
    const read = vi
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation(() => {
        throw new Error("Storage unavailable");
      });
    const write = vi.spyOn(Storage.prototype, "setItem");
    const remove = vi.spyOn(Storage.prototype, "removeItem");
    const hook = renderHook(() => useLearningState());
    expect(hook.result.current.notice).toBe(
      "Der Lernstand konnte nicht geladen werden.",
    );
    act(() => expect(hook.result.current.markLearned("topic-b")).toBe(false));
    expect(hook.result.current.learnedTopicIds).toEqual([]);
    expect(write).not.toHaveBeenCalled();
    expect(remove).not.toHaveBeenCalled();
    read.mockRestore();
    expect(localStorage.getItem(key)).toBe(saved);
    act(() => expect(hook.result.current.markLearned("topic-b")).toBe(true));
    expect(hook.result.current.learnedTopicIds).toEqual(["topic-a", "topic-b"]);
    expect(hook.result.current.notice).toBeNull();
  });
});

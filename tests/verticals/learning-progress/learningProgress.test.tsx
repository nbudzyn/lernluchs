import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useLearningProgress } from "../../../src/verticals/learning-progress";

const key = "lernluchs.learning-progress.v1";

beforeEach(() => localStorage.clear());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("learning progress", () => {
  it("stores learned topic IDs and restores them after remount", () => {
    const first = renderHook(() => useLearningProgress());
    act(() => expect(first.result.current.markLearned("topic-a")).toBe(true));
    act(() => expect(first.result.current.markLearned("topic-b")).toBe(true));
    expect(first.result.current.learnedTopicIds).toEqual([
      "topic-a",
      "topic-b",
    ]);
    first.unmount();
    expect(
      renderHook(() => useLearningProgress()).result.current.learnedTopicIds,
    ).toEqual(["topic-a", "topic-b"]);
  });

  it("does not mark a failed write as saved and tries again for a new pass", () => {
    const hook = renderHook(() => useLearningProgress());
    vi.spyOn(Storage.prototype, "setItem").mockImplementationOnce(() => {
      throw new Error("Storage unavailable");
    });
    act(() => expect(hook.result.current.markLearned("topic-a")).toBe(false));
    expect(hook.result.current.learnedTopicIds).toEqual([]);
    expect(localStorage.getItem(key)).toBeNull();
    act(() => expect(hook.result.current.markLearned("topic-a")).toBe(true));
    expect(hook.result.current.learnedTopicIds).toEqual(["topic-a"]);
  });

  it("removes only corrupted progress and informs the user", () => {
    localStorage.setItem(key, "not json");
    localStorage.setItem("unrelated", "keep me");
    const hook = renderHook(() => useLearningProgress());
    expect(hook.result.current.learnedTopicIds).toEqual([]);
    expect(hook.result.current.notice).toContain("beschädigt");
    expect(localStorage.getItem(key)).toBeNull();
    expect(localStorage.getItem("unrelated")).toBe("keep me");
  });

  it("treats a structurally invalid learned list as damaged", () => {
    localStorage.setItem(
      key,
      JSON.stringify({ version: 1, learnedTopicIds: [42] }),
    );
    const hook = renderHook(() => useLearningProgress());
    expect(hook.result.current.learnedTopicIds).toEqual([]);
    expect(hook.result.current.notice).toContain("beschädigt");
    expect(localStorage.getItem(key)).toBeNull();
  });

  it("reports a failed reset and retries it at the next save", () => {
    localStorage.setItem(key, "not json");
    vi.spyOn(Storage.prototype, "removeItem").mockImplementationOnce(() => {
      throw new Error("Storage unavailable");
    });
    const hook = renderHook(() => useLearningProgress());
    expect(hook.result.current.learnedTopicIds).toEqual([]);
    expect(hook.result.current.notice).toContain("nicht zurückgesetzt");
    expect(localStorage.getItem(key)).toBe("not json");
    act(() => expect(hook.result.current.markLearned("topic-a")).toBe(true));
    expect(hook.result.current.learnedTopicIds).toEqual(["topic-a"]);
  });
});

import { act, cleanup, renderHook } from "@testing-library/react";
import { StrictMode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { questionsForTopic } from "../../../src/verticals/learning-checks/questionPools";
import { useLearningCheck } from "../../../src/verticals/learning-checks/useLearningCheck";

afterEach(cleanup);

describe("useLearningCheck", () => {
  it("distinguishes absent, successful and failed saving and completes only once under StrictMode", () => {
    for (const saving of [undefined, true, false]) {
      const onPassed = saving === undefined ? undefined : vi.fn(() => saving);
      const random = vi.fn(() => 0);
      const { result, rerender, unmount } = renderHook(
        () =>
          useLearningCheck({
            topicId: "human-ai-responsibility",
            questions: questionsForTopic("human-ai-responsibility")!,
            random,
            onPassed,
          }),
        { wrapper: StrictMode },
      );
      expect.soft(result.current.state.phase).toBe("answering");
      const selectionCalls = random.mock.calls.length;
      for (let index = 0; index < 5; index += 1) {
        const { answer, current } = result.current;
        const optionId = current!.options.find((option) => option.correct)!.id;
        act(() => {
          answer(optionId);
          answer(optionId);
        });
        expect
          .soft(result.current.state.answers, `${saving}: answer ${index}`)
          .toHaveLength(index + 1);
      }
      rerender();
      expect.soft(result.current.current).toBeUndefined();
      expect.soft(result.current.state).toMatchObject({
        phase: "passed",
        congratulation: "Herzlichen Glückwunsch!",
        saveStatus:
          saving === undefined ? "not-requested" : saving ? "saved" : "failed",
      });
      if (onPassed)
        expect
          .soft(onPassed)
          .toHaveBeenCalledExactlyOnceWith("human-ai-responsibility");
      expect.soft(random).toHaveBeenCalledTimes(selectionCalls + 1);
      act(() => result.current.answer("unused-after-completion"));
      expect.soft(random).toHaveBeenCalledTimes(selectionCalls + 1);
      unmount();
    }
  });
});

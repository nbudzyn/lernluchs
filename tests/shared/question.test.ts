import { expectTypeOf, it } from "vitest";

import type { AnswerOption, Question } from "../../src/shared/question";

it("makes questions, their option arrays and every option field readonly", () => {
  expectTypeOf<AnswerOption>().toEqualTypeOf<{
    readonly id: string;
    readonly text: string;
    readonly correct: boolean;
    readonly explanation: string;
    readonly sourceUrl: string;
  }>();
  expectTypeOf<Question>().toEqualTypeOf<{
    readonly id: string;
    readonly prompt: string;
    readonly options: readonly AnswerOption[];
  }>();
});

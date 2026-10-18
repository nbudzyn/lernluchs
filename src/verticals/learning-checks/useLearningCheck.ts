import { useRef, useState } from "react";

import type { Question } from "../../shared/question";
import { chooseQuestions, hasPassed, QUESTIONS_PER_CHECK } from "./checkLogic";
import type { Answer } from "./checkLogic";
import { congratulations } from "./congratulations";

export type CheckResult =
  | {
      phase: "passed";
      answers: readonly Answer[];
      congratulation: string;
      saveStatus: "not-requested" | "saved" | "failed";
    }
  | { phase: "failed"; answers: readonly Answer[] };

type CheckState =
  { phase: "answering"; answers: readonly Answer[] } | CheckResult;

export function useLearningCheck({
  topicId,
  questions,
  onPassed,
  random = Math.random,
}: {
  topicId: string;
  questions: readonly Question[];
  onPassed?: (topicId: string) => boolean;
  random?: () => number;
}) {
  const [selected] = useState(() => chooseQuestions(questions, random));
  const [state, setState] = useState<CheckState>({
    phase: "answering",
    answers: [],
  });
  const answeredQuestionIds = useRef(new Set<string>());
  const current =
    state.phase === "answering" ? selected[state.answers.length] : undefined;

  function answer(optionId: string) {
    if (!current || answeredQuestionIds.current.has(current.id)) return;
    answeredQuestionIds.current.add(current.id);
    const answers = [...state.answers, { question: current, optionId }];
    if (answers.length !== QUESTIONS_PER_CHECK) {
      setState({ phase: "answering", answers });
    } else if (hasPassed(answers)) {
      const saveStatus = onPassed
        ? onPassed(topicId)
          ? "saved"
          : "failed"
        : "not-requested";
      setState({
        phase: "passed",
        answers,
        saveStatus,
        congratulation:
          congratulations[Math.floor(random() * congratulations.length)],
      });
    } else {
      setState({ phase: "failed", answers });
    }
  }

  return { state, current, answer };
}

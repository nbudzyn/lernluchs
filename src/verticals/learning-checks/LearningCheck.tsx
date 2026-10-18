import { useEffect, useRef } from "react";

import type { Question } from "../../shared/question";
import { LearningCheckQuestion } from "./LearningCheckQuestion";
import { LearningCheckResult } from "./LearningCheckResult";
import { useLearningCheck } from "./useLearningCheck";
import "./LearningCheck.css";

export function LearningCheck({
  topicId,
  title,
  questions,
  onExit,
  onPassed,
  random,
}: {
  topicId: string;
  title: string;
  questions: readonly Question[];
  onExit: () => void;
  onPassed?: (topicId: string) => boolean;
  random?: () => number;
}) {
  const { state, current, answer } = useLearningCheck({
    topicId,
    questions,
    onPassed,
    random,
  });
  const stepHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    stepHeading.current?.focus();
  }, [state.answers.length]);

  return (
    <section className="learning-check" aria-label={`Lerncheck zu ${title}`}>
      <h1>{title}: Lerncheck</h1>
      {state.phase === "answering" && current && (
        <LearningCheckQuestion
          key={current.id}
          question={current}
          number={state.answers.length + 1}
          stepHeading={stepHeading}
          onAnswer={answer}
          onExit={onExit}
        />
      )}
      {state.phase !== "answering" && (
        <LearningCheckResult
          state={state}
          stepHeading={stepHeading}
          onExit={onExit}
        />
      )}
    </section>
  );
}

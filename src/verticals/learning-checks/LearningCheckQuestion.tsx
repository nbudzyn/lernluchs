import type { Ref } from "react";
import type { Question } from "../../shared/question";
import { QUESTIONS_PER_CHECK } from "./checkLogic";

export function LearningCheckQuestion({
  question,
  number,
  stepHeading,
  onAnswer,
  onExit,
}: {
  question: Question;
  number: number;
  stepHeading: Ref<HTMLHeadingElement>;
  onAnswer: (optionId: string) => void;
  onExit: () => void;
}) {
  return (
    <div className="learning-check-question">
      <p className="learning-check-count">
        Frage {number} von {QUESTIONS_PER_CHECK}
      </p>
      <h2 ref={stepHeading} tabIndex={-1}>
        {question.prompt}
      </h2>
      <div
        className="learning-check-options"
        role="group"
        aria-label="Antwortoptionen"
      >
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onAnswer(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button className="learning-check-exit" type="button" onClick={onExit}>
        Abbrechen
      </button>
    </div>
  );
}

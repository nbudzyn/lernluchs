import type { Ref } from "react";
import type { CheckResult } from "./useLearningCheck";

export function LearningCheckResult({
  state,
  stepHeading,
  onExit,
}: {
  state: CheckResult;
  stepHeading: Ref<HTMLHeadingElement>;
  onExit: () => void;
}) {
  return (
    <>
      {state.phase === "passed" ? (
        <section
          className="learning-check-celebration"
          aria-label="Glückwunsch"
        >
          <h2 ref={stepHeading} tabIndex={-1}>
            Lerncheck bestanden
          </h2>
          <p role="status">{state.congratulation}</p>
          {state.saveStatus === "saved" && <p>Als gelernt gespeichert.</p>}
          {state.saveStatus === "failed" && (
            <p role="alert">Das Ergebnis wurde nicht dauerhaft gespeichert.</p>
          )}
        </section>
      ) : (
        <h2 ref={stepHeading} tabIndex={-1}>
          Antworten im Überblick
        </h2>
      )}
      <ol className="learning-check-results">
        {state.answers.map(({ question, optionId }) => {
          const right = question.options.find((option) => option.correct)!;
          const chosen = question.options.find(
            (option) => option.id === optionId,
          )!;
          return (
            <li key={question.id}>
              <h3>{question.prompt}</h3>
              <p className="learning-check-correct">Richtig: {right.text}</p>
              <p>
                {right.explanation}{" "}
                <a href={right.sourceUrl} target="_blank" rel="noreferrer">
                  Quelle öffnen
                </a>
              </p>
              {!chosen.correct && (
                <>
                  <p className="learning-check-incorrect">
                    Gewählt: {chosen.text}
                  </p>
                  <p>
                    {chosen.explanation}{" "}
                    <a href={chosen.sourceUrl} target="_blank" rel="noreferrer">
                      Quelle öffnen
                    </a>
                  </p>
                </>
              )}
            </li>
          );
        })}
      </ol>
      <button className="learning-check-exit" type="button" onClick={onExit}>
        Zur Themenliste
      </button>
    </>
  );
}

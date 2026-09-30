import { useState } from "react";

import type { Question } from "../../shared/question";
import { congratulations } from "./congratulations";
import "./LearningCheck.css";

type Answer = { question: Question; optionId: string };

function shuffle<T>(items: T[], random: () => number): T[] {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

function chooseQuestions(
  questions: Question[],
  random: () => number,
): Question[] {
  return shuffle(questions, random)
    .slice(0, 5)
    .map((question) => ({
      ...question,
      options: shuffle(question.options, random),
    }));
}

export function LearningCheck({
  topicId,
  title,
  questions,
  onExit,
  onPassed,
  random = Math.random,
}: {
  topicId: string;
  title: string;
  questions: Question[];
  onExit: () => void;
  onPassed?: (topicId: string) => boolean;
  random?: () => number;
}) {
  const [selected] = useState(() => chooseQuestions(questions, random));
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [congratulation, setCongratulation] = useState<string | null>(null);
  const [saveSucceeded, setSaveSucceeded] = useState<boolean | null>(null);
  const current = selected[answers.length];
  const complete = answers.length === 5;
  const allCorrect = answers.every(
    (answer) =>
      answer.question.options.find((option) => option.id === answer.optionId)
        ?.correct,
  );

  function answer(optionId: string) {
    if (!current) return;
    if (
      answers.length === 4 &&
      allCorrect &&
      current.options.find((option) => option.id === optionId)?.correct
    ) {
      if (onPassed) setSaveSucceeded(onPassed(topicId));
      setCongratulation(
        congratulations[Math.floor(random() * congratulations.length)],
      );
    }
    setAnswers((previous) => [...previous, { question: current, optionId }]);
  }

  return (
    <section className="learning-check" aria-label={`Fragen zu ${title}`}>
      <h1>{title}: Fragen</h1>
      {!complete && current && (
        <div className="learning-check-question" key={current.id}>
          <p className="learning-check-count">
            Frage {answers.length + 1} von 5
          </p>
          <h2>{current.prompt}</h2>
          <div
            className="learning-check-options"
            role="group"
            aria-label="Antwortoptionen"
          >
            {current.options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => answer(option.id)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <button
            className="learning-check-exit"
            type="button"
            onClick={onExit}
          >
            Abbrechen
          </button>
        </div>
      )}
      {complete && (
        <>
          {allCorrect ? (
            <section
              className="learning-check-celebration"
              aria-label="Glückwunsch"
            >
              <h2>Lerncheck bestanden</h2>
              <p role="status">{congratulation}</p>
              {saveSucceeded === true && <p>Als gelernt gespeichert.</p>}
              {saveSucceeded === false && (
                <p role="alert">
                  Das Ergebnis wurde nicht dauerhaft gespeichert.
                </p>
              )}
            </section>
          ) : (
            <h2>Antworten im Überblick</h2>
          )}
          <ol className="learning-check-results">
            {answers.map(({ question, optionId }) => {
              const right = question.options.find((option) => option.correct)!;
              const chosen = question.options.find(
                (option) => option.id === optionId,
              )!;
              return (
                <li key={question.id}>
                  <h3>{question.prompt}</h3>
                  <p className="learning-check-correct">
                    Richtig: {right.text}
                  </p>
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
                        <a
                          href={chosen.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Quelle öffnen
                        </a>
                      </p>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
          <button
            className="learning-check-exit"
            type="button"
            onClick={onExit}
          >
            Zur Themenliste
          </button>
        </>
      )}
    </section>
  );
}

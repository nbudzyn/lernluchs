import { useState } from "react";

import type { Question } from "../../shared/question";

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
  title,
  questions,
  onExit,
  random = Math.random,
}: {
  title: string;
  questions: Question[];
  onExit: () => void;
  random?: () => number;
}) {
  const [selected] = useState(() => chooseQuestions(questions, random));
  const [answers, setAnswers] = useState<Answer[]>([]);
  const current = selected[answers.length];
  const complete = answers.length === 5;
  const allCorrect = answers.every(
    (answer) =>
      answer.question.options.find((option) => option.id === answer.optionId)
        ?.correct,
  );

  function answer(optionId: string) {
    if (!current) return;
    setAnswers((previous) => [...previous, { question: current, optionId }]);
  }

  return (
    <section aria-label={`Fragen zu ${title}`}>
      <h1>{title}: Fragen</h1>
      {!complete && current && (
        <div key={current.id}>
          <p>Frage {answers.length + 1} von 5</p>
          <h2>{current.prompt}</h2>
          <div role="group" aria-label="Antwortoptionen">
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
          <button type="button" onClick={onExit}>
            Abbrechen
          </button>
        </div>
      )}
      {complete && (
        <>
          <h2>
            {allCorrect
              ? "Alle Antworten richtig"
              : "Nicht alle Antworten richtig"}
          </h2>
          <ol>
            {answers.map(({ question, optionId }) => {
              const right = question.options.find((option) => option.correct)!;
              const chosen = question.options.find(
                (option) => option.id === optionId,
              )!;
              return (
                <li key={question.id}>
                  <h3>{question.prompt}</h3>
                  <p style={{ color: "green" }}>Richtig: {right.text}</p>
                  <p>
                    {right.explanation}{" "}
                    <a href={right.sourceUrl} target="_blank" rel="noreferrer">
                      Quelle öffnen
                    </a>
                  </p>
                  {!chosen.correct && (
                    <>
                      <p style={{ color: "red" }}>Gewählt: {chosen.text}</p>
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
          <button type="button" onClick={onExit}>
            Zur Themenliste
          </button>
        </>
      )}
    </section>
  );
}

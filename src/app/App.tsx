import { useState } from "react";

import { TopicBrowser } from "../verticals/topics";
import { LearningCheck } from "../verticals/learning-checks";
import type { Question } from "../verticals/learning-checks";

export function App() {
  const [activeCheck, setActiveCheck] = useState<{
    title: string;
    questions: Question[];
  } | null>(null);

  return (
    <main>
      <h1>{activeCheck ? "Lernluchs" : "Lernluchs – Themen"}</h1>
      {activeCheck ? (
        <LearningCheck
          title={activeCheck.title}
          questions={activeCheck.questions}
          onExit={() => setActiveCheck(null)}
        />
      ) : (
        <TopicBrowser
          onStartQuestions={(title, questions) =>
            setActiveCheck({ title, questions })
          }
        />
      )}
    </main>
  );
}

import { useState } from "react";

import { CatalogBrowser } from "../verticals/catalog";
import { LearningCheck } from "../verticals/learning-checks";
import type { Question } from "../verticals/learning-checks";

export function App() {
  const [activeCheck, setActiveCheck] = useState<{
    title: string;
    questions: Question[];
  } | null>(null);

  return (
    <main>
      <h1>Lernluchs</h1>
      {activeCheck ? (
        <LearningCheck
          title={activeCheck.title}
          questions={activeCheck.questions}
          onExit={() => setActiveCheck(null)}
        />
      ) : (
        <CatalogBrowser
          onStartQuestions={(title, questions) =>
            setActiveCheck({ title, questions })
          }
        />
      )}
    </main>
  );
}

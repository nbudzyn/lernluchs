import { useRef, useState } from "react";

import { TopicBrowser } from "../verticals/topics";
import {
  availableLearningCheckTopicIds,
  LearningCheck,
  questionsForTopic,
} from "../verticals/learning-checks";
import type { Question } from "../verticals/learning-checks";
import {
  LearningProgressNotice,
  useLearningProgress,
} from "../verticals/learning-progress";
import "./App.css";

export function App() {
  const progress = useLearningProgress();
  const checkTrigger = useRef<HTMLElement | null>(null);
  const [activeCheck, setActiveCheck] = useState<{
    id: string;
    title: string;
    questions: Question[];
  } | null>(null);

  return (
    <main>
      <div
        className="topic-stage"
        aria-hidden={activeCheck !== null}
        inert={activeCheck !== null}
      >
        <header className="topic-stage-header">
          <h1>Lernluchs KI – Themen</h1>
        </header>
        <LearningProgressNotice notice={progress.notice} />
        <TopicBrowser
          learnedTopicIds={progress.learnedTopicIds}
          availableLearningCheckTopicIds={availableLearningCheckTopicIds}
          onStartLearningCheck={(id, title) => {
            const questions = questionsForTopic(id);
            if (questions) {
              checkTrigger.current = document.activeElement as HTMLElement;
              setActiveCheck({ id, title, questions });
            }
          }}
        />
      </div>
      {activeCheck && (
        <div className="learning-check-overlay">
          <header className="topic-stage-header">
            <h1>Lernluchs KI</h1>
          </header>
          <LearningCheck
            topicId={activeCheck.id}
            title={activeCheck.title}
            questions={activeCheck.questions}
            onExit={() => {
              setActiveCheck(null);
              requestAnimationFrame(() =>
                checkTrigger.current?.focus({ preventScroll: true }),
              );
            }}
            onPassed={progress.markLearned}
          />
        </div>
      )}
    </main>
  );
}

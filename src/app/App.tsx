import { useState } from "react";

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

export function App() {
  const progress = useLearningProgress();
  const [activeCheck, setActiveCheck] = useState<{
    id: string;
    title: string;
    questions: Question[];
  } | null>(null);

  return (
    <main>
      <h1>{activeCheck ? "Lernluchs" : "Lernluchs – Themen"}</h1>
      <LearningProgressNotice notice={progress.notice} />
      {activeCheck ? (
        <LearningCheck
          topicId={activeCheck.id}
          title={activeCheck.title}
          questions={activeCheck.questions}
          onExit={() => setActiveCheck(null)}
          onPassed={progress.markLearned}
        />
      ) : (
        <TopicBrowser
          learnedTopicIds={progress.learnedTopicIds}
          availableLearningCheckTopicIds={availableLearningCheckTopicIds}
          onStartLearningCheck={(id, title) => {
            const questions = questionsForTopic(id);
            if (questions) setActiveCheck({ id, title, questions });
          }}
        />
      )}
    </main>
  );
}

import { TopicHelp } from "../help";
import { Imprint } from "../imprint";
import { topics } from "./topics";
import type { LearningPath, Topic } from "./topicContract";
import { TopicDetails } from "./TopicDetails";
import { TopicList } from "./TopicList";
import { useTopicFilters } from "./useTopicFilters";
import {
  useTopicNavigation,
  type LearningCheckNavigation,
  type SupplementaryView,
} from "./useTopicNavigation";
import "./TopicBrowser.css";

const supplementaryViews = { help: TopicHelp, imprint: Imprint };
function isSupplementaryView(view: string): view is SupplementaryView {
  return view in supplementaryViews;
}

export function TopicBrowser({
  items = topics.items,
  paths = topics.paths ?? [],
  learnedTopicIds = [],
  availableLearningCheckTopicIds = [],
  onStartLearningCheck,
  learningCheck = { status: "closed" },
}: {
  items?: readonly Topic[];
  paths?: readonly LearningPath[];
  learnedTopicIds?: readonly string[];
  availableLearningCheckTopicIds?: readonly string[];
  onStartLearningCheck?: (id: string, title: string) => void;
  learningCheck?: LearningCheckNavigation;
}) {
  const navigation = useTopicNavigation(learningCheck);
  const filters = useTopicFilters(
    items,
    paths,
    navigation.selectedId,
    navigation.excludeSelection,
  );
  const selectedItem = items.find((item) => item.id === navigation.selectedId);
  const supplementary = isSupplementaryView(navigation.view);
  const Supplementary = supplementary
    ? supplementaryViews[navigation.view as SupplementaryView]
    : TopicHelp;
  return (
    <div
      className="topic-browser"
      data-mobile-view={navigation.view}
      data-supplementary-view={supplementary || undefined}
    >
      <TopicList
        model={filters}
        selectedId={navigation.selectedId}
        onSelectTopic={navigation.selectTopic}
        openSupplementaryView={navigation.openSupplementaryView}
        learnedTopicIds={learnedTopicIds}
        availableLearningCheckTopicIds={availableLearningCheckTopicIds}
        onStartLearningCheck={
          onStartLearningCheck &&
          ((id, title) => {
            navigation.rememberListPosition();
            onStartLearningCheck(id, title);
          })
        }
      />
      <div className="topic-browser-detail">
        {(supplementary || !selectedItem) && (
          <>
            {supplementary && (
              <button
                className="topic-back-button"
                type="button"
                onClick={navigation.returnToList}
              >
                Zur Themenliste
              </button>
            )}
            <Supplementary />
          </>
        )}
        {selectedItem && !supplementary && (
          <TopicDetails
            selectedItem={selectedItem}
            returnToList={navigation.returnToList}
          />
        )}
      </div>
    </div>
  );
}

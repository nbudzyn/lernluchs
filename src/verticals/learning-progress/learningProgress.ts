import { useCallback, useState } from "react";

const storageKey = "lernluchs.learning-progress.v1";

type Snapshot = {
  learnedTopicIds: string[];
  notice: string | null;
  canSave: boolean;
};

function readProgress(): Snapshot {
  let value: string | null;
  try {
    value = localStorage.getItem(storageKey);
  } catch {
    return {
      learnedTopicIds: [],
      notice: "Der Lernstand konnte nicht geladen werden.",
      canSave: false,
    };
  }

  if (value === null)
    return { learnedTopicIds: [], notice: null, canSave: true };

  try {
    const parsed: unknown = JSON.parse(value);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "version" in parsed &&
      parsed.version === 1 &&
      "learnedTopicIds" in parsed &&
      Array.isArray(parsed.learnedTopicIds) &&
      parsed.learnedTopicIds.every(
        (id: unknown) => typeof id === "string" && id.length > 0,
      ) &&
      new Set(parsed.learnedTopicIds).size === parsed.learnedTopicIds.length
    ) {
      return {
        learnedTopicIds: parsed.learnedTopicIds,
        notice: null,
        canSave: true,
      };
    }
  } catch {
    // Invalid JSON is treated like an invalid schema below.
  }

  try {
    localStorage.removeItem(storageKey);
    return {
      learnedTopicIds: [],
      notice:
        "Der gespeicherte Lernstand war beschädigt und wurde zurückgesetzt.",
      canSave: true,
    };
  } catch {
    return {
      learnedTopicIds: [],
      notice:
        "Der gespeicherte Lernstand ist beschädigt und konnte nicht zurückgesetzt werden.",
      canSave: false,
    };
  }
}

export function useLearningProgress() {
  const [snapshot, setSnapshot] = useState(readProgress);

  const markLearned = useCallback((topicId: string): boolean => {
    const current = readProgress();
    if (!current.canSave) {
      setSnapshot(current);
      return false;
    }
    const learnedTopicIds = current.learnedTopicIds.includes(topicId)
      ? current.learnedTopicIds
      : [...current.learnedTopicIds, topicId];
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ version: 1, learnedTopicIds }),
      );
      setSnapshot({ ...current, learnedTopicIds });
      return true;
    } catch {
      setSnapshot(current);
      return false;
    }
  }, []);

  return {
    learnedTopicIds: snapshot.learnedTopicIds,
    notice: snapshot.notice,
    markLearned,
  };
}

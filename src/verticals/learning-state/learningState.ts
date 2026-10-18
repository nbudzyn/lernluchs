import { useCallback, useEffect, useState } from "react";

// Bestehender Speichervertrag: Der neue Vertikalenname verändert gespeicherten Lernstand nicht.
const storageKey = "lernluchs.learning-progress.v1";

export type Snapshot =
  | {
      status: "ready";
      learnedTopicIds: string[];
      notice:
        | null
        | "Der gespeicherte Lernstand war beschädigt und wurde zurückgesetzt.";
    }
  | {
      status: "unavailable";
      learnedTopicIds: [];
      notice: "Der Lernstand konnte nicht geladen werden.";
    }
  | {
      status: "damaged";
      learnedTopicIds: [];
      notice:
        | null
        | "Der gespeicherte Lernstand ist beschädigt und konnte nicht zurückgesetzt werden.";
    };

function readLearningState(): Snapshot {
  let value: string | null;
  try {
    value = localStorage.getItem(storageKey);
  } catch {
    return {
      learnedTopicIds: [],
      notice: "Der Lernstand konnte nicht geladen werden.",
      status: "unavailable",
    };
  }

  if (value === null)
    return { status: "ready", learnedTopicIds: [], notice: null };

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
        status: "ready",
      };
    }
  } catch {
    // Invalid JSON is treated like an invalid schema below.
  }

  return {
    learnedTopicIds: [],
    notice: null,
    status: "damaged",
  };
}

function resetDamagedLearningState(): Snapshot {
  try {
    localStorage.removeItem(storageKey);
    return {
      learnedTopicIds: [],
      notice:
        "Der gespeicherte Lernstand war beschädigt und wurde zurückgesetzt.",
      status: "ready",
    };
  } catch {
    return {
      learnedTopicIds: [],
      notice:
        "Der gespeicherte Lernstand ist beschädigt und konnte nicht zurückgesetzt werden.",
      status: "damaged",
    };
  }
}

export function useLearningState() {
  const [snapshot, setSnapshot] = useState(readLearningState);

  useEffect(() => {
    if (readLearningState().status === "damaged") {
      setSnapshot(resetDamagedLearningState());
    }
  }, []);

  const markLearned = useCallback((topicId: string): boolean => {
    const stored = readLearningState();
    const current =
      stored.status === "damaged" ? resetDamagedLearningState() : stored;
    if (current.status !== "ready") {
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

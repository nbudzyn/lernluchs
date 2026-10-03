import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";

import { App } from "../../src/app/App";
import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../src/verticals/learning-checks";
import { topics } from "../../src/verticals/topics/topics";

const removedId = "code-navigation-with-symbols-and-references";
const removedTitle =
  "Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen";
const storageKey = "lernluchs.learning-progress.v1";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

it("removes the topic, its sources, path references and question pool", () => {
  expect(topics.items.some((topic) => topic.id === removedId)).toBe(false);
  expect(topics.paths?.flatMap((path) => path.topicIds)).not.toContain(
    removedId,
  );
  expect(availableLearningCheckTopicIds).not.toContain(removedId);
  expect(questionsForTopic(removedId)).toBeUndefined();
});

it.each([false, true])(
  "ignores the removed topic with a learned entry: %s",
  (learned) => {
    const saved = JSON.stringify({
      version: 1,
      learnedTopicIds: [
        "human-ai-responsibility",
        ...(learned ? [removedId] : []),
      ],
    });
    localStorage.setItem(storageKey, saved);
    render(<App />);

    expect(screen.queryByRole("button", { name: removedTitle })).toBeNull();
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.getAllByRole("img", { name: "Gelernt" })).toHaveLength(1);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Fragen starten: Mensch und KI: Verantwortung bleibt menschlich",
      }),
    );
    expect(screen.getByText("Frage 1 von 5")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Abbrechen" }));
    expect(screen.getByRole("navigation", { name: "Lernthemen" })).toBeTruthy();
    expect(localStorage.getItem(storageKey)).toBe(saved);
  },
);

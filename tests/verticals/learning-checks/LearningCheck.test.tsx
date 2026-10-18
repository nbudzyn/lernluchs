import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LearningCheck } from "../../../src/verticals/learning-checks";
import type { Question } from "../../../src/verticals/learning-checks";

const questions: Question[] = Array.from({ length: 7 }, (_, index) => ({
  id: `q-${index}`,
  prompt: `Frage ${index}`,
  options: [
    {
      id: "a",
      text: `Richtig ${index}`,
      correct: true,
      explanation: "Belegt.",
      sourceUrl: "https://example.org/a",
    },
    {
      id: "b",
      text: `Falsch ${index}`,
      correct: false,
      explanation: "Nicht belegt.",
      sourceUrl: "https://example.org/b",
    },
    {
      id: "c",
      text: "Andere Antwort",
      correct: false,
      explanation: "Unpassend.",
      sourceUrl: "https://example.org/c",
    },
  ],
}));

afterEach(cleanup);

describe("LearningCheck", () => {
  it("focuses each question and the result after keyboard answers", () => {
    for (const correct of [true, false]) {
      const view = render(
        <LearningCheck
          title="Testthema"
          topicId="topic-a"
          questions={questions}
          onExit={vi.fn()}
          random={() => 0}
        />,
      );
      for (let index = 0; index < 5; index += 1) {
        expect
          .soft(document.activeElement)
          .toBe(screen.getByRole("heading", { level: 2 }));
        const option = screen.getByRole("button", {
          name: correct ? /^Richtig / : /^Falsch /,
        });
        option.focus();
        fireEvent.click(option);
      }
      expect.soft(document.activeElement).toBe(
        screen.getByRole("heading", {
          name: correct ? "Lerncheck bestanden" : "Antworten im Überblick",
        }),
      );
      view.unmount();
    }
  });

  it("saves a perfect run immediately after the fifth answer", () => {
    const onPassed = vi.fn(() => true);
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        onPassed={onPassed}
        random={() => 0}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Testthema: Lerncheck" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("region", { name: "Lerncheck zu Testthema" }),
    ).toBeTruthy();
    for (let index = 0; index < 4; index += 1)
      fireEvent.click(screen.getByRole("button", { name: /^Richtig / }));
    expect(onPassed).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: /^Richtig / }));
    expect(onPassed).toHaveBeenCalledExactlyOnceWith("topic-a");
    expect(screen.getByText("Als gelernt gespeichert.")).toBeTruthy();
  });

  it("reports failed saving at the result without retrying the same run", () => {
    const onPassed = vi.fn(() => false);
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        onPassed={onPassed}
        random={() => 0}
      />,
    );
    for (let index = 0; index < 5; index += 1)
      fireEvent.click(screen.getByRole("button", { name: /^Richtig / }));
    expect(onPassed).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("alert").textContent).toContain(
      "nicht dauerhaft gespeichert",
    );
  });

  it("asks five different questions one at a time and reveals the result only at the end", () => {
    const random = vi.fn(() => 0);
    const original = structuredClone(questions);
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        random={random}
      />,
    );
    expect(random).toHaveBeenCalledTimes(16);
    const seen = new Set<string>();
    for (let index = 0; index < 5; index += 1) {
      const heading = screen.getByRole("heading", { level: 2 });
      seen.add(heading.textContent ?? "");
      expect(heading.textContent).toBe(`Frage ${index + 1}`);
      expect(screen.getByText(`Frage ${index + 1} von 5`)).toBeTruthy();
      expect(screen.queryByText("Lerncheck bestanden")).toBeNull();
      expect(screen.queryByRole("status")).toBeNull();
      fireEvent.click(screen.getByRole("button", { name: /^Richtig / }));
    }
    expect(seen.size).toBe(5);
    const celebration = screen.getByRole("region", { name: "Glückwunsch" });
    expect(celebration.querySelector("h2")?.textContent).toBe(
      "Lerncheck bestanden",
    );
    expect(screen.getByRole("status").textContent).toBe(
      "Herzlichen Glückwunsch!",
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(5);
    expect(screen.getAllByRole("link")).toHaveLength(5);
    expect(random).toHaveBeenCalledTimes(17);
    expect(questions).toEqual(original);
    expect(screen.queryByText("Als gelernt gespeichert.")).toBeNull();
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("does not pass or save a pool with fewer than five questions", () => {
    for (const size of [0, 1, 4]) {
      const onPassed = vi.fn(() => true);
      const view = render(
        <LearningCheck
          title="Testthema"
          topicId="topic-a"
          questions={questions.slice(0, size)}
          onExit={vi.fn()}
          onPassed={onPassed}
          random={() => 0}
        />,
      );
      for (let index = 0; index < size; index += 1)
        fireEvent.click(screen.getByRole("button", { name: /^Richtig / }));
      expect
        .soft(screen.queryByText("Lerncheck bestanden"), `${size} questions`)
        .toBeNull();
      expect
        .soft(screen.queryByText("Antworten im Überblick"), `${size} questions`)
        .toBeNull();
      expect.soft(onPassed, `${size} questions`).not.toHaveBeenCalled();
      view.unmount();
    }
  });

  it("can select the last of the 50 congratulations", () => {
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        random={() => 0.999999}
      />,
    );
    for (let index = 0; index < 5; index += 1)
      fireEvent.click(screen.getByRole("button", { name: /^Richtig / }));
    expect(screen.getByRole("status").textContent).toBe(
      "KI kann unterstützen. Dieser Erfolg gehört dem Menschen.",
    );
  });

  it("shows the chosen wrong option, explanations, and a deliberate source link", () => {
    const onPassed = vi.fn(() => true);
    const random = vi.fn(() => 0);
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        random={random}
        onPassed={onPassed}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /^Falsch / }));
    for (let index = 1; index < 5; index += 1)
      fireEvent.click(screen.getByRole("button", { name: /^Richtig / }));
    expect(screen.getByText("Antworten im Überblick")).toBeTruthy();
    expect(screen.queryByText("Lerncheck bestanden")).toBeNull();
    expect(screen.queryByRole("status")).toBeNull();
    expect(screen.getByText("Nicht belegt.")).toBeTruthy();
    expect(screen.getAllByRole("link")[0].getAttribute("target")).toBe(
      "_blank",
    );
    expect(screen.queryByRole("button", { name: /^Richtig / })).toBeNull();
    expect(onPassed).not.toHaveBeenCalled();
    expect(random).toHaveBeenCalledTimes(16);
  });

  it("discards a run when cancelled", () => {
    const onExit = vi.fn();
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={onExit}
        random={() => 0}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /^Falsch / }));
    fireEvent.click(screen.getByRole("button", { name: "Abbrechen" }));
    expect(onExit).toHaveBeenCalledOnce();
    expect(screen.queryByText("Lerncheck bestanden")).toBeNull();
    expect(screen.queryByText("Antworten im Überblick")).toBeNull();
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("accepts only the first click on the current question", () => {
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        random={() => 0}
      />,
    );
    const firstOption = screen.getByRole("button", { name: /^Richtig / });
    fireEvent.click(firstOption);
    fireEvent.click(firstOption);
    expect(screen.getByText("Frage 2 von 5")).toBeTruthy();
  });

  it("shuffles answer options so the correct answer is not always first", () => {
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        random={() => 0}
      />,
    );
    const options = screen.getByRole("group", { name: "Antwortoptionen" });
    expect(options.querySelector("button")?.textContent).not.toMatch(
      /^Richtig /,
    );
  });
});

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
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        random={() => 0}
      />,
    );
    const seen = new Set<string>();
    for (let index = 0; index < 5; index += 1) {
      const heading = screen.getByRole("heading", { level: 2 });
      seen.add(heading.textContent ?? "");
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
    render(
      <LearningCheck
        title="Testthema"
        topicId="topic-a"
        questions={questions}
        onExit={vi.fn()}
        random={() => 0}
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

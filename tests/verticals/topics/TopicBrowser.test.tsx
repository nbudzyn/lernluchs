import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { TopicBrowser } from "../../../src/verticals/topics/TopicBrowser";
import { topics } from "../../../src/verticals/topics/topics";

afterEach(cleanup);

describe("TopicBrowser", () => {
  it("shows an accessible icon button for each available learning check", () => {
    render(<TopicBrowser onStartQuestions={() => {}} />);

    const quizItems = topics.items.filter((item) => item.questions);
    expect(quizItems).toHaveLength(6);
    for (const item of quizItems) {
      const label = `Fragen starten: ${item.title}`;
      const button = screen.getByRole("button", { name: label });
      expect(button.getAttribute("title")).toBe(label);
      expect(button.textContent).toBe("");
      expect(button.querySelector("svg[aria-hidden='true']")).toBeTruthy();
    }
  });

  it("shows all fifteen topics in one semantic text overview", () => {
    render(<TopicBrowser />);

    expect(screen.getByRole("navigation", { name: "Lernthemen" })).toBeTruthy();
    expect(screen.getAllByRole("button")).toHaveLength(15);
    expect(
      screen.getByRole("button", {
        name: "Mensch und KI: Verantwortung bleibt menschlich",
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: "Spec-Driven Development mit OpenSpec",
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", { name: "Webabläufe mit Playwright prüfen" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: "Kontext und Vertrauensgrenzen für Coding-Agenten",
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: "Geheimnisse und sensible Daten beim KI-Einsatz schützen",
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: "KI-generierte Änderungen prüfen und übernehmen",
      }),
    ).toBeTruthy();
  });

  it.each([
    [
      "Kontext und Vertrauensgrenzen für Coding-Agenten",
      "OWASP LLM01:2025 Prompt Injection",
    ],
    [
      "Geheimnisse und sensible Daten beim KI-Einsatz schützen",
      "OWASP LLM02:2025 Sensitive Information Disclosure",
    ],
    [
      "KI-generierte Änderungen prüfen und übernehmen",
      "Review AI-generated code - GitHub Docs",
    ],
  ])(
    "shows the new card %s with content, metadata, and sources",
    (title, sourceTitle) => {
      render(<TopicBrowser />);
      fireEvent.click(screen.getByRole("button", { name: title }));

      expect(screen.getByRole("article", { name: title })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Problem" })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Kernkonzept" })).toBeTruthy();
      expect(
        screen.getByRole("heading", { name: "Java-/Web-Einsatz" }),
      ).toBeTruthy();
      expect(
        screen.getByRole("heading", { name: "Wichtige Grenze" }),
      ).toBeTruthy();
      expect(screen.getByText("Fachlich geprüft")).toBeTruthy();
      expect(screen.getByText("Wiedervorlage")).toBeTruthy();
      expect(screen.queryByText("Inhaltsversion")).toBeNull();
      expect(screen.getByRole("link", { name: sourceTitle })).toBeTruthy();
    },
  );

  it("shows the complete topic after a user selects it", () => {
    render(<TopicBrowser />);

    const topic = screen.getByRole("button", {
      name: "Mensch und KI: Verantwortung bleibt menschlich",
    });
    fireEvent.click(topic);

    expect(topic.getAttribute("aria-pressed")).toBe("true");
    expect(
      screen.getByRole("article", {
        name: "Mensch und KI: Verantwortung bleibt menschlich",
      }),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Problem" })).toBeTruthy();
    expect(
      screen.getByText(
        "KI-Ausgaben können plausibel wirken, obwohl Kontext, Risiken oder Folgen falsch eingeschätzt sind.",
      ),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Kernkonzept" })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Java-/Web-Einsatz" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Wichtige Grenze" }),
    ).toBeTruthy();
  });

  it("shows editorial metadata and a consciously activated source link", () => {
    render(<TopicBrowser />);

    expect(
      screen.queryByRole("link", {
        name: "NIST AI RMF Core",
      }),
    ).toBeNull();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Mensch und KI: Verantwortung bleibt menschlich",
      }),
    );

    expect(screen.getByText("Veröffentlicht")).toBeTruthy();
    expect(screen.getByText("2026-09-20")).toBeTruthy();
    expect(screen.getByText("Fachlich geprüft")).toBeTruthy();
    expect(screen.getByText("Wiedervorlage")).toBeTruthy();
    expect(screen.getByText("Status")).toBeTruthy();

    const source = screen.getByRole("link", {
      name: "NIST AI RMF Core",
    });
    expect(source.getAttribute("href")).toBe(
      "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/",
    );
    expect(source.getAttribute("target")).toBe("_blank");
    expect(source.getAttribute("rel")).toBe("noreferrer");
  });

  it("shows primary sources first and hides an empty secondary group", () => {
    render(<TopicBrowser />);
    fireEvent.click(
      screen.getByRole("button", { name: "Fachverhalten mit TDD absichern" }),
    );
    expect(screen.getByRole("heading", { name: "Primärquellen" })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Sekundärquellen" }),
    ).toBeTruthy();
    expect(screen.getAllByRole("link").map((link) => link.textContent)).toEqual(
      ["Canon TDD - Kent Beck", "Test Driven Development - Martin Fowler"],
    );
    fireEvent.click(
      screen.getByRole("button", {
        name: "Mensch und KI: Verantwortung bleibt menschlich",
      }),
    );
    expect(screen.getByRole("heading", { name: "Primärquellen" })).toBeTruthy();
    expect(
      screen.queryByRole("heading", { name: "Sekundärquellen" }),
    ).toBeNull();
  });

  it("marks German source titles without changing the link", () => {
    const item = topics.items[0];
    render(
      <TopicBrowser
        items={[
          {
            ...item,
            sources: [
              { ...item.sources[0], title: "Deutsche Quelle", language: "de" },
            ],
          },
        ]}
      />,
    );
    expect(screen.queryByRole("link")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: item.title }));
    expect(
      screen.getByRole("link", { name: "Deutsche Quelle [DE]" }),
    ).toBeTruthy();
  });
});

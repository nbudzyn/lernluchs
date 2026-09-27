import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { TopicBrowser } from "../../../src/verticals/topics/TopicBrowser";
import { topics } from "../../../src/verticals/topics/topics";

afterEach(cleanup);

function filterSummary() {
  return document.querySelector(".path-filter-summary")?.textContent;
}

describe("TopicBrowser", () => {
  it("shows the descriptive foundation path name in the filter summary", () => {
    render(<TopicBrowser />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Lernpfade von Spec-Driven Development mit OpenSpec filtern",
      }),
    );
    expect(filterSummary()).toBe(
      "Themen gefiltert nach Lernpfaden: Grundlagen für KI-gestützte Softwareentwicklung",
    );
  });

  it("marks only saved quiz topics as learned, including after a catalog change", () => {
    const quizTopic = topics.items.find((item) => item.questions)!;
    const plainTopic = {
      ...quizTopic,
      id: "temporarily-without-quiz",
      questions: undefined,
    };
    render(
      <TopicBrowser
        items={[plainTopic, quizTopic]}
        learnedTopicIds={[quizTopic.id, plainTopic.id, "temporarily-missing"]}
      />,
    );
    const rows = screen.getAllByRole("listitem");
    expect(rows[0].textContent).not.toContain("✓");
    expect(rows[1].textContent).toContain("✓");
    expect(rows[1].textContent).not.toContain("Gelernt");
    expect(screen.getByRole("img", { name: "Gelernt" })).toBeTruthy();
  });

  it("shows an accessible icon button for each available learning check", () => {
    render(<TopicBrowser onStartQuestions={() => {}} />);

    const quizItems = topics.items.filter((item) => item.questions);
    expect(quizItems).toHaveLength(16);
    for (const item of quizItems) {
      const label = `Fragen starten: ${item.title}`;
      const button = screen.getByRole("button", { name: label });
      expect(button.getAttribute("title")).toBe(label);
      expect(button.textContent).toBe("");
      expect(button.querySelector("svg[aria-hidden='true']")).toBeTruthy();
    }
  });

  it("shows all twenty-six topics in one semantic text overview", () => {
    render(<TopicBrowser />);

    expect(screen.getByRole("navigation", { name: "Lernthemen" })).toBeTruthy();
    expect(
      screen
        .getByRole("navigation", { name: "Lernthemen" })
        .querySelectorAll("li"),
    ).toHaveLength(26);
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

  it("filters by current paths and closes details that leave the list without reopening them", () => {
    const items = topics.items.slice(0, 4).map((item, index) => ({
      ...item,
      id: `test-${index}`,
      title: `Thema ${index}`,
      questions: undefined,
    }));
    const paths = [
      { name: "Später", topicIds: ["test-1", "test-2"] },
      { name: "Früher", topicIds: ["test-0", "test-1"] },
    ];
    render(<TopicBrowser items={items} paths={paths} />);

    expect(
      screen.queryByRole("button", { name: "Lernpfade von Thema 3 filtern" }),
    ).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Thema 3" }));
    fireEvent.click(
      screen.getByRole("button", { name: "Lernpfade von Thema 1 filtern" }),
    );
    expect(
      screen.getByRole("navigation", { name: "Lernthemen" }).textContent,
    ).not.toContain("Thema 3");
    expect(screen.queryByRole("article", { name: "Thema 3" })).toBeNull();
    expect(filterSummary()).toBe(
      "Themen gefiltert nach Lernpfaden: Früher, Später",
    );
    expect(
      screen
        .getAllByRole("button", { name: /^Thema \d$/ })
        .map((button) => button.textContent),
    ).toEqual(["Thema 0", "Thema 1", "Thema 2"]);

    fireEvent.click(screen.getByRole("button", { name: "Thema 0" }));
    expect(screen.getByRole("article", { name: "Thema 0" })).toBeTruthy();

    fireEvent.click(
      screen.getByRole("button", { name: "Lernpfade von Thema 2 filtern" }),
    );
    expect(screen.queryByRole("article", { name: "Thema 0" })).toBeNull();
    expect(filterSummary()).toBe("Themen gefiltert nach Lernpfaden: Später");
    expect(
      screen
        .getAllByRole("button", { name: /^Thema \d$/ })
        .map((button) => button.textContent),
    ).toEqual(["Thema 1", "Thema 2"]);

    fireEvent.click(
      screen.getByRole("button", { name: "Lernpfade von Thema 2 filtern" }),
    );
    expect(filterSummary()).toBeUndefined();
    expect(screen.getAllByRole("button", { name: /^Thema \d$/ })).toHaveLength(
      4,
    );
    expect(screen.queryByRole("article")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Thema 1" }));
    fireEvent.click(
      screen.getByRole("button", { name: "Lernpfade von Thema 2 filtern" }),
    );
    expect(screen.getByRole("article", { name: "Thema 1" })).toBeTruthy();
  });

  it("selects one path and restores the icon's full path filter before clearing it", () => {
    const items = topics.items.slice(0, 3).map((item, index) => ({
      ...item,
      id: `path-test-${index}`,
      title: `Pfadthema ${index}`,
      questions: undefined,
    }));
    const paths = [
      { name: "Erster Pfad", topicIds: ["path-test-0", "path-test-1"] },
      { name: "Zweiter Pfad", topicIds: ["path-test-0", "path-test-2"] },
    ];
    render(<TopicBrowser items={items} paths={paths} />);

    const icon = screen.getByRole("button", {
      name: "Lernpfade von Pfadthema 0 filtern",
    });
    fireEvent.click(icon);
    fireEvent.click(screen.getByRole("button", { name: "Pfadthema 2" }));
    fireEvent.click(screen.getByRole("button", { name: "Erster Pfad" }));
    expect(
      screen
        .getByRole("button", { name: "Erster Pfad" })
        .getAttribute("aria-pressed"),
    ).toBe("true");
    expect(screen.queryByRole("button", { name: "Pfadthema 2" })).toBeNull();
    expect(screen.queryByRole("article", { name: "Pfadthema 2" })).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Erster Pfad" }));
    expect(screen.queryByRole("button", { name: "Pfadthema 2" })).toBeNull();

    fireEvent.click(icon);
    expect(screen.getByRole("button", { name: "Pfadthema 2" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Zweiter Pfad" })).toBeTruthy();
    fireEvent.click(icon);
    expect(screen.queryByRole("button", { name: "Erster Pfad" })).toBeNull();
    expect(
      screen.getAllByRole("button", { name: /^Pfadthema \d$/ }),
    ).toHaveLength(3);
    expect(screen.queryByRole("article")).toBeNull();
  });

  it("keeps details for a topic that remains in the selected single path", () => {
    const items = topics.items.slice(0, 2);
    const paths = [
      { name: "Beide", topicIds: items.map((item) => item.id) },
      { name: "Nur erstes", topicIds: [items[0].id] },
    ];
    render(<TopicBrowser items={items} paths={paths} />);
    fireEvent.click(screen.getByRole("button", { name: items[0].title }));
    fireEvent.click(
      screen.getByRole("button", {
        name: `Lernpfade von ${items[0].title} filtern`,
      }),
    );
    fireEvent.click(screen.getByRole("button", { name: "Nur erstes" }));
    expect(screen.getByRole("article", { name: items[0].title })).toBeTruthy();
  });

  it("sorts path names by the full current topic order, including shared prefixes", () => {
    const items = topics.items.slice(0, 3).map((item, index) => ({
      ...item,
      id: `changed-${index}`,
      title: `Geändert ${index}`,
      questions: undefined,
    }));
    const paths = [
      { name: "Lang spät", topicIds: ["changed-0", "changed-2"] },
      { name: "Kurz", topicIds: ["changed-0"] },
      { name: "Lang früh", topicIds: ["changed-0", "changed-1"] },
    ];
    render(<TopicBrowser items={items} paths={paths} />);
    fireEvent.click(
      screen.getByRole("button", { name: "Lernpfade von Geändert 0 filtern" }),
    );
    expect(filterSummary()).toBe(
      "Themen gefiltert nach Lernpfaden: Kurz, Lang früh, Lang spät",
    );
    expect(
      screen
        .getAllByRole("button", { name: /^Geändert \d$/ })
        .map((button) => button.textContent),
    ).toEqual(["Geändert 0", "Geändert 1", "Geändert 2"]);
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
        screen.getByRole("heading", {
          name: "Anwendung in der Java- und Webentwicklung",
        }),
      ).toBeTruthy();
      expect(
        screen.getByRole("heading", { name: "Grenzen des Konzepts" }),
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
      screen.getByRole("heading", {
        name: "Anwendung in der Java- und Webentwicklung",
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Grenzen des Konzepts" }),
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

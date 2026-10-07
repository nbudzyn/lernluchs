import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { TopicBrowser } from "../../../src/verticals/topics/TopicBrowser";
import { topics } from "../../../src/verticals/topics/topics";

const viewPreferenceKey = "lernluchs.topic-list-view.v1";

// Existing title workflows deliberately exercise the saved title preference.
beforeEach(() => localStorage.setItem(viewPreferenceKey, "topics"));
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  localStorage.clear();
});

function filterSummary() {
  const summary = document.querySelector(".path-filter-summary");
  if (!summary) return undefined;
  return `${summary.querySelector(".path-filter-label")?.textContent}: ${Array.from(
    summary.querySelectorAll(".path-name-button"),
  )
    .map((button) => button.textContent)
    .join(", ")}`;
}

describe("TopicBrowser", () => {
  it("defaults to anchors and restores only valid local list preferences without touching other data", () => {
    localStorage.setItem("synthetic-learning-state", "unchanged");
    localStorage.setItem("unrelated", "unchanged");
    for (const stored of [null, "topics", "everydayAnchors", "invalid"]) {
      if (stored === null) localStorage.removeItem(viewPreferenceKey);
      else localStorage.setItem(viewPreferenceKey, stored);
      const writes = vi.spyOn(Storage.prototype, "setItem");
      render(<TopicBrowser />);
      const initial = stored === "topics" ? "Themen" : "Kommt mir bekannt vor";
      const next = stored === "topics" ? "Kommt mir bekannt vor" : "Themen";
      expect(
        screen
          .getByRole("button", { name: initial })
          .getAttribute("aria-pressed"),
        stored ?? "missing",
      ).toBe("true");
      expect(writes).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole("button", { name: next }));
      expect(localStorage.getItem(viewPreferenceKey)).toBe(
        next === "Themen" ? "topics" : "everydayAnchors",
      );
      cleanup();
      render(<TopicBrowser />);
      expect(
        screen.getByRole("button", { name: next }).getAttribute("aria-pressed"),
      ).toBe("true");
      expect(writes).toHaveBeenCalledTimes(1);
      expect(localStorage.getItem("synthetic-learning-state")).toBe(
        "unchanged",
      );
      expect(localStorage.getItem("unrelated")).toBe("unchanged");
      cleanup();
      writes.mockRestore();
    }
  });

  it("keeps switching usable with blocked storage and clears the notice after a successful retry", () => {
    const read = vi
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation(() => {
        throw new Error("blocked");
      });
    render(<TopicBrowser />);
    expect(
      screen
        .getByRole("button", { name: "Kommt mir bekannt vor" })
        .getAttribute("aria-pressed"),
    ).toBe("true");
    read.mockRestore();
    const write = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        throw new Error("blocked");
      });
    fireEvent.click(screen.getByRole("button", { name: "Themen" }));
    expect(
      screen
        .getByRole("button", { name: "Themen" })
        .getAttribute("aria-pressed"),
    ).toBe("true");
    expect(screen.getByRole("status").textContent).toContain(
      "Auswahl nicht speichern",
    );
    write.mockRestore();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Kommt mir bekannt vor",
      }),
    );
    expect(screen.queryByRole("status")).toBeNull();
    expect(localStorage.getItem(viewPreferenceKey)).toBe("everydayAnchors");
  });

  it.each([
    ["active", "Aktiv"],
    ["watching", "Unter Beobachtung"],
    ["archived", "Archiviert"],
    ["replaced", "Ersetzt"],
  ] as const)("shows editorial status %s in German", (status, label) => {
    const item = {
      ...topics.items[0],
      title: "Editierbarer Titel",
      editorial: { ...topics.items[0].editorial, status },
    };
    render(<TopicBrowser items={[item]} paths={[]} />);
    fireEvent.click(screen.getByRole("button", { name: item.title }));
    expect(screen.getByText(label)).toBeTruthy();
    expect(screen.queryByText(status)).toBeNull();
  });
  it("shows accessible video links with full duration and a separate learning segment", () => {
    const topic = {
      ...topics.items[0],
      sources: [
        topics.items[0].sources[0],
        {
          title: "Langer Lernvortrag",
          url: "https://www.youtube.com/watch?v=example1234&t=600s",
          type: "learning-video" as const,
          mediaType: "video" as const,
          origin: "secondary" as const,
          language: "de" as const,
          duration: "96:14",
          learningSegment: { start: "10:00", end: "52:36" },
          checkedAt: "2026-09-30",
        },
      ],
    };
    render(<TopicBrowser items={[topic]} paths={[]} />);
    fireEvent.click(screen.getByRole("button", { name: topic.title }));
    expect(screen.getByRole("img", { name: "Video" })).toBeTruthy();
    const link = screen.getByRole("link", { name: "Langer Lernvortrag [DE]" });
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toContain("noreferrer");
    expect(link.parentElement?.textContent).toBe(
      "Langer Lernvortrag [DE] 96:14 · Lernabschnitt: 10:00–52:36",
    );
    expect(link.parentElement?.textContent).toContain(
      "Lernabschnitt: 10:00–52:36",
    );
    expect(
      document.querySelector("iframe, video, img[src], script[src*='youtube']"),
    ).toBeNull();
  });
  it("shows active paths before the list and visible versus total topic counts", () => {
    render(<TopicBrowser />);
    expect(screen.getByText("49 Themen")).toBeTruthy();
    expect(screen.queryByText("LERNTHEMEN")).toBeNull();
    fireEvent.click(
      screen.getByRole("button", {
        name: `Lernpfade von ${topicTitle("human-ai-responsibility")} filtern`,
      }),
    );
    expect(screen.getByText("10 / 49 Themen")).toBeTruthy();
    const summary = screen.getByRole("region", { name: "Aktive Lernpfade" });
    const list = screen.getByRole("navigation", { name: "Themen" });
    expect(
      summary.compareDocumentPosition(list) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Filter aufheben" }));
    expect(screen.getByText("49 Themen")).toBeTruthy();
    expect(summary.isConnected).toBe(false);
  });

  it("shows every matching path without a fixed path limit", () => {
    const item = topics.items[0];
    const paths = Array.from({ length: 12 }, (_, index) => ({
      name: `Lernpfad ${index + 1}`,
      topicIds: [item.id],
    }));
    render(<TopicBrowser items={[item]} paths={paths} />);
    fireEvent.click(
      screen.getByRole("button", {
        name: `Lernpfade von ${item.title} filtern`,
      }),
    );
    expect(
      screen.getAllByRole("button", { name: /^Lernpfad \d+$/ }),
    ).toHaveLength(12);
    expect(screen.getByText("1 / 1 Themen")).toBeTruthy();
  });

  it("shows the guidance before selection and opens help from the list", () => {
    render(<TopicBrowser />);
    expect(
      screen.getByRole("region", { name: "Hilfe zu Themen" }),
    ).toBeTruthy();
    for (const text of [
      "filtert nach allen Lernpfaden mit diesem Thema",
      "Aktive Lernpfade stehen über der Themenliste",
      "Klick auf einen Lernpfad filtert auf diesen einen Lernpfad",
      "startet einen Lerncheck",
      "Thema gelernt",
    ]) {
      expect(screen.getByText(text)).toBeTruthy();
    }
    expect(
      document.querySelectorAll(".topic-help-content li svg"),
    ).toHaveLength(2);
    fireEvent.click(screen.getByRole("button", { name: "Hilfe öffnen" }));
    expect(
      screen.getByRole("button", { name: "Zur Themenliste" }),
    ).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Zur Themenliste" }));
    fireEvent.click(
      screen.getByRole("button", {
        name: topicTitle("human-ai-responsibility"),
      }),
    );
    expect(
      screen.getByRole("article", {
        name: topicTitle("human-ai-responsibility"),
      }),
    ).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Hilfe öffnen" })).toBeNull();
  });

  it("shows the descriptive foundation path name in the filter summary", () => {
    render(<TopicBrowser />);
    fireEvent.click(
      screen.getByRole("button", {
        name: `Lernpfade von ${topicTitle("spec-driven-development-openspec")} filtern`,
      }),
    );
    expect(filterSummary()).toBe(
      `Gefiltert nach: ${pathName(0)}, ${pathName(6)}, ${pathName(8)}`,
    );
  });

  it("marks only saved topics with learning checks as learned, including after a topics change", () => {
    const quizTopic = topics.items[0];
    const plainTopic = {
      ...quizTopic,
      id: "temporarily-without-learning-check",
    };
    render(
      <TopicBrowser
        items={[plainTopic, quizTopic]}
        learnedTopicIds={[quizTopic.id, plainTopic.id, "temporarily-missing"]}
        availableLearningCheckTopicIds={[quizTopic.id]}
      />,
    );
    const rows = screen.getAllByRole("listitem");
    expect(rows[0].textContent).not.toContain("✓");
    expect(rows[1].textContent).toContain("✓");
    expect(rows[1].textContent).not.toContain("Gelernt");
    expect(screen.getByRole("img", { name: "Gelernt" })).toBeTruthy();
  });

  it("shows an accessible icon button for each available learning check", () => {
    const topicsWithLearningCheck = topics.items.slice(0, 16);
    render(
      <TopicBrowser
        availableLearningCheckTopicIds={topicsWithLearningCheck.map(
          (item) => item.id,
        )}
        onStartLearningCheck={() => {}}
      />,
    );

    expect(topicsWithLearningCheck).toHaveLength(16);
    for (const item of topicsWithLearningCheck) {
      const label = `Lerncheck starten: ${item.title}`;
      const button = screen.getByRole("button", { name: label });
      expect(button.getAttribute("title")).toBe(label);
      expect(button.textContent).toBe("");
      expect(button.querySelector("svg[aria-hidden='true']")).toBeTruthy();
    }
  });

  it("shows all published topics in one semantic text overview", () => {
    render(<TopicBrowser />);

    expect(screen.getByRole("navigation", { name: "Themen" })).toBeTruthy();
    expect(
      screen.getByRole("navigation", { name: "Themen" }).querySelectorAll("li"),
    ).toHaveLength(49);
    expect(
      screen.getByRole("button", {
        name: topicTitle("human-ai-responsibility"),
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: topicTitle("spec-driven-development-openspec"),
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: topicTitle("playwright-for-web-flows"),
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: topicTitle("coding-agent-context-and-trust-boundaries"),
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: topicTitle("protect-secrets-and-sensitive-data-with-ai"),
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: topicTitle("review-and-accept-ai-generated-changes"),
      }),
    ).toBeTruthy();
  });

  it("filters by current paths and closes details that leave the list without reopening them", () => {
    const items = topics.items.slice(0, 4).map((item, index) => ({
      ...item,
      id: `test-${index}`,
      title: `Thema ${index}`,
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
      screen.getByRole("navigation", { name: "Themen" }).textContent,
    ).not.toContain("Thema 3");
    expect(screen.queryByRole("article", { name: "Thema 3" })).toBeNull();
    expect(filterSummary()).toBe("Gefiltert nach: Früher, Später");
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
    expect(filterSummary()).toBe("Gefiltert nach: Später");
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
    expect(filterSummary()).toBe("Gefiltert nach: Kurz, Lang früh, Lang spät");
    expect(
      screen
        .getAllByRole("button", { name: /^Geändert \d$/ })
        .map((button) => button.textContent),
    ).toEqual(["Geändert 0", "Geändert 1", "Geändert 2"]);
  });

  it.each([
    [
      topicTitle("coding-agent-context-and-trust-boundaries"),
      sourceTitle("web-security-baseline", 5),
    ],
    [
      topicTitle("protect-secrets-and-sensitive-data-with-ai"),
      sourceTitle("protect-secrets-and-sensitive-data-with-ai", 0),
    ],
    [
      topicTitle("review-and-accept-ai-generated-changes"),
      sourceTitle("review-and-accept-ai-generated-changes", 0),
    ],
  ])(
    "shows the topic %s with content, metadata, and sources",
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

  it("keeps selection, search, paths and learning checks when switching to everyday anchors", () => {
    const topic = topics.items[0];
    const calls: string[] = [];
    render(
      <TopicBrowser
        items={topics.items.slice(0, 2)}
        paths={[
          {
            name: "Gemeinsamer Pfad",
            topicIds: topics.items.slice(0, 2).map((item) => item.id),
          },
        ]}
        availableLearningCheckTopicIds={[topic.id]}
        learnedTopicIds={[topic.id]}
        onStartLearningCheck={(id, title) => calls.push(id, title)}
      />,
    );
    const titles = screen.getByRole("button", { name: "Themen" });
    const anchors = screen.getByRole("button", {
      name: "Kommt mir bekannt vor",
    });
    expect(titles.getAttribute("aria-pressed")).toBe("true");
    expect(anchors.getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(screen.getByRole("button", { name: topic.title }));
    fireEvent.click(
      screen.getByRole("button", {
        name: `Lernpfade von ${topic.title} filtern`,
      }),
    );
    const input = screen.getByRole("textbox", { name: "Schnellfilter" });
    fireEvent.change(input, { target: { value: topic.title } });
    fireEvent.click(anchors);
    expect(titles.getAttribute("aria-pressed")).toBe("false");
    expect(anchors.getAttribute("aria-pressed")).toBe("true");
    const row = screen.getByRole("button", {
      name: topic.everydayAnchor,
    });
    expect(row.getAttribute("aria-pressed")).toBe("true");
    expect((input as HTMLInputElement).value).toBe(topic.title);
    expect(filterSummary()).toBe("Gefiltert nach: Gemeinsamer Pfad");
    expect(
      screen.getByRole("navigation", { name: "Themen" }).querySelectorAll("li"),
    ).toHaveLength(1);
    expect(screen.getByRole("article", { name: topic.title })).toBeTruthy();
    expect(screen.getByRole("img", { name: "Gelernt" })).toBeTruthy();
    fireEvent.click(
      screen.getByRole("button", { name: `Lerncheck starten: ${topic.title}` }),
    );
    expect(calls).toEqual([topic.id, topic.title]);
    fireEvent.click(titles);
    expect(
      screen
        .getByRole("button", { name: topic.title })
        .getAttribute("aria-pressed"),
    ).toBe("true");
    cleanup();
    render(<TopicBrowser />);
    expect(
      screen
        .getByRole("button", { name: "Themen" })
        .getAttribute("aria-pressed"),
    ).toBe("true");
  });

  it("shows the complete topic after a user selects it", () => {
    render(<TopicBrowser />);

    const topic = screen.getByRole("button", {
      name: topicTitle("human-ai-responsibility"),
    });
    fireEvent.click(topic);

    expect(topic.getAttribute("aria-pressed")).toBe("true");
    expect(
      screen.getByRole("article", {
        name: topicTitle("human-ai-responsibility"),
      }),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Problem" })).toBeTruthy();
    const article = screen.getByRole("article");
    const note = screen.getByRole("note", { name: "Kommt mir bekannt vor" });
    expect(note.textContent).toContain(topics.items[0].everydayAnchor);
    const blocks = Array.from(article.children);
    expect(blocks.indexOf(note)).toBe(
      blocks.indexOf(
        screen.getByRole("heading", {
          name: topicTitle("human-ai-responsibility"),
        }),
      ) + 1,
    );
    expect(note.nextElementSibling?.textContent).toContain("Problem");
    expect(
      screen.getByText(
        "KI-Ausgaben können plausibel wirken, obwohl die KI falsche Annahmen über den Kontext getroffen hat oder Risiken und Folgen falsch eingeschätzt hat.",
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
        name: sourceTitle("human-ai-responsibility", 0),
      }),
    ).toBeNull();

    fireEvent.click(
      screen.getByRole("button", {
        name: topicTitle("human-ai-responsibility"),
      }),
    );

    expect(screen.getByText("Veröffentlicht")).toBeTruthy();
    expect(screen.getByText("2026-09-20")).toBeTruthy();
    expect(screen.getByText("Fachlich geprüft")).toBeTruthy();
    expect(screen.getByText("Wiedervorlage")).toBeTruthy();
    expect(screen.getByText("Status")).toBeTruthy();
    const article = screen.getByRole("article", {
      name: topicTitle("human-ai-responsibility"),
    });
    expect(
      Array.from(article.querySelectorAll("section > h3"))
        .map((heading) => heading.textContent)
        .slice(-2),
    ).toEqual(["Quellen", "Redaktionelle Metadaten"]);

    const source = screen.getByRole("link", {
      name: sourceTitle("human-ai-responsibility", 0),
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
      screen.getByRole("button", {
        name: topicTitle("tdd-for-domain-behavior"),
      }),
    );
    expect(screen.getByRole("heading", { name: "Primärquellen" })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Sekundärquellen" }),
    ).toBeTruthy();
    expect(
      screen
        .getAllByRole("link")
        .map((link) => link.textContent)
        .slice(0, 3),
    ).toEqual([
      sourceTitle("tdd-for-domain-behavior", 0),
      sourceTitle("tdd-for-domain-behavior", 1),
      sourceTitle("tdd-for-domain-behavior", 2) + " [DE]",
    ]);
    cleanup();
    const item = topics.items[0];
    render(
      <TopicBrowser
        items={[
          {
            ...item,
            sources: item.sources.filter(
              (source) => source.origin === "primary",
            ),
          },
        ]}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: item.title }));
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

  it("marks only audio sources and shows duration after the linked title", () => {
    const item = topics.items[0];
    render(
      <TopicBrowser
        items={[
          {
            ...item,
            sources: [
              { ...item.sources[0], mediaType: "text" },
              {
                ...item.sources[0],
                title: "Podcast mit Laufzeit",
                url: "https://example.test/audio-1",
                origin: "secondary",
                language: "de",
                mediaType: "audio",
                duration: "1:37:13",
              },
              {
                ...item.sources[0],
                title: "Podcast ohne Laufzeit",
                url: "https://example.test/audio-2",
                origin: "secondary",
                mediaType: "audio",
              },
            ],
          },
        ]}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: item.title }));
    const textSource = screen.getByRole("link", {
      name: sourceTitle("human-ai-responsibility", 0),
    });
    expect(textSource.parentElement?.textContent).toBe(
      sourceTitle("human-ai-responsibility", 0),
    );
    const timedSource = screen.getByRole("link", {
      name: "Podcast mit Laufzeit [DE]",
    });
    expect(timedSource.parentElement?.textContent).toBe(
      "Podcast mit Laufzeit [DE] 1:37:13",
    );
    expect(
      timedSource.parentElement?.querySelector("svg[aria-label='Audio']"),
    ).toBeTruthy();
    const untimedSource = screen.getByRole("link", {
      name: "Podcast ohne Laufzeit",
    });
    expect(untimedSource.parentElement?.textContent).toBe(
      "Podcast ohne Laufzeit",
    );
    expect(
      untimedSource.parentElement?.querySelector("svg[aria-label='Audio']"),
    ).toBeTruthy();
  });
});

function topicTitle(id: string) {
  return topics.items.find((item) => item.id === id)!.title;
}
function sourceTitle(id: string, index: number) {
  return topics.items.find((item) => item.id === id)!.sources[index].title;
}
function pathName(index: number) {
  return topics.paths![index].name;
}

const fields = [
  "title",
  "everydayAnchor",
  "problem",
  "coreConcept",
  "javaWebUse",
  "boundary",
] as const;
const items = fields.map((field, index) => ({
  ...topics.items[0],
  id: `search-${index}`,
  title: field === "title" ? "KONZEPT DER Suche" : `Thema ${index}`,
  everydayAnchor:
    field === "everydayAnchor"
      ? "KONZEPT DER Suche"
      : "Mein Agent hat sich verrannt.",
  content: {
    ...topics.items[0].content,
    problem: field === "problem" ? "KONZEPT DER Suche" : "Problem",
    coreConcept: field === "coreConcept" ? "KONZEPT DER Suche" : "Konzept",
    javaWebUse: field === "javaWebUse" ? "KONZEPT DER Suche" : "Anwendung",
    boundary: field === "boundary" ? "KONZEPT DER Suche" : "Grenzen",
  },
}));

function search(value: string) {
  fireEvent.change(screen.getByRole("textbox", { name: "Schnellfilter" }), {
    target: { value },
  });
}

function visibleTitles() {
  return Array.from(
    screen.getByRole("navigation", { name: "Themen" }).querySelectorAll("li"),
  ).map((row) => row.textContent);
}

describe("Schnellfilter", () => {
  it("clears only text with Escape in the field, preserving the path and focus", () => {
    render(
      <TopicBrowser
        items={items}
        paths={[{ name: "Suchpfad", topicIds: [items[0].id, items[1].id] }]}
      />,
    );
    fireEvent.click(
      screen.getByRole("button", {
        name: `Lernpfade von ${items[0].title} filtern`,
      }),
    );
    search("Thema 1");
    const input = screen.getByRole("textbox", {
      name: "Schnellfilter",
    }) as HTMLInputElement;
    input.focus();
    fireEvent.keyDown(input, { key: "Enter" });
    expect(input.value).toBe("Thema 1");
    fireEvent.keyDown(input, { key: "Escape" });
    expect(input.value).toBe("");
    expect(document.activeElement).toBe(input);
    expect(visibleTitles()).toEqual(
      items.slice(0, 2).map((item) => item.title),
    );
    expect(
      screen.getByRole("region", { name: "Aktive Lernpfade" }),
    ).toBeTruthy();
    fireEvent.keyDown(input, { key: "Escape" });
    expect(visibleTitles()).toHaveLength(2);
    search("Thema 1");
    const topic = screen.getByRole("button", { name: "Thema 1" });
    topic.focus();
    fireEvent.keyDown(topic, { key: "Escape" });
    expect(input.value).toBe("Thema 1");
  });

  it("matches literal case-insensitive substrings in every field in both list views", () => {
    for (const field of fields) {
      for (const view of ["Themen", "Kommt mir bekannt vor"]) {
        render(
          <TopicBrowser items={[items[fields.indexOf(field)]]} paths={[]} />,
        );
        fireEvent.click(screen.getByRole("button", { name: view }));
        const dataset = `${field} / ${view}`;
        search("zept d");
        expect.soft(visibleTitles(), dataset).toHaveLength(1);
        search("zept der Suche!");
        expect.soft(visibleTitles(), dataset).toEqual([]);
        expect
          .soft(screen.queryByText("Keine Themen gefunden."), dataset)
          .toBeTruthy();
        search("zept der");
        expect.soft(visibleTitles(), dataset).toHaveLength(1);
        search("");
        expect.soft(visibleTitles(), dataset).toHaveLength(1);
        expect
          .soft(
            screen.queryByRole("button", { name: "Filter aufheben" }),
            dataset,
          )
          .toBeNull();
        cleanup();
      }
    }
  });

  it("uses the complete literal text within one field and excludes sources and metadata", () => {
    render(<TopicBrowser items={items} paths={[]} />);
    search("zept d");
    expect(visibleTitles()).toEqual(items.map((item) => item.title));
    for (const query of [
      "Konzept Suche",
      "Problem Konzept",
      " Suche ",
      items[0].sources[0].url,
      items[0].sources[0].title,
      items[0].editorial.reviewedAt,
      items[0].id,
    ]) {
      search(query);
      expect(visibleTitles()).toEqual([]);
    }
  });

  it("intersects with path filters and clears both even with no results", () => {
    const paths = [{ name: "Suchpfad", topicIds: [items[0].id, items[1].id] }];
    render(<TopicBrowser items={items} paths={paths} />);
    search("zept d");
    fireEvent.click(
      screen.getByRole("button", {
        name: `Lernpfade von ${items[0].title} filtern`,
      }),
    );
    expect(visibleTitles()).toEqual(
      items.slice(0, 2).map((item) => item.title),
    );
    fireEvent.click(screen.getByRole("button", { name: "Suchpfad" }));
    search("Thema 4");
    expect(visibleTitles()).toEqual([]);
    search("");
    expect(visibleTitles()).toHaveLength(2);
    search("unauffindbar");
    expect(
      screen.getAllByRole("button", { name: "Filter aufheben" }),
    ).toHaveLength(1);
    fireEvent.click(screen.getByRole("button", { name: "Filter aufheben" }));
    expect(
      (
        screen.getByRole("textbox", {
          name: "Schnellfilter",
        }) as HTMLInputElement
      ).value,
    ).toBe("");
    expect(visibleTitles()).toEqual(items.map((item) => item.title));
    expect(
      screen.queryByRole("region", { name: "Aktive Lernpfade" }),
    ).toBeNull();
  });

  it("keeps matching details, replaces excluded details with help, and does not reopen them", () => {
    render(<TopicBrowser items={items} paths={[]} />);
    fireEvent.click(screen.getByRole("button", { name: "Thema 1" }));
    search("zept d");
    expect(screen.getByRole("article", { name: "Thema 1" })).toBeTruthy();
    search("Thema 4");
    expect(screen.queryByRole("article")).toBeNull();
    expect(
      screen.getByRole("region", { name: "Hilfe zu Themen" }),
    ).toBeTruthy();
    search("");
    expect(screen.queryByRole("article")).toBeNull();
  });
});

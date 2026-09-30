import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { TopicBrowser } from "../../../src/verticals/topics/TopicBrowser";
import { topics } from "../../../src/verticals/topics/topics";

afterEach(cleanup);

const fields = [
  "title",
  "problem",
  "coreConcept",
  "javaWebUse",
  "boundary",
] as const;
const items = fields.map((field, index) => ({
  ...topics.items[0],
  id: `search-${index}`,
  title: field === "title" ? "KONZEPT DER Suche" : `Thema ${index}`,
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
    screen
      .getByRole("navigation", { name: "Lernthemen" })
      .querySelectorAll("li"),
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

  it.each(fields)("matches a case-insensitive substring in %s", (field) => {
    render(<TopicBrowser items={[items[fields.indexOf(field)]]} paths={[]} />);
    search("zept d");
    expect(visibleTitles()).toHaveLength(1);
    search("zept der Suche!");
    expect(visibleTitles()).toEqual([]);
    expect(screen.getByText("Keine Themen gefunden.")).toBeTruthy();
    search("zept der");
    expect(visibleTitles()).toHaveLength(1);
    search("");
    expect(visibleTitles()).toHaveLength(1);
    expect(
      screen.queryByRole("button", { name: "Filter aufheben" }),
    ).toBeNull();
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

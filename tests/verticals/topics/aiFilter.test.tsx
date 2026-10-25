import {
  act,
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { TopicBrowser } from "../../../src/verticals/topics/TopicBrowser";
import { useSemanticFilter } from "../../../src/verticals/topics/useSemanticFilter";
import { topics } from "../../../src/verticals/topics/topics";

const service = vi.hoisted(() => ({ search: vi.fn(), dispose: vi.fn() }));
vi.mock("../../../src/verticals/topics/semanticSearchClient", () => ({
  createSemanticSearchClient: () => service,
}));

afterEach(cleanup);

it("combines AI, quick and path filters, restores the draft and clears all filters together", async () => {
  localStorage.setItem("lernluchs.topic-list-view.v1", "topics");
  localStorage.removeItem("lernluchs.learning-path-filter.v1");
  const items = topics.items.slice(0, 3);
  service.search.mockResolvedValue([items[0].id, items[1].id]);
  render(
    <TopicBrowser
      items={items}
      paths={[
        { name: "Erster Pfad", topicIds: [items[0].id] },
        { name: "Zweiter Pfad", topicIds: [items[2].id] },
      ]}
      supplementaryViews={{ help: <p>Hilfe</p>, imprint: <p>Impressum</p> }}
    />,
  );
  fireEvent.click(screen.getByRole("button", { name: items[2].title }));
  fireEvent.click(screen.getByRole("button", { name: "Suche mit KI" }));
  const query = "Frage <script>bleibt Text</script>\nzweite Zeile";
  const input = screen.getByRole("textbox", {
    name: "Deine Frage oder Stichwörter",
  });
  fireEvent.change(input, { target: { value: query } });
  fireEvent.keyDown(input, { key: "Enter", shiftKey: true });
  expect(screen.getByRole("dialog")).toBeTruthy();
  await act(async () => fireEvent.keyDown(input, { key: "Enter" }));
  const list = screen.getByRole("navigation", { name: "Themen" });
  expect(list.querySelectorAll("li").length).toBe(2);
  expect(screen.queryByRole("article")).toBeNull();
  expect(document.querySelector(".ai-filter-query")?.textContent).toBe(query);
  expect(document.querySelector(".ai-filter-query script")).toBeNull();
  fireEvent.change(screen.getByRole("textbox", { name: "Schnellfilter" }), {
    target: { value: items[0].title },
  });
  expect(list.querySelectorAll("li").length).toBe(1);
  fireEvent.change(screen.getByRole("textbox", { name: "Schnellfilter" }), {
    target: { value: "" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Lernpfade" }));
  fireEvent.click(screen.getByRole("checkbox", { name: "Erster Pfad" }));
  expect(list.querySelectorAll("li").length).toBe(1);
  fireEvent.click(screen.getByRole("button", { name: "Suche mit KI" }));
  expect(
    (
      screen.getByRole("textbox", {
        name: "Deine Frage oder Stichwörter",
      }) as HTMLTextAreaElement
    ).value,
  ).toBe(query);
  expect(screen.queryByRole("checkbox", { name: "Zweiter Pfad" })).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Zurücksetzen" }));
  await act(async () =>
    fireEvent.click(screen.getByRole("button", { name: "Schließen" })),
  );
  expect(document.querySelector(".ai-filter-query")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Filter aufheben" }));
  expect(list.querySelectorAll("li").length).toBe(3);
  localStorage.clear();
});

it("ignores late results after reset or replacement and keeps errors retryable", async () => {
  const pending: ((ids: string[]) => void)[] = [];
  const search = vi.fn(
    () => new Promise<string[]>((resolve) => pending.push(resolve)),
  );
  const client = { search, dispose: vi.fn() };
  const { result } = renderHook(() => useSemanticFilter(() => client));
  act(() => result.current.apply("erste Frage"));
  expect(result.current.state.status).toBe("loading");
  act(() => result.current.clear());
  await act(async () => pending[0](["late-result"]));
  expect(result.current.state.status).toBe("idle");
  act(() => result.current.apply("zweite Frage"));
  act(() => result.current.apply("dritte Frage"));
  await act(async () => pending[1](["obsolete"]));
  expect(result.current.state.status).toBe("loading");
  await act(async () => pending[2](["current"]));
  expect(result.current.state).toEqual({
    status: "ready",
    query: "dritte Frage",
    ids: ["current"],
  });
  search.mockRejectedValueOnce(new Error("synthetic unavailable model"));
  await act(async () => result.current.apply("Fehlerfall"));
  expect(result.current.state).toEqual({
    status: "error",
    query: "Fehlerfall",
  });
  expect(client.dispose).toHaveBeenCalled();
});

it("opens a focused AI editor before learning paths without a path count", () => {
  render(
    <TopicBrowser
      supplementaryViews={{ help: <p>Hilfe</p>, imprint: <p>Impressum</p> }}
    />,
  );
  fireEvent.click(screen.getByRole("button", { name: "Suche mit KI" }));
  const input = screen.getByRole("textbox", {
    name: "Deine Frage oder Stichwörter",
  });
  expect(document.activeElement).toBe(input);
  expect(input.tagName).toBe("TEXTAREA");
  expect(screen.getByText(/Umschalt\+Enter/)).toBeTruthy();
  fireEvent.change(input, { target: { value: "Entwurf" } });
  fireEvent.click(screen.getByRole("button", { name: "Zurücksetzen" }));
  expect((input as HTMLTextAreaElement).value).toBe("");
  fireEvent.keyDown(input, { key: "Escape" });
  expect(
    screen.queryByRole("textbox", { name: "Deine Frage oder Stichwörter" }),
  ).toBeNull();
  expect(document.activeElement).toBe(
    screen.getByRole("button", { name: "Suche mit KI" }),
  );
});

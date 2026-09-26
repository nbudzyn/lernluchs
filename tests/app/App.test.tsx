import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { App } from "../../src/app/App";

afterEach(cleanup);

describe("App", () => {
  it("composes the public foundation topic overview", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Lernluchs" })).toBeTruthy();
    expect(screen.getByRole("navigation", { name: "Lernthemen" })).toBeTruthy();
  });

  it("starts a check from the list without opening the card and returns after cancellation", () => {
    render(<App />);
    expect(screen.queryByRole("article")).toBeNull();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Fragen starten: Mensch und KI: Verantwortung bleibt menschlich",
      }),
    );
    expect(screen.getByText("Frage 1 von 5")).toBeTruthy();
    expect(screen.queryByRole("article")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Abbrechen" }));
    expect(screen.getByRole("navigation", { name: "Lernthemen" })).toBeTruthy();
    expect(screen.queryByText("Frage 1 von 5")).toBeNull();
  });
});

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { App } from "../../src/app/App";

afterEach(cleanup);

describe("App", () => {
  it("composes the public foundation topic overview", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Lernluchs KI – Themen" }),
    ).toBeTruthy();
    expect(screen.getByRole("navigation", { name: "Themen" })).toBeTruthy();
  });

  it("starts a check from the list without opening the topic and returns after cancellation", () => {
    render(<App />);
    expect(screen.queryByRole("article")).toBeNull();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Lerncheck starten: Mensch und KI: Verantwortung bleibt menschlich",
      }),
    );
    expect(
      screen.getByRole("heading", { name: /^Lernluchs KI$/ }),
    ).toBeTruthy();
    expect(screen.getByText("Frage 1 von 5")).toBeTruthy();
    expect(screen.queryByRole("article")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Abbrechen" }));
    expect(screen.getByRole("navigation", { name: "Themen" })).toBeTruthy();
    expect(screen.queryByText("Frage 1 von 5")).toBeNull();
  });

  it("keeps an independently selected topic and path filter through a check", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Themen" }));
    fireEvent.click(
      screen.getByRole("button", {
        name: "Mensch und KI: Verantwortung bleibt menschlich",
      }),
    );
    fireEvent.click(
      screen.getByRole("button", {
        name: "Lernpfade von Mensch und KI: Verantwortung bleibt menschlich filtern",
      }),
    );
    fireEvent.click(
      screen.getByRole("button", {
        name: "Lerncheck starten: Spec-Driven Development mit OpenSpec, Spec Kit und Kiro",
      }),
    );
    expect(screen.getByText("Frage 1 von 5")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Abbrechen" }));
    expect(
      screen.getByRole("article", {
        name: "Mensch und KI: Verantwortung bleibt menschlich",
      }),
    ).toBeTruthy();
    expect(
      screen
        .getByRole("button", {
          name: "Lernpfade von Mensch und KI: Verantwortung bleibt menschlich filtern",
        })
        .getAttribute("aria-pressed"),
    ).toBe("true");
  });
});

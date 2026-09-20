import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { CatalogBrowser } from "../src/verticals/catalog/CatalogBrowser";

afterEach(cleanup);

describe("CatalogBrowser", () => {
  it("shows all six foundation topics in a semantic text overview", () => {
    render(<CatalogBrowser />);

    expect(
      screen.getByRole("navigation", { name: "Grundlagen-Themen" }),
    ).toBeTruthy();
    expect(screen.getAllByRole("button")).toHaveLength(6);
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
  });

  it("shows the complete learning card after a user selects a topic", () => {
    render(<CatalogBrowser />);

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
    render(<CatalogBrowser />);

    expect(
      screen.queryByRole("link", {
        name: "NIST AI Risk Management Framework 1.0",
      }),
    ).toBeNull();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Mensch und KI: Verantwortung bleibt menschlich",
      }),
    );

    expect(screen.getByText("Veröffentlicht")).toBeTruthy();
    expect(screen.getAllByText("2026-09-20")).toHaveLength(2);
    expect(screen.getByText("Fachlich geprüft")).toBeTruthy();
    expect(screen.getByText("Wiedervorlage")).toBeTruthy();
    expect(screen.getByText("Inhaltsversion")).toBeTruthy();
    expect(screen.getByText("Status")).toBeTruthy();

    const source = screen.getByRole("link", {
      name: "NIST AI Risk Management Framework 1.0",
    });
    expect(source.getAttribute("href")).toBe(
      "https://doi.org/10.6028/NIST.AI.100-1",
    );
    expect(source.getAttribute("target")).toBe("_blank");
    expect(source.getAttribute("rel")).toBe("noreferrer");
  });
});

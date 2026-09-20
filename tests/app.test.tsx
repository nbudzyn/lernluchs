import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "../src/app/App";

describe("App", () => {
  it("shows the Lernluchs foundation without learning content", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Lernluchs" })).toBeTruthy();
    expect(screen.getByText("Architekturgrundlage")).toBeTruthy();
    expect(screen.queryByText(/Lernkarte|Frage|Landkarte/i)).toBeNull();
  });
});

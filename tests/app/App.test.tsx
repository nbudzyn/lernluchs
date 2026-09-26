import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "../../src/app/App";

describe("App", () => {
  it("composes the public foundation topic overview", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Lernluchs" })).toBeTruthy();
    expect(
      screen.getByRole("navigation", { name: "Lernthemen" }),
    ).toBeTruthy();
  });
});

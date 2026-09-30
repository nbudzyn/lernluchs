import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";

import { TopicHelp } from "../../../src/verticals/help";

afterEach(cleanup);

it("renders its guidance without topic data or callbacks", () => {
  render(<TopicHelp />);
  const help = screen.getByRole("region", { name: "Hilfe zu Themen" });
  expect(help).toBeTruthy();
  expect(screen.getByRole("heading", { name: "Hilfe" })).toBeTruthy();
  expect(help.querySelector("li")?.textContent).toBe(
    "Klick auf ein Thema öffnet das Thema",
  );
  for (const text of [
    "filtert nach allen Lernpfaden mit diesem Thema",
    "Aktive Lernpfade stehen über der Themenliste",
    "Klick auf einen Lernpfad filtert auf diesen einen Lernpfad",
    "startet einen Test",
    "Test bestanden",
  ]) {
    expect(screen.getByText(text)).toBeTruthy();
  }
});

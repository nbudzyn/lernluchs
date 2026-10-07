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
    "startet einen Lerncheck",
    "Thema gelernt",
    "„Kommt mir bekannt vor“ zeigt Situationen aus deinem Alltag als Randnotiz beim Thema",
    "Über der Liste wechselst du zwischen Themen und „Kommt mir bekannt vor“",
    "Beim ersten Besuch ist „Kommt mir bekannt vor“ ausgewählt. Dein Browser merkt sich deine letzte Auswahl.",
    "Der Schnellfilter durchsucht auch die Texte unter „Kommt mir bekannt vor“ in beiden Ansichten",
  ]) {
    expect(screen.getByText(text)).toBeTruthy();
  }
});

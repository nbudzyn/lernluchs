import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";

import { Imprint } from "../../../src/verticals/imprint";

afterEach(cleanup);

it("renders the agreed author and project notices without additional personal details", () => {
  render(<Imprint />);
  const imprint = screen.getByRole("region", { name: "Impressum" });
  expect(
    within(imprint).getByRole("heading", { name: "Impressum" }),
  ).toBeTruthy();
  // Deliberate binding to the approved text proposal.
  expect(
    Array.from(imprint.querySelectorAll("li"), (row) => row.textContent),
  ).toEqual([
    "Autor: N. Budzyn",
    "Studienprojekt zur persönlichen Fortbildung.",
    "Inhalte mithilfe von KI erstellt. Fehler sind möglich; bitte prüfe wichtige Angaben anhand der verlinkten Quellen.",
    "Für die Inhalte verlinkter Websites sind deren jeweilige Anbieter verantwortlich. Gesetzliche Verantwortlichkeiten bleiben unberührt.",
  ]);
});

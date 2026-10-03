/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

import glossary from "../../../docs/product/glossary.md?raw";

describe("topic glossary", () => {
  it("defines the agreed German and English terms without using their synonyms", () => {
    for (const [heading, english] of [
      ["Frage", "Question"],
      ["Antwortoption", "Answer option"],
      ["Fragenpool", "Question pool"],
      ["Fragenpools", "Question pools"],
      ["Themen", "Topics"],
      ["Thema", "Topic"],
      ["Lernpfad", "Learning path"],
      ["Primärquelle", "Primary source"],
      ["Sekundärquelle", "Secondary source"],
      ["Lerncheck", "Learning check"],
      ["Lernchecks", "Learning checks"],
      ["Lernstand", "Learning state"],
      ["Landkarte", "Topic map"],
      ["Bestanden", "Passed"],
      ["Gelernt", "Learned"],
      ["Kompetenzprofil", "Competency profile"],
      ["Vertikale", "Vertical"],
    ]) {
      const entry = glossary.split(`## ${heading}\n`)[1]?.split(/\n## /)[0];
      expect
        .soft(glossary.match(new RegExp(`^## ${heading}$`, "gm")), heading)
        .toEqual([`## ${heading}`]);
      expect
        .soft(entry?.match(/^\*\*Englisch:\*\* .+$/gm), heading)
        .toEqual([`**Englisch:** ${english}`]);
    }
    const definitions = glossary.replace(/^\*\*Nicht verwenden:\*\*.*$/gm, "");
    expect(
      definitions.match(
        /Auswahlfrage|Auswahlcheck|Lernfortschritt|Learning progress|Katalog|Lernkarte|Lernthema/g,
      ),
    ).toBeNull();
  });
});

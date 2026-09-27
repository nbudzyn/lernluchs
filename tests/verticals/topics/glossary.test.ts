/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

import glossary from "../../../docs/product/glossary.md?raw";

describe("topic glossary", () => {
  it.each([
    ["Fragenpool", "Question pool"],
    ["Themen", "Topics"],
    ["Thema", "Topic"],
    ["Lernpfad", "Learning path"],
    ["Primärquelle", "Primary source"],
    ["Sekundärquelle", "Secondary source"],
  ])("defines exactly one English term for %s", (heading, english) => {
    const entry = glossary.split(`## ${heading}\n`)[1]?.split(/\n## /)[0];
    expect(entry).toBeDefined();
    expect(entry?.match(/^\*\*Englisch:\*\* .+$/gm)).toEqual([
      `**Englisch:** ${english}`,
    ]);
  });
});

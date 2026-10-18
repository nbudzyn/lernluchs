import { expect, it, vi } from "vitest";

import { narrowViewportQuery } from "../../../src/verticals/topics/useNarrowViewport";

it("keeps the TypeScript breakpoint coupled to both CSS layout boundaries", async () => {
  // Vitest omits CSS imports; read the actual source without adding Node types
  // to the browser project's compilation environment.
  const { readFileSync } = await vi.importActual<{
    readFileSync: (path: string, encoding: "utf8") => string;
  }>("node:fs");
  const css = readFileSync("src/verticals/topics/TopicBrowser.css", "utf8");
  const maximum = Number(narrowViewportQuery.match(/\d+/)?.[0]);
  expect(css.includes(`@media (max-width: ${maximum}px)`)).toBe(true);
  expect(css.includes(`@media (min-width: ${maximum + 1}px)`)).toBe(true);
});

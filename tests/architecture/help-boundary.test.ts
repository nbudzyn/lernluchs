/// <reference types="vite/client" />
import { expect, it } from "vitest";

const topicFiles = import.meta.glob(
  "../../src/verticals/topics/**/*.{ts,tsx}",
  {
    query: "?raw",
    import: "default",
    eager: true,
  },
) as Record<string, string>;
const helpFiles = import.meta.glob("../../src/verticals/help/**/*.{ts,tsx}", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

it("connects topics to the public help entrypoint without a reverse import", () => {
  expect(Object.keys(helpFiles).length).toBeGreaterThan(0);
  const helpImports = Object.values(topicFiles).flatMap((contents) =>
    [...contents.matchAll(/from\s+["'](\.\.\/help[^"']*)["']/g)].map(
      (match) => match[1],
    ),
  );
  expect(helpImports).toEqual(["../help"]);
  for (const contents of Object.values(helpFiles)) {
    expect(contents).not.toMatch(/from\s+["']\.\.\//);
  }
});

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
const imprintFiles = import.meta.glob(
  "../../src/verticals/imprint/**/*.{ts,tsx}",
  {
    query: "?raw",
    import: "default",
    eager: true,
  },
) as Record<string, string>;

it("keeps supplementary views independent of topics", () => {
  for (const [vertical, files] of [
    ["help", helpFiles],
    ["imprint", imprintFiles],
  ] as const) {
    expect.soft(Object.keys(files).length, vertical).toBeGreaterThan(0);
    const imports = Object.values(topicFiles).flatMap((contents) =>
      [...contents.matchAll(/from\s+["']([^"']+)["']/g)]
        .map((match) => match[1])
        .filter((specifier) => specifier.startsWith(`../${vertical}`)),
    );
    expect.soft(imports, vertical).toEqual([]);
    for (const [path, contents] of Object.entries(files)) {
      expect.soft(contents, path).not.toMatch(/from\s+["']\.\.\//);
    }
  }
});

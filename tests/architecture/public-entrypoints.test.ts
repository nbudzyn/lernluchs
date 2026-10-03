/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

const appFiles = import.meta.glob("../../src/app/**/*.{ts,tsx}", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const legacyVerticalFiles = import.meta.glob(
  "../../src/verticals/catalog/**/*",
);

describe("public vertical entrypoints", () => {
  it("uses the topics vertical instead of the legacy directory", () => {
    expect(Object.keys(legacyVerticalFiles)).toEqual([]);
  });
  it("keeps app imports out of vertical internals", () => {
    const violations = Object.entries(appFiles).flatMap(([path, contents]) => {
      return [...contents.matchAll(/from\s+["']([^"']+)["']/g)]
        .map((match) => match[1])
        .filter((specifier) =>
          /verticals\/(topics|help|learning-checks|learning-state)\//.test(
            specifier,
          ),
        )
        .map((specifier) => `${path}: ${specifier}`);
    });
    expect(violations).toEqual([]);
  });
});

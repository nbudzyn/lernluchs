/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

const appFiles = import.meta.glob("../../src/app/**/*.{ts,tsx}", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

describe("public vertical entrypoints", () => {
  it("keeps app imports out of catalog and learning-check internals", () => {
    const violations = Object.entries(appFiles).flatMap(([path, contents]) => {
      return [...contents.matchAll(/from\s+["']([^"']+)["']/g)]
        .map((match) => match[1])
        .filter((specifier) =>
          /verticals\/(catalog|learning-checks)\//.test(specifier),
        )
        .map((specifier) => `${path}: ${specifier}`);
    });
    expect(violations).toEqual([]);
  });
});

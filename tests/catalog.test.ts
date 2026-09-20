import { describe, expect, it } from "vitest";

import { validateCatalog } from "../src/shared/catalog/validateCatalog";
import { catalog } from "../src/verticals/content-catalog/catalog";

describe("public content catalog", () => {
  it("accepts the initial empty catalog", () => {
    expect(validateCatalog(catalog)).toEqual({ valid: true, errors: [] });
  });

  it("rejects duplicate content IDs", () => {
    expect(
      validateCatalog({
        version: "1",
        items: [{ id: "duplicate" }, { id: "duplicate" }],
      }),
    ).toEqual({ valid: false, errors: ["Duplicate item ID: duplicate"] });
  });
});

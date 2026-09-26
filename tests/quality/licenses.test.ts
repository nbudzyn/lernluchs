import { describe, expect, it } from "vitest";

// The executable gate is JavaScript so Node can run it without a build step.
// @ts-expect-error No TypeScript declaration for the executable script.
import { checkLicenses } from "../../scripts/check-licenses.mjs";

const lock = (license: string | undefined, name = "example") => ({
  packages: {
    "": {},
    [`node_modules/${name}`]: { license, version: "1.33.0" },
  },
});

describe("license gate", () => {
  it.each([
    "GPL-3.0-only",
    "AGPL-3.0-only",
    "SSPL-1.0",
    "UNLICENSED",
    undefined,
  ])("rejects prohibited or unknown license %s", (license) =>
    expect(checkLicenses(lock(license))).not.toEqual([]),
  );
  it("requires individual review for LGPL and MPL", () => {
    expect(checkLicenses(lock("LGPL-3.0-only"))).not.toEqual([]);
    expect(checkLicenses(lock("MPL-2.0"))).not.toEqual([]);
    expect(checkLicenses(lock("MPL-2.0", "lightningcss"))).toEqual([]);
  });
  it("accepts known permissive licenses", () => {
    expect(checkLicenses(lock("MIT"))).toEqual([]);
  });
});

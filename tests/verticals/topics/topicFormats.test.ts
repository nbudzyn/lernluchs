import { expect, it } from "vitest";

import {
  isEditorialDate,
  parseDuration,
} from "../../../src/verticals/topics/topicFormats";

it("preserves accepted duration syntax including long minutes and rejects malformed input", () => {
  for (const [value, expected] of [
    ["0:00", 0],
    ["96:14", 5774],
    ["1:99:59", 9599],
    ["1:02:03", 3723],
    ["7:60", null],
    ["123:00", null],
    ["bad", null],
  ] as const) {
    expect.soft(parseDuration(value), value).toBe(expected);
  }
});

it("preserves editorial format validation without introducing calendar rules", () => {
  for (const [value, expected] of [
    ["2026-10-18", true],
    ["2026-99-99", true],
    ["2026-1-18", false],
    ["", false],
  ] as const) {
    expect.soft(isEditorialDate(value), value).toBe(expected);
  }
});

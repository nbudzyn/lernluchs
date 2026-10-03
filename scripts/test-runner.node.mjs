import assert from "node:assert/strict";
import { test } from "node:test";

import {
  parseArguments,
  summarizeResult,
  removeSuccessProgress,
} from "./test-runner.mjs";

const unitReport = {
  numTotalTests: 3,
  numPassedTests: 2,
  numFailedTests: 0,
  numPendingTests: 1,
  numTodoTests: 0,
  numFailedTestSuites: 0,
  success: true,
};

test("selects a unit vertical and forwards an individual test name", () => {
  const result = parseArguments([
    "unit",
    "--vertical",
    "topics",
    "--",
    "-t",
    "audio sources",
  ]);
  assert.equal(result.type, "unit");
  assert.deepEqual(result.args, [
    "tests/verticals/topics",
    "-t",
    "audio sources",
  ]);
});

test("selects E2E files, a project and a test name without a shell", () => {
  const result = parseArguments([
    "e2e",
    "e2e/verticals/topics/quick-filter.spec.ts",
    "--project=desktop-chromium",
    "--grep",
    "filters",
  ]);
  assert.deepEqual(result.args, [
    "e2e/verticals/topics/quick-filter.spec.ts",
    "--project=desktop-chromium",
    "--grep",
    "filters",
  ]);
  assert.deepEqual(parseArguments(["unit"]).args, []);
  assert.deepEqual(parseArguments(["e2e", "--vertical", "topics"]).args, [
    "e2e/verticals/topics",
  ]);
});

test("rejects unknown types, unsafe verticals and reporter/watch overrides", () => {
  for (const args of [
    [],
    ["other"],
    ["toString"],
    ["unit", "--vertical", "../app"],
    ["unit", "--vertical"],
    ["unit", "--reporter=json"],
    ["unit", "--watch"],
    ["e2e", "--list"],
    ["unit", "--outputFile=old.json"],
  ]) {
    assert.throws(() => parseArguments(args));
  }
});

test("reports passed and skipped tests separately in one successful line", () => {
  const result = summarizeResult("unit", unitReport, 0, 1250);
  assert.equal(result.exitCode, 0);
  assert.equal(result.showDetails, false);
  assert.match(
    result.summary,
    /^PASS Unit\/Komponenten: 2 bestanden, 1 übersprungen/,
  );
  assert.match(result.summary, /1,25 s; Exitcode 0$/);
});

test("never describes a completely skipped suite as passed", () => {
  const result = summarizeResult(
    "unit",
    {
      ...unitReport,
      numPassedTests: 0,
      numPendingTests: 3,
    },
    0,
    5,
  );
  assert.match(result.summary, /^SKIP /);
});

test("keeps a process failure even when the report contains only passing tests", () => {
  const result = summarizeResult("unit", unitReport, 7, 20);
  assert.equal(result.exitCode, 7);
  assert.equal(result.showDetails, true);
  assert.match(result.summary, /^FAIL /);
});

test("fails closed on absent, inconsistent or malformed successful reports", () => {
  for (const report of [
    null,
    {},
    { ...unitReport, numPassedTests: -1 },
    { ...unitReport, numTotalTests: 4 },
    { ...unitReport, numFailedTestSuites: 1 },
  ]) {
    const result = summarizeResult("unit", report, 0, 1);
    assert.equal(result.exitCode, 2);
    assert.equal(result.showDetails, true);
  }
  assert.equal(summarizeResult("unit", null, 1, 1).exitCode, 1);
});

test("shows E2E flaky attempts and global errors even with exitcode zero", () => {
  const report = {
    stats: { expected: 2, unexpected: 0, skipped: 1, flaky: 1 },
    errors: [],
  };
  const flaky = summarizeResult("e2e", report, 0, 4000);
  assert.equal(flaky.exitCode, 0);
  assert.equal(flaky.showDetails, true);
  assert.match(flaky.summary, /^WARN E2E:.*1 flaky/);
  const globalError = summarizeResult(
    "e2e",
    { ...report, errors: [{ message: "setup" }] },
    0,
    5,
  );
  assert.equal(globalError.exitCode, 2);
  assert.equal(globalError.showDetails, true);
});

test("keeps unhandled errors, console output, code frames and progress-like failure text", () => {
  const raw = [
    "Running 2 tests using 1 worker",
    "  ✓  1 [desktop] › passing.spec.ts:3:1 › passes (2ms)",
    "console diagnostic before failure",
    "  1) [desktop] › failing.spec.ts:8:1 › checks a value",
    "Expected: EXPECTED_SENTINEL",
    "Received: ACTUAL_SENTINEL",
    "  ✓  2 [desktop] › this is part of the error (3ms)",
    "    at failing.spec.ts:9:2",
    "Unhandled Rejection: UNHANDLED_SENTINEL",
  ].join("\n");
  const output = removeSuccessProgress(raw);
  assert.doesNotMatch(output, /passes \(2ms\)/);
  for (const text of [
    "console diagnostic",
    "EXPECTED_SENTINEL",
    "ACTUAL_SENTINEL",
    "this is part of the error",
    "failing.spec.ts:9:2",
    "UNHANDLED_SENTINEL",
  ]) {
    assert.ok(output.includes(text), text);
  }
});

test("does not truncate long or unfamiliar error output", () => {
  const raw = "UNKNOWN_SETUP_FAILURE\n" + "x".repeat(120_000) + "\nLAST_DETAIL";
  assert.equal(removeSuccessProgress(raw), raw);
});

test("removes colored success progress but keeps colored failure text", () => {
  const output = removeSuccessProgress(
    "\u001b[36m RUN \u001b[0m v5.0.1\n\u001b[32m ✓ passing.test.ts (1 test) 2ms\u001b[0m\n\u001b[31mError: LAST_DETAIL\u001b[0m",
  );
  assert.equal(output, "Error: LAST_DETAIL");
});

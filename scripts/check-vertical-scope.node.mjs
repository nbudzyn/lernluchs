import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

import {
  assertCommitScope,
  parseNameStatus,
  verticalsFromPaths,
} from "./check-vertical-scope.mjs";

test("counts a vertical once across source, unit and E2E files", () => {
  assert.deepEqual(
    verticalsFromPaths([
      "src/verticals/topics/TopicBrowser.tsx",
      "tests/verticals/topics/TopicBrowser.test.tsx",
      "e2e/verticals/topics/topic-path-filter.spec.ts",
      "src/app/App.tsx",
      "tests/shared/example.test.ts",
    ]),
    ["topics"],
  );
});

test("rejects a third distinct vertical", () => {
  assert.throws(
    () =>
      assertCommitScope("0123456789abcdef", [
        "e2e/verticals/topics/filter.spec.ts",
        "tests/verticals/learning-checks/quiz.test.tsx",
        "src/verticals/learning-progress/learningProgress.ts",
      ]),
    /Commit 0123456789ab ändert 3 Vertikalen: learning-checks, learning-progress, topics/,
  );
});

test("counts both owners of a cross-vertical rename", () => {
  const changes = parseNameStatus(
    "R100\0e2e/verticals/topics/old.spec.ts\0e2e/verticals/learning-checks/new.spec.ts\0M\0src/app/App.tsx\0",
  );
  assert.deepEqual(verticalsFromPaths(changes), ["learning-checks", "topics"]);
  assert.deepEqual(assertCommitScope("0123456789abcdef", changes), [
    "learning-checks",
    "topics",
  ]);
});

test("checks each commit in a real Git range", () => {
  const directory = mkdtempSync(join(tmpdir(), "lernluchs-scope-"));
  const script = fileURLToPath(
    new URL("./check-vertical-scope.mjs", import.meta.url),
  );
  const git = (...args) =>
    execFileSync("git", args, {
      cwd: directory,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  const commit = (message) => {
    git("add", "-A");
    git(
      "-c",
      "user.name=Test",
      "-c",
      "user.email=test@example.invalid",
      "commit",
      "-qm",
      message,
    );
  };
  const write = (path) => {
    const target = join(directory, path);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, path);
  };
  const check = (base) =>
    spawnSync(process.execPath, [script, base, "HEAD"], {
      cwd: directory,
      encoding: "utf8",
    });

  try {
    git("init", "-q");
    git(
      "-c",
      "user.name=Test",
      "-c",
      "user.email=test@example.invalid",
      "commit",
      "--allow-empty",
      "-qm",
      "base",
    );
    const base = git("rev-parse", "HEAD");
    write("src/verticals/topics/a.ts");
    write("e2e/verticals/learning-progress/a.spec.ts");
    write("e2e/app/flow.spec.ts");
    commit("two verticals and app");
    assert.equal(check(base).status, 0);

    git("checkout", "-qb", "invalid", base);
    write("src/verticals/topics/a.ts");
    write("tests/verticals/learning-progress/a.test.ts");
    write("e2e/verticals/learning-checks/a.spec.ts");
    commit("three verticals");
    const result = check(base);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /ändert 3 Vertikalen/);
  } finally {
    const absolute = resolve(directory);
    assert.equal(dirname(absolute), resolve(tmpdir()));
    assert.match(basename(absolute), /^lernluchs-scope-/);
    rmSync(absolute, { recursive: true, force: true });
  }
});

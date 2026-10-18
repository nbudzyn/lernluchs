// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  mkdirSync,
  writeFileSync,
} from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import { join, resolve, sep } from "node:path";
import {
  WorktreeGuard,
  handleHook,
  inspectWorkspace,
} from "./worktree-guard.mjs";

let directory;
let workspace;
let processStatus;
let guard;
beforeEach(() => {
  directory = mkdtempSync(join(tmpdir(), "lernluchs-guard-test-"));
  workspace = {
    root: join(directory, "project"),
    linked: true,
    branch: "codex/current-story",
    head: "a".repeat(40),
    specs: ["git-worktrees.md"],
    dirty: true,
    diff: "public source patch",
    untracked: [],
  };
  processStatus = "alive";
  guard = new WorktreeGuard({
    stateDirectory: join(directory, "state"),
    inspect: () => ({ ...workspace }),
    ownerProcess: () => ({ pid: 123, startedAt: "identity-1" }),
    processStatus: () => processStatus,
  });
});
afterEach(() => {
  if (!resolve(directory).startsWith(resolve(tmpdir()) + sep))
    throw new Error("Unsafe cleanup path.");
  rmSync(directory, { recursive: true, force: true });
});
function adopt() {
  guard.adopt("session-a", guard.review().fingerprint);
}

function startFixture() {
  const repository = join(directory, "repository");
  mkdirSync(repository);
  const git = (...args) =>
    execFileSync("git", args, {
      cwd: repository,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  git("init", "-b", "main");
  git(
    "-c",
    "user.name=Test",
    "-c",
    "user.email=test@example.invalid",
    "commit",
    "--allow-empty",
    "-m",
    "fixture",
  );
  git("worktree", "add", "-b", "codex/previous", workspace.root);
  const stateBase = join(directory, "start-state");
  const stateDirectory = join(
    stateBase,
    createHash("sha256").update(workspace.root.toLowerCase()).digest("hex"),
  );
  const startGuard = new WorktreeGuard({
    stateDirectory,
    inspect: () => inspectWorkspace(workspace.root),
  });
  return { startGuard, git, repository, stateBase };
}

describe("new story start", () => {
  it("preserves the current turn's ownership across the branch and task transition", () => {
    const { startGuard } = startFixture();
    startGuard.claim("session-a", "turn-a");
    const before = startGuard.review();
    startGuard.start("session-a", "turn-a", "codex/next");
    const after = startGuard.review();
    expect(after.workspace.branch).toBe("codex/next");
    expect(after.task.branch).toBe("codex/next");
    expect(after.writer).toEqual(before.writer);
    expect(() => startGuard.claim("session-b", "turn-b")).toThrow(/belegt/);
    startGuard.refresh("session-a", "turn-a");
    startGuard.release("session-a", "turn-a");
    expect(startGuard.review().writer).toBeNull();
  }, 30000);

  it("starts a clean free worktree without requiring a turn ID", () => {
    const { startGuard } = startFixture();
    startGuard.start("session-a", undefined, "codex/next");
    const after = startGuard.review();
    expect(after.workspace.branch).toBe("codex/next");
    expect(after.task.branch).toBe("codex/next");
    expect(after.writer).toBeNull();
  }, 30000);

  it("rejects other sessions, other or missing turns and interrupted ownership without changing state", () => {
    const { startGuard } = startFixture();
    startGuard.claim("session-a", "turn-a");
    for (const [session, turn] of [
      ["session-b", "turn-a"],
      ["session-a", "turn-b"],
      ["session-a", undefined],
    ]) {
      const before = startGuard.review();
      expect
        .soft(
          () => startGuard.start(session, turn, "codex/next"),
          `${session}/${turn}`,
        )
        .toThrow(/belegt|Turn/);
      expect.soft(startGuard.review()).toEqual(before);
    }
    startGuard.interrupt("session-a", "turn-a");
    const before = startGuard.review();
    expect(() => startGuard.start("session-a", "turn-a", "codex/next")).toThrow(
      /belegt|unterbrochen/,
    );
    expect(startGuard.review()).toEqual(before);
  }, 30000);

  it("preserves clean-start safeguards even for the current writer", () => {
    const { startGuard, git, repository } = startFixture();
    startGuard.claim("session-a", "turn-a");
    for (const branch of ["main", "../outside", "codex/previous"]) {
      const before = startGuard.review();
      expect
        .soft(() => startGuard.start("session-a", "turn-a", branch), branch)
        .toThrow();
      expect.soft(startGuard.review(), branch).toEqual(before);
    }
    const pending = join(workspace.root, "pending.txt");
    writeFileSync(pending, "uncommitted\n");
    const dirty = startGuard.review();
    expect(() => startGuard.start("session-a", "turn-a", "codex/next")).toThrow(
      /Arbeit/,
    );
    expect(startGuard.review()).toEqual(dirty);
    rmSync(pending);
    const active = join(workspace.root, "docs/changes/active");
    mkdirSync(active, { recursive: true });
    const spec = join(active, "pending.md");
    writeFileSync(spec, "active spec\n");
    git("-C", workspace.root, "add", "docs");
    git(
      "-C",
      workspace.root,
      "-c",
      "user.name=Test",
      "-c",
      "user.email=test@example.invalid",
      "commit",
      "-m",
      "active story",
    );
    startGuard.refresh("session-a", "turn-a");
    const withSpec = startGuard.review();
    expect(withSpec.task.specs).toEqual(withSpec.workspace.specs);
    expect(() => startGuard.start("session-a", "turn-a", "codex/next")).toThrow(
      /ohne aktive Spec/,
    );
    expect(startGuard.review()).toEqual(withSpec);
    rmSync(spec);
    git("-C", workspace.root, "add", "docs");
    git(
      "-C",
      workspace.root,
      "-c",
      "user.name=Test",
      "-c",
      "user.email=test@example.invalid",
      "commit",
      "-m",
      "completed story",
    );
    startGuard.refresh("session-a", "turn-a");
    const unmerged = startGuard.review();
    expect(() =>
      startGuard.start("session-a", "turn-a", "codex/next"),
    ).toThrow();
    expect(startGuard.review()).toEqual(unmerged);
    const developerGuard = new WorktreeGuard({
      stateDirectory: join(directory, "developer-state"),
      inspect: () => inspectWorkspace(repository),
    });
    expect(() =>
      developerGuard.start("session-a", undefined, "codex/next"),
    ).toThrow(/Worktree/);
  }, 30000);

  it.skipIf(process.platform !== "win32")(
    "passes the current turn through the PowerShell entry point and permits the post hook",
    () => {
      const { startGuard, stateBase } = startFixture();
      startGuard.claim("session-a", "turn-a");
      const before = startGuard.review().writer;
      const script = fileURLToPath(
        new URL("./worktree-guard.ps1", import.meta.url),
      );
      const result = execFileSync(
        "powershell.exe",
        [
          "-NoProfile",
          "-File",
          script,
          "start",
          "-Session",
          "session-a",
          "-Turn",
          "turn-a",
          "-Branch",
          "codex/next",
        ],
        {
          cwd: workspace.root,
          env: { ...process.env, LERNLUCHS_GUARD_STATE_DIR: stateBase },
          encoding: "utf8",
        },
      );
      expect(JSON.parse(result)).toEqual({ result: "OK", action: "start" });
      handleHook(
        {
          hook_event_name: "PostToolUse",
          session_id: "session-a",
          turn_id: "turn-a",
        },
        startGuard,
      );
      expect(startGuard.review().task.branch).toBe("codex/next");
      expect(startGuard.review().writer).toEqual(before);
    },
    30000,
  );
});

describe("worktree write ownership", () => {
  it("allows one writer and rejects another session without changing its work", () => {
    adopt();
    guard.claim("session-a", "turn-a");
    const before = guard.review();
    expect(() => guard.claim("session-b", "turn-b")).toThrow(/belegt/);
    expect(guard.review()).toEqual(before);
  });

  it("keeps the story while releasing only the matching completed turn", () => {
    adopt();
    guard.claim("session-a", "turn-a");
    guard.release("session-b", "turn-a");
    guard.release("session-a", "wrong-turn");
    expect(() => guard.claim("session-b", "turn-b")).toThrow(/belegt/);
    guard.release("session-a", "turn-a");
    guard.claim("session-b", "turn-b");
    expect(guard.review().writer.sessionId).toBe("session-b");
    expect(guard.review().task.branch).toBe("codex/current-story");
  });

  it("requires review for an existing dirty story and preserves changes on continuation", () => {
    expect(() => guard.claim("session-a", "turn-a")).toThrow(/prüfen/);
    adopt();
    guard.claim("session-a", "turn-a");
    guard.release("session-a", "turn-a");
    guard.claim("session-b", "turn-b");
    expect(workspace.diff).toBe("public source patch");
    expect(guard.review().task.specs).toEqual(["git-worktrees.md"]);
  });

  it("rejects developer checkouts, unexpected branches and changed story identities", () => {
    for (const update of [
      { linked: false },
      { branch: "main" },
      { branch: null },
    ]) {
      const original = { ...workspace };
      Object.assign(workspace, update);
      expect(
        () => guard.adopt("session-a", guard.review().fingerprint),
        JSON.stringify(update),
      ).toThrow(/Worktree|Branch/);
      Object.assign(workspace, original);
    }
    adopt();
    for (const update of [
      { branch: "codex/other" },
      { specs: ["other-story.md"] },
    ]) {
      const original = { ...workspace };
      Object.assign(workspace, update);
      expect(
        () => guard.claim("session-a", "turn-a"),
        JSON.stringify(update),
      ).toThrow(/Story/);
      Object.assign(workspace, original);
    }
  });

  it("allows clean new worktrees while keeping independent worktrees separate", () => {
    workspace.dirty = false;
    workspace.specs = [];
    guard.claim("session-a", "turn-a");
    const other = new WorktreeGuard({
      stateDirectory: join(directory, "other-state"),
      inspect: () => ({ ...workspace, root: join(directory, "other-project") }),
      ownerProcess: () => null,
      processStatus: () => "unknown",
    });
    other.claim("session-b", "turn-b");
    expect(guard.review().writer.sessionId).toBe("session-a");
    expect(other.review().writer.sessionId).toBe("session-b");
  });

  it("preserves interrupted ownership and ignores lock age", () => {
    adopt();
    guard.claim("session-a", "turn-a");
    guard.interrupt("session-a", "turn-a");
    expect(guard.review().writer.interrupted).toBe(true);
    expect(() => guard.claim("session-b", "turn-b")).toThrow(/belegt/);
    expect(() =>
      guard.recover("session-b", "turn-b", guard.review().fingerprint),
    ).toThrow(/inaktiv/);
  });

  it("recovers a dead owner only after reviewing the unchanged work", () => {
    adopt();
    guard.claim("session-a", "turn-a");
    processStatus = "dead";
    const review = guard.review();
    workspace.diff = "new edit after review";
    expect(() =>
      guard.recover("session-b", "turn-b", review.fingerprint),
    ).toThrow(/erneut prüfen/);
    guard.recover("session-b", "turn-b", guard.review().fingerprint);
    expect(guard.review().writer.sessionId).toBe("session-b");
    expect(workspace.diff).toBe("new edit after review");
  });

  it("requires explicit inactivity confirmation for unknown or still-live owners", () => {
    for (const state of ["alive", "unknown"]) {
      processStatus = state;
      adopt();
      guard.claim("session-a", "turn-a");
      expect(() =>
        guard.recover("session-b", "turn-b", guard.review().fingerprint),
      ).toThrow(/inaktiv/);
      guard.recover(
        "session-b",
        "turn-b",
        guard.review().fingerprint,
        "session-a",
      );
      expect(guard.review().writer.sessionId).toBe("session-b");
      guard.release("session-b", "turn-b");
    }
  });

  it("rejects stale reviews, invalid session identifiers and corrupted ownership", () => {
    const review = guard.review();
    workspace.diff = "changed";
    expect(() => guard.adopt("session-a", review.fingerprint)).toThrow(
      /erneut prüfen/,
    );
    expect(() => guard.adopt("../other", guard.review().fingerprint)).toThrow(
      /Sitzung/,
    );
    adopt();
    guard.claim("session-a", "turn-a");
    const files = readdirSync(join(directory, "state"));
    expect(files).toContain("writer.json");
    expect(
      readFileSync(join(directory, "state", "writer.json"), "utf8"),
    ).not.toContain("public source patch");
  });
});

it("does not block read-only post events in developer checkouts", () => {
  workspace.linked = false;
  workspace.branch = "main";
  expect(() =>
    handleHook(
      {
        hook_event_name: "PostToolUse",
        session_id: "reader",
        turn_id: "read-turn",
      },
      guard,
    ),
  ).not.toThrow();
});
it("rejects outside paths for direct edits and patch moves", () => {
  adopt();
  for (const tool_input of [
    { file_path: join(directory, "outside.txt") },
    { input: "*** Update File: safe.txt\n*** Move to: ../outside.txt\n" },
  ]) {
    expect(() =>
      handleHook(
        {
          hook_event_name: "PreToolUse",
          tool_name: "Write",
          tool_input,
          session_id: "session-a",
          turn_id: "turn-a",
        },
        guard,
      ),
    ).toThrow(/Worktree/);
  }
});
it("saves tracked and untracked changes locally without editing the worktree", () => {
  mkdirSync(workspace.root);
  const source = join(workspace.root, "new.txt");
  writeFileSync(source, "new source\n");
  workspace.untracked = [{ path: "new.txt" }];
  adopt();
  const saved = guard.checkpoint("session-a");
  expect(readFileSync(join(saved, "tracked.patch"), "utf8")).toBe(
    workspace.diff,
  );
  expect(readFileSync(join(saved, "untracked/new.txt"), "utf8")).toBe(
    "new source\n",
  );
  expect(readFileSync(source, "utf8")).toBe("new source\n");
});
it("fails closed for damaged ownership data", () => {
  adopt();
  writeFileSync(guard.writerPath, "{broken");
  expect(() => guard.claim("session-a", "turn-a")).toThrow(/beschädigt/);
  expect(readFileSync(guard.writerPath, "utf8")).toBe("{broken");
});
it("lets a new session inspect instructions and the diff before adopting dirty work", () => {
  for (const command of [
    "Get-Content docs/INDEX.md",
    "Get-Content -Raw docs/quality/worktrees.md",
    "Get-Content AGENTS.md",
    "git diff",
  ]) {
    expect(
      () =>
        handleHook(
          {
            hook_event_name: "PreToolUse",
            tool_name: "Bash",
            tool_input: { command },
            session_id: "new-session",
            turn_id: "new-turn",
          },
          guard,
        ),
      command,
    ).not.toThrow();
  }
  expect(guard.review().writer).toBeNull();
  expect(guard.review().task).toBeNull();
  expect(() =>
    handleHook(
      {
        hook_event_name: "PreToolUse",
        tool_name: "Bash",
        tool_input: {
          command:
            "Get-Content docs/INDEX.md; Set-Content modified.txt changed",
        },
        session_id: "new-session",
        turn_id: "new-turn",
      },
      guard,
    ),
  ).toThrow(/prüfen/);
});

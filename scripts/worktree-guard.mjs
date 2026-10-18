import { createHash, randomUUID } from "node:crypto";
import { execFileSync, spawnSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  realpathSync,
  renameSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const digest = (value) => createHash("sha256").update(value).digest("hex");
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
function identity(value) {
  if (typeof value !== "string" || !/^[a-zA-Z0-9_-]{1,200}$/.test(value))
    throw new Error("Ungültige Sitzung oder Turn-ID.");
  return value;
}
function load(path) {
  if (!existsSync(path)) return null;
  try {
    const result = JSON.parse(readFileSync(path, "utf8"));
    if (!result || typeof result !== "object" || result.version !== 1)
      throw new Error();
    return result;
  } catch {
    throw new Error(
      "Lokaler Schutzstatus beschädigt; Zustand sichern und gezielt prüfen, nicht überschreiben.",
    );
  }
}
function save(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  const temporary = `${path}.${randomUUID()}.tmp`;
  writeFileSync(temporary, JSON.stringify({ version: 1, ...value }), {
    flag: "wx",
  });
  renameSync(temporary, path);
}

export class WorktreeGuard {
  constructor({
    stateDirectory,
    inspect,
    ownerProcess = () => null,
    processStatus = () => "unknown",
  }) {
    this.directory = stateDirectory;
    this.inspect = inspect;
    this.ownerProcess = ownerProcess;
    this.processStatus = processStatus;
    this.writerPath = join(stateDirectory, "writer.json");
    this.taskPath = join(stateDirectory, "task.json");
  }
  review() {
    const workspace = this.inspect();
    const writer = load(this.writerPath);
    const task = load(this.taskPath);
    if (
      writer &&
      (typeof writer.sessionId !== "string" ||
        typeof writer.turnId !== "string" ||
        writer.root !== workspace.root)
    )
      throw new Error(
        "Lokale Schreibsperre beschädigt oder falscher Arbeitsort.",
      );
    if (
      task &&
      (typeof task.branch !== "string" ||
        !Array.isArray(task.specs) ||
        task.root !== workspace.root)
    )
      throw new Error(
        "Lokale Story-Zuordnung beschädigt oder falscher Arbeitsort.",
      );
    return {
      workspace: {
        root: workspace.root,
        branch: workspace.branch,
        head: workspace.head,
        specs: workspace.specs,
        dirty: workspace.dirty,
        changes: workspace.changes ?? [],
      },
      writer,
      task,
      fingerprint: digest(JSON.stringify({ workspace, writer, task })),
    };
  }
  checked() {
    const review = this.review();
    const workspace = this.inspect();
    if (!workspace.linked)
      throw new Error(
        "Entwickler-Checkout: einen separaten Codex-Worktree verwenden.",
      );
    if (!workspace.branch?.startsWith("codex/"))
      throw new Error(
        "Codex benötigt einen eigenen codex/-Branch im Worktree; main bleibt beim Entwickler.",
      );
    if (workspace.specs.length > 1)
      throw new Error("Mehrere aktive Specs; Story-Zuordnung zuerst prüfen.");
    return review;
  }
  checkStory(review) {
    if (
      review.task &&
      (review.task.branch !== review.workspace.branch ||
        !same(review.task.specs, review.workspace.specs))
    )
      throw new Error(
        "Arbeitsort, Branch oder aktive Story haben gewechselt; zuerst erneut prüfen.",
      );
  }
  checkReview(fingerprint) {
    const review = this.checked();
    if (fingerprint !== review.fingerprint)
      throw new Error(
        "Arbeitsstand seit Sichtprüfung geändert; erneut prüfen.",
      );
    return review;
  }
  saveTask(workspace) {
    save(this.taskPath, {
      root: workspace.root,
      branch: workspace.branch,
      specs: workspace.specs,
      head: workspace.head,
    });
  }
  adopt(sessionId, fingerprint) {
    identity(sessionId);
    const review = this.checkReview(fingerprint);
    if (review.writer)
      throw new Error(
        "Worktree belegt; vorhandene Sitzung zuerst kontrolliert freigeben oder wiederaufnehmen.",
      );
    this.saveTask(review.workspace);
  }
  claim(sessionId, turnId) {
    identity(sessionId);
    identity(turnId);
    const review = this.checked();
    if (
      review.writer &&
      (review.writer.sessionId !== sessionId ||
        review.writer.turnId !== turnId ||
        review.writer.interrupted)
    )
      throw new Error(
        `Worktree belegt durch ${review.writer.sessionId}; zweite Schreibsitzung abgewiesen.`,
      );
    this.checkStory(review);
    if (!review.task) {
      if (review.workspace.dirty || review.workspace.specs.length)
        throw new Error(
          "Bestehende Arbeit zuerst mit review prüfen und danach mit adopt übernehmen.",
        );
      this.saveTask(review.workspace);
    }
    if (!review.writer) {
      mkdirSync(this.directory, { recursive: true });
      writeFileSync(
        this.writerPath,
        JSON.stringify({
          version: 1,
          root: review.workspace.root,
          sessionId,
          turnId,
          process: this.ownerProcess(),
          interrupted: false,
        }),
        { flag: "wx" },
      );
    }
  }
  refresh(sessionId, turnId) {
    const current = this.review();
    if (
      current.writer?.sessionId !== sessionId ||
      current.writer?.turnId !== turnId
    )
      return;
    const review = this.checked();
    if (review.task?.branch !== review.workspace.branch)
      throw new Error(
        "Branchwechsel außerhalb des Startablaufs; Story erneut prüfen.",
      );
    if (
      review.task.specs.length &&
      review.workspace.specs.length &&
      !same(review.task.specs, review.workspace.specs)
    )
      throw new Error(
        "Aktive Story wurde ersetzt; nicht ungeprüft übernehmen.",
      );
    this.saveTask(review.workspace);
  }
  release(sessionId, turnId) {
    const review = this.review();
    if (
      review.writer?.sessionId !== sessionId ||
      (turnId && review.writer.turnId !== turnId)
    )
      return;
    if (review.writer.interrupted) return;
    this.refresh(sessionId, review.writer.turnId);
    unlinkSync(this.writerPath);
  }
  interrupt(sessionId, turnId) {
    const review = this.review();
    if (
      review.writer?.sessionId === sessionId &&
      review.writer.turnId === turnId
    )
      save(this.writerPath, { ...review.writer, interrupted: true });
  }
  recover(sessionId, turnId, fingerprint, confirmedInactive = "") {
    identity(sessionId);
    identity(turnId);
    const review = this.checkReview(fingerprint);
    this.checkStory(review);
    if (!review.writer)
      throw new Error(
        "Keine Schreibsperre für Wiederaufnahme vorhanden; adopt verwenden.",
      );
    if (
      this.processStatus(review.writer.process) !== "dead" &&
      confirmedInactive !== review.writer.sessionId
    )
      throw new Error(
        "Vorherige Sitzung nicht sicher inaktiv; zuerst Sitzung und zugehörige Prozesse prüfen und die konkrete Sitzung bestätigen.",
      );
    const previous = review.writer;
    save(join(this.directory, "previous-owner.json"), previous);
    unlinkSync(this.writerPath);
    this.claim(sessionId, turnId);
  }
  checkpoint(sessionId) {
    identity(sessionId);
    const review = this.checked();
    if (review.writer && review.writer.sessionId !== sessionId)
      throw new Error(
        "Worktree belegt; keine Sicherung eines laufenden fremden Schreibauftrags.",
      );
    const workspace = this.inspect();
    const destination = join(this.directory, "checkpoints", randomUUID());
    mkdirSync(destination, { recursive: true });
    writeFileSync(join(destination, "tracked.patch"), workspace.diff);
    for (const file of workspace.untracked ?? []) {
      const source = resolve(workspace.root, file.path);
      if (
        !within(workspace.root, source) ||
        !within(realpathSync(workspace.root), realpathSync(source))
      )
        throw new Error("Ungültiger Sicherungspfad.");
      const target = join(destination, "untracked", file.path);
      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(source, target);
    }
    save(join(destination, "manifest.json"), review.workspace);
    return destination;
  }
}

function git(root, ...args) {
  const output = execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  });
  return args[0] === "diff" ? output : output.trimEnd();
}
function within(root, path) {
  const child = relative(root, path);
  return (
    child === "" ||
    (!isAbsolute(child) &&
      child !== ".." &&
      !child.startsWith("../") &&
      !child.startsWith("..\\"))
  );
}
export function inspectWorkspace(cwd) {
  const root = realpathSync(git(cwd, "rev-parse", "--show-toplevel"));
  const active = join(root, "docs/changes/active");
  const specs = existsSync(active)
    ? readdirSync(active)
        .filter((file) => file.endsWith(".md") && file !== "README.md")
        .sort()
    : [];
  let branch = null;
  try {
    branch = git(root, "symbolic-ref", "--short", "HEAD");
  } catch {
    /* Detached bootstrap needs an explicit start. */
  }
  const untracked = git(
    root,
    "ls-files",
    "--others",
    "--exclude-standard",
    "-z",
  )
    .split("\0")
    .filter(Boolean)
    .map((path) => ({ path, hash: digest(readFileSync(join(root, path))) }));
  const changes = git(root, "status", "--porcelain");
  return {
    root,
    branch,
    linked: statSync(join(root, ".git")).isFile(),
    head: git(root, "rev-parse", "HEAD"),
    specs,
    dirty: Boolean(changes),
    changes: changes.split("\n").filter(Boolean),
    specHashes: specs.map((file) => digest(readFileSync(join(active, file)))),
    diff: git(root, "diff", "--binary", "HEAD"),
    untracked,
  };
}
function windowsProcesses(script) {
  if (process.platform !== "win32") return null;
  const encoded = Buffer.from(script, "utf16le").toString("base64");
  const result = spawnSync(
    "powershell.exe",
    ["-NoProfile", "-NonInteractive", "-EncodedCommand", encoded],
    { encoding: "utf8", windowsHide: true, timeout: 5000 },
  );
  if (result.status !== 0) return null;
  try {
    return JSON.parse(result.stdout);
  } catch {
    return null;
  }
}
function ownerProcess() {
  return windowsProcesses(
    `$p = ${process.ppid}; for ($i=0; $i -lt 12 -and $p -gt 0; $i++) { $v=Get-CimInstance Win32_Process -Filter "ProcessId=$p"; if (-not $v) { break }; if ($v.Name -ieq 'codex.exe') { @{pid=[int]$v.ProcessId;startedAt=$v.CreationDate.ToUniversalTime().ToString('o')} | ConvertTo-Json -Compress; break }; $p=[int]$v.ParentProcessId }`,
  );
}
function processStatus(owner) {
  if (!owner?.pid || !owner.startedAt) return "unknown";
  const result = windowsProcesses(
    `$p=Get-CimInstance Win32_Process -Filter "ProcessId=${Number(owner.pid)}"; if ($p) { @{startedAt=$p.CreationDate.ToUniversalTime().ToString('o')} | ConvertTo-Json -Compress } else { @{missing=$true} | ConvertTo-Json -Compress }`,
  );
  if (!result) return "unknown";
  return result.missing || result.startedAt !== owner.startedAt
    ? "dead"
    : "alive";
}
function guardFor(cwd) {
  const workspace = inspectWorkspace(cwd);
  const base =
    process.env.LERNLUCHS_GUARD_STATE_DIR ||
    join(
      process.env.LOCALAPPDATA || join(homedir(), ".local", "state"),
      "Lernluchs",
      "codex-worktrees",
    );
  if (within(workspace.root, resolve(base)))
    throw new Error("Schutzstatus muss außerhalb des Repositorys liegen.");
  return new WorktreeGuard({
    stateDirectory: join(base, digest(workspace.root.toLowerCase())),
    inspect: () => inspectWorkspace(workspace.root),
    ownerProcess,
    processStatus,
  });
}
function managedCommand(input) {
  const command = input?.command ?? input?.cmd ?? "";
  return /^(?:powershell(?:\.exe)?|pwsh(?:\.exe)?) -NoProfile -File scripts[\\/]worktree-guard\.ps1 (?:review|adopt|recover|start|checkpoint)(?: [-a-zA-Z0-9_./\\:]+)*$/.test(
    command.trim(),
  );
}
export function handleHook(input, guard) {
  const event = input.hook_event_name;
  if (event === "SessionStart")
    return {
      hookSpecificOutput: {
        hookEventName: event,
        additionalContext: `Aktuelle Sitzung: ${input.session_id}. Worktree-Schutz: docs/quality/worktrees.md lesen. Erst Arbeitsort/Branch/aktive Spec prüfen. Bestehende uncommittete Arbeit gehört zur Story, nicht automatisch verwerfen. Bei Sperre review/recover verwenden, keine Altersheuristik. Reguläre Chats im dauerhaften Projekt mit New worktree AUS; parallele Entwicklung mit eigenem Worktree.`,
      },
    };
  if (event === "PreToolUse") {
    const tool = input.tool_name || "";
    if (
      /^(?:mcp__.*__(?:list_|read_|get_|search_|take_snapshot|take_screenshot)|web|clock)/.test(
        tool,
      )
    )
      return {};
    const root = guard.review().workspace.root;
    const supplied = input.tool_input?.workdir ?? input.tool_input?.cwd;
    if (supplied && inspectWorkspace(supplied).root !== root)
      throw new Error("Werkzeug arbeitet im falschen Worktree.");
    if (managedCommand(input.tool_input)) return {};
    const command = input.tool_input?.command ?? input.tool_input?.cmd ?? "";
    if (
      /^git (?:status(?: --short)?|diff(?: --stat| --check)?|worktree list(?: --porcelain)?)$/.test(
        command.trim(),
      )
    )
      return {};
    if (
      /^Get-Content (?:-Raw )?(?:AGENTS\.md|(?:docs|scripts)[\\/][a-zA-Z0-9_./\\-]+)(?: -Raw)?$/.test(
        command.trim(),
      )
    )
      return {};
    if (/apply_patch|Edit|Write/.test(tool)) {
      const direct = input.tool_input?.file_path ?? input.tool_input?.path;
      if (direct && !within(root, resolve(root, direct)))
        throw new Error("Edit verlässt den zugeordneten Worktree.");
      const patch = input.tool_input?.command ?? input.tool_input?.input ?? "";
      for (const [, file] of patch.matchAll(
        /^\*\*\* (?:(?:Add|Update|Delete) File|Move to): (.+)$/gm,
      )) {
        if (!within(root, resolve(root, file)))
          throw new Error("Patch verlässt den zugeordneten Worktree.");
      }
    }
    guard.claim(input.session_id, input.turn_id);
  } else if (event === "PostToolUse")
    guard.refresh(input.session_id, input.turn_id);
  else if (event === "Interrupt")
    guard.interrupt(input.session_id, input.turn_id);
  else if (event === "Stop") guard.release(input.session_id, input.turn_id);
  else if (event === "SessionEnd") guard.release(input.session_id);
  return {};
}
export function run(args) {
  const [action = "review", ...rest] = args;
  const values = {};
  for (let i = 0; i < rest.length; i += 2) {
    if (!/^--[a-z-]+$/.test(rest[i]) || !rest[i + 1])
      throw new Error("Ungültige Schutzargumente.");
    values[rest[i].slice(2)] = rest[i + 1];
  }
  const input = action === "hook" ? JSON.parse(readFileSync(0, "utf8")) : null;
  const guard = guardFor(input?.cwd || process.cwd());
  const session = values.session;
  if (action === "hook") return handleHook(input, guard);
  if (action === "review") return guard.review();
  if (action === "adopt") guard.adopt(session, values.review);
  else if (action === "recover") {
    guard.recover(
      session,
      "recovery",
      values.review,
      values["confirm-inactive"],
    );
    guard.release(session, "recovery");
  } else if (action === "checkpoint")
    return { checkpoint: guard.checkpoint(session) };
  else if (action === "start") {
    identity(session);
    if (!/^codex\/[a-z0-9][a-z0-9/-]*$/.test(values.branch || ""))
      throw new Error("Neuer Aufgabenbranch muss mit codex/ beginnen.");
    const review = guard.review();
    if (
      review.writer ||
      review.workspace.dirty ||
      review.workspace.specs.length
    )
      throw new Error(
        "Vorhandene Arbeit zuerst fortsetzen oder sichern; neuer Story-Start benötigt einen freien sauberen Worktree.",
      );
    const root = review.workspace.root;
    if (!inspectWorkspace(root).linked)
      throw new Error("Start nur im Codex-Worktree.");
    execFileSync("git", ["merge-base", "--is-ancestor", "HEAD", "main"], {
      cwd: root,
      stdio: "pipe",
    });
    git(root, "switch", "-c", values.branch, "main");
    guard.adopt(session, guard.review().fingerprint);
  } else throw new Error("Unbekannte Schutzaktion.");
  return { result: "OK", action };
}
if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    console.log(JSON.stringify(run(process.argv.slice(2))));
  } catch (error) {
    console.error(error.message);
    if (process.argv[2] === "hook")
      console.log(
        JSON.stringify({ continue: false, stopReason: error.message }),
      );
    process.exitCode = 2;
  }
}

import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

export function parseNameStatus(output) {
  const fields = output.toString().split("\0").filter(Boolean);
  const paths = [];
  for (let index = 0; index < fields.length;) {
    const status = fields[index++];
    if (/^[RC]/.test(status)) {
      paths.push(fields[index++], fields[index++]);
    } else {
      paths.push(fields[index++]);
    }
  }
  return paths;
}

export function verticalsFromPaths(paths) {
  const verticals = new Set();
  for (const path of paths) {
    const match = path
      ?.replaceAll("\\", "/")
      .match(/^(?:src|tests|e2e)\/verticals\/([^/]+)\//);
    if (match) verticals.add(match[1]);
  }
  return [...verticals].sort((first, second) => first.localeCompare(second));
}

export function assertCommitScope(commit, paths) {
  const verticals = verticalsFromPaths(paths);
  if (verticals.length > 2) {
    throw new Error(
      `Commit ${commit.slice(0, 12)} ändert ${verticals.length} Vertikalen: ${verticals.join(", ")}. Erlaubt sind höchstens zwei pro Commit.`,
    );
  }
  return verticals;
}

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function changedPaths(commit) {
  return parseNameStatus(
    execFileSync("git", [
      "diff-tree",
      "--root",
      "--no-commit-id",
      "--name-status",
      "-r",
      "-z",
      "-M",
      commit,
    ]),
  );
}

function checkCommitRange(base, head) {
  git("rev-parse", "--verify", `${base}^{commit}`);
  git("rev-parse", "--verify", `${head}^{commit}`);
  const commits = git(
    "rev-list",
    "--reverse",
    "--no-merges",
    `${base}..${head}`,
  )
    .split("\n")
    .filter(Boolean);
  for (const commit of commits) {
    assertCommitScope(commit, changedPaths(commit));
  }
  process.stdout.write(
    `${commits.length} Commit(s) auf maximal zwei Vertikalen geprüft.\n`,
  );
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const [base, head] = process.argv.slice(2);
  if (!base || !head) {
    process.stderr.write("Aufruf: check-vertical-scope.mjs <base> <head>\n");
    process.exitCode = 2;
  } else {
    try {
      checkCommitRange(base, head);
    } catch (error) {
      process.stderr.write(`${error.message}\n`);
      process.exitCode = 1;
    }
  }
}

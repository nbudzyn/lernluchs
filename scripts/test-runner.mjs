import { spawn } from "node:child_process";
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { constants, tmpdir } from "node:os";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { stripVTControlCharacters } from "node:util";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const labels = { unit: "Unit/Komponenten", e2e: "E2E" };

export function parseArguments(argv) {
  const [type, ...remaining] = argv;
  if (!Object.hasOwn(labels, type))
    throw new Error(
      "Aufruf: test-runner.mjs <unit|e2e> [Dateien/Filter] [--vertical NAME] [--log-dir PFAD]",
    );
  const args = [];
  let vertical;
  let logDirectory;
  for (let index = 0; index < remaining.length; index++) {
    const arg = remaining[index];
    if (arg === "--") continue;
    if (arg === "--vertical" || arg === "--log-dir") {
      const value = remaining[++index];
      if (!value || value.startsWith("--"))
        throw new Error(`Wert für ${arg} fehlt.`);
      if (arg === "--vertical") {
        if (vertical || !/^[a-z][a-z0-9-]*$/.test(value))
          throw new Error("Ungültige Vertikale.");
        vertical = value;
        args.push(`${type === "unit" ? "tests" : "e2e"}/verticals/${value}`);
      } else {
        if (logDirectory)
          throw new Error("--log-dir darf nur einmal angegeben werden.");
        logDirectory = value;
      }
    } else {
      if (
        /^(?:--(?:reporter|outputFile|watch|ui|list|dangerouslyIgnoreUnhandledErrors)(?:[.=]|$)|-(?:r|w)$)/.test(
          arg,
        )
      ) {
        throw new Error(
          `Der Runner verwaltet Reporter und Einmalläufe selbst: ${arg}`,
        );
      }
      args.push(arg);
    }
  }
  return { type, args, vertical, logDirectory };
}

function count(value) {
  if (!Number.isInteger(value) || value < 0)
    throw new Error("Ungültige Testanzahl im Bericht.");
  return value;
}

function reportCounts(type, report) {
  if (!report || typeof report !== "object")
    throw new Error("Strukturierter Testbericht fehlt.");
  if (type === "unit") {
    const passed = count(report.numPassedTests);
    const failed = count(report.numFailedTests);
    const skipped = count(report.numPendingTests) + count(report.numTodoTests);
    const total = count(report.numTotalTests);
    const suiteFailures = count(report.numFailedTestSuites);
    if (
      total !== passed + failed + skipped ||
      typeof report.success !== "boolean"
    )
      throw new Error("Widersprüchlicher Testbericht.");
    return {
      passed,
      failed,
      skipped,
      flaky: 0,
      total,
      globalErrors: suiteFailures,
      success: report.success,
    };
  }
  if (!report.stats || !Array.isArray(report.errors))
    throw new Error("Unbekanntes E2E-Berichtsformat.");
  const passed = count(report.stats.expected);
  const failed = count(report.stats.unexpected);
  const skipped = count(report.stats.skipped);
  const flaky = count(report.stats.flaky);
  return {
    passed,
    failed,
    skipped,
    flaky,
    total: passed + failed + skipped + flaky,
    globalErrors: report.errors.length,
    success: failed === 0 && report.errors.length === 0,
  };
}

export function summarizeResult(type, report, processExit, elapsedMs) {
  let counts;
  let issue;
  try {
    counts = reportCounts(type, report);
    if (counts.total === 0)
      throw new Error("Keine Testfälle im Bericht; kein bestätigter Testlauf.");
    if (
      processExit === 0 &&
      (!counts.success || counts.failed || counts.globalErrors)
    )
      throw new Error("Testbericht enthält Fehler trotz Prozess-Exitcode 0.");
  } catch (error) {
    issue = error.message;
  }
  const exitCode = processExit === 0 && issue ? 2 : processExit;
  const status =
    exitCode !== 0
      ? "FAIL"
      : counts.flaky
        ? "WARN"
        : counts.passed === 0
          ? "SKIP"
          : "PASS";
  const statistics = counts
    ? [
        `${counts.passed} bestanden`,
        ...(counts.failed ? [`${counts.failed} fehlgeschlagen`] : []),
        ...(counts.skipped ? [`${counts.skipped} übersprungen`] : []),
        ...(counts.flaky ? [`${counts.flaky} flaky`] : []),
      ].join(", ")
    : "Testanzahl nicht verfügbar";
  const duration = (elapsedMs / 1000).toFixed(2).replace(".", ",");
  return {
    exitCode,
    summary: `${status} ${labels[type]}: ${statistics}; ${duration} s; Exitcode ${exitCode}`,
    showDetails: exitCode !== 0 || Boolean(counts?.flaky),
    issue,
    counts,
  };
}

export function removeSuccessProgress(raw) {
  let inFailure = false;
  return stripVTControlCharacters(raw)
    .split(/\r?\n/)
    .filter((line) => {
      if (
        /^\s*(?:FAIL\s|\d+\)\s|.*(?:Error:|Unhandled (?:Error|Rejection)))/.test(
          line,
        )
      )
        inFailure = true;
      if (inFailure) return true;
      return !/^\s*(?:[✓✔]\s+\d+\s+\[|[✓✔]\s+[^\n]+\(\d+ tests?|RUN\s+v\d|Running \d+ tests? using \d+ workers?)/.test(
        line,
      );
    })
    .join("\n");
}

function createLogDirectory(requested, cwd) {
  const directory = requested
    ? resolve(cwd, requested)
    : join(tmpdir(), "lernluchs-tests-");
  const withinProject = relative(
    realpathSync(projectRoot),
    realpathSync(dirname(directory)),
  );
  if (
    !withinProject ||
    (!withinProject.startsWith("..") && !isAbsolute(withinProject))
  )
    throw new Error("Rohprotokolle müssen außerhalb des Repositorys liegen.");
  if (!requested) return mkdtempSync(directory);
  mkdirSync(directory);
  return directory;
}

export async function runTests(options, cwd = projectRoot) {
  if (
    options.vertical &&
    !existsSync(
      resolve(
        cwd,
        `${options.type === "unit" ? "tests" : "e2e"}/verticals/${options.vertical}`,
      ),
    )
  )
    throw new Error(`Vertikale nicht gefunden: ${options.vertical}`);
  const directory = createLogDirectory(options.logDirectory, cwd);
  const reportFile = join(directory, "report.json");
  const cli = resolve(
    projectRoot,
    options.type === "unit"
      ? "node_modules/vitest/vitest.mjs"
      : "node_modules/@playwright/test/cli.js",
  );
  const args =
    options.type === "unit"
      ? [
          cli,
          "run",
          ...options.args,
          "--reporter=default",
          "--reporter=json",
          `--outputFile.json=${reportFile}`,
        ]
      : [cli, "test", ...options.args, "--reporter=list,json"];
  const env = {
    ...process.env,
    FORCE_COLOR: "0",
    PLAYWRIGHT_JSON_OUTPUT_FILE: reportFile,
  };
  delete env.NO_COLOR;
  const started = performance.now();
  let combined = "";
  let spawnError;
  for (const name of ["stdout.log", "stderr.log", "raw.log"])
    writeFileSync(join(directory, name), "");
  const child = spawn(process.execPath, args, {
    cwd,
    env,
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  });
  const forwardInterrupt = () => child.kill("SIGINT");
  process.on("SIGINT", forwardInterrupt);
  const outcome = await new Promise((settle) => {
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (text) => {
      combined += text;
      appendFileSync(join(directory, "stdout.log"), text);
      appendFileSync(join(directory, "raw.log"), text);
    });
    child.stderr.on("data", (text) => {
      combined += text;
      appendFileSync(join(directory, "stderr.log"), text);
      appendFileSync(join(directory, "raw.log"), text);
    });
    child.on("error", (error) => {
      spawnError = error;
    });
    child.on("close", (code, signal) => settle({ code, signal }));
  });
  process.removeListener("SIGINT", forwardInterrupt);
  if (spawnError) {
    const detail = `\n${spawnError.stack}\n`;
    combined += detail;
    appendFileSync(join(directory, "raw.log"), detail);
  }
  let report = null;
  try {
    report = JSON.parse(readFileSync(reportFile, "utf8"));
  } catch {
    /* Der vollständige Rohtext bleibt die Fehlerquelle. */
  }
  const processExit =
    outcome.code ??
    (outcome.signal ? 128 + (constants.signals[outcome.signal] ?? 1) : 2);
  const result = summarizeResult(
    options.type,
    report,
    processExit,
    performance.now() - started,
  );
  const humanOutput = combined
    .split(/\r?\n/)
    .filter(
      (line) =>
        line !== `JSON report written to ${reportFile}` &&
        line !== `JSON report written to ${reportFile.replaceAll("\\", "/")}`,
    )
    .join("\n");
  let output = `${result.summary}\n`;
  if (result.showDetails) {
    if (result.issue) output += `Berichtshinweis: ${result.issue}\n`;
    output += `${removeSuccessProgress(humanOutput).trim()}\nRohprotokoll: ${join(directory, "raw.log")}\n`;
  }
  writeFileSync(join(directory, "runner.log"), output);
  writeFileSync(
    join(directory, "metrics.json"),
    JSON.stringify(
      {
        type: options.type,
        testLaunches: 1,
        processExit,
        exitCode: result.exitCode,
        rawBytes: Buffer.byteLength(combined),
        outputBytes: Buffer.byteLength(output),
        durationMs: Math.round(performance.now() - started),
        counts: result.counts,
      },
      null,
      2,
    ),
  );
  process.stdout.write(output);
  return result.exitCode;
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    process.exitCode = await runTests(parseArguments(process.argv.slice(2)));
  } catch (error) {
    console.error(`FAIL Test-Runner: ${error.message}; Exitcode 2`);
    process.exitCode = 2;
  }
}

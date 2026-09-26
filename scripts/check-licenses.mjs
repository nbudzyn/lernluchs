import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const permitted = new Set([
  "Apache-2.0",
  "BSD-2-Clause",
  "BSD-3-Clause",
  "BlueOak-1.0.0",
  "CC0-1.0",
  "ISC",
  "MIT",
  "MIT-0",
]);

// Reviewed existing transitive build dependency; reconsider on version changes.
const reviewed = new Map([["lightningcss", "1.33.0"]]);

export function checkLicenses(lock) {
  const problems = [];
  for (const [path, pkg] of Object.entries(lock.packages ?? {})) {
    if (!path) continue;
    const name = path.split("node_modules/").at(-1);
    const license = pkg.license;
    if (permitted.has(license)) continue;
    if (
      license === "MPL-2.0" &&
      /^lightningcss(?:-(?:android|darwin|freebsd|linux|win32)-[a-z0-9-]+)?$/.test(
        name ?? "",
      ) &&
      reviewed.get("lightningcss") === pkg.version
    )
      continue;
    problems.push(
      `${path}: ${license ?? "unknown"} (${pkg.version ?? "unknown version"})`,
    );
  }
  return problems;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const problems = checkLicenses(
    JSON.parse(readFileSync("package-lock.json", "utf8")),
  );
  if (problems.length > 0) {
    console.error(`License review required:\n${problems.join("\n")}`);
    process.exitCode = 1;
  } else {
    console.log("Dependency licenses checked.");
  }
}

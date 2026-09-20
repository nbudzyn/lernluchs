import { readFile } from "node:fs/promises";

const workflow = await readFile(
  new URL("../.github/workflows/ci.yml", import.meta.url),
  "utf8",
);

for (const requiredSnippet of [
  "npm ci",
  "npm run typecheck",
  "npm test -- --run",
  "npm run validate:content",
  "npm run check:architecture",
  "npm run build",
  "npm audit --audit-level=high",
]) {
  if (!workflow.includes(requiredSnippet)) {
    throw new Error(`CI is missing required check: ${requiredSnippet}`);
  }
}

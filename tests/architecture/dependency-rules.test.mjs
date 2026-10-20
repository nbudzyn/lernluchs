// @vitest-environment node
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import { cruise } from "dependency-cruiser";
import { expect, it } from "vitest";
const require = createRequire(import.meta.url);
const config = require("../../dependency-cruiser.cjs");

it("rejects forbidden dependencies for current and newly added verticals, including types and dynamic imports", async () => {
  const root = mkdtempSync(join(tmpdir(), "lernluchs-boundaries-"));
  const files = {
    "src/verticals/future/index.ts": "export type Item = string;",
    "src/verticals/future/internal.ts": "export const value = 1;",
    "src/verticals/topics/index.ts": "export const topic = 1;",
    "src/verticals/help/index.ts": "export const help = 1;",
    "src/app/target.ts": "export const app = 1;",
    "src/shared/target.ts": "export const id = 1; export type Id = string;",
    "tests/shared/target.ts": "export const fixture = 1;",
    "src/verticals/topics/view.tsx":
      'import {help} from "../help"; export const View = () => <p>{help}</p>;',
    "src/verticals/topics/cross.ts":
      'import {help} from "../help"; export {help};',
    "src/verticals/topics/types.ts": 'export type {Item} from "../future";',
    "src/verticals/topics/dynamic.ts":
      'export const load = () => import("../future");',
    "src/verticals/future/app.ts": 'export {app} from "../../app/target";',
    "src/shared/leak.ts": 'export {app} from "../app/target";',
    "src/app/private.ts": 'export {value} from "../verticals/future/internal";',
    "src/verticals/future/test.ts":
      'export {fixture} from "../../../tests/shared/target";',
    "tests/verticals/future/cross.ts":
      'export {topic} from "../../../src/verticals/topics";',
    "e2e/verticals/future/cross.ts":
      'export {topic} from "../../../src/verticals/topics";',
    "tests/shared/leak.ts": 'export {topic} from "../../src/verticals/topics";',
    "tests/app/private.ts":
      'export {value} from "../../src/verticals/future/internal";',
    "src/app/allowed.ts": 'export {topic} from "../verticals/topics";',
    "src/verticals/future/allowed.ts":
      'export {id} from "../../shared/target";',
    "tests/verticals/future/allowed.ts":
      'export {value} from "../../../src/verticals/future/internal";',
    "src/verticals/future/allowed-types.ts":
      'import type {Item} from "./index"; import type {Id} from "../../shared/target"; export type Data = {item: Item; id: Id};',
    "src/verticals/future/data.ts": "export const references = 1;",
    "tests/app/allowed-data.ts":
      'export {references} from "../../src/verticals/future/data";',
    "tests/app/allowed.ts": 'export {topic} from "../../src/verticals/topics";',
  };
  try {
    for (const [path, text] of Object.entries(files)) {
      mkdirSync(dirname(join(root, path)), { recursive: true });
      writeFileSync(join(root, path), text);
    }
    const { output } = await cruise(["src", "tests", "e2e"], {
      baseDir: root,
      outputType: "json",
      validate: true,
      ...config.options,
      ruleSet: { forbidden: config.forbidden },
    });
    const result = JSON.parse(output);
    const violations = new Set(result.summary.violations.map((v) => v.from));
    for (const path of Object.keys(files).filter(
      (path) =>
        !path.endsWith("target.ts") &&
        !path.endsWith("index.ts") &&
        !path.endsWith("internal.ts") &&
        path !== "src/verticals/future/data.ts",
    )) {
      expect.soft(violations.has(path), path).toBe(!path.includes("/allowed"));
    }
    expect(result.summary.totalCruised).toBe(Object.keys(files).length);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}, 30000);

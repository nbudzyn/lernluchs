// @vitest-environment node
import { expect, it } from "vitest";
import { staticModuleViolations } from "../../scripts/check-static-modules.mjs";
it("rejects hidden module discovery and executable strings without rejecting literal imports or ordinary text", () => {
  const forbidden = [
    'type Item = import("../future").Item;',
    'type Nested = { value: Promise<import("../future").Item> };',
    'import x = require("./internal");',
    'const moduleName = "./a"; import(moduleName);',
    'import("./" + name);',
    "import(`./${name}`);",
    'eval("code");',
    'const run = globalThis.eval; run("code");',
    'new Function("code");',
    'globalThis["Function"]("code");',
    'require("./a");',
    'import.meta.glob("./**/*.tsx");',
    "const {glob} = import.meta;",
  ];
  for (const source of forbidden)
    expect.soft(staticModuleViolations(source), source).not.toEqual([]);
  expect(
    staticModuleViolations('type Data = import("../other").Data;', "test.ts", {
      testTools: true,
    }),
  ).not.toEqual([]);
  expect(
    staticModuleViolations(
      'const files = import.meta.glob("./*.ts");',
      "test.ts",
      { testTools: true },
    ),
  ).toEqual([]);
  const allowed = [
    'import type {Item} from "./own"; import type {Id} from "../../shared/id"; type Data = {item: Item; id: Id};',
    "namespace A { export const item = 1; } import B = A;",
    'import {value} from "./a"; export {value};',
    'export type {Item} from "./a";',
    'import("./a");',
    "import(`./a`);",
    '// eval("code")\nconst label = "new Function and import.meta.glob";',
    "export const View = () => <p>Function and eval are words</p>;",
  ];
  for (const source of allowed)
    expect.soft(staticModuleViolations(source), source).toEqual([]);
});

/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

import ciWorkflow from "../../.github/workflows/ci.yml?raw";
import pagesWorkflow from "../../.github/workflows/pages.yml?raw";

describe("browser prerequisites in GitHub workflows", () => {
  it.each([
    {
      name: "CI",
      workflow: ciWorkflow,
      gate: "npm run --silent test:unit",
      browsers: "chromium firefox",
    },
    {
      name: "Pages",
      workflow: pagesWorkflow,
      gate: "npm run check",
      browsers: "chromium",
    },
  ])(
    "installs the required browsers once before the browser-dependent gate in $name",
    ({ name, workflow, gate, browsers }) => {
      const commands = Array.from(
        workflow.matchAll(/^\s+- run: ([^\r\n]+)$/gm),
        (match) => match[1],
      );
      const installation = `npx playwright install --with-deps ${browsers}`;
      const installIndex = commands.indexOf(installation);
      const gateIndex = commands.indexOf(gate);

      expect
        .soft(
          commands.filter((command) => command === installation),
          name,
        )
        .toHaveLength(1);
      expect
        .soft(gateIndex, name + ": test gate exists")
        .toBeGreaterThanOrEqual(0);
      expect
        .soft(installIndex, name + ": browser installed")
        .toBeGreaterThanOrEqual(0);
      expect
        .soft(installIndex, name + ": installation precedes tests")
        .toBeLessThan(gateIndex);
    },
  );
});

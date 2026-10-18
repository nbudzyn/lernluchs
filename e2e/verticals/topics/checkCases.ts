import { expect, test } from "@playwright/test";

// Each case restores its own browser state so one failed prerequisite does not
// prevent the remaining independent catalog entries from being checked.
export async function checkCases<T>(
  cases: readonly T[],
  name: (entry: T) => string,
  check: (entry: T) => Promise<void>,
) {
  const failures: string[] = [];
  for (const entry of cases) {
    try {
      await test.step(name(entry), () => check(entry));
    } catch (error) {
      failures.push(
        `${name(entry)}: ${error instanceof Error ? error.stack : String(error)}`,
      );
    }
  }
  expect(failures, "Independent catalog cases").toEqual([]);
}

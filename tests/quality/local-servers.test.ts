import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const fixture = vi.hoisted(() => ({
  directory: "tests/quality/fixtures/empty",
}));
vi.mock("vite", async (importOriginal) => {
  const actual = await importOriginal<typeof import("vite")>();
  return {
    ...actual,
    loadEnv: (mode: string, _directory: string, prefixes: string | string[]) =>
      actual.loadEnv(mode, fixture.directory, prefixes),
  };
});

beforeEach(() => {
  fixture.directory = "tests/quality/fixtures/empty";
  vi.resetModules();
  vi.stubEnv("LERNLUCHS_DEV_PORT", undefined);
  vi.stubEnv("LERNLUCHS_E2E_PORT", undefined);
});
afterEach(() => vi.unstubAllEnvs());

async function settings() {
  const vite = (await import("../../vite.config")).default;
  if (typeof vite !== "function")
    throw new Error("Vite config must be callable.");
  return {
    vite: vite({ command: "serve", mode: "development" }),
    playwright: (await import("../../playwright.config")).default,
  };
}

describe("local servers in independent worktrees", () => {
  it("keeps the existing default ports without local overrides", async () => {
    const config = await settings();
    expect.soft(config.vite.server?.port).toBe(5173);
    expect.soft(config.playwright.use?.baseURL).toBe("http://127.0.0.1:4173");
  });

  it("reads worktree-local env files while explicit shell values take precedence", async () => {
    fixture.directory = "tests/quality/fixtures/local-ports";

    const local = await settings();
    expect.soft(local.vite.server?.port).toBe(5274);
    expect.soft(local.playwright.use?.baseURL).toBe("http://127.0.0.1:4274");
    vi.stubEnv("LERNLUCHS_DEV_PORT", "5275");
    vi.stubEnv("LERNLUCHS_E2E_PORT", "4275");
    vi.resetModules();
    const shell = await settings();
    expect.soft(shell.vite.server?.port).toBe(5275);
    expect.soft(shell.playwright.use?.baseURL).toBe("http://127.0.0.1:4275");
  });

  it("accepts the full valid port range", async () => {
    for (const [dev, e2e] of [
      ["1", "65535"],
      ["65535", "1"],
    ]) {
      vi.stubEnv("LERNLUCHS_DEV_PORT", dev);
      vi.stubEnv("LERNLUCHS_E2E_PORT", e2e);
      vi.resetModules();
      const config = await settings();
      expect
        .soft(config.vite.server?.port, `dev port ${dev}`)
        .toBe(Number(dev));
      expect
        .soft(config.playwright.use?.baseURL, `e2e port ${e2e}`)
        .toBe(`http://127.0.0.1:${e2e}`);
    }
  });

  it("rejects invalid ports and collisions before starting servers", async () => {
    for (const name of ["LERNLUCHS_DEV_PORT", "LERNLUCHS_E2E_PORT"]) {
      for (const value of ["0", "65536", "4.5", "", " 5273", "-1", "abc"]) {
        vi.stubEnv(name, value);
        vi.resetModules();
        await expect
          .soft(
            settings().then(() => undefined),
            `${name}=${JSON.stringify(value)}`,
          )
          .rejects.toThrow(new RegExp(name));
      }
      vi.stubEnv(name, undefined);
    }
    vi.stubEnv("LERNLUCHS_DEV_PORT", "5273");
    vi.stubEnv("LERNLUCHS_E2E_PORT", "5273");
    vi.resetModules();
    await expect
      .soft(
        settings().then(() => undefined),
        "dev and E2E must not share a port",
      )
      .rejects.toThrow(/verschieden/);
  });

  it("uses the selected ports consistently for servers, navigation and stored preferences", async () => {
    vi.stubEnv("LERNLUCHS_DEV_PORT", "5273");
    vi.stubEnv("LERNLUCHS_E2E_PORT", "4273");
    const config = await settings();
    expect.soft(config.vite.server?.port).toBe(5273);
    expect.soft(config.playwright.use?.baseURL).toBe("http://127.0.0.1:4273");
    expect.soft(config.playwright.webServer).toMatchObject({
      command: expect.stringContaining("--port 4273"),
      url: "http://127.0.0.1:4273",
    });
    expect.soft(config.playwright.use?.storageState).toMatchObject({
      origins: [{ origin: "http://127.0.0.1:4273" }],
    });
  });

  it("owns its E2E server and refuses a silent port fallback", async () => {
    const config = await settings();
    expect.soft(config.vite.server?.strictPort).toBe(true);
    expect.soft(config.playwright.webServer).toMatchObject({
      command: expect.stringContaining("--strictPort"),
      reuseExistingServer: false,
    });
  });
});

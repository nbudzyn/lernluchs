import { defineConfig, devices } from "@playwright/test";
import { localServers } from "./local-servers";

const { e2ePort, e2eOrigin } = localServers();

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  reporter: "list",
  use: {
    baseURL: e2eOrigin,
    // Existing title workflows represent a returning user's explicit choice.
    storageState: {
      cookies: [],
      origins: [
        {
          origin: e2eOrigin,
          localStorage: [
            { name: "lernluchs.topic-list-view.v1", value: "topics" },
          ],
        },
      ],
    },
  },
  projects: [
    { name: "desktop-chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-chromium", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port ${e2ePort} --strictPort`,
    url: e2eOrigin,
    reuseExistingServer: false,
  },
});

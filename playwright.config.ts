import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    // Existing title workflows represent a returning user's explicit choice.
    storageState: {
      cookies: [],
      origins: [
        {
          origin: "http://127.0.0.1:4173",
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
    command: "node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4173",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
  },
});

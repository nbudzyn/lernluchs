import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const { PAGES_BASE_PATH: pagesBasePath } = loadEnv(mode, "", "");

  return {
    base: pagesBasePath || "/",
    plugins: [react()],
    test: {
      environment: "jsdom",
    },
  };
});

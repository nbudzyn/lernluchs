import { configDefaults, defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const { PAGES_BASE_PATH: pagesBasePath } = loadEnv(mode, "", "");

  return {
    base: pagesBasePath || "/",
    plugins: [react()],
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              // Redaktionelle Kataloge separat ausliefern; die 500-kB-Warngrenze bleibt aktiv.
              {
                name: "topics",
                test: /[\\/]verticals[\\/]topics[\\/]topics\.ts$/,
              },
              {
                name: "questions",
                test: /[\\/]verticals[\\/]learning-checks[\\/]\w+Questions\.(?:ts|json)$/,
                maxSize: 400_000,
              },
            ],
          },
        },
      },
    },
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
    },
  };
});

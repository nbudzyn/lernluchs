import { readFile } from "node:fs/promises";

const workflow = await readFile(
  new URL("../.github/workflows/pages.yml", import.meta.url),
  "utf8",
);

for (const requiredSnippet of [
  "branches: [main]",
  "workflow_dispatch:",
  "contents: read",
  "actions/configure-pages@983d7736d9b0ae728b81ab479565c72886d7745b",
  "id: pages",
  "npm run check",
  "PAGES_BASE_PATH: ${{ steps.pages.outputs.base_path }}",
  "npm run test:pages-build",
  "actions/upload-pages-artifact@7b1f4a764d45c48632c6b24a0339c27f5614fb0b",
  "path: dist",
  "needs: build",
  "pages: write",
  "id-token: write",
  "name: github-pages",
  "url: ${{ steps.deployment.outputs.page_url }}",
  "actions/deploy-pages@d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e",
]) {
  if (!workflow.includes(requiredSnippet)) {
    throw new Error(`Pages workflow is missing: ${requiredSnippet}`);
  }
}

import { readFile } from "node:fs/promises";
import { build } from "vite";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "/lernluchs/";
const normalizedPagesBasePath = pagesBasePath.endsWith("/")
  ? pagesBasePath
  : `${pagesBasePath}/`;
process.env.PAGES_BASE_PATH = pagesBasePath;

await build();

const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
if (!html.includes(`${normalizedPagesBasePath}assets/`)) {
  throw new Error(
    `The Pages build must reference assets below ${normalizedPagesBasePath}.`,
  );
}

import { readFile } from "node:fs/promises";
import { build } from "vite";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "/lernluchs/";
process.env.PAGES_BASE_PATH = pagesBasePath;

await build();

const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
if (!html.includes(`${pagesBasePath}assets/`)) {
  throw new Error(
    `The Pages build must reference assets below ${pagesBasePath}.`,
  );
}

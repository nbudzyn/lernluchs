import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

const builtIndex = new URL("../dist/index.html", import.meta.url);

await access(builtIndex, constants.R_OK);

const html = await readFile(builtIndex, "utf8");
if (!html.includes('<div id="root"></div>')) {
  throw new Error("The static build does not contain the application root.");
}

if (/https?:\/\//.test(html)) {
  throw new Error("The static entry must not load external runtime resources.");
}

import { parseSync } from "@swc/core";
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export function staticModuleViolations(
  source,
  filename = "module.tsx",
  { testTools = false } = {},
) {
  const ast = parseSync(source, {
    syntax: "typescript",
    tsx: filename.endsWith(".tsx"),
  });
  const errors = [];
  function visit(node, parent) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const item of node) visit(item, parent);
      return;
    }
    const report = (rule) =>
      errors.push(filename + ":" + (node.span?.start ?? 0) + ": " + rule);
    if (node.type === "TsImportType")
      report("Typimporte als statische import type-Deklaration schreiben");
    if (!testTools && node.type === "TsExternalModuleReference")
      report("Keine TypeScript-CommonJS-Modulverbindungen");
    if (
      !testTools &&
      node.type === "CallExpression" &&
      node.callee.type === "Import"
    ) {
      const argument = node.arguments[0]?.expression;
      if (!(
        argument?.type === "StringLiteral" ||
        (argument?.type === "TemplateLiteral" &&
          argument.expressions.length === 0)
      ))
        report("Modulimporte benötigen einen festen Pfad");
    }
    if (
      !testTools &&
      node.type === "Identifier" &&
      ["eval", "Function", "require"].includes(node.value)
    )
      report(
        "Keine ausführbaren Strings oder CommonJS-Modulverbindungen: " +
          node.value,
      );
    if (
      !testTools &&
      node.type === "MemberExpression" &&
      node.property.type === "Computed" &&
      node.property.expression.type === "StringLiteral" &&
      ["eval", "Function", "require"].includes(node.property.expression.value)
    )
      report(
        "Keine versteckten ausführbaren Strings oder CommonJS-Modulverbindungen",
      );
    if (
      !testTools &&
      node.type === "MetaProperty" &&
      node.kind === "import.meta" &&
      !(
        parent?.type === "MemberExpression" &&
        parent.object === node &&
        parent.property.type === "Identifier" &&
        parent.property.value === "env"
      )
    )
      report(
        "Keine Modulregistrierung über import.meta; nur import.meta.env ist erlaubt",
      );
    for (const [key, value] of Object.entries(node))
      if (key !== "span") visit(value, node);
  }
  visit(ast);
  return errors;
}

export function checkStaticModules(roots = ["src", "tests", "e2e"]) {
  const errors = [];
  function inspect(directory, testTools) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) inspect(path, testTools);
      else if (/\.[cm]?[jt]sx?$/.test(entry.name))
        errors.push(
          ...staticModuleViolations(readFileSync(path, "utf8"), path, {
            testTools,
          }),
        );
    }
  }
  for (const root of roots) inspect(root, root !== "src");
  return errors;
}
if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const errors = checkStaticModules();
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
  } else console.log("PASS statisch erkennbare Modulverbindungen; Exitcode 0");
}

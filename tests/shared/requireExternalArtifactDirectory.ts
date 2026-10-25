import * as path from "node:path";

export function requireExternalArtifactDirectory(
  target: string | undefined,
  repositoryRoot = path.resolve("."),
  paths: Pick<
    typeof path,
    "resolve" | "relative" | "isAbsolute" | "sep"
  > = path,
) {
  if (!target || !paths.isAbsolute(target))
    throw new Error(
      "An absolute artifact directory outside the repository is required",
    );
  const destination = paths.resolve(target);
  const relation = paths.relative(repositoryRoot, destination);
  if (
    relation !== ".." &&
    !relation.startsWith(`..${paths.sep}`) &&
    !paths.isAbsolute(relation)
  )
    throw new Error("Artifacts must remain outside the repository");
  return destination;
}

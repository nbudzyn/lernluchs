// @vitest-environment node
import { posix, win32 } from "node:path";
import { expect, it } from "vitest";
import { requireExternalArtifactDirectory } from "./requireExternalArtifactDirectory";

it.each([
  {
    name: "POSIX",
    paths: posix,
    root: "/workspace/repo",
    otherDrive: undefined,
  },
  {
    name: "Windows",
    paths: win32,
    root: "C:\\workspace\\repo",
    otherDrive: "D:\\reports",
  },
])(
  "keeps artifacts outside the repository with $name path rules",
  ({ paths, root, otherDrive }) => {
    for (const target of [
      undefined,
      "relative",
      root,
      paths.join(root, "reports"),
      paths.join(root, "..reports"),
    ])
      expect
        .soft(
          () => requireExternalArtifactDirectory(target, root, paths),
          String(target),
        )
        .toThrow();
    for (const target of [
      paths.resolve(root, ".."),
      paths.resolve(root, "..", "reports"),
      ...(otherDrive ? [otherDrive] : []),
    ])
      expect
        .soft(requireExternalArtifactDirectory(target, root, paths), target)
        .toBe(paths.resolve(target));
  },
);

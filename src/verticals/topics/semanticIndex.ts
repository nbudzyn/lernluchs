import { searchDescriptions } from "./searchDescriptions";
import manifest from "./semanticModel.json";
import type { TopicSearchEntry } from "./semanticSearch";

export function readSemanticIndex(value: unknown): TopicSearchEntry[] {
  const fail = () => {
    throw new Error("Incompatible local topic index");
  };
  if (!value || typeof value !== "object") return fail();
  const index = value as { revision?: unknown; entries?: unknown };
  if (index.revision !== manifest.revision || !Array.isArray(index.entries))
    return fail();
  const entries = index.entries as TopicSearchEntry[];
  const ids = new Set(Object.keys(searchDescriptions));
  const dimensions = entries[0]?.vector?.length;
  if (!dimensions || entries.length !== ids.size) return fail();
  for (const entry of entries) {
    if (
      !entry ||
      !ids.delete(entry.id) ||
      entry.text !== `passage: ${searchDescriptions[entry.id]}` ||
      !Array.isArray(entry.vector) ||
      entry.vector.length !== dimensions ||
      !entry.vector.every(Number.isFinite) ||
      Math.hypot(...entry.vector) === 0
    )
      return fail();
  }
  return entries;
}

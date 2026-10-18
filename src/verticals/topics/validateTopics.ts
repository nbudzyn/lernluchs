import type { Topics, TopicSource, TopicValidation } from "./topicContract";

import { isEditorialDate, parseDuration } from "./topicFormats";
import { topicSections } from "./topicSections";
const sourceTypes = new Set([
  "official-publication",
  "official-guide",
  "reference-site",
  "conference-paper",
  "repository",
  "audio-summary",
  "learning-video",
]);

function validMedia(source: TopicSource): boolean {
  if (!["text", "audio", "video"].includes(source.mediaType)) return false;
  if (source.type === "learning-video" && source.mediaType !== "video")
    return false;
  if (source.mediaType === "video" && !source.duration) return false;
  const duration =
    source.duration === undefined ? null : parseDuration(source.duration);
  if (
    source.duration !== undefined &&
    (source.mediaType === "text" || duration === null || duration <= 0)
  )
    return false;
  const segment = source.learningSegment;
  const start = segment && parseDuration(segment.start);
  const end = segment && parseDuration(segment.end);
  return (
    segment === undefined ||
    (source.mediaType === "video" &&
      duration !== null &&
      start != null &&
      end != null &&
      start < end &&
      end <= duration)
  );
}

function sourceIdentity(source: TopicSource): string {
  try {
    const url = new URL(source.url);
    if (source.mediaType === "video" && url.hostname === "www.youtube.com") {
      return `youtube:${url.searchParams.get("v") ?? source.url}`;
    }
  } catch {
    /* Invalid URLs are handled by source validation. */
  }
  return source.url;
}
const editorialStatuses = new Set([
  "active",
  "watching",
  "archived",
  "replaced",
]);

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

export function validateTopics(candidate: Topics): TopicValidation {
  const seenIds = new Set<string>();
  const errors: string[] = [];

  for (const item of candidate.items) {
    if (seenIds.has(item.id)) {
      errors.push(`Duplicate item ID: ${item.id}`);
    }
    seenIds.add(item.id);

    if (
      !hasText(item.title) ||
      typeof item.everydayAnchor !== "string" ||
      !hasText(item.everydayAnchor) ||
      topicSections.some(({ key }) => !hasText(item.content[key]))
    ) {
      errors.push(`Incomplete topic: ${item.id}`);
    }

    if (
      !isEditorialDate(item.editorial.publishedAt) ||
      !isEditorialDate(item.editorial.reviewedAt) ||
      !isEditorialDate(item.editorial.reviewDueAt) ||
      !editorialStatuses.has(item.editorial.status)
    ) {
      errors.push(`Invalid editorial metadata for item: ${item.id}`);
    }

    if (!item.sources.some((source) => source.origin === "primary")) {
      errors.push(`Missing primary source for item: ${item.id}`);
    }
    if (item.sources.length > 20) {
      errors.push(`Too many sources for item: ${item.id}`);
    }

    const seenSources = new Set<string>();
    for (const source of item.sources) {
      const identity = sourceIdentity(source);
      if (seenSources.has(identity))
        errors.push(`Duplicate source for item: ${item.id}`);
      seenSources.add(identity);
      if (
        !hasText(source.title) ||
        !isHttpsUrl(source.url) ||
        !sourceTypes.has(source.type) ||
        !validMedia(source) ||
        !["primary", "secondary"].includes(source.origin) ||
        !["de", "en"].includes(source.language) ||
        !isEditorialDate(source.checkedAt)
      ) {
        errors.push(`Invalid source for item: ${item.id}`);
      }
    }
  }

  const seenPathIds = new Set<string>();
  for (const path of candidate.paths ?? []) {
    if (
      typeof path.id !== "string" ||
      !hasText(path.id) ||
      seenPathIds.has(path.id)
    ) {
      errors.push(`Invalid learning path ID: ${path.name}`);
    }
    seenPathIds.add(path.id);
    if (path.topicIds.length === 0) {
      errors.push(`Empty learning path: ${path.name}`);
    }
    for (const id of path.topicIds) {
      if (!seenIds.has(id)) {
        errors.push(`Unknown topic ID in learning path ${path.name}: ${id}`);
      }
    }
  }

  return { valid: errors.length === 0, errors };
}

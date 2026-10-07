import type { Topics, TopicSource, TopicValidation } from "./topicContract";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const durationPattern = /^(?:\d+:)?\d{1,2}:[0-5]\d$/;
const sourceTypes = new Set([
  "official-publication",
  "official-guide",
  "reference-site",
  "conference-paper",
  "repository",
  "audio-summary",
  "learning-video",
]);

function seconds(duration: string): number {
  return duration
    .split(":")
    .reduce((total, part) => total * 60 + Number(part), 0);
}

function validMedia(source: TopicSource): boolean {
  if (!["text", "audio", "video"].includes(source.mediaType)) return false;
  if (source.type === "learning-video" && source.mediaType !== "video")
    return false;
  if (source.mediaType === "video" && !source.duration) return false;
  if (
    source.duration !== undefined &&
    (source.mediaType === "text" ||
      !durationPattern.test(source.duration) ||
      seconds(source.duration) <= 0)
  )
    return false;
  const segment = source.learningSegment;
  return (
    segment === undefined ||
    (source.mediaType === "video" &&
      source.duration !== undefined &&
      durationPattern.test(segment.start) &&
      durationPattern.test(segment.end) &&
      seconds(segment.start) < seconds(segment.end) &&
      seconds(segment.end) <= seconds(source.duration))
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
      !hasText(item.content.problem) ||
      !hasText(item.content.coreConcept) ||
      !hasText(item.content.javaWebUse) ||
      !hasText(item.content.boundary)
    ) {
      errors.push(`Incomplete topic: ${item.id}`);
    }

    if (
      !datePattern.test(item.editorial.publishedAt) ||
      !datePattern.test(item.editorial.reviewedAt) ||
      !datePattern.test(item.editorial.reviewDueAt) ||
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
        !source.url.startsWith("https://") ||
        !sourceTypes.has(source.type) ||
        !validMedia(source) ||
        !["primary", "secondary"].includes(source.origin) ||
        !["de", "en"].includes(source.language) ||
        !datePattern.test(source.checkedAt)
      ) {
        errors.push(`Invalid source for item: ${item.id}`);
      }
    }
  }

  for (const path of candidate.paths ?? []) {
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

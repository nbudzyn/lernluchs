export type TopicVector = { id: string; vector: number[] };
export type TopicSearchEntry = TopicVector & { text: string };

export function meanPool(
  tokens: ArrayLike<number>,
  attentionMask: readonly number[],
  dimensions: number,
) {
  const pooled = Array.from({ length: dimensions }, () => 0);
  const count = attentionMask.reduce((sum, value) => sum + value, 0);
  for (let token = 0; token < attentionMask.length; token += 1) {
    for (let dimension = 0; dimension < dimensions; dimension += 1) {
      pooled[dimension] +=
        (tokens[token * dimensions + dimension] * attentionMask[token]) / count;
    }
  }
  return unitVector(pooled, dimensions);
}

function unitVector(vector: readonly number[], dimensions: number) {
  const length = Math.hypot(...vector);
  if (
    vector.length !== dimensions ||
    !vector.every(Number.isFinite) ||
    !Number.isFinite(length) ||
    length === 0
  ) {
    throw new Error("Invalid topic embedding");
  }
  return vector.map((value) => value / length);
}

export function matchingTopicIds(
  query: readonly number[],
  entries: readonly TopicVector[],
  minimumSimilarity: number,
) {
  const matches = topicSimilarities(query, entries).filter(
    ({ similarity }) => similarity >= minimumSimilarity,
  );
  return [...new Set(matches.map(({ id }) => id))];
}

function topicSimilarities(
  query: readonly number[],
  entries: readonly TopicVector[],
) {
  const normalized = unitVector(query, query.length);
  return entries.map(({ id, vector }) => {
    const candidate = unitVector(vector, query.length);
    const similarity = candidate.reduce(
      (sum, value, index) => sum + value * normalized[index],
      0,
    );
    return { id, similarity };
  });
}

// A single cutoff applies to each topic independently. No rank or top-k cutoff.
// Cutoffs frozen on the original calibration set, before independent validation.
export const semanticCutoffs = { sentence: 0.785, keyword: 0.768 } as const;

export async function searchSemanticTopics(
  query: string,
  entries: readonly TopicVector[],
  embed: (text: string) => Promise<number[]>,
  minimumSimilarity?: number,
) {
  const keyword = query.trim().split(/\s+/).length === 1;
  const text = keyword ? `Ich suche Informationen zum Thema ${query}.` : query;
  const cutoff =
    minimumSimilarity ??
    (keyword ? semanticCutoffs.keyword : semanticCutoffs.sentence);
  return matchingTopicIds(await embed(`query: ${text}`), entries, cutoff);
}

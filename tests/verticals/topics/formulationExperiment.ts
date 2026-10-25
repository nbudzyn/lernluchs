export type FormulationMeasurement = {
  id: string;
  split: string;
  relevant: boolean;
  score: number;
  rank: number;
};

function summarize(rows: readonly FormulationMeasurement[], threshold: number) {
  const positive = rows.filter(({ relevant }) => relevant);
  const negative = rows.filter(({ relevant }) => !relevant);
  if (!positive.length || !negative.length)
    throw new Error("Both labels required");
  const wins = positive.reduce(
    (sum, candidate) =>
      sum +
      negative.reduce(
        (pairs, other) =>
          pairs +
          (candidate.score > other.score
            ? 1
            : candidate.score === other.score
              ? 0.5
              : 0),
        0,
      ),
    0,
  );
  const ranks = positive.map(({ rank }) => rank).sort((a, b) => a - b);
  const middle = Math.floor(ranks.length / 2);
  return {
    auc: wins / (positive.length * negative.length),
    positiveCount: positive.length,
    negativeCount: negative.length,
    missed: positive.filter(({ score }) => score < threshold).length,
    extra: negative.filter(({ score }) => score >= threshold).length,
    medianPositiveRank:
      ranks.length % 2
        ? ranks[middle]
        : (ranks[middle - 1] + ranks[middle]) / 2,
    positivesInFirstFive: positive.filter(({ rank }) => rank <= 5).length,
    weakestPositive: Math.min(...positive.map(({ score }) => score)),
    strongestNegative: Math.max(...negative.map(({ score }) => score)),
  };
}

export function summarizeFormulation(rows: readonly FormulationMeasurement[]) {
  if (
    !rows.every(
      ({ score, rank }) => Number.isFinite(score) && Number.isFinite(rank),
    )
  )
    throw new Error("Invalid measurement");
  const calibration = rows.filter(({ split }) => split === "calibration");
  const validation = rows.filter(({ split }) => split === "validation");
  const threshold = Math.min(
    ...calibration.filter(({ relevant }) => relevant).map(({ score }) => score),
  );
  // Descriptive hindsight only; this boundary uses validation labels as well.
  const completeRecallThreshold = Math.min(
    ...rows.filter(({ relevant }) => relevant).map(({ score }) => score),
  );
  return {
    threshold,
    calibration: summarize(calibration, threshold),
    validation: summarize(validation, threshold),
    all: summarize(rows, threshold),
    completeRecall: {
      threshold: completeRecallThreshold,
      ...summarize(rows, completeRecallThreshold),
    },
  };
}

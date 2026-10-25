import { expect, it } from "vitest";
import { summarizeFormulation } from "./formulationExperiment";
import { aggregateFormulations } from "./randomFormulationReport";

it("distinguishes per-topic separation from pooled separation and a shared calibration boundary", () => {
  const topics = [
    { id: "a", positive: 0.9, negative: 0.8 },
    { id: "b", positive: 0.6, negative: 0.5 },
  ].map(({ id, positive, negative }) => {
    const measurements = ["calibration", "validation"].flatMap((split) => [
      {
        id: `${split}-positive`,
        split,
        relevant: true,
        score: positive,
        rank: 1,
        query: "Positive",
        reason: "Fixture",
      },
      {
        id: `${split}-negative`,
        split,
        relevant: false,
        score: negative,
        rank: 2,
        query: "Negative",
        reason: "Fixture",
      },
    ]);
    return {
      id,
      title: id,
      cases: measurements,
      rows: [
        {
          id: "form",
          label: "Form",
          texts: ["text"],
          summary: summarizeFormulation(measurements),
          measurements,
        },
      ],
    };
  });
  const [result] = aggregateFormulations(topics);
  expect(result.meanAuc).toBe(1);
  expect(result.summary.all.auc).toBe(0.75);
  expect(result.perTopicCompleteRecallExtras).toBe(0);
  expect(result.summary.threshold).toBe(0.6);
  expect(result.summary.validation).toMatchObject({
    positiveCount: 2,
    negativeCount: 2,
    missed: 0,
    extra: 1,
  });
});

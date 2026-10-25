import { expect, it } from "vitest";
import { summarizeFormulation } from "./formulationExperiment";
import { formulationReportHtml } from "./formulationReport";

it("measures separation independently of the threshold and freezes the recall-first calibration boundary", () => {
  const result = summarizeFormulation([
    { id: "c1", split: "calibration", relevant: true, score: 0.9, rank: 1 },
    { id: "c2", split: "calibration", relevant: true, score: 0.6, rank: 3 },
    { id: "c3", split: "calibration", relevant: false, score: 0.7, rank: 2 },
    { id: "c4", split: "calibration", relevant: false, score: 0.2, rank: 40 },
    { id: "v1", split: "validation", relevant: true, score: 0.55, rank: 10 },
    { id: "v2", split: "validation", relevant: true, score: 0.85, rank: 1 },
    { id: "v3", split: "validation", relevant: false, score: 0.61, rank: 7 },
    { id: "v4", split: "validation", relevant: false, score: 0.3, rank: 30 },
  ]);
  expect(result.threshold).toBe(0.6);
  expect(result.calibration).toMatchObject({
    auc: 0.75,
    missed: 0,
    extra: 1,
    positiveCount: 2,
    negativeCount: 2,
  });
  expect(result.validation).toMatchObject({
    auc: 0.75,
    missed: 1,
    extra: 1,
    positiveCount: 2,
    negativeCount: 2,
  });
  expect(result.completeRecall).toMatchObject({
    threshold: 0.55,
    missed: 0,
    extra: 2,
  });
});

it("gives tied scores half credit instead of inventing discrimination", () => {
  const rows = ["calibration", "validation"].flatMap((split) => [
    { id: `${split}-p`, split, relevant: true, score: 0.8, rank: 1 },
    { id: `${split}-n`, split, relevant: false, score: 0.8, rank: 1 },
  ]);
  expect(summarizeFormulation(rows).all).toMatchObject({
    auc: 0.5,
    missed: 0,
    extra: 2,
  });
});

it("labels a new topic report with its own topic and isolated authorship", () => {
  const html = formulationReportHtml([], [], "fixed-model", "fixed-revision", {
    topicTitle: "Fachsprache vereinheitlichen",
    contextNote: "Vier zufällig gezogene Themen werden gemeinsam ersetzt.",
    blindAuthorship: true,
  });
  expect(html.includes("Ein Thema: Fachsprache vereinheitlichen.")).toBe(true);
  expect(html.includes("Suchtextautor kannte die Testfragen nicht")).toBe(true);
  expect(html.includes("0 Varianten, 0 unabhängig beschriftete")).toBe(true);
  expect(html.includes("Ein Thema: Verhalten von Legacy-Code")).toBe(false);
});

import type { summarizeFormulation } from "./formulationExperiment";

export type FormulationCase = {
  id: string;
  split: string;
  relevant: boolean;
  query: string;
  reason: string;
};

export type FormulationRow = {
  id: string;
  label: string;
  texts: readonly string[];
  summary: ReturnType<typeof summarizeFormulation>;
  measurements: { id: string; score: number; rank: number }[];
};

function escape(value: unknown) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ]!,
  );
}

export function formulationReportHtml(
  rows: readonly FormulationRow[],
  cases: readonly FormulationCase[],
  modelId: string,
  revision: string,
  options: {
    topicTitle?: string;
    contextNote?: string;
    blindAuthorship?: boolean;
  } = {},
) {
  const percent = (value: number) => (value * 100).toFixed(0);
  const topicTitle =
    options.topicTitle ??
    "Verhalten von Legacy-Code ermitteln und die Neuentwicklung verlässlich testen";
  const context =
    options.contextNote ??
    "Sein Rang wird zusätzlich gegenüber den anderen 47 unveränderten Themen gemessen.";
  const recallTable = `<h2>Rückblick: alle zehn passenden Fragen behalten</h2><p>Erst nach der Messung ergänzt. Die Grenze wird hier aus <strong>allen zehn positiven Fällen einschließlich Validierung</strong> abgeleitet. Das beschreibt den Zielkonflikt in diesem Fragensatz; es ist keine Vorhersage für neue Fragen und keine unabhängige Validierung. Die ursprüngliche Kalibrierung oben bleibt unverändert.</p><table><thead><tr><th>Variante</th><th>Fehlende /10</th><th>Zusätzliche /10</th><th>Grenze</th></tr></thead><tbody>${rows.map((row) => `<tr><td>${escape(row.label)}</td><td>${row.summary.completeRecall.missed}</td><td>${row.summary.completeRecall.extra}</td><td>${row.summary.completeRecall.threshold.toFixed(4)}</td></tr>`).join("")}</tbody></table>`;
  return `<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Suchtextvergleich – ${escape(topicTitle)}</title>
<style>body{font:16px/1.55 system-ui,sans-serif;max-width:1500px;margin:40px auto;padding:0 24px;color:#172b3a;background:#f6f8fa}h1,h2{line-height:1.2}a{color:#005a9c}table{border-collapse:collapse;width:100%;background:white;margin:20px 0}th,td{padding:12px;border:1px solid #c8d2dc;text-align:left;vertical-align:top}th{background:#e3edf4}td:not(:first-child){font-variant-numeric:tabular-nums}.scroll{overflow:auto}.text{max-width:850px;white-space:pre-wrap}small{color:#43586b}.positive{color:#086332}.negative{color:#9c3030}code{overflow-wrap:anywhere}details{margin:16px 0}summary{cursor:pointer;font-weight:600}</style>
<h1>Welche Suchtexte findet E5-base?</h1><p>25.10.2026 · Ein Thema: ${escape(topicTitle)}.</p>
<p><strong>Explorativer Vergleich, keine Produktabnahme.</strong> ${rows.length} Varianten, ${cases.length} unabhängig beschriftete deutsche Fragen. Je Split fünf passende und fünf unpassende Fragen. Negative enthalten Nachbarthemen. Vorhandener lokaler E5-base-q8-Encoder; keine lexikalischen Boni oder bisherigen Filterregeln. Ein Thema wird hier binär gegen die Fragen bewertet. ${escape(context)}</p>
<p><strong>Trennscore:</strong> AUROC × 100 über alle 20 Fälle. 100 = jedes passende/unpassende Fragenpaar korrekt geordnet; 50 = Zufallsniveau. Kein Wahrscheinlichkeitswert. <strong>Grenze:</strong> schwächster positiver Kalibrierungsfall, danach unverändert auf die Validierung angewandt. Ein niedrigerer Trennscore ist bei wenigen fehlenden Themen gegebenenfalls vertretbar; die Spalten zeigen beide Fehlerarten. Die Varianten wurden nicht nach den Messergebnissen überarbeitet.</p>
<p><strong>Modell:</strong> ${escape(modelId)} · <code>${escape(revision)}</code> · CPU/WASM, ein Thread, Attention-Mask-Mean-Pooling, L2-Normierung, höchstens 512 Tokens, Präfixe query:/passage:. Fragen und Texte stehen unten vollständig.</p>
<h2>Vergleich</h2><div class="scroll"><table><thead><tr><th>Variante / vollständiger Text</th><th>Trennscore /100<br>alle 20</th><th>AUROC Kal./Val. /100</th><th>Fehlende relevante<br>Validierung /5</th><th>Zusätzliche unpassende<br>Validierung /5</th><th>Grenze</th><th>Median Rang<br>positive Fragen /48</th><th>Positive unter ersten 5<br>alle /10</th></tr></thead><tbody>${rows.map((row) => `<tr><td><a href="#${escape(row.id)}">${escape(row.label)}</a>${row.texts.map((text) => `<p class="text">${escape(text)}</p>`).join("")}</td><td>${percent(row.summary.all.auc)}</td><td>${percent(row.summary.calibration.auc)} / ${percent(row.summary.validation.auc)}</td><td>${row.summary.validation.missed}</td><td>${row.summary.validation.extra}</td><td>${row.summary.threshold.toFixed(4)}</td><td>${row.summary.all.medianPositiveRank}</td><td>${row.summary.all.positivesInFirstFive}</td></tr>`).join("")}</tbody></table></div>
<h2>Fragen und fachliche Erwartungen</h2><table><thead><tr><th>ID / Gruppe</th><th>Eingabe</th><th>Erwartung für dieses Thema</th></tr></thead><tbody>${cases.map((sample) => `<tr><td>${escape(sample.id)}<br>${escape(sample.split)}</td><td>${escape(sample.query)}</td><td class="${sample.relevant ? "positive" : "negative"}">${sample.relevant ? "Behalten" : "Ausfiltern"}<br><small>${escape(sample.reason)}</small></td></tr>`).join("")}</tbody></table>
<h2>Einzelmesswerte</h2>${rows.map((row) => `<details id="${escape(row.id)}"><summary>${escape(row.label)}</summary><table><thead><tr><th>Frage</th><th>Kosinusähnlichkeit</th><th>Rang /48</th><th>Auswahl bei kalibrierter Grenze</th></tr></thead><tbody>${row.measurements.map((measurement) => `<tr><td>${escape(measurement.id)}</td><td>${measurement.score.toFixed(6)}</td><td>${measurement.rank}</td><td>${measurement.score >= row.summary.threshold ? "Behalten" : "Ausfiltern"}</td></tr>`).join("")}</tbody></table></details>`).join("")}
${recallTable}<p>Die zehn Validierungsfälle bleiben von der ursprünglichen Grenzbestimmung getrennt. Da ihre Ergebnisse nun zur Variantenwahl vorliegen, sind sie nach diesem Versuch Entwicklungsdaten. ${options.blindAuthorship ? "Suchtextautor kannte die Testfragen nicht; ein zweiter isolierter Autor erstellte die Fragen ohne Kenntnis der Suchtexte. Beide Dateien wurden vor der Inferenz eingefroren." : "Der Formulierungsautor kannte die Fragen vor der Messung; dies ist keine strikt verblindete Studie."} Für die spätere Produktabnahme sind neue unabhängige Fragen erforderlich. Ein Thema und 20 Fragen belegen keine allgemein beste Textform für alle Themen. ${rows.some(({ id }) => id.endsWith("-en")) ? "Bei den englischen Varianten bleibt der übrige Katalog deutsch; der Rangvergleich ist deshalb kein fairer Test eines vollständig englischen Index." : ""}</p></html>`;
}

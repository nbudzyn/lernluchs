import { summarizeFormulation } from "./formulationExperiment";
import type { FormulationMeasurement } from "./formulationExperiment";
import type { FormulationCase, FormulationRow } from "./formulationReport";

export type RandomFormulationRow = Omit<FormulationRow, "measurements"> & {
  measurements: (FormulationMeasurement & FormulationCase)[];
};
export type RandomTopicResult = {
  id: string;
  title: string;
  cases: FormulationCase[];
  rows: RandomFormulationRow[];
};

export function aggregateFormulations(topics: readonly RandomTopicResult[]) {
  return topics[0].rows.map(({ id, label }) => {
    const rows = topics.map((topic) =>
      topic.rows.find((row) => row.id === id)!,
    );
    return {
      id,
      label,
      meanAuc:
        rows.reduce((sum, row) => sum + row.summary.all.auc, 0) / rows.length,
      perTopicCompleteRecallExtras: rows.reduce(
        (sum, row) => sum + row.summary.completeRecall.extra,
        0,
      ),
      summary: summarizeFormulation(
        topics.flatMap((topic) =>
          topic.rows
            .find((row) => row.id === id)!
            .measurements.map((measurement) => ({
              ...measurement,
              id: `${topic.id}:${measurement.id}`,
            })),
        ),
      ),
    };
  });
}

function escape(value: unknown) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ]!,
  );
}

export function randomFormulationReportHtml(
  topics: readonly RandomTopicResult[],
  modelId: string,
  revision: string,
) {
  const aggregates = aggregateFormulations(topics);
  const score = (value: number) => (value * 100).toFixed(1);
  const perTopicRecallTable = `<h2>Rückblick mit einer eigenen Grenze je Thema</h2><p>Für einen direkten Vergleich mit dem ursprünglichen Einzelthemenversuch wird pro Thema/Form eine eigene Grenze bestimmt, die alle zehn bekannten positiven Fälle behält. Auch diese Grenzen verwenden Validierungslabels und sind keine unabhängige Validierung. Das Ergebnis unterscheidet sich von der gemeinsamen Grenze oben, weil Themen unterschiedliche Ähnlichkeitsskalen haben.</p><table><thead><tr><th>Form</th><th>Fehlende /40</th><th>Zusätzliche /40, vier eigene Grenzen</th></tr></thead><tbody>${aggregates.map((row) => `<tr><td>${escape(row.label)}</td><td>0</td><td>${row.perTopicCompleteRecallExtras}</td></tr>`).join("")}</tbody></table>`;
  return `<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Suchtextvergleich – vier zufällige Themen</title>
<style>body{font:16px/1.55 system-ui,sans-serif;max-width:1300px;margin:36px auto;padding:0 24px;color:#172b3a;background:#f6f8fa}h1,h2{line-height:1.2}a{color:#005a9c}table{border-collapse:collapse;width:100%;background:white;margin:20px 0}th,td{padding:12px;border:1px solid #c8d2dc;text-align:left;vertical-align:top}th{background:#e3edf4}td{font-variant-numeric:tabular-nums}.scroll{overflow:auto}code{overflow-wrap:anywhere}small{color:#43586b}</style>
<h1>Suchtextformen auf vier zufälligen Themen</h1><p>25.10.2026 · Drei übertragene Formen und bisheriger Text als Kontrolle · 80 Fragen · 320 Frage/Form-Messwerte.</p>
<p><strong>Explorativer Vergleich mit getrennten Autoren:</strong> Ein Subagent mit frischem Kontext schrieb ausschließlich Suchtexte aus den vorhandenen Themeninhalten. Ein zweiter schrieb ausschließlich die Testfragen aus derselben Themenvorlage. Kein Autor kannte die Datei des jeweils anderen. Beide Dateien wurden vor Modellmessung eingefroren und per SHA256 geprüft. Keine nachträgliche Anpassung der Texte oder Labels.</p>
<p>Vier Themen gleichverteilt ohne Zurücklegen aus 47 Themen gezogen; das zuvor untersuchte Legacy-Thema ausgeschlossen. Die Zufallsauswahl wurde vor der Texterstellung gespeichert. Je Thema zehn passende und zehn unpassende Fragen, davon je fünf pro Split. Negative enthalten ähnliche Nachbarthemen. Eine Frage darf teilweise relevant sein, ohne dass das Thema das ganze Anliegen beantwortet.</p>
<p><strong>Modell:</strong> ${escape(modelId)} · <code>${escape(revision)}</code>. CPU/WASM, ein Thread, query:/passage:, Mean-Pooling und L2-Normierung wie zuvor. Keine lexikalischen Boni oder Queryzerlegung. Für jede Form werden alle vier gezogenen Themen gemeinsam ersetzt; die übrigen 44 bleiben unverändert. Frageform: vier vorab berechnete Vektoren, höchster Ähnlichkeitswert pro Thema. Es gibt weiterhin 48 Themen.</p>
<h2>Gezogene Themen und vollständige Texttabellen</h2><ol>${topics.map((topic) => `<li><a href="${escape(topic.id)}.html">${escape(topic.title)}</a></li>`).join("")}</ol>
<h2>Gesamtergebnis je Form</h2><p>Trennscore = AUROC × 100: 100 bedeutet korrekte Reihenfolge aller passenden/unpassenden Paare, 50 Zufallsniveau; keine Trefferwahrscheinlichkeit. Der Mittelwert gewichtet alle vier Themen gleich. Die gemeinsame Grenze wird pro Form am schwächsten der 20 positiven Kalibrierungsfälle festgelegt und unverändert auf die 40 Validierungsfälle angewandt.</p>
<div class="scroll"><table><thead><tr><th>Form</th><th>Mittlerer Trennscore /100</th><th>Gepoolter Trennscore /100</th><th>Fehlende passende<br>Validierung /20</th><th>Zusätzliche unpassende<br>Validierung /20</th><th>Gemeinsame Grenze</th><th>Median positiver Rang /48<br>alle 40</th><th>Positive unter ersten 5<br>alle /40</th></tr></thead><tbody>${aggregates.map((row) => `<tr><td>${escape(row.label)}</td><td>${score(row.meanAuc)}</td><td>${score(row.summary.all.auc)}</td><td>${row.summary.validation.missed}</td><td>${row.summary.validation.extra}</td><td>${row.summary.threshold.toFixed(4)}</td><td>${row.summary.all.medianPositiveRank}</td><td>${row.summary.all.positivesInFirstFive}</td></tr>`).join("")}</tbody></table></div>
<h2>Ergebnis je Thema</h2><p>Hier wird die Grenze je Thema/Form aus dessen fünf positiven Kalibrierungsfällen festgelegt. Diese Grenze kann von der gemeinsamen Grenze oben abweichen.</p><div class="scroll"><table><thead><tr><th>Thema</th><th>Form</th><th>Trennscore /100</th><th>Kal./Val. /100</th><th>Fehlende /5<br>Validierung</th><th>Zusätzliche /5<br>Validierung</th><th>Median positiver Rang</th><th>Positive unter ersten 5 /10</th></tr></thead><tbody>${topics.flatMap((topic) => topic.rows.map((row) => `<tr><td><a href="${escape(topic.id)}.html">${escape(topic.title)}</a></td><td>${escape(row.label)}</td><td>${score(row.summary.all.auc)}</td><td>${score(row.summary.calibration.auc)} / ${score(row.summary.validation.auc)}</td><td>${row.summary.validation.missed}</td><td>${row.summary.validation.extra}</td><td>${row.summary.all.medianPositiveRank}</td><td>${row.summary.all.positivesInFirstFive}</td></tr>`)).join("")}</tbody></table></div>
<h2>Rückblick: alle 40 passenden Fälle behalten</h2><p><strong>Keine unabhängige Validierung:</strong> Diese zusätzliche Grenze wird anhand aller positiven Fälle einschließlich Validierung bestimmt. Sie beschreibt nur den beobachteten Zielkonflikt dieses Datensatzes. Keine Garantie für neue Fragen.</p><table><thead><tr><th>Form</th><th>Fehlende /40</th><th>Zusätzliche /40</th><th>Gemeinsame Grenze</th></tr></thead><tbody>${aggregates.map((row) => `<tr><td>${escape(row.label)}</td><td>${row.summary.completeRecall.missed}</td><td>${row.summary.completeRecall.extra}</td><td>${row.summary.completeRecall.threshold.toFixed(4)}</td></tr>`).join("")}</tbody></table>
${perTopicRecallTable}<p>Die Produktumsetzung bleibt angehalten. Vier zufällige Themen und 80 synthetische Fragen belegen keine allgemeine Zuverlässigkeit für den ganzen Katalog. Der Vergleich misst sowohl Textform als auch bei der Frageform mehrere Vektoren statt eines einzelnen. Die übrigen 44 Themen verwenden weiterhin die bisherige Repräsentation.</p>
<p>Datengrundlage: <a href="selection.json">Zufallsauswahl</a> · <a href="candidate-texts.json">Suchtexte</a> · <a href="search-cases.json">Fragen und Labels</a> · <a href="frozen-inputs.json">Prüfsummen vor Inferenz</a> · <a href="measurements.json">Messwerte und Auswertung</a></p></html>`;
}

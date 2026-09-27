# Begriffe und Vertikale „Themen“ vereinheitlichen

## Ziel und Umfang

Lernende sehen die Einträge in der Liste und ihre Inhalte einheitlich als **Themen**. Die bisherigen Begriffe „Lerninhalt“ und „Lernkarte“
bezeichnen künftig keine unterschiedlichen fachlichen Objekte mehr. Die sichtbare Themenliste und Themenansicht verwenden den neuen Begriff.

Die Begriffe werden in der gesamten noch geltenden Dokumentation einschließlich Glossar und Story-Backlog vereinheitlicht. Bereits
umgesetzte Änderungs-Specs bleiben als historische Nachweise unverändert. In der Anwendung werden auch die entsprechenden englischen
Codebegriffe, Dateinamen und öffentlichen Verträge umbenannt. Die Vertikale „Inhaltskatalog“ einschließlich ihres `catalog`-Ordners erhält
den Namen „Themen“ beziehungsweise `topics`. IDs werden ebenfalls umbenannt, soweit sie die ersetzten Begriffe
enthalten; referenzierende Katalog- und Fragendaten bleiben dabei konsistent. IDs ohne Bezug zu den ersetzten Begriffen bleiben erhalten.

Die Überschrift "Lernluchs" über der Themenliste (nur dort) wird ergänzt zu "Lernluchs <Halbgeviertstrich> Themen".

Die Umbenennung verändert weder fachliche Inhalte noch Lerncheck-Verhalten. Browser- und Architekturtests prüfen die sichtbaren Begriffe,
die Themenauswahl und die neuen Vertikalgrenzen. Die Änderungs-Spec legt die genaue Zuordnung der bisherigen und neuen Codebegriffe fest.

Vertikale: Themen (bisher Inhaltskatalog)

Dokumentation nach Umsetzung: Begriffe, Vertikalname und öffentliche Verträge in Produktstand, Glossar und Architektur vereinheitlichen.

## Risiken und Abnahme

- **Begriffszuordnung:** „Lerninhalt“ und „Lernkarte“ werden fachlich zu „Thema“ zusammengeführt; die Vertikale „Inhaltskatalog“ heißt „Themen“.
  Im Code werden `CatalogItem` zu `Topic`, `LearningCard` zu `TopicContent`, `learningCard` zu `content`, `Catalog` zu `TopicCollection`,
  `CatalogBrowser` zu `TopicBrowser`, `catalog` zu `topics` und `src/verticals/catalog` zu `src/verticals/topics`. Weitere Namen mit
  diesen Wortstämmen folgen derselben Zuordnung, einschließlich Tests, CSS-Klassen und öffentlicher Exporte.
- **Stabile IDs:** Die aktuellen Themen- und Fragen-IDs enthalten keine der ersetzten englischen Begriffe. Sie bleiben unverändert. Falls
  beim Umsetzen doch eine solche ID gefunden wird, werden ihre Referenzen gemeinsam angepasst; Anzahl, Reihenfolge und Eindeutigkeit der
  Themen sowie die Gültigkeit der Fragenpools bleiben erhalten.
- **Sichtbare Abnahme:** Nur über der Themenliste steht „Lernluchs – Themen“ mit Halbgeviertstrich. Beim Lerncheck bleibt die Überschrift
  „Lernluchs“. Auswahl, Themeninhalt, Quellen und Start des Lernchecks funktionieren wie zuvor.
- **Dokumentationsgrenze:** Noch geltende Dokumentation verwendet die neuen Begriffe und den neuen Vertikalnamen. Archivierte
  Änderungs-Specs bleiben unverändert; fachliche Beispiele, Quellenzitate und Eigennamen werden nicht sinnentstellend umgeschrieben.
- **Architektur und Qualität:** Die öffentliche Importgrenze verweist auf `topics`; Browser- und Architekturtests prüfen die Umbenennung.
  Die vollständige Pflichtsuite bleibt grün. Es werden keine Abhängigkeiten ergänzt.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED: Sichtbare Begriffe | `npm test -- --run tests/app/App.test.tsx` schlug fehl: Über der Themenliste stand noch „Lernluchs“ statt „Lernluchs – Themen“. Der Test prüft zugleich, dass im Lerncheck „Lernluchs“ bleibt. |
| GREEN: Sichtbare Begriffe | Die App setzt die Überschrift abhängig vom Listen- oder Lerncheckmodus. `npm test -- --run tests/app/App.test.tsx` grün: 2 Tests. |
| RED: Code- und Vertikalnamen | `npm test -- --run tests/architecture/public-entrypoints.test.ts` schlug fachlich korrekt fehl: Acht Dateien lagen noch unter `src/verticals/catalog`. |
| GREEN: Code- und Vertikalnamen | Vertikale und Tests nach `topics` verschoben, Verträge und Bezeichner umbenannt, öffentliche Importe und Architekturregel angepasst. `npm test -- --run`: 42 Tests grün; `npm run check:architecture`: keine Verletzungen. |
| REFACTOR | Noch geltende Dokumentation auf „Thema“ und Vertikale „Themen“ vereinheitlicht; archivierte Specs unverändert. `npm run check` grün: Format, Lint, Typen, 42 Tests, Inhalts- und Architekturprüfung, Lizenzen, Build. `npm run test:e2e`: 12 Tests auf Desktop- und Mobil-Viewport grün. `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit. |
| Abnahme | Lokal in Chromium unter `http://127.0.0.1:5173/` geprüft: Liste zeigt „Lernluchs – Themen“, Thema „Mensch und KI: Verantwortung bleibt menschlich“ öffnet Inhalt und Quellen; der Lerncheck zeigt weiterhin „Lernluchs“. Der Nutzer bestätigte seine manuelle Prüfung und gab den Commit ausdrücklich mit „Ja, okay, committen!“ frei. |

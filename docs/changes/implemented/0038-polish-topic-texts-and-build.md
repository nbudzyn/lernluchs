# Themen sprachlich korrigieren und Inhaltsdaten im Build aufteilen

## Ziel und Grenzen

Die vier besprochenen Formulierungen in den 46 vom Nutzer überarbeiteten Themen korrigieren, den bewusst textgebundenen TopicBrowser-Test aktualisieren und Prettier-Formatierung herstellen. IDs, Quellen und fachliche Aussagen bleiben erhalten. Keine Abhängigkeiten, keine Änderung am synchronen Zugriff auf die Kataloge.

Die Build-Warnung gilt dem gesamten minifizierten JavaScript-Bundle, nicht der Quelldateilänge. Themen und Fragenpools werden in gesonderte Inhalts-Chunks aufgeteilt. Die Vite-Warngrenze von 500 kB bleibt unverändert; keine Warnung wird gefiltert. Dies reduziert die Größe einzelner Dateien, nicht die insgesamt initial geladenen Daten.

Betroffen: Themen sowie Build-Konfiguration und App-Tests. Die Daten der Lernchecks werden nicht verändert.

## Geltende Dokumente

- [Dauerhafte Vorgaben](../../governance/durable-rules.md)
- [Änderungs-Workflow](../README.md)
- [Redaktionelle Richtlinie](../../content/editorial-policy.md)
- [Qualitätsstrategie](../../quality/verification-strategy.md)
- [Vertikalen und Grenzen](../../architecture/verticals-and-boundaries.md)

## Entscheidungen, Risiken und Abnahme

Reine Sprachkorrekturen; keine neue fachliche Behauptung und deshalb keine neue Quellenprüfung. Build-API anhand der installierten Vite-/Rolldown-Typdefinitionen geprüft. Die Gruppierung erfasst nur den Themenkatalog und vorhandene Fragenpool-Dateien. Größere Einzelmodule können weiterhin die Warnung auslösen; die Aufteilung ist keine Größen-Ausnahme.

Abnahme: vier vereinbarte Formulierungen, aktualisierter textgebundener Test, grüne Formatprüfung und Pflichtsuite. Ein realer Produktionsbuild-Test prüft die Trennung des Themenkatalogs von der App und JavaScript-Chunks unter der bestehenden Warngrenze. Browserprüfung umfasst Auswahl und vollständige Anzeige eines Themas sowie Start eines Lernchecks.

## Umsetzung und Nachweise

- RED: Gezielter Lauf von `buildChunks.test.ts` und `TopicBrowser.test.tsx`: beide erwartungsgemäß rot. Der Themenkatalog lag im Entry-Chunk; der Anzeige-Test erwartete den früheren Problemtext. Die Formatprüfung war ebenfalls rot.
- GREEN: beide gezielten Testdateien grün (25 Tests). Vier Formulierungen korrigiert, bewusst textgebundene Erwartung aktualisiert und Prettier angewendet.
- REFACTOR: Gruppierung der Fragenpool-Dateien vereinfacht; erneut vollständig grün geprüft.
- Pflichtsuite: `npm run check` erfolgreich: Format, Lint, Typprüfung, 186 Unit-/Komponententests, Inhaltsvalidierung (38 Tests), Architektur einschließlich vier Vertikalzählungs-Tests, Lizenzen und Build. `npm run test:e2e`: 92 Chromium-Tests für Desktop/Mobil erfolgreich. `npm audit --audit-level=high`: keine bekannten Schwachstellen. `npm run test:pages-build` und `git diff --check` erfolgreich.
- Build: Themen-Chunk 117,40 kB; drei Fragen-Chunks 197,56 / 198,03 / 236,30 kB; App-Chunk 236,69 kB. Keine Bundle-Größenwarnung; unveränderte Vite-Warngrenze. Zusätzlich prüft der Build-Test alle erzeugten JavaScript-Chunks auf weniger als 500.000 Bytes.
- Lokaler Browsernachweis: Produktionsbuild über Vite Preview im Codex-Browser (Chromium) geprüft. Erstes Thema ausgewählt: überarbeiteter Problemtext, alle Inhaltsabschnitte, Quellen und Metadaten sichtbar. Lerncheck gestartet: Frage und Antwortoptionen sichtbar. Abbruch führt zurück zur Themenliste mit ausgewähltem Thema.

Unmittelbar vor dem Commit im Codex-Browser (Chromium) erneut geprüft: lokale Themenanzeige mit aktuellem Problemtext und Start des Lernchecks erfolgreich.

Manuelle Prüfung und ausdrückliche Freigabe durch den Nutzer erfolgt. Die Spec ist abgeschlossen.

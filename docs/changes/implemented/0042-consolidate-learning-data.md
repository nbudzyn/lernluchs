## Code Zusammenfassen
Alle Fragen und Fragenpools in einer Datei zusammenfassen. Tests und E2E-Tests entsprechend organisieren. Neutral-fachlich benennen ohne Bezug auf die Entwicklungs-Reihenfolge (nicht "first", "new", "first 4" o.Ä.).

Alle Lernpfade in einer Datei ohne "new" zusammenfassen, Tests dazu passend benennen.

## Ziel, Grenzen und Entscheidungen

- Vertikalen: Lernchecks und Themen; gemeinsame Buildkonfiguration und Prüfskripte
  nur soweit durch die Umorganisation notwendig.
- Alle 45 Fragenpools in einer zentralen `questions.json` pflegen. Der bestehende
  öffentliche Katalogvertrag bleibt erhalten. IDs, Texte, Quellen, Reihenfolgen
  und Antwortdaten müssen exakt dem bisherigen Laufzeitbestand entsprechen.
- Lernpfade weiterhin ausschließlich in `learningPaths.ts`; Tests und Browsertests
  nach fachlichen Schwerpunkten statt nach Lieferreihenfolge benennen.
- Vorhandene aussagekräftige Prüfungen erhalten; direkte Imports alter Teilpools
  durch Katalogabfragen ersetzen. Redaktionelle Hilfsskripte ebenfalls anpassen.
- Präzisierung zur Testorganisation: Unit-/Komponententests pro getesteter Datei
  bündeln (`questionCatalog.test.ts`, `validateQuestionPool.test.ts`,
  `validateQuestionCatalog.test.ts`, `LearningCheck.test.tsx`). Lerncheck-E2E-Abläufe
  einschließlich Darstellung in `learning-check.spec.ts` bündeln. Identische
  Prüfungen mit anderen Pools als einen Test über alle bisherigen Daten ausführen.
  Pool-, Fragen- und Optionskennungen in Diagnosen erhalten; unabhängige Daten
  trotz eines Fehlers weiter prüfen. Besondere Anforderungen separat erhalten.
- Die 500-kB-Grenze für Produktionschunks bleibt erhalten. Falls nötig, beim
  Build virtuelle Poolmodule aus der einzelnen gepflegten JSON-Datei erzeugen.
  Keine zweite gepflegte oder generierte Datendatei im Repository.
- Keine neuen Abhängigkeiten oder fachlichen Änderungen. Quellenprüfung entfällt
  für die unveränderte Übernahme; ein Fingerprint sichert den gesamten Bestand.
- RTK explizit für geeignete Prüfungen und Git-Ausgaben verwenden. Ursprüngliche
  Exitcodes sichern, bei Fehlern vollständigen Recall lesen. Temporäre Messdaten
  außerhalb von Git halten; Telemetrie deaktivieren.

## Vorgaben und Risiken

- [Änderungs-Workflow](../README.md), [dauerhafte Vorgaben](../../governance/durable-rules.md),
  [Vertikalen und Grenzen](../../architecture/verticals-and-boundaries.md) und
  [Qualitätsstrategie](../../quality/verification-strategy.md).
- Datenverlust oder veränderte IDs durch Zusammenführung: kanonischen Bestand
  vor der Änderung erfassen, nachher vollständig vergleichen.
- Veraltete Imports, Prüfskripte und Buildregeln gezielt suchen und korrigieren.
- Tests mit historischen Namen dürfen beim Umbenennen keine Abdeckung verlieren.
- Byteersparnis von RTK ist keine genaue Tokenzählung. Recall und RTK-Zusatzaufwand
  in die abschließende Einschätzung einbeziehen; Gesamtzählung ist nicht verfügbar.

## Abnahme

- Ein gepflegter Fragenbestand und ein gepflegter Lernpfadbestand; neutrale
  fachliche Datei- und Testnamen.
- Vollständig erhaltener Kataloginhalt und öffentliche Verträge; Produktionschunks
  weiterhin unter 500 kB.
- Betroffene Prüfungen nach RED → GREEN → REFACTOR; danach vollständige Pflichtsuite,
  Audit und lokaler Browserablauf mit Lernpfadauswahl und vollständigem Lerncheck.
- Manuelle Bestätigung durch den Entwickler vor Archivierung und Commit.

## Umsetzung und Nachweise

### Daten und fachliche Organisation

- RED: Der neue Organisationstest scheitert mit zwei erwarteten Fehlern:
  Fragen sind auf 16 Datenmodule verteilt und Testdateien tragen Lieferreihenfolge
  im Namen. Die beiden Inhaltsfingerprints bestehen bereits vor der Umorganisation.
- GREEN: 45 Pools mit insgesamt 1.125 Fragen in `questions.json` zusammengeführt;
  alte Datenmodule und unbenötigte Fabrik entfernt. Öffentliche Katalogabfragen
  bleiben unverändert. Alle 13 Lernpfade liegen weiterhin in `learningPaths.ts`.
- Die vollständigen Fragen- und Lernpfadfingerprints bleiben unverändert,
  einschließlich IDs, Texten, Quellen, Optionen und Reihenfolgen. Ein zusätzlicher
  Vergleich des tatsächlich gebauten SSR-Katalogs bestätigt ebenfalls alle
  45 Pools und 1.125 Fragen mit demselben Fingerprint.
- REFACTOR: Tests nach Kontext/Werkzeugen, Dokumentation, Entwicklungsautomatisierung,
  Arbeitsumgebungen, Agentenabläufen, Sicherheit und Harness/Refactoring benannt.
  Lernpfad-Unit- und Browsertests jeweils in einer neutralen Datei zusammengeführt;
  vorhandene Browserfälle und inhaltliche Prüfungen erhalten.
- Redaktionelle Generatoren lesen den zentralen Bestand. Fachliche Generatoren
  heißen `generate-quality-question-review.mjs` und
  `create-harness-question-review-prompt.mjs`. Ausgaben werden explizit angegeben;
  keine automatische Änderung archivierter Specs.
- Drei Generatoraufrufe in temporäre Dateien bestehen: vollständiger Katalog
  1.125 Fragen, Softwarequalität 150 Fragen, Harness/Refactoring 75 Fragen.

### Produktionsbuild

- RED: Nach direkter JSON-Zusammenführung scheitert der bestehende Buildtest:
  ein Produktionschunk überschreitet die unveränderte Grenze von 500 kB.
- GREEN: Vite erzeugt nur beim Build virtuelle Module je Pool aus derselben
  gepflegten JSON-Datei. Die bestehenden Größenregeln können diese Module wieder
  aufteilen. Wiederholte Quellen-URLs und Feldnamen werden kompakt ausgeliefert
  und beim Laden in den unveränderten Fragenvertrag zurückgeführt.
- REFACTOR: Keine generierten Datendateien im Repository, keine zusätzliche
  Abhängigkeit und keine Erhöhung der Chunk-Warngrenze. Der größte JS-Chunk hat
  340.139 Bytes; insgesamt vier JS-Chunks mit 946.796 Bytes.
- Der Produktionskatalogvergleich und die bestehenden Buildtests bestätigen
  sowohl den vollständigen Inhalt als auch die Größenbegrenzung.

### Audioquellen und Quellenobergrenze

- RED: Die vorhandenen Quellentests erwarten eine feste Podcastanzahl und
  erkennen Audio ausschließlich anhand eines bestimmten Providers.
- GREEN: Auf ausdrücklichen Auftrag Audioquellen unverändert erhalten und Tests
  auf allgemeine Eigenschaften umgestellt: Audioquellen sind vorhanden,
  besitzen Titel und HTTPS-Links und bleiben ihren Themen zugeordnet. Keine
  feste Audioanzahl, Podcast-ID, Quelle oder Laufzeit wird verlangt.
- REFACTOR: Den dadurch unbenutzten Testhelfer entfernt. Textquellen werden
  unabhängig vom Anbieter von Audio- und Videoquellen unterschieden.
- Quellenlimit geprüft: Redaktionelle Vorgabe, Validierung und Grenztest erlauben
  bereits 20 Quellen pro Thema. Der Bestand enthält maximal 12. Alle 45 Themen
  passen; eine Erhöhung ist deshalb nicht nötig.

### Abschließende Prüfung

- `npm run check`: vollständig grün, Exitcode 0, rund 18,8 s. Format, Lint,
  Typprüfung, 30 Testdateien mit 191 Unit-/Komponententests (7,33 s),
  38 Inhaltsprüfungen (1,50 s), Architektur einschließlich vier Vertikalzählungstests,
  Lizenzen und Produktionsbuild (144 ms) bestanden.
- `npm run test:e2e`: 96 Chromium-Fälle auf Desktop und Mobilgeräten bestanden,
  Exitcode 0, 25,3 s. Die spätere reine Buildverdichtung ist zusätzlich durch den
  vollständigen Produktionskatalogvergleich und den Produktions-Browsercheck geprüft.
- `npm audit --audit-level=high`: Exitcode 0, keine bekannten Schwachstellen.
- Arbeitsbaum einschließlich neuer Dateien mit der vorhandenen Vertikalprüfung
  geprüft: ausschließlich `learning-checks` und `topics`; Exitcode 0.
- Lokaler Browsercheck im Codex In-app Browser am Produktionsbuild unter
  `http://127.0.0.1:4173/`: Lernpfadfilter und Einzelauswahl, Themenkarte mit Quellen,
  fünf Fragen vollständig beantwortet, Ergebnis mit Erklärungen und Quellenlinks,
  Rückkehr zur Themenliste und Reload mit 45 Themen bestanden. Nach der
  Buildverdichtung den vollständigen Fragenablauf erneut bestätigt.
- Whitespace-Prüfung der produktrelevanten Änderungen bestanden. Die bereits
  vorhandene Whitespace-Abweichung im Backlog gehört nicht zu dieser Umsetzung.

### RTK-Einschätzung

- RTK explizit und ohne globale Einrichtung verwendet; Tracking und Recall
  temporär isoliert und Telemetrie deaktiviert. Fehlerausgaben vollständig über
  Recall wiederhergestellt; ursprüngliche Exitcodes vor dem Recall gesichert.
- 17 separat gespeicherte Ergebnismessungen: 43.098 UTF-8-Bytes ursprüngliche
  Konsolenausgabe gegenüber 4.761 Bytes Kurzfassung und 14.115 Bytes vollständigem
  Fehler-Recall. Diese Stichprobe ergibt 24.222 Bytes beziehungsweise 56,2 %
  weniger Ausgabe nach Berücksichtigung des Recalls.
- RTKs eigene Statistik über 23 Aufrufe meldet 81,6 % Ausgabeersparnis vor
  Berücksichtigung des zusätzlichen Recalls. Ihre Tokenwerte sind Byte-Schätzungen,
  keine gemessenen Modell-Tokenzahlen. Die endgültigen Toolantworten wurden zudem
  nach den Projektregeln auf Ergebnis, Anzahl, Laufzeit und Exitcode begrenzt.
- Ein Prozentsatz bezogen auf sämtliche Input-, Output- und Reasoning-Tokens
  ist ohne Gesamtzählung nicht messbar. Gegenüber ohnehin kurzen regelkonformen
  Prüfmeldungen ist eine positive Nettoersparnis in diesem Durchlauf nicht belegt.
  Vorsichtige Einschätzung: ungefähr 0 % Gesamt-Tokenersparnis; der zusätzliche
  RTK- und Messaufwand kann sogar einen geringen Mehrverbrauch verursachen.

## Präzisierte Testorganisation: Umsetzung und Nachweise

- RED: Der Organisationstest erwartet die vier zur Implementierung passenden
  Unit-/Komponentendateien und eine Lerncheck-E2E-Datei. Der gezielte Lauf
  scheitert am bisherigen Bestand von zwölf Unit-/Komponentendateien;
  Exitcode 1, eine fehlgeschlagene Prüfung, vier übersprungen, 3,19 s.
- GREEN: Zwölf Unit-/Komponentendateien auf vier zusammengeführt:
  `questionCatalog.test.ts`, `validateQuestionPool.test.ts`,
  `validateQuestionCatalog.test.ts`, `LearningCheck.test.tsx`.
  Zwölf E2E-Dateien durch `learning-check.spec.ts` mit neun unterschiedlichen
  Prüfabläufen ersetzt. Auf beiden Chromium-Projekten ergeben diese 18 Fälle.
- REFACTOR: Gleichartige Poolprüfungen als einen Test über alle 45 veröffentlichten
  Pools ausgeführt. Die bisherigen Sonderdaten bleiben erhalten: zwölf Pools
  mit Prüfung auf verräterische Absolutformulierungen, sechs Pools mit insgesamt
  18 ausgeschlossenen Distraktoren, vier geprüfte Fachkonzepte und die
  Workspace-Reihenfolge. Die Quellenprüfung gehört jetzt zu `topics.test.ts`.
  Der Inhaltsprüfaufruf verwendet die zusammengeführten Katalogdateien.
- E2E-Abdeckung: Start aller 45 Pools; erfolgreiche Ergebnisse für alle fünf
  zuvor entsprechenden Themen; beliebige Antworten für alle fünf zuvor
  entsprechenden Themen; Fehlererklärungen für sechs Grundlagenpools sowie
  Sicherheits- und XSS-Pool; Wiederholung für Verantwortungs-, Git- und
  Playwright-Pool; Abbruch für AGENTS.md, Standards und beide Dokumentationsthemen.
  Quellenlinks, Erklärungen, Status, Reload, unterschiedliche Fragen,
  Tastaturbedienung, Geometrie, mobile Breite und dunkle Darstellung erhalten.
- Fehlerdiagnose separat außerhalb des Repositorys geprüft: Zwei im Speicher
  duplizierte Fragenprompts werden im selben Unit-Test beide mit Pool-/Fragen-ID
  gemeldet (vier Tests bestanden, einer erwartungsgemäß fehlgeschlagen,
  Exitcode 1, 0,98 s). E2E mit zwei absichtlich unbekannten Themen und einem
  gültigen Thema dazwischen: beide Fehler mit vollständigem Stack erhalten;
  der gültige Schritt wird ausgeführt und besteht (ein Test erwartungsgemäß
  fehlgeschlagen, Exitcode 1, 1,82 s). Jeweils ein Aufruf, keine Wiederholung
  zum Wiederherstellen von Diagnosen. Gepflegte Fragen und Quellen unverändert.
- Betroffene Prüfungen: 45 Unit-/Komponententests grün, Exitcode 0, 27,94 s;
  anschließend die Prüfung aller fehlerhaften Quellen ohne wiederholte lineare
  Einzelsuche verglichen. Lerncheck-E2E: 18 grün, Exitcode 0, 23,97 s.
- Abschließender aktueller Stand: `npm run check` vollständig grün, Exitcode 0,
  35,45 s; darin 131 Unit-/Komponententests (10,26 s), 30 Inhaltsprüfungen
  (2,22 s), Runner-Selbsttests, Format, Lint, Typen, Architektur, Lizenzen
  und Build. Alle E2E: 64 grün, Exitcode 0, 34,58 s.
  `npm audit --audit-level=high`: Exitcode 0, keine bekannten Schwachstellen.
  Whitespace-Prüfung der betroffenen Dateien: Exitcode 0.
- Regeln in AGENTS.md, dauerhaften Vorgaben und Qualitätsstrategie verankert:
  Dateizuordnung und Zusammenführung gleicher Datenprüfungen; vor einem neuen
  RED-Test zuerst vorhandene Tests auf Erweiterung oder Verallgemeinerung prüfen.
  Keine Abhängigkeit und kein Anwendungscode geändert. Kein Commit.

## Abnahme

Umsetzung und automatisierte Prüfungen abgeschlossen. Manuelle Prüfung und
ausdrückliche Freigabe durch den Entwickler erfolgt.
Unmittelbar vor dem Commit im Codex In-app Browser unter
`http://127.0.0.1:4173/` nochmals fünf Fragen beantwortet: bestandenes Ergebnis,
Erklärungen und Quellenlinks sichtbar, Fortschritt gespeichert und Rückkehr
zur Themenliste mit 45 Themen erfolgreich. Die zuletzt vollständig grüne
Pflichtsuite bleibt gültig; danach nur Nachweise und Abnahme ergänzt.

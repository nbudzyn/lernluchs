## Einmaliges Bestandsreview und Korrekturen: Lernstand

Die Vertikale `learning-state` durch einen eigenen Review-Subagenten einmalig prüfen: Produktionscode unter `src/verticals/learning-state/` und Tests unter `tests/verticals/learning-state/` getrennt bewerten. Ein eigenes `e2e/verticals/learning-state/` existiert derzeit nicht; die bestehenden Lernstandsabläufe unter `e2e/app/` sowie Tests unter `tests/app/` nur bei konkretem Bezug einbeziehen.

- Maßstab: Wartbarkeit, Lesbarkeit, Verantwortlichkeiten, Duplikate, einfache Konzepte und Testqualität gemäß `docs/quality/code-review.md`; zusätzlich belegte Fehler und Datenschutzprobleme behandeln. Fachliche Inhalte und externe Quellen nur bei konkretem Verdacht prüfen.
- Alle nötigen Korrekturen im Bereich Lernstand umsetzen. Verhaltenskorrekturen mit RED → GREEN absichern, reine Refactorings mit passenden bestehenden Prüfungen. Neue Funktionalität gehört nicht zum Review.
- Abhängige Stellen nur gezielt zum Verständnis oder zur notwendigen Vertragsanpassung einbeziehen. Bereichsübergreifenden Änderungsbedarf vor einer Erweiterung klären; höchstens zwei fachliche Vertikalen pro Commit.
- Abnahme: Produktionscode und Tests getrennt bewertet, alle belegten Vorschläge umgesetzt oder konkret begründet abgelehnt, passende Prüfungen und bei produktrelevanten Änderungen ein aussagekräftiger lokaler Browserablauf dokumentiert. Kein künstlicher Änderungsbedarf bei einem Review ohne Funde.
- Einmalige Wartungsstory ohne neue Browserfunktion. Genau ein Review-Subagent für das Bestandsreview, keine zweite Reviewrunde nach Korrekturen; Lesegrenzen und Rückgabeformat des Reviewvertrags gelten.

## Ziel, Entscheidungen und Risiken

- Nur `learning-state` prüfen und nötige Korrekturen umsetzen; keine neue Funktionalität und keine neuen Abhängigkeiten.
- Die Wartungsstory ist bereits konkret beschrieben; keine offenen umsetzungsrelevanten Fragen. Das einmalige Bestandsreview ersetzt entsprechend dieser Story das sonst nach GREEN angesetzte Review.
- Datenschutz: Persönlicher Lernstand bleibt lokal; Fehler dürfen keine anderen Browserdaten löschen und keinen ungespeicherten Erfolg ausweisen.
- Risiken: beschädigte oder nicht verfügbare Speicherung, wiederholtes Bestehen, Wiederherstellung nach Neuladen. Bei Verhaltenskorrekturen zuerst einen fachlich scheiternden Test ausführen.
- Abnahme: Produktionscode und Tests separat bewerten; jeden belegten Vorschlag behandeln. Bei produktrelevanten Korrekturen Pflichtsuite und einen lokalen Browserablauf prüfen. Ein Commit benötigt die gesonderte Nutzerfreigabe und positiven manuellen Test. Der Entwickler-Checkout bleibt auf ausdrückliche Vorgabe unverändert; keine lokale Integration in `main`.

## Umsetzung und Nachweise

- Aktivierung: sauberer dauerhafter Codex-Worktree, Ausgangsstand `07e2fc645f9fda59b8327935e27bcfd46acc0542`, Branch `codex/review-learning-state`; Ausgangsstand in lokalem `main` enthalten.
- Bestandsprüfung vor Korrekturen: Lernstand-Unit-/Komponententests grün (5 bestanden, 40,03 s, Exitcode 0).
- Genau ein Bestandsreview durchgeführt, Produktionscode und Tests separat bewertet. Drei Vorschläge, alle umgesetzt; keine zweite Reviewrunde.
- Produktionscode: `readLearningState` liest und validiert ohne Speicheränderung. `resetDamagedLearningState` repariert nach React-Commit im Effect beziehungsweise beim expliziten Speichern. Damit bleibt der Hinweis nach einem vorübergehenden Resetfehler in StrictMode konsistent.
- RED: Regressionstest für einen einmalig fehlgeschlagenen Reset in StrictMode scheiterte fachlich korrekt (0 bestanden, 1 fehlgeschlagen, 5 übersprungen, 2,07 s, Exitcode 1): Der Speicher war zurückgesetzt, der Hinweis behauptete weiterhin einen fehlgeschlagenen Reset.
- GREEN: Nach Trennung von Lesen und Reparatur 6 Tests bestanden (2,00 s, Exitcode 0).
- Tests: Fehlerpfad für nicht lesbaren Speicher einschließlich ausbleibender Schreib-/Löschzugriffe und erfolgreichem Wiederholungsversuch ergänzt. Bestehende Beschädigungstests in einer Datenprüfung gebündelt; ungültiges JSON, null, falsche Version, fehlende Liste, numerische/leere/doppelte IDs mit Datenkennungen und Soft-Assertions geprüft. Finale gezielte Suite: 6 bestanden, 1,71 s, Exitcode 0. Diese Abdeckungsverbesserungen sichern vorhandenes Verhalten; keine neue Funktionalität.
- Abschließende Prüfung: Format, Lint, Typprüfung und 11 Runner-Selbsttests grün. Vollständige Unit-/Komponentensuite: 161 bestanden, 2 Infrastrukturtests fehlgeschlagen (72,72 s, Exitcode 1). Gezielter Wiederholungslauf außerhalb der Sandbox: 25 bestanden, 1 fehlgeschlagen (76,74 s, Exitcode 1); Portkonfiguration grün, Windows-Hook-Prozesstest weiterhin Timeout mit Folgefehler beim Aufräumen. Keine Änderung der Infrastrukturtests innerhalb dieser Lernstand-Story. Der abschließende isolierte Hook-Test bestand anschließend (1 bestanden, 19 übersprungen, 26,43 s, Exitcode 0). Damit sind alle 163 Unit-/Komponententests durch den vollständigen Lauf und gezielte erfolgreiche Nachprüfungen abgedeckt; der geprüfte Produktstand blieb unverändert.
- Inhaltsvalidierung (3,95 s), Architektur (7,96 s), Lizenzen (0,69 s) und Produktionsbuild (1,40 s) grün, jeweils Exitcode 0. Audit: 0 Schwachstellen, Exitcode 0. Eine fachliche Vertikale betroffen: `learning-state`.
- Lokaler Browsernachweis: Codex In-app-Browser auf dem dem Codex-Worktree zugeordneten Vite-Server unter `http://127.0.0.1:5274/`. Lerncheck „Mensch und KI“ bestanden, Bestätigung „Als gelernt gespeichert.“ sichtbar; Rückkehr zur Liste und Neuladen, Kennzeichnung „Gelernt“ weiter vorhanden. Keine externen Quellen geöffnet.
- Vollständige Chromium-E2E-Suite: 84 bestanden (Desktop und Smartphone), 91,90 s, Exitcode 0. Manueller Test und Commit-Freigabe erfolgt. Freigabe zur ausschließlichen Aktualisierung von `origin/main` erfolgt; lokales `main` und Entwickler-Checkout bleiben unverändert.

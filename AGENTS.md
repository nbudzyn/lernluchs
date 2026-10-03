# Arbeitsanweisungen für KI-Änderungen

Lies zuerst `docs/INDEX.md`, dann die relevante aktive Spec oder Backlog-Story.

## Vor jedem Lesen und Tool-Aufruf

- Bei „erste Story“ nur bis zur nächsten gleichrangigen Backlog-Überschrift lesen.
- Nur benötigte Abschnitte der Spec-verlinkten Vorgaben lesen; vor Aktivierung gelten die Links im Index. Unpassende Specs nicht lesen.
- Gelesene Dokumente innerhalb der Session wiederverwenden; erneut lesen nur bei Änderungen oder konkreter Unsicherheit.
- Code und Tests gezielt durchsuchen, dann relevante Treffer und Funktionen lesen. Ganze Dateien nur bei konkretem Klärungsbedarf öffnen.
- Umfangreiche Tool-Aufrufe auf eine konkrete offene Frage begrenzen.
- Bei erfolgreichen Prüfungen nur Ergebnis, Exitcode, Anzahl und Laufzeit ausgeben. Bei Fehlern nur betroffene Prüfungen ausgeben,
  deren Fehlerdetails vollständig erhalten. Exitcodes nie durch Ausgabekürzung verdecken.
- Nachweise einschließlich RED und grüner Testsuite einmal in der aktiven Spec festhalten und aktualisieren.
  Meldungen knapp halten; der Abschluss nennt eigenständig Ergebnis, Prüfstatus und offene Schritte.

## Nicht verhandelbar

- Teil-Features nur mit aktiver Spec und in der Reihenfolge RED → GREEN → REFACTOR implementieren.
- Nur committen, wenn die Pflichtsuite vollständig grün ist und der Nutzer seinen manuellen Test ausdrücklich positiv bestätigt hat.
- Pro Commit höchstens zwei fachliche Vertikalen ändern; App und Shared sind zusätzlich erlaubt.
- Neue Abhängigkeiten brauchen eine begründete Freigabe in der Spec.
- Persönlichen Fortschritt und Fehlermeldungen weder nach Git noch an externe Dienste schreiben.
- Unsichere fachliche Aussagen anhand von Quellen prüfen und verbleibende Unsicherheit dokumentieren; nicht raten.

Die vollständigen Regeln stehen in `docs/governance/durable-rules.md`.

## Prüfaufwand begrenzen

- Testorganisation: Tests für `X.ts` gemeinsam in `X.test.ts`, für `X.tsx` in
  `X.test.tsx`; E2E-Tests pro Nutzerablauf oder Funktion in einer fachlich benannten
  `*.spec.ts`. Gleiche Anforderungen mit unterschiedlichen Daten in einem Test
  über alle betreffenden Datensätze prüfen; Datenkennungen in Fehlern erhalten.
- Vor dem Anlegen eines neuen Tests in der RED-Phase zuerst prüfen, ob ein
  bestehender Test ergänzt oder verallgemeinert werden kann. Nur für eine noch
  nicht abgedeckte, eigenständige Anforderung einen neuen Test anlegen.
- Unit-/Komponenten- und E2E-Einmalläufe verbindlich mit dem eigenen Runner ausführen:
  `npm run --silent test:unit -- [Dateien/Filter]` beziehungsweise `npm run --silent test:e2e -- [Dateien/Filter]`.
  Ohne Filter laufen alle Tests des Typs; `--vertical NAME` wählt eine Vertikale,
  `-t "Testname"` einen Vitest-Test und `--grep "Testname"` einen E2E-Test.
  Die [Qualitätsstrategie](docs/quality/verification-strategy.md#lokale-testaufrufe-und-ausgabe) enthält konkrete Beispiele.
- Runner-Ausgaben nicht zusätzlich kürzen und Tests nicht zum Wiederherstellen von Fehlerdetails wiederholen.
  Rohprotokolle liegen außerhalb von Git; RTK ist für diese Testaufrufe nicht erforderlich.
- Bei Fragen, Screenshot-Prüfungen und reiner Diagnose keine Dateien ändern.
- Während der Umsetzung betroffene Prüfungen ausführen; die vollständige Pflichtsuite nach der letzten produktrelevanten Änderung und vor dem Commit.
- Bei reinen Dokumentations- oder IDE-Änderungen keine App-E2E-Tests ausführen.
- Grüne Prüfungen nur bei relevanten Änderungen wiederholen.

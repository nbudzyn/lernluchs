# Arbeitsanweisungen für KI-Änderungen

Lies zuerst `docs/INDEX.md` und bestimme alle Pflichtlektüren für den Auftrag.
Bei Story-Arbeit lies danach die relevante aktive Spec oder Backlog-Story.
Hier stehen die Kernregeln; der Index verlinkt die maßgeblichen Details.

## Arbeitsort

Implementierungsaufgaben standardmäßig im dauerhaften Codex-Worktree `C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs` bearbeiten; der feste Entwickler-Checkout `C:\projects\2026\lernluchs\workspace\lernluchs` bleibt beim Entwickler. Parallele unabhängige Arbeit bekommt eigene temporäre Worktrees und Branches. Vor dem ersten Edit den [Worktree-Ablauf](docs/quality/worktrees.md) lesen, tatsächlichen Arbeitsort, Branch, aktive Spec und Schreibbesitzer prüfen. Alle Edits und Tests im zugeordneten Worktree ausführen. Bestehende Story-Arbeit darf uncommittet fortgesetzt werden; niemals wegen einer neuen Sitzung verwerfen. Neue Story nur im freien sauberen Worktree, Wiederaufnahme nach Abbruch nur mit geprüfter Übernahme. Schutzstatus und Sicherungen bleiben lokal außerhalb von Git. Hooks erst nach bewusster Vertrauensprüfung verwenden; sie ersetzen nicht den sicheren Ablauf. Fremde Änderungen nicht übernehmen oder stagen. Push führt ausschließlich der Entwickler aus. Den dauerhaften Worktree nach einer Story oder Chat-Archivierung behalten. Temporäre Worktrees über Codex beziehungsweise `git worktree remove` entfernen, nie durch Löschen des Ordners.

## Vor jedem Lesen und Tool-Aufruf

- Bei „erste Story“ nur bis zur nächsten gleichrangigen Backlog-Überschrift lesen.
- Lies nur benötigte, Spec-verlinkte Abschnitte; vor Aktivierung gelten die Indexlinks. Lies keine unpassenden Specs.
- Verwende gelesene Dokumente in der Session wieder. Lies sie nur bei Änderungen oder konkreter Unsicherheit erneut.
- Durchsuche Code und Tests gezielt. Lies relevante Treffer und Funktionen, ganze Dateien nur bei konkretem Klärungsbedarf.
- Begrenze umfangreiche Tool-Aufrufe auf eine konkrete offene Frage.
- Erfolg: nur Ergebnis, Exitcode, Anzahl und Laufzeit ausgeben. Fehler: nur betroffene Prüfungen mit vollständigen Fehlerdetails ausgeben.
  Exitcodes nie durch Ausgabekürzung verdecken.
- Halte Nachweise einschließlich RED und grüner Testsuite einmal in der aktiven Spec fest und aktualisiere sie.
  Melde knapp; der Abschluss nennt eigenständig Ergebnis, Prüfstatus und offene Schritte.

## Nicht verhandelbar

- Teil-Features nur mit aktiver Spec in der Reihenfolge RED → GREEN implementieren.
- Nach dem letzten GREEN jeder Story genau ein fokussiertes Subagentenreview nach
  [Reviewvertrag und Übergabe](docs/quality/code-review.md) durchführen. Es ersetzt
  den bisherigen eigenständigen REFACTOR-Schritt. Der Hauptagent bearbeitet die
  Vorschläge vor den abschließenden Prüfungen und der Nutzerfreigabe; begründete
  Ablehnungen in der aktiven Spec festhalten. Keine zweite Reviewrunde.
  Reine Dokumentations-Stories sind von dieser Reviewpflicht ausgenommen.
- Committe nur bei vollständig grüner Pflichtsuite und ausdrücklich positiver Bestätigung des manuellen Tests durch den Nutzer.
- Pro Commit höchstens zwei fachliche Vertikalen ändern; App und Shared zählen nicht mit.
  Bei mehr als zwei betroffenen Vertikalen immer vorab den Entwickler fragen,
  möglichst schon beim Refinement, sonst vor einer Erweiterung des Umfangs.
  Grund: Fachlichkeit lokal halten. Die Rückfrage hebt die Commitgrenze nicht auf.
- Neue Abhängigkeiten brauchen eine begründete Freigabe in der Spec.
- Persönlichen Fortschritt und Fehlermeldungen weder nach Git noch an externe Dienste schreiben.
- Persönlicher Zustand bleibt bis zu eigens spezifizierter, nutzergesteuerter Synchronisation lokal.
  Lies vor produktrelevanten Änderungen die Datenschutzvorgaben laut Index.
- Unsichere fachliche Aussagen anhand von Quellen prüfen und verbleibende Unsicherheit dokumentieren; nicht raten.
- Bei Fragen, Screenshot-Prüfungen und reiner Diagnose keine Dateien ändern.

## Prüfaufwand begrenzen

- **Verbindliche Silent-Runner für jeden Unit-/Komponenten- und E2E-Einmallauf:**
  `npm run --silent test:unit -- [Dateien/Filter]` beziehungsweise
  `npm run --silent test:e2e -- [Dateien/Filter]`.
  Aufrufdetails stehen unter [Lokale Testaufrufe und Ausgabe](docs/quality/verification-strategy.md#lokale-testaufrufe-und-ausgabe).
- Runner-Ausgaben nicht zusätzlich kürzen und Tests nicht zum Wiederherstellen von Fehlerdetails wiederholen.
  Rohprotokolle liegen außerhalb von Git.
- Lies vor dem Anlegen oder Ändern von Tests die [Testorganisation](docs/quality/verification-strategy.md#testorganisation).
- Prüfzeitpunkt, Umfang und Gültigkeit grüner Nachweise stehen unter
  [Prüfumfang und Nachweise](docs/quality/verification-strategy.md#prüfumfang-und-nachweise).

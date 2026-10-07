# Eindeutige Prüfung der Antworterklärungen

Status: implementierte, eigenständige Testkorrektur.

## Problem und Umfang

Die E2E-Prüfung für eine falsche Antwort sucht beide Erklärungen über Teiltexte.
Wenn die Erklärung der richtigen Antwort in der falschen Erklärung enthalten
ist, findet Playwright zwei Absätze und scheitert im Strict Mode. Der Fehler
hängt von der zufälligen Fragenauswahl ab; die angezeigten Inhalte sind korrekt.

Der bestehende Test in `e2e/verticals/learning-checks/learning-check.spec.ts`
prüft künftig den Absatz direkt nach der jeweiligen Antwortkennzeichnung und
danach dessen Erklärungstext. Sichtbarkeit und beide Quellen bleiben geprüft.
Keine Produktänderung, neue Frage, Abhängigkeit oder persönliche Daten.

Vorgaben: [Qualitätsstrategie](../../quality/verification-strategy.md),
[dauerhafte Regeln](../../governance/durable-rules.md).

## Nachweise

- RED: zwei vollständige Browserläufe scheiterten am mehrdeutigen Selektor
  derselben Prüfung: 73 bestanden / 3 fehlgeschlagen, 50,14 s; danach
  75 bestanden / 1 fehlgeschlagen, 44,81 s; jeweils Exitcode 1. Rohprotokolle
  außerhalb von Git. Die weiteren Fehler des ersten Laufs gehörten zur separat
  korrigierten Themenreihenfolge.
- GREEN: betroffene Browserabläufe einschließlich dieser Prüfung auf beiden
  Geräten bestanden: 6 Prüfungen, 9,56 s, Exitcode 0. Die Erklärung wird über
  ihre Antwortkennzeichnung eindeutig zugeordnet und auf Sichtbarkeit sowie
  Text geprüft; beide Quellen bleiben Teil des bestehenden Tests.
- Abschließende Pflichtsuite: 130 Unit-/Komponentenprüfungen (8,03 s),
  32 Inhaltsprüfungen (1,79 s), 76 E2E-Prüfungen (51,04 s), jeweils Exitcode 0.
  Format, Lint, Typecheck, Runner, Architektur, Lizenzen und Build bestanden.
  Audit: 0 Sicherheitslücken, 1,78 s, Exitcode 0. Keine Abhängigkeiten geändert.
- Lokaler Browser vor Commit: Codex In-App-Browser, Lerncheck mit bewusst
  falscher Antwort bis zur Übersicht durchlaufen. Richtige und falsche
  Erklärung sowie beide Quellenlinks erscheinen unter ihren zugehörigen
  Antwortkennzeichnungen. Kein persönlicher Lernstand verändert.
- Manuelle Nutzerprüfung und Freigabe erfolgt. Diese Lerncheck-Testkorrektur
  bildet einen separaten Commit; die Alltagsanker-Änderung umfasst Themen
  und Hilfe.

# Arbeitsanweisungen für KI-Änderungen

Lies für jede Aufgabe zuerst `docs/INDEX.md`, danach die aktive Änderungs-Spec
und nur die dort verlinkten dauerhaften Dokumente. Lies nicht pauschal die
gesamte Dokumentation.

## Nicht verhandelbar

- Implementiere kein Teil-Feature ohne aktive Spec.
- Arbeite pro Teil-Feature in der Reihenfolge RED → GREEN → REFACTOR. Halte den
  RED-Nachweis und die anschließend grüne Testsuite in der aktiven Spec fest.
- Committe nur bei vollständig grüner Pflichtsuite.
- Ändere fachlich höchstens zwei Vertikalen pro Commit. Architekturausnahmen
  benötigen eine explizite Spec und Architekturtests.
- Füge keine Abhängigkeit ohne begründete Freigabe in der Spec hinzu.
- Schreibe weder persönlichen Fortschritt noch Fehlermeldungen nach Git oder an
  einen externen Dienst.
- Bei Unsicherheit über eine fachliche Aussage: nicht raten; Quellen prüfen und
  die Unsicherheit dokumentieren.

Die vollständigen Regeln stehen in
`docs/governance/durable-rules.md`.

# Arbeitsanweisungen für KI-Änderungen

Lies für jede Aufgabe zuerst `docs/INDEX.md`, danach die für die Aufgabe relevante aktive Änderungs-Spec und nur die dort verlinkten dauerhaften Dokumente. Lies nicht
pauschal die gesamte Dokumentation.

## Nicht verhandelbar

- Implementiere kein Teil-Feature ohne aktive Spec.
- Arbeite pro Teil-Feature in der Reihenfolge RED → GREEN → REFACTOR. Halte den RED-Nachweis und die anschließend grüne Testsuite in der
  aktiven Spec fest.
- Committe nur bei vollständig grüner Pflichtsuite.
- Committe erst, nachdem der Nutzer die Änderung selbst manuell getestet und das Ergebnis ausdrücklich bestätigt hat.
- Ändere fachlich höchstens zwei Vertikalen pro Commit (plus App und Shared bei Bedarf).
- Füge keine Abhängigkeit ohne begründete Freigabe in der Spec hinzu.
- Schreibe weder persönlichen Fortschritt noch Fehlermeldungen nach Git oder an einen externen Dienst.
- Bei Unsicherheit über eine fachliche Aussage: nicht raten; Quellen prüfen und die Unsicherheit dokumentieren.

Die vollständigen Regeln stehen in `docs/governance/durable-rules.md`.

## Effizient arbeiten

Diese Regeln gelten auch für Coding-Sessions und präzisieren den Lese- und Prüfumfang der verlinkten Vorgaben.

- Bereits gelesene, unveränderte Dokumente innerhalb einer Session
  wiederverwenden. Erneut lesen nur bei Änderungen oder konkreter Unsicherheit.
- Aktive Specs nach Aufgabenrelevanz auswählen. Fachlich unpassende Specs
  nicht vollständig lesen.
- Bei Fragen, Screenshot-Prüfungen und reiner Diagnose keine Dateien ändern.
- Während der Umsetzung betroffene Prüfungen ausführen.
  Die vollständige Pflichtsuite nach der letzten produktrelevanten Änderung
  und vor einem Commit ausführen.
- Reine Dokumentations- oder IDE-Änderungen lösen keine App-E2E-Tests aus.
- Bestandene Prüfungen ohne relevante Änderung nicht wiederholen.
- Erfolgreiche Tool-Ausgaben auf Ergebnis, Anzahl und Laufzeit begrenzen.

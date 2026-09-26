# Änderungs-Specs und Archiv

Jede fachliche oder architektonische Änderung erhält vor der Implementierung **eine** Datei direkt unter `active/`. Der englische Dateiname ist kurz, eindeutig und ohne Datum oder Nummer, zum Beispiel `weave-next-learning-path.md`.

Die Spec hält knapp fest: Ziel und Nicht-Ziele, betroffene Vertikalen, nötige Entscheidungen und Risiken, prüfbare Abnahme sowie pro Teil-Feature RED → GREEN → REFACTOR. RED-Grund, grüne Prüfungen, Quellenprüfung bei Inhalten und der lokale Browsernachweis (Browser, Ablauf, Ergebnis) werden während der Arbeit in derselben Datei ergänzt. Vor einem Commit bleiben keine offenen Platzhalter.

Nach fertiger Änderung, grünen Prüfungen und manueller Prüfung wird die vollständig ausgefüllte Datei direkt nach `implemented/` verschoben. Dort erhält sie die nächste vierstellige Nummer, zum Beispiel `0005-weave-next-learning-path.md`. Die Nummer zeigt die Reihenfolge des Abschlusses; Datum und Commit-Kennung stehen nicht in der Datei. Archivierte Specs werden nicht nachträglich umgeschrieben. Spätere Korrekturen bekommen eine neue Spec.

Die Verschiebung und die fachliche Änderung gehören zum selben Commit. Ein fachlicher Commit betrifft höchstens zwei Vertikalen; breitere Architekturausnahmen brauchen eine ausdrückliche Begründung und Architekturtests. Unmittelbar vor jedem Commit gelten die [dauerhaften Vorgaben](../governance/durable-rules.md).

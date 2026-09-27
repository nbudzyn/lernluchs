# Änderungs-Specs und Archiv

## Erste Backlog-Story vorbereiten

Bei Formulierungen wie „Refinement der ersten Story“ oder „Refine die erste Story“ gilt:

1. Die erste Story im [Story-Backlog](../product/story-backlog.md) prüfen.
2. Den Nutzer so lange befragen, bis mit mindestens 95 % Sicherheit klar ist, was implementiert werden soll. Die geklärten Ergebnisse in diese Backlog-Story übernehmen.
3. Noch keine aktive Spec anlegen und noch nichts implementieren.

Bei Formulierungen wie „Aktiviere die erste Story“ oder „Erzeuge eine active Spec“ gilt:

1. Die erste Story aus dem Backlog einschließlich Überschrift und vollständigem Inhalt wortgetreu als aktive Spec unter `active/` übernehmen.
2. Nach der überprüften Übernahme diese Story vollständig aus dem Backlog entfernen; die nächste geplante Story rückt an die erste Stelle.
3. Die weiteren Kapitel analog zu [0005](implemented/0005-weave-next-learning-path.md) ergänzen, insbesondere Risiken und Abnahme sowie Umsetzung und Nachweise. Noch nicht erbrachte Nachweise nicht als erledigt darstellen.
4. Noch nichts implementieren.

Jede fachliche oder architektonische Änderung erhält vor der Implementierung **eine** Datei direkt unter `active/`. Der englische Dateiname ist kurz, eindeutig und ohne Datum oder Nummer, zum Beispiel `weave-next-learning-path.md`.

Die Spec hält knapp fest: Ziel und Nicht-Ziele, betroffene Vertikalen, nötige Entscheidungen und Risiken, prüfbare Abnahme sowie pro Teil-Feature RED → GREEN → REFACTOR. RED-Grund, grüne Prüfungen, Quellenprüfung bei Inhalten und der lokale Browsernachweis (Browser, Ablauf, Ergebnis) werden während der Arbeit in derselben Datei ergänzt. Vor einem Commit bleiben keine offenen Platzhalter.

Nach fertiger Änderung, grünen Prüfungen und manueller Prüfung wird die vollständig ausgefüllte Datei direkt nach `implemented/` verschoben. Dort erhält sie die nächste vierstellige Nummer, zum Beispiel `0005-weave-next-learning-path.md`. Die Nummer zeigt die Reihenfolge des Abschlusses; Datum und Commit-Kennung stehen nicht in der Datei. Archivierte Specs werden nicht nachträglich umgeschrieben. Spätere Korrekturen bekommen eine neue Spec.

Die Verschiebung und die fachliche Änderung gehören zum selben Commit. Ein fachlicher Commit betrifft höchstens zwei Vertikalen; breitere Architekturausnahmen brauchen eine ausdrückliche Begründung und Architekturtests. Unmittelbar vor jedem Commit gelten die [dauerhaften Vorgaben](../governance/durable-rules.md).

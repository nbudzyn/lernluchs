# Entwicklungsablauf im Überblick

Bei unklarem Vorgehen zu Sessionbeginn gilt diese Reihenfolge:

Die verbindlichen Schritte und der Umfang eines Implementierungsauftrags stehen
im [Änderungs-Workflow](README.md); die Handlungsschranken in [AGENTS.md](../../AGENTS.md).

1. Neue Stories und Ideen zuerst im [Story-Backlog](../product/story-backlog.md) nach geplanter Umsetzungsreihenfolge eintragen.
2. Die erste Story mit dem Entwickler verfeinern, offene Fragen klären und Ergebnisse in der Story festhalten.
3. Erst danach die Story als aktive Spec unter `docs/changes/active/` übernehmen und aus dem Backlog entfernen.
4. Die aktive Spec wird nach [TDD und Spec-Nachweisen](README.md#tdd-und-spec-nachweise) umgesetzt.
5. [Prüfung, Freigabe und Archivierung](README.md#abschluss-und-archivierung) schließen die Story ab.
6. Spätestens jetzt sollte eine neue Session gestartet werden, bevor die nächste Story begonnen wird.

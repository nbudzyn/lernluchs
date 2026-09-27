# Entwicklungsablauf im Überblick

Wenn zu Beginn einer Session unklar ist, wie in diesem Projekt vorgegangen wird, gilt diese Reihenfolge:

Ein Auftrag wie „Wir wollen Story 1 implementieren“ startet die Schritte 2 bis 5
für die erste Backlog-Story in einem Arbeitsgang. Offene fachliche Fragen werden
vor der Aktivierung geklärt; ein gesonderter Auftrag für jeden Zwischenschritt
ist nicht nötig. Die manuelle Prüfung und ausdrückliche positive Bestätigung
des Nutzers vor dem Commit bleiben erforderlich.

1. Neue Stories und Ideen werden zuerst in den [Story-Backlog](../product/story-backlog.md) aufgenommen, und zwar an der Stelle ihrer geplanten Umsetzungsreihenfolge.
2. Die erste Story im Backlog wird gemeinsam mit dem Entwickler verfeinert. Offene Fragen werden geklärt und die Ergebnisse in der Story festgehalten.
3. Erst danach wird diese erste Story in eine aktive Änderungs-Spec unter `docs/changes/active/` überführt und aus dem Backlog entfernt.
4. Die aktive Spec wird umgesetzt. Für jedes Teil-Feature gilt RED → GREEN → REFACTOR; Nachweise und Prüfergebnisse werden in der Spec dokumentiert.
5. Am Ende prüft der menschliche Entwickler die Umsetzung selbst. Erst nach seiner ausdrücklichen positiven Bestätigung und vollständig grüner Pflichtsuite wird committet. Die ausgefüllte Spec wird als Teil desselben Commits nach `docs/changes/implemented/` verschoben.
6. Spätestens jetzt sollte eine neue Session gestartet werden, bevor die nächste Story begonnen wird.

Die Einzelheiten und verbindlichen Regeln stehen im [Änderungs-Workflow](README.md) und in den [dauerhaften Vorgaben](../governance/durable-rules.md).

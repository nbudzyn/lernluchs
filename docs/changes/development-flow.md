# Entwicklungsablauf im Überblick

Pflichtschritte: [Änderungs-Workflow](README.md); Handlungsschranken: [AGENTS.md](../../AGENTS.md).

1. Ideen in Umsetzungsreihenfolge ins [Backlog](../product/story-backlog.md) aufnehmen.
2. Erste Story mit dem Entwickler klären und Ergebnisse dort festhalten.
3. Vor Änderungen Arbeitsort und Schreibbesitz nach dem [Worktree-Ablauf](../quality/worktrees.md) prüfen; Story als aktive Spec übernehmen und aus dem Backlog entfernen.
4. Teil-Features mit RED → GREEN umsetzen. Nach dem letzten GREEN genau ein [Subagentenreview](../quality/code-review.md), Vorschläge bearbeiten und abschließend prüfen. Reine Dokumentations-Stories sind vom Review ausgenommen.
5. Nutzerabnahme, Commit-Freigabe und [Archivierung](README.md#abschluss-und-archivierung).
6. Vor der nächsten Story eine neue Session starten.

Schritte liefern überprüfbare vertikale Ergebnisse; keine technischen Schichten
als Vorab-Stories. Reine Refactoring- und Dokumentations-Stories bleiben möglich.

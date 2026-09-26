# Änderungs-Specs und Archiv

Jede fachliche oder architektonische Änderung erhält vor der Implementierung einen eigenen Ordner. Das verhindert, dass Annahmen aus alten
Änderungen in neue Features hineinwirken.

## Verzeichnisstruktur

```text
doc/changes/
  active/<yyyy-mm-dd-kurzer-name>/
    proposal.md
    design.md
    tasks.md
    acceptance.md
  implemented/<yyyy-mm-dd-kurzer-name>/
    proposal.md
    design.md
    tasks.md
    acceptance.md
```

Nach erfolgreicher Veröffentlichung wandert der vollständige Ordner unverändert von `active/` nach `implemented/`. Er wird nicht
umgeschrieben; spätere Korrekturen erhalten eine neue Änderungs-Spec. So bleibt nachvollziehbar, welche Absicht zu welchem Zeitpunkt
implementiert wurde.

## Inhalt einer aktiven Änderung

### `proposal.md`

Nutzen, Problem, Nicht-Ziele, betroffene Vertikalen und Akzeptanzkriterien.

### `design.md`

Entscheidungen, Datenvertragsänderungen, erlaubte Importpfade, Risiken, Datenschutz-/Sicherheitsauswirkungen und Alternativen.

### `tasks.md`

Kleine RED → GREEN → REFACTOR-Schritte. Jeder Schritt hält den anfangs fehlschlagenden Test, die grüne Prüfung und notwendiges Refactoring
fest.

### `acceptance.md`

Ausführbare Nachweise: Tests, manuelle Geräteprüfung, Quellenprüfung bei Inhaltsänderungen und Ergebnis der Abhängigkeitsprüfung.

## Commit-Regeln

Ein fachlicher Commit bezieht sich auf eine, höchstens zwei Vertikalen. Die zugehörige Änderungs-Spec ist Teil derselben nachvollziehbaren
Änderung. Architekturänderungen dürfen breiter sein, benötigen aber eine explizite Begründung und Architekturtests.

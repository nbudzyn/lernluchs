# Dokumentationsindex

Die Kernregeln in [AGENTS.md](../AGENTS.md) gelten durchgehend. Vor jeder Handlung
alle passenden Tabellenzeilen bestimmen: Ihre Vorgaben sind Pflichtlektüre.
Mehrere Auslöser gelten gemeinsam. Lies nur benötigte Abschnitte und verwende
bereits gelesene, unveränderte Vorgaben wieder.

| Wenn du … | lies zuerst |
| --- | --- |
| zu Beginn einer Session den Entwicklungsablauf klären willst | [Entwicklungsablauf im Überblick](changes/development-flow.md) |
| den aktuellen Funktionsumfang verstehen willst | [Produktstand](product/vision-and-scope.md) |
| den aktuellen Aufbau oder Architekturgrenzen brauchst | [Architektur und Leitplanken](architecture/target-architecture.md) |
| einen Begriff nachschlagen willst | [Glossar](product/glossary.md) |
| die Reihenfolge geplanter Stories brauchst | [Story-Backlog](product/story-backlog.md) |
| Code oder Laufzeitverhalten änderst | [Architekturregeln](governance/durable-rules.md#architektur-und-änderungen) |
| in einer Vertikalen implementierst | die passende Änderungs-Spec, [übergreifende Grenzen](architecture/verticals-and-boundaries.md#übergreifende-grenzen) und die Abschnitte der betroffenen Vertikalen |
| Themen, Quellen, Lernpfade oder Fragen bearbeitest oder prüfst | [Gemeinsame Inhaltsregeln](content/editorial-policy.md#gemeinsame-inhaltsregeln) |
| bestehende Thementexte, Titel oder Alltagsanker änderst | [Sprache und Stil](content/editorial-policy.md#sprache-und-stil) |
| redaktionelle Metadaten bearbeitest | [Pflichtmetadaten](content/editorial-policy.md#pflichtmetadaten) |
| fachliche Aussagen oder Quellen prüfst oder änderst | [Fachliche Qualitätsprüfung](content/editorial-policy.md#fachliche-qualitätsprüfung) und [Quellenregeln](content/source-selection.md) |
| ein neues Thema anlegst | die vollständige [redaktionelle Richtlinie](content/editorial-policy.md) und [Quellenregeln](content/source-selection.md) |
| Fragen erstellst, änderst oder prüfst | [Regeln für Fragen](content/question-authoring.md) |
| Tests anlegst oder änderst | [Testorganisation](quality/verification-strategy.md#testorganisation) |
| Tests, CI, Sicherheit oder Releases änderst | [Pflichtprüfungen](quality/verification-strategy.md#derzeit-ausgeführte-ci-prüfungen) |
| Tests lokal ausführen willst | [Verbindliche Silent-Runner und Ausgabe](quality/verification-strategy.md#lokale-testaufrufe-und-ausgabe) |
| einen ungewöhnlich langen Browserlauf untersuchst | [Lange Browserläufe diagnostizieren](quality/verification-strategy.md#lange-browserläufe-diagnostizieren) |
| Code, Tests, Laufzeitinhalte, App-Konfiguration, Abhängigkeiten oder Prüfskripte änderst | [Produkt und Datenschutz](governance/durable-rules.md#produkt-und-datenschutz), [Prüfumfang und Nachweise](quality/verification-strategy.md#prüfumfang-und-nachweise) und [Pflichtprüfungen](quality/verification-strategy.md#derzeit-ausgeführte-ci-prüfungen) |
| nur Dokumentation oder IDE-Einstellungen änderst | [Prüfumfang und Nachweise](quality/verification-strategy.md#prüfumfang-und-nachweise) |
| Abhängigkeiten änderst | [Abhängigkeiten und Sicherheit](governance/durable-rules.md#abhängigkeiten-und-sicherheit) |
| die erste Story verfeinerst oder aktivierst | [Erste Backlog-Story vorbereiten](changes/README.md#erste-backlog-story-vorbereiten) |
| eine Story vollständig umsetzen willst | [Eine Backlog-Story vollständig umsetzen](changes/README.md#eine-backlog-story-vollständig-umsetzen) |
| eine fachliche oder architektonische Änderung implementierst | die aktive Spec und [TDD und Spec-Nachweise](changes/README.md#tdd-und-spec-nachweise) |
| committen willst | [Abschluss und Archivierung](changes/README.md#abschluss-und-archivierung) und [Prüfumfang und Nachweise](quality/verification-strategy.md#prüfumfang-und-nachweise) |

## Geltungsreihenfolge

Die Handlungsschranken in AGENTS.md gelten unabhängig von dieser Rangfolge:

1. Die konkrete, aktive Änderungs-Spec in `docs/changes/active/`.
2. Die dauerhaften Vorgaben in `docs/governance/`.
3. Architektur-, Produkt-, Qualitäts- und Inhaltsdokumente.
4. Beschreibende Bestandsdokumente wie die Tool-Landkarte.

Bei widersprüchlichen Vorgaben nicht raten: Arbeit anhalten und Spec oder
dauerhafte Vorgabe ausdrücklich korrigieren.

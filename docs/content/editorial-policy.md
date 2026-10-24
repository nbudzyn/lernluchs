# Redaktionelle Richtlinie

## Gemeinsame Inhaltsregeln

Themen, Quellen und Metadaten: `src/verticals/topics/topics.ts`;
Eintragsreihenfolge bestimmt die Liste. Lernpfade: `src/verticals/topics/learningPaths.ts`,
mit stabilen Themen-IDs in Listenreihenfolge.

Auswahl und „Gefiltert nach“ sortieren Pfade nach den Positionen ihrer Themen in
der gemeinsamen Liste: erste abweichende Position entscheidet; bei gleichem
Anfang der kürzere Pfad, bei identischer Folge die Definitionsreihenfolge.
Pro unverändertem Bestand einmal berechnen; neue/geänderte Pfade automatisch einordnen.

IDs bei Textänderungen erhalten. Quellenprüfdaten nur für tatsächlich geprüfte Quellen ändern.
Fragen gehören zu Lernchecks. Bewusste Testbindungen an redaktionelle Texte an deren Definition kommentieren.
App und Inhalte sind deutsch; etablierte englische Fachbegriffe bleiben unübersetzt.
Vor Integration die [fachliche Qualitätsprüfung](#fachliche-qualitätsprüfung) anwenden.

## Sprache und Stil

Themen sind knapp und anwendungsnah: Problem, Kernkonzept, Java-/Web-Einsatz und
wichtige Grenze/Gegenbeispiel. Vom konkreten Problem zur Lösung führen, den
Geltungsbereich eingrenzen. Titel betonen die Lösung, Alltagsanker den Bedarf.
Prüfung/Abwägung unterstützt Anwendung und Grenzen; bei Technologie-/Lösungsthemen
ist sie nicht Hauptgegenstand. Bestehende Test-, Review- und Eval-Themen behalten ihren Prüfgegenstand.

Architekturbeispiele zeigen fachliche vertikale Module, öffentliche Schnittstellen
und kontrollierte Abhängigkeiten.

Jedes Thema hat einen festen [Alltagsanker](../product/glossary.md#alltagsanker)
(`everydayAnchor`): konkrete Alltagssituation aus Lernendensicht, umgangssprachlich,
ohne vorweggenommene Lösung, mit Punkt am Satzende. Er bleibt in `topics.ts`,
ist keine persönliche Eingabe und wird in beiden Listenansichten durchsucht.

## Pflichtmetadaten

Jeder veröffentlichte Inhalt hat eine dauerhafte ID, Veröffentlichungsdatum,
letzten fachlichen Prüftag, Wiedervorlage, Quellen mit Typ/Sprache und Status
(aktiv, beobachten, archiviert oder ersetzt).
Fachliche Inhaltsversionen erst mit der dafür vorgesehenen Story einführen.

## Fachliche Qualitätsprüfung

Vor Integration Aussagen gegen aktuelle, möglichst primäre Quellen prüfen;
Konkurrenztechnologien berücksichtigen, soweit sie die Einordnung verändern.
Quelle, Datum, Unsicherheit und bewusste Auslassungen dokumentieren.

Für jedes Thema gelten die [Quellenregeln](source-selection.md):
[Quellentypen](source-selection.md#welche-quellen-helfen),
[Recherchewege](source-selection.md#wie-findet-man-die-personen) und
[gezielte Aktualisierung](source-selection.md#themen-gezielt-aktualisieren).
Persönliche Empfehlungen, belegte Änderungen und Popularitätssignale auseinanderhalten.
Fragen nach den [Fragenregeln](question-authoring.md) erstellen, ändern und prüfen.

# Redaktionelle Richtlinie

## Gemeinsame Inhaltsregeln

Pflege Themen, Quellen und Metadaten in `src/verticals/topics/topics.ts`; die Eintragsreihenfolge bestimmt die Themenliste.
Lernpfade stehen in `src/verticals/topics/learningPaths.ts` und referenzieren stabile Themen-IDs in Listenreihenfolge.
IDs bei Textänderungen erhalten. Quellenprüfdaten nur je Quelle ändern, nicht pauschal für andere Quellen.
Fragen bleiben in der Lernchecks-Vertikale. Bewusste Testbindungen an redaktionelle Texte sind an deren Definition kommentiert.

Anwendung und Inhalte sind deutsch. Etablierte englische Fachbegriffe wie „Worktree“, „Spec-Driven Development“ oder „Context
Engineering“ bleiben unübersetzt.

Vor jeder Integration zusätzlich die [fachliche Qualitätsprüfung](#fachliche-qualitätsprüfung) beachten.

## Sprache und Stil

Themen sind knapp, konkret und anwendungsnah; sie ersetzen keine langen Originaldokumentationen.

Jedes Thema erklärt mindestens: gelöstes Problem, Kernkonzept, Einsatz in Java-/Web-Entwicklung und wichtige Grenze oder Gegenbeispiel.

Gehe vom konkreten Problem aus und zeige die passende Lösung. Grenze den Problemkontext ein, wenn die Lösung nur in bestimmten Fällen
sinnvoll ist. Titel stellen die Lösung, Alltagsanker den Bedarf heraus. Prüfung und Abwägung unterstützen die Anwendung oder erklären
Grenzen; sie sind nicht Hauptgegenstand eines Technologie- oder Lösungsthemas. Bestehende Themen über Tests, Reviews oder Evals behalten
ihren fachlichen Prüfgegenstand.

Architekturbeispiele stellen fachliche vertikale Module mit öffentlichen Schnittstellen und kontrollierten Abhängigkeiten in den Vordergrund.

Jedes Thema hat einen festen Alltagsanker (`everydayAnchor`, siehe
[Glossar](../product/glossary.md#alltagsanker)): konkrete Alltagssituation aus
Lernendensicht, umgangssprachlich, ohne vorweggenommene Lösung, mit Punkt am Satzende.
Er bleibt am Thema in `topics.ts`, ist keine persönliche Eingabe und wird in beiden
Listenansichten vom Schnellfilter durchsucht.

## Pflichtmetadaten

Jeder veröffentlichte Inhalt besitzt eine dauerhafte ID und mindestens:

- Veröffentlichungsdatum.
- Datum der letzten fachlichen Prüfung.
- Termin, zu dem eine erneute Prüfung fällig ist.
- Quellen mit Typ und Sprache.
- Status: aktiv, beobachten, archiviert oder ersetzt.

Der Status macht den veröffentlichten Stand kenntlich. Fachliche Inhaltsversionen werden erst mit der dafür vorgesehenen Story eingeführt.

## Fachliche Qualitätsprüfung

Prüfe Aussagen vor jeder Integration gegen aktuelle, möglichst primäre Quellen. Beziehe Konkurrenztechnologien ein, wenn sie die
Einordnung verändern könnten. Dokumentiere Quelle, Datum, Unsicherheiten und gegebenenfalls bewusste Auslassungen. Die bestehende
Tool-Landkarte dient als Rechercheausgangspunkt, nicht als Autorität.

Für Auswahl, Ergänzung und Ersatz von Quellen gelten die
[Quellenregeln](source-selection.md). Jedes bestehende und neue Thema erhält kuratiert ausgewählte Quellen nach diesen Regeln.

Für neue quellengebundene Fragen gelten die
[Regeln zur Fragenerstellung und Prüfung](question-authoring.md). 42 der 48 aktuellen Themen besitzen Fragen; die drei bisherigen Integrationsthemen,
Evals und Traces sowie Modell-Routing und Herkunft/Kennzeichnung von KI-Inhalten zunächst nicht.

# Redaktionelle Richtlinie

## Sprache und Stil

Themen einschließlich aller Quellen und Metadaten werden in `src/verticals/topics/topics.ts` gepflegt; die Reihenfolge der Einträge ist
die Themenlistenreihenfolge. Lernpfade stehen separat in `src/verticals/topics/learningPaths.ts` und referenzieren stabile Themen-IDs in
Listenreihenfolge. IDs bleiben bei Textänderungen erhalten. Quellenprüfdaten werden je Quelle geändert, nicht pauschal für andere Quellen.
Fragen bleiben in der Lernchecks-Vertikale. Bewusste Testbindungen an einzelne redaktionelle Texte sind an deren Definition kommentiert.

Die Anwendung und ihre Inhalte sind deutsch. Etablierte englische Fachbegriffe wie „Worktree“, „Spec-Driven Development“ oder „Context
Engineering“ bleiben unübersetzt. Themen sind knapp, konkret und anwendungsnah; sie ersetzen keine langen Originaldokumentationen.

Jedes Thema beantwortet mindestens: Welches Problem löst es? Was ist das Kernkonzept? Wo würde es in Java-/Web-Entwicklung eingesetzt?
Welche Grenze oder welches Gegenbeispiel ist wichtig?

Themen gehen von einem konkreten Problem aus und stellen die passende Lösung dar. Ist eine Lösung nur in bestimmten Fällen sinnvoll,
wird der Problemkontext entsprechend eingegrenzt. Titel und Alltagsanker stellen Lösung bzw. Bedarf heraus. Prüfung und Abwägung
unterstützen die Anwendung oder erklären Grenzen; sie werden nicht zum Hauptgegenstand eines Technologie- oder Lösungsthemas.
Ausdrücklich bestehende Themen über Tests, Reviews oder Evals behalten ihren fachlichen Prüfgegenstand.

Architekturbeispiele stellen fachliche vertikale Module mit öffentlichen Schnittstellen und kontrollierten Abhängigkeiten in den Vordergrund.

Jedes Thema enthält außerdem einen festen Alltagsanker (`everydayAnchor`, siehe
[Glossar](../product/glossary.md#alltagsanker)): eine konkrete Alltagssituation
aus Lernendensicht in umgangssprachlichem Ton, ohne vorweggenommene Lösung und
mit Punkt am Satzende. Der Alltagsanker bleibt am Thema in `topics.ts`; er ist
keine persönliche Eingabe und wird in beiden Listenansichten vom Schnellfilter
durchsucht.

## Pflichtmetadaten

Jeder veröffentlichte Inhalt besitzt eine dauerhafte ID und mindestens:

- Veröffentlichungsdatum.
- Datum der letzten fachlichen Prüfung.
- Termin, zu dem eine erneute Prüfung fällig ist.
- Quellen mit Typ und Sprache.
- Status: aktiv, beobachten, archiviert oder ersetzt.

Der Status macht den veröffentlichten Stand kenntlich. Fachliche Inhaltsversionen werden erst mit der dafür vorgesehenen Story eingeführt.

## Fachliche Qualitätsprüfung

Vor jeder Integration werden Aussagen gegen aktuelle, möglichst primäre Quellen geprüft. Konkurrenztechnologien werden einbezogen, wenn sie
die Einordnung verändern könnten. Die Prüfung dokumentiert Quelle, Datum, Unsicherheiten und ggf. bewusste Auslassungen. Die bestehende
Tool-Landkarte ist dafür ein Rechercheausgangspunkt, keine Autorität.

Für Auswahl, Ergänzung und Ersatz von Quellen gelten die
[Quellenregeln](source-selection.md). Jedes bestehende und neue Thema erhält kuratiert ausgewählte Quellen nach diesen Regeln.

Für neue quellengebundene Fragen gelten die
[Regeln zur Fragenerstellung und Prüfung](question-authoring.md). 42 der 48 aktuellen Themen besitzen Fragen; die drei bisherigen Integrationsthemen,
Evals und Traces sowie Modell-Routing und Herkunft/Kennzeichnung von KI-Inhalten zunächst nicht.

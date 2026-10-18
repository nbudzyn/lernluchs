## Fowler-Prüfung: Impressum

Als Entwickler möchte ich die Vertikale `imprint` anhand der 24 Fowler-Smells
bewerten. Bisher gibt es keine überzeugenden Befunde hoher oder mittlerer Priorität;
deshalb ist derzeit kein konkretes Refactoring beauftragt.

- Umfang: Vor Umsetzung gezielt `src/verticals/imprint/` und zugehörige Tests prüfen. Nur bei einem belegten Befund hoher oder mittlerer Priorität ein konkretes verhaltenserhaltendes Refactoring samt Priorität und Risiken in der aktiven Spec festlegen.
- Risiken: Künstliche Abstraktionen könnten die unabhängige Vertikale unnötig koppeln; Änderungen an Inhalt, Links oder Semantik wären kein bloßes Refactoring.
- Abnahme: Belegte Verbesserungen mit passenden Prüfungen umsetzen oder ohne Codeänderung schließen. Keine niedrigen Befunde und keine erzwungenen Umbauten. Bei produktrelevanter Umsetzung genau ein abschließendes Subagentenreview gemäß Reviewvertrag; bei rein dokumentiertem Ergebnis gilt die Dokumentationsausnahme.

## Ziel und Nicht-Ziele

Die Vertikale anhand aller 24 Smells aus Fowler/Beck, Refactoring (2. Auflage),
Kapitel 3 prüfen. Nur belegte hohe oder mittlere Befunde rechtfertigen ein
verhaltenserhaltendes Refactoring. Keine Änderung von Impressumstext,
Rechtsaussagen, Semantik oder Darstellung und keine neue gemeinsame Abstraktion
allein zur Angleichung an Hilfe.

## Umfang, Entscheidungen und Risiken

- Betroffene fachliche Vertikale: ausschließlich Impressum; keine Produktdatei geändert.
- Geprüft: alle drei Dateien unter src/verticals/imprint/, der Komponententest
  tests/verticals/imprint/Imprint.test.tsx und der E2E-Test
  e2e/verticals/imprint/imprint.spec.ts.
- Ergänzend gezielt geprüft: Hilfe-Styles als Vergleich, Impressum-Import und
  Einbindung in TopicBrowser sowie tests/architecture/help-boundary.test.ts
  und tests/architecture/public-entrypoints.test.ts.
- Entscheidung: kein belegter hoher oder mittlerer Befund; Abschluss als reine
  Dokumentations-Story. Keine niedrigen Befunde als Aufgaben aufnehmen.
- Risiko einer unnötigen Zusammenführung: fachlich unabhängige Präsentationen
  würden einen zusätzlichen gemeinsamen Änderungsgrund erhalten.
- Grenze: statische Entwurfsprüfung des aktuellen Bestands, keine rechtliche
  Bewertung des Impressums und kein Nachweis zukünftiger Änderungsmuster.

## Prüfbasis

Am 18.10.2026 die Liste der 24 Smells am veröffentlichten Buchkapitel von
[Fowler und Beck beim Verlag](https://www.informit.com/articles/article.aspx?p=2952392&seqNum=21)
abgeglichen. Die Bewertungen unten beruhen auf dem lokalen Code und den
vorhandenen Tests; Smell-Namen allein begründen keine Priorität.

## Bewertung aller 24 Smells

Alle Zeilen ergeben keinen belegten hohen oder mittleren Handlungsbedarf.

| Nr. | Smell | Begründung am geprüften Bestand |
| --- | --- | --- |
| 1 | Mysterious Name | Imprint und imprint-content benennen Inhalt und Zuständigkeit direkt; keine erklärungsbedürftige Fachoperation. |
| 2 | Duplicated Code | Die Basisdarstellung ähnelt Hilfe. Die wenigen lokalen CSS-Regeln sind überschaubar; ein wiederholtes Änderungsproblem ist nicht belegt. Ein gemeinsames Präsentationsmodul ist hier nicht gerechtfertigt. |
| 3 | Long Function | Imprint rendert ausschließlich eine kurze Section mit Überschrift und vier Hinweisen. |
| 4 | Long Parameter List | Die Komponente hat keine Parameter oder Props. |
| 5 | Global Data | Kein veränderlicher globaler Zustand; CSS nutzt lediglich vorhandene Designvariablen. |
| 6 | Mutable Data | Keine Zustandsänderung, Speicherung oder Mutation in der Vertikale. |
| 7 | Divergent Change | Komponente und Styles besitzen eine kohärente Aufgabe: die Impressumsdarstellung. |
| 8 | Shotgun Surgery | Inhalt und Darstellung bleiben lokal; kein verteilter fachlicher Änderungspfad sichtbar. |
| 9 | Feature Envy | Keine Zugriffe auf fremde Daten oder fachliche Interna. |
| 10 | Data Clumps | Keine gemeinsam herumgereichten Parameter- oder Datenbündel. |
| 11 | Primitive Obsession | Statische Hinweistexte benötigen weder Fachwertobjekte noch zusätzliche Validierungslogik. |
| 12 | Repeated Switches | Keine Fallunterscheidungen in der Vertikale. |
| 13 | Loops | Kein Produktionscode mit Schleifen; die Testiteration sammelt gezielt gerenderte Hinweise beziehungsweise Browservarianten. |
| 14 | Lazy Element | Die kleine Komponente besitzt Inhalt und Semantik; index.ts erfüllt den ausdrücklich vorgeschriebenen öffentlichen Einstiegspunkt. |
| 15 | Speculative Generality | Keine ungenutzten Props, Erweiterungspunkte oder abstrakten Darstellungsmodelle. |
| 16 | Temporary Field | Keine Felder oder zeitweise gültigen Zustände. |
| 17 | Message Chains | Keine verketteten Zugriffe auf fachliche Objekte im Produktionscode. |
| 18 | Middle Man | Der Reexport in index.ts schützt die Architekturgrenze und ist kein unnötiger delegierender Fachbaustein. |
| 19 | Insider Trading | Einziger Import der Komponente ist ihr eigenes CSS; Themen verwendet den öffentlichen Einstiegspunkt. |
| 20 | Large Class | Keine Klasse; eine kleine Komponente ohne zusätzliche Verantwortung. |
| 21 | Alternative Classes with Different Interfaces | Keine austauschbaren Implementierungen oder konkurrierenden Verträge. |
| 22 | Data Class | Kein passiver fachlicher Datencontainer; die Komponente stellt ihre eigenen Hinweise dar. |
| 23 | Refused Bequest | Keine Vererbung oder ungenutzten geerbten Verträge. |
| 24 | Comments | Keine erklärenden Reparaturkommentare im Produktionscode; der Testkommentar begründet die bewusste Bindung an den abgestimmten Wortlaut. |

## Abnahme und Nachweise

- Ergebnis: alle 24 Smells bewertet; kein konkretes Refactoring erforderlich.
- Bestehende Absicherung gelesen: Komponententest bindet alle vier freigegebenen
  Hinweise; E2E prüft Öffnen, sichtbare Inhalte, Darstellungsgleichheit mit Hilfe
  und Breitenbegrenzung bei 390/1280 Pixeln in hell/dunkel. Architekturtests
  sichern den öffentlichen Einstieg und die gerichteten Imports.
- RED → GREEN: entfällt, da kein Teil-Feature implementiert und kein Produktcode
  oder Test geändert wird.
- Subagentenreview: entfällt gemäß Dokumentationsausnahme.
- Unit-/E2E-/Build-/Audit-Läufe und manuelle Browserprüfung: gemäß
  Prüfumfang für reine Dokumentationsänderungen nicht erforderlich; vorhandene
  Tests wurden gelesen, nicht als neu ausgeführte grüne Nachweise ausgegeben.
- Dokumentationsprüfung: Story wortgetreu übernommen, genau ihren Backlog-Abschnitt
  entfernt, 24 Bewertungen, Dateiumfang und Whitespace geprüft (5 Prüfungen,
  Exitcode 0). Zusätzlich erschien eine Leerzeile vor der Hilfe-Story im Diff;
  Herkunft ungeklärt, erhalten und nicht zur Übernahme in diesen Commit vorgesehen.
  Die separate Leerzeile bleibt ausschließlich im lokalen Arbeitsbaum; der Index
  enthält nur die Entfernung dieser Story.
- Nutzerfreigabe für Commit und lokale Fast-forward-Integration in main erfolgt.
  Spec als 0066-fowler-imprint.md archiviert. Keine Produktänderung; manuelle
  Browserprüfung gemäß Dokumentationsausnahme nicht erforderlich. Push bleibt
  beim Entwickler.

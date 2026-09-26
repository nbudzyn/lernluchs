# Quellengebundene Auswahlfragen erstellen und prüfen

Diese Regeln gelten für jede Story, die neue Fragen für Lernkarten erstellt. Die jeweilige Änderungs-Spec bestimmt die betroffenen Karten
und den Fragenablauf. Für die Auswahl oder Änderung von Kartenquellen gelten zusätzlich die [Quellenregeln](source-selection.md); für
redaktionelle Metadaten und die fachliche Prüfung der Karten gilt die [redaktionelle Richtlinie](editorial-policy.md).

## Fragen finden und abgrenzen

- Leite Fragen aus den Quellen der jeweiligen Karte ab, vorrangig aus Primärquellen. Prüfe die Originalseite auf Aktualität, Erreichbarkeit
  und darauf, ob sie genau die gefragte Aussage trägt. Bei deutlichem Widerspruch zwischen Primär- und Sekundärquelle hat die Primärquelle
  Vorrang; halte verbleibende Unsicherheit fest.
- Frage nach einem belegten Fakt, einer klaren Empfehlung oder dem beispielhaft eindeutigen Ergebnis einer Trade-off-Abwägung. Vertiefende
  Details aus Quellen sind erwünscht, wenn sie für KI-gestützte Java-/Web-Entwicklung relevant sind. Setze kein Wissen voraus, das weder
  die Karte noch ihre zugeordneten Quellen tragen.
- Halte die fachlichen Schwerpunkte der Karten getrennt. Fragen innerhalb eines Pools sollen fachlich unterschiedlich sein und nicht
  dieselbe Aussage nur umformulieren.
- Ergänze oder ersetze Quellen und korrigiere eine Karte bei Bedarf gezielt nach den Quellenregeln. Vermeide dadurch schwammige Karten und
  Überschneidungen mit anderen Karten.

## Frage und Antworten formulieren

- Jede Frage hat genau eine eindeutig richtige Antwort und drei bis fünf plausible Antwortoptionen. Falsche Optionen sollen keine
  offensichtlich unsinnigen Ablenkungen sein und dürfen nicht ebenfalls richtig sein.
- Jede Option erhält eine kurze Erklärung, warum sie richtig oder falsch ist, und einen konkreten Quellenbezug. Verlinke möglichst direkt
  auf den tragenden Abschnitt der Originalquelle; verwende die Seiten-URL, wenn kein verlässlicher Abschnittslink möglich ist.
- Der Quellenlink öffnet sich erst nach bewusster Nutzeraktion. Ein nicht erreichbarer externer Link darf Lesen und Beantworten der Frage
  nicht verhindern.
- Nach der unabhängigen Prüfung müssen pro betroffenem neuem Fragenpool mindestens 25 fachlich unterschiedliche, gültige Fragen
  verbleiben. Eine spätere Spec darf für ihren Umfang einen höheren Mindestbestand festlegen.

## Unabhängig prüfen und validieren

1. Prüfe jede Frage samt Lösung, allen Optionen, Erklärungen und Quellenbezügen fachlich gegen die Originalquellen. Dokumentiere Prüftag,
   Quellen, Unsicherheiten, bewusst ausgelassene Aspekte und begründete Quellenänderungen in der Änderungs-Spec.
2. Erstelle für eine unabhängige externe KI-Prüfung einen kopierbaren Prompt mit **allen Fragen der betroffenen Karten** einschließlich
   stabiler Fragen-IDs, Optionen, richtiger Antwort, Erklärung je Option und Quellen-URLs. Der Prompt soll fachliche Fehler, mehrdeutige
   Antworten, schwache Ablenkungen und unzutreffende Quellenbezüge prüfen und nur eine sehr kurze Liste beanstandeter Fragen-IDs
   zurückgeben. Der Nutzer führt diese Prüfung aus und gibt das Ergebnis zurück.
3. Entferne beanstandete Fragen oder kläre und korrigiere sie vor der Integration fachlich; korrigierte Fragen werden erneut unabhängig
   geprüft. Ergänze nötigenfalls weitere Fragen, bis der Mindestbestand nach der Prüfung erreicht ist.
4. Validiere Fragen und Antworten zusammen mit dem öffentlichen Katalog. Der Nachweis umfasst eindeutige IDs, genau eine richtige
   Antwort, drei bis fünf Optionen, vollständige Erklärungen und gültige Quellenbezüge.

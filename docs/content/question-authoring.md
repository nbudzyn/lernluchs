# Quellengebundene Auswahlfragen erstellen und prüfen

Diese Regeln gelten für jede Story, die neue Fragen für Themen erstellt. Die jeweilige Änderungs-Spec bestimmt die betroffenen Themen und
den Fragenablauf. Für die Auswahl oder Änderung von Themenquellen gelten zusätzlich die [Quellenregeln](source-selection.md); für
redaktionelle Metadaten und die fachliche Prüfung der Themen gilt die [redaktionelle Richtlinie](editorial-policy.md).

## Fragen finden und abgrenzen

- Leite Fragen aus den Quellen des jeweiligen Themas ab, vorrangig aus Primärquellen. Prüfe die Originalseite auf Aktualität, Erreichbarkeit
  und darauf, ob sie genau die gefragte Aussage trägt. Bei deutlichem Widerspruch zwischen Primär- und Sekundärquelle hat die Primärquelle
  Vorrang; halte verbleibende Unsicherheit fest.
- Frage nach einem belegten Fakt, einer klaren Empfehlung oder dem beispielhaft eindeutigen Ergebnis einer Trade-off-Abwägung. Vertiefende
  Details aus Quellen sind erwünscht, wenn sie für KI-gestützte Java-/Web-Entwicklung relevant sind. Setze kein Wissen voraus, das weder das
  Thema noch die ihm zugeordneten Quellen tragen.
- Halte die fachlichen Schwerpunkte der Themen getrennt. Fragen innerhalb eines Pools sollen fachlich unterschiedlich sein und nicht
  dieselbe Aussage nur umformulieren.
- Ergänze oder ersetze Quellen und korrigiere ein Thema bei Bedarf gezielt nach den Quellenregeln. Vermeide dadurch schwammige Themen und
  Überschneidungen mit anderen Themen.

## Frage und Antworten formulieren

- Jede Frage hat genau eine eindeutig richtige Antwort und drei bis fünf plausible Antwortoptionen. Falsche Optionen sollen keine
  offensichtlich unsinnigen Ablenkungen sein und dürfen nicht ebenfalls richtig sein. Sie sollen kein "nur", "ausschließlich", "immer",
  "nie" o.Ä. enthalten.
- Jede Option erhält eine kurze Erklärung, warum sie richtig oder falsch ist, und einen konkreten Quellenbezug. Verlinke möglichst direkt
  auf den tragenden Abschnitt der Originalquelle; verwende die Seiten-URL, wenn kein verlässlicher Abschnittslink möglich ist.
- Der Quellenlink öffnet sich erst nach bewusster Nutzeraktion. Ein nicht erreichbarer externer Link darf Lesen und Beantworten der Frage
  nicht verhindern.
- Nach der unabhängigen Prüfung müssen pro betroffenem neuem Fragenpool mindestens 25 fachlich unterschiedliche, gültige Fragen verbleiben.
  Eine spätere Spec darf für ihren Umfang einen höheren Mindestbestand festlegen.

## Plausible Falschantworten entwickeln

1. Kläre Lernziel, Vorwissen der Zielgruppe und die genaue Aussage der Originalquelle. Formuliere die richtige Antwort und begründe, warum
   sie unter den Bedingungen der Frage richtig ist.
2. Suche bewusst nach weiteren Antworten, die auf die Frage ebenfalls zutreffen könnten. Ist die Frage dafür zu breit, präzisiere Akteur,
   Zeitpunkt, Einsatzsituation oder die gesuchte Art von Ursache. Lernziel und richtige Antwort bleiben erhalten. Schränke die Frage nicht
   durch Verweise auf ein bestimmtes Dokument, Kapitel oder dessen Formulierung ein und verrate die Lösung nicht durch den Fragetext. Bleibt
   keine eindeutig richtige Antwort übrig, verwirf die Frage.
3. Sammle unterschiedliche falsche Denkwege vor dem Schreiben der Optionen. Nutze vorrangig tatsächliche Fehler aus freiwilligen Probeläufen
   oder anderen zulässig vorliegenden Lernendenantworten. Fehlen solche Daten, kennzeichne die Denkwege als begründete Hypothesen, nicht als
   beobachtetes Nutzerverhalten.
4. Formuliere aus jedem Denkweg einen Kandidaten und erzeuge zunächst mehr Kandidaten als benötigt. Fachlich benachbarte, an sich sinnvolle
   Maßnahmen oder Ursachen können verlockend sein, wenn sie die konkrete Frage nicht beantworten. Vermeide offensichtlich unsinnige
   Antworten, bloße Negationen und mehrere Varianten desselben Irrtums.
5. Prüfe jeden Kandidaten einzeln: Welcher Denkfehler macht ihn plausibel? Warum ist er unter der genauen Frage falsch? Belegt die Quelle
   diese Abgrenzung? Könnte eine fachkundige Person ihn dennoch begründet als richtig ansehen? Eine Aussage darf außerhalb der Frage
   sinnvoll oder wahr sein; als Antwort auf diese Frage muss sie eindeutig falsch sein. Verwirf oder überarbeite mehrdeutige Kandidaten und
   präzisiere nötigenfalls erneut die Frage.
6. Wähle fachlich unterschiedliche Distraktoren und gleiche Antwortart, Konkretionsgrad und sprachliche Form aller Optionen an. Entferne
   Hinweise durch Grammatik, auffällige Länge oder aus der Frage nur in der richtigen Antwort wiederholte Wörter. Absolute Wörter wie
   „immer“, „nie“ oder „ausschließlich“ dürfen eine Falschantwort nicht schon ohne Fachwissen entlarven.
7. Halte für jeden gewählten Distraktor den vermuteten Denkfehler, seinen Reiz, den eindeutigen Ausschlussgrund und den tragenden
   Quellenbezug fest. Lasse ihn unabhängig auf fachliche Richtigkeit, Mehrdeutigkeit und Plausibilität prüfen. Wenn freiwillige Probeläufe
   vorliegen, prüfe anschließend, welche Optionen tatsächlich gewählt wurden, und überarbeite schwache Distraktoren. Die eigene
   Plausibilitätsvermutung ersetzt diesen Nachweis nicht.

## Unabhängig prüfen und validieren

1. Prüfe jede Frage samt Lösung, allen Optionen, Erklärungen und Quellenbezügen fachlich gegen die Originalquellen. Dokumentiere Prüftag,
   Quellen, Unsicherheiten, bewusst ausgelassene Aspekte und begründete Quellenänderungen in der Änderungs-Spec.
2. Erstelle für eine unabhängige externe KI-Prüfung einen kopierbaren Prompt mit **allen Fragen der betroffenen Themen** einschließlich
   stabiler Fragen-IDs, Optionen, richtiger Antwort, Erklärung je Option und Quellen-URLs. Der Prompt soll fachliche Fehler, mehrdeutige
   Antworten, schwache Ablenkungen und unzutreffende Quellenbezüge prüfen und nur eine sehr kurze Liste beanstandeter Fragen-IDs
   zurückgeben. Der Nutzer führt diese Prüfung aus und gibt das Ergebnis zurück.
3. Entferne beanstandete Fragen oder kläre und korrigiere sie vor der Integration fachlich; korrigierte Fragen werden erneut unabhängig
   geprüft. Ergänze nötigenfalls weitere Fragen, bis der Mindestbestand nach der Prüfung erreicht ist.
4. Validiere Fragen und Antworten zusammen mit dem öffentlichen Katalog. Der Nachweis umfasst eindeutige IDs, genau eine richtige Antwort,
   drei bis fünf Optionen, vollständige Erklärungen und gültige Quellenbezüge.

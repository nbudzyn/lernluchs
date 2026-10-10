# Quellengebundene Fragen erstellen und prüfen

Diese Regeln gelten beim Erstellen, Ändern und Prüfen von Fragen. Bei Story-Arbeit bestimmt die Spec betroffene Themen und Fragenablauf.
Zusätzlich gelten die [Quellenregeln](source-selection.md) bei Quellenwahl oder -änderung und die
[redaktionelle Richtlinie](editorial-policy.md) für Metadaten und fachliche Themenprüfung.

## Fragen finden und abgrenzen

- Leite Fragen aus den Themenquellen ab, vorrangig aus Primärquellen. Prüfe Aktualität und Erreichbarkeit der Originalseite und ob sie
  genau die gefragte Aussage trägt. Bei deutlichem Widerspruch hat die Primärquelle Vorrang; dokumentiere verbleibende Unsicherheit.
- Frage nach belegten Fakten, klaren Empfehlungen oder beispielhaft eindeutigen Trade-off-Ergebnissen. Vertiefende Quellendetails sind
  erwünscht, wenn sie für KI-gestützte Java-/Web-Entwicklung relevant sind. Setze nur Wissen voraus, das Thema oder zugeordnete Quellen tragen.
- Halte Themenschwerpunkte getrennt. Poolfragen sollen fachlich unterschiedlich sein, nicht dieselbe Aussage umformulieren.
- Ergänze oder ersetze Quellen und korrigiere ein Thema bei Bedarf gezielt nach den Quellenregeln. Vermeide dadurch schwammige Themen und
  Überschneidungen mit anderen Themen.

## Frage und Antworten formulieren

- Jede Frage hat genau eine eindeutig richtige Antwort und drei bis fünf plausible Optionen. Falsche Optionen sollen nicht offensichtlich
  unsinnig sein und dürfen nicht ebenfalls richtig sein. Sie sollen kein "nur", "ausschließlich", "immer", "nie" o.Ä. enthalten.
- Erkläre je Option kurz, warum sie richtig oder falsch ist, mit konkretem Quellenbezug. Verlinke möglichst den tragenden Originalabschnitt;
  nutze die Seiten-URL, wenn kein verlässlicher Abschnittslink möglich ist.
- Quellenlinks erst nach bewusster Nutzeraktion öffnen. Unerreichbare externe Links dürfen Lesen und Beantworten nicht verhindern.
- Nach unabhängiger Prüfung müssen je betroffenem neuen Pool mindestens 25 fachlich unterschiedliche, gültige Fragen verbleiben.
  Spätere Specs dürfen für ihren Umfang einen höheren Mindestbestand festlegen.

## Plausible Falschantworten entwickeln

1. Kläre Lernziel, Zielgruppen-Vorwissen und genaue Originalaussage. Formuliere die richtige Antwort und begründe sie unter den
   Bedingungen der Frage.
2. Suche bewusst weitere mögliche richtige Antworten. Präzisiere bei zu breiter Frage Akteur, Zeitpunkt, Einsatzsituation oder gesuchte
   Ursachenart. Erhalte Lernziel und richtige Antwort. Nicht durch Dokument-, Kapitel- oder Formulierungsverweise einschränken und die
   Lösung nicht im Fragetext verraten. Verwirf Fragen ohne eindeutig richtige Antwort.
3. Sammle vor dem Schreiben der Optionen unterschiedliche falsche Denkwege. Nutze vorrangig tatsächliche Fehler aus freiwilligen
   Probeläufen oder anderen zulässig vorliegenden Lernendenantworten. Ohne solche Daten: Denkwege als begründete Hypothesen kennzeichnen,
   nicht als beobachtetes Nutzerverhalten.
4. Formuliere je Denkweg einen Kandidaten, zunächst mehr als benötigt. Fachlich benachbarte, sinnvolle Maßnahmen oder Ursachen können
   verlocken, obwohl sie die Frage nicht beantworten. Vermeide offensichtlich unsinnige Antworten, bloße Negationen und Varianten desselben Irrtums.
5. Prüfe jeden Kandidaten einzeln: Welcher Denkfehler macht ihn plausibel? Warum ist er unter der genauen Frage falsch? Belegt die Quelle
   diese Abgrenzung? Könnte eine fachkundige Person ihn dennoch begründet als richtig ansehen? Eine Aussage darf außerhalb der Frage
   sinnvoll oder wahr sein; als Antwort auf diese Frage muss sie eindeutig falsch sein. Verwirf oder überarbeite mehrdeutige Kandidaten und
   präzisiere nötigenfalls erneut die Frage.
6. Wähle fachlich unterschiedliche Distraktoren und gleiche Antwortart, Konkretionsgrad und sprachliche Form aller Optionen an. Entferne
   Hinweise durch Grammatik, auffällige Länge oder aus der Frage nur in der richtigen Antwort wiederholte Wörter. Absolute Wörter wie
   „immer“, „nie“ oder „ausschließlich“ dürfen eine Falschantwort nicht schon ohne Fachwissen entlarven.
7. Dokumentiere je Distraktor vermuteten Denkfehler, Reiz, eindeutigen Ausschlussgrund und tragenden Quellenbezug. Lasse fachliche
   Richtigkeit, Mehrdeutigkeit und Plausibilität unabhängig prüfen. Bei freiwilligen Probeläufen anschließend tatsächliche Optionswahl
   prüfen und schwache Distraktoren überarbeiten. Eigene Plausibilitätsvermutungen ersetzen diesen Nachweis nicht.

## Unabhängig prüfen und validieren

1. Prüfe jede Frage samt Lösung, allen Optionen, Erklärungen und Quellenbezügen gegen die Originalquellen. Dokumentiere Prüftag, Quellen,
   Unsicherheiten, bewusste Auslassungen und begründete Quellenänderungen in der Spec.
2. Erstelle einen kopierbaren Prompt zur unabhängigen externen KI-Prüfung mit **allen Fragen der betroffenen Themen**: stabile Fragen-IDs,
   Optionen, richtige Antwort, Erklärung je Option und Quellen-URLs. Er soll fachliche Fehler, Mehrdeutigkeit, schwache Ablenkungen und
   unzutreffende Quellenbezüge prüfen und nur eine sehr kurze Liste beanstandeter Fragen-IDs liefern. Der Nutzer führt die Prüfung aus
   und gibt das Ergebnis zurück.
3. Entferne beanstandete Fragen oder kläre und korrigiere sie vor Integration fachlich. Korrigierte Fragen erneut unabhängig prüfen.
   Ergänze nötigenfalls Fragen bis zum Mindestbestand nach der Prüfung.
4. Validiere Fragen und Antworten mit den öffentlichen Themen: eindeutige IDs, genau eine richtige Antwort, drei bis fünf Optionen,
   vollständige Erklärungen und gültige Quellenbezüge nachweisen.

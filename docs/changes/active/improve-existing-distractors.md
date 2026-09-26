# Bessere Falschantworten in allen vorhandenen Lernchecks

## Ziel und Umfang

Alle Falschantworten der derzeit sechs Fragenpools mit insgesamt 150 Fragen werden nach dem Verfahren in
[Regeln für Auswahlfragen](../../content/question-authoring.md) durch plausible, eindeutig falsche Distraktoren ersetzt. Pro Frage
bleiben genau eine richtige Antwort und insgesamt drei bis fünf plausible Optionen; die Zahl wird nicht mit schwachen
Fülloptionen erreicht. Auch allgemein sinnvolle Aussagen dürfen nur als Distraktoren dienen, wenn sie die konkrete Frage
eindeutig nicht beantworten. Jeder Distraktor erhält eine kurze Erklärung seines Ausschlussgrundes und einen passenden
Quellenbezug.

Die vorhandenen Fragen und richtigen Antworten bleiben im fachlichen Kern erhalten und dürfen für Eindeutigkeit und
Verständlichkeit umformuliert werden. Eine Frage darf durch Angaben zu Akteur, Zeitpunkt, Einsatzsituation oder gesuchter
Ursache präzisiert werden, nicht durch einen Verweis auf ein bestimmtes Dokument, Kapitel oder dessen Formulierung. Die
Frage darf die richtige Antwort nicht sprachlich verraten. Bleibt sie mit den vorhandenen Kartenquellen und im Kern
gleicher Antwort mehrdeutig, wird sie durch eine neue, quellengebundene Frage zur selben Karte ersetzt. Für überarbeitete
Fragen bleiben die IDs stabil; echte Ersatzfragen erhalten neue IDs. Nach der Prüfung bleiben je Pool mindestens 25
fachlich unterschiedliche, gültige Fragen.

Jede Frage samt richtiger Antwort, allen Distraktoren, Erklärungen und Quellenbezügen wird gegen die Originalquellen
geprüft. Für alle betroffenen Pools wird anschließend der in den Fragenregeln vorgesehene kopierbare Prüf-Prompt erstellt;
der Nutzer führt die unabhängige externe KI-Prüfung aus. Beanstandungen werden vor der Integration geklärt oder durch
erneut geprüfte Fragen ersetzt. Die Validierung umfasst insbesondere eindeutige IDs, genau eine richtige Antwort, drei
bis fünf Optionen und vollständige Erklärungen und Quellenbezüge.

Abgrenzung:

- Lernkartentexte und die den Karten zugeordneten Quellen bleiben unverändert. Fragen, Antwortoptionen, Erklärungen und
  Verweise auf die bestehenden Quellen dürfen angepasst werden.
- Für Karten ohne bestehenden Fragenpool werden keine Fragen erzeugt.

Vertikalen: Lernchecks

## Risiken und Abnahme

- **Mehrdeutige Antworten:** Jede überarbeitete oder ersetzte Frage wird gegen die Originalquellen darauf geprüft, dass genau eine
  Option die präzisierte Frage beantwortet. Fachlich naheliegende, aber ebenfalls richtige Alternativen werden verworfen.
- **Schwache Distraktoren:** Zu jeder falschen Option sind ein eigener vermuteter Denkfehler, der Ausschlussgrund und der tragende
  Quellenbezug nachvollziehbar. Optionen werden auf sprachliche Hinweise und doppelte Fehlvorstellungen geprüft.
- **Bestand und Grenzen:** Die sechs bestehenden Pools behalten nach der unabhängigen Prüfung jeweils mindestens 25 fachlich
  unterschiedliche Fragen. IDs überarbeiteter Fragen bleiben stabil; Ersatzfragen erhalten neue eindeutige IDs. Lernkartentexte
  und die zugeordneten Quellen bleiben unverändert; Karten ohne Fragenpool bleiben ohne Fragenpool.
- **Vertikalgrenze:** Der Fragenbestand liegt technisch im Inhaltskatalog und wird von Lernchecks angezeigt. Änderungen bleiben
  auf diese beiden Vertikalen beschränkt; eine Neugestaltung des Fragenablaufs gehört nicht zu dieser Story.
- **Unabhängige Prüfung:** Der vollständige Bestand aller betroffenen Pools wird mit IDs, Optionen, Lösungen, Erklärungen und
  Quellen-URLs zur externen KI-Prüfung bereitgestellt. Beanstandete Fragen werden korrigiert oder ersetzt und danach erneut
  unabhängig geprüft.
- **Technische und sichtbare Abnahme:** Katalogvalidierung und Pflichtsuite sind grün. Im lokalen Browser werden Fragen mit drei
  bis fünf Optionen sowie die zugehörigen Erklärungen und Quellenlinks geprüft. Der Nachweis steht vor einem Commit in dieser Spec.

## Umsetzung und Nachweise

Für jeden der sechs Fragenpools werden RED, GREEN und REFACTOR sowie die Quellenprüfung während der Umsetzung mit tatsächlichen
Ergebnissen dokumentiert. Die unabhängige Prüfung erfolgt auf dem vollständigen überarbeiteten Bestand.

| Schritt | Ergebnis |
| --- | --- |
| RED je Fragenpool | Ausstehend. Fachlich begründeten Fehlschlag vor der jeweiligen Inhaltsänderung dokumentieren. |
| GREEN je Fragenpool | Ausstehend. Überarbeitete Fragen gegen die vorhandenen Kartenquellen prüfen und grüne Tests festhalten. |
| REFACTOR je Fragenpool | Ausstehend. Bereinigungen und anschließend grüne Tests festhalten. |
| Externe Prüfung | Ausstehend. Vollständigen Prüf-Prompt und das vom Nutzer zurückgegebene Ergebnis dokumentieren; Korrekturen erneut prüfen. |
| Abnahme | Ausstehend. Pflichtsuite, lokale Browserprüfung und manuelle Bestätigung des Nutzers dokumentieren. |

# Produktstand

Lernluchs ist eine öffentliche, statische Lernanwendung für KI-unterstützte Java- und Webentwicklung. Lernende können die Themen aus
einer gemeinsamen Liste auswählen und deren kurze Inhalte mit kuratierten Quellen und Aktualitätsangaben lesen. Jedes Thema (auch ein
künftig ergänztes) erhält Quellen nach den [Regeln zur Quellenauswahl](../content/source-selection.md). Die Inhalte werden redaktionell
geprüft und als versionierte, nur lesbare Themen veröffentlicht.

Für viele der Themen stehen quellengebundene Fragen bereit. Aus der Themenliste startet ein Durchlauf mit fünf
zufällig ausgewählten Fragen. Nach der letzten Antwort zeigt die App richtige und gewählte falsche Antworten mit Begründungen und
Quellenlinks. Ein Abbruch verwirft die Antworten. Fünf richtige Antworten speichern das Thema unter seiner dauerhaften ID lokal als
„gelernt“. Die Themenliste zeigt dafür einen grünen, für Screenreader beschrifteten Haken. Der Lernstand bleibt nach Reload und einem
späteren nicht bestandenen Durchlauf erhalten. Bei Speicherfehlern bleibt der Lerncheck nutzbar und meldet, dass das Ergebnis nicht
dauerhaft gespeichert wurde.

Die Liste enthält eine Reihe von Lernpfaden. Sie lassen sich über das Icon eines Themas gemeinsam
oder über ihren angezeigten Namen einzeln filtern. Themen, die mehreren Pfaden angehören, erscheinen in der gemeinsamen Liste nur einmal.

Oberhalb der Themenliste steht ein Schnellfilter. Jede Eingabeänderung wirkt sofort und
zusätzlich zum Lernpfadfilter. „Filter aufheben“ leert beide Filter. Ein ausgefiltertes ausgewähltes Thema wird geschlossen; rechts erscheint
wieder die Hilfe. Escape im Suchfeld leert nur den Suchtext und erhält den Lernpfadfilter sowie den Eingabefokus. Die Suche bleibt flüchtig auf dem Gerät.

Geplante Erweiterungen und ihre Umsetzungsreihenfolge stehen im
[Story-Backlog](story-backlog.md).

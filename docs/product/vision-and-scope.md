# Produktstand

Lernluchs ist eine öffentliche, statische Lernanwendung für KI-unterstützte Java- und Webentwicklung. Lernende können derzeit 16 Themen in
einer gemeinsamen Liste auswählen und deren kurze Inhalte mit kuratierten Quellen und Aktualitätsangaben lesen. Jedes Thema, auch ein
künftig ergänztes, erhält Quellen nach den [Regeln zur Quellenauswahl](../content/source-selection.md). Die Inhalte werden redaktionell
geprüft und als versionierter, nur lesbarer Katalog veröffentlicht.

Für alle 16 Themen des aktuellen Katalogs stehen quellengebundene Auswahlfragen bereit, auch für das Git-Thema ohne Lernpfad. Aus der
Themenliste startet ein flüchtiger Durchlauf mit fünf
zufällig ausgewählten Fragen. Nach der letzten Antwort zeigt die App richtige und gewählte falsche Antworten mit Begründungen und
Quellenlinks. Ein Abbruch verwirft die Antworten. Fünf richtige Antworten speichern das Thema unter seiner dauerhaften ID lokal als
„gelernt“. Die Themenliste zeigt dafür einen grünen, für Screenreader beschrifteten Haken. Der Lernstand bleibt nach Reload und einem
späteren nicht bestandenen Durchlauf erhalten. Bei Speicherfehlern bleibt der Lerncheck nutzbar und meldet, dass das Ergebnis nicht
dauerhaft gespeichert wurde.

Die Liste enthält auch drei Themen zum sicheren Arbeiten mit Coding-Agenten:
Vertrauensgrenzen für Kontext, Schutz sensibler Daten und Prüfung KI-generierter Änderungen. Die drei vorhandenen Lernpfade lassen sich über
das Icon eines Themas gemeinsam oder über ihren angezeigten Namen einzeln filtern. Die Themen bleiben in einer gemeinsamen Liste ohne eigene
Pfadabschnitte.

Geplante Erweiterungen und ihre Umsetzungsreihenfolge stehen im
[Story-Backlog](story-backlog.md).

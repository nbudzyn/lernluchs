# Produktstand

Lernluchs ist eine öffentliche, statische Lernanwendung für KI-unterstützte Java- und Webentwicklung. Lernende können derzeit 26 Themen in
einer gemeinsamen Liste auswählen und deren kurze Inhalte mit kuratierten Quellen und Aktualitätsangaben lesen. Jedes Thema, auch ein
künftig ergänztes, erhält Quellen nach den [Regeln zur Quellenauswahl](../content/source-selection.md). Die Inhalte werden redaktionell
geprüft und als versionierter, nur lesbarer Katalog veröffentlicht.

Für die bisherigen 16 Themen stehen quellengebundene Auswahlfragen bereit, auch für das Git-Thema ohne Lernpfad. Die zehn neuen Themen
besitzen noch keine Fragenpools und bieten daher keinen Lerncheck an. Aus der
Themenliste startet ein flüchtiger Durchlauf mit fünf
zufällig ausgewählten Fragen. Nach der letzten Antwort zeigt die App richtige und gewählte falsche Antworten mit Begründungen und
Quellenlinks. Ein Abbruch verwirft die Antworten. Fünf richtige Antworten speichern das Thema unter seiner dauerhaften ID lokal als
„gelernt“. Die Themenliste zeigt dafür einen grünen, für Screenreader beschrifteten Haken. Der Lernstand bleibt nach Reload und einem
späteren nicht bestandenen Durchlauf erhalten. Bei Speicherfehlern bleibt der Lerncheck nutzbar und meldet, dass das Ergebnis nicht
dauerhaft gespeichert wurde.

Die Liste enthält fünf Lernpfade, darunter „Java-/Web-Code technisch analysieren und modernisieren“ und „Parallele Coding-Agenten
kritisch erproben“. Sie lassen sich über das Icon eines Themas gemeinsam oder über ihren angezeigten Namen einzeln filtern. Themen, die
mehreren Pfaden angehören, erscheinen in der gemeinsamen Liste nur einmal; das Git-Thema bleibt ohne Pfad. Die Pfade enthalten unter
anderem Themen zu Worktrees, Code-Navigation, versionsbezogener Dokumentation, OpenRewrite und kontrollierter Agentenparallelität.

Geplante Erweiterungen und ihre Umsetzungsreihenfolge stehen im
[Story-Backlog](story-backlog.md).

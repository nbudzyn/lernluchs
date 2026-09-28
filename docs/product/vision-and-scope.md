# Produktstand

Lernluchs ist eine öffentliche, statische Lernanwendung für KI-unterstützte Java- und Webentwicklung. Lernende können derzeit 46 Themen in
einer gemeinsamen Liste auswählen und deren kurze Inhalte mit kuratierten Quellen und Aktualitätsangaben lesen. Jedes Thema, auch ein
künftig ergänztes, erhält Quellen nach den [Regeln zur Quellenauswahl](../content/source-selection.md). Die Inhalte werden redaktionell
geprüft und als versionierter, nur lesbarer Katalog veröffentlicht.

Für alle 46 Themen stehen quellengebundene Auswahlfragen bereit, auch für die Themen zu Fachsprache, Projektwissen, Git, OKF, Zielklärung,
Legacy-Spezifikation, Standards, LLM-Fehlbarkeit, Agentenkontext, Codegraphen, Tokenwerkzeugen, Coding-Agent-Oberflächen, Skills,
Spec-Frameworks, Automatisierung, Web-Sicherheitsbaselines, parallelen Agentengrenzen, Worktrees, Code-Navigation, Context7,
UI-Komponenten mit Penpot und Storybook, Java-API-Dokumentation, Bug-Triage bis zum PR, lokale KI-Stacks, spezialisierte Subagents,
Agenten-Handoffs, Werkzeugrechte, deterministische Prüf-Gates, OpenRewrite-Migrationen, den Vergleich serieller und paralleler Agentenarbeit
und Agenten-Harnesses. Aus der Themenliste startet ein flüchtiger Durchlauf mit fünf
zufällig ausgewählten Fragen. Nach der letzten Antwort zeigt die App richtige und gewählte falsche Antworten mit Begründungen und
Quellenlinks. Ein Abbruch verwirft die Antworten. Fünf richtige Antworten speichern das Thema unter seiner dauerhaften ID lokal als
„gelernt“. Die Themenliste zeigt dafür einen grünen, für Screenreader beschrifteten Haken. Der Lernstand bleibt nach Reload und einem
späteren nicht bestandenen Durchlauf erhalten. Bei Speicherfehlern bleibt der Lerncheck nutzbar und meldet, dass das Ergebnis nicht
dauerhaft gespeichert wurde.

Die Liste enthält 13 Lernpfade. Zu den fünf bisherigen Pfaden kommen acht Pfade für Projektwissen, Auftragsklärung, Kontextsteuerung,
Werkzeugwahl, Webgestaltung, Sicherheit, Automatisierung und lokale KI-Stacks hinzu. Sie lassen sich über das Icon eines Themas gemeinsam
oder über ihren angezeigten Namen einzeln filtern. Themen, die mehreren Pfaden angehören, erscheinen in der gemeinsamen Liste nur einmal;
auch das Git-Thema gehört jetzt zu einem Pfad. Die neuen Karten behandeln unter anderem OKF, Codegraphen, Skills, Spec-Frameworks,
Web-Sicherheitsbaselines, Storybook/Penpot und alternative Agenten-Stacks.

Geplante Erweiterungen und ihre Umsetzungsreihenfolge stehen im
[Story-Backlog](story-backlog.md).

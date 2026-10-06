# Produktstand

Lernluchs ist eine öffentliche, statische Lernanwendung für KI-unterstützte Java- und Webentwicklung. Lernende können derzeit 49 Themen in
einer gemeinsamen Liste auswählen und deren kurze Inhalte mit kuratierten Quellen und Aktualitätsangaben lesen. Jedes Thema, auch ein
künftig ergänztes, erhält Quellen nach den [Regeln zur Quellenauswahl](../content/source-selection.md). Die Inhalte werden redaktionell
geprüft und als versionierte, nur lesbare Themen veröffentlicht.

Für die bisherigen 45 Themen stehen quellengebundene Fragen bereit, auch für die Themen zu Fachsprache, Projektwissen, Git, OKF, Zielklärung,
Legacy-Spezifikation, Standards, LLM-Fehlbarkeit, Agentenkontext, Codegraphen, Tokenwerkzeugen, Coding-Agent-Oberflächen, Skills,
Spec-Frameworks, Automatisierung, Web-Sicherheitsbaselines, parallelen Agentengrenzen, Worktrees, Context7,
UI-Komponenten mit Penpot und Storybook, Java-API-Dokumentation, Bug-Triage bis zum PR, lokale KI-Stacks, spezialisierte Subagents,
Agenten-Handoffs, Werkzeugrechte, deterministische Prüf-Gates, OpenRewrite-Migrationen, den Vergleich serieller und paralleler Agentenarbeit
und Agenten-Harnesses. Aus der Themenliste startet ein flüchtiger Durchlauf mit fünf
zufällig ausgewählten Fragen. Nach der letzten Antwort zeigt die App richtige und gewählte falsche Antworten mit Begründungen und
Quellenlinks. Ein Abbruch verwirft die Antworten. Fünf richtige Antworten speichern das Thema unter seiner dauerhaften ID lokal als
„gelernt“. Die Themenliste zeigt dafür einen grünen, für Screenreader beschrifteten Haken. Der Lernstand bleibt nach Reload und einem
späteren nicht bestandenen Durchlauf erhalten. Bei Speicherfehlern bleibt der Lerncheck nutzbar und meldet, dass das Ergebnis nicht
dauerhaft gespeichert wurde.

Das Thema zur Symbol- und Referenzsuche wurde einschließlich Quellen, Fragen und Lernpfad-Zuordnungen entfernt. Ein vorhandener lokaler
Lernstand für seine ID wird ignoriert; der Lernstand anderer Themen bleibt erhalten.

Die drei neuen Themen behandeln Protokollintegration mit MCP, A2A und ACP, Modell- und API-Lebenszyklen sowie KI-Funktionen in Java-Webanwendungen mit Spring AI, LangChain4j und weiteren Integrationsoptionen. Sie besitzen zunächst keine Fragenpools. Ein weiteres Thema erklärt Evals und Traces mit repräsentativen Aufgaben, getrennten Bewertungen von Ergebnissen und Toolabläufen sowie Grenzen von LLM-Judges. Es besitzt ebenfalls keinen Fragenpool und gehört zu den bestehenden Pfaden für Java-KI-Anwendungsbau und kontrollierte Automatisierung. Das Token-Thema unterscheidet Kommandoausgabekompression, Kontextkompression, knappe Prosa und die Vermeidung unnötigen Codes; Quellen für Headroom und Ponytail sowie ein ergänzendes Video sind verfügbar.

Neun bestehende Themen wurden um aktuelle Entwicklungen zu Harness-Sitzungen, Repository-Suche, Spec-Abgleich, Laufumgebungen, Skills, MCP-Revisionen, Java-KI-Versionen, Reviews und Prüf-Gates ergänzt. Quellenprüfdaten werden einzeln gepflegt; die überarbeiteten Themen sind fachlich am 7. Oktober 2026 geprüft.

Die Liste enthält 14 Lernpfade. Zu den fünf bisherigen Pfaden kommen neun Pfade für Projektwissen, Auftragsklärung, Kontextsteuerung,
Werkzeugwahl, Webgestaltung, Sicherheit, Automatisierung, lokale KI-Stacks und Java-KI-Anwendungsbau hinzu. Sie lassen sich über das Icon eines Themas gemeinsam
oder über ihren angezeigten Namen einzeln filtern. Themen, die mehreren Pfaden angehören, erscheinen in der gemeinsamen Liste nur einmal;
auch das Git-Thema gehört jetzt zu einem Pfad.

Oberhalb der Themenliste steht ein Schnellfilter. Er sucht die vollständige Eingabe unabhängig von Groß-/Kleinschreibung in Titel, Problem,
Kernkonzept, Java-/Web-Anwendung und Konzeptgrenzen; Quellen und Metadaten bleiben ausgeschlossen. Jede Eingabeänderung wirkt sofort und
zusätzlich zum Lernpfadfilter. „Filter aufheben“ leert beide Filter. Ein ausgefiltertes ausgewähltes Thema wird geschlossen; rechts erscheint
wieder die Hilfe. Escape im Suchfeld leert nur den Suchtext und erhält den Lernpfadfilter sowie den Eingabefokus. Die Suche bleibt flüchtig auf dem Gerät.

Geplante Erweiterungen und ihre Umsetzungsreihenfolge stehen im
[Story-Backlog](story-backlog.md).

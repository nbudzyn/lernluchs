## Vierter und fünfter Lernpfad

Die Vertikale Themen wird um den Lernpfad **Java-/Web-Code technisch analysieren und modernisieren** erweitert (vierter Lernpfad):

1. Git-Worktrees für isolierte Änderungen nutzen - neu
2. Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen - neu
3. Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen - neu
4. Modulgrenzen und öffentliche Schnittstellen gestalten - vorhanden
5. Fachverhalten mit TDD absichern - vorhanden
6. Java-Architekturregeln mit ArchUnit prüfen - vorhanden
7. Java-/Spring-Migrationen mit OpenRewrite durchführen - neu
8. Webabläufe mit Playwright prüfen - vorhanden

Die Vertikale Themen wird außerdem um den Lernpfad **Parallele Coding-Agenten kritisch erproben** erweitert (fünfter Lernpfad):

1. Aufgaben und Abbruchkriterien für parallele Agenten festlegen - neu
2. Git-Worktrees für isolierte Änderungen nutzen - vorhanden
3. Spezialisierte Subagents mit klarem Aufgabenbesitz einsetzen - neu
4. Kontext zwischen Agenten gezielt übergeben - neu
5. Werkzeugrechte und MCP-Zugriffe begrenzen - neu
6. Deterministische Prüf-Gates im Agenten-Harness gestalten - neu
7. KI-generierte Änderungen prüfen und übernehmen - vorhanden
8. Parallelität gegen einen seriellen Ablauf messen - neu

Die beiden Lernpfade werden als weitere Themenzuordnungen im bestehenden Katalog erfasst. Bereits vorhandene Themen werden wiederverwendet;
jedes der zehn neuen Themen erhält genau eine dauerhafte ID und erscheint nur einmal im Katalog. Die bisherigen drei Lernpfade behalten ihre
Themen und deren Reihenfolge. Das bisher pfadlose Thema bleibt ohne Zuordnung. Die Lern-App führt keine Coding-Agenten aus.

Die neuen Themen werden mit Quellen nach den [Regeln zur Quellenauswahl](../../content/source-selection.md) und Aktualitätsmetadaten
ausformuliert, fachlich geprüft und strukturell an die vorhandenen Inhalte angeglichen. Die
[KI-Tool-Landkarte](../../content/ki-tool-landkarte.md) dient als Rechercheausgangspunkt, nicht als Beleg. Die Themen benennen Voraussetzungen,
Grenzen und Gegenbeispiele. Das Thema zur Bewertung beschreibt einen kontrollierten Vergleich von Ergebnisqualität, Dauer, Kosten und
Review-Aufwand mit einem seriellen Ablauf.

Alle 26 Themen erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste; dazu gehört weiterhin das Thema ohne Lernpfad. Die Liste
ordnet Grundlagen vor mittleren und fortgeschrittenen Themen. Ihre bisherige globale Reihenfolge darf sich ändern, wenn danach jeder der
fünf Lernpfade seine vorgegebene interne Reihenfolge behält. Die Pfadfilter zeigen jeweils genau die zugeordneten Themen in dieser
Reihenfolge. Für neue Themen ohne Fragenpool wird kein Lerncheck angeboten.

Beim Context7-Thema wird zwischen der über Context7 gefundenen Dokumentation und der Originaldokumentation der konkret genannten
Bibliotheksversion unterschieden. Versionsabhängige Aussagen werden gegen die Originaldokumentation geprüft. Quellenprüfung,
Aktualitätsmetadaten und begründete Unsicherheiten werden in der späteren Änderungs-Spec festgehalten.

Abnahme: Katalogprüfungen belegen 26 eindeutige Themen, fünf vollständige Pfadzuordnungen mit korrekter Reihenfolge und das weiterhin
pfadlose Thema. Ein Browser-Test belegt die gemeinsame Liste, beide neuen Pfadfilter, die Anzeige neuer Themen mit Quellen und Metadaten
sowie das fehlende Lerncheck-Angebot bei Themen ohne Fragenpool.

Fragenpools gehören nicht zu dieser Story.

Vertikale: Themen

Dokumentation nach Umsetzung: Den neuen Themenbestand knapp im Produktstand ergänzen.

## Risiken und Abnahme

- **Reihenfolge und Vollständigkeit:** Vor der Implementierung die erwartete Reihenfolge aller 26 Themen-IDs festlegen. Katalogtests prüfen
  Eindeutigkeit, die Reihenfolge aller fünf Pfade, den Erhalt der drei bisherigen Pfadzuordnungen und das pfadlose Thema. Die globale
  Reihenfolge muss mit allen Pfaden vereinbar sein.
- **Fachliche Aussagen und Quellen:** Jedes neue Thema erhält eine dokumentierte Quellenprüfung nach den Quellenregeln. Bei
  versionsabhängigen Aussagen, insbesondere zu Context7, wird die Originaldokumentation der konkreten Bibliotheksversion geprüft.
  Unsicherheiten und bewusste Auslassungen werden festgehalten. Die Landkarte allein gilt nicht als Beleg.
- **Sichtbarer Lernnutzen:** Im Browser sind die beiden neuen Pfade über die vorhandenen Filter erreichbar. Neue Karten zeigen Problem,
  Kernkonzept, Java-/Web-Einsatz, Grenze, Quellen und Aktualitätsangaben. In der Gesamtansicht erscheint jede Karte nur einmal und ein
  Thema ohne Fragenpool bietet keinen Lerncheck an.
- **Umfang:** Die Änderung bleibt in der Vertikale Themen. Es werden weder Fragenpools noch eine Agentenausführung ergänzt. Neue
  Abhängigkeiten sind nicht vorgesehen.

## Umsetzung und Nachweise

Die Umsetzung hat noch nicht begonnen. Für jedes der folgenden Teil-Features werden RED-Test und fachlicher Fehlergrund, GREEN-Prüfung
und REFACTOR mit weiterhin grüner Testsuite hier dokumentiert:

1. Vierten Lernpfad mit vier neuen, quellengeprüften Themen und wiederverwendeten vorhandenen Themen einweben.
2. Fünften Lernpfad mit sechs neuen, quellengeprüften Themen und wiederverwendeten vorhandenen Themen einweben.
3. Gemeinsame Liste und beide Pfadfilter im Browser prüfen; dabei die globalen 26 Themen, das pfadlose Thema und das Verhalten ohne
   Fragenpool abnehmen.

Vor dem Abschluss werden hier die vollständig grüne Pflichtsuite, die Quellenprüfung pro neuem Thema, der lokale Browsernachweis
(Browser, Ablauf, Ergebnis) und die ausdrückliche manuelle Bestätigung des Nutzers festgehalten.

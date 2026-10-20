# Zehn respektable Quellen oder Persönlichkeiten finden, die aktuelle Entwicklungen bei der agentengetriebenen Software-Entwicklung vorantreiben und dokumentieren
Zehn respektable Quellen oder Persönlichkeiten finden, die aktuelle Entwicklungen bei der agentengetriebenen Software-Entwicklung vorantreiben und dokumentieren.
Woher überlegen, wo solche Personen sich aufhalten würden und wie man sie findet.

Dann jeweils die letzten Entwicklungen (letzte 6 Monate) ermitteln und je Quelle als Stichworte zusammen stellen.
- Dabei nennen:
  - neue / geänderte Vorgehensweisen
  - neue / geänderte Standards
  - "Rising" Tools, Default-Standard-Tools
  - veraltetes Vorgehen / Tools

Irrelevant: Herstellerspezifika, neue Modellversionen

Danach auf Themen verteilen. Konkret bleiben. Wenn angebracht, Aktualitätsdaten erhöhen.

Themen die auch danach noch kryptische oder sehr ähnlich sind, zusammenführen (lassen)

## Ziel, Entscheidungen und Abnahme

- Recherchefenster: 20.04.2026 bis 20.10.2026; Prüftag 20.10.2026. Veröffentlichungsdatum und bloßes Prüfdatum unterscheiden.
- Zehn nachvollziehbar ausgewählte Primärquellen beziehungsweise Praktiker; Originalbeiträge mit Datum, Vorgehen, Standards, Tools und Grenzen dokumentieren. Nicht belegte Ablösungs- oder Verbreitungsbehauptungen vermeiden.
- Erkenntnisse passenden bestehenden Themen zuordnen und konkret in der Browseransicht ergänzen. Keine neuen Modellversionen oder herstellerspezifischen Bedienanleitungen.
- Zusammenführungen nur vorschlagen; IDs, Lernpfade und Lernstände erhalten. Keine neuen Abhängigkeiten.
- Dauerhafte Quellenregeln um Quellentypen, Auffinden prägender Personen,
  Signalbewertung und das Vorgehen bei Themenaktualisierungen ergänzen;
  aus der redaktionellen Richtlinie darauf verweisen.
- Betroffene Vertikale: topics. Fragenpools bleiben erhalten; bestehende Quellen nicht entfernen.
- Arbeitsort: zugewiesener Session-Worktree, Branch codex/current-agent-development-sources; Basis dce3354.
- Risiko: Meinungen und Herstellerberichte sind keine allgemeinen Wirksamkeits- oder Verbreitungsnachweise. Undatierte Standards nicht als neue Veröffentlichung im Zeitfenster ausgeben.
- Abnahme: zehn Quellen mit belegten Entwicklungen und Themenzuordnung, konkrete Inhaltsänderungen, gezielt aktualisierte Metadaten, begründete Zusammenführungsvorschläge, RED → GREEN, einmaliges Subagentenreview, grüne Pflichtsuite und lokaler Browsernachweis.

## Fachliche Recherche

Prüftag für alle folgenden Originalquellen: **20.10.2026**. Auswahlfenster:
20.04.–20.10.2026. Auswahl nach eigenen Werkzeugen, veröffentlichten Experimenten,
konkreten Abläufen und nachvollziehbaren gegenseitigen Verweisen. Zehn Personen,
keine Rangliste: Skill-Autoren, Harness-Entwickler, Web-Praktiker, Evaluation und
Betrieb. Unterschiedliche, auch widersprechende Ansätze erhalten. Martin Fowler
ist keine Auswahlvorgabe. Herstellerdetails und Modellneuheiten bleiben außen vor.

### Wo suchen und wie gewichten?

- Persönliche Blogs/RSS, Projekt-Releases und Credits liefern Verfahren und ihre
  Entwicklung; Konferenzgespräche, Podcasts, Meetups und Community-Diskussionen
  erschließen weitere Personen. Beispiele: Vincents gemeinsames Treffen mit
  Willison und Pococks ausdrückliche Übernahme von Horthys Visualisierungsideen.
- Reddit und GitHub Trending sind Entdeckungssignale. Anschließend Originalautor,
  Datierung, reale Änderung, Wartung und Gegenbeispiele prüfen. Sterne, Downloads,
  Upvotes und Aktivität beweisen weder Qualität noch Eignung oder Wirksamkeit.
- Google Trends kann Suchinteresse zeigen. Begriffe, Region, Zeitraum und
  Mehrdeutigkeit beeinflussen den Vergleich; Suchinteresse misst keine Nutzung
  oder fachliche Autorität. Keine ungeprüften Trendzahlen oder Standardbehauptungen.
- „Neu“ unterscheidet Veröffentlichung einer Idee, aktuelle Umsetzung und bereits
  ältere Praxis. Nur explizit belegte Ablösungen als solche benennen; übrige
  Gegenüberstellungen sind Empfehlungen der Person oder redaktionelle Ableitungen.

### Zehn Personen und ihre aktuellen Beiträge

1. **Matt Pocock – kleine, kombinierbare Engineering-Skills.**
   [Release 1.3.1, 04.10.2026](https://github.com/mattpocock/skills/releases/tag/v1.3.1).
   Neu: `implement-spec` bearbeitet den Abhängigkeitsgraphen auf isolierten
   Worktrees und einer Integrationsbranch; `pr` liefert sichtbare Nachweise;
   `retro` verbessert die Arbeitsumgebung. Entfernt: eigener
   `resolving-merge-conflicts`-Skill, weil der Agent das ohne Spezialanleitung
   bewältigt. Geändert: `CONTEXT.md`/`CONTEXT-MAP.md` heißen in seiner Sammlung
   `GLOSSARY.md`/`GLOSSARY-MAP.md`; das ist kein allgemeiner Standardwechsel.
   Tools: eigene Skills als konkrete Kandidaten, kein Default für jedes Team.
   Zuordnung: Skills, parallele Aufgaben, Gates. Grenze: Projekterfahrung,
   keine unabhängige Wirksamkeitsstudie.

2. **Jesse Vincent – Superpowers als überprüfbarer Entwicklungsablauf.**
   [What a year, 09.10.2026](https://blog.fsck.com/2026/10/09/what-a-year/),
   [Release Notes 7.0, 09.10.2026](https://github.com/obra/superpowers/blob/main/RELEASE-NOTES.md).
   Geändert: Brainstorming spiegelt zuerst den Bedarf zurück; der Prozessumfang
   passt sich der Aufgabe an. Ein Builder-Check ersetzt dort den bisherigen
   Spec-Dokument-Reviewer. Schon 25.09. wurden Pläne auf Entscheidungen,
   Schnittstellen und Testaussagen statt vorweg ausgeschriebenem Code verkürzt.
   Tool: Superpowers; kein neuer formaler Standard. Zuordnung: Problemklärung,
   Planung, Skills. Grenze: Releaseverhalten des Projekts, keine Pflicht zu
   seinem vollständigen Prozess.

3. **Geoffrey Huntley – Loop Engineering und messbare Verifikation.**
   [CLI-Kontext, 09.10.2026](https://ghuntley.com/tier/),
   [Agency, 13.10.2026](https://ghuntley.com/agency/).
   Aktuell: CLI-Hilfe anhand erfolgreicher Agentenaufgaben verbessern; Schleifen
   an reproduzierbarer Systemprüfung ausrichten. Er stellt große Skill-Pakete
   und menschliches Lesen jedes Diffs ausdrücklich infrage. Tools: CLI, Nix und
   Antithesis als seine Beispiele. Kein neuer Protokollstandard. Zuordnung:
   Werkzeugwahl und Gates. Grenze: zugespitzte persönliche Position; daraus folgt
   weder, dass MCP/Skills generell veraltet sind, noch dass Review entfallen darf.

4. **Armin Ronacher – Werkzeuge durch Code komponieren.**
   [What is Codemode, 06.10.2026](https://lucumr.pocoo.org/2026/10/6/codemode/).
   Explizite Weiterentwicklung seiner früheren CLI-/Skript-Empfehlung: Pi bindet
   MCP nun über Code Mode ein. Schleifen, Filter und parallele Aufrufe laufen in
   einem begrenzten Harness-Kontext; große Zwischenergebnisse müssen nicht alle
   ins Modellfenster. Wichtig: konsistente strukturierte Tool-Ergebnisse.
   Tools: Pi/Code Mode; MCP bleibt ein Integrationsprotokoll. Zuordnung:
   Tokenökonomie und Harness. Grenze: Shell und Harness haben unterschiedliche
   Rechte; Code Mode macht beliebige Ausführung nicht automatisch sicher.

5. **Mario Zechner – kleine Agentenbausteine an realen Projekten erproben.**
   [Robot-Projekt, 30.05.2026](https://mariozechner.at/posts/2026-05-30-shitty-robot/).
   Nachvollziehbare Praxis: Coding-Agent erstellt eine kleine HTML-Seite zum
   Test der vollständigen Hardwarekette; danach wird die generierte Anwendung
   gezielt von Hand und mit Agent refaktoriert. Pi ist als Harness in getrennte
   Client-/Server-Werkzeuge eingebettet; Unterbrechung betrifft auch laufende
   Tools. Toolkandidat: Pi. Kein neuer Standard und keine belegte allgemeine
   Ablösung. Zuordnung: Harness und begrenzte Funktionsprototypen. Grenze:
   Einzelprojekt; Robotik- und Modellkonfigurationen werden nicht übernommen.

6. **Simon Willison – Agentic Engineering mit sichtbarer Prüfung.**
   [Voice-Projekt, 09.10.2026](https://simonwillison.net/2026/Oct/9/built-using-my-voice/).
   Aktuelle Änderung seiner Arbeitsweise im Beispiel: Anforderungen per Sprache
   und lokale Vorschau; anschließend gezieltes PR-Review und Korrektur des
   Imports. Die erste funktionsfähige Umsetzung war noch nicht fertig zur
   Veröffentlichung. Tools: lokale Vorschau, Diff und Browser bleiben wichtige
   Arbeitsmittel; Sprache ist eine zusätzliche Eingabeform. Kein neuer Standard,
   kein Nachweis, dass Tippen überholt ist. Zuordnung: Agentenoberflächen und
   Review. Grenze: klar abgegrenztes persönliches Django-Projekt.

7. **Addy Osmani – Reviewkapazität und prüfbare Lieferungen.**
   [Agentic Code Review, 15.06.2026](https://addyosmani.com/blog/agentic-code-review/).
   Schwerpunktwechsel: mehr generierter Code verlagert Arbeit zur Beurteilung.
   Empfehlung: kleine Patches mit Zweck und Ausführungsnachweisen; Teständerungen
   besonders sorgfältig prüfen. Mutationstests ergänzen reine Coverage.
   Tools: Review-Agenten zur Vorsortierung, Tests und CI als Arbeitsbasis;
   kein universeller neuer Tool-Default. Überholt in seiner Argumentation:
   Review wie eine unbegrenzt verfügbare Restkapazität behandeln. Zuordnung:
   Review und TDD. Grenze: Kontext und Risiko bestimmen den Aufwand; seine
   referierten Studienzahlen werden hier nicht ungeprüft weiterveröffentlicht.

8. **Dex Horthy – Kontext und Automatisierung bewusst begrenzen.**
   [Eigenes Gespräch bei Gergely Orosz, 15.07.2026](https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy).
   Berichteter Kurswechsel: eine vollständig ungelesen arbeitende Softwarefabrik
   scheiterte; heute beschreibt er bewusste Verdichtung, getrennte Analyse- und
   Planungskontexte sowie langsame, kleine Automatisierungsschleifen mit Review.
   Tools: HumanLayer und einfache Markdown-Artefakte. Kein formaler Standard.
   Er verwirft in seinem Beispiel „mehr Tokens“ als Ersatz für Kontrolle.
   Zuordnung: Kontextauswahl, Recherche/Planung und Harness. Grenze: Interview
   und Projekterfahrung, keine allgemeingültigen Tokenlimits oder Produktivitätswerte.

9. **Charity Majors – Betrieb und schnelles Feedback gehören zur Entwicklung.**
   [Engineering discipline, 15.06.2026](https://charity.wtf/p/ai-demands-more-engineering-discipline),
   [AI norms, 21.09.2026](https://charity.wtf/p/where-do-ai-norms-come-from).
   Aktueller Akzent: Systemverständnis durch beobachtbares Verhalten,
   Charakterisierung, Capture/Replay und kurze Feedbackzyklen ergänzen; bloßes
   Codelesen genügt nicht. Gemeinsame AI-Normen brauchen Gespräch und Lernen.
   Tools: Observability und Verhaltenstests als Kategorien; kein bestimmter
   Anbieter oder neuer Standard. Zuordnung: Legacy-Spezifikation und Review.
   Grenze: weder vollständige formale Spezifizierbarkeit noch automatischer
   Ersatz menschlicher Urteile sind damit bewiesen.

10. **Shreya Shankar – Fehleranalyse vor Eval-Infrastruktur.**
    [Mit Hamel Husain: AI Evals FAQ, 18.09., geändert 21.09.2026](https://hamel.dev/blog/posts/evals-faq/index.html).
    Konkreter Schwerpunkt: reale fehlgeschlagene Läufe mit Fachleuten ansehen,
    Fehlermuster gruppieren, dann passende Evaluatoren bauen. Bei Coding-Agenten
    eigene schwierige Aufgaben ergänzen; zuerst End-to-End-Erfolg, danach einzelne
    Toolschritte diagnostizieren. Tools: vorhandene Tests und gezielte
    Annotation; kein neuer formaler Standard oder universelles Eval-Framework.
    Zurückgewiesen: generische Scores und unvalidierte LLM-Judges als Qualitätsersatz.
    Zuordnung: Evals/Traces und Handoffs. Grenze: Praxisleitfaden mit ausdrücklich
    fallabhängigen Empfehlungen.

### Auf wen verweisen sie konkret?

Belegte Credits, Zusammenarbeit und zitierte Positionen unterscheiden; einzelne
Verweise erlauben keine Rangliste „am häufigsten empfohlen“.

| Ausgangspunkt | Weiterer Name | Beleg und Bedeutung |
| --- | --- | --- |
| Pocock | Dex Horthy | [Versionsgebundene Credits](https://github.com/mattpocock/skills/blob/v1.3.1/skills/engineering/pr/CREDITS.md): Visualisierungsansatz ausdrücklich übernommen. |
| Vincent | Simon Willison | [22.09.2026](https://blog.fsck.com/2026/09/22/agentic-dev-in-sf/): gemeinsam organisiertes Treffen für Builder und Experimente. |
| Huntley | Josh Wulf; Adam Wathan | [Agency](https://ghuntley.com/agency/) ist ein gemeinsames Gespräch; [CLI-Beitrag](https://ghuntley.com/tier/) greift Wathans Frage auf. Zusammenarbeit bzw. Diskussionsanstoß, keine pauschale Zustimmung. |
| Ronacher | Kenton Varda; Sunil Pai | Expliziter Credit für [Code Mode](https://blog.cloudflare.com/code-mode/), verlinkt im aktuellen Beitrag. Ursprung 2025, keine Neuerfindung 2026. |
| Zechner | Ronacher | [Öffentlicher Widerspruch](https://mariozechner.at/posts/2025-11-22-armin-is-wrong/) von 2025 belegt Austausch; nur historische Entdeckungsspur. |
| Osmani | Willison; Builder.io-Autoren | Sein Review-Beitrag endet mit Willisons Prinzip nachweisbar funktionierender Lieferung und verweist auf [belegpflichtige PRs](https://www.builder.io/blog/developers-drowning-in-ai-prs). |
| Majors | Dr. Cat Hicks; Adam Jacob | [Gespräch mit Hicks](https://charity.wtf/p/where-do-ai-norms-come-from); Jacob wird im Juni-Beitrag ausdrücklich geschätzt, zugleich differenziert diskutiert. |
| Shankar | Hamel Husain; Jason Liu | Gemeinsame FAQ; deren RAG-Abschnitt verweist auf Lius Eval-Systematik, mit Pflicht zur aufgabenspezifischen Validierung. |

### Konsequenzen für die Themen

Die zehn Perspektiven tragen gezielte Ergänzungen an bestehenden Themen; keine
neuen personenbezogenen Themen. Für den Browser werden Empfehlungen mit
konkretem Java-/Web-Beispiel und Grenze formuliert. Recherche und Quellenprüfung
sind keine Behauptung, dass alle bisherigen Quellen erneut geprüft wurden.

Zusammenführungsvorschläge, **nicht umgesetzt**:

- `research-plan-tasks` und `context-selection-and-reset`: mögliche gemeinsame
  Darstellung „Analyse und Planung mit gezielten Kontextwechseln“; Phasen und
  Auswahlproblem bleiben fachlich unterscheidbar.
- `parallel-agent-task-boundaries` und `compare-parallel-and-serial-agent-work`:
  gemeinsame Entscheidungsstrecke denkbar; Zuständigkeit und Nutzenvergleich
  sind bisher unterschiedliche Lernziele.
- `project-documentation-and-checklists` und `open-knowledge-format`: OKF als
  konkretes Format unter Projektwissen einordnen; vorher Quellen und
  Fragenbezüge prüfen. Keine allein aus ähnlichen Titeln abgeleitete Löschung.

### Standards, Toolkandidaten und tatsächliche Ablösung

Die Personenbeiträge begründen **keinen neuen branchenweiten Default**.
MCP, ACP und Agent Skills sind von einzelnen Sammlungen und Autorenvorlieben
zu unterscheiden. Bereits bekannte Formate werden nicht als Neuerfindung ausgegeben.
Pococks Glossar-Konvention und Vincents Builder-Check sind Projektkonventionen.
Belegbar entfernt wurde Pococks Mergekonflikt-Skill; Vincents alter
Spec-Reviewer wurde im genannten Ablauf ersetzt. Huntleys Ablehnung großer
Skill-Pakete ist eine Gegenposition, kein Nachweis ihrer allgemeinen Veraltung.
Pi, Superpowers, Pococks Skills und HumanLayer sind Recherchekandidaten mit
unterschiedlichem Zweck, keine Installations- oder Sicherheitsfreigabe.

### Ergänzende Firmenberichte: Verfahren statt Werbeversprechen

- **Anthropic, [Redesigning source control, 13.10., ergänzt 15.10.2026](https://www.anthropic.com/research/redesigning-source-control):**
  Selbstauskunft über stark steigendes Änderungsvolumen und Engpässe bei
  Quellverwaltung, Builds und CI. Allgemein übertragbar ist die Frage, ob die
  Integrations- und Prüfkapazität mit der Erzeugung wächst. Der Artikel nennt
  die eigene ungewöhnliche Monorepo-Last ausdrücklich. Scion ist eine
  hausinterne Antwort, kein Nachweis, dass Git generell veraltet ist. Mergezahl
  ist kein Maß für fachlichen Nutzen, Defektrate oder unabhängigen Zeitgewinn.
- **OpenAI, [Harness engineering, 11.02.2026](https://openai.com/index/harness-engineering/):**
  **Außerhalb** des Recherchefensters, nur Vergleichsbasis. Beschrieben werden
  bootbare Apps und lokale Observability je Worktree, automatisierte
  Architekturgrenzen sowie knapper Einstieg in verlinktes Repositorywissen.
  Die berichtete Zeitersparnis und autonome Reviewpraxis betreffen ein eigenes
  Experiment ohne unabhängige Kontrollgruppe. Kein allgemeines Leistungsversprechen
  und keine Änderung der hiesigen Reviewpflichten. Der Bericht verlinkt Huntleys
  Ralph-Schleife ausdrücklich; dies ist ein zusätzlicher belegter Einflussweg.
- Der ebenfalls geprüfte OpenAI-Bericht
  [How OpenAI uses Codex](https://openai.com/business/guides-and-resources/how-openai-uses-codex/)
  datiert vom **14.01.2026**. Er wird nicht als neue Entwicklung der letzten sechs
  Monate gewertet. Ältere Grundlagen behalten ihren Wert als Hintergrund.
- **Trendprüfung:** Die abgerufene GitHub-Trending-Seite lieferte keine belastbar
  datierte aktuelle Repositoryliste; Google Trends war über den Recherchezugang
  nicht auswertbar. Daher keine Trendkurven, Rangplätze oder „steigenden“ Zahlen
  behauptet. Kandidaten sind über Originalreleases und Personenverweise begründet.

### Ergänzende Standardprüfung

- [MCP-Maintainer, 28.07.2026](https://blog.modelcontextprotocol.io/posts/2026-07-28/):
  zustandsloser Kern ersetzt dort Handshake und Session-Header; diese Aussage
  gilt für die genannte Revision, nicht rückwirkend für ältere Implementierungen.
- [ACP-Changelog, 09.10.2026](https://github.com/agentclientprotocol/agent-client-protocol/blob/main/CHANGELOG.md):
  1.11.0 stabilisiert Sitzungsmeldungen und Compaction; v2/unstable bleiben
  als solche erkennbar. Changelog-Version und Protokollrevision unterscheiden.
- [Java-SDK-Changelog](https://github.com/modelcontextprotocol/java-sdk/blob/main/CHANGELOG.md)
  und [Roadmap](https://github.com/modelcontextprotocol/java-sdk/blob/main/ROADMAP.md)
  erneut geprüft: 2.0.x bleibt bei MCP 2025-11-25; 3.x ist für die neue Revision
  vorgesehen. Ein Roadmaptermin belegt keine ausgelieferte Funktion. Nur diese
  erneut geprüften Quellen erhalten ein neues Quellenprüfdatum.

## Umsetzung und Nachweise

| Schritt | Nachweis |
| --- | --- |
| RED: neue redaktionelle Aspekte | Gezielter Silent-Runner, 1 Test fehlgeschlagen, 19 übersprungen, Exitcode 1, 1,56 s. Die konkreten Aspekte, Originalbelege und Metadaten fehlten an elf Themen. |
| GREEN: Personenbeiträge | 22 Tests bestanden, Exitcode 0, 1,77 s. |
| RED: Standards und Firmenberichte | Gezielter Silent-Runner: 1 fehlgeschlagen, 19 übersprungen, Exitcode 1, 1,62 s; konkrete ACP-Änderung und eingeordnete Firmenbeispiele fehlten. |
| GREEN: Standards und Firmenberichte | 33 Tests bestanden, Exitcode 0, 1,62 s. Zwölf bestehende Themen ergänzt; alle IDs, Lernpfade und bisherigen Quellen erhalten. Neue Belege und drei erneut geprüfte Protokollquellen tragen 20.10.2026; andere Quellenprüfdaten unverändert. |
| Einmaliges Subagentenreview | Fokussiertes lesendes Review des gesamten Story-Diffs gegen dce3354 und der neuen Spec, ohne Tests oder Netzwerkzugriffe. Ein mittlerer Befund: mehrfach nachgeführte Datumsabnahmen (Shotgun Surgery/Duplicated Code). Angenommen: statische Erwartungen für Prüftag und Wiedervorlage zentralisiert, alle 48 Themen erfasst; historische Inhalts-, Veröffentlichungs-, Status- und Quellenbindungen erhalten. Keine weiteren belegten Funde, keine zweite Runde. |
| Reviewkorrektur | 34 gezielte Tests bestanden, Exitcode 0, 1,82 s. |
| Dauerhafte Redaktion | Quellenregeln um Perspektiven, Entdeckung über Personenverweise, vorsichtige Trendbewertung und Aktualisierungsschritte ergänzt; redaktionelle Richtlinie verlinkt diese Abschnitte. |
| Abschließende Testpflege | Vollsuite deckte weitere historische Datumsbindungen in Lernpfad-Unit- und E2E-Tests auf. Unit-Datumswerte ebenfalls durch die zentrale 48-Themen-Abnahme abgedeckt; E2E prüft die Anzeige der kataloggebundenen Wiedervorlage. Lernpfadzuordnung, Quellenanzeige und übrige Abläufe unverändert geprüft. Gezielter E2E-Nachlauf: 6 bestanden, Exitcode 0, 11,75 s. |
| Pflichtcheck | Format, Lint, Typen, 11 Runner-Selbsttests, 176 Unit-/Komponententests, 30 Inhaltsprüfungen, Architektur, Vertikalgrenze, Lizenzen und Produktionsbuild bestanden; Exitcode 0, 110,59 s. |
| Audit | `npm audit --audit-level=high`: Exitcode 0, 5,52 s; keine High-/Critical-Befunde. Eine bestehende moderate Vite-Lücke (GHSA-698v-4r3x-3vcv) bleibt außerhalb dieser Inhaltsstory; kein ungeprüftes Dependency-Update. |
| Lokaler Browsernachweis | Chromium im Codex-In-app-Browser, `http://127.0.0.1:5573/`: 48 Themen, Skills mit konkreter Ablösung und Gegenposition, Token-Thema mit Code Mode sowie ACP/MCP-Karte geöffnet. Neue Inhalte, Originalquellen und Prüf-/Wiedervorlagetermine sichtbar; Rückweg zur Liste funktioniert. Protokollkarte zusätzlich visuell geprüft und lokaler Screenshot außerhalb Git gespeichert. |
| Finale E2E-Suite | Alle 82 Desktop-/Smartphone-Browserfälle bestanden, Exitcode 0, 66,94 s. |
| Finale statische Prüfung | Nach E2E-Testpflege Format, Lint und Typen erneut grün: 3 Prüfungen, Exitcode 0, 15,40 s. Übrige grüne Nachweise betreffen unveränderte Prüfgegenstände. |
| Bestands- und Umfangsprüfung | 12 Themen ergänzt, 16 Quellenzuordnungen hinzugefügt; 48 IDs und alle bisherigen Quellen gegen Basisstand erhalten. Nur eine fachliche Vertikale (topics). `git diff --check` grün. Aktive Spec und Schreibbesitzer passen zur aktuellen Story. |

## Abschluss und Integration

Manuelle Prüfung und Freigabe erfolgt.

Der inzwischen aktualisierte Stand von `origin/main` (43036f9) wurde im
Story-Branch per Fast-forward übernommen. Der Backlog-Konflikt wurde durch
Entfernen ausschließlich dieser aktivierten Story gelöst; die neue NotebookLM-Story
und die übrigen Upstream-Änderungen bleiben erhalten. Die zusätzlich eingeführten
Architektur- und Regressionstests bleiben erhalten. Der Gesamtstand wurde erneut geprüft.

Der Upstream-Architekturprüfer unterstützt Node 25 nicht. Für den integrierten
Prüflauf wird die vorhandene gebündelte Node-Laufzeit 24.19.0 verwendet; keine
globale Laufzeitänderung und keine zusätzliche Projektabhängigkeit.

Der erneute Audit meldet die bestehende Vite-8.3.0-Lücke inzwischen als High
(GHSA-698v-4r3x-3vcv, GHSA-r825-w8mm-5pxw, GHSA-587h-7wmj-h5pm).
Der kleinste vom Audit genannte Patch ist Vite 8.3.4. Das bestehende Buildwerkzeug
wird als Integrationskorrektur aktualisiert; keine neue Bibliothek, keine
Produktfunktion und keine zusätzlichen Laufzeitdaten. Lizenz und
Datenschutzarchitektur bleiben unverändert. Das Sicherheitsupdate ist vom
Story-Commit getrennt. Die ursprüngliche moderate Auditmeldung ist damit behoben.

| Integrierter Abschlussnachweis | Ergebnis |
| --- | --- |
| Pflichtcheck auf aktuellem main-Stand und Vite 8.3.4 | Format, Lint, Typen, Runner-Selbsttests, 181 Unit-/Komponententests, 32 Inhaltsprüfungen, verschärfte Architekturprüfung, Lizenzen und Produktionsbuild grün; Exitcode 0, 69,69 s. |
| Vollständige E2E-Suite | 82 Desktop-/Smartphone-Fälle bestanden; Exitcode 0, 58,88 s. |
| Audit nach Sicherheitsupdate | 0 Schwachstellen; Exitcode 0. |
| Lokaler Browser unmittelbar vor Commit | App unter Port 5573 mit Node 24 und Vite 8.3.4 neu gestartet, Chromium-Ansicht neu geladen, 48 Themen sowie Protokollkarte mit Ergänzung, Originalquelle und Aktualitätsmetadaten geprüft. Darstellung unverändert nutzbar. |
| Abschluss | Manuelle Prüfung und Freigabe erfolgt; Spec zur abgeschlossenen Story archiviert. |

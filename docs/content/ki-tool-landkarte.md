# KI-Tool-Landkarte für Java- und Webentwicklung

Stand: 20. September 2026. Diese Übersicht konsolidiert **alle** Einträge aus
`input-2026-09-20/*.txt`; inhaltliche Wiederholungen sind einmal erfasst. Die
Reihenfolge ist absichtlich eine Abhängigkeitskette: Grundlagen und Artefakte
kommen vor den Tools und Automatisierungen, die darauf aufbauen.

## Kurzurteil für deinen Stack

**Jetzt vertiefen:** Git-Worktrees, knappe `AGENTS.md`, Tests inklusive
Playwright und ArchUnit, Context Engineering, EARS-Anforderungen, einen
schlanken Spec-Workflow mit **OpenSpec** *oder* **GitHub Spec Kit**, Context7
und OpenRewrite. Das ergänzt die Codex-App sehr gut und ist für Java/Web direkt
nutzbar.

**Später gezielt testen:** Codebase Memory MCP bei großen/unübersichtlichen
Repositories, Superpowers als fertiger Workflow, OKF für langlebiges
Domänenwissen, Storybook/Penpot bei einem echten Design-System-Bedarf.

**Nicht als Erstes investieren:** ein eigener Multi-Agent-Schwarm, Hermes,
Bionic, RTK und Caveman. Sie lösen Sonderprobleme (lokale/souveräne Modelle,
extreme Tokenknappheit oder autonome Abläufe), nicht das Grundproblem der
richtigen Änderung mit guter Prüfung.

Legende: **Start** = klarer Lernnutzen; **Test** = nur bei passendem Anlass;
**Später** = Nische oder zusätzlicher Betriebsaufwand; **Nicht übernehmen** =
Beobachtung oder Regel in den Notizen, die heute zu absolut wäre.

---

## 1. Unverzichtbare Entwicklungsgrundlagen

| Thema (korrigiert) | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Mentales Modell: Mensch navigiert, KI fährt** | Die KI schlägt vor und implementiert; die fachliche, technische und Sicherheitsverantwortung bleibt beim Menschen. | **Start.** „KI als Driver, Benutzer als Navigator“ ist ein gutes Bild, aber keine Verantwortungsabgabe. Passt zu *Human in the Loop*. |
| **Problemverständnis / „Programming as Theory Building“ (Peter Naur)** | Erst klären, warum etwas existiert und welche Invarianten gelten; Code allein ist nicht das Verständnis. | **Start.** Die wertvollste Arbeit vor der Implementierung; beantwortet auch die notierten *Warum-Fragen*. |
| **Informationsverbergen, hohe Kohäsion, geringe Kopplung** | Module verbergen Entscheidungen und haben eine klare Verantwortung. | **Start.** Basis für verlässliche KI-Änderungen; später durch ArchUnit prüfbar. |
| **Gute Namen und Ubiquitous Language** | Fachbegriffe einheitlich und domänennah verwenden, statt Synonyme zu mischen. | **Start.** Ein kleines Glossar (`Ubiquitous-Language.md`) ist wertvoller als lange generische Regeln. |
| **Begrenzte Komplexität je Ebene** | Kleine, verständliche Einheiten entlasten Menschen und Agenten. | **Start, aber nicht dogmatisch.** „7 ± 2“ ist eine Gedächtnis-Heuristik, keine Architekturregel oder maximale Objektzahl. |
| **Bereich und Schnittstellen vor der Änderung definieren** | Zulässige Dateien, Module, öffentliche Verträge und Nicht-Ziele vorab festlegen. | **Start.** Ein sehr wirksamer Schutz gegen „Agent fasst zu viel an“. |
| **Vorherige Analyse** | Relevante Klassen, Tests, Dokumentation und Änderungsfolgen zuerst untersuchen. | **Start.** Formuliere z. B. „Lies Klasse X und Dokument Y, erkläre die Auswirkungen, noch nicht implementieren.“ |
| **Nicht systemkritische Dinge „vibecoden“** | Schnelle Prototypen für reversiblen, isolierten Nutzen; nie als Freigabemodell für kritische Logik. | **Start als Grenze.** Vibe Coding ist kein Tool, sondern ein risikoreicher Arbeitsmodus. |
| **„No vibes allowed“ / Agentic Engineering** | Reproduzierbares Arbeiten mit Spezifikation, Tests, Review und nachvollziehbaren Entscheidungen. | **Start.** Das Gegenstück zum nicht reproduzierbaren „Prompt → akzeptieren“. |

## 2. Dauerhafte Projektartefakte – vor jedem Agenten-Tool

| Artefakt / Technik | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Git und kleine, überprüfbare Commits** | Macht KI-Änderungen rückgängig, vergleichbar und reviewbar. | **Start.** Voraussetzung für jede sichere Automatisierung. |
| **Git Worktrees** | Mehrere isolierte Checkouts für parallele Tasks oder Agenten. | **Start.** Mit Codex nutzbar; nur einsetzen, wenn die Aufgaben wirklich unabhängig sind. Konkurrenz: getrennte Branches ohne parallele Arbeitsverzeichnisse. |
| **`AGENTS.md` / `CLAUDE.md`** | Kurze, repo-spezifische Arbeitsanweisungen: Befehle, Grenzen, Architekturregeln und Abnahme. | **Start.** Nur Besonderheiten des Repos, keine Allgemeinplätze. Beispiele und echte Code-Referenzen sind besser als Stilaufsätze. `CLAUDE.md` ist Claude-spezifisch; `AGENTS.md` ist für Codex geeigneter. |
| **Vorgaben versus beschreibende Dokumente** | Normative Regeln sagen *was gelten muss*; Architektur-/Domänendokumente sagen *wie es aktuell ist*. | **Start.** Im Konflikt immer explizit festlegen, welche Quelle Vorrang hat; Vorgaben durch CI/Tests absichern. |
| **Kleine, verlinkte Markdown-Dateien / Progressive Disclosure** | Kontext nur bei Bedarf laden statt eine riesige Anweisung immer einzublenden. | **Start.** Gute Ergänzung zu `AGENTS.md`; hilft Tokenbudget und Aktualität. |
| **Checkliste mit „fertig erst, wenn …“** | Abnahmebedingungen, Tests, Migration und Dokumentationspflicht explizit machen. | **Start.** Besser messbar als Rollenprompts wie „Du bist ein sehr sorgfältiger Entwickler“. |
| **Kurzzeitnotizen und Langzeitwissen** | Task-Notizen von dauerhaftem, versioniertem Fachwissen trennen. | **Start.** Write/Select/Compress/Isolate: notieren, gezielt auswählen, verdichten, unabhängige Themen trennen. |
| **OKF – Open Knowledge Format** | Git-fähige Wissenssammlung aus Markdown mit YAML-Metadaten, Index und Herkunft/Vertrauen. | **Test.** Gut für Domäne, Metriken, APIs und Betriebswissen; keine Ersetzung für `AGENTS.md`. Konkurrenz: einfache verlinkte Markdown-Doku/ADRs; OKF bringt Standardisierung. |
| **OpenWiki / LLM-Wiki** | Vermutlich eine Wissensbasis bzw. Code-Dokumentation. | **Später, Produktname nicht eindeutig.** Nur einführen, wenn ein klarer Besitzer Aktualität sichert; automatisch erzeugte Komplett-Zusammenfassungen veralten schnell. |
| **`SGL.md`** | Notierter Dateiname/Begriff ohne eindeutig zuordenbares Produkt. | **Offen.** Nicht einführen, bevor Quelle und Zweck geklärt sind. |

## 3. Anforderungen und Kontext präzisieren

| Technik | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Ziel, Nutzen und Abbruchbedingung nennen** | Ergebnis, Zielgruppe, Verwendung und „wann ist fertig?“ statt nur Einzelschritte beschreiben. | **Start.** Funktioniert in Codex, Claude, Copilot und Qwen gleichermaßen. |
| **Gezieltes Interview / „grill me“** | Agent klärt offene Produkt- oder Entwurfsentscheidungen schrittweise. | **Start, dosiert.** Gute Fragen nur dort, wo Code/Doku sie nicht beantworten können. „Bis 95 % sicher und keine Annahmen“ kann blockieren; besser: Annahmen sichtbar machen und entscheidungsrelevante Fragen priorisieren. |
| **Lange Brainstorming-Session** | Erst Optionen und Risiken erkunden, dann eine konkrete Aufgabe formulieren. | **Test.** Nützlich bei unklarer Produktentscheidung, aber kein Pflichtschritt für Bugfixes oder kleine Refactorings. |
| **EARS (Easy Approach to Requirements Syntax)** | Präzise, testbare Anforderungen: „When …, the system shall …“. | **Start.** Sehr passend für Akzeptanzkriterien und Spezifikationen; Konkurrenz: Given/When/Then, User Stories. |
| **Fachstandard abfragen** | Vor einer Implementierung vorhandene Konventionen/Standards identifizieren. | **Start.** Wichtig: nur relevante Normen selektieren, nicht einen Branchenkanon in den Kontext laden. |
| **Research → Design → Struktur → Plan → Aufgaben → Implementierung** | Recherche ohne Lösungsbias, dann gemeinsam konkretisieren und erst danach implementieren. | **Start.** Der notierte Ablauf „Research Plan Implement“ ist ein guter Standardprozess. Recherche soll Befunde und offene Fragen liefern, nicht voreilig Architektur planen. |
| **Pseudocode, Datenstrukturen und Codebeispiele im Plan** | Die kritischen Entscheidungen vor dem Coding konkret und prüfbar festhalten. | **Start** bei mittleren/großen Änderungen; Review durch Menschen und Tests danach nicht überspringen. |
| **To-do-Liste zum Abhaken** | Teilziele, Abhängigkeiten und Abnahme transparent machen. | **Start.** Plan-Modus/Spec-Tools können sie erzeugen; ein Markdown-Plan genügt oft. |
| **Spezifikation aus bestehendem Modell erzeugen** | Legacy-Verhalten zuerst explizieren, um es gezielt verändern oder absichern zu können. | **Test.** Immer gegen Code und Tests validieren; die KI darf keine unbekannten Fakten ergänzen. |
| **„Verbote begründen“** | Einschränkungen mit Ziel/Risiko erklären, damit der Agent besser abwägt. | **Start.** Besonders bei Security, Kompatibilität und Architektur wertvoll. |
| **„Prompts nicht für Control Flow verwenden“** | Deterministische Übergänge und Checks gehören in Tools/CI, nicht in eine lose Textanweisung. | **Start als Prinzip, nicht absolut.** Prompts beschreiben Ziel und Entscheidung; Zustandsautomat, Skript oder Harness erzwingt Gates, Wiederholungen und Berechtigungen. |
| **Recherche ohne Meinung und ohne Implementierungsbias** | Erst nur belegte Aussagen zum bestehenden Code, seinen Grenzen und offenen Fragen liefern lassen. | **Start.** Nicht „Baue X – finde dafür Gründe“ fragen, sondern: „Welche Teile des bestehenden Codes sind für X relevant? Nenne Fakten, Unsicherheiten und Quellen.“ |
| **LLMs als Improvisationstheater** | Ein Modell kann eine falsche Prämisse fortschreiben und sich nach Korrekturen nur sprachlich anpassen. | **Start als Warnmodell.** Fehler mit Tests, Quellen, Gegenbeispielen und Kontext-Reset korrigieren – nicht durch immer energischere Wiederholung. |

## 4. Kontext Engineering – baut auf Artefakten und Analyse auf

| Technik / Tool | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Context Engineering** | Relevanten, aktuellen und vertrauenswürdigen Kontext auswählen statt immer mehr Text einzublenden. | **Start.** Zentraler Hebel für Qualität, Geschwindigkeit und Kosten. |
| **Select / zeilenweises Lesen** | Mit Suche/Tools nur passende Dateien und Abschnitte in den Agentenkontext geben. | **Start.** Besser als vollständige Projektkopien oder „lies alles“. |
| **Compress / Backpressure / Tokenbudget** | Ergebnisse knapp, faktisch und taskbezogen verdichten; unnötige Tool-Ausgaben begrenzen. | **Start.** Erst gute Scoping-/Suchgewohnheiten, danach spezielle Token-Tools. |
| **Frisches Kontextfenster / Rewind / Reset** | Nach falscher Prämisse, vergiftetem Kontext, Widerspruch oder Themenwechsel neu anfangen. | **Start.** Dokumentiere geprüfte Fakten vorher kurz, sonst geht wertvolles Wissen verloren. „Double Escape“ ist wahrscheinlich eine konkrete UI-Geste, kein allgemeiner Prozessbegriff. |
| **Isolation durch getrennte Subtasks** | Jede Recherche/Implementierung erhält einen klaren, kleinen Kontext. | **Start.** Verhindert, dass irrelevante Historie oder fremde Annahmen die Lösung lenken. |
| **Context7 MCP** | Liefert versionsnahe Bibliotheksdokumentation und Beispiele in den Agentenkontext. | **Start.** Besonders für Spring, Java-Bibliotheken und Web-Frameworks; Konkurrenz: offizielle Docs im Browser/MCP anderer Anbieter. Quellen und Version trotzdem prüfen. |
| **Codebase Memory MCP** | Indexiert ein Repository als Graph für Aufrufketten, Impact-Analyse und strukturierte Suche. | **Test.** Bei großen Java-/Monorepos sinnvoll; für kleine Projekte reichen `rg`, IDE-Navigation und LSP. Die „99 % Tokens“ sind Hersteller-Benchmark, nicht Zusage. |
| **LSP (VS Code / IntelliJ)** | Symbol-, Typ- und Referenzinformationen für präzise Code-Navigation. | **Start.** IntelliJ besitzt selbstverständlich Java-Sprachserver-/Analysefunktionen; für Agenten hängt die direkte Nutzung vom jeweiligen Harness ab. Konkurrenz/Ergänzung: Codebase Memory MCP. |
| **RTK – Rust Token Killer** | Verdichtet vor allem Terminal-/Tool-Ausgaben, bevor sie in den Kontext gelangen. | **Später.** Sinnvoll bei lokalen CLI-Agenten und harten Limits; erst messen, ob Tool-Ausgaben wirklich das Problem sind. Ergänzt Caveman, konkurriert nicht direkt. |
| **Caveman / Caveman Code** | Kürzt Agentenantworten stark und kann Tool-Ausgaben via RTK verarbeiten. | **Später.** Weniger wichtiger als gute Kontextauswahl; knappe Ausgaben dürfen keine Entscheidungsbegründung unterschlagen. |

## 5. Agentenoberflächen und wiederverwendbare Fähigkeiten

| Tool / Konzept | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Codex-App** | Dein primärer Coding-Agent mit Workspace, Tools, Worktrees, Plan/Review und Skills. | **Start.** Die folgenden herstellerneutralen Praktiken zuerst hier etablieren. Slash Commands, Worktrees, Subagents, Skills und MCP sind als Konzepte relevant; die konkrete Syntax ist versionsabhängig. |
| **GitHub Copilot (Plan Mode)** | Alternative Agentenoberfläche, die Pläne/Markdown-Artefakte vor dem Coding erzeugen kann. | **Test.** Konkurriert direkt mit Codex/Claude Code als Arbeitsoberfläche; nicht zusätzlich nötig, wenn Codex deinen Workflow gut abdeckt. |
| **Claude Code / Claude Opus 5** | Terminal-Agent bzw. Modellfamilie mit eigener Konfigurationsdatei und Plugin-Ökosystem. | **Separat.** Nützlich zum Vergleichen, aber für deinen Codex-Workflow kein Fundament. `CLAUDE.md`, `/init`, `/statusline`, `/grillwithdocs`, `/tdd` und `/codereview(er)` sind teils Claude- oder Drittanbieter-spezifisch, keine universellen Standards. |
| **Gemini Gems** | Wiederverwendbare, konfigurierte Gemini-Assistenten für wiederkehrende Aufgaben. | **Separat.** Konkurrenz zu Skills/Custom Instructions anderer Plattformen; nur vertiefen, falls Gemini im Team Standard wird. |
| **Agent Skills / `SKILL.md`** | Paketierte, bedarfsweise geladene Anleitungen und Ressourcen für wiederkehrende Aufgaben. | **Start.** Gute Abstraktion über mehrere Agenten hinweg; Skills klein, aus vertrauenswürdiger Quelle und mit minimalen Rechten halten. Konkurrenz: lange globale Prompts und unstrukturierte Command-Sammlungen. |
| **Eigene Skills (Technologie- oder Prozess-Skills)** | Wiederholt erfolgreiche Abläufe, z. B. Spring-Migration oder Architekturreview, als versionierte Anleitung festhalten. | **Test.** Erst einen Ablauf manuell stabil machen, dann als Skill bauen. „Wie baut man einen Agenten?“ beginnt meist mit einem Skill plus klaren Werkzeugrechten, nicht mit einem komplexen Framework. |
| **Karpathy Code Skills / Dexter Horthy Skills** | Notierte Skill-Sammlungen bzw. Referenzen. | **Später.** Als Inspirationsquelle ansehen, nicht blind installieren; Autor, Pflege, Rechte und Qualität vorher prüfen. |
| **Skill zum Entfernen von KI-Artefakten im Frontend** | Prüft generierte UI auf Platzhalter, generisches Styling und unnötigen Boilerplate. | **Test.** Nützlich als Review-Regel; ersetzt kein Design-System und keine Accessibility-Tests. |
| **Web-Conventions Skill / Google Baseline** | Vermutlich Regeln für moderne Web-APIs und Browser-Kompatibilität. | **Test, Bezeichnung unpräzise.** Nur mit verifizierter Quelle installieren; für Web-Baselines primär die offiziellen Kompatibilitätsdaten nutzen. |
| **Slash Commands** | Benannte Einstiegspunkte für häufige Abläufe. | **Test.** Praktische UX über Skills; keine Methode an sich. |

## 6. Spezifikations- und Workflow-Systeme – bauen auf Ziel, Kontext und Git auf

| Tool / Konzept | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Spec-Driven Development (SDD)** | Anforderungen, Design, Aufgaben und Verifikation als versionierte Artefakte vor/mit dem Code führen. | **Start.** Gut gegen nicht reproduzierbares Vibe Coding; für Kleinständerungen zu schwergewichtig. |
| **OpenSpec** | Leichtgewichtiges, konfigurierbares SDD-Framework; Standardablauf Proposal → Specs → Design → Tasks. | **Start-Test.** Gute erste Wahl für ein bestehendes Projekt und Codex-Unterstützung. Die Notiz „Sammlung von Skills“ ist nur teilweise richtig: Kern ist das Spezifikations-/Änderungsformat plus Tool-Integration. |
| **GitHub Spec Kit** | Umfangreicheres SDD-Toolkit mit Startpunkten für Feature, Bugfix und Ideenbewertung. | **Start-Test, Alternative zu OpenSpec.** Wähle **eins** für einen Pilot; Spec Kit ist breiter, OpenSpec meist schlanker. Nicht beide parallel als Wahrheit führen. |
| **Kiro** | AWS-Entwicklungsumgebung mit Specs, Steering Files und Hooks. | **Separat.** Direkter Konkurrent zu Codex/Claude/Copilot als Agentenoberfläche; interessant nur bei AWS-/Kiro-Standard im Unternehmen. |
| **Superpowers** | Aktives, composable Skills- und Entwicklungs-Framework mit Brainstorming, TDD, Plan-Ausführung und Subagent-Reviews. | **Test.** Nicht überholt (aktuelle Releases); kann OpenSpec ergänzen, ist aber ein zusätzlicher methodischer Rahmen. Starte mit einzelnen Skills, nicht mit dem gesamten Sieben-Stufen-Prozess. |
| **BMAD Method** | Rollen- und Workflow-Framework für Analyse, Produkt, Architektur und Entwicklung. | **Später.** Konkurrenz zu Superpowers/Spec Kit/OpenSpec, oft umfangreicher als ein Java-Team braucht. Nur bei echter Rollen-/Artefaktlücke evaluieren. |
| **Squad** | Team-/Rollenframework, das Agententeams aus Projektbeschreibung ableitet. | **Später.** Kann überladen sein; ein klarer Research-, Implementierungs- und Review-Agent reicht anfangs. |
| **GOAP (Goal-Oriented Action Planning)** | Planungsansatz aus der Agenten-/Spiele-KI für Zustände, Ziele und Aktionen. | **Separat.** Lehrreich für autonome Agenten, für normalen Anwendungscode kein Entwicklungsworkflow. |
| **„RPI → QRISPI“** | Notiertes, nicht eindeutig auflösbares Prozessakronym. | **Offen.** Nicht als Methode übernehmen, bevor die Quelle den Ablauf und die Abnahme erklärt. |
| **„Trajectory Development / Trajectory Engineer“** | Vermutlich gemeint: Verlauf/Arbeitsweg eines Agenten nachvollziehbar optimieren. | **Offen.** Kein hinreichend klarer, etablierter Java-/Web-Workflow unter dieser Bezeichnung; nur mit Originalquelle weiterverfolgen. |
| **The New SDLC with Vibe Coding (Google, Juni 2026)** | Orientierung: KI beschleunigt Umsetzung; Anforderungen, Architektur und Prüfung bleiben menschliche Engpässe. | **Start als Lektüre.** Passt sehr gut zur Landkarte, ist aber kein Tool. |
| **Boris Tane: „How I use Claude Code“; aihero: „Agent Skills“** | Praxisbeispiele für Research/Plan/Implementierung und Skills. | **Test als Inspiration.** Prinzipien übernehmen, nicht fremde Prompts ungeprüft kopieren. |

## 7. Parallelisierung und Agentic Engineering – baut auf klaren Specs auf

| Technik | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Spezialisierte Subagents** | Getrennte Rollen für Recherche, Implementierung, Test oder Review. | **Test.** Bei unabhängigen, klar abgrenzbaren Aufgaben besser als ein großer Alleskönner-Agent. Jede Rolle als Markdown-Auftrag beschreiben. |
| **Parallele Sessions / Forks** | Mehrere Lösungsansätze oder unabhängige Untersuchungen gleichzeitig ausführen. | **Test.** Nur mit Worktrees, klarer Besitzgrenze und anschließendem Vergleich/Merge. Konkurrenz: serieller Ablauf – für abhängige Änderungen meist besser. |
| **Review-Pipeline / dreifaches Gegenprüfen** | Implementierung, Tests und Review mit unabhängigen Perspektiven prüfen. | **Start als Muster.** Mehrere Reviews nur bei Risiko/Größe; drei Agenten sind kein Ersatz für einen guten Test oder fachliche Abnahme. |
| **Lazy Agents erkennen** | Agenten behaupten zu früh, fertig zu sein. | **Start.** Gegenmittel: explizite Akzeptanzkriterien, Testausführung, Diff-Review und Nachweis pro Checkliste – nicht nur „sei gründlich“. |
| **Rollenprompt („Du bist …“) ** | Rolle kann Aufmerksamkeit lenken. | **Nicht als Hauptmechanismus.** Messbare Aufgaben, Toolrechte und Definition of Done wirken verlässlicher. |
| **Human in the Loop (Keith Morris)** | Mensch bestätigt Entscheidungen und riskante externe Wirkungen. | **Start.** Besonders vor Merge, Deployment, Datenänderung, E-Mail und Berechtigungsänderung. |
| **Rule of R** | Automatisieren, wenn eine Aufgabe repetitiv, regelbasiert und zeitlich rentabel ist. | **Start.** Gute Vorauswahl für Agentenautomatisierung. |
| **`/autoreview` / Review-Skills (u. a. Peter Steinberger notiert)** | Wiederkehrende Reviewfragen in einen festen Agentenablauf legen. | **Test.** Der genaue Skill/Autor muss vor Installation verifiziert werden; entscheidend sind konkrete Prüfkriterien, nicht der Name. |

## 8. Technische Qualität, Java und Web – baut auf dem Workflow auf

| Tool / Technik | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **TDD** | Test zuerst oder parallel schreiben, um Verhalten vor Implementierung festzulegen. | **Start.** Besonders für Bugs und Domainlogik; keine Pflicht, bei der ein UI-Prototyp künstlich unit-testbar gemacht wird. |
| **Playwright** | Browser-End-to-End- und Component-Tests für Webflows. | **Start.** Der Java-Backend-Teststack ergänzt ihn; Konkurrenz: Cypress/Selenium, nicht zu beidem zusätzlich starten. |
| **ArchUnit** | Architekturregeln als Java-Tests: Paketabhängigkeiten, Layer, Zyklen und Konventionen. | **Start.** Sehr hoher Java-Nutzen; ideal, um notierte Vorgaben automatisiert abzusichern. |
| **OpenRewrite** | Semantische, wiederholbare Code-Migrationen und Refactorings über Rezepte. | **Start-Test.** Besonders relevant für Java/Spring-Updates, Security-Patches und große Umstellungen; Konkurrenz: IDE-Refactoring für kleine lokale Änderungen. |
| **JavaDoc-Doclet / Markdown-zu-PDF** | API-Doku aus Packages oder Markdown rendern. | **Später.** Der Notizbegriff „javadclet“ ist zu **JavaDoc-Doclet** korrigiert; erst bei konkretem Dokumentations-/PDF-Releasebedarf auswählen. |
| **Sichtbarkeiten („Alles public“) ** | API-Flächen bewusst klein halten und intern kapseln. | **Nicht übernehmen.** Nicht alles `public` machen; `public` nur für stabile, beabsichtigte Schnittstellen. |
| **Storybook** | Komponenten isoliert entwickeln, dokumentieren und visuell prüfen. | **Test.** Sehr sinnvoll bei React/Vue/Angular-Design-Systemen, sonst Overhead. |
| **Penpot** | Open-Source-UI-Designtool mit Komponenten, Varianten und Design Tokens. | **Separat/Test.** Ergänzt Storybook: Penpot für Design, Storybook für implementierte Komponenten; Konkurrenz: Figma. Ein lokaler, „KI-fähiger Server“ ist kein Grund, ein Design-System ohne Bedarf einzuführen. |
| **Dependency Management, SBOM, CVEs** | Abhängigkeiten inventarisieren, Risiken priorisieren und Updates kontrolliert ausrollen. | **Start.** Für Java Maven/Gradle und npm gleichermaßen; KI hilft beim Finden, ersetzt aber keine Bewertung. |
| **„CVE sofort“ / „Patches erst nach 48 h“** | Starre Kalenderregel für Security-Updates. | **Nicht übernehmen.** Nach Ausnutzbarkeit, Exposition, Kritikalität, Herstellerhinweis und Tests triagieren; bei aktiv ausgenutzten kritischen Lücken beschleunigen, sonst kontrolliert testen. |
| **HTTP Security Headers** | Browser-Schutz per Serverantwort, z. B. HSTS, CSP, `X-Content-Type-Options`, Referrer-Policy. | **Start.** Baseline für Web-Anwendungen; muss zu Auth, Caching und Einbettung passen. |
| **XSS-Schutz, Content Security Policy (CSP), Trusted Types API** | Eingeschleusten JavaScript-Code und unsichere DOM-Sinks verhindern. | **Start.** CSP und sichere Framework-Patterns zuerst, Trusted Types zusätzlich bei komplexen DOM-lastigen Apps. |
| **OWASP Top 10 (Web) und OWASP Top 10 for LLM Applications** | Aktuelle Risikokataloge für klassische Web- und generative KI-Anwendungen. | **Start.** Schreibweise korrigiert: **OWASP Top 10**. Für LLMs ist Prompt Injection nur eines von zehn Risiken. |
| **Prompt Injection / Daten- und Kontext-Poisoning** | Fremde Inhalte versuchen Anweisungen zu überschreiben oder Agenten zu falschen Handlungen zu bewegen. | **Start.** Externe Inhalte als Daten behandeln, Toolrechte minimal halten, sensible Daten trennen und jede externe Aktion bestätigen lassen. |
| **Berechtigungen einschränken** | Least privilege für Agenten, Tokens, Datenzugriff und Aktionen. | **Start.** Wirksamste praktische Verteidigung gegen viele Agenten- und Supply-Chain-Risiken. |
| **JavaScript/SPAs und npm-Abhängigkeiten** | Frontend-Pakete, Transitivabhängigkeiten und Bundling aktiv pflegen statt nur Feature-Code zu betrachten. | **Start.** Gehört zur normalen Web-Engineering-Basis und wird durch SBOM, automatisierte Updates und Security-Scans ergänzt. |

## 9. Automatisierung – erst nach stabilen Checks und Rechtekonzept

| Idee | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Bugtracker → Duplikatprüfung → Reproduktion → Beschreibung → Branch → Regressionstest → PR** | Agentische Fehlerbehebungskette mit nachweisbaren Zwischenartefakten. | **Später/Pilot.** Sehr gute Zielarchitektur, aber nur mit isolierter Umgebung, minimalen Rechten, verpflichtendem Menschen-Gate vor PR/Merge und Unternehmensfreigabe. Bei Consist zuerst René/IT-Security/Datenschutz nach erlaubten Integrationen fragen. |
| **Automatische PR-Review-Agenten** | Prüfen Diffs gegen Tests, Architektur, Security und Spezifikation. | **Test.** Hilfreicher Zweitblick, aber kein Freigabeersatz. An bestehende CI, Codeowner und branch protection anbinden. |
| **Agent holt Anforderungen, arbeitet im Branch und eröffnet PR** | Standardisierte Übergabe von Arbeit an einen Coding-Agenten. | **Später.** Baut auf verlässlicher Ticketqualität, Worktrees/Branches, Tests und Rechtebegrenzung auf. |

## 10. Lokale bzw. alternative Stacks – bewusst ans Ende

| Tool / Begriff | Wofür / Kurzbeschreibung | Einordnung und Konkurrenz |
| --- | --- | --- |
| **Qwen** | Modellfamilie, die cloudbasiert oder lokal über passende Runtime/Harnesses nutzbar ist. | **Separat.** Für Experimente gut; die beschriebenen Prozessartefakte bleiben wichtiger als ein Modellwechsel. |
| **Hermes Agent** | Open-Source-Harness für Toolnutzung, lokale/verschiedene Modelle und u. a. Qwen-Anbindung. | **Später.** Interessant, wenn Qwen/lokale Modelle wirklich ein primärer Workflow werden; zusätzlicher Betriebs-, Sicherheits- und Konfigurationsaufwand. |
| **Bionic** | Selbst hostbare/souveräne KI-Plattform für interne Daten, Modelle, Tools und Workflows. | **Später.** Relevant für On-Premises, Air-Gap oder strenge Governance – kein Ersatz für einen persönlichen Coding-Agenten ohne solchen Bedarf. |
| **„Harness Engineering“ / Coding Harness** | Die Schicht um ein Modell: Tools, Kontext, Rechte, Regeln, Tests und Zustandsübergänge. | **Start als Konzept, später als Bauprojekt.** Erklärt, weshalb identische Modelle unterschiedlich gut arbeiten; baue erst keinen eigenen Harness, solange Codex/CI die Anforderungen erfüllen. |
| **OpenRewrite MCP** | Vermutlich ein MCP-Zugang zu OpenRewrite-Funktionen. | **Später.** Zuerst OpenRewrite als Maven-/Gradle-Workflow evaluieren; MCP ist nur eine zusätzliche Oberfläche. |
| **„xpres AI“** | Notierter Produktname ohne sichere Zuordnung. | **Offen.** Schreibweise/Quelle nachreichen, bevor Zeit investiert wird. |

## Was heute ausdrücklich nicht mehr nötig ist – oder Erwartungen korrigieren

1. **Keine riesige, generische `AGENTS.md`.** Allgemeine Standards gehören in
   Teamkonventionen/Formatter/CI; Agentenanweisungen beschreiben nur lokale
   Besonderheiten und verlinken bei Bedarf weiter.
2. **Keine dauernd automatisch neu geschriebene Code-Zusammenfassung als
   „Memory“.** Sie wird schnell falsch. Bevorzuge Suche, LSP, kleine
   verantwortete Dokumente und bei Bedarf Codebase Memory MCP/OKF.
3. **Kein langer „Ramble Prompt“, nur um einen guten Prompt zu erhalten.**
   Nutze einen zeitlich begrenzten Discovery-/Interview-Schritt mit Ergebnis,
   offenen Fragen und einer Spezifikation.
4. **Kein paralleles Agenten-Team ohne Aufgabenbesitz, Worktree und
   Zusammenführung.** Mehr Agenten vermehren sonst nur widersprüchlichen
   Kontext und Review-Arbeit.
5. **Keine blinde Installation fremder Skills/MCP-Server.** Sie sind
   ausführbare Lieferkette mit Zugriffsrechten – Quelle, Wartung, Datenfluss und
   Berechtigungen prüfen.
6. **Keine starre CVE-48-Stunden-Regel und kein „KI findet Security schon“.**
   Risiken priorisieren, Tests/Scanner/SBOM betreiben und sicher ausrollen.
7. **Kein `public` als Standard und kein „maximal sieben Elemente“ als Gesetz.**
   Beide Ideen sind Heuristiken; API-Grenzen und Verständlichkeit entscheiden.
8. **Kein automatischer Ticket-zu-Merge-Agent in Unternehmenssystemen ohne
   Freigabe.** Prompt Injection, Datenabfluss, falsche Duplikate und ungewollte
   Aktionen sind reale Risiken.
9. **Superpowers ist nicht obsolet.** Es wird aktiv weiterentwickelt; sein
   kompletter Workflow ist aber optional. Nimm nur die Skills, die eine echte
   Lücke schließen.

## Konkreter Lernpfad – mit wenig Parallelität

1. In einem Java/Web-Repo: `AGENTS.md` auf Besonderheiten kürzen, einen
   Worktree-Workflow etablieren, zwei bis fünf ArchUnit-Regeln und einen
   Playwright-Regressionstest ergänzen.
2. Für eine mittlere Änderung: Ziel, EARS-Akzeptanzkriterien,
   Änderungsgrenze, Research-Notiz und Plan als versionierte Markdown-Artefakte
   erstellen; dann **OpenSpec oder Spec Kit** testweise einsetzen.
3. Context7 für aktuelle Bibliotheksdoku verwenden und OpenRewrite an einer
   ungefährlichen Java-/Spring-Migration testen.
4. Erst bei nachweislichem Bedarf: Codebase Memory MCP (großes Repo), einzelne
   Superpowers-Skills, anschließend OKF oder Storybook/Penpot.
5. Lokales Qwen/Hermes oder Bionic nur als getrennten Experimentierpfad
   behandeln; keine produktiven Unternehmensdaten ohne Freigabe.

## Lernmaterial und nicht zugeordnete Notizen

| Notiz | Einordnung |
| --- | --- |
| **„AI Engineering from Scratch“** | **Lektüre/Test.** Nur wertvoll, wenn du die Übungen mit deinem Java/Web-Stack nachbaust, nicht als passiver Kurskonsum. |
| **„Modern Engineering“, Simon Brown, Peter Naur, Karpathy** | **Lektüre.** Denkmodelle und Referenzen, keine installierbaren Tools; bei Simon Brown besonders Architekturkommunikation/Struktur, bei Naur Problemverständnis priorisieren. |
| **„Welche Tools sind nicht mehr relevant – speziell Java?“** | Die Antwort dieser Landkarte: nicht pauschal „veraltet“, sondern nach Problem und Integrationskosten auswählen. Für Java sind ArchUnit, OpenRewrite, Tests, Dependency-Management und aktuelle Doku deutlich wichtiger als ein weiterer Agenten-Harness. |
| **Hardware: Akku lädt nicht, Akku-Tests sowie Windows-/Chrome-Updates** | **Separat, keine KI-Technologie.** Als eigene IT-Checkliste behandeln; nicht mit Agenten-/Toolentscheidungen vermischen. |

## Quellen für die aktuelle Einordnung

Die Tool- und Sicherheitsbewertungen wurden am 20. September 2026 gegen
Primärquellen geprüft: [OpenSpec](https://openspec.dev/),
[GitHub Spec Kit](https://github.com/github/spec-kit/blob/main/docs/index.md),
[Superpowers Releases](https://github.com/obra/superpowers/releases),
[Context7](https://github.com/upstash/context7/blob/master/packages/mcp/README.md),
[Codebase Memory MCP](https://github.com/DeusData/codebase-memory-mcp),
[OpenRewrite](https://docs.openrewrite.org/),
[ArchUnit](https://www.archunit.org/userguide/html/000_Index.html),
[OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/),
[OKF-Spezifikation](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md?plain=1),
[Kiro](https://kiro.dev/docs/), [Bionic](https://github.com/bionic-gpt/bionic-gpt),
[Caveman Code](https://github.com/JuliusBrussee/caveman-code/blob/main/README.md)
und [The New SDLC with Vibe Coding](https://addyosmani.com/blog/new-sdlc-vibe-coding/).

### Quellabdeckung der Rohnotizen

Einbezogen wurden: `ki-2026-04-20.txt`, `ki-2026-05-05.txt`,
`ki-2026-07-07.txt`, `ki-2026-07-21.txt`, `ki-2026-07-21a.txt`,
`ki-2026-07-23.txt`, `ki-2026-07-24.txt`, `ki-2026-07-24a.txt`,
`ki-2026-08-01.txt`, `ki-2026-09-05.txt`, `ki-2026-09-17.txt`,
`ki-2026-09-17a.txt`, `ki-2026-09-17b.txt`, `ki-2026-09-17c.txt`,
`ki-2026-09-17d.txt`, `ki-2026-09-19.txt`, `ki-2026-09-20.txt`,
`ki-2026-09-20a.txt` und `ki-2026-09-20b.txt`. Hardware-Notizen
(Akku/Windows-/Chrome-Updates) sind absichtlich nicht in die KI-Landkarte
gemischt: Sie sind keine KI-Technologie und bleiben unverändert in der Quelle.

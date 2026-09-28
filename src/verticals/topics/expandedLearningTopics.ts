import type { SourceType, Topic, TopicSource } from "./topicContract";

function primary(
  title: string,
  url: string,
  type: SourceType = "official-guide",
  checkedAt = "2026-09-27",
): TopicSource {
  return {
    title,
    url,
    type,
    origin: "primary",
    language: "en",
    checkedAt,
  };
}

function checkedPrimary(title: string, url: string): TopicSource {
  return primary(title, url, "official-guide", "2026-09-28");
}

function card(
  id: string,
  title: string,
  problem: string,
  coreConcept: string,
  javaWebUse: string,
  boundary: string,
  sources: TopicSource[],
  reviewDueAt = "2027-03-27",
): Topic {
  return {
    id,
    title,
    content: { language: "de", problem, coreConcept, javaWebUse, boundary },
    editorial: {
      publishedAt: "2026-09-27",
      reviewedAt: "2026-09-27",
      reviewDueAt,
      status: "active",
    },
    sources,
  };
}

export const expandedLearningTopics: Topic[] = [
  card(
    "domain-language-and-complexity",
    "Fachsprache vereinheitlichen und Komplexität begrenzen",
    "Uneinheitliche Namen und überladene Einheiten erschweren Änderungen: Menschen und Agenten sprechen scheinbar über dasselbe, meinen aber Verschiedenes.",
    "Ein Team klärt Begriffe im abgegrenzten Fachkontext und nutzt dieselben Namen in Gespräch, Spec, Code und Tests. Verantwortlichkeiten werden so geschnitten, dass wichtige Entscheidungen nachvollziehbar bleiben.",
    "In einer Java-Bestellstrecke heißen Status und Aktionen in Controller, Service, Tests und Glossar gleich; ein zu großes Modul wird entlang fachlicher Verantwortungen geteilt.",
    "Eine feste Zahl von Klassen, Methoden oder Begriffen ist kein Architekturgesetz. Unterschiedliche Kontexte dürfen denselben Ausdruck verschieden definieren, wenn die Grenze sichtbar ist.",
    [
      primary(
        "Domain-Driven Design Reference – Eric Evans",
        "https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf",
        "official-publication",
      ),
    ],
  ),
  card(
    "project-documentation-and-checklists",
    "Projektwissen und Fertigkriterien gezielt dokumentieren",
    "Wenn Regeln, Erklärungen und Task-Notizen vermischt werden, lesen Beteiligte zu viel oder übersehen die verbindliche Stelle.",
    "Kurze, verlinkte Dokumente trennen Anleitung, Referenz und Erklärung. Eine konkrete Fertigdefinition nennt die nötigen Prüfungen; flüchtige Arbeitsnotizen werden nicht ungeprüft zu dauerhaften Regeln.",
    "Ein Java-/Web-Team verlinkt aus AGENTS.md auf Build- und Architekturhinweise und hält für eine Änderung Abnahme, Tests und Review in einer kleinen Spec fest.",
    "Eine Checkliste ersetzt weder fachliche Entscheidung noch Test. Eine automatische Wiki-Zusammenfassung braucht einen verantwortlichen Besitzer für ihre Aktualität.",
    [
      primary(
        "Diátaxis documentation framework",
        "https://diataxis.fr/",
        "reference-site",
      ),
      primary(
        "Diátaxis – Tutorials",
        "https://diataxis.fr/tutorials/",
        "official-guide",
      ),
      primary(
        "Diátaxis – How-to guides",
        "https://diataxis.fr/how-to-guides/",
        "official-guide",
      ),
      primary(
        "Diátaxis – Reference",
        "https://diataxis.fr/reference/",
        "official-guide",
      ),
      primary(
        "Diátaxis – Explanation",
        "https://diataxis.fr/explanation/",
        "official-guide",
      ),
      primary(
        "Diátaxis – The map",
        "https://diataxis.fr/map/",
        "official-guide",
      ),
      primary(
        "The Scrum Guide – Definition of Done",
        "https://scrumguides.org/scrum-guide.html",
        "official-publication",
      ),
    ],
  ),
  card(
    "open-knowledge-format",
    "Langlebiges Domänenwissen mit OKF strukturieren",
    "In größeren Projekten ist Domänenwissen über Dateien und Köpfe verteilt; Herkunft und Gültigkeit einer Aussage bleiben unklar.",
    "Open Knowledge Format beschreibt Wissenseinheiten als Markdown mit YAML-Metadaten und Verweisen auf Quellen. Ein Bündel kann versioniert und von Menschen sowie Werkzeugen gelesen werden.",
    "Für einen Java-Webdienst können API-Bedeutungen und Geschäftsbegriffe als kuratierte Wissenseinträge mit Herkunft im Repository liegen.",
    "OKF ist nur bei wirklichem Pflegebedarf sinnvoll. Es ersetzt weder ausführbare Tests noch API-Schemata; die ältere Kopie im Knowledge-Catalog-Repository ist eingefroren.",
    [
      primary(
        "Open Knowledge Format – canonical repository",
        "https://github.com/GoogleCloudPlatform/open-knowledge-format",
        "repository",
      ),
      primary(
        "Open Knowledge Format v0.2 – specification",
        "https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md",
        "official-publication",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "goal-discovery-and-stop-criteria",
    "Ziel, Nutzen und Abbruchkriterien vor dem Coding klären",
    "Ein scheinbar klarer Implementierungswunsch kann mehrere fachliche Ergebnisse meinen oder ohne Grenze ausufern.",
    "Ein gezieltes Gespräch klärt Zielgruppe, gewünschtes Ergebnis, Beispiele, Nicht-Ziele und ein überprüfbares Ende. Bei Unsicherheit werden die entscheidungsrelevanten Fragen zuerst gestellt.",
    "Vor einer neuen Spring-API werden betroffene Aufrufer, erlaubte Antworten, Fehlerfälle und Abnahme mit dem Auftraggeber besprochen.",
    "Eine lange Brainstorming-Runde ist kein Pflichtprozess. Ist eine kleine Änderung eindeutig, reicht eine kleine Klärung; ungeklärte Fachregeln dürfen nicht geraten werden.",
    [
      primary(
        "Best practices for using GitHub Copilot to work on tasks",
        "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results",
      ),
      primary(
        "GOV.UK Service Manual – How the discovery phase works",
        "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
      ),
      primary(
        "GOV.UK Service Manual – Writing user stories",
        "https://www.gov.uk/service-manual/agile-delivery/writing-user-stories",
      ),
      primary(
        "GOV.UK Service Manual – Measuring the benefits of your service",
        "https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits",
      ),
    ],
  ),
  card(
    "design-and-legacy-specification",
    "Bestehendes Verhalten erforschen und einen Entwurf prüfbar machen",
    "Ein Plan für Legacy-Code kann auf einer erfundenen Regel beruhen, wenn nur Namen oder einzelne Beispiele betrachtet wurden.",
    "Beobachtungen aus Code, Tests, Nutzungsfällen und Fachgespräch werden getrennt von Annahmen festgehalten. Für riskante Änderungen skizzieren Datenstrukturen, Pseudocode und Gegenbeispiele die beabsichtigte Lösung.",
    "Vor dem Ersatz einer Java-Berechnungsroutine werden repräsentative Ein- und Ausgaben gemessen und als Regressionstests festgehalten; erst danach wird die neue Struktur entworfen.",
    "Eine von KI erzeugte Spezifikation bleibt eine Hypothese, bis sie gegen Systemverhalten und Fachwissen geprüft wurde. GOAP ist ein Planungsmodell, kein Standard für jede Webänderung.",
    [
      primary(
        "From Black Box to Blueprint – Martin Fowler",
        "https://martinfowler.com/articles/black-box-to-blueprint.html",
        "official-publication",
      ),
    ],
  ),
  card(
    "standards-and-constraint-rationale",
    "Relevante Standards und Einschränkungen begründen",
    "Eine pauschale Normenliste oder ein unbegründetes Verbot lenkt eine Änderung vom eigentlichen Risiko ab.",
    "Für den konkreten Einsatz werden passende Anforderungen ausgewählt und mit Zweck, Geltungsbereich und prüfbarem Verhalten verbunden. Einschränkungen nennen die Gefahr, die sie verhindern sollen.",
    "Für einen öffentlichen Spring-Endpunkt wird eine passende ASVS-Anforderung zu Zugriffsschutz gewählt und durch einen Integrationstest geprüft.",
    "ASVS ist ein Anforderungskatalog, kein Nachweis, dass ein System sicher ist. Eine Versionsnummer und der gewählte Prüfumfang müssen zum Projekt passen.",
    [
      primary(
        "OWASP Application Security Verification Standard",
        "https://owasp.org/projects/asvs",
        "reference-site",
      ),
      primary(
        "OWASP ASVS – repository and version guidance",
        "https://github.com/OWASP/ASVS/blob/master/README.md",
        "official-guide",
      ),
      primary(
        "OWASP ASVS – scope and requirements",
        "https://github.com/OWASP/ASVS/blob/master/5.0/en/0x03-What-is-the-ASVS.md",
        "official-guide",
      ),
      primary(
        "OWASP ASVS – assessment and certification",
        "https://github.com/OWASP/ASVS/blob/master/5.0/en/0x04-Assessment_and_Certification.md",
        "official-guide",
      ),
      primary(
        "OWASP ASVS – changes from version 4",
        "https://github.com/OWASP/ASVS/blob/master/5.0/en/0x05-For-Users-Of-4.0.md",
        "official-guide",
      ),
    ],
  ),
  card(
    "llm-fallibility-and-counterchecks",
    "Plausible KI-Antworten mit Gegenbelegen prüfen",
    "Ein Sprachmodell kann eine falsche Prämisse flüssig fortsetzen und nach einer Korrektur sprachlich zustimmen, ohne den Fehler tatsächlich zu beheben.",
    "Aussagen werden an Originalquellen, ausführbaren Tests und Gegenbeispielen geprüft. Für reversible Prototypen darf der Prüfaufwand geringer sein als für kritische Fach- oder Sicherheitslogik.",
    "Vor der Übernahme eines vorgeschlagenen Java-Patches prüft das Team einen Gegenfall und vergleicht die behauptete Bibliotheks-API mit der verwendeten Version.",
    "Mehr Nachfragen allein garantieren keine Korrektheit; auch Tests können einen falsch verstandenen Sollzustand bestätigen.",
    [
      primary(
        "NIST AI RMF Generative AI Profile",
        "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=958388",
        "official-publication",
      ),
      primary(
        "Towards understanding sycophancy in language models – Anthropic",
        "https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models",
        "official-publication",
      ),
    ],
  ),
  card(
    "context-selection-and-reset",
    "Agentenkontext gezielt auswählen und neu ordnen",
    "Zu viele unpassende Dateien und alte Annahmen verdrängen die für die aktuelle Änderung nötigen Fakten.",
    "Relevante Ausschnitte werden gezielt gesucht, Ergebnisse knapp mit Fundstellen verdichtet und bei Widerspruch neu geprüft. Unabhängige Aufgaben können in getrennten Kontexten bearbeitet werden.",
    "Für einen Spring-Fehler werden nur Endpunkt, aufgerufener Service und passende Tests gelesen; nach einem falschen Ansatz wird der geprüfte Stand neu zusammengefasst.",
    "Kompaktierung kann Details verlieren. Ein Kontext-Reset ersetzt weder Quellprüfung noch technische Isolation von Dateien, Rechten und Diensten.",
    [
      primary(
        "Mastering remote engineering work from your phone – OpenAI",
        "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        "official-publication",
      ),
      primary(
        "Managing context in GitHub Copilot CLI – GitHub Docs",
        "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "codebase-memory-for-large-repos",
    "Große Repositories mit einem Codegraphen erschließen",
    "In einem großen Repository sind Aufrufketten und Auswirkungen schwer allein durch wiederholtes Öffnen einzelner Dateien zu erkennen.",
    "Codebase Memory MCP indexiert Code zu einem abfragbaren Graphen für Struktur- und Abhängigkeitsfragen. Befunde werden gegen aktuelle Quelldateien geprüft.",
    "Vor einer Änderung an einem Java-Service werden Aufrufer und verbundene Web-Routen im Graphen gesucht und anschließend im Code bestätigt.",
    "Ein Index kann veralten oder dynamische Beziehungen übersehen. Hersteller-Benchmarks zu Zeit und Tokenverbrauch gelten nicht automatisch für das eigene Repository.",
    [
      primary(
        "Codebase Memory MCP",
        "https://github.com/DeusData/codebase-memory-mcp",
        "repository",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "token-efficiency-tools",
    "Tokenwerkzeuge erst nach einem gemessenen Engpass einsetzen",
    "Lange Terminalausgaben und wiederholter Kontext können Agentensitzungen verteuern, ohne bessere Entscheidungen zu liefern.",
    "RTK verdichtet typische Kommandoausgaben; Caveman bietet weitere Kontext- und Ausgabeverdichtung. Vor Einsatz werden Originaldaten, Fehlerdetails und tatsächliche Einsparung am eigenen Ablauf geprüft.",
    "Ein Java-/Web-Team vergleicht einen Testlauf mit und ohne Verdichtung und kontrolliert, ob Fehlermeldungen und relevante Testnamen vollständig auffindbar bleiben.",
    "Die ältere Variante Caveman Code ist seit August 2026 eingefroren. Verdichtung kann entscheidende Details auslassen und ist kein Ersatz für gezielte Suche.",
    [
      primary(
        "RTK – Rust Token Killer",
        "https://github.com/rtk-ai/rtk",
        "repository",
      ),
      primary(
        "Caveman",
        "https://github.com/JuliusBrussee/caveman",
        "repository",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "coding-agent-interface-selection",
    "Coding-Agenten nach Arbeitsumgebung auswählen",
    "Mehrere Agentenoberflächen wirken austauschbar, unterscheiden sich aber bei Repository-Zugriff, Planung, Werkzeugen und menschlicher Kontrolle.",
    "Codex, Copilot, Claude Code und Kiro werden an einer konkreten Aufgabe nach Laufumgebung, Rechten, Review und Kosten verglichen. Gemini Gems sind wiederverwendbare Assistenten, aber kein Ersatz für einen Coding-Workflow.",
    "Ein Team führt dieselbe begrenzte Java-/Web-Aufgabe in zwei zugelassenen Umgebungen aus und vergleicht Diff, Tests, Review-Aufwand und Datenfluss.",
    "Funktionen und Preise ändern sich; ein Produktname sagt nichts über die Freigabe für sensible Projektdaten. Eine zweite Oberfläche ist nur bei messbarem Nutzen sinnvoll.",
    [
      primary(
        "Codex Remote Guide – OpenAI",
        "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        "official-publication",
      ),
      primary(
        "GitHub Copilot Plan mode",
        "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
      ),
      primary(
        "Claude Code overview",
        "https://code.claude.com/docs/en/overview",
      ),
      primary(
        "Kiro first project",
        "https://kiro.dev/docs/getting-started/first-project/",
      ),
      primary(
        "Gemini Gems help",
        "https://support.google.com/gemini/answer/15236321?hl=en",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "agent-skills-and-commands",
    "Wiederkehrende Agentenabläufe als Skills prüfen",
    "Ein langer globaler Prompt oder eine ungeprüfte fremde Skill-Sammlung macht wiederkehrende Aufgaben schwer wartbar und kann unnötige Rechte verlangen.",
    "Ein Skill bündelt eine kleine wiederholbare Anleitung mit optionalen Ressourcen. Ein Slash Command kann den Einstieg erleichtern; Werkzeugrechte und Datenzugriff werden separat geprüft.",
    "Ein erprobter Spring-Migrationsablauf wird erst nach mehreren erfolgreichen Durchläufen als Skill mit Tests, Abbruchfällen und Quellen verpackt.",
    "Ein Skill ist keine Sicherheitsgrenze und eine Rollenbeschreibung ersetzt keine überprüfbaren Akzeptanzkriterien. Fremde Skills vor Installation auf Herkunft und Verhalten prüfen.",
    [
      primary(
        "OpenAI Skills",
        "https://developers.openai.com/plugins/concepts/skills",
      ),
      primary(
        "Build skills – OpenAI",
        "https://developers.openai.com/plugins/build/skills",
      ),
      primary(
        "Plugin security and privacy – OpenAI",
        "https://developers.openai.com/plugins/guides/security-privacy",
      ),
      primary(
        "Testing Agent Skills Systematically with Evals – OpenAI",
        "https://developers.openai.com/blog/eval-skills",
        "official-publication",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "spec-framework-selection",
    "Spec-Frameworks an einem kleinen Pilot vergleichen",
    "Ein Team kann mehrere Spezifikationssysteme installieren und dadurch doppelte Wahrheiten statt klarer Anforderungen schaffen.",
    "OpenSpec und GitHub Spec Kit organisieren Anforderungen und Umsetzung unterschiedlich; Kiro bringt Specs in eine eigene Entwicklungsumgebung. Umfangreichere Rahmen wie Superpowers oder BMAD werden nur bei konkreter Prozesslücke geprüft.",
    "Für eine mittelgroße Java-/Web-Änderung nutzt das Team genau einen Pilotablauf, prüft Spec, Aufgaben, Diff und Tests und entscheidet dann über Beibehaltung.",
    "Ein Framework erzeugt keine richtigen Fachregeln. GOAP ist ein Planungsansatz und die unklaren Kürzel der Landkarte sind ohne Originalquelle keine auswählbaren Methoden.",
    [
      primary("OpenSpec", "https://openspec.dev/", "reference-site"),
      primary(
        "OpenSpec spec-driven schema",
        "https://openspec.dev/docs/schemas/spec-driven",
      ),
      primary(
        "GitHub Spec Kit",
        "https://github.com/github/spec-kit/blob/main/docs/index.md",
        "repository",
      ),
      primary(
        "Kiro Specs",
        "https://kiro.dev/docs/getting-started/first-project/",
      ),
      primary("Kiro Specs workflow", "https://kiro.dev/docs/specs/"),
    ],
    "2026-12-27",
  ),
  card(
    "automation-value-and-gates",
    "Automatisierung nach Nutzen und Kontrollpunkten auswählen",
    "Ein automatisierter Ablauf kann Fehler schneller und häufiger ausführen, wenn Eingaben, Rechte und Abnahme unklar sind.",
    "Wiederholung, klare Regeln und messbarer Zeitgewinn rechtfertigen einen Pilot. Ein Workflow hält Zustände und Pflichtprüfungen technisch fest; riskante Übergänge verlangen gezielte menschliche Freigabe.",
    "Ein Bot darf einen Java-Bug reproduzieren und einen Testvorschlag vorbereiten; ein PR oder Release folgt erst nach festgelegten Checks und Review.",
    "Ein Prompt steuert keinen zuverlässigen Zustandsautomaten. Automatisierung lohnt sich nicht, wenn Koordination und Kontrolle mehr kosten als der manuelle Ablauf.",
    [
      primary(
        "Guardrails and human review – OpenAI",
        "https://developers.openai.com/api/docs/guides/agents/guardrails-approvals",
      ),
      primary(
        "Best practices for using GitHub Copilot to work on tasks",
        "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "web-security-baseline",
    "Web- und KI-Risiken mit passenden Baselines prüfen",
    "Eine allgemeine Top-10-Liste oder ein einzelner HTTP-Header deckt die Sicherheitsrisiken einer Anwendung nur ausschnittweise ab.",
    "OWASP Top 10 für Webanwendungen und für LLM-Anwendungen adressieren unterschiedliche Bedrohungen. Anforderungen an Zugriffe, Konfiguration, Ausgabe und Header werden passend zum System ausgewählt und getestet.",
    "Für eine Spring-/React-App prüft das Team Zugriffskontrolle und Sicherheitsheader; bei einer Agentenintegration zusätzlich Prompt Injection und unerwünschte Werkzeugaktionen.",
    "CSP und Trusted Types ergänzen sichere DOM-Nutzung, ersetzen sie aber nicht. Eine statische GitHub-Pages-App hat andere Header-Möglichkeiten als ein eigener Server.",
    [
      primary(
        "OWASP Top 10:2025",
        "https://top10.owasp.org/2025/",
        "reference-site",
      ),
      primary(
        "OWASP A01:2025 Broken Access Control",
        "https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/",
      ),
      primary(
        "OWASP A02:2025 Security Misconfiguration",
        "https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/",
      ),
      primary(
        "OWASP A05:2025 Injection",
        "https://top10.owasp.org/2025/A05_2025-Injection/",
      ),
      primary(
        "OWASP Top 10 for LLM Applications",
        "https://genai.owasp.org/llm-top-10/",
        "reference-site",
      ),
      primary(
        "OWASP LLM01:2025 Prompt Injection",
        "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
      ),
      primary(
        "OWASP LLM06:2025 Excessive Agency",
        "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/",
      ),
      primary(
        "MDN practical security implementation guides",
        "https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides",
        "reference-site",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "ui-design-system-workflow",
    "UI-Komponenten entwerfen und sichtbar prüfen",
    "Wiederkehrende Weboberflächen driften auseinander, wenn Gestaltung und implementierte Zustände getrennt gepflegt werden.",
    "Penpot verwaltet Entwurfskomponenten; Storybook zeigt implementierte Komponenten in konkreten Zuständen. Ein Frontend-Review prüft Lesbarkeit, Interaktion, Barrierefreiheit und generische Platzhalter.",
    "Für eine React-Eingabekomponente werden Zustände in Storybook dokumentiert und mit dem Penpot-Entwurf sowie Browser-Tests verglichen.",
    "Für eine kleine einmalige Oberfläche kann ein Design-System zu viel Aufwand sein. Ein visueller Skill ersetzt weder Nutzertest noch Accessibility-Prüfung.",
    [
      primary(
        "Storybook component documentation",
        "https://storybook.js.org/docs/writing-docs",
      ),
      primary(
        "Penpot components",
        "https://help.penpot.app/user-guide/design-systems/components/",
      ),
      checkedPrimary(
        "Storybook stories",
        "https://storybook.js.org/docs/writing-stories",
      ),
      checkedPrimary(
        "Storybook args",
        "https://storybook.js.org/docs/writing-stories/args",
      ),
      checkedPrimary(
        "Storybook interaction tests",
        "https://storybook.js.org/docs/writing-tests/interaction-testing",
      ),
      checkedPrimary(
        "Storybook accessibility tests",
        "https://storybook.js.org/docs/writing-tests/accessibility-testing",
      ),
      checkedPrimary(
        "Storybook visual tests",
        "https://storybook.js.org/docs/writing-tests/visual-testing",
      ),
      checkedPrimary(
        "Penpot variants",
        "https://help.penpot.app/user-guide/design-systems/variants/",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "technical-documentation-generation",
    "Java-API-Dokumentation gezielt erzeugen",
    "Öffentliche Java-APIs werden schwer nutzbar, wenn Kommentare fehlen oder generierte Doku nicht zum Build passt.",
    "Javadoc liest Java-Quellen und Dokumentationskommentare; Doclets bestimmen die Ausgabe. Veröffentlichte API-Doku wird mit der verwendeten JDK-Version gebaut und geprüft.",
    "Ein Java-Modul erzeugt HTML-API-Dokumentation für seine öffentlichen Verträge und prüft Links sowie Beispiele im Build.",
    "Ein Markdown-zu-PDF-Export ist ein anderer Vorgang. Generierung kann veraltete oder fachlich falsche Kommentare nicht selbst korrigieren.",
    [
      primary(
        "Oracle Javadoc Guide – JDK 26",
        "https://docs.oracle.com/en/java/javase/26/javadoc/javadoc-guide.pdf",
      ),
      checkedPrimary(
        "JavaDoc Documentation Comment Specification – JDK 26",
        "https://docs.oracle.com/en/java/javase/26/docs/specs/javadoc/doc-comment-spec.html",
      ),
      checkedPrimary(
        "The javadoc Command – JDK 26",
        "https://docs.oracle.com/en/java/javase/26/docs/specs/man/javadoc.html",
      ),
    ],
  ),
  card(
    "bug-triage-and-pr-automation",
    "Bug-Triage bis zum PR schrittweise automatisieren",
    "Ein Agent, der aus einem unklaren Ticket sofort einen PR macht, kann Duplikate übersehen, den Fehler falsch reproduzieren oder zu viel ändern.",
    "Triage, Reproduktion, Regressionstest, begrenzter Branch, Review und PR sind getrennte, überprüfbare Übergänge. Ein Mensch entscheidet über riskante oder externe Aktionen.",
    "Für einen Spring-Bug vergleicht ein Bot ähnliche Issues, zeigt einen fehlschlagenden Test und erstellt nach Prüfung einen begrenzten Patch.",
    "Unternehmenssysteme, Kundendaten und Schreibrechte brauchen Freigaben. Ein automatisch geöffneter PR ist kein Nachweis für eine korrekte Lösung.",
    [
      primary(
        "Best practices for using GitHub Copilot to work on tasks",
        "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results",
      ),
      checkedPrimary(
        "Creating an issue – GitHub Docs",
        "https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue",
      ),
      checkedPrimary(
        "Filtering and searching issues and pull requests – GitHub Docs",
        "https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests",
      ),
      checkedPrimary(
        "Using GitHub Copilot cloud agent to improve a project",
        "https://docs.github.com/en/copilot/tutorials/cloud-agent/improve-a-project",
      ),
      checkedPrimary(
        "Reviewing proposed changes in a pull request – GitHub Docs",
        "https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "local-model-stack-evaluation",
    "Lokale und souveräne KI-Stacks bewusst erproben",
    "Ein lokales Modell, ein Agentenprogramm und eine selbst hostbare Plattform werden oft als gleichwertige Alternativen behandelt, obwohl Betrieb und Datenfluss verschieden sind.",
    "Qwen ist eine Modellfamilie, Hermes ein Agenten-Harness und Bionic eine Plattform für kontrollierte interne Workflows. Ein Pilot prüft Modellqualität, Hardware, Rechte, Wartung und tatsächlichen Datenfluss getrennt.",
    "Ein Team testet eine freigegebene Java-Analyseaufgabe lokal und vergleicht Ergebnis, Laufzeit und Review-Aufwand mit dem bisherigen Ablauf.",
    "Lokal bedeutet nicht automatisch sicher oder günstig. Für produktive Unternehmensdaten gelten gesonderte rechtliche und technische Freigaben.",
    [
      primary("Qwen3", "https://github.com/QwenLM/Qwen3", "repository"),
      primary(
        "Hermes Agent",
        "https://github.com/NousResearch/hermes-agent",
        "repository",
      ),
      primary(
        "Bionic",
        "https://github.com/bionic-gpt/bionic-gpt",
        "repository",
      ),
    ],
    "2026-12-27",
  ),
  card(
    "coding-harness-design",
    "Agenten-Harness mit technischen Grenzen gestalten",
    "Ein Agent mit Toolzugriff kann einen guten Prompt trotzdem falsch ausführen oder mehr Daten und Rechte nutzen als nötig.",
    "Ein Harness verbindet Werkzeuge, Kontext, Zustände, Sandbox, Netzwerkregeln und deterministische Tests. Identität und Zugangsdaten bleiben außerhalb der untrusted Ausführungsumgebung, soweit die Architektur es erlaubt.",
    "Für einen Java-/Web-Patch läuft der Agent in isoliertem Checkout mit begrenzten Schreibrechten; CI entscheidet anhand fester Tests über die Übernahme.",
    "Ein eigenes Harness ist ein Bauprojekt mit Wartungs- und Sicherheitskosten. Ein MCP-Zugang zu OpenRewrite ist nur eine Oberfläche für dessen Rezepte, keine neue Migrationsmethode.",
    [
      primary(
        "Sandbox security – OpenAI",
        "https://developers.openai.com/api/docs/guides/agents-api/environments/security",
      ),
      checkedPrimary(
        "Agents API Architecture – OpenAI",
        "https://developers.openai.com/api/docs/guides/agents-api/architecture",
      ),
      checkedPrimary(
        "Self-hosted sandboxes – OpenAI",
        "https://developers.openai.com/api/docs/guides/agents-api/environments/self-hosted",
      ),
      checkedPrimary(
        "MCP connections – OpenAI",
        "https://developers.openai.com/api/docs/guides/agents-api/tools/mcp",
      ),
      checkedPrimary(
        "Run and continue sessions – OpenAI",
        "https://developers.openai.com/api/docs/guides/agents-api/sessions",
      ),
    ],
    "2026-12-27",
  ),
];

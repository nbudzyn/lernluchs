import type { Topic } from "./topicContract";

function editorial(reviewDueAt = "2027-03-27") {
  return {
    publishedAt: "2026-09-27",
    reviewedAt: "2026-09-27",
    reviewDueAt,
    status: "active" as const,
  };
}

export const fourthPathTopics: Topic[] = [
  {
    id: "git-worktrees-for-isolated-changes",
    title: "Git-Worktrees für isolierte Änderungen nutzen",
    content: {
      language: "de",
      problem:
        "Zwei gleichzeitige Änderungen im selben Checkout überschreiben Dateien oder vermischen unvollständige Arbeitsstände.",
      coreConcept:
        "Ein Git-Repository kann mehrere verknüpfte Arbeitsverzeichnisse besitzen. Jeder Worktree hat seinen eigenen Checkout; Branches und Git-Objekte gehören weiterhin zum gemeinsamen Repository.",
      javaWebUse:
        "Eine Spring-Migration und eine React-Korrektur werden in getrennten Worktrees mit jeweils eigener Branch und eigenen Tests bearbeitet; erst geprüfte Änderungen werden zusammengeführt.",
      boundary:
        "Worktrees trennen Dateien, aber nicht automatisch externe Dienste, Datenbanken oder Ports. Für abhängige Arbeiten hilft ein serieller Ablauf oft mehr; entfernte Worktrees werden mit Git-Befehlen verwaltet.",
    },
    editorial: editorial(),
    sources: [
      {
        title: "Git: git-worktree Documentation",
        url: "https://git-scm.com/docs/git-worktree",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
  {
    id: "code-navigation-with-symbols-and-references",
    title: "Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen",
    content: {
      language: "de",
      problem:
        "Eine reine Textsuche übersieht Aufrufbeziehungen oder verwechselt gleichnamige Methoden, Klassen und Variablen.",
      coreConcept:
        "Symbolnavigation führt zu Definitionen und Implementierungen; Referenzsuche zeigt Verwendungen eines aufgelösten Symbols. Suchbereich und Treffer werden fachlich geprüft.",
      javaWebUse:
        "Vor der Änderung einer Java-Service-Methode werden Implementierungen und Aufrufer in der IDE geprüft; im TypeScript-Frontend wird von einer Prop zu Definition und Verwendungen navigiert.",
      boundary:
        "Index, Sprachunterstützung und dynamische Aufrufe begrenzen die Treffer. Textsuche, Tests und Laufzeitbeobachtung ergänzen die Symbolsuche, besonders bei Konfiguration und Reflection.",
    },
    editorial: editorial(),
    sources: [
      {
        title: "Code Navigation - Visual Studio Code",
        url: "https://code.visualstudio.com/docs/editing/editingevolved",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "Search for usages - IntelliJ IDEA",
        url: "https://www.jetbrains.com/help/idea/find-highlight-usages.html",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
  {
    id: "versioned-library-docs-with-context7",
    title: "Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen",
    content: {
      language: "de",
      problem:
        "Ein Coding-Agent kann Beispiele für eine falsche Bibliotheksversion übernehmen und dadurch veraltete oder nicht vorhandene APIs vorschlagen.",
      coreConcept:
        "Context7 liefert Bibliotheksdokumentation anhand einer Bibliotheks-ID und kann eine Version eingrenzen. Die gefundene Passage wird der tatsächlich eingesetzten Version und der Originaldokumentation des Herstellers gegenübergestellt.",
      javaWebUse:
        "Bei einem Spring-Boot-3.5-Projekt wird zuerst die verwendete Version im Build geprüft, dann passende Dokumentation gesucht und eine relevante Aussage mit der Spring-Boot-3.5-Referenz abgeglichen.",
      boundary:
        "Context7 ist ein Such- und Kontextwerkzeug, keine Autorität für Korrektheit oder Aktualität. Eine Versionsnennung garantiert keinen passenden Treffer; bei Abweichungen zählt die Originaldokumentation.",
    },
    editorial: editorial("2026-12-27"),
    sources: [
      {
        title: "Context7 Platform - Upstash",
        url: "https://github.com/upstash/context7",
        type: "repository",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "Context7 API Guide - Upstash",
        url: "https://github.com/upstash/context7/blob/master/docs/api-guide.mdx",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "Spring Boot 3.5 Reference",
        url: "https://docs.spring.io/spring-boot/3.5/reference/index.html",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
  {
    id: "java-spring-migrations-with-openrewrite",
    title: "Java-/Spring-Migrationen mit OpenRewrite durchführen",
    content: {
      language: "de",
      problem:
        "Größere Java- oder Spring-Upgrades enthalten wiederkehrende API- und Build-Änderungen, die per Hand leicht inkonsistent werden.",
      coreConcept:
        "OpenRewrite führt ausgewählte, wiederholbare Rezepte über Maven oder Gradle aus. Ein Rezept beschreibt konkrete Quellcode- oder Build-Transformationen für eine Zielmigration.",
      javaWebUse:
        "Für ein Spring-Boot-Upgrade wird ein passendes Rezept ausgewählt, in einem isolierten Branch ausgeführt und der Diff mit Build, Tests und Laufzeitprüfung gegen die Migrationsziele geprüft.",
      boundary:
        "Ein Rezept ersetzt keine fachliche Abnahme. Zielversion, Rezeptumfang, Verfügbarkeit und Lizenz sind vor dem Einsatz zu prüfen; projektspezifische Anpassungen können offenbleiben.",
    },
    editorial: editorial("2026-12-27"),
    sources: [
      {
        title: "Running Recipes - OpenRewrite",
        url: "https://docs.openrewrite.org/running-recipes/getting-started",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "Migrate to Spring Boot 3.5 - OpenRewrite",
        url: "https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_5-community-edition",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
];

export const fifthPathTopics: Topic[] = [
  {
    id: "parallel-agent-task-boundaries",
    title: "Aufgaben und Abbruchkriterien für parallele Agenten festlegen",
    content: {
      language: "de",
      problem:
        "Mehrere Agenten können dieselben Dateien ändern, voneinander abhängige Entscheidungen doppelt treffen oder ohne klares Ende weiterarbeiten.",
      coreConcept:
        "Vor der Delegation werden unabhängige Ergebnisse, Dateibesitz, Eingaben, Akzeptanzkriterien und Abbruchgrenzen wie Zeit, Kosten oder fehlende Evidenz festgelegt.",
      javaWebUse:
        "Ein Agent untersucht die Java-API und ein anderer den React-Aufrufvertrag; beide liefern Befunde zu getrennten Dateien, bevor ein Mensch die gemeinsame Änderung plant.",
      boundary:
        "Parallelität hilft nur bei tatsächlich trennbaren Aufgaben. Gemeinsame Schnittstellen und widersprüchliche Befunde brauchen eine koordinierte Entscheidung; ein zusätzlicher Agent ist kein Selbstzweck.",
    },
    editorial: editorial("2026-12-27"),
    sources: [
      {
        title: "A practical guide to building agents - OpenAI",
        url: "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "How we built our multi-agent research system - Anthropic",
        url: "https://www.anthropic.com/engineering/multi-agent-research-system",
        type: "official-publication",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
  {
    id: "specialized-subagents-and-ownership",
    title: "Spezialisierte Subagents mit klarem Aufgabenbesitz einsetzen",
    content: {
      language: "de",
      problem:
        "Ohne Zuständigkeiten liefern parallele Agenten überlappende Patches und ihre Ergebnisse lassen sich schwer zusammenführen.",
      coreConcept:
        "Ein koordinierender Agent vergibt begrenzte Teilaufträge mit eigener Aufgabe, Kontext, Werkzeugen und erwartetem Ergebnis. Zuständigkeit für Dateien und Entscheidungen wird ausdrücklich benannt.",
      javaWebUse:
        "Ein Subagent prüft ausschließlich Tests einer Spring-Migration, ein anderer die Dokumentationsfolgen; die Hauptinstanz bewertet beide Befunde gegen denselben API-Vertrag.",
      boundary:
        "Eine Rollenbeschreibung allein erzwingt keinen Dateibesitz. Getrennte Worktrees, begrenzte Rechte und ein abschließender Diff-Review bleiben nötig; einfache Aufgaben können seriell schneller sein.",
    },
    editorial: editorial("2026-12-27"),
    sources: [
      {
        title: "Custom agents and sub-agent orchestration - GitHub Docs",
        url: "https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/custom-agents",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "How we built our multi-agent research system - Anthropic",
        url: "https://www.anthropic.com/engineering/multi-agent-research-system",
        type: "official-publication",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
  {
    id: "agent-context-handoffs",
    title: "Kontext zwischen Agenten gezielt übergeben",
    content: {
      language: "de",
      problem:
        "Eine Übergabe ohne geprüften Zwischenstand verliert Annahmen, offene Fragen und den Bezug zu konkreten Dateien oder Tests.",
      coreConcept:
        "Eine Übergabe nennt Auftrag, relevante Fakten mit Fundstellen, getroffene Entscheidungen, Prüfstand und offene Punkte. Der empfangende Agent bekommt nur den nötigen Kontext und bestätigt die Übernahme.",
      javaWebUse:
        "Nach der Analyse eines Java-Controllers werden betroffene Endpunkte, Dateipfade, API-Annahmen und fehlschlagende Tests an den Agenten für die Weboberfläche übergeben.",
      boundary:
        "Eine Zusammenfassung kann Details auslassen oder falsch darstellen. Kritische Aussagen werden an Originaldateien geprüft; bei einem echten Agenten-Handoff können auch Verlauf und Werkzeugrechte mitübergehen.",
    },
    editorial: editorial("2026-12-27"),
    sources: [
      {
        title: "Handoffs - OpenAI Agents SDK",
        url: "https://openai.github.io/openai-agents-python/handoffs/",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "A practical guide to building agents - OpenAI",
        url: "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
  {
    id: "agent-tool-and-mcp-permissions",
    title: "Werkzeugrechte und MCP-Zugriffe begrenzen",
    content: {
      language: "de",
      problem:
        "Ein Agent mit pauschalem Schreib-, Netzwerk- oder MCP-Zugriff kann durch Fehler oder fremde Inhalte weit mehr verändern als für seine Aufgabe nötig.",
      coreConcept:
        "Werkzeuge, Datenquellen und Zugangsdaten werden pro Rolle auf den nötigen Umfang begrenzt. Riskante Aktionen erhalten technische Schranken und eine passende Freigabe.",
      javaWebUse:
        "Ein Rechercheagent darf Java-Quellen und Bibliotheksdokumentation lesen, aber keine Deployments auslösen; ein Implementierungsagent schreibt nur im zugewiesenen Worktree.",
      boundary:
        "Promptregeln sind keine Rechtekontrolle. MCP-Server können eigene Berechtigungen besitzen; auch ein lesender Zugriff kann sensible Daten offenlegen.",
    },
    editorial: { ...editorial("2026-12-27"), reviewedAt: "2026-09-28" },
    sources: [
      {
        title: "Custom agents configuration - GitHub Docs",
        url: "https://docs.github.com/en/copilot/reference/custom-agents-configuration",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-28",
      },
      {
        title: "Sandbox security - OpenAI Agents API",
        url: "https://developers.openai.com/api/docs/guides/agents-api/environments/security",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-28",
      },
    ],
  },
  {
    id: "deterministic-agent-verification-gates",
    title: "Deterministische Prüf-Gates im Agenten-Harness gestalten",
    content: {
      language: "de",
      problem:
        "Ein Agent kann eine Änderung als fertig melden, obwohl Tests, Lint oder Sicherheitsprüfungen nicht gelaufen sind oder fehlschlagen.",
      coreConcept:
        "Ein Harness oder CI-Ablauf führt fest definierte Prüfungen selbst aus und sperrt die Übernahme bei Fehlern. Testbefehle, Exitcodes und Pflichtstatus sind maschinell prüfbar.",
      javaWebUse:
        "Für einen Spring- und React-Patch laufen Build, Typprüfung, Unit- und Browser-Tests als feste Gates; ein fehlgeschlagener Pflichtcheck verhindert die Übernahme.",
      boundary:
        "Grüne Checks ersetzen weder passende Testfälle noch Review. Ein übersprungener oder falsch konfigurierter Check kann grün erscheinen; das Gate muss selbst geprüft werden.",
    },
    editorial: editorial("2026-12-27"),
    sources: [
      {
        title: "Status checks - GitHub Docs",
        url: "https://docs.github.com/en/pull-requests/reference/status-checks",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "Evaluate agent workflows - OpenAI",
        url: "https://developers.openai.com/api/docs/guides/agent-evals",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
  {
    id: "compare-parallel-and-serial-agent-work",
    title: "Parallelität gegen einen seriellen Ablauf messen",
    content: {
      language: "de",
      problem:
        "Mehr Agenten wirken schneller, können aber zusätzliche Kosten, Koordination und Review-Aufwand erzeugen, ohne das Ergebnis zu verbessern.",
      coreConcept:
        "Für vergleichbare Aufgaben werden ein serieller und ein paralleler Ablauf mit denselben Anforderungen und Abnahmekriterien geprüft. Ergebnisqualität, Gesamtzeit, Kosten und menschlicher Review-Aufwand werden getrennt erfasst.",
      javaWebUse:
        "Eine Java-/Web-Änderung wird als kontrollierter Versuch einmal seriell und einmal mit getrennten Agenten bearbeitet; Tests, Defekte, Laufzeit, Tokenkosten und Review-Minuten werden verglichen.",
      boundary:
        "Ein einzelner Versuch beweist keinen allgemeinen Vorteil. Aufgabenvarianz, Modellwahl, Tokenbudget und Einarbeitung beeinflussen den Vergleich; veröffentlichte Forschungsergebnisse zu Rechercheaufgaben gelten nicht automatisch für Coding.",
    },
    editorial: editorial("2026-12-27"),
    sources: [
      {
        title: "How we built our multi-agent research system - Anthropic",
        url: "https://www.anthropic.com/engineering/multi-agent-research-system",
        type: "official-publication",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
      {
        title: "Evaluate agent workflows - OpenAI",
        url: "https://developers.openai.com/api/docs/guides/agent-evals",
        type: "official-guide",
        origin: "primary",
        language: "en",
        mediaType: "text",
        checkedAt: "2026-09-27",
      },
    ],
  },
];

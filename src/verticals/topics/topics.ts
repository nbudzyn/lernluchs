import type { TopicCollection } from "./topicContract";
import foundationQuestions from "./foundationQuestions.json";

type FoundationId = keyof typeof foundationQuestions;
const questionsFor = (id: FoundationId) => foundationQuestions[id];

function activeEditorial(reviewDueAt: string, publishedAt = "2026-09-20") {
  return {
    publishedAt,
    reviewedAt: "2026-09-26",
    reviewDueAt,
    status: "active" as const,
  };
}

export const topics: TopicCollection = {
  version: "4",
  paths: [
    {
      name: "Grundlagen für KI-gestützte Softwareentwicklung",
      topicIds: [
        "human-ai-responsibility",
        "problem-understanding-and-change-boundaries",
        "agents-md",
        "ears-requirements",
        "research-plan-tasks",
        "spec-driven-development-openspec",
      ],
    },
    {
      name: "Änderungen gestalten und absichern",
      topicIds: [
        "problem-understanding-and-change-boundaries",
        "ears-requirements",
        "module-boundaries-and-public-interfaces",
        "tdd-for-domain-behavior",
        "archunit-for-java-architecture",
        "playwright-for-web-flows",
        "web-xss-and-safe-dom",
        "dependency-security-assessment",
      ],
    },
    {
      name: "Sicher mit Coding-Agenten arbeiten",
      topicIds: [
        "human-ai-responsibility",
        "problem-understanding-and-change-boundaries",
        "agents-md",
        "coding-agent-context-and-trust-boundaries",
        "protect-secrets-and-sensitive-data-with-ai",
        "research-plan-tasks",
        "tdd-for-domain-behavior",
        "review-and-accept-ai-generated-changes",
      ],
    },
  ],
  items: [
    {
      id: "human-ai-responsibility",
      title: "Mensch und KI: Verantwortung bleibt menschlich",
      questions: questionsFor("human-ai-responsibility"),
      content: {
        language: "de",
        problem:
          "KI-Ausgaben können plausibel wirken, obwohl Kontext, Risiken oder Folgen falsch eingeschätzt sind.",
        coreConcept:
          "Menschen legen Zweck, Grenzen und Prüfkriterien fest, bewerten Ergebnisse und verantworten Entscheidungen über Einsatz und Folgen.",
        javaWebUse:
          "Bei einem Java-Webdienst prüft ein Mensch etwa Eingaben, Berechtigungen, Tests und sicherheitsrelevante Änderungen, statt einen Agentenvorschlag ungeprüft zu übernehmen.",
        boundary:
          "Menschliche Kontrolle ist kein Ritual: Umfang und Form richten sich nach dem Risiko; eine Modellantwort ist keine Freigabe oder Garantie.",
      },
      editorial: activeEditorial("2027-03-20"),
      sources: [
        {
          title: "NIST AI RMF Core",
          url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/",
          type: "official-publication",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "problem-understanding-and-change-boundaries",
      title: "Problem verstehen und Änderungsgrenzen setzen",
      questions: questionsFor("problem-understanding-and-change-boundaries"),
      content: {
        language: "de",
        problem:
          "Wer direkt eine Lösung implementiert, kann Ursache, Nutzen, betroffene Teile und Nebenwirkungen verfehlen.",
        coreConcept:
          "Vor dem Coding werden gewünschtes Ergebnis, vorhandene Fakten, erlaubter Umfang, Nicht-Ziele und prüfbare Akzeptanz geklärt.",
        javaWebUse:
          "Für eine Änderung an einem Spring-Endpunkt werden API-Vertrag, betroffene Schichten, Sicherheitsgrenzen und Regressionstests vor dem Patch festgehalten.",
        boundary:
          "Diese Klärung ist kein schwerer Prozess für jeden Tippfehler; bei kleinen, eindeutig isolierten Korrekturen reicht eine entsprechend kleine Prüfung.",
      },
      editorial: activeEditorial("2027-03-20"),
      sources: [
        {
          title: "How OpenAI uses Codex",
          url: "https://openai.com/business/guides-and-resources/how-openai-uses-codex/",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title: "Best practices for using GitHub Copilot to work on tasks",
          url: "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "agents-md",
      title: "AGENTS.md: dauerhafter Kontext für Coding-Agenten",
      questions: questionsFor("agents-md"),
      content: {
        language: "de",
        problem:
          "Agenten kennen projektspezifische Befehle, Konventionen und Risiken nicht automatisch und erhalten sie sonst bei jeder Aufgabe uneinheitlich.",
        coreConcept:
          "AGENTS.md ist eine gezielt gepflegte Markdown-Anweisung im Repository für Setup, Tests, Architekturgrenzen und weitere lokale Besonderheiten.",
        javaWebUse:
          "In einem Java-/Web-Repository kann die Datei Gradle- oder npm-Prüfbefehle, Modulgrenzen und Regeln für Migrationsdateien nennen.",
        boundary:
          "Sie ersetzt weder README noch fachliche Spezifikationen und darf keine Geheimnisse enthalten; nahe, konkrete Anweisungen sind hilfreicher als ein allgemeines Handbuch.",
      },
      editorial: activeEditorial("2026-12-20"),
      sources: [
        {
          title: "AGENTS.md",
          url: "https://agents.md/",
          type: "reference-site",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title: "Use custom instructions in VS Code",
          url: "https://code.visualstudio.com/docs/agent-customization/custom-instructions",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "ears-requirements",
      title: "EARS: Anforderungen präzise formulieren",
      questions: questionsFor("ears-requirements"),
      content: {
        language: "de",
        problem:
          "Vage Anforderungen lassen unterschiedliche Interpretationen zu und erschweren Abnahme und automatisierte Tests.",
        coreConcept:
          "EARS (Easy Approach to Requirements Syntax) nutzt wenige Satzmuster, etwa „When <Auslöser>, the system shall <Verhalten>“, um Bedingungen und erwartetes Verhalten sichtbar zu machen.",
        javaWebUse:
          "Für eine Web-API kann ein Kriterium lauten: „When a request lacks authorization, the system shall return HTTP 401“; daraus folgt ein konkreter Integrationstest.",
        boundary:
          "Ein Satzmuster entdeckt keine fehlenden Fachregeln und ersetzt weder gemeinsame Begriffsarbeit noch Tests für alle Randfälle.",
      },
      editorial: activeEditorial("2027-03-20"),
      sources: [
        {
          title: "EARS: Easy Approach to Requirements Syntax",
          url: "https://alistairmavin.com/ears/",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "coding-agent-context-and-trust-boundaries",
      title: "Kontext und Vertrauensgrenzen für Coding-Agenten",
      content: {
        language: "de",
        problem:
          "Ein Coding-Agent kann Anweisungen aus fremden Issues, Webseiten oder Dateien mit dem eigentlichen Auftrag verwechseln und dadurch unerwünschte Aktionen auslösen.",
        coreConcept:
          "Externe Inhalte bleiben Daten statt Anweisungen. Ihr Ursprung wird kenntlich gemacht; Werkzeugrechte werden auf die Aufgabe begrenzt und riskante Aktionen von Menschen geprüft.",
        javaWebUse:
          "Bei der Analyse eines Spring-Issues behandelt der Agent darin eingebettete Befehle nicht als Projektvorgabe und prüft Änderungen an Berechtigungen und Endpunkten gegen den vereinbarten Auftrag.",
        boundary:
          "Eine Warnung im Prompt oder eine Quellenmarkierung verhindert Prompt Injection nicht sicher. Rechtebegrenzung und Prüfungen müssen auch außerhalb des Modells greifen.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "OWASP LLM01:2025 Prompt Injection",
          url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "protect-secrets-and-sensitive-data-with-ai",
      title: "Geheimnisse und sensible Daten beim KI-Einsatz schützen",
      content: {
        language: "de",
        problem:
          "Prompts, Dateien und Werkzeugausgaben können Zugangsdaten, personenbezogene Daten oder vertraulichen Code enthalten und so ungewollt weitergeben.",
        coreConcept:
          "Vor dem KI-Einsatz werden benötigte Daten minimiert und sensible Werte entfernt. Zugangsdaten bleiben in geeigneten Secret-Speichern; Agenten und Werkzeuge erhalten nur nötige Rechte.",
        javaWebUse:
          "Für die Fehlersuche an einem Spring-Dienst werden echte Tokens und Kundendaten aus Logs entfernt, bevor ein Agent sie erhält; Konfigurationsgeheimnisse bleiben außerhalb des Repositories.",
        boundary:
          "Eine bloße Anweisung zum Verschweigen schützt Daten nicht zuverlässig. Bei einem offengelegten Token muss der Zugang gesperrt oder der Token erneuert werden.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "OWASP LLM02:2025 Sensitive Information Disclosure",
          url: "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title: "Keeping your API credentials secure - GitHub Docs",
          url: "https://docs.github.com/en/rest/authentication/keeping-your-api-credentials-secure",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "research-plan-tasks",
      title: "Research, Plan und Tasks trennen",
      questions: questionsFor("research-plan-tasks"),
      content: {
        language: "de",
        problem:
          "Wenn Recherche, Entscheidung und Implementierung vermischt werden, bleiben Annahmen unsichtbar und Aufgaben werden zu groß oder widersprüchlich.",
        coreConcept:
          "Research sammelt überprüfte Fakten und offene Fragen; ein Plan dokumentiert Entscheidungen und Prüfnachweise; Tasks zerlegen die Umsetzung in überprüfbare Schritte.",
        javaWebUse:
          "Vor einem Umbau eines React-Frontends werden vorhandene Datenflüsse untersucht, der erlaubte Komponentenumbau geplant und anschließend Tests sowie kleine Implementierungsschritte als Tasks notiert.",
        boundary:
          "Die Reihenfolge ist eine anpassbare Arbeitshilfe, kein Wasserfallgesetz: Neue Erkenntnisse dürfen Research und Plan aktualisieren, bevor weiter implementiert wird.",
      },
      editorial: activeEditorial("2026-12-20"),
      sources: [
        {
          title: "How OpenAI uses Codex",
          url: "https://openai.com/business/guides-and-resources/how-openai-uses-codex/",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title:
            "Research, plan, and iterate on code changes with Copilot cloud agent",
          url: "https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title:
            "Optimizing your AI usage to maximize efficiency and reduce cost",
          url: "https://docs.github.com/en/copilot/tutorials/optimize-ai-usage",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "spec-driven-development-openspec",
      title: "Spec-Driven Development mit OpenSpec",
      questions: questionsFor("spec-driven-development-openspec"),
      content: {
        language: "de",
        problem:
          "Wenn Anforderungen nur im Chat stehen, sind sie schwer prüfbar und Änderungen verlieren ihre nachvollziehbare Absicht.",
        coreConcept:
          "Spec-Driven Development hält die vereinbarte Änderung als versionierte Artefakte fest; OpenSpec organisiert dafür unter anderem Proposal, Spezifikation, Design und Tasks in einem Änderungsordner.",
        javaWebUse:
          "Für eine neue Java-Funktion beschreibt ein Proposal Nutzen und Nicht-Ziele, die Spezifikation prüfbares Verhalten, ein bei Bedarf angelegtes Design technische Entscheidungen und Tasks kleine, getestete Umsetzungsschritte.",
        boundary:
          "OpenSpec ist kein Korrektheitsbeweis und keine Pflicht für jede kleine Änderung; als Werkzeugwahl muss es gegen Alternativen geprüft und seine Telemetrieeinstellung bewusst konfiguriert werden.",
      },
      editorial: activeEditorial("2026-12-20"),
      sources: [
        {
          title: "OpenSpec Quickstart",
          url: "https://openspec.dev/docs/quickstart",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title: "OpenSpec spec-driven schema",
          url: "https://openspec.dev/docs/schemas/spec-driven",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title: "OpenSpec CLI documentation",
          url: "https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "module-boundaries-and-public-interfaces",
      title: "Modulgrenzen und öffentliche Schnittstellen gestalten",
      content: {
        language: "de",
        problem:
          "Ohne klare Modulgrenzen greifen Änderungen auf interne Details anderer Teile zu und ziehen unerwartete Folgen nach sich.",
        coreConcept:
          "Ein Modul verbirgt interne Daten und Implementierung. Andere Module nutzen einen kleinen, ausdrücklich festgelegten öffentlichen Vertrag.",
        javaWebUse:
          "In Java kann ein Modul mit module-info.java nur benötigte Pakete exportieren; ein Web-Frontend kann fachliche Bereiche über benannte Einstiegspunkte verbinden.",
        boundary:
          "Ein öffentliches Paket ist noch kein guter Vertrag: exportierte Typen und Abhängigkeiten müssen bewusst klein und stabil bleiben.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "Modules - Dev.java",
          url: "https://dev.java/learn/organizing/modules/",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "tdd-for-domain-behavior",
      title: "Fachverhalten mit TDD absichern",
      content: {
        language: "de",
        problem:
          "Ohne prüfbare Beispiele kann eine Änderung fachliches Verhalten unbemerkt verschieben.",
        coreConcept:
          "TDD beginnt mit einem fehlschlagenden Test für das nächste Verhalten, ergänzt nur genug Code für einen grünen Test und verbessert danach die Struktur bei weiter grünen Tests.",
        javaWebUse:
          "Für eine Java-Bestellregel wird zuerst ein JUnit-Test für einen Grenzfall geschrieben, dann die Regel implementiert und anschließend bei grüner Suite refaktoriert.",
        boundary:
          "Grüne Tests beweisen nur die geprüften Fälle; fehlende oder falsch erwartete Fachregeln bleiben möglich.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "Canon TDD - Kent Beck",
          url: "https://newsletter.kentbeck.com/p/canon-tdd",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title: "Test Driven Development - Martin Fowler",
          url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html",
          type: "official-guide",
          origin: "secondary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "archunit-for-java-architecture",
      title: "Java-Architekturregeln mit ArchUnit prüfen",
      content: {
        language: "de",
        problem:
          "Vereinbarte Paket- und Schichtgrenzen können bei späteren Codeänderungen unbemerkt verletzt werden.",
        coreConcept:
          "ArchUnit formuliert Architekturregeln als automatisierte Tests über Java-Klassen und ihre Abhängigkeiten.",
        javaWebUse:
          "Ein ArchUnit-Test kann prüfen, dass Web-Controller nicht direkt auf Persistenzklassen zugreifen oder dass definierte Pakete keine Zyklen bilden.",
        boundary:
          "ArchUnit erkennt die formulierten Strukturverstöße, aber weder fachlich falsches Verhalten noch Regeln, die nie als Test beschrieben wurden.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "ArchUnit User Guide",
          url: "https://www.archunit.org/userguide/html/000_Index.html",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "playwright-for-web-flows",
      title: "Webabläufe mit Playwright prüfen",
      content: {
        language: "de",
        problem:
          "Komponenten- und Unit-Tests übersehen Fehler im Zusammenspiel von Oberfläche, Navigation und Browser.",
        coreConcept:
          "Playwright führt Webabläufe im Browser aus und prüft sichtbares Verhalten mit Locators und wiederholenden Assertions.",
        javaWebUse:
          "Ein Test öffnet ein Thema im Browser und prüft, dass Überschrift, Inhalt und Quellen sichtbar werden.",
        boundary:
          "Ein Browser-Test deckt nur den geprüften Ablauf und die gewählten Browser ab; fachliche Regeln brauchen weiterhin gezielte Tests.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "Playwright Test Assertions",
          url: "https://playwright.dev/docs/test-assertions",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "web-xss-and-safe-dom",
      title:
        "Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen",
      content: {
        language: "de",
        problem:
          "Ungeprüfte Daten können beim Einfügen in HTML oder unsichere DOM-Schnittstellen als ausführbarer Code interpretiert werden.",
        coreConcept:
          "XSS-Schutz verlangt eine zum Ausgabekontext passende Behandlung der Daten; für reinen Text sind sichere DOM-Schnittstellen wie textContent geeignet.",
        javaWebUse:
          "Ein Web-Frontend zeigt einen eingegebenen Hinweis als Text an, statt ihn mit innerHTML in die Seite einzusetzen.",
        boundary:
          "textContent schützt diesen Textkontext, aber nicht automatisch URLs, HTML-Attribute oder andere Ausgabekontexte.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "OWASP Cross Site Scripting Prevention Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "dependency-security-assessment",
      title: "Abhängigkeiten und Sicherheitslücken risikobasiert bewerten",
      content: {
        language: "de",
        problem:
          "Eine neue oder aktualisierte Bibliothek kann bekannte Schwachstellen, Lizenzkonflikte oder unnötige Angriffsfläche einführen.",
        coreConcept:
          "Abhängigkeiten werden nach Nutzen, Einsatzbereich, bekannten Schwachstellen, Lizenz und Wartung bewertet; Funde werden nach Auswirkung und Erreichbarkeit priorisiert.",
        javaWebUse:
          "Vor einem npm- oder Maven-Update prüft ein Team den Dependency-Diff, bekannte Advisories und die Nutzung der betroffenen Bibliothek im eigenen Webdienst.",
        boundary:
          "Ein unauffälliger Scan belegt keine Sicherheit: Datenbanken können Lücken haben und ein Fund muss im konkreten Einsatz eingeordnet werden.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "Concise Guide for Evaluating Open Source Software - OpenSSF",
          url: "https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title: "Dependency review - GitHub Docs",
          url: "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "review-and-accept-ai-generated-changes",
      title: "KI-generierte Änderungen prüfen und übernehmen",
      content: {
        language: "de",
        problem:
          "Ein plausibler KI-Patch kann Anforderungen verfehlen, Sicherheitsregeln verletzen oder unnötige Abhängigkeiten einführen.",
        coreConcept:
          "Menschen prüfen den Diff gegen Auftrag und Architektur, führen passende Tests und Sicherheitsprüfungen aus und entscheiden erst anhand der Ergebnisse über die Übernahme.",
        javaWebUse:
          "Bei einem geänderten Spring-Endpunkt werden Berechtigungsprüfung, Fehlerfälle und neue Bibliotheken im Diff kontrolliert und mit gezielten Java- und Browser-Tests geprüft.",
        boundary:
          "Grüne Tests und Scanner decken nur ihre geprüften Fälle ab. Sie ersetzen weder die fachliche Bewertung noch die menschliche Freigabe.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "Review AI-generated code - GitHub Docs",
          url: "https://docs.github.com/en/copilot/tutorials/review-ai-generated-code",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
    {
      id: "focused-git-commits",
      title: "Git-Commits klein und nachvollziehbar halten",
      content: {
        language: "de",
        problem:
          "Wenn unabhängige Änderungen in einem Commit landen, ist schwerer zu erkennen und zu prüfen, was aus welchem Grund geändert wurde.",
        coreConcept:
          "Ein Commit bündelt eine logisch zusammengehörige Änderung mit einer aussagekräftigen Nachricht. Über die Staging Area lassen sich aus dem Arbeitsstand gezielt Dateien oder Teile davon für diesen Commit auswählen.",
        javaWebUse:
          "Bei Änderungen an einem Spring-Endpunkt werden eine fachliche API-Anpassung und davon unabhängige Formatkorrekturen getrennt festgehalten. Vor jedem Commit wird geprüft, welche Änderungen tatsächlich gestagt sind.",
        boundary:
          "Ein kleiner Commit ist nicht automatisch korrekt oder lauffähig. Zusammengehörige Änderungen dürfen mehrere Dateien umfassen; eine starre Dateizahl ist kein Qualitätsmaßstab.",
      },
      editorial: {
        publishedAt: "2026-09-27",
        reviewedAt: "2026-09-27",
        reviewDueAt: "2027-03-27",
        status: "active",
      },
      sources: [
        {
          title: "Pro Git: Interactive Staging",
          url: "https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-27",
        },
        {
          title: "Git: git-commit Documentation",
          url: "https://git-scm.com/docs/git-commit",
          type: "official-guide",
          origin: "primary",
          language: "en",
          checkedAt: "2026-09-27",
        },
      ],
    },
  ],
};

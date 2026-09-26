import type { Catalog } from "./catalogContract";

function activeEditorial(reviewDueAt: string, publishedAt = "2026-09-20") {
  return {
    publishedAt,
    reviewedAt: publishedAt,
    reviewDueAt,
    contentVersion: "1",
    status: "active" as const,
  };
}

export const catalog: Catalog = {
  version: "2",
  items: [
    {
      id: "human-ai-responsibility",
      title: "Mensch und KI: Verantwortung bleibt menschlich",
      learningCard: {
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
          title: "NIST AI Risk Management Framework 1.0",
          url: "https://doi.org/10.6028/NIST.AI.100-1",
          type: "official-publication",
          language: "en",
          checkedAt: "2026-09-20",
        },
      ],
    },
    {
      id: "problem-understanding-and-change-boundaries",
      title: "Problem verstehen und Änderungsgrenzen setzen",
      learningCard: {
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
          language: "en",
          checkedAt: "2026-09-20",
        },
      ],
    },
    {
      id: "agents-md",
      title: "AGENTS.md: dauerhafter Kontext für Coding-Agenten",
      learningCard: {
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
          language: "en",
          checkedAt: "2026-09-20",
        },
      ],
    },
    {
      id: "ears-requirements",
      title: "EARS: Anforderungen präzise formulieren",
      learningCard: {
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
          title: "EARS (Easy Approach to Requirements Syntax)",
          url: "https://ieeexplore.ieee.org/document/5328600",
          type: "conference-paper",
          language: "en",
          checkedAt: "2026-09-20",
        },
      ],
    },
    {
      id: "module-boundaries-and-public-interfaces",
      title: "Modulgrenzen und öffentliche Schnittstellen gestalten",
      learningCard: {
        language: "de",
        problem: "Ohne klare Modulgrenzen greifen Änderungen auf interne Details anderer Teile zu und ziehen unerwartete Folgen nach sich.",
        coreConcept: "Ein Modul verbirgt interne Daten und Implementierung. Andere Module nutzen einen kleinen, ausdrücklich festgelegten öffentlichen Vertrag.",
        javaWebUse: "In Java kann ein Modul mit module-info.java nur benötigte Pakete exportieren; ein Web-Frontend kann fachliche Bereiche über benannte Einstiegspunkte verbinden.",
        boundary: "Ein öffentliches Paket ist noch kein guter Vertrag: exportierte Typen und Abhängigkeiten müssen bewusst klein und stabil bleiben.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [{
        title: "Modules - Dev.java",
        url: "https://dev.java/learn/organizing/modules/",
        type: "official-guide",
        language: "en",
        checkedAt: "2026-09-26",
      }],
    },
    {
      id: "research-plan-tasks",
      title: "Research, Plan und Tasks trennen",
      learningCard: {
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
          language: "en",
          checkedAt: "2026-09-20",
        },
      ],
    },
    {
      id: "spec-driven-development-openspec",
      title: "Spec-Driven Development mit OpenSpec",
      learningCard: {
        language: "de",
        problem:
          "Wenn Anforderungen nur im Chat stehen, sind sie schwer prüfbar und Änderungen verlieren ihre nachvollziehbare Absicht.",
        coreConcept:
          "Spec-Driven Development hält die vereinbarte Änderung als versionierte Artefakte fest; OpenSpec organisiert dafür unter anderem Proposal, Spezifikation, Design und Tasks in einem Änderungsordner.",
        javaWebUse:
          "Für eine neue Java-Funktion beschreibt ein Proposal Nutzen und Nicht-Ziele, das Design den Vertrag und die Tasks führen kleine, getestete Umsetzungsschritte.",
        boundary:
          "OpenSpec ist kein Korrektheitsbeweis und keine Pflicht für jede kleine Änderung; als Werkzeugwahl muss es gegen Alternativen geprüft und seine Telemetrieeinstellung bewusst konfiguriert werden.",
      },
      editorial: activeEditorial("2026-12-20"),
      sources: [
        {
          title: "Fission-AI/OpenSpec",
          url: "https://github.com/Fission-AI/OpenSpec",
          type: "repository",
          language: "en",
          checkedAt: "2026-09-20",
        },
      ],
    },
    {
      id: "tdd-for-domain-behavior",
      title: "Fachverhalten mit TDD absichern",
      learningCard: {
        language: "de",
        problem: "Ohne prüfbare Beispiele kann eine Änderung fachliches Verhalten unbemerkt verschieben.",
        coreConcept: "TDD beginnt mit einem fehlschlagenden Test für das nächste Verhalten, ergänzt nur genug Code für einen grünen Test und verbessert danach die Struktur bei weiter grünen Tests.",
        javaWebUse: "Für eine Java-Bestellregel wird zuerst ein JUnit-Test für einen Grenzfall geschrieben, dann die Regel implementiert und anschließend bei grüner Suite refaktoriert.",
        boundary: "Grüne Tests beweisen nur die geprüften Fälle; fehlende oder falsch erwartete Fachregeln bleiben möglich.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [{
        title: "Test Driven Development - Martin Fowler",
        url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html",
        type: "official-guide",
        language: "en",
        checkedAt: "2026-09-26",
      }],
    },
    {
      id: "archunit-for-java-architecture",
      title: "Java-Architekturregeln mit ArchUnit prüfen",
      learningCard: {
        language: "de",
        problem: "Vereinbarte Paket- und Schichtgrenzen können bei späteren Codeänderungen unbemerkt verletzt werden.",
        coreConcept: "ArchUnit formuliert Architekturregeln als automatisierte Tests über Java-Klassen und ihre Abhängigkeiten.",
        javaWebUse: "Ein ArchUnit-Test kann prüfen, dass Web-Controller nicht direkt auf Persistenzklassen zugreifen oder dass definierte Pakete keine Zyklen bilden.",
        boundary: "ArchUnit erkennt die formulierten Strukturverstöße, aber weder fachlich falsches Verhalten noch Regeln, die nie als Test beschrieben wurden.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [{
        title: "ArchUnit User Guide",
        url: "https://www.archunit.org/userguide/html/000_Index.html",
        type: "official-guide",
        language: "en",
        checkedAt: "2026-09-26",
      }],
    },
    {
      id: "playwright-for-web-flows",
      title: "Webabläufe mit Playwright prüfen",
      learningCard: {
        language: "de",
        problem: "Komponenten- und Unit-Tests übersehen Fehler im Zusammenspiel von Oberfläche, Navigation und Browser.",
        coreConcept: "Playwright führt Webabläufe im Browser aus und prüft sichtbares Verhalten mit Locators und wiederholenden Assertions.",
        javaWebUse: "Ein Test öffnet eine Lernkarte im Browser und prüft, dass Überschrift, Inhalt und Quellen sichtbar werden.",
        boundary: "Ein Browser-Test deckt nur den geprüften Ablauf und die gewählten Browser ab; fachliche Regeln brauchen weiterhin gezielte Tests.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [{
        title: "Playwright Test Assertions",
        url: "https://playwright.dev/docs/test-assertions",
        type: "official-guide",
        language: "en",
        checkedAt: "2026-09-26",
      }],
    },
    {
      id: "web-xss-and-safe-dom",
      title: "Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen",
      learningCard: {
        language: "de",
        problem: "Ungeprüfte Daten können beim Einfügen in HTML oder unsichere DOM-Schnittstellen als ausführbarer Code interpretiert werden.",
        coreConcept: "XSS-Schutz verlangt eine zum Ausgabekontext passende Behandlung der Daten; für reinen Text sind sichere DOM-Schnittstellen wie textContent geeignet.",
        javaWebUse: "Ein Web-Frontend zeigt einen eingegebenen Hinweis als Text an, statt ihn mit innerHTML in die Seite einzusetzen.",
        boundary: "textContent schützt diesen Textkontext, aber nicht automatisch URLs, HTML-Attribute oder andere Ausgabekontexte.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [{
        title: "OWASP Cross Site Scripting Prevention Cheat Sheet",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
        type: "official-guide",
        language: "en",
        checkedAt: "2026-09-26",
      }],
    },
    {
      id: "dependency-security-assessment",
      title: "Abhängigkeiten und Sicherheitslücken risikobasiert bewerten",
      learningCard: {
        language: "de",
        problem: "Eine neue oder aktualisierte Bibliothek kann bekannte Schwachstellen, Lizenzkonflikte oder unnötige Angriffsfläche einführen.",
        coreConcept: "Abhängigkeiten werden nach Nutzen, Einsatzbereich, bekannten Schwachstellen, Lizenz und Wartung bewertet; Funde werden nach Auswirkung und Erreichbarkeit priorisiert.",
        javaWebUse: "Vor einem npm- oder Maven-Update prüft ein Team den Dependency-Diff, bekannte Advisories und die Nutzung der betroffenen Bibliothek im eigenen Webdienst.",
        boundary: "Ein unauffälliger Scan belegt keine Sicherheit: Datenbanken können Lücken haben und ein Fund muss im konkreten Einsatz eingeordnet werden.",
      },
      editorial: activeEditorial("2027-03-26", "2026-09-26"),
      sources: [
        {
          title: "Concise Guide for Evaluating Open Source Software - OpenSSF",
          url: "https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html",
          type: "official-guide",
          language: "en",
          checkedAt: "2026-09-26",
        },
        {
          title: "Dependency review - GitHub Docs",
          url: "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review",
          type: "official-guide",
          language: "en",
          checkedAt: "2026-09-26",
        },
      ],
    },
  ],
};

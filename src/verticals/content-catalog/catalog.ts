import type { Catalog } from "../../shared/catalog/catalogContract";

function activeEditorial(reviewDueAt: string) {
  return {
    publishedAt: "2026-09-20",
    reviewedAt: "2026-09-20",
    reviewDueAt,
    contentVersion: "1",
    status: "active" as const,
  };
}

export const catalog: Catalog = {
  version: "1",
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
  ],
};

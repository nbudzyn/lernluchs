# Dritten Lernpfad einweben

## Ziel und Umfang

Der Inhaltskatalog wird um den Lernpfad **Sicher mit Coding-Agenten arbeiten** erweitert:

1. Mensch und KI: Verantwortung bleibt menschlich - vorhanden
2. Problem verstehen und Änderungsgrenzen setzen - vorhanden
3. AGENTS.md: dauerhafter Kontext für Coding-Agenten - vorhanden
4. Kontext und Vertrauensgrenzen für Coding-Agenten - neu
5. Geheimnisse und sensible Daten beim KI-Einsatz schützen - neu
6. Research, Plan und Tasks trennen - vorhanden
7. Fachverhalten mit TDD absichern - vorhanden
8. KI-generierte Änderungen prüfen und übernehmen - neu

Der Lernpfad als solcher wird noch nicht als Objekt in der Software repräsentiert und erscheint nicht als eigener Abschnitt in der
Oberfläche. Fragenpools gehören nicht zu dieser Story.

Die drei neuen Lerninhalte werden als Lernkarten mit Quellen und Aktualitätsmetadaten ausgearbeitet, fachlich geprüft und strukturell an die
vorhandenen Karten angeglichen. Die [KI-Tool-Landkarte](../../content/ki-tool-landkarte.md) dient als Rechercheausgangspunkt; maßgeblich
sind aktuelle, möglichst primäre Quellen und die [redaktionelle Richtlinie](../../content/editorial-policy.md).

Alle 15 Lerninhalte erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste. Die relative Reihenfolge der zwölf vorhandenen
Inhalte und die oben genannte Reihenfolge des dritten Lernpfads bleiben erhalten. Die drei neuen Karten werden nach Grundlagen, mittleren
und fortgeschrittenen Themen dazwischen beziehungsweise danach eingefügt.

Vertikale: Inhaltskatalog

## Entscheidungen, Risiken und Abnahme

- **Neue dauerhafte IDs:** `coding-agent-context-and-trust-boundaries`, `protect-secrets-and-sensitive-data-with-ai`,
  `review-and-accept-ai-generated-changes`.
- **Verbindliche Reihenfolge aller IDs:** `human-ai-responsibility`, `problem-understanding-and-change-boundaries`, `agents-md`,
  `coding-agent-context-and-trust-boundaries`, `protect-secrets-and-sensitive-data-with-ai`, `ears-requirements`,
  `module-boundaries-and-public-interfaces`, `research-plan-tasks`, `spec-driven-development-openspec`, `tdd-for-domain-behavior`,
  `archunit-for-java-architecture`, `playwright-for-web-flows`, `web-xss-and-safe-dom`, `dependency-security-assessment`,
  `review-and-accept-ai-generated-changes`.
- **Vollständigkeit und Reihenfolge:** Ein Katalogtest prüft 15 eindeutige IDs, die verbindliche Gesamtreihenfolge sowie den Erhalt der
  zwölf vorhandenen Karten. Die Katalogvalidierung bleibt grün.
- **Fachliche Fehler und veraltete Aussagen:** Jede neue Karte beantwortet Problem, Kernkonzept, Einsatz in Java-/Web-Entwicklung und Grenze
  oder Gegenbeispiel. Quellen, Prüfdatum, Fälligkeit, Version und Status entsprechen der redaktionellen Richtlinie. Quelle, Prüftag,
  Unsicherheiten und bewusste Auslassungen werden bei der Umsetzung in dieser Spec dokumentiert. Die Tool-Landkarte ist keine Fachquelle.
- **Sicherheitsbezogene Aussagen:** Die Karten unterscheiden fremde Daten von vertrauenswürdigen Anweisungen, behandeln den Schutz von
  Geheimnissen und sensiblen Daten sowie die menschliche Prüfung vor Übernahme von Änderungen. Konkrete Maßnahmen und ihre Grenzen werden
  gegen aktuelle Primärquellen geprüft; es werden keine pauschalen Sicherheitsgarantien behauptet.
- **Sichtbare Abnahme:** Im lokalen Browser erscheinen die 15 Themen in einer gemeinsamen Liste. Alle drei neuen Karten lassen sich
  auswählen und zeigen Inhalt, Metadaten und Quellen. Es gibt weder einen eigenen Lernpfad-Abschnitt noch Fragenpools.
- **Abhängigkeiten:** Für diese Katalogerweiterung sind keine neuen Abhängigkeiten vorgesehen. Falls doch eine nötig wird, muss ihre
  Freigabe mit Nutzen, Wartung, Lizenz, Datenschutz und Sicherheitslage vor Einbau hier begründet werden.
- **Dokumentation nach Umsetzung:** Den erweiterten Katalog und die sichtbaren Inhalte knapp im Produktstand ergänzen.

## Umsetzung und Nachweise

Die drei Karten und ihre Anzeige bilden eine Katalogänderung: Die bestehende Oberfläche zeigt neue Katalogeinträge ohne eigene Anzeigelogik.

| Schritt | Ergebnis |
| --- | --- |
| RED | `npm run validate:content` schlug mit einem fachlich passenden Fehler fehl: Der neue Test erwartete 15 IDs in der festgelegten Reihenfolge, erhielt aber nur die zwölf alten IDs. Vier andere Katalogtests blieben grün. |
| GREEN | Drei Karten mit Quellen und Metadaten ergänzt und Katalogversion auf `3` erhöht. Der alte Test prüft weiterhin die sechs Karten des zweiten Lernpfads, ohne eine unveränderliche Gesamtzahl anzunehmen. `npm run validate:content` grün: 5 Tests. |
| REFACTOR und Anzeige | Der bestehende Listen-Komponententest prüft 15 statt zwölf Themen; drei neue Auswahlfälle prüfen Inhalt, Metadaten und Quellen. Keine Änderung an der generischen Kataloganzeige nötig. `npm run check` grün: Typprüfung, 12 Unit- und Komponententests, 5 Katalogtests, Architekturprüfung und Produktionsbuild. `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit. |
| Browserabnahme | Codex In-app-Browser unter `http://127.0.0.1:5174/`: eine ungruppierte Liste mit 15 Themen geprüft; alle drei neuen Karten nacheinander ausgewählt und Inhalt, Metadaten und Quellen sichtbar bestätigt. Kein eigener Lernpfad-Abschnitt und keine Fragenpools. |

Fachliche Prüfung am 26.09.2026 anhand von [OWASP LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/), [OWASP LLM02:2025 Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/), [GitHub Docs zu Zugangsdaten](https://docs.github.com/en/rest/authentication/keeping-your-api-credentials-secure) und [GitHub Docs zum Review KI-generierten Codes](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code). Die Aussagen zu fremden Anweisungen, begrenzten Werkzeugrechten, Datenminimierung, Token-Erneuerung und menschlicher Prüfung sind dort gedeckt. Unsicherheit: Datenflüsse und Schutzfunktionen unterscheiden sich je nach Agent und Anbieter; die Karten versprechen deshalb keine allgemeingültige Sicherheit. Bewusst ausgelassen sind produktspezifische Einstellungen, rechtliche Vorgaben und eine vollständige Sicherheitscheckliste.

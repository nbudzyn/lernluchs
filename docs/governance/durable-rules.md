# Dauerhafte Vorgaben

Hier stehen die maßgeblichen Produkt-, Datenschutz-, Architektur- und
Abhängigkeitsvorgaben. Änderungen erfordern eine ausdrücklich dokumentierte
Architekturentscheidung. Handlungsschranken: [AGENTS.md](../../AGENTS.md).
Pflichtlektüren: [Index](../INDEX.md).

## Produkt und Datenschutz

- Die öffentliche Anwendung wird als statische App auf GitHub Pages bereitgestellt.
- Es gibt keinen Login und keine serverseitige Benutzerverwaltung.
- Persönlicher Zustand bleibt bis zu einer eigens spezifizierten,
  nutzergesteuerten Synchronisation auf dem jeweiligen Gerät. Die App schreibt
  persönliche Daten nicht nach Git.
- Es gibt keine Analytics, Tracker, Cookies zu Analyse- oder Marketingzwecken,
  Telemetrie, externen Fonts oder extern nachgeladenen Laufzeit-Skripte.
- Externe Quellen und Videos werden nur nach einer bewussten Nutzeraktion
  geöffnet.
- Öffentliche Inhalte und persönlicher Zustand bleiben getrennt. Themen sind
  nur lesbar und werden nicht durch Benutzereingaben verändert.
- Die App enthält keinen KI-Schlüssel und ruft kein KI-Modell auf.

## Architektur und Änderungen

- Fachlogik bleibt in klaren Vertikalen. Die Vertikalgrenze und die frühzeitige
  Rückfrage beim Entwickler regelt [AGENTS.md](../../AGENTS.md#nicht-verhandelbar).
- Eine Vertikale verläuft von oben nach unten: Sie verantwortet ihre eigenen
  Daten und deren Anzeige. `src/app` komponiert Vertikalen nur und enthält
  keine fachliche Anzeige- oder Datenlogik.
- Entwirf schmale Schnittstellen zwischen Vertikalen ausdrücklich. Vertikalen
  verbergen interne Daten, Hilfen und Implementierungsdetails (Data Hiding).
  Andere Vertikalen dürfen nur den kleinen öffentlichen Vertrag nutzen.
- Architekturelle Ausnahmen benötigen eine eigene Spec, eine Begründung und
  zusätzliche automatisierte Architekturtests.
- Öffentliche und stabile Verträge werden klein gehalten. Gemeinsamer Code
  enthält nur Datentypen, IDs und Validierung, keine fachliche Abkürzung.
- Halte Änderungen klein, nachvollziehbar und rückgängig machbar.
- Ungültige Zustände sollen nicht ausdrückbar sein.

## TDD und Spec-Driven Development

Dieser Einstieg erhält bestehende Spec-Verweise. Maßgeblich sind
[TDD und Spec-Nachweise](../changes/README.md#tdd-und-spec-nachweise) sowie
[Prüfumfang und Nachweise](../quality/verification-strategy.md#prüfumfang-und-nachweise)
und [Testorganisation](../quality/verification-strategy.md#testorganisation).

## Abhängigkeiten und Sicherheit

- Abhängigkeiten sind minimal, etablierte und aktiv gepflegte Open-Source-
  Projekte. Ungewöhnliche Bibliotheken werden vermieden.
- Begründe jede neue Bibliothek in der Spec: Nutzen, Wartung, Lizenz,
  Datenschutz und Sicherheitslage.
- Sicherheits- und reguläre Abhängigkeitsupdates kommen in separate,
  getestete Commits. Kein automatischer Merge.
- Die Lizenz des eigenen Codes ist Apache-2.0.

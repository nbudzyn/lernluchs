# Dauerhafte Vorgaben

Diese Regeln gelten für jede Änderung, bis sie durch eine ausdrücklich
dokumentierte Architekturentscheidung ersetzt werden.

## Produkt und Datenschutz

- Die Anwendung ist eine öffentliche, statische PWA auf GitHub Pages.
- Es gibt keinen Login, keine serverseitige Benutzerverwaltung und keine
  Synchronisation in Version 0.
- Persönlicher Lernfortschritt, Notizen und lokale Fehlermeldungen werden nur
  im Browser-Speicher des jeweiligen Geräts geführt. Die App schreibt nicht in
  Git.
- Es gibt keine Analytics, Tracker, Cookies zu Analyse- oder Marketingzwecken,
  Telemetrie, externen Fonts oder extern nachgeladenen Laufzeit-Skripte.
- Externe Quellen und YouTube werden nur nach einer bewussten Nutzeraktion
  geöffnet; ein eingebettetes Video ist kein Kernbestandteil der App.

## Architektur und Änderungen

- Fachlogik bleibt in klaren Vertikalen. Eine fachliche Änderung berührt
  höchstens zwei Vertikalen pro Commit.
- Architekturelle Ausnahmen benötigen eine eigene Spec, eine Begründung und
  zusätzliche automatisierte Architekturtests.
- Öffentliche und stabile Verträge werden klein gehalten. Gemeinsamer Code
  enthält nur Datentypen, IDs und Validierung, keine fachliche Abkürzung.
- Jede Änderung ist klein, nachvollziehbar und rückgängig machbar.

## TDD und Spec-Driven Development

- Vor jeder Implementierung eines Teil-Features wird ein Test geschrieben und
  ausgeführt, der aus fachlich korrektem Grund fehlschlägt (**RED**).
- Erst danach wird die kleinste Implementierung ergänzt, bis der Test besteht
  (**GREEN**).
- Danach wird bei weiterhin grüner Testsuite refaktoriert (**REFACTOR**).
- Erst nach erneut vollständig grüner Testsuite darf committet werden. Der
  RED-Nachweis und die ausgeführten Prüfungen stehen in der Änderungs-Spec.
- Spätestens unmittelbar vor jedem Commit wird die geänderte Anwendung lokal
  im Browser ausprobiert. Der Nachweis (Browser, geprüfter Ablauf und Ergebnis)
  steht in der Änderungs-Spec.
- Jede fachliche Änderung startet mit einer eigenen Änderungsdokumentation.
- Jede Story wird so geschnitten, dass sie einen für Benutzer im Browser
  nachvollziehbaren Geschäftswert hinzufügt. Reine interne Verträge,
  Datenbestände oder Grundlagen gehören nur als Teil einer solchen vertikalen
  Scheibe in eine Story, nicht als alleiniger Liefergegenstand.

## Abhängigkeiten und Sicherheit

- Abhängigkeiten sind minimal, etablierte und aktiv gepflegte Open-Source-
  Projekte. Ungewöhnliche Bibliotheken werden vermieden.
- Jede neue Bibliothek benötigt in der Spec eine Begründung zu Nutzen,
  Wartung, Lizenz, Datenschutz und Sicherheitslage.
- Sicherheits- und reguläre Abhängigkeitsupdates erfolgen in separaten,
  getesteten Commits. Sie werden nicht automatisch gemergt.
- Die Lizenz des eigenen Codes ist Apache-2.0.

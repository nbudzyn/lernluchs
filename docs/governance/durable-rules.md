# Dauerhafte Vorgaben

Diese Regeln gelten für jede Änderung, bis sie durch eine ausdrücklich
dokumentierte Architekturentscheidung ersetzt werden.

## Produkt und Datenschutz

- Die Anwendung ist öffentlich und wird als statische App auf GitHub Pages
  bereitgestellt.
- Es gibt keinen Login und keine serverseitige Benutzerverwaltung.
- Persönlicher Zustand bleibt bis zu einer eigens spezifizierten,
  nutzergesteuerten Synchronisation auf dem jeweiligen Gerät. Die App schreibt
  persönliche Daten nicht nach Git.
- Es gibt keine Analytics, Tracker, Cookies zu Analyse- oder Marketingzwecken,
  Telemetrie, externen Fonts oder extern nachgeladenen Laufzeit-Skripte.
- Externe Quellen und Videos werden nur nach einer bewussten Nutzeraktion
  geöffnet.

## Architektur und Änderungen

- Fachlogik bleibt in klaren Vertikalen. Eine fachliche Änderung berührt
  höchstens zwei Vertikalen pro Commit.
- Eine Vertikale verläuft von oben nach unten: Sie verantwortet ihre eigenen
  Daten und deren Anzeige. `src/app` komponiert Vertikalen nur und enthält
  keine fachliche Anzeige- oder Datenlogik.
- Schnittstellen zwischen Vertikalen bleiben schmal und ausdrücklich
  entworfen. Vertikalen verbergen ihre internen Daten, Hilfen und
  Implementierungsdetails (Data Hiding); andere Vertikalen dürfen sich nur
  auf ihren kleinen öffentlichen Vertrag stützen.
- Architekturelle Ausnahmen benötigen eine eigene Spec, eine Begründung und
  zusätzliche automatisierte Architekturtests.
- Öffentliche und stabile Verträge werden klein gehalten. Gemeinsamer Code
  enthält nur Datentypen, IDs und Validierung, keine fachliche Abkürzung.
- Jede Änderung ist klein, nachvollziehbar und rückgängig machbar.

## Aufgabenbezogen lesen und prüfen

- Zuerst `docs/INDEX.md` lesen, danach die für die Aufgabe relevante aktive
  Spec und die dort verlinkten, für die Aufgabe benötigten dauerhaften
  Dokumente. Fachlich unpassende Specs nicht vollständig lesen.
- Bereits gelesene, unveränderte Dokumente innerhalb einer Session
  wiederverwenden. Erneut lesen nur bei Änderungen oder konkreter Unsicherheit.
- Bei Fragen, Screenshot-Prüfungen und reiner Diagnose keine Dateien ändern.
- Erfolgreiche Tool-Ausgaben auf Ergebnis, Anzahl und Laufzeit begrenzen.

## TDD und Spec-Driven Development

- Vor jeder Implementierung eines Teil-Features wird ein Test geschrieben und
  ausgeführt, der aus fachlich korrektem Grund fehlschlägt (**RED**).
- Erst danach wird die kleinste Implementierung ergänzt, bis der Test besteht
  (**GREEN**).
- Danach wird bei weiterhin grüner Testsuite refaktoriert (**REFACTOR**).
- Während der Umsetzung die betroffenen Prüfungen ausführen. Die vollständige
  Pflichtsuite nach der letzten produktrelevanten Änderung und vor einem
  Commit ausführen. Produktrelevant sind Änderungen an Code, Tests,
  Laufzeitinhalten, App-Konfiguration, Abhängigkeiten oder Prüfskripten.
- Bestandene Prüfungen ohne relevante Änderung nicht wiederholen. Ein grüner
  Nachweis gilt auch für den Commit, solange keine für die Prüfung relevante
  Änderung hinzukommt und der geprüfte Stand eindeutig ist. Der RED-Nachweis
  und die ausgeführten Prüfungen stehen in der Änderungs-Spec.
- Reine Dokumentationsänderungen passend zu ihrem Inhalt prüfen; sie lösen
  keine App-E2E-Tests oder manuelle Prüfung der Anwendung im Browser aus.
- Bei produktrelevanten Änderungen spätestens unmittelbar vor dem Commit die
  geänderte Anwendung lokal im Browser ausprobieren. Der Nachweis (Browser,
  geprüfter Ablauf und Ergebnis) steht in der Änderungs-Spec.
- Ein Commit erfolgt erst, nachdem der Nutzer die Änderung selbst manuell
  getestet und das Ergebnis ausdrücklich bestätigt hat.
- Test- und Freigaberückmeldungen des Entwicklers werden in Git nur als
  erfolgt vermerkt. Wortlaut und weitere Einzelheiten der Rückmeldungen werden
  nicht dokumentiert.
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

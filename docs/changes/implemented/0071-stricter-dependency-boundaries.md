## Schärfere Abhängigkeitsregeln
Schärfere Abhängigkeitsregeln:
- app darf die Vertikalen und shared referenzieren. (app steckt die Anwendung zusammen.)
- Die Vertikalen dürfen sich nicht untereinander referenzieren
- Die Vertikalen dürfen shard referenzieren
- shared darf nichts vom weiteren Code referenzieren

Vorher eine Aufstellung machen (aktueller Stand).
Auch prüfen, ob die Regeln genauso für den Test-Code sinnvoll sind.

In Java würde man vieles zu schmalen Interfaces umbauen, die in app liegen (damit Vertikale X die Vertikale Y z.B. starten oder einbinden kann). Wie macht man es idiomatisch in TypeScript?

In Java würden wir hier Reflection verbieten (Class.forName("Questions")), höchstens suchen über z.B. Interface-Implementierungen (alle Implementierungen von X finden, dann einbinden). Was wären analoge - aber übliche! - Regeln für TypeScript?

Da wir eine einheitliche GUI haben wollen vermute ich: Besser nur ein zentrales CSS?

Nach wir vor soll der fachliche Code vorrangig in "seiner" Vertikale stehen - nicht einfach den fachlichen Code nach app schieben und "Problem gelöst"!!

Die Regeln (wie bisher auch schon?) durch ein statisches Tool prüfen lassen (analog zu ArchUnit in Java).

### Geklärter Umfang

Ziel: weniger Abhängigkeiten für schnelle, lokal begrenzte Weiterentwicklung.
Produktcode und Tests werden gemeinsam bereinigt. Betroffene Vertikalen:
Themen und Lernchecks; App, Shared und Architekturwerkzeuge zusätzlich.
Hilfe und Impressum bleiben fachlich unverändert.

- App komponiert öffentliche Vertikal-Einstiegspunkte und Shared.
- Vertikalen importieren nur eigene Module, Shared und externe Bibliotheken;
  keine anderen Vertikalen und keine App, auch nicht über Typimporte.
- Shared importiert innerhalb des Produktcodes nur Shared; keine App/Vertikalen.
- Schmale Props, Callbacks und JSX-Eingaben ersetzen die direkten Hilfe-/Impressumimporte.
  Der benötigte Vertrag gehört zur konsumierenden Vertikale; App verbindet ihn.
  Fachlogik bleibt in ihrer Vertikale, kein Verschieben nach App als Ausweg.
- Vertikaltests dürfen eigene Interna und gemeinsame Testhilfen nutzen.
  Fachliche Prüfungen über mehrere Vertikalen gehören nach tests/app bzw. e2e/app
  und verwenden öffentliche Verträge. tests/architecture prüft Architekturregeln,
  keine fachlichen Datenregressionen. Shared-Testhilfen hängen nicht von Vertikalen ab.
- Statische Imports und dynamische Imports mit festem Pfad sind erlaubt.
  Berechnete Modulpfade, eval/new Function und automatische Modulregistrierung
  sind im Produktcode verboten. Dateimuster (Globs) dürfen Architekturtests
  zur Codeprüfung verwenden, nicht Produktcode zur versteckten Komposition.
- Einheitliche visuelle Sprache mit zentralen Gestaltungsvorgaben und lokalen
  Komponentenstilen. Fachlich begründete Layoutunterschiede bleiben möglich.
  Diese Story entfernt fremde CSS-Klassenselektoren aus Themen. Vollständige
  optische Vereinheitlichung erfolgt separat nach visueller Bestandsaufnahme.
- Bestehenden dependency-cruiser erweitern, einschließlich Typimporten und Tests;
  ergänzende Syntaxprüfung für nicht statisch erkennbare Modulverbindungen.
  Keine neue Laufzeitabhängigkeit; freigegebenes SWC nur als Entwicklungswerkzeug (siehe Entscheidung unten).

## Ziel und Nicht-Ziele

Die vorhandenen Browserabläufe (Themen, Hilfe, Impressum, Lerncheck und lokaler
Lernstand) bleiben erhalten, während ihre Implementierungen unabhängig werden.
Keine Inhaltsänderung, keine neue Speicherfunktion, keine UI-Neugestaltung.

## Bestandsaufnahme

- Produktcode: topics -> help/index.ts und imprint/index.ts; App verbindet
  topics, learning-checks und learning-state bereits über öffentliche Verträge.
- topics-CSS setzt über fremde Klassen die Inhaltsbreite von Hilfe/Impressum.
- Lerncheck-Unit-/E2E-Tests importieren interne Themenbestände;
  App-Tests importieren teilweise Vertikal-Interna.
- tests/architecture/learning-data.test.ts mischt Ablageregeln und fachliche
  Datenregressionen. Bestehender Cruiser prüft nur src und lässt Themenausnahmen zu.
- Farben und Grundschrift zentral; lokale Überschriften weitgehend gleich.
  Kleine Typografieabweichungen werden in dieser Story nicht vereinheitlicht.

## Entscheidungen, Quellen und Risiken

- Kein Interface in App, das Vertikalen zurückimportieren müssen: strukturelle
  TypeScript-Verträge und React-Komposition. Geprüft am 20.10.2026 anhand
  https://www.typescriptlang.org/docs/handbook/type-compatibility und
  https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children.
- Typimporte mit SWC und Negativbeispielen erfassen (siehe Parserkorrektur unten); Herstellerdokumentation:
  https://github.com/sverweij/dependency-cruiser/blob/main/doc/options-reference.md.
- Designberatung durch Subagent: gemeinsame visuelle Sprache, funktionale lokale
  Layouts. Nur CSS und Produktbeschreibung geprüft, keine visuelle Abnahme.
  Diese Beratung ersetzt nicht das abschließende Code-Review.
- Risiko: mobile Navigation, Fokus/Rückweg und Inhaltsbreite bei Komposition.
  Bestehende Browserprüfungen sowie ein lokaler Hilfe/Impressum/Lerncheck-Ablauf
  sichern das ab. Öffentliche Datenverträge nur für echte Integration öffnen.
- Persönliche Daten bleiben lokal; keine neue Laufzeitbibliothek oder externe Laufzeitanfrage.

## Prüffähige Abnahme

1. Keine Vertikal-zu-Vertikal- oder Vertikal-zu-App-Importe, auch bei neuen
   Vertikalen, Typen und festen dynamischen Imports; Shared bleibt unabhängig.
2. Fachliche Integrationstests unter App verwenden ausschließlich öffentliche
   Vertikalverträge. Eigene Vertikaltests dürfen interne Module prüfen.
3. Verbotene dynamische Verbindungen und Architekturverstöße scheitern statisch;
   Negativbeispiele prüfen die tatsächlichen Werkzeuge.
4. Themen komponiert Hilfe/Impressum über übergebene Inhalte, ohne deren Klassen
   in Themen-CSS. Bestehende Breite und Bedienung bleiben erhalten.
5. Pflichtsuite grün, genau ein fokussiertes Review nach letztem GREEN,
   lokaler Browsernachweis und anschließend manueller Test durch Nutzer.

## Umsetzung und Nachweise

| Schritt | Nachweis |
| --- | --- |
| RED Komposition | Gezielter TopicBrowser-Test: 1 fehlgeschlagen, 41 übersprungen, Exitcode 1, 30,36 s. Übergebene Hilfe wurde nicht angezeigt, da Themen direkt die Hilfe implementierte. |
| GREEN Komposition und Importgrenzen | 47 Tests bestanden, Exitcode 0, 7,27 s (Themen, App, Architektur). |

Werkzeugbefund: dependency-cruiser 17.4.3 unterstützt TypeScript <7; mit installiertem
TypeScript 7.0.2 überspringt die bestehende Prüfung TypeScript-Module. Ein gezielter
App-Lauf meldete nur 6 Module/5 Abhängigkeiten. Die Parserkorrektur ist mit SWC und aktualisiertem Cruiser umgesetzt.

| RED Importgrenzen | Echte Cruiser-Analyse mit SWC: sechs unerlaubte Kopplungen wurden noch akzeptiert; 1 Test fehlgeschlagen, Exitcode 1, 0,97 s. Generische Regeln danach grün, einschließlich neuer Vertikale, Typ-Reexport und dynamischem Import. |

SWC-Aufnahme ausdrücklich freigegeben. @swc/core 1.16.18 dient nur Entwicklungsprüfungen: etablierter, vom Cruiser unterstützter TypeScript-/TSX-Parser, Apache-2.0, keine Laufzeit-/Telemetrieverwendung. Lizenz- und Auditnachweise siehe Reviewbehandlung und Abschlussprüfung. tsPreCompilationDeps wird durch parser:swc ersetzt; Typabhängigkeiten werden mit echten Negativbeispielen geprüft.

## Weitere Umsetzungsnachweise

- RED Syntaxprüfung: 1 Test fehlgeschlagen (berechnete Imports, eval/Function, require und import.meta-Dateisuche noch akzeptiert), Exitcode 1, 0,70 s.
- GREEN Syntaxprüfung: 1 Test bestanden, Exitcode 0, 0,72 s. Normale Texte, Kommentare und feste Imports bleiben erlaubt.
- RED Bestandsintegration: vollständige Analyse fand sieben Testkopplungen (fremde Themen-/Fragen-Interna, Datenregression unter Architektur).
- GREEN Bestandsintegration: 103 Module und 199 Abhängigkeiten ohne Grenzverletzung; statische Modulprüfung und 4 Vertikalzähltests bestanden, Exitcode 0, 3,30 s.
- GREEN vor Review: 136 betroffene Unit-/Komponenten-/Architekturtests bestanden, Exitcode 0, 12,60 s; Typprüfung bestanden.
- Testisolation: neuer Navigationstest räumt seinen History-Eintrag auf; vorher konnte der folgende Test keinen neuen Eintrag erkennen.
- dependency-cruiser 17.4.3 hat zusätzlich keine TSX-Unterstützung im SWC-Anschluss. Update auf 18.7.0 behebt dies; Negativfixture enthält TSX. Update separat als freigegebener Werkzeug-Commit umgesetzt.
- Prüfungen ab Parserupdate unter vorhandener gebündelter Node-Laufzeit 24.19.0; systemweites Node 25 wird von mehreren Projektwerkzeugen nicht unterstützt. Keine globale Laufzeitänderung.
- Öffentliche topicReferences enthält ausschließlich unveränderliche IDs/Titel/Quellen-URLs; Poolvalidatoren prüfen den echten übergreifenden Inhaltsvertrag. Fachliche Datenregressionen sind in die jeweiligen Vertikalen verlegt.
- Die abschließenden Nachweise nach Reviewkorrekturen stehen unter Abschlussprüfung.

## Einmaliges Abschlussreview und Behandlung

Review nach dem GREEN der Hauptumsetzung gemäß docs/quality/code-review.md,
Basis a26c5a5979150382ca82a7bb99dc4fd4e01d3a23, alle uncommitteten/neuen Dateien
in Themen/Lernchecks, App, Tests, Styles und Architekturwerkzeugen berücksichtigt.
Genau ein Review; keine zweite Runde. Drei belegte Befunde, alle bearbeitet:

1. Inline-Typimporte werden vom Cruiser-SWC-Visitor nicht zuverlässig traversiert.
   RED: direkte und verschachtelte Inlineimporte wurden akzeptiert. Die Syntaxprüfung
   lehnt sie nun in Produktcode und Tests zugunsten statischer import type-Deklarationen
   ab. Eigene/Shared-Typimporte bleiben als statische Deklaration erlaubt.
2. Öffentliche UI-Reexports laden CSS in den E2E-Node-Prozess. RED: E2E-Sammlung
   scheiterte am CSS-Import (0 Tests, Exitcode 1, 4,89 s). Lösung: ausdrücklich
   öffentliche, UI-freie data.ts-Einstiegspunkte für Themen und Lernchecks, neben
   index.ts für UI. Kein Testloader-CSS-Stubbing: unnötiger Sonderweg, der die
   tatsächliche Daten/UI-Abhängigkeit verdecken würde. GREEN: 4 Desktop-E2E-Tests
   für Lernstand bestanden, Exitcode 0, 6,69 s.
3. TypeScript import-equals mit require hat einen eigenen AST-Knoten. RED:
   Syntaxprüfung akzeptierte die Verbindung; TsExternalModuleReference wird nun
   abgewiesen. Namespace-Aliase ohne Modulverbindung bleiben erlaubt.

Reviewkorrekturen Syntax/Importgrenzen: 2 Tests bestanden, Exitcode 0, 1,04 s.
Die erste Korrekturfassung hatte die neuen AST-Zweige noch nicht eingebunden;
dies wurde vor dem grünen Nachweis behoben. Erlaubte Daten-Einstiegspunkte sind
im echten Cruiser-Negativtest mit abgedeckt.

Notwendiger Integrationsfix für freigegebenes SWC: Lizenzgate akzeptiert exakt
Apache-2.0 AND MIT (beide bereits erlaubte Lizenzen). RED: 7 bestanden/1 fehlgeschlagen,
Exitcode 1, 1,80 s; GREEN: 8 bestanden, Exitcode 0, 1,74 s. Kombination mit GPL
bleibt abgewiesen. Reviewer hat den Fix in derselben Runde berücksichtigt.
Lizenzprüfung grün. Audit-Schwelle high grün: keine hohen/kritischen Funde,
ein vorhandener moderater Vite-8.3.0-Befund; keine automatische Abhängigkeitsbereinigung.

## Abschlussprüfung und Abnahme

Automatisierte Abschlussprüfung nach letzter produktrelevanter Änderung, Node 24.19.0:

| Prüfung | Ergebnis |
| --- | --- |
| npm run check | Grün, Exitcode 0, 123,61 s; Format, Lint, Typprüfung, Runner-Selbsttests, 179 Unit-/Komponententests (64,73 s), 30 Inhaltsprüfungen (33,62 s), Architektur, Lizenzprüfung und Produktionsbuild. |
| Pages-Build | Grün, Exitcode 0, 1,15 s. |
| Pages-Workflow | Grün, Exitcode 0, 0,70 s. |
| Vollständige Chromium-E2E-Suite | 82 bestanden auf Desktop und Mobil, Exitcode 0, 72,06 s. |
| Audit high | Grün, Exitcode 0; 0 high/critical, vorhandener moderater Vite-Befund wie oben. |

Lokaler Browsernachweis: Chromium-basierter Codex In-app-Browser, schmale Ansicht,
http://127.0.0.1:5273/ aus dem dauerhaften Haupt-Workspace (Serverzuordnung geprüft).
Hilfe geöffnet und zur Liste zurückgekehrt; Impressum geöffnet und zurückgekehrt;
Lerncheck zum ersten Thema gestartet, Frage/Optionen sichtbar, abgebrochen und
Liste wieder sichtbar. Inhalt und Darstellung ohne erkennbaren Fehler; Hilfeansicht
zur manuellen Prüfung geöffnet. Screenshot liegt nur lokal außerhalb von Git.
Breite Ansichten, Rücknavigation und Datenabläufe deckt zusätzlich die grüne E2E-Suite ab.

Manueller Nutzertest erfolgt. Freigabe für Commit und lokale Fast-forward-Integration
in main erfolgt. Push-Freigabe erfolgt.

## Abschluss und Commitaufteilung

Vor dem Abschluss drei inzwischen vorhandene Remote-Commits geprüft: ausschließlich
Backlog-Änderungen. Story-Branch per Fast-forward auf dce3354 gebracht; neue
Backlog-Einträge und Löschungen bleiben erhalten. Fertige Story für die Commitaufteilung
außerhalb von Git gesichert. Werkzeug-Update getrennt von den fachlichen
Architektur-/Teständerungen committet. Vollständiger Werkzeug-Zwischenstand
eigenständig grün geprüft. Die abschließende Story entspricht produktrelevant dem zuvor
vollständig grün geprüften und manuell abgenommenen Stand.

Werkzeug-Commit 1313c72 eigenständig vollständig grün geprüft: npm check (71,17 s),
175 Unit-/Komponententests (57,54 s), 28 Inhaltsprüfungen (2,18 s), Pages-Build
(1,11 s), Pages-Workflow (0,58 s), 82 E2E-Tests (69,08 s), Audit high; jeweils
Exitcode 0. Fertige Story anschließend aus externer Sicherung wiederhergestellt;
31 produktrelevante Dateizustände per SHA-256 bzw. erwarteter Abwesenheit exakt
mit dem bereits vollständig grün geprüften Endstand verglichen. Remote-Änderungen
betreffen ausschließlich das Backlog. Die vorherigen grünen Story-Nachweise bleiben gültig.

Abschließende Architekturkontrolle nach Wiederherstellung: 105 Module/203 Abhängigkeiten
ohne Verletzung, Syntaxgate und 4 Vertikalzähltests grün, Exitcode 0, 3,64 s.
Story-Abschluss: Spec archiviert; genau zwei fachliche Vertikalen (Themen/Lernchecks).

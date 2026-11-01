# Meta: Lernthemen für die Weiterentwicklung von Lernluchs nutzen

Stand und Quellenprüfung: 01.11.2026. Bewertungsbasis: 48 Themen, Version 17,
Ausgangsstand `fc814e3`. Die Einzelprüfung folgt der Reihenfolge in
[topics.ts](../../src/verticals/topics/topics.ts). Die Rangfolge der Empfehlungen
ist davon unabhängig.

Der größte zusätzliche Nutzen liegt nach dieser Bewertung in besser belegter
Suchqualität, gezielter Inhaltspflege und einer zusammenhängenden Prüfung der
Bedienbarkeit. Viele Entwicklungsideen werden bereits angewendet. Sie weiter
zu nutzen ist häufig sinnvoller, als dafür ein neues Werkzeug einzuführen.

## Maßstab und Aussagegrenzen

Lernluchs ist eine statische React-/TypeScript-App mit lokalen Lernständen,
quellengebundenen Lernchecks und lokaler semantischer Filterung. Es gibt keinen
Java-Server und keinen antwortgenerierenden Produktagenten. Maßgeblich sind
[Produktstand](vision-and-scope.md), [Architektur](../architecture/target-architecture.md),
[Vertikalverträge](../architecture/verticals-and-boundaries.md),
[dauerhafte Vorgaben](../governance/durable-rules.md) und
[Prüfstrategie](../quality/verification-strategy.md).

„Relevant“ unterscheidet unmittelbaren Produktnutzen, Nutzen im Entwicklungsablauf
und bedingten Nutzen bei späterem Wachstum. Ein Java-Beispiel kann ein übertragbares
Prinzip enthalten, ohne dass das Java-Werkzeug zu Lernluchs passt.

Prioritäten sind eine redaktionelle Empfehlung, keine Messwerte:

- **P1:** als Nächstes verfeinern; unmittelbare Lernqualität, Zugänglichkeit oder
  Schutz wichtiger Zusagen. Zuerst vorhandene Abdeckung und tatsächliche Lücke prüfen.
- **P2:** bei wiederkehrendem Bedarf oder einer passenden Änderung umsetzen;
  Nutzen vor zusätzlichem Prozessaufwand nachweisen.
- **P3:** zurückstellen, bis eine ausdrücklich benannte Voraussetzung eintritt.
- **Bewahren:** bereits passende Lösung; daraus entsteht allein keine neue Story.

Die Reihenfolge berücksichtigt Nutzen und Schadenspotenzial, vorhandene Abdeckung,
voraussichtlichen Pflegeaufwand und Voraussetzungen. „Klein“ bedeutet vorwiegend
Dokumentation oder vorhandene Prüfungen gezielt nutzen, „mittel“ verlangt einen
begrenzt zu spezifizierenden Produkt-/Prüfschritt. Das sind Schätzungen ohne Zeitversprechen.
Es wurden keine App-Tests oder Nutzertests für diese Analyse ausgeführt. Aus einem
Prüfvorschlag folgt weder ein nachgewiesener Defekt noch ein Sicherheitsbefund.

## Priorisierte Empfehlungen

Die Kennungen M1–M8 bündeln zusammengehörige Ideen aus der Einzelprüfung.
Sie sind Vorschläge für spätere Stories und ändern die Backlog-Reihenfolge nicht.
Vor jeder Umsetzung gelten Refinement, aktive Spec und die Grenze von zwei
fachlichen Vertikalen je Commit.

### M1 – Suchqualität mit unabhängigen Fällen weiterentwickeln (P1, Rang 1)

**Bestand:** Die Suche hat feste Schwellwerte und getrennte Modell-/Qualitätstests.
[independentSemanticQuality.ai.test.ts](../../tests/verticals/topics/independentSemanticQuality.ai.test.ts)
prüft mindestens 95 % der verpflichtenden Treffer und die Abweisung fachfremder
Eingaben; zusätzliche Treffer werden bereits erfasst. Die
[CI](../../.github/workflows/ci.yml) wählt die echten Modellprüfungen ausdrücklich aus.
Der Produktstand benennt akzeptierte zusätzliche und einzelne fachfremde Treffer.

**Nächster Schritt:** Eine begrenzte Story für die Qualität bei mehrdeutigen und
nah verwandten Themen verfeinern. Vor Änderungen neue, unabhängig formulierte
synthetische Fälle zurückhalten, Pflicht-/optionale Treffer fachlich festlegen
und die vorhandenen Berichte verwenden. Zusätzlich zum Recall eine verständliche
Grenze für störende Zusatztreffer vereinbaren; diese Grenze ist noch offen.

**Ergebnis/Abnahme:** Ein reproduzierbarer Vorher-/Nachher-Vergleich nennt fehlende
und zusätzliche Treffer sowie Inferenzzeiten unter gleichen Bedingungen.
Ein geänderter Schwellwert oder Modellwechsel wird nur bei erfüllten Kriterien
übernommen; sonst bleibt der bisherige Stand. Reale Nutzersuchen und Lernstände
werden weder gesammelt noch veröffentlicht. Aufwand: mittel; Nutzen direkt beim
Finden passender Themen. Grundlage: vorhandene Modelltests und das Prinzip
beobachtbaren Nutzerverhaltens aus [Q1](#quellen-und-gegenprüfung).

### M2 – Redaktionelle Wiedervorlagen gezielt abarbeiten (P1, Rang 2)

**Bestand:** Themen und Quellen besitzen Prüf-/Wiedervorlagedaten; Quellenbindung
der Fragen und unveränderliche Themen-IDs sind bereits geregelt.
[Redaktionsregeln](../content/editorial-policy.md) und
[Rechercheablauf](latest-developments.md) existieren.

**Nächster Schritt:** Zunächst eine ausschließlich lesende Übersicht fälliger
Prüfungen aus den vorhandenen Metadaten ableiten. Schnell veränderliche
Versions-/Protokollaussagen und für Fragen tragende Quellen zuerst fachlich prüfen.
Eine eigene Inhaltsstory bearbeitet danach einen abgegrenzten Befund samt
Fragenbezügen; keine automatische Textübernahme oder bloße Neudatierung.

**Ergebnis/Abnahme:** Jede bearbeitete Aussage hat eine erreichbare Originalquelle,
Prüftag und dokumentierte Grenze; IDs, Pfadzuordnung und bestehender Lernstand
bleiben kompatibel. Audio-/Videozusammenfassungen bleiben als solche erkennbar.
Aufwand: klein für die Übersicht, vom Befund abhängig für Inhaltsänderungen.
Nutzen: verlässliche Lerninhalte. Kein OKF-System und keine C2PA-Infrastruktur
nötig; deren Herkunftsidee genügt als Anregung ([Q7](#quellen-und-gegenprüfung)).

### M3 – Einen vollständigen Lernablauf auf Zugänglichkeit prüfen (P1, Rang 3)

**Bestand:** Browserprüfungen decken Desktop/Smartphone, Tastaturbedienung von
Lernchecks und Fehlerfälle der KI-Suche ab. Das ist noch kein vollständiger
Nachweis der Barrierefreiheit.

**Nächster Schritt:** Einen begrenzten Ablauf mit Tastatur und Screenreader
prüfen: Filter setzen → Thema öffnen → Quelle erreichen → Check durchführen →
Ergebnis/Speicherhinweis verstehen → zur Liste zurückkehren. Fokus, Zoom/Reflow,
Kontrast und Statusmeldungen anhand ausgewählter WCAG-Kriterien beurteilen.
Vorhandene E2E nutzen, belegte Lücken gezielt ergänzen.

**Ergebnis/Abnahme:** Der Ablauf bleibt ohne Maus und bei vergrößerter Darstellung
bedienbar; Lade-, Leer-, Fehler- und Speicherzustände werden verständlich mitgeteilt.
Nur bestätigte Probleme führen zu einer Produktänderung. Aufwand: mittel;
direkter Nutzen für die Lernenden. Ein möglicher Gesamtbefund über mehrere
Vertikalen wird in passende Stories/Commits geschnitten. Zunächst vorhandene
Browserwerkzeuge verwenden; keine vorgezogene Storybook-/Penpot-Einführung.
Grundlagen: [Q1 und Q2](#quellen-und-gegenprüfung).

### M4 – Schutzversprechen und wirksame Gates nachvollziehbar halten (P1, Rang 4)

**Bestand:** Silent-Runner samt Negativtests, Architekturprüfungen, CI,
Worktree-Schutz sowie ein E2E-Nachweis gegen externe Suchübertragung existieren.
[test-runner.node.mjs](../../scripts/test-runner.node.mjs) prüft schon fehlende
Berichte, reine Skips und Prozessfehler trotz bestandener Einzeltests.

**Nächster Schritt:** Bei Änderungen an Datenflüssen, Runnern oder CI die betroffene
Zusage mit dem bestehenden Nachweis verbinden. Beispiel: „Suchtext verlässt das
Gerät nicht“ → Netzprüfung in
[ai-search.spec.ts](../../e2e/verticals/topics/ai-search.spec.ts).
Den Remote-Übernahmeschutz bei Gelegenheit lesend prüfen; sein tatsächlicher
Status wurde hier nicht erhoben. GitHub kann auch `skipped`/`neutral` als zulässigen
Status akzeptieren, weshalb der konkrete Workflow entscheidend bleibt ([Q3](#quellen-und-gegenprüfung)).

**Ergebnis/Abnahme:** Eine Schutzregel hat eine Fundstelle, einen aussagekräftigen
Negativfall und einen eindeutig ausgeführten Pflichtcheck; bestehende Nachweise
werden wiederverwendet. Keine Regel durch einen bloßen Modellentscheid ersetzen.
Aufwand: klein bis mittel je Änderung; hoher Nutzen beim Verhindern unbemerkter
Regressionen. Sichere Textausgabe und Abhängigkeitsbewertung nach
[Q4 und Q5](#quellen-und-gegenprüfung) bleiben Teil derselben Risikobetrachtung.

### M5 – Entscheidungen und Abnahme knapp mit Verhalten verbinden (P2, Rang 5)

**Bestand:** AGENTS.md, Index, Glossar, aktive/archivierte Specs, RED/GREEN,
ein fokussiertes Code-Review und Nutzerfreigabe sind bereits verbindlich.

**Nächster Schritt:** Bei der nächsten passenden Produktstory wenige konkrete
Auslöser-/Erwartungssätze verwenden und an vorhandene Tests binden. Bei fachlichen
Umbauten zuerst beobachtetes Altverhalten von gewünschtem Verhalten unterscheiden.
Abgeschlossene Entscheidungen nur an der maßgeblichen Stelle pflegen und verlinken.

**Ergebnis/Abnahme:** Ein neuer Bearbeiter kann Zweck, Begriffe, Nicht-Ziele,
geändertes Verhalten und gültige Nachweise ohne Chat-Historie nachvollziehen.
Keine zweite parallele Spec-Wahrheit und kein zusätzliches Prozessframework.
Aufwand: klein. Nutzen: weniger Missverständnisse bei späteren Änderungen.
Die Unterscheidung von Anleitung, Referenz und Erklärung nach
[Q6](#quellen-und-gegenprüfung) hilft beim gezielten Lesen.

### M6 – Fehler mit bereinigten Beispielen reproduzierbar machen (P2, Rang 6)

**Bestand:** Fehlerfälle für Modellladen und lokalen Speicher sowie lokale
Rohprotokolle sind vorhanden. Bug-Triage muss nicht neu als Agentensystem gebaut werden.

**Nächster Schritt:** Beim nächsten echten Fehler ein kleines synthetisches
Reproduktionsbeispiel erstellen: Browser-/App-Version, Schritte, Soll/Ist und
betroffener Zustand ohne persönliche Daten. Daraus zunächst RED, danach den
begrenzten Patch und dessen Abnahme ableiten.

**Ergebnis/Abnahme:** Der Fehler ist ohne Originalprofil und ohne privaten
Lernstand reproduzierbar; Logs bleiben lokal. Öffentliche Tests enthalten nur
synthetische Fälle, keine persönlichen Fehlermeldungen. Aufwand: klein bis mittel
je Fehler. Voraussetzung für spätere Automatisierung ist wiederkehrender,
nachgewiesener manueller Aufwand, nicht allein die Verfügbarkeit eines Bots.

### M7 – Wiederkehrende Redaktionsarbeit begrenzt unterstützen (P2, Rang 7)

**Bestand:** Der Index lenkt die Lektüre; Silent-Runner verdichten Erfolge und
erhalten Fehlerdetails. Der Recherche-/Redaktionsablauf ist dokumentiert.

**Nächster Schritt:** Erst bei mehrfach belegter Wiederholung einen kleinen
Pilot für die Quellenprüfung erproben: Eingaben, Quellenherkunft, erwarteter
Befund, Grenzen und Abbruch festlegen. Ein Skill kann die bestehende Anleitung
bedarfsgerecht laden ([Q8](#quellen-und-gegenprüfung)); mechanisch prüfbare Regeln
bleiben in Code/CI. Fremde Anleitungen und Werkzeuge vorher prüfen.

**Ergebnis/Abnahme:** Der Pilot liefert überprüfbare Befunde statt automatisch
veröffentlichter Inhalte; Originale bleiben erreichbar. An denselben bereinigten
Aufgaben Qualität und Nacharbeit vergleichen. Messungen und Werkzeugprotokolle
bleiben lokal; ohne erkennbaren Nutzen keinen Skill-/MCP-Ausbau übernehmen.
Aufwand: mittel und derzeit ohne gemessenen Zusatznutzen.

### M8 – Zusätzliche Infrastruktur erst bei belegtem Engpass (P3, Rang 8)

Zurückstellen: Java-KI-Backend, Modell-Routing im Produkt, selbst gehostete
Agentenplattform, Codegraphendienst, eigenes Multiagenten-Harness, MCP/A2A/ACP im
Produkt, OpenRewrite und Javadoc. Es fehlt jeweils ein passender unmittelbarer
Bedarf oder die technische Voraussetzung. Lerninhalte darüber können dennoch
wertvoll sein; das ist von ihrer Einführung im Projekt zu trennen.

Auslöser wären beispielsweise nachweislich nicht mehr beherrschbare
Abhängigkeitsnavigation, häufige vergleichbare unabhängige Aufgaben oder viele
wiederholte UI-Zustände. Dann zuerst den kleinsten lokalen Versuch gegen den
bisherigen Ablauf vergleichen; ohne belegten Vorteil abbrechen. Aufwand potenziell
hoch, Nutzen unbewiesen. Datenschutz- und Architekturänderungen brauchen eine
eigene Entscheidung. [Q9](#quellen-und-gegenprüfung) stützt die Vorsicht vor unnötiger
Agentenkomplexität, liefert aber keinen Produktivitätsnachweis für Lernluchs.

## Einzelprüfung in Themenreihenfolge

„Direkt“ kann Produkt und Entwicklung betreffen. Verweise auf M1–M8 benennen den
nächsten sinnvollen Ansatz, keine schon freigegebene Umsetzung. „Bewahren“ ist
eine bewusste Empfehlung ohne zusätzliche Maßnahme. Die Quelltexte und ihre
jeweiligen Quellenlisten stehen in [topics.ts](../../src/verticals/topics/topics.ts);
projektspezifische Befunde folgen den oben verlinkten Verträgen und Prüfungen.

### Themen 1–12

| Nr. | Thema und stabile ID | Relevanz und heutiger Bezug | Übertragung, nächster Schritt und Grenze |
| --- | --- | --- | --- |
| 1 | Mensch und KI: Verantwortung bleibt menschlich (`human-ai-responsibility`) | Direkt für Entwicklung und Redaktion. Nutzerabnahme und Commit-Freigabe sind bereits verbindlich. | **Bewahren / M5:** Bei Such- und Inhaltsänderungen fachliche Entscheidung und akzeptierte Grenzen sichtbar festhalten. Ein grüner Lauf ist keine menschliche Freigabe. Keine pauschale rechtliche Einstufung aus dem Thema ableiten. |
| 2 | Problem, Ziel und Änderungsumfang klären (`problem-understanding-and-change-boundaries`) | Direkt. Refinement, Nicht-Ziele und Vertikalgrenze sind vorhanden. | **P2 / M5:** Für eine Verbesserung zuerst den konkreten Lernendenablauf und das überprüfbare Ende klären, etwa störende Zusatztreffer statt „bessere KI“. Kleine Änderungen klein halten; keine zusätzliche Interviewpflicht erfinden. |
| 3 | Fachsprache vereinheitlichen und Komplexität begrenzen (`domain-language-and-complexity`) | Direkt. Das Glossar definiert etwa Alltagsanker, Fragenpool und Lernstand; Architekturgrenzen begrenzen fachliche Vermischung. | **Bewahren / M5:** Neue Begriffe in Spec, Oberfläche und Tests abstimmen und vorhandene Funktionen nutzen. Keine generische Wissens-/Workflow-Abstraktion nur für einen Einzelfall einführen. |
| 4 | Verhalten von Legacy-Code ermitteln und die Neuentwicklung verlässlich testen (`design-and-legacy-specification`) | Bedingt direkt vor Umbauten bestehender Navigation, Filter oder Speicherung. Verhalten und Verträge sind bereits dokumentiert und getestet. | **P2 / M5, M6:** Vor einem Umbau repräsentative Kombinationen und Speicherfehler charakterisieren. Beobachtetes Altverhalten getrennt vom gewünschten Soll erfassen; keinen Fehler nur deshalb konservieren, weil er bisher existiert. |
| 5 | Relevante Standards und Einschränkungen begründen (`standards-and-constraint-rationale`) | Direkt. Statisches Hosting und lokale Daten setzen andere Grenzen als ein authentifizierter Server. | **P1 / M3, M4:** Passende WCAG-/Sicherheitsanforderungen an sichtbare Zustände und Datenflüsse binden. Bereits verbindliche Regeln bewahren; keine vollständige ASVS-Konformität aus einzelnen Checks behaupten. |
| 6 | Plausible KI-Antworten mit Gegenbelegen prüfen (`llm-fallibility-and-counterchecks`) | Direkt für Inhalte und Codevorschläge. Die Produktsuche erzeugt selbst keine Antworttexte. | **P1 / M1, M2:** Fachliche Aussagen an Originalquellen, Suchqualität an schwierigen Gegenbeispielen prüfen. Zustimmung eines zweiten Modells genügt nicht; die Fehlerklasse nicht fälschlich auf Textgenerierung im Produkt beziehen. |
| 7 | Projektwissen und Definition of Done zielgerichtet dokumentieren (`project-documentation-and-checklists`) | Direkt und weitgehend umgesetzt durch Index, Governance, Specs und Prüfstrategie. | **Bewahren / M5:** Maßgebliche Aussagen verlinken statt in mehreren Checklisten duplizieren. Bei Änderungen überholte beschreibende Stellen gezielt nachziehen. Keine zusätzliche Wiki-Schicht ohne Pflegebedarf. |
| 8 | Langlebiges Wissen über die Fachlichkeit mit OKF strukturieren (`open-knowledge-format`) | Bedingt. Herkunft und Gültigkeit helfen der Redaktion; vorhandene Themenmetadaten und Markdown-Dokumente decken viel davon ab. | **P3 / M8:** Erst bei nachgewiesenen Problemen mit verstreutem Fachwissen ein Format prüfen. **M2** kann vorhandene Metadaten schon nutzen. Kein zweiter Themenbestand und keine OKF-Migration allein wegen des verfügbaren Formats. |
| 9 | AGENTS.md: dauerhafter Kontext für Coding-Agenten (`agents-md`) | Direkt und bereits umgesetzt samt verlinktem Index. | **Bewahren / M5:** Dauerhafte Regeln knapp halten, situative Fakten in der Spec belassen. Bei einer Regeländerung Zweck und maßgebliche Fundstelle klären; nicht jeden Story-Befund zur allgemeinen Agentenanweisung machen. |
| 10 | EARS: Anforderungen präzise formulieren (`ears-requirements`) | Direkt für Filter, Abbruch und Speicherfehler. Einfache Auslöser-/Verhaltenssätze passen zur vorhandenen Abnahme. | **P2 / M5:** Beispielsweise „Wenn die Speicherung fehlschlägt, bleibt der Check nutzbar und zeigt den fehlenden Speichererfolg“ an den bestehenden Test binden. Satzmuster ersetzen keine Randfälle; Regeln nicht bloß umetikettieren. |
| 11 | Recherche, Planung und Umsetzung trennen (`research-plan-tasks`) | Direkt; Rechercheleitfaden und aktive Spec trennen bereits Befund und Umsetzung. | **Bewahren / M2, M5:** Für Inhaltsänderungen zuerst belegte Aussage und Unsicherheit sammeln, dann die begrenzte Änderung planen. Neue Erkenntnisse dürfen den Plan korrigieren; kein starrer zusätzlicher Wasserfallprozess. |
| 12 | Agentenkontext gezielt auswählen und neu ordnen (`context-selection-and-reset`) | Direkt für Bearbeitungskosten und Verständlichkeit. Der Index steuert bereits die Pflichtlektüre. | **P2 / M7:** Recherche mit Fundstellen, Entscheidungen und offenen Fragen verdichten; nach Unterbrechung am tatsächlichen Diff prüfen. Keine pauschalen Token-Grenzwerte und kein Reset als Ersatz für Worktree-/Rechteprüfung. |

### Themen 13–24

| Nr. | Thema und stabile ID | Relevanz und heutiger Bezug | Übertragung, nächster Schritt und Grenze |
| --- | --- | --- | --- |
| 13 | KI-Funktionen in Java-Webanwendungen bauen (`java-ai-applications`) | Als Lerninhalt relevant, als Implementierungsansatz derzeit gering. Lernluchs hat weder Java-Backend noch generativen Support-Endpunkt. | **P3 / M8:** Berechtigungs- und Ausgabeprüfprinzipien bei künftigen Entscheidungen mitdenken. Spring AI/LangChain4j derzeit nicht einführen; ein solcher Produktumbau würde die geltenden Architektur-/Datenschutzgrenzen berühren. |
| 14 | Aufgaben mit Modell-Routing an passende Modelle verteilen (`task-based-model-routing`) | Bedingt für Entwicklungsaufgaben; im Produkt verwendet eine einheitliche lokale Suchfunktion ein festes Embeddingmodell. | **P3 / M8:** Nur bei belegten unterschiedlichen Aufgabenklassen einen kontrollierten Vergleich erwägen. Kein Router in die Such-App: zusätzliche Entscheidungsschicht und Fehlerrouten ohne belegten Bedarf. Keine unbelegten Einsparungsversprechen. |
| 15 | KI-Inhalte mit Herkunftsnachweisen und Kennzeichnung veröffentlichen (`ai-content-provenance-and-disclosure`) | Direkt für redaktionelle Nachvollziehbarkeit; C2PA-Technik nur bedingt. Themen verlinken auch KI-erzeugte Audiozusammenfassungen. | **P1 / M2:** Primärquellen, Zusammenfassungen und redaktionelle Verantwortung unterscheidbar halten. C2PA dokumentiert Herkunft, nicht fachliche Wahrheit ([Q7](#quellen-und-gegenprüfung)); keine Signierinfrastruktur oder pauschale Rechtsfolgerung daraus ableiten. |
| 16 | Web- und KI-Risiken mit passenden Baselines prüfen (`web-security-baseline`) | Direkt. Eingaben, Quellenlinks, lokale Speicherung und ausgelieferte Modell-/Runtime-Dateien sind passende Prüfflächen. | **P1 / M4:** Datenflüsse und externe Ressourcen gegen die konkreten Produktzusagen prüfen. Bestehende Netz-/Buildprüfungen verwenden; keine Server-Login-Baseline und keine Annahme, beliebige Serverheader auf Pages konfigurieren zu können. |
| 17 | Kontext und Vertrauensgrenzen für Coding-Agenten (`coding-agent-context-and-trust-boundaries`) | Direkt für Recherche und Issue-Bearbeitung. Fremde Webseiten können Inhalte liefern, aber keine Projektfreigabe. | **Bewahren / M4, M7:** Bei Quellenprüfung Anweisungen im Fundstück als untrusted Daten behandeln; Schreibrechte technisch begrenzen. Die lokale Produktsuche besitzt keine Tools: dort keinen nicht vorhandenen Agenten-Aktionspfad unterstellen. |
| 18 | Geheimnisse und sensible Daten beim KI-Einsatz schützen (`protect-secrets-and-sensitive-data-with-ai`) | Direkt. Persönliche Lernstände, Suchtexte, Fehlermeldungen und Profile müssen lokal bleiben. | **P1 / M4; P2 / M6:** Reproduktionen synthetisch erstellen, Logs nicht veröffentlichen und Netzverhalten gegen Zusagen prüfen. Redaktionelle Metadaten sind öffentliche Daten; private Zuordnungen gehören nicht in Specs oder Testfixtures. |
| 19 | Lokale KI-Stacks mit Qwen, Hermes und Bionic (`local-model-stack-evaluation`) | Bedingt. Lokale Ausführung passt als Prinzip, die genannten Stacks erfüllen aber andere Aufgaben als das Browser-Embedding. | **P3 / M8:** Einen Wechsel nur mit Browser-/WASM-Tauglichkeit, Qualität, Downloadgröße, Lizenz und Wartung begründen. Kein selbst gehosteter Agentenstack als Voraussetzung einer lokalen semantischen Filterung. |
| 20 | Coding-Agenten nach Arbeitsumgebung auswählen (`coding-agent-interface-selection`) | Bedingt für den Entwicklungsablauf, keine fehlende Produktfunktion. Ein zugeordneter lokaler Worktree ist vorhanden. | **P3 / M8:** Erst bei einem konkreten Engpass dieselbe abgegrenzte Aufgabe nach Ergebnis und Nacharbeit vergleichen. Lokale Oberfläche nicht mit lokaler Modellverarbeitung gleichsetzen; keine zusätzliche Cloudumgebung allein aus Produktnamen ableiten. |
| 21 | Spec-Driven Development mit OpenSpec, Spec Kit und Kiro (`spec-driven-development-openspec`) | Direkt als Prinzip; Lernluchs hat bereits einen vollständigen eigenen Spec-Ablauf. | **Bewahren / M5:** Spec, Diff, Abnahme und Tests vor Abschluss auf Übereinstimmung prüfen. Kein paralleles OpenSpec-/Spec-Kit-System einführen, solange keine konkrete Lücke im bestehenden Ablauf nachgewiesen ist. |
| 22 | Agent Skills für wiederkehrende Entwicklungsabläufe (`agent-skills-and-commands`) | Bedingt direkt bei wiederkehrenden Recherchen und Inhaltsprüfungen. Die verbindlichen Regeln liegen bereits im Repository. | **P2 / M7:** Einen kleinen Skill erst nach bewährten Wiederholungen erwägen, mit klaren Eingaben, Befunden und Fehlerfällen. Keine Skill-Sammlung pauschal installieren und keine Rechte aus einer Rollenbeschreibung ableiten. Formatgrundlage: [Q8](#quellen-und-gegenprüfung). |
| 23 | Große Repositories mit einem Codegraphen erschließen (`codegraphs-for-large-repos`) | Derzeit geringer Werkzeugbedarf. Die bekannten Vertikalen, Einstiegspunkte und Importprüfungen machen Navigation gezielt möglich. | **P3 / M8:** Erst bei belegten, mit Text-/Symbolsuche schwer lösbaren Beziehungsfragen lokal pilotieren. Externe Indizierung würde einen eigenen Datenfluss eröffnen; ein Graph ersetzt keine Prüfung aktueller Imports. |
| 24 | UI-Komponenten entwerfen und visuell prüfen (`ui-design-system-workflow`) | Direkt für die vorhandenen Filter-, Lade-, Fehler- und Checkzustände; ein eigenes Design-System ist bedingt. | **P1 / M3:** Zusammenhängende Zustände und Bedienbarkeit im vorhandenen Browserablauf prüfen. Wiederholte Zustandskombinationen können später eine Komponentenvorschau rechtfertigen. Penpot/Storybook erst bei belegtem Pflegebedarf, nicht vor der Prüfung. |

### Themen 25–36

| Nr. | Thema und stabile ID | Relevanz und heutiger Bezug | Übertragung, nächster Schritt und Grenze |
| --- | --- | --- | --- |
| 25 | Modulgrenzen und öffentliche Schnittstellen gestalten (`module-boundaries-and-public-interfaces`) | Direkt und umgesetzt: Vertikalen, `index.ts`/`data.ts`, schmale Verträge und kompositionsorientierte App. | **Bewahren / M4:** Neue Funktionen beim fachlichen Besitzer platzieren und bestehende Architekturtests nutzen. Keine fremden Vertikal-Interna importieren; gemeinsame Begriffe allein rechtfertigen keine neue Shared-Fachlogik. |
| 26 | Fachverhalten mit TDD absichern (`tdd-for-domain-behavior`) | Direkt und verbindlich für Produktänderungen. RED/GREEN ist bereits der Arbeitsablauf. | **Bewahren / M1, M6:** Neue Fehlerklassen und fachliche Grenzen zuerst mit aussagekräftigem RED belegen; vorhandene Tests sinnvoll erweitern. Keine künstlichen TDD-Tests für diese reine Dokumentationsanalyse. |
| 27 | Java-Architekturregeln mit ArchUnit prüfen (`archunit-for-java-architecture`) | Prinzip direkt, Java-Werkzeug derzeit unpassend. dependency-cruiser, Syntax- und Architekturtests übernehmen hier diese Aufgabe. | **Bewahren / M4:** Neue Grenzen im vorhandenen TypeScript-Prüfpfad samt Negativfall absichern. ArchUnit nicht zusätzlich installieren; ein Importtest belegt noch kein fachlich korrektes Verhalten. |
| 28 | Automatisierung nach Nutzen und Kontrollpunkten auswählen (`automation-value-and-gates`) | Direkt für Redaktion und Entwicklung. Pflichtchecks und Nutzerfreigaben existieren. | **P2 / M7:** Nur wiederkehrende, klar prüfbare Arbeit automatisieren und die eingesparte Nacharbeit mitbetrachten. Prüfbefunde dürfen vorbereitet werden; Veröffentlichung und persönliche Daten nicht automatisch in einen externen Ablauf übernehmen. |
| 29 | Subagents mit klaren Aufgaben und Zuständigkeiten einsetzen (`parallel-agent-task-boundaries`) | Direkt für vorgeschriebene Code-Reviews, bedingt für parallele Implementierung. Dokumentationsstories sind ausgenommen. | **Bewahren / M8:** Das einmalige fokussierte Code-Review mit begrenztem Auftrag beibehalten. Zusätzliche Parallelisierung nur bei unabhängigen Ergebnissen und eigenem Dateibesitz; diese Analyse braucht dafür keinen Agentenverbund. |
| 30 | Git-Worktrees für isolierte Änderungen nutzen (`git-worktrees-for-isolated-changes`) | Direkt und mit stärkerem lokalem Schutz umgesetzt: Entwickler-/Codex-Trennung, Start-/Recovery-Prüfung und lokale Sperren. | **Bewahren / M4:** Vor jeder Story tatsächlichen Branch, Spec und Schreibbesitz prüfen. Getrennte Dateien bedeuten keine getrennten Ports oder Rechte; gemeinsame Git-Referenzen beachten ([Q10](#quellen-und-gegenprüfung)). |
| 31 | Context7 für versionsbezogene Bibliotheksdokumentation (`versioned-library-docs-with-context7`) | Bedingt bei React-/Vite-/ONNX-Änderungen. Die eingesetzten Versionen stehen im Manifest/Lockfile. | **P2 / M5:** Zuerst verwendete Version bestimmen, dann Originaldokumentation gegenprüfen. Context7 nur als optionalen Recherchezugang bei belegtem Suchproblem verwenden; kein neues MCP-Werkzeug als Standardvoraussetzung. |
| 32 | Tokenverbrauch mit RTK, Headroom, Caveman und Ponytail reduzieren (`token-efficiency-tools`) | Direkt als Effizienzprinzip; Silent-Runner und gezielte Lektüre lösen bereits wesentliche Ausgabefragen. | **Bewahren / M7:** Erfolge knapp halten und vollständige Fehlerdetails lokal erhalten. Zusätzliche Verdichtung nur im kontrollierten Vergleich; die verbindlichen Runner weder ersetzen noch ihre Ausgabe nochmals kürzen. |
| 33 | Kontext zwischen Agenten gezielt übergeben (`agent-context-handoffs`) | Direkt bei Unterbrechungen oder Review. Aktive Spec und Worktree-Zuordnung tragen den nachprüfbaren Stand. | **P2 / M5:** Auftrag, Fundstellen, Entscheidungen, gültige Nachweise und offene Schritte knapp übergeben; beim Empfang tatsächlichen Diff und Sperre prüfen. Übergabe ist keine automatische Rechte-/Besitzübertragung. |
| 34 | Werkzeugrechte und MCP-Zugriffe begrenzen (`agent-tool-and-mcp-permissions`) | Direkt im Entwicklungsablauf. Der zugeordnete Worktree und technische Schreibgrenzen sind bereits wichtig. | **Bewahren / M4:** Ein Recherchepilot beginnt lesend; externe Schreibaktionen brauchen den jeweiligen Auftrag. Eine Prompt-Regel ersetzt keine technische Rechtebegrenzung. Die Produkt-App braucht dafür keinen MCP-Client. |
| 35 | Agentensysteme über MCP, A2A und ACP verbinden (`agent-protocol-integration`) | Als Lerninhalt relevant, für die Laufzeit derzeit kein Bedarf: Lernluchs delegiert keine Produktaufgaben an Agenten. | **P3 / M8:** Keine Protokollintegration bauen. Im Rahmen von **M2** die zeitabhängigen Protokoll-/SDK-Aussagen bei Fälligkeit prüfen; Spezifikation und tatsächlich unterstützte Implementierung getrennt beurteilen. |
| 36 | Deterministische Prüf-Gates im Agenten-Harness gestalten (`deterministic-agent-verification-gates`) | Direkt und weitgehend umgesetzt durch CI, Runner, Architektur- und Guardtests. | **P1 / M4:** Bei Änderungen nachweisen, dass der richtige Check wirklich läuft und ein Negativfall blockiert. Vorhandene Skips-/Berichtsfehlerprüfungen nutzen; aus einem grünen Badge keine vollständige fachliche Abnahme ableiten. |

### Themen 37–48

| Nr. | Thema und stabile ID | Relevanz und heutiger Bezug | Übertragung, nächster Schritt und Grenze |
| --- | --- | --- | --- |
| 37 | Agenten mit Evals und Traces systematisch prüfen (`agent-evals-and-traces`) | Direktes Eval-Prinzip für die semantische Suche und bedingt für Entwicklungsagenten; kein antwortender Produktagent. Echte Modelltests existieren. | **P1 / M1:** Schwierige unabhängige Suchfälle und Fehlermuster gezielt bewerten; Pflicht- und Zusatztreffer getrennt zeigen. Keine Produktions-Traces persönlicher Suchtexte sammeln und keinen Agenten-Toolscore mit Lernerfolg verwechseln. |
| 38 | Refactorings und Code-Migrationen mit OpenRewrite durchführen (`refactorings-and-migrations-with-openrewrite`) | Derzeit geringer Werkzeugnutzen ohne Java-Code. Wiederholbare begrenzte Transformationen sind als Prinzip nützlich. | **P3 / M8:** OpenRewrite nicht einführen. Bei einer größeren TypeScript-Migration später passende vorhandene Werkzeuge prüfen, Diff begrenzen und Verhalten absichern. Ein automatisches Rezept ist keine fachliche Abnahme. |
| 39 | Webabläufe mit Playwright prüfen (`playwright-for-web-flows`) | Direkt und umgesetzt für sichtbare Abläufe, Desktop/Smartphone und lokale KI-Suche. | **P1 / M3; Bewahren:** Bestehende Ablaufprüfungen um bestätigte Bedienlücken ergänzen. Stabile sichtbare Rollen/Namen und isolierten Zustand verwenden ([Q1](#quellen-und-gegenprüfung)); keine zweite parallele Browser-Suite aufbauen. |
| 40 | Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen (`web-xss-and-safe-dom`) | Direkt für Suchtexte, Quellenlinks und eventuelle spätere Inhaltsdarstellung. | **P1 / M4:** Bei betroffenen Änderungen Text als Text ausgeben und URL-/HTML-Kontexte getrennt behandeln. Nur eine tatsächlich neue Risikofläche braucht neue Tests; CSP und eine statische App ersetzen keinen kontextgerechten Schutz ([Q4](#quellen-und-gegenprüfung)). |
| 41 | Java-API-Dokumentation gezielt erzeugen (`technical-documentation-generation`) | Derzeit kein Javadoc-Bedarf ohne Java-API. Kleine verständliche öffentliche Verträge sind dennoch relevant. | **P3 / M8:** Bestehende `index.ts`-/`data.ts`-Verträge gezielt erklären statt automatisch jede interne Funktion dokumentieren. Generierung erst bei echtem Konsumentenbedarf prüfen; generierte Kommentare beweisen keine fachliche Richtigkeit. |
| 42 | Abhängigkeiten und Sicherheitslücken risikobasiert bewerten (`dependency-security-assessment`) | Direkt. Audit, Lizenzprüfung, Lockfile und gesonderte Update-Regeln existieren. | **Bewahren / M4:** Bei einem Fund oder neuen Werkzeug Einsatz, Herkunft, Wartung und konkrete Auswirkung prüfen ([Q5](#quellen-und-gegenprüfung)). Audit-/Lizenzgates nicht abschwächen; null bekannte Funde nicht als Sicherheitsgarantie darstellen. |
| 43 | KI-generierte Änderungen prüfen und übernehmen (`review-and-accept-ai-generated-changes`) | Direkt. Fokussiertes Code-Review, grüne Pflichtsuite und manuelle Nutzerfreigabe sind bereits geregelt. | **Bewahren / M5:** Auftragstreue und Projektregeln getrennt prüfen, besonders geänderte Assertions und nicht belegte Erfolgsmeldungen. Reviewhinweise am Code nachvollziehen; kein zusätzliches Dauergremium oder zweite Reviewrunde einführen. |
| 44 | Bewusst zwischen parallelen Agenten und seriellem Ablauf wählen (`compare-parallel-and-serial-agent-work`) | Bedingt. Mehrere Vertikalen allein beweisen keinen Nutzen gleichzeitiger Bearbeitung. | **P3 / M8:** Erst bei wiederkehrenden unabhängigen Aufgaben Qualität, Gesamtzeit und Review-Aufwand vergleichbar messen. Pflichtreview bleibt bestehen; keine Parallelität allein zum Erzeugen von Aktivität. |
| 45 | Bug-Triage bis zum PR schrittweise automatisieren (`bug-triage-and-pr-automation`) | Bedingt direkt bei wiederkehrenden Fehlern. Reproduktion und RED liefern schon ohne Bot Nutzen. | **P2 / M6:** Mit bereinigten Schritten und einem Regressionstest beginnen. Automatische Issue-/PR-Schreibaktionen erst bei explizitem Auftrag und belegtem Bedarf; keine privaten Fehlerdetails veröffentlichen. |
| 46 | Agenten-Harness mit technischen Grenzen gestalten (`coding-harness-design`) | Direkt als Entwicklungsprinzip; Guard, Runner und feste Laufzeit sind vorhanden. Ein eigenes allgemeines Harness wäre zusätzlicher Wartungsumfang. | **Bewahren / M4; P3 / M8:** Abbruch/Wiederaufnahme am tatsächlichen Zustand prüfen und nur eindeutig eigene Prozesse behandeln. Keine eigene Agentenplattform oder zusätzliche Loop-Orchestrierung ohne wiederkehrenden Engpass; Abbruch rollt Aktionen nicht automatisch zurück. |
| 47 | Modellwechsel und API-Lebenszyklen absichern (`model-and-api-lifecycle`) | Direkt für das gepinnte E5-Modell, Tokenizer und ONNX-Runtime. Modellrevision, Hashes und versionierter Assetpfad existieren. | **P1 / M1:** Vor einem Wechsel dieselben unabhängigen Fälle sowie Download-/Laufzeitbedingungen vergleichen; bisheriges Assetpaket als mögliche Rückfalloption berücksichtigen. Kein Wechsel nur wegen einer neuen Modellankündigung und keine Cloud-API als stiller Fallback. |
| 48 | Git-Commits klein und nachvollziehbar halten (`focused-git-commits`) | Direkt und verbindlich: zusammengehöriger Zweck, höchstens zwei fachliche Vertikalen, geprüfter Staging-Diff und ausdrückliche Freigabe. | **Bewahren / M5:** Empfehlungen später in abgeschlossene vertikale Stories schneiden; unabhängige Updates trennen. Ein kleiner Diff braucht trotzdem grüne passende Nachweise und Nutzerabnahme; Commit-Freigabe erlaubt keinen Push. |

## Quellen und Gegenprüfung

Die projektspezifischen Empfehlungen sind Schlussfolgerungen aus dem gelesenen
Repository-Stand, keine Aussagen der externen Autoren über Lernluchs. Die
folgenden Primärquellen wurden am **01.11.2026** für die jeweils genannten Aspekte
gelesen. Es erfolgte keine vollständige Neuvalidierung aller Quellen der 48
Themen und keine Änderung ihrer Quellenprüfdaten. Produktversionen, Preise,
Protokollrevisionen und Rechtsfolgen sind bewusst keine Grundlage einer
Einführungsentscheidung in diesem Bericht.

| Kennung | Geprüfte Originalquelle | Gestützter Aspekt und Grenze |
| --- | --- | --- |
| Q1 | [Playwright: Best Practices](https://playwright.dev/docs/best-practices) | Sichtbares Nutzerverhalten und isolierte Tests. Begründet den Prüfansatz für M1/M3, belegt weder aktuelle Fehlerfreiheit noch eine bestimmte Trefferqualität. |
| Q2 | [W3C: WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) | Tastatur, sichtbarer Fokus, Reflow und programmatisch erkennbare Statusmeldungen als Prüfkriterien. Keine vollständige WCAG-Konformitäts- oder Rechtsprüfung von Lernluchs. |
| Q3 | [GitHub: About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) | Pflichtchecks und mögliche Zustände `successful`, `skipped`, `neutral`. Der tatsächliche Remote-Schutz dieses Repositorys wurde nicht abgefragt; keine Behauptung über seine Aktivierung. |
| Q4 | [OWASP: XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | Kontextabhängige Ausgabe, sichere Text-Sinks und Grenzen alleiniger CSP-Nutzung. Keine Sicherheitsgarantie für alle Eingaben oder Links. |
| Q5 | [OpenSSF: Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html) | Bedarf, authentische Herkunft, Wartung und Sicherheitsbewertung von Abhängigkeiten. Kein aktueller Scan der Lernluchs-Abhängigkeiten. |
| Q6 | [Diátaxis](https://diataxis.fr/) | Unterschiedliche Bedürfnisse an Tutorial, Anleitung, Referenz und Erklärung. Anregung für gezielte Dokumentation, kein Anlass zur pauschalen Umstrukturierung. |
| Q7 | [C2PA: FAQ](https://c2pa.org/faqs/) | Signierte Herkunfts-/Bearbeitungsangaben für Medien. Auf Lernluchs wird nur das Herkunftsprinzip übertragen; kein Beleg fachlicher Wahrheit, keine neue rechtliche Bewertung. |
| Q8 | [Agent Skills: Overview](https://agentskills.io/home) | SKILL.md mit optionalen Ressourcen und bedarfsgerechtes Laden. Belegt das Format, keine konkrete Zeitersparnis, sichere Ausführung oder Notwendigkeit eines neuen Skills. |
| Q9 | [Anthropic: Building effective agents](https://www.anthropic.com/research/building-effective-agents) | Zunächst einfache Lösungen, zusätzliche Komplexität bei Bedarf; Unterscheidung vorgegebener Workflows und dynamischer Agenten. Herstellererfahrung von 2024 mit Aktualitätshinweis, keine unabhängige Studie über Lernluchs oder aktuelle Werkzeugempfehlung. |
| Q10 | [Git: git-worktree](https://git-scm.com/docs/git-worktree) | Mehrere Arbeitsbäume im gemeinsamen Repository und reguläre Verwaltung. Belegt Dateitrennung, keine Isolation externer Dienste oder Berechtigungen. |

Offen bleiben die tatsächliche Häufigkeit von Suchfehlern im Gebrauch, zusätzliche
Bedienhürden, fällige fachliche Inhaltskorrekturen, der Remote-Branchschutz und ein
messbarer Vorteil zusätzlicher Agentenwerkzeuge. M1–M4 beginnen deshalb mit einer
gezielten Bestands-/Lückenprüfung. Freiwillige lokale Prüfungen mit synthetischen
Fällen genügen als Ausgangspunkt; neue Telemetrie ist dafür nicht vorgesehen.

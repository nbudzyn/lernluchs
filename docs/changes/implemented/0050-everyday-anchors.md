# Alltagsanker und einheitliche Themenreihenfolge

Status: implementiert. Die Ergänzungen unten dokumentieren die endgültige
Reihenfolge, den Standard mit lokaler Anzeigepräferenz und die Abnahme.

## Einstieg über Probleme, in denen sich der Lernende sofort wiederfindet

- Zu jedem Thema einen festen, redaktionell formulierten Alltagsanker aus Sicht des Lernenden formulieren. Er benennt eine konkrete Schwierigkeit oder Unsicherheit, keine Frage und keine vorweggenommene Lösung; umgangssprachliche Aussagen mit Punkt am Satzende sind erwünscht.
- Rechts direkt unter der Überschrift steht der Alltagsanker als persönliche Randnotiz vor dem bisherigen Inhalt. Die Darstellung fügt sich zurückhaltend in die UI ein. Der Lernende kann von seiner eigenen Erfahrung her das Thema erschließen.
  - Mach dazu erst einen oder mehrere GUI-Entwürfe!
- In der Themenliste kann man switchen zwischen der Anzeige wie bisher und der Anzeige mit den "Alltagsankern" an Stelle der bisherigen Überschriften.
  - Oben über der Tabelle eine Schalten - Default ist die bisherige Ansicht.
  - In der Liste die "Alltagsanker" auch in der grafischen Darstellung (Schriftart...), wie "Alltagsanker" auf der rechten Seite dargestellt werden? Oder etwas gemäßigt?
- Die GUI verwendet ausschließlich „Kommt mir bekannt vor“. Der fachliche Begriff bleibt Alltagsanker (englisch: Everyday anchor), das Codefeld heißt `everydayAnchor`. „Problem“ bleibt auf die vorhandene fachliche Abschnittsüberschrift begrenzt.
  - Idee: Der User erkennt seine eigenen Probleme sofort und kann sich drauf stürzen
- Legende in der Hilfe ergänzen.
- Schnellfilter soll auch die "Alltagsanker" mit durchsuchen!

Vor der Umsetzung:
- Zu Beginn "Grilling", damit die Spec 95% verstanden ist.
- GUI-Entwürfe zeigen
- Erst ausgewählte Alltagsanker zur Sprachabstimmung zeigen, danach die vollständige Liste vor der Entwicklung vorlegen. Diese Abstimmung ist erfolgt; die finalen Korrekturen sind unten enthalten.

Geklärt im Refinement:
- Jeder Alltagsanker ist fest je Thema hinterlegt und für alle Lernenden gleich; keine persönliche Texteingabe.
- Gemeint sind erlebbare Schwierigkeiten, keine Einstiegsfragen. Sprachrichtung: „Der Agent schreibt meinen API-Key in den Code!“, „Der generierte Code funktioniert gar nicht!“, „Ich weiß nicht, wie ich die Anforderungen klar aufschreiben soll!“, „Wer weiß, ob der Agent nicht halluziniert!“ und „In meiner riesigen Code-Basis sucht sich die KI nen Wolf!“.
- Die bisherige fachliche Überschrift bleibt im Detail erhalten; der Alltagsanker steht darunter vor dem bisherigen Inhalt.
- Die Beschriftung lautet „Kommt mir bekannt vor“ über dem Alltagsanker und im Umschalter neben „Themen“.
- Sprachentscheidung: Der umgangssprachliche Ton der Alltagsanker ist gewünscht; konkrete Schwierigkeiten dürfen wie spontane persönliche Gedanken klingen.
- Gestaltung: „Leise Randnotiz“ mit feiner neutraler Linie ohne Farbfläche und kleinerem persönlichen Text in kursiver Serifenschrift. Satzenden verwenden Punkte statt Ausrufezeichen. Dieselbe Schrift in gemäßigter Größe kennzeichnet die alternative Liste. Gestaltung und Alltagsankerliste wurden mit den unten eingearbeiteten Korrekturen abgestimmt.
- Vorgeschlagener Sitzungsumfang: Beim Start fachliche Überschriften anzeigen, die alternative Ansicht während der Nutzung erhalten, nicht auf dem Gerät speichern.
- Umsetzung ist beauftragt. Der Sitzungsumfang folgt dem vorgeschlagenen Start in der fachlichen Themenansicht ohne Speicherung der Listenumschaltung.

### Abgestimmte Alltagsanker

Die Alltagsanker beschreiben mögliche Alltagssituationen aus Lernendensicht, keine allgemeinen Tatsachenbehauptungen über Agenten oder Werkzeuge. Die Zuordnung folgt den 49 vorhandenen Themen; die Tabelle dokumentiert die Sprachabstimmung. Die anschließend freigegebene Reihenfolge steht im Ergänzungsabschnitt unten. Bestehende fachliche Inhalte und Quellen werden dadurch nicht ersetzt.

| Thema | Alltagsanker |
| --- | --- |
| Mensch und KI: Verantwortung bleibt menschlich | Der Agent hat's geschrieben – aber am Ende muss ich dafür geradestehen. |
| Problem verstehen und Änderungen begrenzen | Ich wollte nur einen kleinen Fehler beheben – jetzt baut der Agent alles um. |
| Fachsprache vereinheitlichen und Komplexität begrenzen | Wir benutzen dieselben Wörter und meinen trotzdem etwas anderes. |
| Projektwissen und Definition of Done zielgerichtet dokumentieren | Ich suche unsere Regeln und finde nur einen Berg aus Notizen. |
| Langlebiges Wissen über die Fachlichkeit mit OKF strukturieren | Unser Fachwissen ist überall verstreut – ich weiß nicht mehr, was noch gilt. |
| Ziel, Nutzen und Abbruchkriterien vor dem Coding klären | Mein Agent entwickelt immer weiter und weiß gar nicht, wann es genug ist. |
| AGENTS.md: dauerhafter Kontext für Coding-Agenten | Ich muss dem Agenten unsere Projektregeln jedes Mal neu erklären. |
| EARS: Anforderungen präzise formulieren | Ich weiß nicht, wie ich meine Anforderungen klar aufschreiben soll. |
| Verhalten von Legacy-Code ermitteln und die Neuentwicklung verlässlich testen | Ich soll alten Code ändern, aber keiner weiß mehr, was er genau tut. |
| Relevante Standards und Einschränkungen begründen | Ich soll Standards einhalten und weiß nicht, welche für mein Projekt zählen. |
| Plausible KI-Antworten mit Gegenbelegen prüfen | Wer weiß, ob der Agent nicht halluziniert. |
| Agentenkontext gezielt auswählen und neu ordnen | Mein Agent hängt an alten Annahmen fest und verliert die eigentliche Aufgabe aus dem Blick. |
| Kontext und Vertrauensgrenzen für Coding-Agenten | Der Agent folgt plötzlich Anweisungen aus einer fremden Datei. |
| Große Repositories mit einem Codegraphen erschließen | In meiner riesigen Code-Basis sucht sich die KI nen Wolf. |
| Tokenwerkzeuge erst nach einem gemessenen Engpass einsetzen | Mein Agent verbraucht massenhaft Tokens, aber ich weiß nicht, wofür. |
| Geheimnisse und sensible Daten beim KI-Einsatz schützen | Der Agent pusht meinen API-Key auf GitHub. |
| Recherche, Planung und Umsetzung trennen | Der Agent schreibt schon Code, obwohl wir noch gar nicht wissen, was wir bauen wollen. |
| Spec-Driven Development mit OpenSpec | Was wir eigentlich bauen wollten, steht irgendwo in einem langen Chat. |
| Coding-Agenten nach Arbeitsumgebung auswählen | Ich weiß nicht, ob ich mit meinem Agenten im Terminal, in der IDE oder in der Cloud arbeiten soll. |
| Modellwechsel und API-Lebenszyklen absichern | Das Modell hinter meinem Dienst wird abgeschaltet – jetzt muss ich Ersatz finden. |
| Für wiederkehrende Agentenabläufe Skills erwägen | Beim nächsten Durchlauf vergisst mein Agent wieder die Hälfte der Schritte. |
| Spec-Frameworks in einem kleinen Pilotprojekt vergleichen und nach Bedarf einsetzen | Bei jeder größeren Aufgabe muss ich meinem Agenten wieder erklären, wie er von der Anforderung zur geprüften Umsetzung kommen soll. |
| Aufgaben und Abbruchkriterien für parallele Agenten festlegen | Meine Agenten arbeiten gleichzeitig, aber ständig kommen sie sich in die Quere. |
| Git-Worktrees für isolierte Änderungen nutzen | Meine zwei laufenden Änderungen geraten im selben Arbeitsverzeichnis durcheinander. |
| Versionsbezogene Bibliotheksdokumentation mit Context7 erwägen | Der Agent schlägt mir Methoden vor, die es in meiner Bibliotheksversion gar nicht gibt. |
| Spezialisierten Subagents klare Aufgaben zuordnen | Ich bekomme mehrere Agentenergebnisse und weiß nicht, wer welchen Teil verantwortet. |
| Kontext zwischen Agenten gezielt übergeben | Der nächste Agent weiß nicht mehr, was schon geklärt ist und was noch offen ist. |
| Werkzeugrechte und MCP-Zugriffe begrenzen | Der Agent hat beim Testen Daten in meiner echten Datenbank geändert. |
| Agentensysteme über MCP, A2A und ACP verbinden | Ich kopiere Tickets und Ergebnisse anderer Agenten ständig von Hand in den Coding-Chat. |
| Modulgrenzen und öffentliche Schnittstellen gestalten | Der Agent ändert ein kleines Modul und plötzlich gehen ganz andere Teile kaputt. |
| KI-Funktionen in Java-Webanwendungen bauen | Mein Java-Dienst soll mit KI unsere Dokumente nutzen. |
| Fachverhalten mit TDD absichern | Der generierte Code funktioniert gar nicht. |
| Java-Architekturregeln mit ArchUnit prüfen | Wir haben Schichtgrenzen vereinbart, aber im Code greift trotzdem alles auf alles zu. |
| Deterministische Prüf-Gates im Agenten-Harness gestalten | Der Agent meldet „fertig“, aber ich weiß nicht einmal, ob die Tests gelaufen sind. |
| Agenten mit Evals und Traces systematisch prüfen | Bei derselben Aufgabe liefert mein Agent mal gute Ergebnisse und mal Murks. |
| Automatisierung nach Nutzen und Kontrollpunkten auswählen | Meine Automatisierung wiederholt denselben Fehler jetzt auch noch hundertmal. |
| Refactorings und Code-Migrationen mit OpenRewrite durchführen | Mein Agent ändert beim Versions-Upgrade dieselben API-Aufrufe überall ein bisschen anders. |
| Webabläufe mit Playwright prüfen | Meine Unit-Tests sind grün, aber im Browser funktioniert der Ablauf trotzdem nicht. |
| Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen | Ich will Nutzereingaben anzeigen und habe Sorge, dass dabei fremder Code ausgeführt wird. |
| Web- und KI-Risiken mit passenden Baselines prüfen | Ich habe eine Sicherheitscheckliste abgehakt und weiß trotzdem nicht, ob sie meine Risiken abdeckt. |
| UI-Komponenten entwerfen und visuell prüfen | Dieselbe Komponente sieht auf jeder Seite anders aus. |
| Java-API-Dokumentation gezielt erzeugen | Mein Agent baut Aufrufe meiner Java-API ein, die gar nicht zu deren Vertrag passen. |
| Abhängigkeiten und Sicherheitslücken risikobasiert bewerten | Mein Sicherheitscheck meldet Lücken in Bibliotheken – ich weiß nicht, was ich zuerst angehen soll. |
| KI-generierte Änderungen prüfen und übernehmen | Der Agent liefert einen riesigen Patch – ich kann kaum noch prüfen, ob etwas Wichtiges fehlt. |
| Einsatz von parallelen Agenten gegen den seriellen Ablauf messen | Ich setze mehr Agenten ein, aber mein Aufwand und meine Kosten steigen trotzdem. |
| Bug-Triage bis zum PR schrittweise automatisieren | Der Agent eröffnet einen PR, obwohl er den gemeldeten Fehler noch gar nicht nachvollzogen hat. |
| Lokale und souveräne KI-Stacks bewusst erproben | Ich will KI lokal betreiben und weiß nicht, welche Teile ich dafür wirklich brauche. |
| Agenten-Harness mit technischen Grenzen gestalten | Die Agentensitzung ist abgebrochen – ich weiß nicht, was erledigt ist und wie ich sicher weitermache. |
| Git-Commits klein und nachvollziehbar halten | Im Commit steckt alles auf einmal – ich kann einzelne Änderungen kaum noch nachvollziehen. |

## Ziel und Umfang

Die abgestimmten Entscheidungen und die Alltagsankertabelle oben sind maßgeblich für die Umsetzung; die vorherigen Entwurfsfragen sind damit geklärt.

- Jedes der 49 Themen erhält einen festen redaktionellen `everydayAnchor` direkt am Thema in `topics.ts`. IDs, Pfadzuordnungen, Lernchecks und ihre fachlichen Überschriften bleiben stabil. Die nachträglich freigegebene gemeinsame Reihenfolge steht im Ergänzungsabschnitt unten.
- Direkt unter der fachlichen Detailüberschrift steht der Alltagsanker als „Leise Randnotiz“: Beschriftung „Kommt mir bekannt vor“, dünne neutrale linke Linie, keine Farbfläche, kleinere kursive Serifenschrift. Die Schrift entspricht der im Entwurf als persönlich wahrgenommenen Georgia-Kursive; keine externe Schrift oder neue Abhängigkeit.
- Über der Themenliste schaltet eine zugängliche Button-Gruppe zwischen „Themen“ und „Kommt mir bekannt vor“. Beim ersten Besuch ist „Kommt mir bekannt vor“ ausgewählt. Der Wechsel ersetzt nur den sichtbaren Listentext, bewahrt Reihenfolge, Auswahl, Schnellfilter, Lernpfade und Lerncheck-Zuordnung und wird lokal im Browser gespeichert und beim erneuten Laden wiederhergestellt.
- Die beiden Umschaltbuttons teilen die gesamte Breite des Schnellfilter-Eingabefelds gleichmäßig. Die äußeren linken und rechten Kanten schließen bündig ab; längerer Text darf auf Mobilbreite umbrechen.
- Der Schnellfilter durchsucht die Alltagsanker zusätzlich zu den bisherigen Feldern in beiden Ansichten mit denselben Regeln.
- Die Hilfe erläutert Alltagsanker, Umschaltung und erweiterte Suche. „Problem“ erscheint weiterhin nur als bisherige fachliche Abschnittsüberschrift.
- `spec-framework-selection.content.problem` erklärt den Bedarf an einem wiederholbaren Ablauf von Anforderung bis geprüfter Umsetzung statt widersprüchlicher paralleler Spec-Tools. Das Eval-Thema verwendet in Problem und Java-/Web-Beispiel eine konkrete Coding-Aufgabe statt einer Support-Demo. Die Inhalte zu OpenRewrite und Javadoc verdeutlichen den Bezug zur agentischen Entwicklung.

Vertikalen: Themen und Hilfe. Keine persönliche Texteingabe oder neuen Lerncheck-Fragen. Die spätere freigegebene Anzeigepräferenz wird getrennt vom Lernstand gespeichert.

## Quellenprüfung und fachliche Entscheidungen

Prüftag: 07.10.2026. Alltagsanker sind mögliche Alltagssituationen aus Lernendensicht, keine Behauptungen über jedes Werkzeug. Die übrigen Alltagsanker wurden gegen Problem und Schwerpunkt ihres bestehenden Themas abgeglichen.

| Aussage / Entscheidung | Primäre Quelle | Grenze |
| --- | --- | --- |
| Spec-Tools strukturieren Anforderungen, Planung und Umsetzung für Coding-Agenten; der Pilot prüft den konkreten Prozessbedarf. | [GitHub Spec Kit](https://github.com/github/spec-kit/blob/main/docs/index.md) | Kein Tool ersetzt fachliche Klärung, Tests oder Review. Nur die einleitende Problemformulierung wird geändert; bestehende Einordnung und Grenzen bleiben. |
| Manuelles Kopieren von Tickets und fremden Agentenergebnissen ist ein plastischer Integrationsanker: MCP verbindet Werkzeuge und Kontextquellen, A2A Agenten, ACP Client und Coding-Agent. | [A2A und MCP](https://a2a-protocol.org/latest/topics/a2a-and-mcp/), [ACP Überblick](https://agentclientprotocol.com/protocol/v1/overview) | Der Alltagsanker ist eine abgeleitete Alltagssituation. Protokolle garantieren keine kompatible Integration oder Zugriffsrechte. |
| Evals können Coding-Agenten an wiederholbaren Programmieraufgaben, resultierendem Code und Werkzeugabläufen prüfen. | [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), [Google ADK Evaluation](https://adk.dev/evaluate/) | Ergebnisse hängen von Aufgaben, Umgebung und Kriterien ab; ein erfolgreicher Lauf beweist keine allgemeine Zuverlässigkeit. Die Anthropic-Primärquelle ergänzt die vorhandenen Quellen um Coding-Evals. |
| Wiederholbare OpenRewrite-Rezepte können auch einem Coding-Agenten inkonsistente Einzeländerungen bei Migrationen ersparen. | [OpenRewrite Quickstart](https://docs.openrewrite.org/running-recipes/getting-started) | Der Bezug zum Agenten ist eine Anwendung des Rezeptprinzips; kein automatisch zugesicherter Migrationsgewinn. |
| Javadoc beschreibt öffentliche Java-Verträge; diese geben auch Coding-Agenten Orientierung für korrekte API-Nutzung. | [Oracle: javadoc](https://docs.oracle.com/en/java/javase/26/docs/specs/man/javadoc.html) | Generierung korrigiert keine falschen Kommentare und garantiert keine korrekte Agentennutzung. |
| Ein Harness muss längere Aufgaben und die Weiterarbeit über Sitzungsgrenzen kontrollieren. Der bereits vorgeschlagene Unterbrechungsanker passt zum Schwerpunkt des aktuellen Themas. | [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) | Unterbrechung ist ein konkreter Einstieg, nicht der gesamte Harness-Umfang. Die Harness-Inhalte bleiben unverändert; keine Übernahme von Fortschrittsdateien nach Git. |

## Risiken und Abnahme

- Alle 49 Alltagsanker sind nicht leer, enthalten keine Frageform als Satzende und enden mit einem Punkt. Fehlende und leere Alltagsanker werden bei der Themenvalidierung mit Themen-ID abgewiesen. Die expliziten Textkorrekturen oben werden übernommen.
- Ein Alltagsanker steht nach der Detailüberschrift und vor den bisherigen fachlichen Abschnitten. Fachüberschrift und Abschnitt „Problem“ bleiben erhalten.
- Beide Listenansichten öffnen dasselbe Thema; Ansichtwechsel erhält Auswahl und Filter. Icons und Lernchecks bleiben an denselben IDs und fachlichen Bezeichnungen orientiert.
- Desktop, Mobilansicht sowie helle und dunkle Darstellung bleiben lesbar und ohne horizontalen Überlauf. Die Randnotiz bleibt gegenüber dem Lerninhalt zurückhaltend.
- Hilfe beschreibt die Funktion mit der GUI-Beschriftung „Kommt mir bekannt vor“.
- Lokaler Browserablauf: erster Einstieg mit Alltagsankern, Suche, Umschaltung und Wiederherstellung nach Reload, Auswahl und Randnotiz, Rückkehr zur Liste auf Mobilbreite, Filtererhalt und Hilfe prüfen.
- Vor einem Commit: vollständige Pflichtsuite grün und ausdrückliche positive manuelle Prüfung des Nutzers. Die Bestätigung ist erfolgt.

Die zusätzliche Umschaltzeile darf die Rückkehr aus Lernchecks nicht verschieben. Browser-Zurück stellt auf breiten Ansichten die beim Start des Lernchecks aktuelle Scrollposition wieder her. Die Sichtbarkeitsprüfung für kurze Lernpfade verwendet die tatsächliche Höhe des jeweiligen Desktop- oder Mobil-Viewports.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN / REFACTOR |
| --- | --- | --- |
| Redaktionelle Alltagsanker, Validierung und fachliche Beispiele | Bestehende Inhalts- und Glossarprüfung erweitert; Validatorprüfung ergänzt: 3 fehlgeschlagen, 23 übersprungen, 1,57 s, Exitcode 1. | 26 bestanden, 1,61 s, Exitcode 0. Alle 49 festen Texte direkt am Thema; Themenversion 10; die vier fachlichen Beispiele mit Quellenprüfung angepasst. |
| Randnotiz, alternative Listenansicht, Schnellfilter und Hilfe | Erweiterte Komponentenprüfungen: 4 fehlgeschlagen, 32 übersprungen, 6,63 s, Exitcode 1. | 36 bestanden, 5,07 s, Exitcode 0. REFACTOR: Schnellfilterprüfungen in `TopicBrowser.test.tsx` zusammengeführt und sechs Suchfelder in beiden Ansichten in einem Test geprüft. |
| GUI-Beschriftung und Glossarzuordnung | Bestehende Detail-, Hilfe- und Glossarprüfungen: 3 fehlgeschlagen, 29 übersprungen, 2,11 s, Exitcode 1. | 32 betroffene Prüfungen bestanden, 4,30 s, Exitcode 0. GUI ausschließlich „Kommt mir bekannt vor“; Fachbegriff Alltagsanker / Everyday anchor und Codefeld `everydayAnchor` im Glossar zugeordnet. |
| Bündige Umschaltbuttons | Bestehender Alltagsanker-Browserablauf um Kanten- und Breitenprüfung ergänzt: 2 fehlgeschlagen, 1,93 s, Exitcode 1. | 2 bestanden, 2,35 s, Exitcode 0. Zwei gleich breite Grid-Spalten; gemeinsame Außenkanten entsprechen dem Schnellfilter auf Desktop und Mobilgerät. |
| Browserablauf und bestehende Navigation | Neuer Alltagsanker-Ablauf und erweiterte Hilfe zuerst: 3 fehlgeschlagen, 16,63 s, Exitcode 1. Vollsuite deckte anschließend die Scrollrückkehr und die starre Viewport-Annahme auf: 73 bestanden, 3 fehlgeschlagen, 48,69 s, Exitcode 1. | Betroffene Abläufe: 12 bestanden, 5,47 s, Exitcode 0. Browser-Zurück erhält die aktuelle breite Scrollposition; kurze Pfade werden gegen die tatsächliche Viewport-Höhe geprüft. |
| Abschließende Pflichtsuite nach letzter CSS-Änderung | Die RED-Nachweise oben gingen den jeweiligen Implementierungen voraus. Ein E2E-Zwischenlauf erreichte beim mobilen Schnellfilter die Startansicht nicht: 75 bestanden, 1 fehlgeschlagen, 51,73 s, Exitcode 1. Derselbe Ablauf separat: 2 bestanden, 2,18 s, Exitcode 0; anschließend vollständiger E2E-Lauf ohne parallele Build-Prüfungen. Rohprotokolle und Chromium-Diagnose liegen außerhalb von Git. | Unit/Komponenten: 128 bestanden, 13,16 s; Inhaltsvalidierung: 32 bestanden, 4,61 s; E2E: 76 bestanden, 44,88 s; jeweils Exitcode 0. Format, Lint, Typecheck, Runner-Selbsttests, Architektur, Lizenzen und Build grün (jeweils Exitcode 0; 4,84 / 3,73 / 2,04 / 1,43 / 6,56 / 1,55 / 2,49 s). Abhängigkeits-Audit: 0 Sicherheitslücken, 1,75 s, Exitcode 0; keine Abhängigkeiten geändert. |
| Lokale Browserprüfung, 07.10.2026 | Desktop- und Mobilbreite im Codex In-App-Browser geprüft. | Suche nach „API-Key“, Umschaltung, unveränderte Auswahl, Randnotiz unter der Fachüberschrift, mobile Rückkehr mit Filtererhalt, Hilfe und bündige Buttons erfolgreich geprüft; kein horizontaler Überlauf. Temporäre Viewport-Vorgabe anschließend zurückgesetzt. |
| Manuelle Nutzerabnahme / Commit | Manuelle Nutzerprüfung und Freigabe erfolgt. | Umsetzung vollständig; Abschlussnachweis unten. |


## Ergänzung: gemeinsame Themenreihenfolge, 07.10.2026

Nach Prüfung aller 14 Lernpfade hat der Nutzer die Umordnung freigegeben. Eine einzige globale Themenreihenfolge bleibt verbindlich; jeder Pfad referenziert seinen bisherigen Themenbestand in dieser Reihenfolge. Keine Änderung an Texten, Quellen, Metadaten, IDs, Pfadnamen, Lernchecks oder persönlichem Lernstand. Themenversion wird auf 11 erhöht.

Die Reihenfolge führt vom Anliegen zu Grundlagen und Werkzeugen. Vor EARS stehen Legacy-Verhalten, Standards und Gegenprüfung. KI-Funktionen und passende Sicherheitsbaselines werden vor Einzelrisiken und Integration eingeführt. Lokale KI-Stacks stehen vor der Arbeitsumgebung, Spec-Auswahl vor OpenSpec, Architektur und Tests vor Worktrees und Migrationen, Context7 vor Tokenoptimierung, UI-Gestaltung vor Browserprüfung und Automatisierung vor Parallelisierung. Modellwechsel steht als Betriebsvertiefung am Ende.

Der Nutzer hat anschließend den Legacy-Einstieg und einen für beide Eval-Anwendungsfälle passenden Alltagsanker freigegeben; die Umsetzung steht im Ergänzungsabschnitt unten.

### Verbindliche gemeinsame Reihenfolge

| Position | Thema | ID |
| --- | --- | --- |
| 1 | Mensch und KI: Verantwortung bleibt menschlich | `human-ai-responsibility` |
| 2 | Problem verstehen und Änderungen begrenzen | `problem-understanding-and-change-boundaries` |
| 3 | Fachsprache vereinheitlichen und Komplexität begrenzen | `domain-language-and-complexity` |
| 4 | Ziel, Nutzen und Abbruchkriterien vor dem Coding klären | `goal-discovery-and-stop-criteria` |
| 5 | Verhalten von Legacy-Code ermitteln und die Neuentwicklung verlässlich testen | `design-and-legacy-specification` |
| 6 | Relevante Standards und Einschränkungen begründen | `standards-and-constraint-rationale` |
| 7 | Plausible KI-Antworten mit Gegenbelegen prüfen | `llm-fallibility-and-counterchecks` |
| 8 | Projektwissen und Definition of Done zielgerichtet dokumentieren | `project-documentation-and-checklists` |
| 9 | Langlebiges Wissen über die Fachlichkeit mit OKF strukturieren | `open-knowledge-format` |
| 10 | AGENTS.md: dauerhafter Kontext für Coding-Agenten | `agents-md` |
| 11 | EARS: Anforderungen präzise formulieren | `ears-requirements` |
| 12 | Recherche, Planung und Umsetzung trennen | `research-plan-tasks` |
| 13 | Agentenkontext gezielt auswählen und neu ordnen | `context-selection-and-reset` |
| 14 | KI-Funktionen in Java-Webanwendungen bauen | `java-ai-applications` |
| 15 | Web- und KI-Risiken mit passenden Baselines prüfen | `web-security-baseline` |
| 16 | Kontext und Vertrauensgrenzen für Coding-Agenten | `coding-agent-context-and-trust-boundaries` |
| 17 | Geheimnisse und sensible Daten beim KI-Einsatz schützen | `protect-secrets-and-sensitive-data-with-ai` |
| 18 | Lokale und souveräne KI-Stacks bewusst erproben | `local-model-stack-evaluation` |
| 19 | Coding-Agenten nach Arbeitsumgebung auswählen | `coding-agent-interface-selection` |
| 20 | Spec-Frameworks in einem kleinen Pilotprojekt vergleichen und nach Bedarf einsetzen | `spec-framework-selection` |
| 21 | Spec-Driven Development mit OpenSpec | `spec-driven-development-openspec` |
| 22 | Für wiederkehrende Agentenabläufe Skills erwägen | `agent-skills-and-commands` |
| 23 | Große Repositories mit einem Codegraphen erschließen | `codegraphs-for-large-repos` |
| 24 | UI-Komponenten entwerfen und visuell prüfen | `ui-design-system-workflow` |
| 25 | Modulgrenzen und öffentliche Schnittstellen gestalten | `module-boundaries-and-public-interfaces` |
| 26 | Fachverhalten mit TDD absichern | `tdd-for-domain-behavior` |
| 27 | Java-Architekturregeln mit ArchUnit prüfen | `archunit-for-java-architecture` |
| 28 | Automatisierung nach Nutzen und Kontrollpunkten auswählen | `automation-value-and-gates` |
| 29 | Aufgaben und Abbruchkriterien für parallele Agenten festlegen | `parallel-agent-task-boundaries` |
| 30 | Git-Worktrees für isolierte Änderungen nutzen | `git-worktrees-for-isolated-changes` |
| 31 | Versionsbezogene Bibliotheksdokumentation mit Context7 erwägen | `versioned-library-docs-with-context7` |
| 32 | Tokenwerkzeuge erst nach einem gemessenen Engpass einsetzen | `token-efficiency-tools` |
| 33 | Spezialisierten Subagents klare Aufgaben zuordnen | `specialized-subagents-and-ownership` |
| 34 | Kontext zwischen Agenten gezielt übergeben | `agent-context-handoffs` |
| 35 | Werkzeugrechte und MCP-Zugriffe begrenzen | `agent-tool-and-mcp-permissions` |
| 36 | Agentensysteme über MCP, A2A und ACP verbinden | `agent-protocol-integration` |
| 37 | Deterministische Prüf-Gates im Agenten-Harness gestalten | `deterministic-agent-verification-gates` |
| 38 | Agenten mit Evals und Traces systematisch prüfen | `agent-evals-and-traces` |
| 39 | Refactorings und Code-Migrationen mit OpenRewrite durchführen | `refactorings-and-migrations-with-openrewrite` |
| 40 | Webabläufe mit Playwright prüfen | `playwright-for-web-flows` |
| 41 | Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen | `web-xss-and-safe-dom` |
| 42 | Java-API-Dokumentation gezielt erzeugen | `technical-documentation-generation` |
| 43 | Abhängigkeiten und Sicherheitslücken risikobasiert bewerten | `dependency-security-assessment` |
| 44 | KI-generierte Änderungen prüfen und übernehmen | `review-and-accept-ai-generated-changes` |
| 45 | Einsatz von parallelen Agenten gegen den seriellen Ablauf messen | `compare-parallel-and-serial-agent-work` |
| 46 | Bug-Triage bis zum PR schrittweise automatisieren | `bug-triage-and-pr-automation` |
| 47 | Agenten-Harness mit technischen Grenzen gestalten | `coding-harness-design` |
| 48 | Modellwechsel und API-Lebenszyklen absichern | `model-and-api-lifecycle` |
| 49 | Git-Commits klein und nachvollziehbar halten | `focused-git-commits` |

### Nachweise der Umordnung

| Phase | Nachweis |
| --- | --- |
| RED | Bestehende Reihenfolgeprüfung auf den abgestimmten Bestand aller 49 Themen erweitert: 1 fehlgeschlagen, 23 übersprungen, 1,42 s, Exitcode 1. |
| GREEN | Themen und alle 14 Pfadlisten gemeinsam umgeordnet: 29 betroffene Unit-Prüfungen bestanden, 1,84 s, Exitcode 0. Identische Themenblöcke und unveränderte Pfadmitgliedschaften vor/nach dem Verschieben geprüft. |
| REFACTOR | Alte positionsgebundene Metadatenprüfungen verwenden stabile IDs. Die bisherige Architekturprüfung auf historische Sortierung wurde nach ihrem Fehlschlag (127 bestanden, 1 fehlgeschlagen, 7,68 s, Exitcode 1) auf unveränderte Pfadnamen und Themenmitgliedschaften umgestellt: deren Original-Nachweis wurde gegen HEAD bestätigt und reihenfolgeneutral übernommen. 5 Architekturtests bestanden, 0,99 s, Exitcode 0. Die neue gemeinsame Reihenfolge und ihre fachlichen Vorrangbeziehungen werden in den bestehenden Themenprüfungen gesichert. |
| Browserprüfungen | Ein Zwischenlauf erwartete im Modernisierungspfad noch die alte Reihenfolge und traf einen zufallsabhängig mehrdeutigen Lerncheck-Textselektor: 73 bestanden, 3 fehlgeschlagen, 50,14 s, Exitcode 1. Nur die Reihenfolgeerwartung des betroffenen Pfadtests angepasst. Anschließend 6 betroffene E2E-Prüfungen bestanden, 10,25 s, Exitcode 0. Die unabhängig dokumentierte Testselektor-Korrektur und die abschließende Pflichtsuite stehen im Ergänzungsabschnitt unten. |
| Lokaler Browser, 07.10.2026 | Codex In-App-Browser: gemeinsame Themenliste, KI-Anwendungspfad, Auswahlpfad und Automatisierungspfad geprüft. Die allgemeinen Anliegen stehen zuerst, beide Listenansichten halten dieselbe Reihenfolge; Filter und Icons funktionieren. Mobilansicht und Desktopbreite geprüft, temporäre Viewport-Vorgabe zurückgesetzt. |
| Abnahme | Manuelle Nutzerprüfung und Freigabe erfolgt; Abschlussnachweis unten. |


## Ergänzung: Legacy-Einstieg, Eval-Anker und gespeicherte Listenansicht

Freigabe am 07.10.2026: Das vorhandene Thema `design-and-legacy-specification` eröffnet den Modernisierungspfad entsprechend seiner globalen Position. Bestehende Pfadnamen und alle bisherigen Zuordnungen bleiben erhalten; Themenversion wird auf 12 erhöht. Der Eval-Alltagsanker lautet „Bei derselben Aufgabe liefert mein Agent mal gute Ergebnisse und mal Murks.“ Er passt zum allgemeinen Eval-Konzept und sowohl zur agentischen Programmierung als auch zur Prüfung einer eingebauten Agentenfunktion. Das vorhandene Coding-Beispiel bleibt als konkrete Anwendung erhalten.

Die Themenanzeige besitzt eine lokale Anzeigepräferenz, getrennt vom öffentlichen Themenbestand und vom Lernstand. Speichervertrag: `lernluchs.topic-list-view.v1`, Werte `topics` und `everydayAnchors`. Fehlender, ungültiger oder nicht lesbarer Eintrag führt zu „Kommt mir bekannt vor“. Nur ein ausdrücklicher Wechsel schreibt die Auswahl. Fehler beim Schreiben lassen den Wechsel für die aktuelle Sitzung zu und zeigen einen knappen Hinweis, dass die Auswahl nicht gespeichert werden konnte. Nach einem späteren erfolgreichen Wechsel verschwindet der Hinweis. Es werden weder Lernstand noch andere Browserdaten verändert, keine Daten extern übertragen und keine neuen Abhängigkeiten benötigt. Die Hilfe erläutert Standard und Speicherung.

Bestehende Tests für Titelansichten verwenden bewusst die gespeicherte Wahl `topics`; die eigene Alltagsanker-E2E-Prüfung startet ausdrücklich mit leerem Browser-Speicher und prüft beide Werte über Reload. Komponententests prüfen ungültige Werte und blockierten Speicher.

### Nachweise der Ergänzung

| Phase | Nachweis |
| --- | --- |
| RED: Inhalte | Bestehende Themen- und Pfadprüfungen um Eval-Text und Legacy-Einstieg erweitert: 0 bestanden, 2 fehlgeschlagen, 27 übersprungen; 1,63 s; Exitcode 1. |
| RED: Anzeigepräferenz | Zwei bisher nicht abgedeckte Speicheranforderungen in `TopicBrowser.test.tsx` ergänzt und bestehende Hilfeprüfung erweitert: 0 bestanden, 3 fehlgeschlagen, 30 übersprungen; 1,94 s; Exitcode 1. |
| GREEN | Legacy-Zuordnung, generischer Eval-Anker, lokale Auswahl und Hilfe implementiert: 70 betroffene Unit-/Komponentenprüfungen bestanden; 5,93 s; Exitcode 0. Titelabläufe wählen ausdrücklich die gespeicherte Titelansicht; der Alltagsanker-Browserablauf beginnt mit leerem Speicher und prüft beide Ansichten nach Reload. 6 betroffene E2E-Prüfungen bestanden; 9,56 s; Exitcode 0. |
| REFACTOR | Speicherlesen in kleinem Initialisierungshelfer, Schreiben ausschließlich beim ausdrücklichen Wechsel; Fehler bleiben im lokalen UI. Architektur-Bestandsprüfung erlaubt genau die freigegebene Legacy-Ergänzung im Modernisierungspfad. Der vollständige gemeinsame Reihenfolgen- und Mitgliedschaftsnachweis bleibt erhalten. Testformatierung und falsche Testing-Library-Option nach Format-/Typecheck-Fehlschlag korrigiert. |
| Abschließende Pflichtsuite | Unit/Komponenten: 130 bestanden, 7,63 s; Inhaltsvalidierung: 32 bestanden, 1,79 s; E2E: 76 bestanden, 46,42 s; jeweils Exitcode 0. Format, Lint, Typecheck, Runner-Selbsttests, Architektur, Lizenzen und Build grün, jeweils Exitcode 0; Laufzeiten 1,97 / 0,91 / 0,70 / 0,55 / 5,14 / 0,48 / 1,05 s. Audit aus derselben Umsetzung: 0 Sicherheitslücken, 1,75 s, Exitcode 0; keine Abhängigkeiten geändert. |
| Lokaler Browser, 07.10.2026 | Beide ausdrücklich gewählten Ansichten nach Reload wiederhergestellt. Modernisierungspfad mit acht Themen und Legacy-Einstieg, aktualisierte Hilfe und bündige Buttons auf Desktop geprüft. Neuer Eval-Anker in Liste und Randnotiz auf Mobilbreite geprüft. Temporäre Viewport-Vorgabe zurückgesetzt. |
| Abnahme | Zum damaligen Stand noch offen; Abschlussvermerk unten. Die unabhängige Lerncheck-Testkorrektur erhält einen separaten Commit gemäß [eigener Spec](0049-learning-check-explanation-matching.md). |

## Abschlusskorrektur und Abnahme

Der Geheimnis-Alltagsanker wird auf „Der Agent pusht meinen API-Key auf GitHub.“
präzisiert. Die Formulierung beschreibt weiterhin eine mögliche erlebbare
Alltagssituation, keine allgemeine Tatsachenbehauptung über Agenten.
Themenversion 13. Bestehende Inhaltsprüfung wird vor der Textänderung erweitert.
Manuelle Nutzerprüfung und Freigabe erfolgt.

| Phase | Nachweis |
| --- | --- |
| RED | Bestehende Inhaltsprüfung um vereinbarten Geheimnis-Anker ergänzt: 0 bestanden, 1 fehlgeschlagen, 23 übersprungen; 1,54 s; Exitcode 1. |
| GREEN / REFACTOR | Nur Anker und Themenversion angepasst; 24 Inhaltsprüfungen bestanden, 1,56 s, Exitcode 0. Keine weitere Umstrukturierung nötig. |
| Abschließende Pflichtsuite | 130 Unit-/Komponentenprüfungen (8,03 s), 32 Inhaltsprüfungen (1,79 s), 76 E2E-Prüfungen (51,04 s), jeweils Exitcode 0. Format, Lint, Typecheck, Runner-Selbsttests, Architektur, Lizenzen und Build bestanden, jeweils Exitcode 0; 1,79 / 0,84 / 0,74 / 0,60 / 2,20 / 0,49 / 0,94 s. Audit: 0 Sicherheitslücken, 1,78 s, Exitcode 0. |
| Lokaler Browser | Codex In-App-Browser unmittelbar vor Commit: Schnellfilter „API-Key“ zeigt den korrigierten GitHub-Anker. Auswahl öffnet dasselbe Thema; die Detail-Randnotiz zeigt den neuen Text. Desktopbreite geprüft, temporäre Viewport-Vorgabe zurückgesetzt. |
| Abnahme | Manuelle Nutzerprüfung und Freigabe erfolgt. Umsetzung vollständig; Specs werden mit den jeweiligen fachlichen Änderungen archiviert. |

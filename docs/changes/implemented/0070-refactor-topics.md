## Fowler-Refactorings: Themen

Als Entwickler möchte ich die Vertikale `topics` leichter verstehen und ändern können.
Die folgenden statisch ermittelten Befunde vor Umsetzung am aktuellen Stand bestätigen;
Kandidaten sind keine nachgewiesenen Funktionsfehler. Innerhalb der Prioritäten in
kleinen, verhaltenserhaltenden Schritten vorgehen und überschneidende Umbauten bündeln.
Hoch: vor der nächsten größeren Erweiterung; mittel: bei der passenden Änderung.

| Priorität | Befund / Smells und Ausgangspunkt | Konkretes Refactoring | Umsetzungsrisiken |
| --- | --- | --- | --- |
| Hoch | Überladener `TopicBrowser`: Long Function, sinngemäß Large Class, Divergent Change (`src/verticals/topics/TopicBrowser.tsx`, `TopicBrowser`). | `TopicList`, `LearningPathPicker` und `TopicDetails` extrahieren; Filterberechnung und Navigation in getrennte Hooks beziehungsweise reine Funktionen verschieben. `TopicBrowser` verbindet die Teile. | DOM-Änderungen beeinflussen CSS, Fokus, Accessibility und Scrollverhalten. Nicht lediglich die Komplexität in zahlreiche Props verschieben. |
| Hoch | Ansichtenwechsel verteilt: Shotgun Surgery, Repeated Switches (`mobileView`, `supplementaryView`, Öffnungsfunktionen, Rendering und `TopicBrowser.css`). | Benannten Ansichtstyp und gemeinsames Modell ergänzender Ansichten einführen; Hilfe und Impressum über eine Zuordnung rendern und eine gemeinsame CSS-Kennung ergänzender Ansichten verwenden. | Desktop und Smartphone behandeln Auswahl und Sichtbarkeit unterschiedlich; Unterschiede und Browser-Rückweg erhalten. |
| Mittel | Wiederholte Filterübergänge: Duplicated Code, Data Clumps, Repeated Switches (`toggleFilter`, `selectPath`, `toggleSelectedPath`, `changeQuickFilter`). | Reine Funktion `transitionFilter` für nächsten Filter, weiterhin gültige Themenauswahl und erforderlichen Ansichtswechsel extrahieren; Handler verwenden dieselbe Übergangslogik. | Alle Pfade, keine Auswahl und Themenfilter haben unterschiedliche Bedeutungen; weder Themen verstecken noch Auswahl zu früh löschen. |
| Mittel | Implizite Scrollaufträge: Mutable Data, Temporary Field, Data Clumps (`anchor`, `scrollToPath`). | Einen diskriminierten Scrollauftrag für keine Aktion, Positionsbewahrung oder Sichtbarmachen gefilterter Themen einführen; ein Hook verarbeitet und verbraucht ihn. | Layout-, Scroll- und Fokusreihenfolge erhalten; Sprünge, doppelte Ausführung und verlorenen Fokus verhindern. |
| Mittel | Fokuslogik kennt DOM-Innereien: Duplicated Code, Insider Trading als Kandidat (`querySelector` in Layout-Effekt und `clearFilter`, Ausschlussselektoren in CSS). | Direkte Themenbutton-Refs und `focusTopic(id)` einführen; ausdrückliche Buttonklasse statt Ausschluss anderer Aktionen verwenden. | Refs bei Filterung und Entfernen aufräumen; CSS-Spezifität und Fokusziel können sich ändern. |
| Mittel | Bildschirmgrenze mehrfach gepflegt: Shotgun Surgery, Duplicated Code (`TopicBrowser`, `useBrowserBack`, CSS: 799/800 px). | TypeScript-Abfragen über gemeinsamen `useNarrowViewport`-Hook beziehungsweise dieselbe Media-Query-Konstante führen; Übereinstimmung mit CSS durch gezielten Vertragstest sichern. | Grenzwerte und Resize-Ereignisse erhalten. CSS und TypeScript bleiben getrennte Repräsentationen; der Test sichert ihre Kopplung. |
| Mittel | Pfadidentität über Position: Primitive Obsession (`PathFilter`, `paths.indexOf`, React-Keys). | Stabile `LearningPathId` einführen; Filter und Keys verwenden IDs, eine Map löst sie auf. | IDs eindeutig und dauerhaft halten; Identität nicht mit Sortierreihenfolge verwechseln. |
| Mittel | Fachliche Katalogoperationen in der UI: Feature Envy als Kandidat (`orderedPaths`, `pathsFor`, `activePaths`). | Reine interne Funktionen `sortLearningPaths`, `pathsForTopic` und `resolvePathFilter` extrahieren. | Lexikografische Reihenfolge einschließlich kürzerer Präfixe erhalten; keine versteckten React-Zustandsabhängigkeiten schaffen. |
| Mittel | Veränderliche Kataloge: Global Data, Mutable Data (`topics.ts`, `learningPaths.ts`, `topicContract.ts`). | Themen, Quellen, Pfade und verschachtelte Arrays durchgängig `readonly` typisieren; vor Sortierungen kopieren. | Mutierende Testaufbauten brauchen eigene Kopien; TypeScript bietet keine Laufzeitsperre. |
| Mittel | Inhaltsfelder mehrfach aufgezählt: Duplicated Code (`matchesQuickFilter`, `validateTopics`, `topicSections`). | Typisierte Abschnittsliste mit Feldschlüssel und Überschrift für Suche, Vollständigkeitsprüfung und Darstellung verwenden. | Künftige Felder sind eventuell nicht zugleich sichtbar, durchsuchbar und verpflichtend; Eigenschaften bei Bedarf getrennt beschreiben. |
| Mittel | Zeitwerte als Strings: Primitive Obsession (`TopicSource.duration`, `learningSegment`, redaktionelle Datumswerte). | Bestehende Zeitformatprüfung und Umrechnung in `parseDuration` kapseln; Validierung nutzt geparste Sekunden. Datumsprüfung zentralisieren, öffentliches Inhaltsformat erhalten. | Akzeptierte Werte nicht nebenbei verändern. Strengere Kalender- oder Formatregeln sind eine separat zu spezifizierende Verhaltensänderung. |

- Abgrenzung: Fachlichkeit bleibt in `topics`; keine neue Abhängigkeit und keine Inhaltsänderung allein für das Refactoring. Den Lerncheck-Vertrag mit der App-Story abstimmen.
- Abnahme: Bestehendes Filter-, Pfad-, Ansichts-, History-, Fokus- und Scrollverhalten auf Desktop und Smartphone erhalten; passende Unit-/Komponenten- und E2E-Nachweise nach Qualitätsstrategie. Erledigte oder begründet verworfene Kandidaten in der aktiven Spec festhalten; genau ein abschließendes Subagentenreview gemäß Reviewvertrag.

## Ziel, Entscheidungen und Risiken

Alle am aktuellen Stand bestätigten Kandidaten einschließlich mittlerer Priorität umsetzen. Vertikale topics. Auf dem Ausgangsstand waren zwei readonly-Eingabetypanschlüsse in learning-checks erforderlich. Nach dem Rebase besitzt origin/main dafür bereits den gemeinsamen readonly-SourceOwner; beide Validatoren bleiben auf dessen unverändertem Remote-Stand. Der endgültige Story-Diff betrifft nur topics. Keine neue Abhängigkeit und keine inhaltlichen Änderungen. Lerncheck-Komposition und öffentliche Einstiegspunkte erhalten. Verhaltenserhaltende interne Strukturverbesserung mit browserseitigem Nutzen: unveränderte Bedienung bei besser wartbaren Filtern und Ansichten.

Bestätigt: gebündelte UI/Navigation, positionsbasierte Pfade, wiederholte Filterübergänge, Scroll- und Fokusaufträge, doppelte Bildschirmgrenze, mutable Katalogtypen, Abschnitts- und Zeitvalidierungsduplikate. Stabile Pfad-IDs bleiben unabhängig von Namen und Sortierung. Datumsvalidierung behält die bisherige reine Formatprüfung; keine strengere Kalenderprüfung. Readonly ist ein Typvertrag, keine Laufzeitsperre.

Risiken: History bei Resize, Fokus/Scrollreihenfolge, volle/keine Pfadauswahl und unveränderte Quellenvalidierung. Bestehende DOM-Struktur und CSS-Wirkung bewahren.

## Abnahme

- Alle genannten Kandidaten umgesetzt oder konkret begründet verworfen.
- Filter, Auswahl und Pfadidentität einschließlich Umordnung erhalten; Sortierung mit kürzeren Präfixen unverändert.
- Desktop/Mobil: ergänzende Ansichten, Browser-Rückweg, Listenpräferenz, Fokus und Scrollen unverändert.
- Pflichtsuite, genau ein fokussiertes Subagentenreview und lokaler Browserablauf vor Nutzerabnahme.

## Umsetzung und Nachweise

| Teil-Feature / Schritt | Nachweis |
| --- | --- |
| RED: Filter- und Formatverträge | Vier Tests mit minimalen Platzhaltern schlagen an Sortierung, Auswahlgültigkeit und akzeptierten Zeit-/Datumswerten fehl. Vorheriger Importfehler allein zählt nicht als fachlicher RED-Nachweis. |
| GREEN: reine Funktionen | 15 gezielte Unit-Tests einschließlich vorhandener Quellenvalidierung bestanden, Exitcode 0. |
| RED: Pfadidentität in der Oberfläche | Komponententest zeigt falschen aktiven Pfad nach Umordnung der Definitionen. |
| GREEN: UI und Navigation | Komponenten getrennt; Filterübergänge, direkter Themenfokus und diskriminierte Scrollaufträge in Hooks. Pfadumordnung im anschließenden Komponentenlauf bestanden. |
| RED: Bildschirmgrenze | Vertragstest mit absichtlich abweichender Konstante erkennt fehlende CSS-Übereinstimmung. |
| RED: neue ID-Invariante | Leere und doppelte Pfad-IDs werden zunächst fälschlich als gültig angenommen. |
| GREEN: vollständige Themen-Vertikale | 87 Tests bestanden, Exitcode 0, 13,05 s. Enthält Pfadumordnung, ID-Validierung, Bildschirmgrenzenvertrag und alle bisherigen Komponenten-/Katalogtests. |
| Typvertrag | readonly bis in Inhalts-, Quellen-, Metadaten-, Segment- und Pfadfelder; Typprüfung nach Anpassung der lesenden Lerncheck-Eingabetypen bestanden. |

Alle elf Kandidaten umgesetzt: Komponentenextraktion; benannter Ansichtstyp und gemeinsame Zuordnung/CSS-Kennung ergänzender Ansichten; transitionFilter; diskriminierter Scrollauftrag; direkte Button-Refs und Buttonklasse; gemeinsame Bildschirmgrenze mit CSS-Vertragstest; gespeicherte stabile LearningPathId; reine Katalogoperationen; readonly-Katalogtypen; gemeinsame typisierte Abschnittsliste; gekapselte Zeit-/Datumsformate. Keine Kandidaten verworfen.

Unverändert: Quellentexte/-URLs, redaktionelle Daten, Inhaltsformat und Datums-/Dauerakzeptanz. Daher keine neue fachliche Quellenprüfung erforderlich. Pfad-IDs sind einmalig gespeicherte interne Kennungen; ihre Nummern werden bei Umordnung oder Umbenennung nicht neu vergeben. Nur deren technische Eindeutigkeit wird zusätzlich validiert.

## Einmaliges Subagentenreview

Fokussiertes, ausschließlich lesendes Review gegen den Story-Basisstand einschließlich aller neuen Dateien und der zwei readonly-Anschlüsse. Schwerpunkt: elf Kandidaten, Fowler-Smells, unverändertes Filter-/History-/Fokus-/Scrollverhalten und Formatakzeptanz. Ergebnis: keine belegbaren Verbesserungsvorschläge oder Regressionen; keine Umsetzungen oder Ablehnungen erforderlich. Keine zweite Reviewrunde. Anschließend nur Testkorrekturen: Funktionssignatur im CSS-Vertragstest für Lint und vorhandenen Katalog-Fingerprint auf seine zugesagte fachliche Aussage (Namen und Mitgliedschaften) beschränkt.

## Lokaler Browsernachweis

Codex In-app-Browser mit schmalem Viewport unter http://127.0.0.1:5374/: Listenansicht auf Themen umgestellt, Grundlagenpfad gewählt, Schnellfilter Verantwortung kombiniert, Thema geöffnet und über Browser-Zurück zur Liste zurückgekehrt. Danach Hilfe und Impressum über denselben Navigationsablauf geöffnet und zurückgekehrt. Ergebnis: jeweils richtige Ansicht und Rückweg; Suchtext, Pfadfilter und Themenzähler bleiben erhalten. Visueller Nachweis der gefilterten Liste außerhalb von Git gespeichert. Die automatisierten Desktop-/Mobil-E2E sichern zusätzlich Resize, Fokus und Scrollwiederherstellung.

## Abschließende Prüfungen

| Prüfung am endgültigen Stand | Ergebnis |
| --- | --- |
| Format / Lint / Typen | Alle grün, jeweils Exitcode 0. |
| Runner-Selbsttests | 11 bestanden, Exitcode 0. |
| Vollständige Unit-/Komponentensuite | 170 bestanden, 1 gezielt übersprungen, 52,09 s, Exitcode 0; Silent-Runner mit maximal zwei Workern. |
| Inhaltsvalidierung | 27 bestanden, 6,08 s, Exitcode 0. |
| Vollständige Desktop-/Mobil-E2E | 82 bestanden, 137,76 s, Exitcode 0; Silent-Runner mit zwei Workern. |
| Architektur / Lizenzen / Build | Alle grün, jeweils Exitcode 0. |
| Audit | 0 bekannte Schwachstellen, Exitcode 0; unveränderte Abhängigkeiten. |
| Vertikalgrenze | Aktueller Diff einschließlich neuer Dateien mit assertCommitScope geprüft: genau topics und learning-checks, Exitcode 0. Prüfung des künftigen Commits folgt beim Commit. |
| Diff-Whitespace | Grün, Exitcode 0. |

**Ausdrücklich vereinbarte Prüfausnahme:** Der unveränderte Test `serializes real Windows hook processes and preserves an interrupted story` überschreitet auch isoliert außerhalb der Sandbox sein festes Zeitlimit. Der Entwickler hat ihn für diese Story ausdrücklich ausgenommen, weil die Korrektur in einem anderen Branch erfolgt. Der finale Namensfilter überspringt ausschließlich diesen Test; Schutzskripte und Testdatei bleiben unverändert. Ein anfänglicher weiterer Infrastruktur-Timeout tritt bei begrenzter Parallelität nicht mehr auf. Keine weitere Prüfung ausgenommen.

**E2E-Korrektur:** Erster Gesamtlauf 81/82 bestanden. Desktop-History deckte auf, dass ein noch nicht gerenderter Media-Query-Zustand beim sofortigen Browser-Rückweg nach Resize die Themenansicht erneut öffnen konnte. Der Layout-Effekt liest dafür wieder die aktuelle Media-Query; derselbe Hook-Zustand löst weiterhin Resize-Updates aus. Der gezielte Lauf aller vier Desktop-History-Tests danach grün (49,04 s, Exitcode 0). Keine zweite Reviewrunde gemäß Reviewvertrag. Abschließender Gesamtlauf auf endgültigem Stand vollständig grün; Nachweis in der Tabelle.

Nach der Resize-Korrektur Themenöffnung und Browser-Rückweg im endgültigen Stand im In-app-Browser erneut geprüft: Filter und Auswahl bleiben korrekt erhalten.

Positive manuelle Nutzerabnahme und gemeinsame Freigabe erfolgt. Commit, Rebase auf den aktuellen origin/main und Push ausdrücklich freigegeben.


## Abgleich mit aktuellem origin/main

Rebase auf den frisch geladenen Remote-Stand. Konflikte fachlich zusammengeführt: ausschließlich diese Themen-Story aus dem aktuellen Backlog entfernen; neuen expliziten Lerncheck-Statusvertrag in TopicBrowser und Navigationshook übernehmen; vorhandenen gemeinsamen readonly-SourceOwner erhalten; beide Regressionstests bewahren. Keine zweite Reviewrunde. Die Korrektur des Windows-Testlimits liegt inzwischen auf origin/main; die vorherige Prüfausnahme wird im abschließenden Lauf nicht mehr benötigt.

Nachweise auf dem rebasierten Stand: Format, Lint, Typen und 11 Runner-Selbsttests grün; vollständige Unit-/Komponentensuite 178 bestanden ohne Überspringen (59,38 s, Exitcode 0); Inhaltsvalidierung 28 bestanden (2,02 s, Exitcode 0); Audit 0 bekannte Schwachstellen, Exitcode 0. Architektur, Lizenzen und Produktionsbuild ebenfalls grün, jeweils Exitcode 0. Vollständige Desktop-/Mobil-E2E: 82 bestanden, 100,12 s, Exitcode 0. Alle Prüfungen nach dem Rebase ohne Ausnahme grün. Abschließendes Fetch bestätigt den unveränderten aktuellen origin/main als direkten Elternstand des Story-Commits. Finaler Story-Diff betrifft ausschließlich die Vertikale topics. Manuelle Abnahme und Freigabe erfolgt.

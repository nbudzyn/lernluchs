# Story-Backlog

Dieses Backlog enthält nur geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; danach wird sie aus dem Backlog entfernt. Die Spec dokumentiert RED → GREEN je Teil-Feature und ein Subagentenreview nach dem letzten GREEN der Story; reine Dokumentations-Stories sind vom Review ausgenommen.

Pro fachlichem Commit gelten höchstens zwei Vertikalen; eine Ausnahme braucht eine eigene Spec mit Begründung und Architekturtests. Zentrale
Dokumente werden erst mit der jeweiligen Umsetzung knapp um die dann geltenden Entscheidungen und nachgewiesenen Prüfungen ergänzt.


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

## Fowler-Refactorings: Lernchecks

Als Entwickler möchte ich Ablauf, Bewertung und Darstellung in `learning-checks`
getrennt ändern können. Die folgenden Befunde haben mittlere Priorität; vor
Umsetzung bestätigen und überschneidende Umbauten bündeln.

| Priorität | Befund / Smells und Ausgangspunkt | Konkretes Refactoring | Umsetzungsrisiken |
| --- | --- | --- | --- |
| Mittel | Ablauf, Bewertung und Darstellung vermischt: Long Function, Divergent Change, Feature Envy als Kandidat (`src/verticals/learning-checks/LearningCheck.tsx`). | Reine Bewertungsfunktionen, `useLearningCheck` für den Ablauf sowie Komponenten für Frage und Ergebnisübersicht extrahieren. | Bestehensmeldung und Speicherung genau einmal ausführen; Zufallsaufrufe, Fragenreihenfolge und Fokuswechsel erhalten. |
| Mittel | Checklänge mehrfach kodiert: Shotgun Surgery, Duplicated Code (`chooseQuestions`, Abschluss, letzte Antwort, Anzeige). | `QUESTIONS_PER_CHECK` einführen und Auswahl, Abschluss, letzte Antwort sowie Anzeige daraus ableiten; unabhängige Zahlen 5 und 4 entfernen. | Zu kurze Pools nicht durch Ableitung aus der tatsächlich gewählten Menge versehentlich als gültigen Check behandeln. |
| Mittel | Endzustand über optionale Werte verteilt: Temporary Field, Primitive Obsession (`congratulation`, `saveSucceeded`, Antworten). | Diskriminierten Zustand `answering`, `passed`, `failed` einführen; Glückwunsch und benannter Speicherstatus gehören zu `passed`. | Fehlende optionale Speicherung von fehlgeschlagener Speicherung unterscheiden; Antworten und Phase konsistent halten. |
| Mittel | Originale Fragenpools und Themen-IDs herausgegeben: Mutable Data, Global Data (`questionPools.ts`). | Unveränderliche Poolansichten und Themen-ID-Liste anbieten; gemischte Arrays weiterhin lokal erzeugen. Mit Shared-Vertrag koordinieren. | Auch verschachtelte Optionen schützen; Kopien bei jeder Abfrage wären zusätzliche Laufzeitkosten. |
| Mittel | Doppelte `SourceOwner`-Definition: Duplicated Code (`validateQuestionPool.ts`, `validateQuestionPools.ts`). | Ein internes Vertragsmodul für beide Validatoren einführen. | Typ nicht unnötig nach Shared verschieben oder an interne Themenstrukturen koppeln. |

- Abgrenzung: Verhalten und Frageninhalte erhalten; die unveränderlichen Typen mit der Shared-Story abstimmen und nicht zweimal implementieren.
- Abnahme: Auswahl, Mischen, Bewertung, Abschluss, optionale Speicherung, Fehleranzeige und Fokus durch passende bestehende und gezielt ergänzte Prüfungen absichern; genau ein abschließendes Subagentenreview gemäß Reviewvertrag.

## Fowler-Prüfung: Hilfe

Als Entwickler möchte ich die Vertikale `help` anhand der 24 Fowler-Smells bewerten,
ohne künstlichen Änderungsbedarf zu erzeugen. Bisher gibt es keine überzeugenden
Befunde hoher oder mittlerer Priorität; niedrig priorisierte SVG-Duplikate sind
nicht Teil dieser Story. Deshalb ist derzeit kein konkretes Refactoring beauftragt.

- Umfang: Vor Umsetzung gezielt `src/verticals/help/` und zugehörige Tests auf belegte Befunde hoher oder mittlerer Priorität prüfen. Nur bei einem neuen Beleg konkretes verhaltenserhaltendes Refactoring samt Priorität und Risiken in der aktiven Spec festlegen.
- Risiken: Unnötige Zusammenführung von Icons könnte die bewusst unabhängige Vertikale an andere Bereiche koppeln; reine Text- oder DOM-Umbauten können Darstellung und Accessibility beeinflussen.
- Abnahme: Entweder konkret belegte Verbesserungen mit passenden Prüfungen umsetzen oder ohne Codeänderung schließen. Keine niedrigen Befunde aufnehmen und keine Refactoring-Quote erfüllen. Das eine Subagentenreview nach Reviewvertrag ist bei einer produktrelevanten Umsetzung am Ende durchzuführen; bei rein dokumentiertem Ergebnis gilt die Dokumentationsausnahme.

## Fowler-Refactorings: Shared

Als Entwickler möchte ich versehentliche Änderungen gemeinsam genutzter Fragen
verhindern. Mittlere Priorität: Mutable Data im Vertrag
`src/shared/question.ts` (`Question`, `AnswerOption`, `options`).

- Konkretes Refactoring: Felder und verschachtelte Optionsarrays unveränderlich typisieren. Zusammen mit den unveränderlichen Poolzugriffen der Lernchecks-Story abstimmen; Mischfunktionen akzeptieren unveränderliche Eingaben und erzeugen neue Arrays.
- Risiken: Alle Verbraucher und Testdaten sind vom Typvertrag betroffen. Oberflächliches `readonly` genügt nicht für verschachtelte Daten; TypeScript bietet allein keine Laufzeitabsicherung.
- Abnahme: Verbraucher kompilieren ohne Mutation der Originaldaten; Auswahl und Mischen bleiben unverändert. Passende Prüfungen und genau ein abschließendes Subagentenreview gemäß Reviewvertrag. Keine Fachlogik nach Shared verlagern; bereits in der Lernchecks-Story erledigte Vertragsteile nicht doppelt umsetzen.

## Prüfen, dass Hooks auch ohne Einträge im .codex-USER-Verzeichnis funktionieren
Prüfen, dass Hooks auch ohne Einträge im .codex-USER-Verzeichnis funktionieren

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

## Code-Review nach jedem GREEN?
Code-Review nach jedem GREEN (nicht nur nach dem letzten)?

## Spracheingabe für Codex probieren
Spracheingabe für Codex probieren
- Verlässlichkeit, Tokenverbrauch
- Separates Tool ("Whisper")?

## Guardrails prüfen: Enthalten sie Allgemeinwissen?
Guardrails prüfen: Enthalten sie Allgemeinwissen? - Dann entfernen
Ziel: Kontext sparen - bei gleichbleibender Code-Ergebnis-Qualität
Keine Liste aller Dateien mit Funden als Zwischenschritt erstellen (ich kann später einzeln prüfen)
Eventuell an zentraler / passender Stelle als Vorgaben notieren

## Content Lists zu Beginn der Guideline-Dateien? 
Content Lists zu Beginn der Guideline-Dateien?
Vorher abschätzen: Spart Tokens?
NICHT beim Story-Backlog! (Soll leicht manuell pflegbar bleiben)

## Lernluchs kryptische oder ähnliche Kapitel zusammenführen (lassen)
Lernluchs kryptische oder ähnliche Kapitel zusammenführen (lassen)

## Teach Skill von Matt Pocock einbinden und nutzen (JavaScript...)
Teach Skill von Matt Pocock einbinden und nutzen (JavaScript...)

## Vor dem Refinement: Explore-Phase
Vor dem Refinement: Explore-Phase (in separatem Agenten, um im Tokens zu sparen und Context Rot im Hauptagenten zu vermeiden?
- Die Explore Phase soll liefern, wie es gerade ist. (Sofern überhaupt nötig.)
- Die Ermittlung von Vorschlägen und der Blick auf die Projektvorgaben liegt beim Hauptagenten.
- 
Abwägung: Um wieviel erhöht sich der Gesamtaufwand?
- Wenn der Subagent alle Projektvorgaben erneut lesen muss - oder wenn der Hauptagent ohnehin alles lesen muss - dann wäre das eher eine Verschlechterung?

## Redaktionelle Metadaten ausdünnen
Status in den redaktionellen Metadaten eines jeden Themas entfernen - auch aus der Anwendung insgesamt.
- Oder ist wird der Status aktuell fachlich verwendet?

"Wiedervorlage" intern erhalten - aber aus der Themen-Detailanzeige entfernen.

Anzeige von veröffentlicht und fachlich geprüft ändern: "September 2026".

Der Entwickler hat außerdem alle Podcast-Links am 11.10.2026 geprüft (manuell - NICHT erneut prüfen!) - setze das Prüfdatum (checkedAt) auf diesen Tag.

## Node 24 für Entwicklung und CI vereinheitlichen

Die derzeit verwendete Node-Version `25.9.0` liegt außerhalb der unterstützten Versionen mehrerer Entwicklungsabhängigkeiten.
Entwicklung und CI sollen eine einheitliche, unterstützte Node-24-Version verwenden; die derzeitigen Engine-Anforderungen verlangen mindestens `24.15.0`.

- Vor der Umsetzung eine eigene Änderungs-Spec anlegen und eine aktuelle, unterstützte Node-24-Patchversion festlegen.
- Lokale Versionsvorgaben, Projektkonfiguration, CI und Entwicklungsdokumentation auf diese Version abstimmen.
- Installation mit `npm ci`, Pflichtsuite und Audit unter Node 24 prüfen; die bisherigen Node-Engine-Warnungen müssen entfallen.
- Getrennt vom Sicherheitspatch umsetzen und committen.

## Generell Subagenten für Kontextintensive Aufgaben einsetzen, wenn danach weitergearbeitet werden soll - oder für klar eingegrenzte Aufgaben, die Fokus brauchen
Generell Subagenten für Kontextintensive Aufgaben einsetzen, wenn danach weitergearbeitet werden soll - oder für klar eingegrenzte Aufgaben, die Fokus brauchen
- Zusätzlichen Context-Bedarf reduzieren.

## Verwendung von nmp prüfen, ggf. regulieren

Verwendung von nmp prüfen, ggf. regulieren

## OWASP Dependency Check einbinden

OWASP Dependency Check einbinden

- Immer? Nach jeder Änderung von... was? Am Ende vor dem Commit? Vor jedem install...?

## OKF einführen?
OKF prüfen (welche Vor- und Nachteile; Tokenverbrauch), ggf. Einführen

## Regelmäßige Aktivitäten planen und zeitgesteuert auf Ausführung hinweisen

- Generell überlegen: Vielleicht eine Liste der regelmäßigen Aktivitäten machen, die einmal täglich geprüft und dann während der Entwicklung
  vorgeschlagen wird?
    - z.B.:
        - Auf Secrets prüfen (z.B. mit TruffleHog?!)
        - Links (Primärquellen und Sekundärquellen) auf Erreichbarkeit und Sicherheitsrisiken prüfen, ggf. ersetzen (Themen höchstens
          minimal anpassen; Fragen bleiben gleich)
        - Aktualisierung der Inhalte prüfen
        - Auf personenbezogene Daten prüfen und anbieten, sie zu entfernen oder zu anonymisieren

Vielleicht eine eigene Datei, die dann durchgegangen wird, wenn ein Kalenderdatum, DAS IN DER ZENTRALEN DOKU STEHT, erreicht oder
überschritten ist? (Dieses Kalenderdatum muss dann nach der Abarbeitung weitergesetzt werden.)

## Zunächst nur Tests der jeweiligen Vertikale laufen lassen?

Nur Tests der Vertikalen laufen lassen? Alle Tests erst, wenn die grün sind? Vor dem Commit immer alle Tests

## NF: Regelmäßig nachfragen

Regelmäßig nachfragen:

- Können wir ein gecodetes kleines Tool gebrauchen, dass dir beim nächsten Mal bei Aufgabe X hilft?
- Würde uns ein eigener Skill helfen?
- Sollte man die Doku fürs nächste Mal anpassen, um Zeit / Tokens zu sparen?

## NF: Akteure klar benennen

Statt User oder Benutzer oder Nutzer wollen wir zukünftig differenzieren:

- Der Lernende: Der Nutzer der installierten Anwendung
- Der Entwickler: Der menschliche User, der die Entwicklung dieser Anwendung steuert
- Die KI: Das LLM, hier in der Regel Codex, die große Teile der Entwicklung durchführt

Bezeichnungen überall umbenennen. Auch ins glossar eintragen, auch mit englischen Übersetzungen.

## Initial in einem Projekt angewendet / umfassend in einem Projekt umgesetzt

Zusätzlich zu "nicht gelernt" / "gelernt" gibt es einen weiteren Status je Thema: Die Praxiserfahrung (--> Glossar!).

Praxiserfahrung wird manuell angegeben - dazu gibt es in der Themenliste (--> Glossar!) ein weiteres Icon rechts neben dem Testfragen-Icon,
das eine kleine Ansicht öffnet.

- Die neue Ansicht ist gestaltet wie die Testfragen-Ansicht (Lernchecks)
- Der Benutzer wählt dort manuell zwischen:
    - Nicht angewendet
    - Initial in einem Projekt angewendet
    - Umfassend in einem Projekt umgesetzt
    - In Leib und Blut übergegangen (bitte weniger emphatisch formuliert)
- Es muss 1 Auswahl getroffen werden, die Auswahl wird sofort gespeichert
- Alternativ kann der User auch abbrechen, denn bleibt die bisherige Auswahl erhalten.

Implizit gilt für alle (alten und neuen) Themen: "Nicht angewendet"

Die Praxiserfahrung wird (analog zum grünen Haken für "gelern") in der Themenliste durch ein Symbol angezeigt.

- Nicht angewendet: Kein Symbol
- Initial in einem Projekt angewendet: Symbol soundso
- Umfassend in einem Projekt umgesetzt: Symbol soundso
- In Leib und Blut übergegangen: Symbol soundso
- Falls nötig werden Symbole nach den Projektregeln als Grafiken erzeugt (oder textuelle Zeichen in einer Farbe)

## Nichtbestehen auf Wunsch lokal speichern

Hat der User einen Lerncheck zu Ende durchgeführunt und NICHT bestanden, erhält er beim Verlassen der Übersicht eine Rückfrage: "Thema auf
nicht bestanden zurücksetzen?"

- (NUR) wenn der User das bestätigt, wird das Bestehen dieses Themas lokal wieder gelöscht. Alle anderen Elemente des Lernstands bleiben
  erhalten!

Der Browser-E2E-Test deckt Nichtbestehen mit und ohne Löschen des Lernstands UND DEN ERHALT ANDERER, BEREITS BESTANDENER THEMEN ab.

Außerdem werden alle Begriffe im Glossar mit genau einem englischen Begriff ergänzt (sofern noch nicht vorhanden). Betroffene englische
Bezeichner werden innerhalb der beiden Vertikalen vereinheitlicht, ohne Fachlogik zu ändern.

Vertikalen: Lernchecks, Lernstand

## Sicherstellen, dass Architektur oder Bibliotheken nicht unbemerkt geändert werden

Sicherstellen, dass Architektur oder Bibliotheken nicht unbemerkt geändert werden. Möglicherweise gewisse Architekturen, Bibliotheken oder
Toolaufrufe verbieten?

## Bereits gestellte Fragen je Thema lokal merken

Die App merkt sich auf dem Gerät je Thema, welche Fragen bereits gestellt wurden. Neue Durchläufe bevorzugen ausschließlich noch nicht
gestellte Fragen, bis der Pool des Themas ausgeschöpft ist. Danach beginnt ein neuer Zyklus. Innerhalb eines Durchlaufs erscheint keine
Frage doppelt.

Die spätere Änderungs-Spec legt fest, wann eine abgebrochene Frage als gestellt gilt, wie ein Rest von weniger als fünf Fragen mit dem
nächsten Zyklus verbunden wird und wie veraltete Fragen-IDs nach Änderungen an Themen oder Fragenpools behandelt werden. Ohne gespeicherten Stand bleibt der
Fragenablauf nutzbar. Browser-E2E-Tests prüfen mehrere Durchläufe, Ausschöpfung, Neustart und Abbruch.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Lokale Fragehistorie und Zyklusregel knapp in Produktstand und Architektur ergänzen.

## Themen auf einer Landkarte erkunden

Die sechs Grundlagenthemen erscheinen als frei navigierbare grafische Landkarte mit fachlichen Querverbindungen. Lernende können jedes Thema
ohne Sperre auswählen. Die vorhandene zugängliche Liste bleibt als Fallback nutzbar, auch wenn die Grafik ausfällt. Die Landkarte liest
Themen und bestätigten Lernstand nur über kleine öffentliche Verträge und delegiert Änderungen an die zuständige Vertikale.
Browser-E2E-Tests prüfen Auswahl, Querverbindung und Listenfallback.

Falls wir inzwischen den 01.12.2026 oder später haben, werden in dieser Story die Quellen der vorhandenen Themen zu `AGENTS.md`,
Research/Plan/Tasks und OpenSpec erneut fachlich geprüft und bei Bedarf aktualisiert. - Falls Datum noch nicht erreicht, dann diesen Auftrag
in die nächste Story verschieben.

Vertikalen: Themen, Landkarte

Dokumentation nach Umsetzung: Landkarte, Fallback und Vertikalgrenzen knapp in Produktstand und Architektur ergänzen.

## App installieren und Kernabläufe offline nutzen

Nach dem ersten erfolgreichen Laden ist die öffentliche GitHub-Pages-App installierbar und zeigt offline Landkarte, Liste, Themen,
Lernchecks und bereits bestätigten Fortschritt. Der versionierte Service-Worker-Cache hält App und Themen einschließlich Fragen je Build
zusammen; Updates mischen keine Build-Stände und überschreiben keinen lokalen Fortschritt. Der öffentliche Build enthält nur App und
Themen, keine persönlichen Daten oder extern nachgeladenen Laufzeitressourcen. Externe Quellen können offline als nicht verfügbar
erscheinen und öffnen sich nur nach bewusster Aktion. Browser- und PWA-Prüfungen decken Erstladen, Offline-Nutzung und kontrollierte Updates
ab. Die neuen PWA-/Offline-Gates werden nach grünem Nachweis in der Qualitätsstrategie dokumentiert.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Installation, Offline-Grenzen, Cache-Strategie und tatsächlich grüne Prüfungen knapp in Produktstand,
Architektur und Qualitätsstrategie ergänzen.

## Kernabläufe und Release auf Zielbrowsern abnehmen

Die vollständige Pflichtsuite ist grün: Lint, Typen, Inhalts- und Schema-Validierung, bekannte Schwachstellen und unzulässige Lizenzen, Produktionsbuild sowie PWA-/Offline-Prüfung. Insbesondere werden
Querverbindungen, Themen und Metadaten, Bestehen und Nichtbestehen mit anderem Fragensatz, bestätigter Fortschritt über Reload,
Offline-Nutzung geprüft. Der GitHub-Pages-Release durchläuft dieselben Pflichtprüfungen; ein fehlendes oder fehlschlagendes Gate verhindert die Veröffentlichung.
GitHub Dependency Review und Dependabot ergänzen die Abhängigkeitsprüfung; Updates werden getrennt getestet und bewusst freigegeben.

Installation und Kernabläufe werden zusätzlich auf Samsung Internet/Android, Chrome und Firefox unter Windows 11 sowie Safari auf einem
aktuellen iPhone geprüft. Browser, Version, Ablauf und Ergebnis werden in der Änderungs-Spec beziehungsweise dem Release-Nachweis
dokumentiert. Die bereits eingerichtete GitHub-Pages-Bereitstellung wird mit der installierbaren Version erneut geprüft. Nach grünem
Nachweis beschreibt die Qualitätsstrategie die tatsächlich eingerichteten Gates und Geräteprüfungen.

Dokumentation nach Umsetzung: Unterstützte Browser, nachgewiesene Abläufe und Release-Gates knapp in Produktstand und Qualitätsstrategie
ergänzen.

## Aktualisierte und ersetzte Themen nachvollziehen

Lernende erkennen bei einem geänderten oder ersetzten Thema das geänderte fachliche Prüfdatum und gegebenenfalls einen Nachfolger. Ein archiviertes
Thema bleibt lesbar, damit frühere Lernschritte nachvollziehbar sind. Redaktionell werden fachliche Prüfung und bloße Textänderung getrennt
erfasst. Tests prüfen Archivierung und Nachfolgerhinweis.

Vertikale: Themen

Dokumentation nach Umsetzung: Archivierungs- und Nachfolgerregeln knapp in Produktstand und redaktioneller Richtlinie ergänzen.

## Persönliche Hinweise zu Themen festhalten

Lernende können zu einem Thema eine lokale Notiz oder einen Fehler- und Aktualitätshinweis festhalten und später wiederfinden. Hinweise
enthalten Themen-ID, Datum und kurze Begründung; sie bleiben ohne bewussten Export auf dem Gerät und gelangen nicht nach Git. Browser-Tests
prüfen Speichern, Wiederfinden und Trennung von den öffentlichen Themen.

Vertikalen: Themen, Lernstand

Dokumentation nach Umsetzung: Lokale Hinweise und ihren Datenfluss knapp in Produktstand, Architektur und redaktioneller Richtlinie
ergänzen.

## Lernziele aus dem eigenen Fortschritt setzen

Lernende können für ein Thema ein persönliches Ziel setzen, ändern und abschließen. Das Ziel zeigt den bestätigten Fortschritt, ohne ihn zu
ersetzen, und bleibt nach Reload erhalten. Browser-Tests prüfen diese Abläufe.

Vertikalen: Lernstand, Lernziele

Dokumentation nach Umsetzung: Lernziele und ihre Beziehung zum Fortschritt knapp in Produktstand und Architektur ergänzen.

## Termine für Lernziele planen

Lernende können einem Ziel einen lokalen Termin geben, ändern oder entfernen und fällige Ziele in der App erkennen. Termine werden nicht
öffentlich übertragen. Browser-Tests prüfen Fälligkeit und Änderungen.

Vertikale: Lernziele

Dokumentation nach Umsetzung: Terminverhalten knapp in Produktstand und Architektur ergänzen.

## Erinnerungen für fällige Lernziele einstellen

Lernende können für ein Ziel eine Erinnerung ein- und ausschalten. Fällige Erinnerungen erscheinen beim Öffnen der App, ohne Zeitdruck oder
Streaks. Browser-Tests prüfen Anzeige und Abschalten.

Vertikale: Lernziele

Dokumentation nach Umsetzung: Erinnerungsregeln knapp in Produktstand und Architektur ergänzen.

## Mutation Testing einführen?

Mutation Testing einführen?

## Benachrichtigungen für Erinnerungen erlauben

Lernende können Benachrichtigungen für bestehende Erinnerungen ausdrücklich aktivieren und wieder deaktivieren. Ohne Berechtigung bleiben
Erinnerungen in der App sichtbar. Die Änderungs-Spec klärt Browserunterstützung und den gewählten Mechanismus; Tests prüfen Zustimmung und
Fallback.

Vertikalen: Lernziele, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Berechtigungen, unterstützte Browser und Fallback knapp in Produktstand, Architektur und Qualitätsstrategie
ergänzen.

## Persönliche Daten exportieren und wiederherstellen

Lernende können Fortschritt, Ziele und Hinweise bewusst als Datei exportieren und auf einem Gerät wieder importieren. Vor dem Import sehen
sie, welche Daten ersetzt oder zusammengeführt würden, und bestätigen die Aktion. Ungültige Dateien verändern keine vorhandenen Daten.
Browser-Tests prüfen Export, Vorschau, Import und Fehlerfall.

Vertikalen: Lernstand, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Exportformat, Importregeln und Datenschutz knapp in Produktstand und Architektur ergänzen.

## Inhaltsversionen von Themen und gelerntem Stand berücksichtigen

Erst mit dieser Story erhalten Themen fachliche Inhaltsversionen. Jede Änderung an einem Thema erzeugt eine neue Inhaltsversion. Zusätzliche
Fragen dürfen jederzeit zu einer bestehenden Inhaltsversion hinzukommen, ohne deren Nummer zu ändern. Quellen und Fragen sind jeweils einer
konkreten Inhaltsversion zugeordnet.

Wird ein Thema beantwortet, wird die zugehörige Inhaltsversion beim Speichern des Lernstands mitgeführt. Die Anzeige unterscheidet, ob ein
Thema in der aktuellen Inhaltsversion oder nur in einer älteren gelernt wurde. Ein späterer Versionswechsel löscht den bisherigen Lernstand
nicht. **Offene Frage für die spätere Spec:** Wird die Version schon nach jeder Antwort oder erst nach bewusster Bestätigung dauerhaft
gespeichert? Die Änderungs-Spec legt außerdem die genaue Versions- und Migrationsregel fest, auch für Lernstand ohne bisherige
Inhaltsversion und für reine Quellenänderungen. Browser-Tests prüfen Lernen, Versionswechsel, ältere Lernstände und zusätzliche Fragen ohne
Versionswechsel.

Bis zur Umsetzung dieser Story gibt es keine fachlichen Inhaltsversionen. Eine technische App- oder Buildnummer der Themen ist davon getrennt.
Die betroffenen Vertikalen Themen, Lernchecks und Lernstand werden für die Umsetzung in Schritte mit höchstens zwei Vertikalen pro
fachlichem Commit geschnitten.

Dokumentation nach Umsetzung: Versionsregeln und Bezug von Fragen, Quellen und Lernstand knapp in Produktstand, Architektur und
redaktioneller Richtlinie ergänzen.

## Persönlichen Zustand ohne Login zwischen Geräten synchronisieren

Lernende können ihren bestätigten persönlichen Zustand bewusst zwischen Geräten abgleichen, ohne Login oder serverseitige
Benutzerverwaltung. Die Änderungs-Spec prüft vor der Implementierung eine sichere, praktikable Lösung und legt Zustimmung,
Konfliktbehandlung, Löschung und Ausfallverhalten fest. Die bestehende lokale Nutzung bleibt unabhängig von einer Verbindung möglich.
Browser-Tests prüfen Abgleich, Konflikt und Offline-Fallback.

Vertikalen: Lernstand, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Tatsächlichen Datenfluss, Grenzen und Sicherheitsentscheidung knapp in Produktstand und Architektur ergänzen.

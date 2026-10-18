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

## Ziel und Nicht-Ziele

Die bestätigten Befunde werden verhaltenserhaltend behoben: Bewertung und Auswahl als reine Funktionen, Ablauf in `useLearningCheck`, Frage und Ergebnis in eigenen Komponenten. Keine Inhalts-, CSS-, Speicher- oder Datenschutzänderung, keine neuen Abhängigkeiten.

## Betroffene Bereiche und Entscheidungen

- Fachliche Vertikalen: `learning-checks`; `topics` erhält ausschließlich einen readonly-Prop-Typ für verfügbare IDs. `app` reicht readonly-Fragen weiter.
- Der Shared-Vertrag `Question`/`AnswerOption` wird einmalig tief readonly typisiert; diese Vertragsarbeit ist damit für die Shared-Story erledigt. Pools werden beim Modulstart eingefroren, nicht pro Abfrage kopiert. Mischfunktionen kopieren ihre Eingaben.
- `QUESTIONS_PER_CHECK` ist die einzige produktive Checklänge. Kurze Pools bleiben unvollständige Checks und dürfen weder Bestehen noch Speicherung auslösen.
- Der Ablaufzustand unterscheidet `answering`, `passed`, `failed`. Nur `passed` enthält Glückwunsch und `not-requested`/`saved`/`failed` als Speicherstatus. Zufall und Speicherung bleiben im Ereignisablauf, außerhalb von React-Zustands-Updatern.
- Beide Validatoren verwenden denselben internen `SourceOwner`-Vertrag. Ihre Prüfregeln bleiben unverändert.

## Risiken und Abnahme

- Fisher-Yates-Aufrufreihenfolge, Frage- und Optionsreihenfolge sowie Glückwunsch bleiben bei gleicher Zufallsfolge identisch; Rendering zieht keinen zusätzlichen Zufall.
- Genau fünf richtige Antworten bestehen; unvollständige oder falsche Antworten speichern nichts. Ein abgeschlossener Check meldet Bestehen und zieht den Glückwunsch genau einmal, auch bei wiederholtem Aufruf alter Antwortaktionen.
- Fehlende optionale Speicherung bleibt von Speicherfehlern unterscheidbar. Bestehende Meldungen, Quellenlinks, Abbruch und Fokus auf jede Frage und das Ergebnis bleiben erhalten.
- Readonly-Typen schützen verschachtelte Daten; runtime-eingefrorene Pools und ID-Listen bleiben über wiederholte Zugriffe identisch. Keine zweite Implementierung in der Shared-Story.
- Browserabnahme: Einen Check per Tastatur öffnen, Fragen beantworten, Ergebnis mit Quellen und Speicherung prüfen, zur Themenliste zurückkehren und einen zweiten Check abbrechen.

## Umsetzung und Nachweise

Umsetzung, genau ein Subagentenreview und abschließende Prüfungen durchgeführt. Manuelle Nutzerprüfung sowie Freigabe für Commit, Integration in den aktuellen Stand von origin/main und Push erfolgt.

- RED: Vertikale Lernchecks, 28 bestanden / 1 fehlgeschlagen (Exitcode 1). Die veröffentlichte ID-Liste war veränderlich; neue Tests für Reihenfolge, Zufallsaufrufe, kurze Pools und fehlenden Speichervertrag bestanden bereits als Verhaltensnachweis.
- Arbeitsort: isolierter temporärer Chat-Worktree auf codex/fowler-learning-checks-isolated wegen gleichzeitiger unabhängiger Entwicklung im dauerhaften Arbeitsplatz.

- GREEN: 32 Lernchecks-Tests bestanden (17,12 s, Exitcode 0), Typprüfung grün. Reine Bewertung prüft exakt fünf richtige Antworten und falsche/unbekannte Optionen an jeder Position; StrictMode-Test prüft doppelte Antwortaktionen und alle drei Speicherstatus.
- Genau ein fokussiertes Subagentenreview gegen Basis 94af87b einschließlich aller neuen Dateien durchgeführt, ausschließlich lesend. Ein Vorschlag niedriger Priorität umgesetzt: Fragen-Snapshot im Auswahltest vor das Rendern gezogen, damit auch initiale Mutationen erkannt werden. Keine weiteren belegten Probleme, keine Ablehnungen und keine zweite Reviewrunde.

- Lokaler Browsernachweis: ChatGPT In-app-Browser, schmale Ansicht unter http://127.0.0.1:5579/. Lerncheck per Tastatur geöffnet, fünf richtige Antworten mit Fokus auf jede nächste Frage; Abschlussüberschrift fokussiert, einmaliger Glückwunsch, Speicherbestätigung und fünf Erklärungen/Quellen sichtbar. Rückkehr fokussiert den Startbutton; zweiter Check per Tastatur abgebrochen, Themenliste wieder sichtbar. Ergebnisdarstellung visuell geprüft.
- Erster Pflichtlauf: Architekturtest erwartete noch die alte Testdateiliste; um checkLogic/useLearningCheck ergänzt. Zwei unveränderte Infrastrukturtests überschritten Zeitlimits bei paralleler Ausführung; Wiederholung mit einem Unit-Worker, ohne Änderung ihrer Zeitlimits oder Logik.

## Abschließender Prüfstatus

Der erste vollständige Lauf vor der Integration bestand aus 168 erfolgreichen Unit-/Komponententests und einem unveränderten Windows-Hook-Test am expliziten 30-Sekunden-Limit (112,22 s, Exitcode 1). Auch die Einzelprüfung außerhalb der Sandbox blieb an diesem Limit rot (31,02 s, Exitcode 1; 19 nicht gewählte Tests übersprungen). Abschluss trotz dieses bekannten Befunds war freigegeben. Der anschließend frisch abgerufene Remote-Stand enthält bereits die separat umgesetzte Korrektur auf 90 Sekunden für den Windows-Integrationstest; produktive Hook-Limits bleiben unverändert. Nach dem Rebase ist die gesamte Pflichtsuite grün:

| Prüfung | Ergebnis |
| --- | --- |
| Format | Vollständige Prüfung grün (2,89 s, Exitcode 0). |
| Lint und Typen | Beide grün (1,79 s / 1,17 s, jeweils Exitcode 0). |
| Silent-Runner-Selbsttests | 11 bestanden (0,80 s, Exitcode 0). |
| Vollständige Unit-/Komponentensuite | 171 bestanden, zwei Worker (59,02 s, Exitcode 0), einschließlich des zuvor scheiternden Windows-Hook-Tests und der integrierten Lernstand-Tests. |
| Inhaltsvalidierung | 28 bestanden (2,22 s, Exitcode 0); Fragen, Antworten, Quellen und IDs unverändert. |
| Architektur | Keine Abhängigkeitsverletzungen, 61 Module / 53 Abhängigkeiten, 4 zusätzliche Vertikalgrenzen-Tests bestanden (2,51 s, Exitcode 0). |
| Lizenzen | Grün (0,56 s, Exitcode 0). |
| Produktionsbuild und Artefaktprüfung | Grün (1,07 s, Exitcode 0). |
| Desktop- und Mobil-E2E | 82 bestanden, zwei Worker (101,24 s, Exitcode 0). |
| Audit | 0 Schwachstellen (3,07 s, Exitcode 0); Nachweis weiter gültig, keine Abhängigkeiten oder Lockfiles geändert. |
| Vertikalgrenze | Der Story-Commit ändert exakt zwei Vertikalen `learning-checks`, `topics` (Exitcode 0). App und Shared zählen nicht mit. |
| Whitespace | Arbeitsbaum und gestagter Diff mit `git diff --check` geprüft, grün. |

Die Story wurde auf den jeweils neu abgerufenen Stand von `origin/main` mit Lernstand-Refactoring, Impressum-Review und explizitem App-Navigationsvertrag rebasiert. Ausschließlich die Backlog-Liste musste zusammengeführt werden; beide abgeschlossenen Stories sind daraus entfernt. Die neue Spec erhielt nach den inzwischen belegten Nummern 0067 und 0068 die Nummer 0069. Keine Codekonflikte, keine weiteren Reviewänderungen und keine zweite Reviewrunde. Der gespeicherte Lernstand bleibt auch nach einem zusätzlichen lokalen Browser-Reload auf diesem kombinierten Stand sichtbar. Zusätzlich nach Integration des App-Vertrags per Tastatur einen Check geöffnet und über Browser-Zurück beendet: Themenliste und gelernter Status sichtbar, Startbutton wieder fokussiert.

Die abschließend geprüften Produktdateien bleiben für Commit und Push unverändert; anschließend werden ausschließlich diese Spec-Nachweise ergänzt. Der lokale Entwickler-Checkout bleibt mit seiner zusätzlichen unabhängigen Dokumentationsarbeit unberührt. Keine neue Abhängigkeit und keine Änderung an Frageninhalten oder persönlichem Speicherformat.

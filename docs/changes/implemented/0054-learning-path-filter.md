## Lernpfade-Filter
Die Themenliste um einen Lernpfade-Filter ergänzen.
Der Lernende soll sofort sehen, dass man nach Lernpfaden filtern kann und (z.B. durch eine "Aufklicken") alle Lernpfade sehen und aus ihnen einen oder mehrere zur Filterung auswählen. Auch mit einer schnellen Möglichkeit zum "Filter zurücksetzen".
Im Startzustand (ungefiltert) soll die Themenliste *nicht* weiter nach unten rutschen.
Der Filter soll in breiter und schmaler Anzeige funktionieren.
Wenn nach Lernpfaden gefiltert ist, soll eine Anzeige "Gefiltert nach" erscheinen, wie bisher auch. Das spricht eigentlich dafür, den Einstieg zum Lernpfadfilter unmittelbar an dieser Stelle anzuzeigen (immer, wenn nicht nach Lernpfaden gefiltert ist)? - Aber: Ich möchte nicht, dass die Themen weiter nach unten rutschen.

Die Darstellung soll der bestehenden Design-Sprache entsprechen und die professionelle Gestaltung der Anwendung erhalten (oder sogar verbessern).

Vor dem Design stell mir Fragen, wie beim Refinement üblich.

Dann beauftrage 3 Subagents und stelle mir die Design-Alternativen vor.

### Refinement

- Mehrere ausgewählte Lernpfade zeigen alle Themen, die in mindestens einem dieser Pfade vorkommen; jedes Thema erscheint nur einmal.
- Die bisherigen Themen-Icons und anklickbaren Pfadnamen behalten ihr Verhalten.
- „Filter aufheben“ leert Lernpfad- und Schnellfilter gemeinsam. Nach Neuladen ist die Lernpfadauswahl leer.
- Die Auswahl soll zur bestehenden Designsprache passen. Empfehlung für die Entwürfe: sofort filtern, entsprechend dem Schnellfilter; die Auswahl bleibt bis zum Schließen offen.
- Betroffene Vertikale: Themen (`topics`); bei nötiger Anpassung der Einführung zusätzlich Hilfe (`help`), damit höchstens zwei Vertikalen.
- Drei Subagents haben die Design-Alternativen „Am Schnellfilter“ (Einstieg auf der bestehenden Labelzeile), „Im Suchfeld“ (geteiltes Textfeld) und „Im Themenkopf“ (Kopfaktion mit fokussierter Auswahlfläche) erstellt. Ausgewählt: „Am Schnellfilter“, weil die volle Eingabebreite erhalten bleibt und die Filter zusammenstehen.
- Die interaktiven Entwürfe wurden in Chromium bei 320 und 736 Pixeln auf alle 14 Pfade, sofortige Mehrfachauswahl, Escape, gemeinsames Zurücksetzen, Rückkehr zur ursprünglichen Listenposition und horizontalen Überlauf geprüft. Dies ist ein Design-Nachweis; aktive Spec, RED und Produktimplementierung folgen nach der Design-Auswahl.
- Der neue, sich windende Lernpfad ersetzt das bisherige Symbol in Themenliste und Hilfe. Gemäß abschließender Nachbesserung steht es wieder am Anfang jeder Themenzeile. Die Icon-Funktion bleibt erhalten.
- Die geöffnete Auswahl übernimmt den bestehenden Filter, auch nach Themen-Icon oder einzelnem Pfadnamen. Beim ersten Öffnen und ohne Filter ist keine Checkbox angehakt. Auch nach Abwahl aller Checkboxen und erneutem Öffnen bleibt die Auswahl leer; die Liste ist dabei ungefiltert.
- Eine manuelle Vollauswahl bleibt während des geöffneten Menüs erhalten. Beim Schließen wird sie zum ungefilterten Zustand; „Gefiltert nach“ entfällt. Beim erneuten Öffnen ist die Auswahl leer. Der Schnellfilter bleibt bei diesen Übergängen erhalten.
- Statt „Mehrfachauswahl – wirkt sofort“ zeigt die Auswahl den Zähler „x / y Lernpfade (a / b Themen)“, bei keiner Auswahl oder vollständiger Themenabdeckung „(alle Themen)“. Der Themenzähler beschreibt die Pfadabdeckung; der Schnellfilter schränkt die Liste zusätzlich ein.
- „Zurücksetzen“ links neben „Schließen“ leert nur die Pfadauswahl bei geöffnet bleibendem Menü. Die breite Themenliste wird rund 30 % breiter. Das Fragezeichen ist auch dort rechts oben sichtbar und schließt das Thema zugunsten der Hilfe; Filter bleiben erhalten.
- Die Hilfe erklärt den Einstieg über „Lernpfade“ am Schnellfilter in einer Zeile. Die bisherigen Zeilen „Beim ersten Besuch …“ und „Der Schnellfilter durchsucht …“ entfallen.
- Auswahl und Zusammenfassung teilen dieselbe Sortierung nach der vollständigen Themenreihenfolge; bei gleichem Anfang steht der kürzere Pfad zuerst. Die Sortierung entsteht einmal pro unverändertem Themen-/Pfadbestand, die Regel wird im Code und in der Inhaltsrichtlinie festgehalten.

## Ziel und Nicht-Ziele

Direkter Zugang zu allen Lernpfaden am Schnellfilter, sofortige Mehrfachauswahl und konsistente Anzeige bestehender Filter. Themen und Hilfe erhalten das gewählte Symbol. Keine neuen Inhalte, Abhängigkeiten, Speichermechanismen oder öffentlichen Vertikalverträge.

Vertikalen: Themen (`topics`) und Hilfe (`help`).

## Verbindliche Lektüre

- [Architektur und Datenschutz](../../governance/durable-rules.md#produkt-und-datenschutz), [Architekturregeln](../../governance/durable-rules.md#architektur-und-änderungen).
- [Themen, Hilfe und übergreifende Grenzen](../../architecture/verticals-and-boundaries.md).
- [Gemeinsame Inhaltsregeln](../../content/editorial-policy.md#gemeinsame-inhaltsregeln): Themen- und Pfadinhalte bleiben unverändert; nur die Sortierregel wird dokumentiert.
- [Testorganisation](../../quality/verification-strategy.md#testorganisation), [Silent-Runner](../../quality/verification-strategy.md#lokale-testaufrufe-und-ausgabe), [Prüfumfang](../../quality/verification-strategy.md#prüfumfang-und-nachweise) und [Pflichtprüfungen](../../quality/verification-strategy.md#derzeit-ausgeführte-ci-prüfungen).
- [TDD und Abschluss](../README.md#tdd-und-spec-nachweise).

## Risiken und Abnahme

1. Der beschriftete Einstieg „Lernpfade“ sitzt in der bestehenden Schnellfilter-Labelzeile. Im ungefilterten Zustand bleibt die Position der Liste erhalten, auch auf 320 Pixeln.
2. Alle Pfade sind als native Checkboxen erreichbar; Auswahl wirkt sofort als Vereinigungsmenge ohne doppelte Themen. Die Schnellfilter-Schnittmenge bleibt erhalten.
3. Keine Auswahl bleibt leer und ungefiltert. Eine Vollauswahl bleibt im offenen Menü vollständig angehakt; erst beim Schließen wird sie aufgehoben, ohne den Suchtext zu löschen. Teilmengen bleiben beim Wiederöffnen bestehen.
4. „Gefiltert nach“ zeigt Teilmengen und bestehende Icon-/Einzelfilter. Ein ausgefiltertes Thema wird geschlossen, durch Rücksetzen nicht wieder geöffnet. „Filter aufheben“ leert beide Filter.
5. Menüzähler „x / y Lernpfade (a / b Themen)“ zählt die Vereinigungsmenge der gewählten Pfade unabhängig vom Schnellfilter. Bei keiner Auswahl oder vollständiger Themenabdeckung steht „(alle Themen)“. „Zurücksetzen“ links neben „Schließen“ leert nur die Pfadauswahl und lässt Menü und Suchtext erhalten. Schließen, Escape und Außenklick funktionieren. Escape gibt den Fokus an den Einstieg zurück. Lange Pfadnamen bleiben lesbar und erreichbar, ohne horizontalen Überlauf.
6. Checkboxen und Zusammenfassung teilen die bisherige vollständige Themen-Sortierung einschließlich kürzerer gemeinsamer Präfixe. Neue oder geänderte Pfade werden automatisch korrekt eingeordnet, ohne eine zweite Reihenfolge zu pflegen.
7. Themenzeile gemäß Nachbesserung: gewundenes Lernpfadsymbol, Text, optionale Gelernt-Markierung, optionaler Lerncheck. Bestehende Filter- und Check-Funktionen bleiben erhalten. Die Hilfe verwendet denselben Symbolentwurf, ergänzt die Einstiegszeile und entfernt die zwei genannten Erklärungen.
8. Die linke Spalte der breiten Ansicht wächst von 32 % auf 42 % (rund 31 % breiter); die zentrierte Gesamtbreite bleibt bei höchstens 88 rem. Bei 1920 × 1080 bleibt rechts genügend Platz für Thema und Hilfe. Das Fragezeichen oben rechts in der Themenliste ist auch breit sichtbar, schließt das gewählte Thema und öffnet die Hilfe, ohne die Filter zu ändern.
9. Lokal in Chromium: ungefilterte Position messen, Menü öffnen, mehrere Pfade auswählen, Suchtext kombinieren, Teilmenge wieder öffnen, Vollauswahl schließen, alle abwählen, Icon-/Einzelpfadfilter übernehmen, beide Filter sowie nur Pfade zurücksetzen und Hilfe auf Desktop/Mobil prüfen. Nachbesserungen bei 1920 × 1080 und 320 Pixeln visuell prüfen.
10. Die Markierungen unterscheiden Maus und Auswahl: Bei Hover mit Maus wird die ganze Themenzeile hinterlegt; beim geöffneten Thema bleibt außerhalb von Hover nur der Textbereich hinterlegt. Ein über das Pfadsymbol aktivierter Filter hinterlegt das Symbol nicht dauerhaft. „Gefiltert nach“ zeigt den aktiven Filter; Funktion und Tastatur-Fokusmarkierung des Symbols bleiben erhalten. Touch-Taps erzeugen keine dauerhafte Hover-Hinterlegung. Beide Listenansichten und Farbschemata verwenden dieselben Regeln.

Die Auswahl bleibt flüchtig auf dem Gerät. Der HTML-Entwurf ist ein Design-Nachweis und ersetzt weder Produktprüfungen noch die manuelle Freigabe. Keine neuen fachlichen Aussagen, daher keine neue Quellenprüfung erforderlich.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN / REFACTOR |
| --- | --- | --- |
| Direkter Einstieg, Auswahlzustände und gemeinsame Sortierung | `npm run --silent test:unit -- tests/verticals/topics/TopicBrowser.test.tsx -t 'Lernpfade-Auswahl\|sorts path names'`: 4 erwartete Fehler, 31 übersprungen, Exitcode 1, 30,56 s. Fachlicher Grund: Der direkte Lernpfad-Einstieg fehlt. | `npm run --silent test:unit -- tests/verticals/topics/TopicBrowser.test.tsx`: 35 bestanden, Exitcode 0, 5,34 s. Gemeinsame Sortierung pro Bestand memoisiert, bestehende Einzelfilter unverändert, manuelle Teil-/Vollauswahl und Schließwege ergänzt. Keine weitere Refaktorierung erforderlich. |
| Symbolposition und Hilfe | `npm run --silent test:unit -- tests/verticals/topics/TopicBrowser.test.tsx tests/verticals/help/TopicHelp.test.tsx -t 'marks only saved topics\|renders its guidance'`: 2 erwartete Fehler, 34 übersprungen, Exitcode 1, 1,60 s. Symbol steht noch vor dem Text; neue Einstiegszeile fehlt in der Hilfe. | Dieselben beiden Dateien vollständig: 36 bestanden, Exitcode 0, 5,56 s. Lucide-route-SVG ohne neue Abhängigkeit in Themen und Hilfe übernommen; ISC-Hinweis unter `public/licenses/lucide-route.txt` wird mit ausgeliefert. Hilfe und Symbolreihenfolge angepasst; keine zusätzliche Refaktorierung erforderlich. |
| Menü vollständig im sichtbaren Bereich | E2E-Filter `opens all paths`: 2 erwartete Fehler, Exitcode 1, 2,14 s; Menü-Unterkante lag auf Desktop bei 812 statt höchstens 712 Pixeln und mobil bei 805 statt höchstens 732 Pixeln. Erweiterter Nachweis nach Vollauswahl mit Schnellfilter: 2 erwartete Fehler, Exitcode 1, 7,73 s; nur 85 % bzw. 89 % des Menüs lagen im Viewport. | Derselbe E2E-Filter: 2 bestanden (Desktop und 320 Pixel), Exitcode 0, 2,99 s. Höhe passt sich bei Öffnen, Auswahl, Suche, Scrollen und Resize an; Kopf und Zähler bleiben beim internen Scrollen sichtbar. |
| Gemeinsame Symbolhöhe nach dem Text | E2E-Filter `keyboard accessible icon`: 2 erwartete Fehler, Exitcode 1, 1,92 s; Symbolmitten lagen bei mehrzeiligen Themen etwa 10 Pixel auseinander. | Derselbe Filter: 2 bestanden, Exitcode 0, 1,99 s. Pfadsymbol mittig neben Gelernt-/Check-Symbol ausgerichtet; rein lokale CSS-Anpassung. |
| Nachbesserung: Themenzähler, führendes Symbol und Hilfezugang | Unit-Filter `Lernpfade-Auswahl\|marks only saved topics\|shows the guidance`: 6 erwartete Fehler, 1 bestanden, 30 übersprungen, Exitcode 1, 31,52 s. Themenzusatz fehlt, Symbol steht nach dem Text und Hilfeeinstieg verschwindet nach Themenauswahl. | Themen-Komponentendatei vollständig: 37 bestanden, Exitcode 0, 7,84 s. Pfadmenge für Themenzähler und Schnellfilter gemeinsam abgeleitet; führendes Symbol und Hilfezugang angepasst. |
| Nachbesserung: nur Pfade zurücksetzen | Unit-Filter `resets only the path selection`: 1 erwarteter Fehler, 36 übersprungen, Exitcode 1, 2,33 s; „Zurücksetzen“ fehlt. | In obigem grünen Komponentenlauf enthalten. Gemeinsame Rücksetzfunktion für Pfadauswahl und globales Zurücksetzen; Menü und Suchtext bleiben beim lokalen Rücksetzen erhalten. |
| Nachbesserung: breite Aufteilung und Hilfeablauf | E2E-Filter `wide list gains`: 2 erwartete Fehler, Exitcode 1, 4,80 s; linke Spalte ist noch 32 % statt 42 % breit. | Derselbe Filter: 2 bestanden, Exitcode 0, 3,54 s; 1920 × 1080, Hilfe öffnet nach Themenauswahl und Filter bleiben erhalten. Erweiterter Menüablauf `opens all paths`: 2 bestanden, Exitcode 0, 4,89 s; Zähler, tastaturbedienbares Rücksetzen links neben Schließen, Suchtext, Vollauswahl und 320-Pixel-Menü geprüft. Ein mehrdeutiger Text-Locator wurde auf exakte Übereinstimmung begrenzt. |
| Nachbesserung: eindeutige Zeilenmarkierungen | E2E-Filter `distinguishes row hover`, Desktop: 1 erwarteter Fehler, Exitcode 1, 33,59 s. Hover hinterlegt nur Text statt Zeile; aktives Pfadsymbol und ausgewählte Zeile sind dauerhaft hinterlegt. Mehrere Soft-Assertions mit je 5 Sekunden erreichten die 30-Sekunden-Testgrenze. | Filter `distinguishes row hover\|keyboard accessible icon`: 4 bestanden, Exitcode 0, 5,96 s. Hover-Regel auf Zeile und Mausgeräte begrenzt, Auswahl auf Textbereich begrenzt, dauerhafte Icon-Hinterlegung entfernt. Tastatur-Fokus und Filterfunktion erhalten. Assertions für unmittelbar wechselnde CSS-Zustände auf 500 ms begrenzt. Anschließend den neuen Test auf echte schmale Touch-Ansicht erweitert; beide Listenansichten, beide Farbschemata sowie Auswahl/Filter/Rücksetzen in der finalen vollständigen E2E-Suite grün. |

### Abschließende Prüfungen

- `npm run check`: nach allen Nachbesserungen einschließlich Zeilenmarkierungen bestanden, Exitcode 0, 77,5 s. Format, Lint, Typen, Runner-Selbsttests, 135 Unit-/Komponententests (50,84 s), zusätzliche Inhaltsvalidierung mit 32 Tests (2,51 s), Architektur, Lizenzen und Produktionsbuild sind grün. Der Lauf erfolgte parallel zur vollständigen E2E-Suite.
- `npm run --silent test:e2e`: nach allen Nachbesserungen einschließlich Zeilenmarkierungen 82 bestanden, Exitcode 0, 62,35 s; beide Chromium-Projekte einschließlich 320-Pixel-Filterablauf, 1920-Pixel-Hilfeablauf und eindeutiger Markierungen in beiden Listenansichten/Farbschemata sowie auf Touch-Geräten.
- `npm audit --audit-level=high`: 0 Schwachstellen, Exitcode 0, 8,8 s. Abhängigkeiten und Lockfile blieben seit diesem Nachweis unverändert.
- Vor den Nachbesserungen: 20 lokale Chromium-Prüfungen bei 1280 und 320 Pixeln bestanden, Exitcode 0, 4,2 s; bestehende Icon-/Einzelfilter, Teil-/Vollauswahl, Suche, Schließwege und Hilfe geprüft. Nach allen Nachbesserungen bei 1920 × 1080 und 320 × 740: 11 lokale Browserprüfungen bestanden, Exitcode 0, 23,2 s; Zähler mit tatsächlicher Themenmenge, lokales Rücksetzen bei offenem Menü, führendes Pfadsymbol, kein horizontaler Überlauf und Hilfe nach Themenauswahl geprüft. Screenshots von breiter Liste, Thema, Hilfe und beiden Menüs visuell geprüft: harmonische Aufteilung und vollständig erreichbare Menüaktionen.
- Nach der abschließenden Markierungskorrektur: 20 lokale Chromium-Prüfungen bei 1920 × 1080 im hellen und dunklen Farbschema bestanden, Exitcode 0, 24,1 s. Unmarkierte Zeile, Hover über Text, ausgewähltes Thema, Hilfe, Filter über Pfadsymbol und Filteraufhebung geprüft; Screenshots zeigen ganze Zeile bei Hover, nur Text bei Themenauswahl und keine dauerhafte Icon-Hinterlegung beim aktiven Filter. Browserbilder und Skript liegen außerhalb von Git.
- Änderungen betreffen nur die Vertikalen Themen und Hilfe. Keine neuen Abhängigkeiten, Inhalte oder öffentlichen Verträge. Prüfprotokolle und Browserbilder bleiben außerhalb von Git.
- Die Nachweise gelten für den abschließenden Produktstand; danach wurden nur Dokumentation und Nachweise ergänzt.

Manueller Test durch den Entwickler: positiv bestätigt. Commit-Freigabe erfolgt.

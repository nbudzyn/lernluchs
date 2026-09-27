# Icon statt "Fragen starten: ..."

## Ziel und Umfang

In der Themenliste zeigen alle sechs derzeit quizfähigen Lerninhalte anstelle des sichtbaren Texts "Fragen starten: ..." ein Icon aus
Fragezeichen und Start-Dreieck. Das Icon steht an der bisherigen Stelle. Der Button und sein Klickverhalten bleiben erhalten.

Das Icon wird eigens aus einfachen SVG-Formen gestaltet. Es werden keine fremden Grafiken, Icon-Bibliotheken oder zusätzlichen Abhängigkeiten
verwendet; die Herkunft des Icons wird in der Änderungs-Spec dokumentiert. Der Button hat weiterhin den zugänglichen Namen und den Tooltip
"Fragen starten: [Kartentitel]" und ist per Tastatur bedienbar.

Ein Browser-Test prüft, dass das Icon bei allen sechs Lerninhalten erscheint und den jeweiligen Lerncheck startet.

Vertikale: Inhaltskatalog

## Risiken und Abnahme

- **Rechte am Icon:** Die SVG-Formen werden im Projekt neu gestaltet. Ihre Entstehung wird vor der Abnahme hier dokumentiert; es werden keine
  fremden Grafikdateien, Icon-Pakete oder zusätzlichen Abhängigkeiten übernommen.
- **Bedienbarkeit:** Für jeden Icon-Button bleiben der zugängliche Name und der Tooltip mit dem jeweiligen Kartentitel erhalten. Tastaturfokus
  und Auslösen per Tastatur werden geprüft.
- **Ungewollte Verhaltensänderung:** Der Browser-Test prüft alle sechs quizfähigen Lerninhalte und den Start des jeweils richtigen Lernchecks.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED: Icon und Bedienbarkeit | `npm test -- --run tests/verticals/catalog/CatalogBrowser.test.tsx` schlug fehl: Dem bisherigen Textbutton fehlte das erwartete `title`-Attribut. Der Test prüft außerdem sechs Icons, unsichtbaren Text und zugängliche Namen. |
| GREEN: Icon und Bedienbarkeit | Eigenes SVG im Button ergänzt, sichtbaren Text entfernt, `aria-label` und `title` mit Kartentitel gesetzt. Der Komponententest war grün: 9 Tests. |
| RED: Browserablauf | `npm run test:e2e -- --grep "each icon button starts" --project=desktop-chromium` schlug fehl: Der bisherige Textbutton hatte keinen Tooltip. |
| GREEN: Browserablauf | Der neue Browser-Test startete bei allen sechs Themen per Tastatur den jeweils passenden Lerncheck. Er war zunächst auf Desktop, anschließend in der vollständigen Suite auf Desktop und Mobil grün: 10 E2E-Fälle. |
| REFACTOR | E2E-Test formatiert. `npm run check` grün: Format, Lint, Typen, 41 Unit- und Komponententests, Inhaltsvalidierung, Architektur, Lizenzen und Build. `npm run test:e2e -- --workers=1` grün: 10 Fälle auf Desktop und Mobil. `npm audit --audit-level=high`: 0 Schwachstellen. |
| Erste Browserprüfung | Im Codex In-app-Browser unter `http://127.0.0.1:4173/` sechs Icon-Buttons in der Themenliste sichtbar; das erste Icon geöffnet und den passenden Lerncheck mit Frage 1 von 5 gesehen. Der Nutzer beanstandete anschließend die Gestaltung und die übergroße Buttonhöhe. |
| RED: Größenkorrektur | `npm run test:e2e -- --grep "match the height" --project=desktop-chromium` schlug fehl: Der Icon-Button war 23 Pixel höher als der Textbutton. |
| GREEN: Größenkorrektur | Icon neu und kompakter gezeichnet, dünnere Konturen und kleinere Buttonfläche gesetzt. Der Höhentest war auf Desktop und Mobil grün. |
| REFACTOR nach Rückmeldung | E2E-Test formatiert. `npm run check` erneut grün: 41 Unit- und Komponententests sowie alle übrigen Pflichtprüfungen. `npm run test:e2e -- --workers=1` erneut grün: 12 Fälle auf Desktop und Mobil. |
| Zweite Browserprüfung | Im Codex In-app-Browser unter `http://127.0.0.1:4173/` die kompakte Icon-Reihe visuell geprüft. Der Nutzer meldete danach unterschiedliche Ober- und Unterkanten sowie zusätzlichen Zeilenabstand und belegte beides mit Screenshots. |
| RED: Zeilenausrichtung | `npm run test:e2e -- --grep "without stretching" --project=desktop-chromium` schlug fehl: Die Oberkanten der Buttons lagen 4,5 Pixel auseinander. Der Test prüft zusätzlich gleiche Unterkanten und gleiche Höhe von Zeilen mit und ohne Icon. |
| GREEN: Zeilenausrichtung | Beide Buttons je Thema in eine gemeinsame Flex-Zeile gesetzt und den Inline-Abstand des Icon-Buttons entfernt. Der Browser-Test war auf Desktop und Mobil grün. |
| REFACTOR nach Layoutkorrektur | Code und E2E-Test formatiert. `npm run check` erneut grün: 41 Unit- und Komponententests sowie alle übrigen Pflichtprüfungen. `npm run test:e2e -- --workers=1` erneut grün: 12 Fälle auf Desktop und Mobil. |
| Abnahme | Im Codex In-app-Browser unter `http://127.0.0.1:4173/` bündige Ober- und Unterkanten und gleichmäßige Zeilenabstände visuell geprüft. Der Nutzer prüfte die überarbeitete Ansicht selbst und bestätigte: „Ja, das ist gut. Du kannst committen.“ |

Das SVG wurde für diese Änderung direkt aus einfachen `path`- und `circle`-Formen gezeichnet: ein Fragezeichen und ein Start-Dreieck.
Es wurde keine fremde Grafik, Vorlage, Icon-Bibliothek oder zusätzliche Abhängigkeit verwendet.

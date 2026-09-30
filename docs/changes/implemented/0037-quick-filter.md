## Schnellfilter

Oberhalb der Themenliste gibt es dauerhaft ein Textfeld. Eingaben in dieses Textfeld filtern die Themenliste:

- Sobald dort ein Zeichen eingegeben ist, werden in der Themenliste nur noch Themen angezeigt, wo der vollständige Text in Titel, Problem,
  Konzept, "Anwendung in der Java- und Webentwicklung" oder "Grenzen des Konzepts" enthalten ist. Groß- / Kleinschreibung ist egal. ("onz d"
  findet "KONZEPT DER".
- Diese Filterung funktioniert zusätzlich (UND-Bedingung) zur Filterung nach Lernpfaden.
- Der Button "Filter aufheben" löscht auch diese Filter-Box.
- Jedes eingegebene oder gelöschte Zeitchen aktualisiert sofort die Liste.
- Sobald dort ein Zeichen eingetragen ist, erscheint auch der Link "Filter aufheben". Wird das rechts angezeigte Thema aus der Liste
  AUSgefiltert, erscheint rechts wieder die Hilfe.
- Quellen werden beim Filter nicht berücksichtigt.

## Ziel, Grenzen und Entscheidungen

Ergänzung: Bei Fokus im nicht leeren Schnellfilter löscht Escape ausschließlich den Suchtext. Der Lernpfadfilter und der Eingabefokus bleiben erhalten. Escape außerhalb des Feldes oder bei leerem Feld verändert die Filter nicht.

Die Themenliste erhält ein beschriftetes Textfeld „Schnellfilter“. Gesucht wird der vollständige Eingabetext als zusammenhängende Teilzeichenfolge innerhalb eines einzelnen Feldes, unabhängig von Groß-/Kleinschreibung. Leerzeichen bleiben Bestandteil der Suche; es gibt weder Wortzerlegung noch unscharfe Suche. Eine leere Eingabe schränkt die Liste nicht ein. Quellen, IDs und Metadaten werden nicht durchsucht. Reihenfolge und Lernpfadfilter bleiben erhalten; beide Filter wirken gemeinsam. Die Suche wird weder gespeichert noch übertragen.

Die Themenauswahl wird verworfen, sobald das ausgewählte Thema nicht mehr sichtbar ist. Das Entfernen des Filters stellt diese Auswahl nicht wieder her. „Filter aufheben“ bleibt ein zugänglicher Button mit Linkdarstellung und setzt beide Filter zurück. Bei null Treffern erscheint ein kurzer Hinweis; das Suchfeld und das Zurücksetzen bleiben erreichbar. Mobil bleibt das bestehende Umschalten zwischen Liste, Thema und Hilfe erhalten.

Betroffene Vertikale: Themen. Keine neuen Abhängigkeiten, keine Änderung an Lerninhalten oder Quellen.

Verbindliche Grundlagen: [dauerhafte Vorgaben](../../governance/durable-rules.md), [Vertikalgrenzen](../../architecture/verticals-and-boundaries.md), [Qualitätsstrategie](../../quality/verification-strategy.md), [Produktstand](../../product/vision-and-scope.md).

## Risiken und Abnahme

- Tests prüfen Treffer in allen fünf Feldern, Groß-/Kleinschreibung, feldinterne Teilzeichenfolgen, Ausschluss von Quellen und Metadaten sowie jede Eingabeänderung einschließlich Löschen.
- Komponenten- und Desktop-/Mobil-E2E-Tests prüfen UND-Verknüpfung, Zurücksetzen beider Filter, null Treffer und Hilfe nach dem Ausfiltern der Auswahl.
- Lokaler Browserablauf: Thema auswählen, durch Text ausfiltern, Suchtext löschen, Lernpfad und Suchtext kombinieren, beide Filter aufheben; Eingabe und Rückwege mobil prüfen.
- Pflichtsuite gemäß Qualitätsstrategie: `npm run check`, `npm run test:e2e`, `npm audit --audit-level=high`; Arbeitsbaum auf Vertikalgrenze und Whitespace prüfen.
- Commit und Archivierung erst nach ausdrücklicher positiver Bestätigung des manuellen Tests durch den Entwickler.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED: Schnellfilter | `npm test -- --run tests/verticals/topics/quickFilter.test.tsx`: alle acht neuen Tests scheiterten fachlich am fehlenden beschrifteten Textfeld „Schnellfilter“. |
| GREEN | Textfeld und flüchtiger Suchzustand ergänzt, fünf Felder als zusammenhängende Teilzeichenfolge durchsucht, Text- und Pfadfilter kombiniert, ausgefilterte Auswahl geschlossen und beide Filter gemeinsam zurückgesetzt. `npm test -- --run tests/verticals/topics`: 82 Tests in neun Dateien grün. |
| REFACTOR | Suchprädikat als private Funktion der Themenansicht gebündelt, gemeinsame Linkdarstellung für beide Zurücksetzen-Positionen verwendet und Testdaten um den vollständigen Inhaltsvertrag ergänzt. Themen-Suite und abschließende Pflichtsuite grün. |
| Browser-E2E | Neue Schnellfilterprüfung unter Desktop-/Mobil-Chromium grün. Gesamte Suite `npm run test:e2e`: 92 Tests grün; einschließlich bestehender Scroll-, Fokus-, Hilfe-, Lernpfad- und Lerncheckabläufe. |
| Pflichtsuite | `npm run check` grün: Format, Lint, Typen, 184 Unit-/Komponententests, 38 Inhaltsvalidierungstests, Architektur einschließlich vier Vertikalgrenzentests, Lizenzen und Produktionsbuild. `npm audit --audit-level=high`: keine Schwachstellen. Keine neue Abhängigkeit. |
| Lokaler Browser | Codex In-app-Browser (Chromium), `http://127.0.0.1:5174/`: Thema geöffnet, zur mobilen Liste zurückgekehrt, durch Text ausgefiltert, null Treffer und mobile Hilfe samt Rückweg geprüft; Lernpfadfilter mit Großbuchstabensuche kombiniert und gemeinsam zurückgesetzt. Zusätzlich Desktopansicht mit 1280 × 900 geprüft: ausgefilterte Auswahl zeigt rechts Hilfe, Zurücksetzen öffnet keine alte Auswahl, „TDD“ zeigt genau ein Thema. Layout und Fokusmarkierung visuell geprüft; temporäre Viewportvorgabe zurückgesetzt. |
| Dokumentation und Umfang | Story nach wortgetreuer Übernahme aus dem Backlog entfernt; Produktstand um den Schnellfilter ergänzt. Nur Vertikale Themen betroffen; keine Änderung an Quellen oder Lerninhalten. |

### Ergänzung: Escape im Schnellfilter

- **RED:** Der neue Komponententest in `quickFilter.test.tsx` scheiterte fachlich: Nach Escape stand weiterhin „Thema 1“ im Feld statt einer leeren Eingabe.
- **GREEN:** Feldlokalen Escape-Handler ergänzt, der bei nicht leerer Eingabe die vorhandene Textänderung mit leerem Text aufruft. Der gemeinsame Zurücksetzen-Handler wird nicht aufgerufen. Themen-Suite: 83 Tests grün.
- **REFACTOR:** Vorhandenen Textänderungsablauf wiederverwendet; keine zusätzliche Filterlogik oder globale Tastaturbehandlung nötig. Tests prüfen auch unveränderten Filter bei leerem Feld, anderen Tasten und Escape außerhalb des Feldes.
- **Pflichtsuite nach Ergänzung:** `npm run check` vollständig grün, nun 185 Unit-/Komponententests; Inhalts-, Architektur-, Lizenz- und Buildprüfung grün. `npm run test:e2e`: alle 92 Tests grün, einschließlich Escape mit erhaltenem Lernpfadfilter und Fokus in Desktop-/Mobil-Chromium. `npm audit --audit-level=high`: keine Schwachstellen.
- **Lokaler Browser:** Im Codex In-app-Browser unter `http://127.0.0.1:5174/` bei Eingabe „TDD“ den zugehörigen Lernpfadfilter aktiviert und Escape im Feld gedrückt. Eingabe danach leer, Fokus weiter im Feld, vier aktive Lernpfade und ihre 20 Themen weiterhin sichtbar. Produktstand ergänzt.

Manuelle Prüfung und ausdrückliche positive Bestätigung durch den Entwickler erfolgt. Unmittelbar vor dem Commit den lokalen Ablauf im Codex In-app-Browser erneut geprüft: „TDD“ eingegeben, Escape leert das Feld bei weiterhin aktivem Lernpfadfilter mit 20 Themen; „Filter aufheben“ stellt alle 46 Themen wieder her. Die vollständig grüne Pflichtsuite nach der Escape-Ergänzung bleibt gültig, da anschließend ausschließlich Nachweise und Abnahmevermerk in dieser Spec ergänzt wurden.

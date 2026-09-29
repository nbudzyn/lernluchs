# Unabhängige Hilfe-Vertikale für die Themenansicht

## Ziel und Nicht-Ziele

Die Hilfe der Themenansicht wird als eigenständige Vertikale ausgeliefert. Sie besitzt ihre Texte, Symbole und Darstellung selbst. Die
Themen-Vertikale verwendet ausschließlich ihren öffentlichen Einstiegspunkt. Die Hilfe importiert weder Themen noch andere App-Vertikalen.
Auf breiten und schmalen Bildschirmen bleibt der sichtbare Ablauf der Story `0031-topic-split-view.md` erhalten.

Keine neue Hilfefunktion und keine zusätzlichen Abhängigkeiten von Drittbibliotheken.

## Architekturentscheidung und Risiko

Die dauerhafte Regel für Vertikalgrenzen verbietet derzeit alle direkten Importe zwischen Vertikalen. Für die ausdrücklich gewünschte
Richtung wird eine enge Ausnahme eingerichtet: `topics` darf nur `help/index.ts` importieren. Alle anderen Vertikalimporte aus `topics`
bleiben verboten. `help` darf keine andere Vertikale importieren. Ein zusätzlicher Architekturtest prüft die tatsächliche Verwendung des
öffentlichen Einstiegspunkts und die Unabhängigkeit der Hilfe. Dependency-Cruiser prüft die Importgrenzen weiterhin beim Build.
Hilfe-eigene Unit- und Browser-Tests liegen unter `tests/verticals/help/` beziehungsweise `e2e/verticals/help/`; Themen-Tests prüfen die
Integration aus Sicht der Themenliste.

Betroffene fachliche Vertikalen: Themen und Hilfe (zwei).

## Prüffähige Abnahme

- Die sechs Hilfe-Texte und Symbole erscheinen auf breiten und schmalen Viewports.
- Die erste Zeile der Hilfe lautet „Klick auf ein Thema öffnet das Thema“.
- Die Hilfe kann allein gerendert werden; sie importiert keine andere App-Vertikale.
- Eigenständige Unit- und E2E-Tests sind der Hilfe-Vertikale zugeordnet.
- Themen importiert die Hilfe nur über deren öffentlichen Einstiegspunkt. Ein Import aus Hilfe-Interna oder eine Rückabhängigkeit lässt
  Architekturtests scheitern.
- Die vollständige Pflichtsuite und der lokale Browserablauf bleiben grün.
- `docs/architecture/verticals-and-boundaries.md` und `docs/architecture/target-architecture.md` beschreiben die neue Vertikale und die
  gerichtete Ausnahme knapp und übereinstimmend.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED | `npm test -- --run tests/verticals/help/TopicHelp.test.tsx tests/architecture/help-boundary.test.ts` rot: Der öffentliche Hilfe-Einstiegspunkt fehlt; der Architekturtest findet keine Hilfe-Vertikale. |
| GREEN | `TopicHelp` mit eigenem Einstiegspunkt und CSS ergänzt; Themen importiert nur `../help`. Gezielte Hilfe-, Themen- und Architekturtests grün (19/19), Hilfe-E2E grün (4/4 über beide Browserprojekte). |
| REFACTOR | Hilfe-Texte und Symbole aus `TopicBrowser` entfernt, Rücknavigation und Ansichtszustand in Themen belassen. Dependency-Cruiser erlaubt allein `topics → help/index.ts` und verbietet Hilfe-Abhängigkeiten auf andere App-Module. Beide Architekturdokumente ergänzt. |
| RED: erste Hilfezeile | `npm test -- --run tests/verticals/help/TopicHelp.test.tsx tests/verticals/topics/TopicBrowser.test.tsx` rot: Die erste Hilfezeile enthält noch den Filtertext statt „Klick auf ein Thema öffnet das Thema“. |
| GREEN: erste Hilfezeile | Gewünschten Text als erstes Listenelement ergänzt; gezielte Tests grün (18/18), Hilfe-Browser-Tests in der vollständigen E2E-Suite grün. |
| REFACTOR: erste Hilfezeile | Die neue Aussage bleibt allein im Hilfe-Baustein; Unit- und E2E-Tests der Hilfe prüfen ihre Position. Code formatiert. |

Pflichtsuite nach der letzten Code- und Teständerung: `npm run check` grün (151 Unit-/Komponententests, 38 Inhaltsprüfungen,
Architektur- und Lizenzprüfung, Build); `npm run test:e2e -- --reporter=dot` grün (80 Browser-Tests);
`npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Drittanbieter-Abhängigkeit.

Lokaler Browsernachweis: Codex In-app-Browser unter `http://127.0.0.1:5173/` mit schmaler Ansicht. Hilfe aus der Liste geöffnet: alle fünf
Texte und drei Symbole sichtbar; danach zur unveränderten Themenliste zurückgekehrt. Die ergänzte erste Zeile ist im Hilfe-E2E-Test
auf breiter und schmaler Ansicht geprüft.

Unmittelbar vor dem Commit im lokalen Codex In-app-Browser unter `http://127.0.0.1:5173/` geprüft: Mobile Hilfe aus der Liste geöffnet;
„Klick auf ein Thema öffnet das Thema“ steht an erster Stelle. Rückweg zur Liste funktioniert. Eigene manuelle Prüfung und positive
Bestätigung durch den Nutzer: erfolgt.

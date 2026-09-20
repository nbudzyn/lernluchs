# Tasks: Öffentlicher Grundlagenkatalog im Browser

## Arbeitsregel

Jedes Teil-Feature erhält unmittelbar vor der Implementierung einen Test, der
fachlich korrekt fehlschlägt (RED). Danach folgt die kleinste Implementierung
(GREEN) und ein bei weiterhin grüner Suite begründetes REFACTOR. Die Nachweise
werden direkt am jeweiligen Schritt ergänzt.

## Nachweise

### 1. Textuelle Themenübersicht

- **RED:** `tests/catalogBrowser.test.tsx` wurde am 20.09.2026 vor der
  Komponente angelegt. `npm test -- --run tests/catalogBrowser.test.tsx`
  scheiterte erwartungsgemäß mit `Failed to resolve import .../CatalogBrowser`:
  Die Kataloganzeige existierte noch nicht.
- **GREEN:** `CatalogBrowser` als Teil der Katalog-Vertikale ergänzt und von
  `App` komponiert. Die Komponente rendert eine benannte `nav`-Liste mit sechs
  nativen Buttons. Der überholte Hüllen-Test wurde auf die neue Komposition
  aktualisiert. `npm test -- --run tests/catalogBrowser.test.tsx
  tests/app.test.tsx` bestand: 2 Testdateien, 2 Tests.
- **REFACTOR:** Keine Extraktion: Das Mapping vom Katalog auf genau eine
  semantische Liste ist ohne wiederholte Darstellung klein und lesbar. Der
  oben dokumentierte Lauf blieb grün.

### 2. Auswahl und vollständige Lernkarte

- **RED:** Der neue Nutzertest aktivierte das erste Thema. Nach Korrektur der
  Testbereinigung (der erste Lauf hatte zwei nicht bereinigte Renderings)
  schlug `npm test -- --run tests/catalogBrowser.test.tsx` am 20.09.2026 aus
  dem fachlichen Grund fehl: `aria-pressed` war nach der Auswahl noch `null`
  statt `true`.
- **GREEN:** Die Katalog-Vertikale verwaltet die ausgewählte ID lokal und
  rendert danach eine benannte `article`-Lernkarte mit Problem, Kernkonzept,
  Java-/Web-Einsatz und wichtiger Grenze. Der gewählte native Button erhält
  `aria-pressed`. Der Test bestand: 1 Testdatei, 2 Tests.
- **REFACTOR:** Die vier gleichartigen Lernkartenfelder werden aus einer
  lokalen Liste als jeweils semantisches `section` mit Überschrift und Absatz
  gerendert. `npm test -- --run tests/catalogBrowser.test.tsx` blieb grün:
  1 Testdatei, 2 Tests.

### 3. Sichtbare Metadaten und bewusste Quellenaktion

- **RED:** Der neue Nutzertest prüfte vor der Themenauswahl das Fehlen des
  Quellenlinks und danach Metadaten sowie Link-Attribute. `npm test -- --run
  tests/catalogBrowser.test.tsx` schlug am 20.09.2026 erwartungsgemäß fehl,
  weil „Veröffentlicht“ noch nicht sichtbar war.
- **GREEN:** Die ausgewählte Lernkarte enthält nun ein `dl` mit allen fünf
  redaktionellen Feldern sowie eine Quellenliste. Quellen sind allein als
  `a`-Elemente mit HTTPS-Ziel, `target="_blank"` und `rel="noreferrer"`
  vorhanden; die Komponente löst keinen Netzwerkzugriff aus. Nach Korrektur
  des Tests für die zwei gleichen, aber getrennten Datumsfelder bestand der
  Lauf: 1 Testdatei, 3 Tests.
- **REFACTOR:** Die fünf Metadaten werden aus einer lokalen Datenliste als
  `dt`/`dd`-Paare erzeugt; Datumswerte bleiben semantische `time`-Elemente.
  `npm test -- --run tests/catalogBrowser.test.tsx` blieb grün: 1 Testdatei,
  3 Tests.

### 4. Vertrag und Validierung in die Katalog-Vertikale umziehen

- **RED:** Die Imports in `tests/catalog.test.ts` wurden zuerst auf die
  künftigen Katalogpfade umgestellt. `npm run validate:content` schlug am
  20.09.2026 erwartungsgemäß mit `Failed to resolve import .../validateCatalog`
  fehl, weil die Dateien noch unter `src/shared/catalog` lagen.
- **GREEN:** `catalogContract.ts` und `validateCatalog.ts` nach
  `src/verticals/catalog` verschoben; der Katalog und seine Tests importieren
  sie nun lokal. `npm run validate:content` bestand: 1 Testdatei, 3 Tests.
- **REFACTOR:** Keine weitere Abstraktion: Der Umzug entfernt die unzutreffende
  gemeinsame Schnittstelle, ohne einen neuen öffentlichen Vertrag zu erfinden.
  Der volle Import-Scan darf keine Referenz auf `src/shared/catalog` mehr
  enthalten; die vollständige Suite wird im Abschlussnachweis erneut geprüft.

### 5. Abschlussprüfung und manueller Browsernachweis

- **Pflichtsuite:** `npm run check` bestand am 20.09.2026 vor und nach dem
  Vertragsumzug vollständig: TypeScript ohne Fehler, 3 Testdateien mit 7
  Tests, Inhaltsvalidierung mit 3 Tests, dependency-cruiser ohne Verletzung
  (nach dem Umzug 12 Module, 8 Abhängigkeiten) sowie Produktionsbuild mit
  ausschließlich lokalen Assets. Der Lauf wurde außerhalb der Sandbox
  ausgeführt, weil Vite dort temporäre Dateien unter `node_modules/.vite-temp`
  erzeugt.
- **Abhängigkeitsprüfung:** `npm audit --audit-level=high` bestand am
  20.09.2026 mit `found 0 vulnerabilities`. Es wurden keine Abhängigkeiten
  ergänzt.
- **Lokaler Browsernachweis:** Am 20.09.2026 im Codex-In-app-Browser unter
  `http://127.0.0.1:5174/` geprüft: Die sechs Themen waren als Textliste
  sichtbar. Einmal Tab fokussierte das erste Thema, Enter wählte es aus und
  zeigte Problem, Kernkonzept, Java-/Web-Einsatz, wichtige Grenze,
  redaktionelle Metadaten und Quelle. Die Konsole enthielt keine Fehler. Der
  Quellenlink erschien erst nach der Auswahl und besitzt den automatisiert
  geprüften HTTPS-`href`, `target="_blank"` und `rel="noreferrer"`. Der
  In-app-Browser stellte beim Aktivieren des `_blank`-Links keinen zweiten Tab
  bereit. Die Story wurde am 20.09.2026 auf ausdrückliche Anweisung des Users
  archiviert; Details zum externen Öffnen, Browser und URL wurden nicht
  überliefert und werden nicht nachträglich ergänzt.
- **Diff-Prüfung und Commit:** Der veröffentlichte Release ist vom User
  bestätigt; diese Story dokumentiert keinen nicht selbst ausgeführten
  Git-Vorgang.

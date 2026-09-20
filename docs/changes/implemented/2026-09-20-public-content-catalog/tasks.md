# Tasks: Redaktionell geprüfter Grundlagen-Inhaltskatalog

## Arbeitsregel

Jeder Teil-Schritt wird unmittelbar vor der Implementierung als RED-Test
angelegt und ausgeführt. Danach folgt die kleinste GREEN-Implementierung und
ein REFACTOR mit weiterhin grüner Suite. Befehle und Ergebnisse werden direkt
am jeweiligen Schritt protokolliert.

## Nachweise

### 1. Vollständiger, öffentlicher Inhaltsvertrag und sechs Grundlageninhalte

- **RED:** `tests/catalog.test.ts` vor dem Vertrag und dem Katalog ergänzt und
  am 20.09.2026 mit `npm run validate:content` ausgeführt. Der Test schlug
  erwartungsgemäß fehl: Der Katalog enthielt noch `[]` statt der sechs
  dauerhaften IDs und die Validierung akzeptierte ein Thema ohne Quelle.
- **GREEN:** `CatalogItem`, seine Lernkarte, redaktionelle Metadaten und
  Quellen strukturiert; die Validierung und die sechs quellengeprüften Themen
  ergänzt. Der überholte Duplikat-Test erhielt einen vollständigen, gültigen
  Vertrags-Fixture. `npm run validate:content` bestand danach mit 3/3 Tests.
- **REFACTOR:** Die identischen aktiven Metadaten werden durch
  `activeEditorial(reviewDueAt)` erzeugt; das hält Veröffentlichungsdatum,
  Prüfdatum, Version und Status konsistent, ohne Inhalt zu verstecken. Der
  erneute Lauf `npm run validate:content` blieb grün: 3/3 Tests.

### 2. Pflichtsuite, Sicherheitsprüfung und lokaler Browsernachweis

- **Pflichtsuite:** `npm run check` bestand am 20.09.2026 vollständig:
  TypeScript ohne Fehler, 2/2 Testdateien mit 4/4 Tests, Inhaltsvalidierung
  3/3, keine dependency-cruiser-Verletzung (10 Module, 5 Abhängigkeiten) und
  Produktionsbuild (15 transformierte Module).
- **Abhängigkeitsprüfung:** `npm audit --audit-level=high` bestand am
  20.09.2026 mit `found 0 vulnerabilities`. Es wurden keine Abhängigkeiten
  ergänzt.
- **Lokaler Browsernachweis:** Am 20.09.2026 im Codex-In-app-Browser unter
  `http://127.0.0.1:5173/` geprüft: „Lernluchs“ und
  „Architekturgrundlage“ sichtbar; keine sichtbare Inhaltsansicht, keine
  externen Laufzeitressourcen und keine Warnung oder kein Fehler in der
  Browserkonsole. Der temporäre Vite-Server wurde danach beendet.

### 3. Diff-Prüfung und Übergabe

- **Diff-Prüfung:** `git diff --check` bestand am 20.09.2026 ohne
  Whitespace-Fehler. Vertrag, Validierung, Katalog, Tests und die vier
  Story-Dokumente wurden inhaltlich gegengelesen; die zwei temporären
  Browser-Testlogs wurden entfernt.
- **Commit/Push:** Bewusst nicht ausgeführt; erfolgen durch den User nach
  manuellem Test.

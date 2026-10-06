## Sicherheitslücke in source-map-js schließen

Der Audit meldet für die transitive Entwicklungsabhängigkeit `source-map-js@1.2.1` eine hohe DoS-Sicherheitslücke
([GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)). Der Patch ist ab Version `1.2.2` verfügbar.

- Vor der Umsetzung eine eigene Änderungs-Spec anlegen und den aktuellen Befund bestätigen.
- Den notwendigen Abhängigkeitspatch einspielen und den Lockfile-Diff prüfen. Der bisherige Dry-Run aktualisiert nur `source-map-js` auf `1.2.2`.
- Pflichtsuite und Audit prüfen; der hohe Befund muss behoben sein.
- Als eigenen Sicherheits-Commit abschließen, getrennt von der Node-Umstellung.

## Ziel und Umfang

Nur die transitive Entwicklungsabhängigkeit `source-map-js` im Lockfile auf `1.2.2` aktualisieren. Keine fachliche Vertikale betroffen; keine neue Bibliothek, keine Node-Umstellung und keine Änderung an App-Verhalten oder direkten Abhängigkeiten.

## Entscheidungen, Risiken und Abnahme

- Quellenprüfung am 06.10.2026: Das verlinkte GitHub-Advisory bestätigt hohe Schwere, betroffene Versionen `>=1.0.0 <1.2.2` und den Patch `1.2.2`. Es beschreibt mögliche Event-Loop-Blockierung durch manipulierte Indexed Source Maps; die konkrete Ausnutzbarkeit dieser statischen App wird damit nicht behauptet.
- Bestehende Prüfungen wurden auf passende Abdeckung untersucht: Der vorhandene Audit prüft genau den Sicherheitsbefund; ein zusätzlicher Unit-Test würde diese Prüfung duplizieren.
- RED: `npm audit --audit-level=high` muss den aktuellen Befund zeigen. GREEN: derselbe Audit muss nach dem Patch bestehen.
- Lockfile-Diff auf ausschließlich Version, Download-URL und Integrität dieses Pakets begrenzen; direkte Abhängigkeiten und Lizenz bleiben erhalten.
- Pflichtsuite: `npm run check`, vollständige Unit-/Komponenten- und Inhaltsprüfungen darin, vollständige Desktop-/Mobil-E2E-Suite, Audit sowie Pages-Build-/Workflow- und Vertikalgrenzenprüfung.
- Lokaler Browserablauf: Themenliste öffnen, ein Thema auswählen und dessen Lerninhalt anzeigen; damit das Starten und Rendern nach dem Toolchain-Patch prüfen.
- Vor dem separaten Sicherheits-Commit ist die ausdrückliche positive Bestätigung der manuellen Nutzerprüfung erforderlich.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED | Bestehender `npm audit --audit-level=high`: eine hohe Schwachstelle in `source-map-js@1.2.1`, GHSA-68fv-2mgg-jv7q, Exitcode 1. |
| GREEN | `npm update source-map-js --ignore-scripts --no-audit --no-fund`, Exitcode 0. Lockfile aktualisiert ausschließlich Version `1.2.1` → `1.2.2`, Download-URL und Integrität. `npm audit --audit-level=high`: 0 Schwachstellen, Exitcode 0. |
| REFACTOR | Kein Refactoring erforderlich. Direkte Abhängigkeiten und BSD-3-Clause-Lizenz unverändert; `npm ls source-map-js` bestätigt `1.2.2` für css-tree/jsdom und postcss/Vite. |
| Pflichtsuite | Alle Bestandteile von `npm run check` einzeln ausgeführt, jeweils Exitcode 0: Format (1,9 s), Lint (1,4 s), Typprüfung (0,8 s), Runner-Selbsttests (0,6 s), 130 Unit-/Komponententests (38,69 s), 32 Inhaltsprüfungen (2,63 s), Architektur (4,9 s), Lizenzen (0,5 s), Produktionsbuild (1,7 s). |
| Weitere Prüfungen | `npm run --silent test:e2e`: 74 Tests für Desktop-/Mobil-Chromium, 50,68 s, Exitcode 0. Pages-Build (1,3 s), Pages-Workflow (0,6 s), Arbeitsbaum-Vertikalgrenze (0 Vertikalen) und `git diff --check`: jeweils Exitcode 0. |
| Lokaler Browser | Codex In-app-Browser, `http://127.0.0.1:4173/`: nach dem Patch neu geladen, Liste mit 48 Themen angezeigt, „Abhängigkeiten und Sicherheitslücken risikobasiert bewerten“ geöffnet; Lerninhalt, Quellen und Metadaten korrekt angezeigt. |

Die vorhandene lokale Node-Version `25.9.0` liegt außerhalb der unterstützten Engine-Bereiche von jsdom/Vitest und zwei jsdom-Unterabhängigkeiten; npm meldet entsprechende Warnungen. Alle oben genannten Prüfungen bestehen. Die getrennte Node-Umstellung bleibt außerhalb dieser Sicherheitsänderung.

Manuelle Nutzerprüfung und ausdrückliche positive Bestätigung erfolgt. Der dokumentierte lokale Browserablauf wurde unmittelbar vor dem Commit erneut erfolgreich geprüft. Die Spec wird mit der Änderung als separater Sicherheits-Commit archiviert.

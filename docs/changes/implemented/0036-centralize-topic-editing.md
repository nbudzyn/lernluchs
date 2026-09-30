## Alle Informationen zu den Themen (außer den Fragen) leicht editierbar an einem Ort

Der Entwickler kann sämtliche redaktionellen Themenangaben in einer übersichtlichen TypeScript-Datei bearbeiten: Titel, Inhalte, Quellen
einschließlich Videos und Podcasts, redaktionelle Metadaten und Themenreihenfolge. Die Reihenfolge der Themeneinträge bestimmt
die Themenreihenfolge; eine zusätzliche Einfügepositions- oder ID-Liste als zweite Pflegequelle entfällt.

Lernpfade werden in einer separaten, ebenfalls übersichtlichen und leicht editierbaren TypeScript-Datei gepflegt. Dort stehen ihre Namen
und Themenreferenzen über stabile `topicIds`. Themen pflegen keine zweite Liste ihrer Lernpfadzugehörigkeiten; die Anwendung leitet diese
Gegenrichtung aus den Lernpfaden ab.

Themen behalten stabile IDs. Der Produktivcode verknüpft Themen über diese IDs und verwendet redaktionelle Texte ausschließlich zur
Darstellung, nicht zur Steuerung von Verhalten. Titel-, Beschreibungs- oder Quellenänderungen benötigen keine Anpassung der Anwendungslogik.

Alle redaktionellen Status erscheinen auf Deutsch: „Aktiv“, „Unter Beobachtung“, „Archiviert“ und „Ersetzt“. Die technischen Statuswerte
bleiben stabil. Quellenspezifische Prüfdaten bleiben einzeln editierbar; eine Quellenprüfung darf andere Quellen nicht automatisch umdatieren.

Verhaltenstests verwenden überwiegend kleine Testdaten. Prüfungen des echten Themenbestands sichern Struktur, gültige Referenzen und
Vollständigkeit ab. Nur wenige Tests binden sich bewusst an konkrete redaktionelle Texte; diese Texte erhalten an ihrer Definition einen
Kommentar, der die Testbindung kenntlich macht.

Die Umstrukturierung erhält sämtliche bestehenden Themen, Inhalte, Quellen, Metadaten, Lernpfadzuordnungen und Reihenfolgen. Tests sichern
ab, dass jedes Thema genau einmal erscheint und jeder Lernpfad in Themenlistenreihenfolge verläuft. Fachliche Inhaltsänderungen gehören
nicht zu dieser Story.

Vertikale: Themen

Abgrenzung:

- Fragen bleiben separat; ihre Zuordnung zu Themen über stabile IDs bleibt erhalten.
- Die spätere Story „NF: Reihenfolge der Themen zusammenziehen“ ist in dieser Story aufgegangen.

## Ziel, Grenzen und Entscheidungen

Betroffene Vertikalen: Themen sowie Lernchecks ausschließlich für die Entkopplung bestehender Tests von editierbaren Thementiteln.
Öffentliche Verträge, Fragen und persönlicher Zustand bleiben unverändert. Keine neuen Abhängigkeiten.
Die Themen-Datei enthält vollständige Objekte mit individuell editierbaren Metadaten und Quellen. Die separate Lernpfade-Datei enthält Namen
und stabile Themen-IDs. Technische Statuswerte bleiben unverändert; nur ihre Anzeige wird übersetzt.

Geltende Dokumente: [Dauerhafte Vorgaben](../../governance/durable-rules.md),
[Änderungs-Workflow](../README.md), [Vertikalgrenzen](../../architecture/verticals-and-boundaries.md),
[Redaktionelle Richtlinie](../../content/editorial-policy.md), [Qualitätsstrategie](../../quality/verification-strategy.md).

## Risiken und Abnahme

- Verlust oder Umordnung beim Zusammenführen: vollständiger Vorher-Nachher-Abgleich aller 46 Themen und 13 Lernpfade einschließlich Quellen
  und individueller Datumsangaben. Dauerhafte Tests prüfen eindeutige IDs, gültige Referenzen und relative Reihenfolgen.
- Doppelte Pflegequellen: alte Inhaltsdateien und Einfügepositionsliste entfernen; Tests beziehen den Bestand aus der zentralen Datei.
- Textgebundene Tests: Verhalten mit eigenen Testdaten prüfen; verbleibende bewusste Textbindungen an der Definition kennzeichnen.
- Anzeige: alle vier Status auf Deutsch testen. Browserablauf: Thema öffnen, Status und Medienquellen prüfen, Lernpfad filtern und Filter aufheben.
- Pflichtsuite: npm run check, npm run test:e2e, npm audit --audit-level=high und Vertikalprüfung. Keine fachlichen Aussagen ändern; daher keine
  neue externe Quellenrecherche oder Umdatierung bestehender Prüfungen.

## Umsetzung und Nachweise

| Schritt | Nachweis |
| --- | --- |
| RED: Pflegequellen | `topicEditing.test.ts`: zwei rote Tests wegen verteilter Zusammensetzung und fehlender separater Lernpfade-Datei. |
| RED: Statusanzeige | Vier Statusfälle im Komponententest rot: deutsche Anzeigen fehlten. |
| GREEN | `npm test -- --run tests/verticals/topics`: 8 Dateien, 74 Tests grün. |
| REFACTOR | Vollständige Themenobjekte mit expliziten Quellen- und Prüfdaten; alte vier Inhaltsdateien entfernt. Themen- und Lerncheck-Browsertests lesen editierbare Titel und Pfadnamen aus Daten, statt Texte zu duplizieren. Verhaltenstests behalten eigene Testdaten. Drei verbleibende bewusste Textbindungen an Definitionen kommentiert. Die spätere Metadaten-Helfer-Story entfällt, da die Helfer durch explizite, einzeln editierbare Metadaten ersetzt sind. |
| Bestandserhalt | Vollständiger JSON-Vorher-Nachher-Abgleich: alle 46 Themen, 13 Pfade, Quellen, Metadaten und Reihenfolgen identisch; technische Katalogversion unverändert. |
| Pflichtsuite | Nach der letzten Teständerung `npm run check` grün: Format, Lint, Typen, 176 Tests in 27 Dateien, Inhaltsvalidierung, Architektur, Lizenzen und Produktionsbuild. `npm run test:e2e`: 90 Tests auf Desktop- und Mobil-Chromium grün. `npm audit --audit-level=high`: 0 Schwachstellen; keine Abhängigkeitsänderungen. |
| Vertikalgrenze | `assertCommitScope` auf Arbeitsbaum einschließlich ungetrackter Dateien angewendet: ausschließlich `topics` und `learning-checks`. `git diff --check` grün. |
| Lokaler Browser | Codex In-app-Browser unter `http://127.0.0.1:4173/`: erstes Thema geöffnet; vollständige Inhalte, Primärquelle, Podcast, vier Videos und deutscher Status „Aktiv“ sichtbar. Zur Liste zurückgekehrt, Lernpfadfilter mit 10/46 Themen aktiviert, Grundlagenpfad mit 6/46 Themen ausgewählt und Filter aufgehoben: wieder 46 Themen. |

Die manuelle Entwicklerprüfung und Freigabe sind erfolgt. Unmittelbar vor dem Commit wurde im Codex In-app-Browser erneut das erste Thema
mit Status „Aktiv“ und allen Medienquellen geöffnet sowie der Lernpfadfilter aktiviert und aufgehoben; Ergebnis grün.

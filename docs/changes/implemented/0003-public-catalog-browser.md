# Öffentlicher Grundlagenkatalog im Browser

## Ziel und Umfang

Die sechs geprüften Grundlagen-Themen wurden als zugängliche Textliste sichtbar. Nach Auswahl erscheint genau eine Lernkarte mit Inhalt, Metadaten und Quellen. Betroffen war die Katalog-Vertikale; `src/app` blieb reine Komposition. Grafik, Lernchecks, Fortschritt, Offline-Funktion, Inhaltsänderungen und neue Abhängigkeiten gehörten nicht dazu.

Eine benannte `nav`-Liste mit nativen Buttons ermöglicht Tastaturauswahl; `aria-pressed` kennzeichnet die Wahl. Die Karte nutzt `article`, Abschnitte, `dl` und `time`. Quellen erscheinen erst nach Auswahl als HTTPS-Links mit `target="_blank"` und `rel="noreferrer"`, ohne automatisches Nachladen. Vertrag und Validierung wurden aus `src/shared/catalog` in die Katalog-Vertikale verlegt.

## Risiken und Abnahme

- Externe Quellen können ausfallen; die Lernkarte bleibt ohne sie lesbar. Andere Vertikalen dürfen Kataloginterna nicht direkt importieren und brauchen später einen bewusst entworfenen Einstiegspunkt.
- Abnahme: sechs Themen, Tastaturauswahl, genau eine vollständige Karte, Metadaten und Quellenlink nach Auswahl; grüne Komponenten-, Inhalts-, Architektur- und Build-Prüfung. Das tatsächliche Öffnen des `_blank`-Links in einem zweiten Tab war im In-app-Browser nicht beobachtbar.

## Umsetzung und Nachweise

| Teil-Feature | Phase | Nachweis |
| --- | --- | --- |
| Übersicht | RED | Komponententest scheiterte am fehlenden `CatalogBrowser`. |
| Übersicht | GREEN | Sechs Themen als semantische Liste; `App` komponiert die Anzeige. |
| Übersicht | REFACTOR | Keine unnötige Darstellungsextraktion. |
| Kartenauswahl | RED | Nach Testbereinigung fehlte `aria-pressed=true`. |
| Kartenauswahl | GREEN | Lokale Auswahl und vollständige Karte; 2 Komponententests grün. |
| Kartenauswahl | REFACTOR | Gleichartige Kartenfelder aus einer lokalen Liste gerendert. |
| Metadaten und Quellen | RED | Test fand „Veröffentlicht“ noch nicht. |
| Metadaten und Quellen | GREEN | Metadaten und Quellenliste ergänzt; 3 Komponententests grün. |
| Metadaten und Quellen | REFACTOR | `dt`/`dd`-Paare aus einer lokalen Datenliste erzeugt. |
| Vertikalgrenze | RED | Inhaltsprüfung scheiterte nach Importumstellung am fehlenden Katalogpfad. |
| Vertikalgrenze | GREEN | Vertrag und Validierung verschoben; 3 Inhaltstests grün. |
| Vertikalgrenze | REFACTOR | Keine neue öffentliche Abstraktion. |

`npm run check` war grün (7 Tests, Inhaltsvalidierung, Architekturprüfung, Build); `npm audit --audit-level=high` meldete 0 Schwachstellen. Im Codex In-app-Browser unter `http://127.0.0.1:5174/` wurden die sechs Themen, Auswahl per Tab und Enter, Karte, Metadaten und Quelle geprüft; keine Konsolenfehler. Das Öffnen des `_blank`-Links in einem zweiten Tab ließ sich dort nicht beobachten. Die damalige Archivierung wurde vom Benutzer bestätigt; zusätzliche Browser- oder URL-Details sind nicht überliefert.

# Fowler-Prüfung: Hilfe

Als Entwickler möchte ich die Vertikale `help` anhand der 24 Fowler-Smells bewerten,
ohne künstlichen Änderungsbedarf zu erzeugen. Bisher gibt es keine überzeugenden
Befunde hoher oder mittlerer Priorität; niedrig priorisierte SVG-Duplikate sind
nicht Teil dieser Story. Deshalb ist derzeit kein konkretes Refactoring beauftragt.

- Umfang: Vor Umsetzung gezielt `src/verticals/help/` und zugehörige Tests auf belegte Befunde hoher oder mittlerer Priorität prüfen. Nur bei einem neuen Beleg konkretes verhaltenserhaltendes Refactoring samt Priorität und Risiken in der aktiven Spec festlegen.
- Risiken: Unnötige Zusammenführung von Icons könnte die bewusst unabhängige Vertikale an andere Bereiche koppeln; reine Text- oder DOM-Umbauten können Darstellung und Accessibility beeinflussen.
- Abnahme: Entweder konkret belegte Verbesserungen mit passenden Prüfungen umsetzen oder ohne Codeänderung schließen. Keine niedrigen Befunde aufnehmen und keine Refactoring-Quote erfüllen. Das eine Subagentenreview nach Reviewvertrag ist bei einer produktrelevanten Umsetzung am Ende durchzuführen; bei rein dokumentiertem Ergebnis gilt die Dokumentationsausnahme.

## Ziel und Nicht-Ziele

Belegte Wartbarkeitsprobleme hoher oder mittlerer Priorität innerhalb der Hilfe
ermitteln. Keine Änderung an Texten, DOM, Accessibility, Darstellung, Icons,
Navigation oder öffentlichem Vertrag ohne einen solchen Beleg.

Betrachtete Vertikale: `help`. Geänderte fachliche Vertikalen: keine.
Keine neuen Abhängigkeiten, keine Speicherung und keine Architekturausnahme.

## Prüfung und Entscheidung

Geprüfter Produktstand: `94af87be15ebc5d8a2afb3ebf70296bc549b0fea`.
Gelesen wurden vollständig die drei Dateien unter `src/verticals/help/`,
`tests/verticals/help/TopicHelp.test.tsx` und
`e2e/verticals/help/topic-help.spec.ts`. Maßstab sind die 24 Smells und die
Prioritätsdefinitionen aus [dem Reviewvertrag](../../quality/code-review.md).

| Smells | Konkreter Befund im geprüften Umfang |
| --- | --- |
| Global Data, Mutable Data, Temporary Field | `TopicHelp` hat weder Zustand noch veränderliche Modulvariablen oder Felder. |
| Shotgun Surgery, Divergent Change | Einführung und Darstellung liegen lokal in `TopicHelp.tsx` und `TopicHelp.css`; kein belegter verteilter Änderungszwang oder mehrere unabhängige Verantwortlichkeiten. |
| Duplicated Code | Die drei Symbolerklärungen begründen keine strukturelle Verbesserung mittlerer oder hoher Priorität. Die bereits ausgeschlossenen SVG-Duplikate werden nicht zur Refactoring-Aufgabe erweitert. |
| Insider Trading, Feature Envy, Message Chains | Die Komponente importiert nur ihr CSS und greift auf keine fremden Daten oder Interna zu. |
| Large Class, Long Function | Die einzige Komponentenfunktion enthält eine überschaubare statische Liste ohne Verzweigung oder Ablaufsteuerung. Ihre JSX-Länge allein belegt kein Wartbarkeitsproblem. |
| Primitive Obsession, Data Clumps, Long Parameter List | Keine Parameter, Props oder zusammengehörigen primitiven Zustandswerte. Statische Texte und SVG-Koordinaten benötigen kein zusätzliches Domänenmodell. |
| Repeated Switches | Keine Fallunterscheidungen in der Hilfe. |
| Mysterious Name | `TopicHelp`, `topic-help-content` und `help-learned-icon` benennen ihre Aufgaben verständlich. |
| Refused Bequest, Alternative Classes with Different Interfaces | Keine Vererbung und keine konkurrierenden Klassen oder austauschbaren Implementierungen. |
| Speculative Generality, Data Class, Middle Man, Lazy Element | Kein vorsorgliches Framework oder Datenmodell. `index.ts` ist der vorgeschriebene öffentliche Einstiegspunkt; der reine Re-Export ist nach Reviewvertrag kein Problem. |
| Comments | Ein Kommentar benennt Herkunft und Lizenz des Route-Symbols; kein überholter oder verschleiernder Kommentar belegt. |
| Loops | Die Hilfe selbst enthält keine Schleife. Die Textschleife im Komponententest prüft zusammengehörige Inhalte mit Soft-Assertions; kein belegter Verbesserungsbedarf. |

Auch CSS und Tests ergeben keinen belegten Befund hoher oder mittlerer Priorität:
Die Selektoren ordnen sich der lokalen Hilfe zu; der Komponententest prüft den
daten- und rückruffreien Vertrag sowie die Hinweise. Die E2E-Tests beschreiben
Desktopanzeige und mobiles Öffnen mit Rückweg. Diese Prüfung bewertet den
vorhandenen Code; sie ist kein neuer Ausführungsnachweis für das Laufzeitverhalten.

Entscheidung: ohne Produktcodeänderung abschließen. Für eine weitere
Abstraktion fehlt ein belegter Nutzen; insbesondere bleibt die Unabhängigkeit
der Vertikale gemäß [Architekturgrenzen](../../architecture/verticals-and-boundaries.md#bestehende-vertikale-hilfe) erhalten.
Die Aussage gilt für den genannten Umfang und Stand, nicht als allgemeiner
Nachweis der Fehlerfreiheit.

## Umsetzung und Nachweise

- Alle 24 Smells anhand des vorhandenen Codes und der zugehörigen Tests geprüft;
  keine belegten Befunde hoher oder mittlerer Priorität.
- Story vollständig aus dem Backlog in diese Spec übernommen.
- RED → GREEN entfällt, da keine Funktionalität, Tests oder Produktdateien geändert werden.
- Subagentenreview entfällt gemäß Dokumentationsausnahme der Story und des Reviewvertrags.
- Pflichtsuite und manuelle Browserprüfung entfallen für reine Dokumentation gemäß
  [Prüfumfang und Nachweise](../../quality/verification-strategy.md#prüfumfang-und-nachweise).
- Abschlussprüfung bestanden (Exitcode 0): wortgetreue Übernahme des Story-Inhalts,
  Abdeckung aller 24 Smells und lokale Verweisziele automatisiert geprüft;
  `git diff --check` grün. Status und Diff enthalten ausschließlich diese neue
  Spec und die Entfernung der Story aus dem Backlog; Produktdateien unverändert.
- Dokumentationsabnahme und Nutzerfreigabe für Commit und lokale
  Fast-forward-Integration in `main` erfolgt. Spec zum Abschluss archiviert.

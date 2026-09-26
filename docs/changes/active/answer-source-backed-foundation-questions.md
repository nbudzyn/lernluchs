# Fragenablauf für Grundlagenkarten

## Quellengebundene Grundlagenfragen im Browser beantworten

Zu jeder der sechs Lernkarten des Grundlagenpfads können Lernende Auswahlfragen beantworten und anschließend Begründungen und Quellen
einsehen. Dafür werden ausreichend viele fachlich unterschiedliche Fragen für spätere Wiederholungen kuratiert.

- Nach der unabhängigen fachlichen Prüfung bleiben mindestens 25 Fragen je Karte. Jede Frage hat genau eine richtige Antwort und drei bis
  fünf plausible Optionen. Vertiefende Details aus den Quellen sind erwünscht, soweit sie für KI-gestützte Java-/Web-Entwicklung relevant
  sind; die Karten sollen sich fachlich nicht überschneiden.
- Ein Fragendurchlauf startet direkt aus der Themenliste, ohne die Karte zu öffnen. Er enthält fünf zufällig gewählte, unterschiedliche
  Fragen der gewählten Karte. Währenddessen sind nur die aktuelle Frage und ihre Optionen sichtbar. Ein Klick auf eine Option legt die
  Antwort einmalig fest und führt zur nächsten Frage. Der Durchlauf kann jederzeit abgebrochen werden; Antworten werden dabei verworfen.
- Erst nach der fünften Antwort zeigt eine Zusammenfassung, ob alle Antworten richtig waren. Sie zeigt die Fragen in der gestellten
  Reihenfolge, jeweils die richtige Antwort in Grün und bei einem Fehler zusätzlich die gewählte falsche Antwort in Rot. Zu jeder
  angezeigten Antwort erscheinen eine kurze Begründung und ein bewusst zu öffnender Quellenlink, möglichst direkt zum relevanten Abschnitt.
  Antworten können dort nicht geändert werden. Von Abbruch und Zusammenfassung führt ein Weg zurück zur Themenliste.
- Auswahl, Antworten und Ergebnis bleiben in dieser Story flüchtig; ein neuer Durchlauf darf bereits gestellte Fragen erneut enthalten.
- Jede Frage prüft einen Fakt oder eine klare Empfehlung (Best Practice) oder das beispielhafte, klare Ergebnis einer Trade-off-Abwägung.
  Basis sind die Quellen (vorrangig Primärquellen) des Lerninhalts, der durch die Karte repräsentiert ist.
- Jede Antwortoption erhält eine Begründung und einen Quellenbezug
- Fragen und Antworten werden unabhängig fachlich geprüft und zusammen mit dem öffentlichen Katalog validiert. Dafür wird ein Prompt mit
  sämtlichen Fragen, Optionen, Lösungen, Begründungen und Quellen für eine externe KI-Prüfung erstellt. Der Nutzer liefert das kurze
  Prüfergebnis zurück; beanstandete Fragen werden entfernt oder vor Integration fachlich geklärt.
- Ein Quellenlink öffnet sich nur nach bewusster Aktion und sein Ausfall verhindert das Lesen und Beantworten der Frage nicht.
- Widersprechen sich Primär- und Sekundärquellen deutlich, ist der Primärquelle Vorrang einzuräumen.

Die sechs Grundlagenkarten behandeln Mensch-KI-Verantwortung, Problemverständnis,
`AGENTS.md`, EARS, Research/Plan/Tasks und OpenSpec. Diese Story liefert den ersten sichtbaren Fragenablauf mit einer reinen
Ergebnisanzeige; ein formaler Bestehensstatus und Wiederholung mit anderem Fragensatz folgen in der nächsten Story.

Mit diesem ersten neuen Browserablauf beginnen auch Browser-E2E-Prüfungen (Integrationstests) in CI.

Lizenzprüfungen werden als ausführbare CI-Gates ergänzt und nach grünem Nachweis in der Qualitätsstrategie dokumentiert. GPL, AGPL, SSPL und
nicht quelloffene Lizenzen sind unzulässig; LGPL und MPL erfordern eine Einzelfallprüfung. Unbekannte Lizenzangaben dürfen nicht unbemerkt
passieren.

Die ersten Browser-E2E-Tests laufen in CI mit Chromium. Ungefähr die Hälfte prüft einen Smartphone-Viewport.

Ein Architekturtest prüft kleine öffentliche Vertikal-Einstiegspunkte und verbietet direkte Importe interner Daten oder Komponenten. Neue
Abhängigkeiten erfordern eine begründete Freigabe in der späteren Änderungs-Spec.

Vertikalen: Inhaltskatalog, Lernchecks

Dokumentation nach Umsetzung: Fragenablauf, Lerncheck-Vertikale und die tatsächlich grünen CI-Gates knapp in Produktstand, Architektur und
Qualitätsstrategie ergänzen.

Für die Erstellung und Prüfung der Fragen gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md).

## Nicht-Ziele

- Kein dauerhafter Lernstand, keine Fragehistorie und kein formaler Bestehensstatus.
- Keine Fragen für Karten außerhalb des Grundlagenpfads.
- Keine gestalterische Überarbeitung der gesamten Oberfläche; die spätere Oberflächen-Story bleibt eigenständig.

## Risiken und Abnahme

- **Fachliche Richtigkeit:** Die gemeinsamen Fragenregeln für alle sechs Karten nachweisen. Quellenprüfung, Unsicherheiten und entfernte
  Fragen werden in dieser Spec dokumentiert.
- **Unabhängige Prüfung:** Den vollständigen Bestand nach den gemeinsamen Fragenregeln zur externen KI-Prüfung bereitstellen. Das vom Nutzer
  zurückgegebene Prüfergebnis wird vor Integration verarbeitet; nach Entfernen beanstandeter Fragen bleiben mindestens 25 je Karte.
- **Fragenablauf:** Tests prüfen Start aus der ungeöffneten Karte, fünf unterschiedliche zufällige Fragen, einmalige Wahl mit direktem
  Übergang, jederzeitigen Abbruch, Rückkehr zur Liste und den Verlust des flüchtigen Zustands. Die Zusammenfassung zeigt Reihenfolge,
  Gesamtergebnis, richtige und gegebenenfalls gewählte falsche Antwort samt Erklärung und bewusst zu öffnendem Quellenlink. Ein
  ausgefallener externer Link blockiert den Ablauf nicht.
- **Browser-E2E:** Chromium-Tests werden in CI ausgeführt; ungefähr die Hälfte der Fälle nutzt einen Smartphone-Viewport. Die Tests prüfen
  den sichtbaren Fragenablauf und mindestens einen Abbruch sowie richtige und falsche Antworten.
- **Architektur:** Ein automatisierter Test prüft die öffentlichen Einstiegspunkte von Inhaltskatalog und Lernchecks und verhindert direkte
  Importe interner Daten oder Komponenten. Die App komponiert nur die beiden Vertikalen.
- **Lizenzen und Abhängigkeiten:** Das CI-Gate sperrt GPL, AGPL, SSPL und nicht quelloffene Lizenzen. LGPL und MPL sowie unbekannte Angaben
  lösen eine nachvollziehbare Einzelfallprüfung aus und passieren nicht stillschweigend. Vor jeder neuen Abhängigkeit werden Nutzen,
  Wartung, Lizenz, Datenschutz und Sicherheitslage hier begründet und freigegeben.

## Umsetzung und Nachweise

Noch keine Implementierung und keine Prüfläufe. Die Nachweise werden während RED → GREEN → REFACTOR je Teil-Feature ergänzt.

| Schritt                   | Geplanter Nachweis; Ergebnis vor Umsetzung offen                                                                                                                         |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RED: Fragenbestand        | Ein Test zeigt fehlende Fragen, Optionen, Begründungen oder Quellenbezüge im öffentlichen Katalog.                                                                       |
| GREEN: Fragenbestand      | Validierter Bestand mit mindestens 25 unabhängig geprüften Fragen je Grundlagenkarte. Je Frage genau eine Antwort korrekt, Anzahl der Antworten entspricht den Vorgaben. |
| RED: Fragenablauf         | Komponenten- und Browser-Test scheitern am noch fehlenden Start, Durchlauf oder Ergebnis.                                                                                |
| GREEN: Fragenablauf       | Fünf Fragen, Abbruch und Zusammenfassung funktionieren wie oben beschrieben.                                                                                             |
| RED: Architektur und CI   | Architektur-, Browser- und Lizenztests zeigen die noch fehlenden Gates.                                                                                                  |
| GREEN: Architektur und CI | Öffentliche Grenzen, Chromium-E2E und Lizenzprüfung laufen in CI grün.                                                                                                   |
| REFACTOR                  | Struktur bereinigt; anschließend die vollständige Pflichtsuite erneut grün.                                                                                              |
| Abnahme                   | Lokaler Browsernachweis mit Browser, Ablauf und Ergebnis sowie manuelle Prüfung und ausdrückliche Bestätigung durch den Nutzer.                                          |

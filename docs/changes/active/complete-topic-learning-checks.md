## Lernchecks für alle Themen

Initial den Entwickler erinnern: KI-Model-Aufwand auf Hoch stellen

Die vier Themen des aktuellen Katalogs ohne Fragenpool erhalten quellengebundene Auswahlfragen:

- „Kontext und Vertrauensgrenzen für Coding-Agenten“
- „Geheimnisse und sensible Daten beim KI-Einsatz schützen“
- „KI-generierte Änderungen prüfen und übernehmen“
- „Git-Commits klein und nachvollziehbar halten“ (ohne Lernpfad)

Für jedes dieser Themen bleiben nach der unabhängigen fachlichen Prüfung mindestens 25 gültige, fachlich unterschiedliche Fragen. Die
Fragen prüfen den jeweiligen Schwerpunkt und vertiefende Details der zugeordneten Quellen. Beim Git-Thema prüfen sie insbesondere die
Auswahl logisch zusammengehöriger Änderungen, den Einsatz der Staging Area und die Grenzen einer bloßen Größenregel. Die fachlichen
Schwerpunkte der vier Themen bleiben voneinander und von den übrigen Themen abgegrenzt; Fragen wiederholen keine Aussagen eines anderen
Themas unter anderem Namen.

Die zwölf bereits vorhandenen Fragenpools bleiben unverändert. Bei der Quellenprüfung dürfen die vier betroffenen Themen und ihre Quellen
gezielt sachlich korrigiert oder ergänzt werden, wenn dies für eindeutige, belegte Fragen oder zur Vermeidung fachlicher Überschneidungen
nötig ist. Solche Änderungen werden begründet und fachlich geprüft.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md).

Die vorhandenen Auswahlchecks stehen nach Ergänzung für alle vier Themen zur Verfügung, einschließlich Erklärung, Quellenlink und
Wiederholung. Browser-Tests zeigen den Lernnutzen exemplarisch für ein Thema des dritten Lernpfads und für das Thema
ohne Lernpfad; sie hängen nicht von einem bestimmten zufällig gezogenen Fragensatz ab.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Dass alle Themen des aktuellen Katalogs Fragen haben, knapp im Produktstand und in der redaktionellen
Richtlinie ergänzen.

## Risiken und Abnahme

- **Fachliche Richtigkeit und Abgrenzung:** Jede neue Frage einschließlich aller Antwortoptionen, Erklärungen und Quellenbezüge wird gegen die Originalquellen geprüft. Die vier Pools decken unterschiedliche Schwerpunkte ab; strittige Aussagen werden geklärt oder verworfen. Nötige Korrekturen an den vier Themen und ihren Quellen werden mit Grund und Prüftag dokumentiert. Für die Umsetzung gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md).
- **Unabhängige Prüfung:** Vor der Integration erhält der Nutzer den dort verlangten kopierbaren Prüf-Prompt mit allen Fragen der betroffenen Themen. Beanstandungen werden geklärt und korrigierte Fragen erneut unabhängig geprüft. Danach verbleiben mindestens 25 gültige Fragen je neuem Pool.
- **Bestehende Inhalte:** Die zwölf vorhandenen Fragenpools bleiben unverändert. Katalog- und Fragentests prüfen alle 16 Themen, eindeutige Fragen-IDs, vollständige Optionen und Erklärungen sowie gültige Quellenbezüge.
- **Lernnutzen im Browser:** Für ein Thema des dritten Lernpfads und das Git-Thema ohne Lernpfad lassen sich Lernchecks starten, beantworten und wiederholen; Ergebnis, Erklärungen und Quellenlinks sind zugänglich. Browser-Tests prüfen diese Abläufe ohne Annahmen über die zufällige Fragenauswahl.
- **Umfang und Architektur:** Die Änderung betrifft höchstens Themen und Lernchecks; App und Shared werden nur bei Bedarf zur Komposition beziehungsweise für gemeinsame Datentypen angepasst. Neue Abhängigkeiten sind nicht vorgesehen.

## Umsetzung und Nachweise

Für jeden der vier neuen Fragenpools wird vor der Implementierung ein fachlich aussagekräftiger fehlschlagender Test ausgeführt (RED), danach die kleinste Änderung bis zum Bestehen ergänzt (GREEN) und bei grüner Suite überarbeitet (REFACTOR). Die konkreten RED-Gründe, Ergebnisse und Quellenprüfungen werden hier während der Umsetzung festgehalten.

| Teil-Feature | RED | GREEN und REFACTOR | Fachliche Prüfung und Abnahme |
| --- | --- | --- | --- |
| Kontext und Vertrauensgrenzen | Ausstehend | Ausstehend | Ausstehend |
| Geheimnisse und sensible Daten | Ausstehend | Ausstehend | Ausstehend |
| KI-generierte Änderungen prüfen | Ausstehend | Ausstehend | Ausstehend |
| Git-Commits | Ausstehend | Ausstehend | Ausstehend |
| Browserabläufe und Katalogvollständigkeit | Ausstehend | Ausstehend | Ausstehend |

Die vollständig grüne Pflichtsuite, der lokale Browsernachweis mit Browser, Ablauf und Ergebnis sowie die ausdrückliche manuelle Bestätigung des Nutzers werden vor einem Commit hier ergänzt. Es liegen für diese Story noch keine Umsetzungs- oder Abnahmenachweise vor.

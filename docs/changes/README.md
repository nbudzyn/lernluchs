# Änderungs-Specs und Archiv

## Eine Backlog-Story vollständig umsetzen

„Wir wollen Story 1 implementieren“ beauftragt die erste [Backlog-Story](../product/story-backlog.md):
Refinement → Aktivierung → Umsetzung → Prüfung. Diese Übergänge brauchen keinen weiteren Auftrag.

1. Story nach [Refinement](#erste-backlog-story-vorbereiten) klären.
2. Arbeitsort und Schreibbesitz nach dem [Worktree-Ablauf](../quality/worktrees.md) prüfen; die geklärte Story als aktive Spec übernehmen und aus dem Backlog entfernen.
3. Nach [TDD und Spec-Nachweisen](#tdd-und-spec-nachweise) umsetzen; genau ein [Subagentenreview](../quality/code-review.md), Vorschläge bearbeiten, endgültigen Stand nach [Qualitätsstrategie](../quality/verification-strategy.md#prüfumfang-und-nachweise) prüfen. Reine Dokumentations-Stories benötigen kein Subagentenreview.
4. Änderung zur manuellen Nutzerabnahme bereitstellen; [Abschluss und Archivierung](#abschluss-und-archivierung).

Bei ausdrücklich auf Refinement oder Aktivierung begrenztem Auftrag dort enden.

## Erste Backlog-Story vorbereiten

Bei „Refinement der ersten Story“:

1. Nur die erste Story im [Backlog](../product/story-backlog.md) lesen.
2. Ziel, Umfang, Abnahme und umsetzungsrelevante Fragen mit dem Nutzer klären; Ergebnisse in dieser Story festhalten.
3. Betroffene Vertikalen bestimmen und die [Rückfrage beim Entwickler](../../AGENTS.md#nicht-verhandelbar) bereits im Refinement anwenden.
4. Noch keine aktive Spec anlegen und nichts implementieren. Fehlt eine umsetzungsrelevante Antwort, nicht aktivieren.

Produktstories liefern im Browser nachvollziehbaren Geschäftswert in vertikalen,
ergebnisorientierten Schritten. Interne Verträge, Datenbestände oder Grundlagen
gehören zur jeweiligen Scheibe; technische Schichten nicht als Vorab-Stories bauen.
Reine verhaltenserhaltende Refactoring-Stories mit überprüfbarem Wartbarkeitsziel
und reine Dokumentations-Stories mit überprüfbarem Dokumentationsziel sind zulässig.
Auch sie liefern ein abgeschlossenes Ergebnis statt einer unfertigen technischen Schicht.

Bei „Aktiviere die erste Story“ oder „Erzeuge eine active Spec“:

1. Überschrift und vollständigen Inhalt wortgetreu nach `active/` übernehmen.
2. Übernahme prüfen, danach die Story vollständig aus dem Backlog entfernen.
3. Ziel/Nicht-Ziele, Vertikalen, Entscheidungen, Risiken, Abnahme und Nachweise ergänzen, analog zu [0005](implemented/0005-weave-next-learning-path.md). Noch nicht erbrachte Nachweise nicht als erledigt darstellen.
4. Noch nichts implementieren.

Vor fachlicher oder architektonischer Implementierung liegt **eine** Spec direkt
unter `active/`, mit kurzem englischem Namen ohne Datum oder Nummer.
RED-Grund, GREEN, Reviewentscheidungen und nötige Quellen-/Browsernachweise während
der Arbeit dort einmal pflegen; nicht anwendbare Nachweise begründen.
Vor dem Commit keine offenen Platzhalter.

## Prüfung mit gezieltem Aufwand

Lese- und Ausgabegrenzen: [AGENTS.md](../../AGENTS.md#vor-jedem-lesen-und-tool-aufruf).
Testorganisation, Runner und Gültigkeit von Nachweisen: passende Abschnitte der
[Qualitätsstrategie](../quality/verification-strategy.md) gemäß [Index](../INDEX.md).

### TDD und Spec-Nachweise

Neue oder geänderte Teil-Features:

1. **RED:** Vor Implementierung einen aus fachlich korrektem Grund fehlschlagenden Test schreiben und ausführen; zuvor Testorganisation lesen.
2. **GREEN:** Kleinste Implementierung bis zum bestandenen Test.

Verhaltenserhaltendes Refactoring weist unverändertes Verhalten durch passende
grüne Prüfungen vor und nach dem Umbau nach; neue Anforderungen brauchen RED → GREEN.

Nach dem letzten GREEN genau ein fokussiertes [Subagentenreview](../quality/code-review.md).
Begründete Verbesserungen umsetzen, Ablehnungen konkret in der Spec begründen;
danach endgültigen Stand prüfen und Nutzerfreigabe einholen. Auch nach Korrekturen
keine zweite Reviewrunde. Keine neue Funktionalität nebenbei in Reviewkorrekturen.
Reine Dokumentations-Stories benötigen weder künstliche RED-/GREEN-Tests noch ein Subagentenreview.

Bei fachlichen Inhalten vor dem Coding knapp Aussage, möglichst primäre Quelle,
Prüftag und Unsicherheit festhalten. Quellen gebündelt prüfen; Inhaltsregeln gelten zusätzlich.
Die unabhängige fachliche Fragenprüfung nach den [Fragenregeln](../content/question-authoring.md#unabhängig-prüfen-und-validieren)
ist vom einmaligen Code-Subagentenreview getrennt; ihre Wiederholungsregeln bleiben bestehen.

## Abschluss und Archivierung

[Freigabeschranken](../../AGENTS.md#nicht-verhandelbar) gelten unverändert.
Der Implementierungsauftrag ersetzt weder positive manuelle Abnahme noch Commit-Freigabe.
Bei Produktstories erfolgt die Abnahme im Browser, bei reinen Dokumentations-Stories
als Dokumentenprüfung. Für normale Produktstories keine zusätzliche Dokumentenabnahme verlangen.

Commit-Freigabe ausdrücklich einholen; sie erlaubt keinen Push.
Integration/Push nach `origin/main` nur auf ausdrücklichen Auftrag aus dem eigenen
Worktree und nach Fast-forward-Prüfung. Entwickler-Worktree und dessen lokales
`main` bleiben unverändert: [Integration und Abbruchbedingungen](../quality/worktrees.md#eigene-änderungen-abbruch-und-integration).

Unmittelbar vor Commit Arbeitsbaum, gestagten Diff und Whitespace prüfen;
keine fremden Änderungen übernehmen. Test- und Freigaberückmeldungen in Git nur
als erfolgt vermerken, ohne Wortlaut oder persönliche Details.

Nach fertiger Änderung, grünen Prüfungen und manueller Abnahme die ausgefüllte
Spec direkt nach `implemented/` verschieben: nächste vierstellige Nummer nach
Abschlussreihenfolge, ohne Datums-/Commit-Kennung. Archivierte Specs nicht ändern;
Korrekturen erhalten eine neue Spec. Archivierung und Änderung gehören in denselben Commit.
Architekturausnahmen heben die Vertikalgrenze nicht auf.

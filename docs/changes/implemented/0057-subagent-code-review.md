## Von Subaggent Code-Review machen lassen
Von eigenem Agenten Code-Review machen lassen.
- Aufwand begrenzen: Jeweils nur 1 mal
- Hauptagent sollte nur mit gutem Grund ablehnen und die Ablehnung dokumentieren (z.B. Verweis auf Projektvorgaben)
- Ziel: Fokussiertes Code-Review, kein Bias, wenn du es gerade selbst programmiert hast, keine Verwässerung des Haupt-Contexts.
- Subagent:
  - Reiner Lesezugriff (technisch durch eine Konfiguration bei der Erstellung des Sub-Agenten sicherstellen?) aufs Projekt
  - Tools für Subagenten verbieten (npm,...) - Notiz für später: Falls wir einmal Tools zum Lesen des Codes verwenden, dann diese Tools erlauben
- Für das Hand-off:
  - Der Hauptagent übergibt die geänderten Vertikalen (in aller Regel max. 2)
  - Hin-Übergabe:
    - Erwartetes Ergebnis
      - Liste von konkreten möglichen Code-Verbesserungen (Refactorings)
      - Immer ausgehende, von den Änderungen im Worktree
        - Kein Review überall im Projekt!
        - Ausgehend von den Änderungen im Worktree dann mit Blick auf den gesamten Code der vorgegebenen Vertikalen (sowie von app und shared), was z.B. Dopplungen, Neid o.Ä. betrifft
      - Ziel:
        - Gute Wartbarkeit, gute Lesbarkeit, lokales Verständnis, keine unnötige Komplexität
        - Code Smells nach Martin Fowler suchen (Neid, ...) auf Lösungsvorschläge prüfen
        - Innerhalb je einer Vertikale einheitliche Konzepte, nichts mehr als 2x
        - Fachlichen Code und Technischen Code trennen, so dass der Code gut fachlich lesbar ist
        - Übliches (weitgehend aktuelles) idiomatisches TypeScript
        - Technischer Code, der mehr als 2x auftritt (oder mehr als 2x dasselbe Problem löst) sollte in shared oder app stehen und dort zu 1x zusammengefasst sein.
    - Bereits geklärte überprüfbare Fakten mit Quellen (relevant?)
    - Was darf der Subagent
      - Keine Veränderung der Funktionalität
    - Herkunft (Adressat klar machen)
    - Bestätigen lassen (Akzeptiert). - Was bringt das?
    - Rückfragen erlaubt? (Nicht sinnvoll, oder?)
  - Klare und Datensparsame Rück-Übergabe des Ergebnisses:
    - Klare Verweise auf die Code-Stelle, klare Benennung der Methode(n), Variable(n) o.Ä.
      - Beschreibung kurz und unter Verwendung von Fach-Terminologie:
        - z.B. Name des Refactorings, Name des Ziel-Musters, Name der Zielarchitektur
        - Beschreibung der Parameter (Neuer Name, Einzelne Klassen des Ziel-Musters)
        - Dinge, die immer gleich sind, in einer Datei nennen (gemeinsame Datei), im Subagenten-Prompt nur auf die Datei verweisen
        - Wichtigkeit
        - Sinnvolle Reihenfolge

Fehlt noch etwas? Gewisse technische Konfigurationen / CSS / HTML-Templates?

Der bisherige REFACTOR-Schritt (TDD) entfällt und wird durch dieses (jeweils einmalige) Code-Review ersetzt.

### Geklärter Umfang

- Dauerhafte Projektvorgabe: Nach jeder Story genau ein fokussiertes Review durch einen eigenen Subagenten nach dem letzten GREEN-Schritt, vor dem abschließenden Testdurchlauf und der User-Freigabe. Es ersetzt den bisherigen eigenständigen REFACTOR-Schritt.
- Der Hauptagent setzt begründete Vorschläge selbst um und dokumentiert begründete Ablehnungen. Kein zweiter Reviewdurchlauf nach den Korrekturen.
- Verbindliche Leseanweisung genügt; keine technische Read-only-Isolation erforderlich. Nur lesende Werkzeuge wie `git diff`, `rg` und gezielte Dateizugriffe sind erlaubt; keine Änderungen, Tests, Installationen oder weiteren Subagenten.
- Gemeinsame Projektvorgabe samt Übergabevorlage. Tests, CSS, HTML/Templates und Konfiguration gehören bei Bezug zur Änderung zum Reviewumfang; reine Dokumentations-Stories erhalten entsprechend ein Dokumentationsreview.
- Keine separate Akzeptiert-Nachricht. Konkrete Verständnisfragen an den Hauptagenten sind erlaubt, ohne einen zweiten Reviewdurchlauf zu starten.
- Keine Produktänderung, keine neue Abhängigkeit und keine betroffene fachliche Vertikale.

## Ziel und Nicht-Ziele

Die vorstehende Backlog-Story einschließlich Refinement ist wortgetreu übernommen.
Maßgeblich für die Umsetzung sind die geklärten Entscheidungen: Eine dauerhafte
Reviewpflicht für jede Story, jeweils ein Durchlauf. Die früheren offenen Fragen
und die technische Read-only-Idee sind damit geklärt.

Abschließende Entscheidung nach Nutzeränderung: Reine Dokumentations-Stories
sind von der Reviewpflicht ausgenommen. Diese Entscheidung ersetzt für diesen
Fall die frühere Refinement-Aussage zum Dokumentationsreview; die übrigen Regeln
gelten unverändert. Das für diese Story bereits erfolgte Review bleibt als
erbrachter Nachweis bestehen.

Lieferumfang: konsistente Projektanweisungen, ein gemeinsamer Reviewvertrag mit
Übergabevorlage und dessen Anwendung auf diese Dokumentations-Story. Kein
projektweites Bestandsreview, keine App-Änderung und keine globale Codex-Konfiguration.
Betroffene fachliche Vertikalen: keine; ausschließlich Projekt-Dokumentation.

## Entscheidungen und Risiken

- RED → GREEN bleibt je Teil-Feature; nach dem letzten GREEN ersetzt ein einmaliges
  Subagentenreview den eigenständigen REFACTOR-Schritt. Der Hauptagent bearbeitet
  die Vorschläge vor den abschließenden Prüfungen und der User-Freigabe.
- Nur lesende Anweisungen sind eine Verhaltensvorgabe, keine technische Sandbox.
  Die aktuelle Subagentenschnittstelle unterstützt keine eigenen Rechteparameter.
  Laut [OpenAI-Dokumentation](https://learn.chatgpt.com/docs/agent-configuration/subagents#approvals-and-sandbox-controls),
  geprüft am 18.10.2026, erben Subagenten die Sandbox des Hauptagenten. Eine
  Custom-Agent-Datei erzeugt keine eigene Read-only-Sandbox. Der Nutzer hat die
  verbindliche Anweisung als ausreichend festgelegt.
- Neue Reviewer erhalten nur Auftrag, Diff-Bezug, betroffene Bereiche, relevante
  Vorgaben und belegte Fakten; keine vollständige Gesprächshistorie oder privaten
  Protokolle. Quellen nur bei Bedeutung für einen konkreten Vorschlag übergeben.
- Review darf weder die Vertikalgrenze noch Data Hiding aushebeln. Gemeinsamer
  technischer Code wird nur an einem zulässigen Ort zusammengeführt.
- Reine Dokumentationsänderung: inhaltliche Konsistenz, Links und Diff prüfen;
  keine App-Tests und keine manuelle Browserprüfung erforderlich. Die ausdrückliche
  Nutzerfreigabe vor dem Commit bleibt erforderlich.

## Abnahme

- AGENTS.md und Änderungsablauf verlangen genau ein Review nach dem letzten GREEN
  jeder Story mit Ausnahme reiner Dokumentations-Stories und vor den abschließenden
  Prüfungen sowie der Nutzerfreigabe.
- Die gemeinsame Vorgabe definiert Umfang, Lesegrenzen, Übergabe, Prioritäten,
  Rückgabe und begründete Behandlung aller Vorschläge ohne weitere Reviewrunde.
- Tests, Styles, Templates, Konfiguration und Dokumentation werden bei Bezug zum
  Diff berücksichtigt; ein projektweites Bestandsreview bleibt ausgeschlossen.
- Aktuelle Workflowdokumente widersprechen sich nicht. Archivierte Specs bleiben
  unverändert. Diese Story durchläuft selbst genau ein Subagentenreview.

## Umsetzung und Nachweise

Reine Dokumentation: RED/GREEN wird durch eine gezielte Anforderungsprüfung des
Dokumentationsstands belegt; keine dauerhaften Tests, die Textformulierungen spiegeln.

| Schritt | Ergebnis |
| --- | --- |
| Aktivierung | Verfeinerte erste Story wortgetreu kopiert, Übernahme geprüft und erst danach aus dem Backlog entfernt. |
| RED | Gezielte Dokumentationsprüfung vor der Umsetzung: 2 von 2 Prüfungen fehlgeschlagen, 98 ms, Exitcode 1. AGENTS.md enthielt keine Reviewpflicht nach dem letzten GREEN, der gemeinsame Reviewvertrag samt Vorlage fehlte. |
| GREEN | Projektvorgaben und gemeinsame Vorlage ergänzt. 68 Dokumentationsprüfungen (lokale Linkziele, Reviewpflicht, eigener Reviewerkontext, Reihenfolge, kein zweites Review, Backlog-Aktivierung) bestanden, 139 ms, Exitcode 0; Whitespace-Prüfung grün. |
| Subagentenreview | Genau ein separater Reviewer mit frischem Kontext nach GREEN. Umfang: sechs geänderte Dokumente gegen den Basisstand sowie neuer Reviewvertrag und aktive Spec. Ergebnis: keine belegbaren Verbesserungsvorschläge; keine Ablehnungen oder Korrekturen erforderlich. Reviewer hat ausschließlich gelesen, keine Tests ausgeführt. |
| Abschließende Prüfung | Nach Review: 113 Dokumentationsprüfungen einschließlich lokaler Linkziele und Anker bestanden, 172 ms, Exitcode 0. Whitespace-Prüfung der Änderungen grün. Eine zunächst vollständige Whitespace-Prüfung erfasste vorhandene Leerzeichen im unveränderten Backlog und der wortgetreu übernommenen Story; deshalb auf Änderungen und neu verfassten Text begrenzt. Keine App-Tests oder Browserprüfung bei dieser reinen Dokumentationsänderung erforderlich. |
| Nutzerfreigabe | Erfolgt. |

Abschließende Prüfung nach der Nutzeränderung: 105 lokale Link- und
Ankerprüfungen sowie 6 Konsistenzprüfungen der Dokumentationsausnahme bestanden,
Exitcode 0. Der zunächst zeilengebundene Ausnahmeprüfer wurde für den vorhandenen
Zeilenumbruch korrigiert. Die App-Pflichtsuite ist bei dieser reinen
Dokumentationsänderung nicht erforderlich; maßgeblich sind die
Dokumentationsprüfungen. Bei der Archivierung werden ausschließlich nachgestellte
Leerzeichen der übernommenen Story normalisiert.

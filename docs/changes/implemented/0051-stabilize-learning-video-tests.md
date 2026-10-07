# Lernvideos unabhängig von der Quellenreihenfolge prüfen

## Ziel und Umfang

Der vorhandene E2E-Ablauf für Lernvideos wählt die beiden konkret geprüften
Videos anhand ihrer URL und ihres Medientyps statt über den Quellenindex aus.
Zusätzliche Audioquellen oder eine geänderte Reihenfolge dürfen die Auswahl
nicht auf eine andere Quelle verschieben.

Betroffene Vertikale: `topics` (ausschließlich E2E-Test). Die vorhandenen lokalen
Inhaltsergänzungen bleiben unverändert. Keine neuen Abhängigkeiten und keine
Änderungen an App-Verhalten, Test-Runner oder anderen Nutzerabläufen.
Der freigegebene gemeinsame Commit umfasst außerdem die fünf bereits vor der
Testanpassung vorhandenen Audioquellen in `topics.ts`; sie wurden in sämtlichen
oben dokumentierten Prüfungen mitgeprüft.

Vorgaben: [Änderungs-Workflow](../README.md),
[dauerhafte Vorgaben](../../governance/durable-rules.md#tdd-und-spec-driven-development)
und [Qualitätsstrategie](../../quality/verification-strategy.md#lokale-testaufrufe-und-ausgabe).

## Risiken und Abnahme

- Die Video-URL identifiziert die konkrete Quelle unabhängig von deren Titel
  und Listenposition. Ein fehlendes Video muss mit Themen-ID und URL scheitern.
- Der bestehende Test wird angepasst; die Anforderung benötigt keinen neuen
  Testfall. Beide URLs müssen weiterhin auf Videoquellen des jeweiligen Themas
  verweisen.
- Desktop und Smartphone prüfen weiterhin die deutschen Videotitel, die
  Dauern `19:43` und `96:14`, den Lernabschnitt `10:00–52:36`, die bewusste
  externe Navigation und das Ausbleiben automatischer externer Requests.
- Die vollständige lokale Pflichtsuite muss nach der letzten Teständerung grün
  sein. Eine manuelle Bestätigung und ein aktueller lokaler Browsernachweis
  bleiben vor einem späteren Commit erforderlich.
- Unter gleichzeitiger Browser- und Unit-Last kann der bestehende umfangreiche
  Test der Listenpräferenzen die Standardgrenze von fünf Sekunden überschreiten.
  Ein isolierter vollständiger Lauf dient zur Eingrenzung; die genaue Ursache
  ist damit nicht bewiesen. Timeout und Runner werden hier nicht geändert.

## Umsetzung und Nachweise

- RED: Der bereits ausgeführte vollständige E2E-Einmallauf ergab 74 bestandene
  und zwei fehlgeschlagene Fälle (Desktop und Smartphone), 317,17 s, Exitcode 1.
  Durch die eingefügte Audioquelle zeigt der Quellenindex beim langen Video
  auf Audio mit `25:31` statt auf das erwartete Video mit `96:14`.
- GREEN: Der gezielte vorhandene E2E-Ablauf besteht auf Desktop und Smartphone
  mit den unveränderten lokalen Audioergänzungen: zwei bestanden, 2,58 s,
  Exitcode 0 (`npm run --silent test:e2e -- e2e/verticals/topics/learning-videos.spec.ts`).
- REFACTOR: Beide Videoauswahlen verwenden denselben Helfer für Themen-ID,
  Video-URL und Medientyp. Die Ziel-URL des geöffneten Videos wird im Test
  wiederverwendet. Die bestehenden fachlichen Assertions bleiben erhalten.
- Pflichtsuite nach der Testanpassung:

  | Prüfung | Ergebnis | Laufzeit | Exitcode |
  | --- | --- | --- | --- |
  | Formatprüfung nach automatischer Formatierung | bestanden | 4,15 s | 0 |
  | Type-Aware-Lint | bestanden | 5,88 s | 0 |
  | Typprüfung | bestanden | 4,53 s | 0 |
  | Runner-Selbsttests | 11 bestanden | 3,20 s | 0 |
  | Architektur und Vertikal-Scope-Selbsttests | vier bestanden, keine Abhängigkeitsverletzung | 7,62 s | 0 |
  | Lizenzprüfung | bestanden | 1,61 s | 0 |
  | Produktionsbuild und Artefaktprüfung | bestanden | 2,33 s | 0 |
  | Vollständige Unit-/Komponentensuite, isoliert | 130 bestanden | 9,35 s | 0 |
  | Vollständige Chromium-E2E-Suite, Desktop und Smartphone | 76 bestanden | 61,45 s | 0 |
  | Sicherheits-Audit | keine Schwachstellen | 3,32 s | 0 |
  | Diff-Whitespace-Prüfung | bestanden | — | 0 |

  Die Inhaltsvalidierung ist durch die vollständige Unit-Suite eingeschlossen;
  dieselben grünen Tests wurden nicht nochmals separat ausgeführt. Beim ersten
  parallel zu E2E ausgeführten Unit-Lauf bestanden 129 Fälle, ein bestehender
  Listenpräferenz-Test überschritt das Zeitlimit (20,82 s, Exitcode 1). Der
  anschließende vollständige isolierte Lauf bestand ohne Änderungen an diesem
  Test. Nach der rein automatischen Zeilenformatierung wurde die Formatprüfung
  erneut erfolgreich ausgeführt; fachliche Assertions blieben unverändert.

- Browsernachweis: Der vorhandene Lernvideoablauf wurde automatisiert in
  Desktop-Chromium und mobilem Chromium erfolgreich geprüft. Für diese Läufe
  wurde der lokale Vite-Server separat gestartet und wiederverwendet, um den
  zuvor beobachteten Stillstand beim Webserver-Teardown zu vermeiden.
- Unmittelbarer lokaler Browsercheck vor dem Commit: Im Codex In-app Browser
  unter `http://127.0.0.1:5173/` das Thema „Werkzeugrechte und MCP-Zugriffe
  begrenzen“ über den Schnellfilter geöffnet und die Quellen visuell geprüft.
  Die Audioquelle wird mit `25:31`, das MCP-Sicherheitsvideo separat mit `96:14`
  und Lernabschnitt `10:00–52:36` angezeigt; Quelle, Kennzeichnung und Umbruch
  sind im schmalen Browserfenster lesbar.
- Abschluss: Testanpassung fertig, Pflichtsuite grün, positive manuelle
  Testbestätigung und Commitfreigabe erfolgt. Nach dem grünen Prüfnachweis
  wurden ausschließlich diese Dokumentationsnachweise ergänzt. Die Spec wird
  zusammen mit der Testanpassung und den mitgeprüften Audioergänzungen archiviert
  und committet. Keine offenen Umsetzungsschritte.

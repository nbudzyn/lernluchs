# Fehlerdetails der lokalen KI-Suche für Android-Diagnose

Android (Samsung-Browser):
Beim Auslösen der Suche über KI (nach Eingabe des Textes auf "Schließen") kommt sofort: "Die lokale KI-Suche ist auf diesem Gerät...". Erneut versuchen erzeugt sofort dasselbe.

## Ziel und Umfang

Die genaue Ursache des Android-Abbruchs ermitteln und nach Möglichkeit beheben.
Als ausdrücklich beauftragten nächsten Schritt eine Diagnoseversion bauen:
Die tatsächliche Fehlermeldung mit dem betroffenen Verarbeitungsschritt direkt
im Browser anzeigen. Keine Ursache ohne Geräte-Nachweis als behoben erklären.

Betroffene Vertikale: `topics`; zusätzlich Tests, Backlog, diese Spec und die
ausdrücklich beauftragte zentrale Node-24-Vorgabe in `AGENTS.md`.
Arbeitsort: zugeordneter temporärer Worktree `2bad/lernluchs`, Branch
`codex/android-ai-search`, Basis `df76786` (mit `origin/main` abgeglichen).
Keine neuen Abhängigkeiten, Modellwechsel oder Änderungen der Suchqualität.

## Entscheidungen und Abnahme

- Fehler von Worker-Erzeugung, Worker-Ausführung, Modellladen und Berechnung
  sowie Zeitüberschreitungen bleiben unterscheidbar. Vorhandene Laufzeitmeldungen
  nicht durch einen pauschalen Verfügbarkeitshinweis ersetzen.
- Technische Details als lesbarer, umbrechender Text im bestehenden Fehlerbereich
  anzeigen. Fremder Fehlertext wird nicht als HTML ausgeführt.
- Fehlermeldungen und Eingaben bleiben flüchtig auf dem Gerät; keine Telemetrie,
  Speicherung oder Aufnahme tatsächlicher Gerätefehler in Git.
- Erneut versuchen und normale Filter bleiben nutzbar. Ein erfolgreicher neuer
  Versuch oder Filter-Reset entfernt alte Fehlerdetails.
- Der Ablauf mit „Schließen“ erhält einen Browsernachweis. Ein simulierter
  Modellfehler muss seine Ursache anzeigen und nach Aufheben erfolgreich erneut
  versucht werden können.

## Diagnose und Grenzen

Der Ablauf funktioniert im lokalen Desktop-Chrome mit echtem Modell.
Android-Hardware steht dem Agenten nicht zur Verfügung; die konkrete Ursache
ist noch offen. Eine mögliche zusätzliche Speicherbelastung beim sequenziellen
Lesen geklonter Modellantworten wurde erkannt, aber nicht als Fehlerursache
nachgewiesen und wird in dieser Diagnoseversion nicht spekulativ geändert.
Hintergrund: [Response.clone und Pufferung](https://developer.mozilla.org/en-US/docs/Web/API/Response/clone), geprüft am 26.10.2026.

## Nachweise und offene Schritte

- RED: gezielter Silent-Unit-Lauf, 4 bestanden / 6 erwartete Fehler, 34,85 s,
  Exitcode 1. Nachgewiesen: Originalursachen, Dateiname/HTTP-Status, Zeitlimit und
  Anzeige gehen bisher verloren.
- GREEN: gezielte Unit-/Komponententests 13 bestanden, 4,11 s, Exitcode 0.
  Fehlerursachen werden durchgereicht, sicher als Text angezeigt und bei
  erfolgreichem Wiederholen entfernt; beide Zeitlimits sind unterscheidbar.
  Browser-DOMExceptions, Text-/Zahlfehler sowie fehlende Fehlerangaben sind
  abgedeckt, ebenso Berechnungsfehler und synchrone Nachrichten-Sendefehler.
- Genau ein fokussiertes Subagentenreview gegen `df76786` einschließlich neuer
  Fehlerformatierung und aktiver Spec durchgeführt. Ein Vorschlag angenommen:
  unabhängige Client-Fehlerfälle mit benannten Soft-Assertions vollständig prüfen,
  auch wenn ein Fall fehlschlägt. Keine weiteren belegten Funde, keine Ablehnungen.
- Beim Abschlusslauf eine zusätzliche Diagnose-Lücke bei DOMExceptions erkannt
  (227 Tests bestanden, 1 fehlgeschlagen): Browserfehler aus anderem Kontext
  dürfen nicht allein per `instanceof Error` erkannt werden. Fehlerformatierung
  entsprechend auf vorhandene Namen-/Meldungsfelder begrenzt korrigiert.
- Abschließendes `npm run check` unter Node 24.19.0: bestanden, 101,39 s,
  Exitcode 0; Formatierung, Lint, Typen, 11 Runner-Selbsttests, 228 Unit-/
  Komponententests einschließlich Dokumentation, 35 Inhaltsprüfungen,
  Architektur-/Lizenzprüfungen und Produktionsbuild grün.
- Echte Modell-/Qualitätsprüfung: 42 bestanden, 17,05 s, Exitcode 0.
- Audit bei unveränderten Abhängigkeiten: keine Schwachstellen, Exitcode 0.
- Dokumentationsprüfung nach der zentralen Node-Vorgabe: 1 bestanden, 1,87 s,
  Exitcode 0. Whitespace-Prüfung bestanden.
- Zusätzlicher lokaler Chrome-Browsernachweis bei 393 px: nach Eingabe und
  „Schließen“ Offline-Abbruch mit Fehlerdetails dargestellt; kein horizontaler
  Überlauf (Dokumentbreite und Viewport jeweils 393 px). Liefert der Browser
  keine technische Ursache, wird dies ausdrücklich angezeigt.
- Produktionsbuild zusätzlich in lokalem Chrome unter Port 5474 geprüft:
  Suchtext eingeben, „Schließen“, echtes Modell liefert zwei passende Themen;
  kein Fehlerhinweis, Suche abgeschlossen.
- Vollständige E2E-Abschlussprüfung unter Node 24: 88 bestanden, 91,38 s,
  Exitcode 0. Enthält die sechs KI-Abläufe in Desktop-/Mobil-Chromium und
  Firefox mit echtem Modell, „Schließen“, synthetischem HTTP-503-Fehler samt
  Details und erfolgreichem Wiederholen.

Die globale Node-25-Laufzeit wird von dependency-cruiser nicht unterstützt.
Abschlussprüfungen verwenden daher die bereits vorhandene Node-Version 24.19.0
über den Prozess-PATH. Diese Auswahl ist auf ausdrücklichen Auftrag zentral in
`AGENTS.md` festgehalten; keine Installation oder globale Umstellung vorgenommen.

Manuelle Abnahme der Diagnoseversion sowie ausdrückliche Commit- und
Integrationsfreigabe sind erfolgt. Diese Story liefert die Diagnoseversion;
die Ursache des Android-Abbruchs ist damit noch nicht behoben.
Gerätetest mit der veröffentlichten Diagnoseversion und anschließende gezielte
Fehlerkorrektur bleiben als Folgeauftrag im Backlog.

# KI-Modell unter dem veröffentlichten Seitenpfad laden

## Ziel und Umfang

Die lokale KI-Themensuche lädt ihre Modell-, Tokenizer-, Index- und WASM-Dateien
auch bei Veröffentlichung unter einem Unterpfad derselben Website zuverlässig.
Betroffen: Vertikale Themen und ihre Worker-Tests.
Keine neuen Abhängigkeiten, kein Modellwechsel, keine Cloudinferenz.

## Abnahme und Entscheidungen

- Die Asset-URLs im gebauten Worker zeigen auf das Modellverzeichnis unter dem
  konfigurierten Pages-Basispfad, mit und ohne abschließenden Schrägstrich.
- Die Suche funktioniert weiterhin bei Veröffentlichung an der Domainwurzel.
- Automatisierte Regression prüft die Asset-URLs des Workers; ein zusätzlicher
  Browserlauf prüft die Suche im Produktionsbuild unter dem Pages-Unterpfad.
- Suchfragen und persönlicher Zustand bleiben auf dem Gerät. Nur öffentliche
  Modelldateien werden vom selben Ursprung geladen und optional lokal gecacht.
- Arbeitsort ist der diesem Chat zugeordnete temporäre Worktree auf
  `codex/fix-ai-model-path`; Ausgangspunkt ist `72f6fdf` wie `origin/main`.

## Ursache und Prüfgrenze

Der Diagnosebuild mit `PAGES_BASE_PATH=/lernluchs` bestätigte eine direkte
Verkettung ohne trennenden Schrägstrich. Der Worker entfernt nun einen optionalen
abschließenden Schrägstrich und fügt die Pfadtrennung ausdrücklich hinzu.
Ein Desktop-/Mobiltest ersetzt keine manuelle Prüfung auf dem Android-Gerät.

## Nachweise

- RED: Bestehenden erfolgreichen Worker-Test um drei Basispfade erweitert.
  Ohne abschließenden Schrägstrich schlugen die Erwartungen für alle vier
  Asset-URLs aus dem beabsichtigten Grund fehl: 7 bestanden, 1 fehlgeschlagen,
  Exitcode 1 (2,44 s).
- GREEN: Gleicher fokussierter Silent-Runner nach der Pfadkorrektur:
  8 Tests bestanden, Exitcode 0 (2,56 s).
- Sicherheitsprüfung: npm audit meldet keine bekannten Schwachstellen, Exitcode 0.
- Genau ein fokussiertes Subagentenreview nach GREEN: keine belegten Funktions-,
  Datenschutz-, Architektur- oder Fowler-Smell-Probleme. Ein Vorschlag betraf
  eine zusätzliche automatisierte Produktionsbuild-Matrix. Diese wird nicht
  ergänzt: Die zuvor missverständliche Spec ist präzisiert; die direkte
  Worker-Regression deckt alle drei Basispfade ab. Eine weitere Browser-Testhülle
  mit mehreren Builds wäre für die einzeilige Pfadkorrektur unverhältnismäßig.
  Der tatsächlich gebaute Worker wird zusätzlich im Browser geprüft.
- Abschließende Prüfungen: Formatierung, Lint, Typprüfung, Runner-Selbsttests,
  Architektur und Lizenzen bestanden, jeweils Exitcode 0. Unit-/Komponentensuite:
  230 bestanden (90,35 s); echte Modellprüfungen: 42 bestanden (15,89 s);
  Inhaltsvalidierung: 35 bestanden (3,12 s), jeweils Exitcode 0.
- Produktionsbuild mit vollständigen Modellassets, Pages-Unterpfad-Build und
  Workflow-Prüfung bestanden, jeweils Exitcode 0.
- Browserprüfung: In-App-Browser (Chromium), Produktionsbuild mit
  `PAGES_BASE_PATH=/lernluchs`, aufgerufen unter `/lernluchs/`. KI-Suche nach
  Spec-driven Development lädt das echte lokale Modell, zeigt zwei Treffer
  einschließlich des passenden Themas und keinen Ladefehler.
- Vollständige Browser-E2E: 88 bestanden (96,61 s), Exitcode 0, einschließlich
  Desktop-/Mobil-Chromium und der KI-Suche in Firefox.
- Ausschließlich eine fachliche Vertikale geändert: Themen. Die Commitgrenze
  bleibt beim späteren Commit zusätzlich durch den vorhandenen Guard prüfbar.
- Dokumentationstest: 1 bestanden (27,04 s), Exitcode 0. Whitespace-Prüfung
  bestanden. Produktcode und Tests sind seit den grünen Nachweisen unverändert.
- Manuelle Nutzerabnahme und Commit-Freigabe erfolgt. Integration nach
  `origin/main` ausdrücklich freigegeben; Fast-forward vor dem Push prüfen.

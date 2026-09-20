# Akzeptanz: Redaktionell geprüfter Grundlagen-Inhaltskatalog

## Ausführbare Nachweise

- Der Katalog enthält genau die sechs in `design.md` benannten Themen mit
  eindeutigen, dauerhaften IDs.
- Jede Lernkarte ist deutsch, knapp und enthält Problem, Kernkonzept,
  Java-/Web-Einsatz sowie eine wichtige Grenze oder ein Gegenbeispiel.
- Jeder Inhalt validiert Veröffentlichungsdatum, Datum der fachlichen Prüfung,
  Wiedervorlagetermin, Inhaltsversion, erlaubten Status und mindestens eine
  Quelle mit Typ, Sprache und HTTP(S)-URL.
- `npm run validate:content`, die gesamte Prüfkette und der Produktionsbuild
  sind grün.
- `npm audit --audit-level=high` meldet keine hohe oder kritische bekannte
  Schwachstelle.

## Redaktioneller Nachweis

- Die in `design.md` dokumentierte Quellenprüfung nennt Quelle, Datum,
  Aktualitätsrisiko und bewusste Auslassungen.
- Es wurden keine Quellen ungeprüft aus der Tool-Landkarte übernommen.

## Manuelle Sichtprüfung

- Der lokale Entwicklungsserver zeigte im Codex-In-app-Browser weiterhin nur
  die bestehende Architekturhülle ohne Inhaltsansicht, externe
  Laufzeitressourcen oder persönliche Daten. Browser, Ablauf und Ergebnis
  sind in `tasks.md` dokumentiert.

## Nicht Teil dieser Akzeptanz

Landkarte, grafische Darstellung, Lernchecks, Fortschritt, Login,
KI-Anbindung sowie PWA-/Offline-Verhalten sind bewusst ausgeschlossen.

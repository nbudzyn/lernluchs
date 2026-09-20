# Akzeptanz: Öffentlicher Grundlagenkatalog im Browser

## Sichtbarer Nutzen

- Die Startseite zeigt die sechs geprüften Grundlagen-Themen als textuelle,
  semantische Übersicht.
- Nutzer können jedes Thema mit der Tastatur auswählen und anschließend die
  vollständige Lernkarte lesen: Problem, Kernkonzept, Java-/Web-Einsatz und
  wichtige Grenze.
- Die Karte zeigt Veröffentlichungsdatum, fachliches Prüfdatum,
  Wiedervorlagetermin, Inhaltsversion und Status sichtbar an.
- Quellen stehen als beschriftete Links bereit und werden ausschließlich
  durch bewusste Link-Aktivierung geöffnet.

## Ausführbare Nachweise

- Komponenten-/Nutzertests decken Übersicht, Auswahl, Karte, Metadaten und
  Quellenaktion ab.
- `npm run check` ist grün, einschließlich Typ-, Inhalts-, Komponenten-,
  Architektur- und Produktionsbuild-Prüfung.
- `npm audit --audit-level=high` meldet keine hohe oder kritische bekannte
  Schwachstelle.

## Manuelle Sichtprüfung

- Der lokale Browsernachweis dokumentiert Browser, URL, Tastaturablauf,
  sichtbare Karte sowie die bewusste Quellenaktion und ihr Ergebnis.

## Nicht Teil dieser Akzeptanz

Landkarte, grafische Darstellung, Canvas, Lernchecks, Fortschritt, Login,
KI-Anbindung, Telemetrie sowie PWA-/Offline-Funktion bleiben ausgeschlossen.

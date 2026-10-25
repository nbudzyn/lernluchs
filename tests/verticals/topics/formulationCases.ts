// Independently labelled before measuring or seeing the text variants.
export const formulationCases = [
  {
    id: "c01",
    split: "calibration",
    relevant: true,
    query:
      "Ich möchte eine Altanwendung von Cobol automatisiert nach Java migrieren.",
    reason:
      "Verhaltensermittlung und Vergleichstests bereiten die Ablösung vor.",
  },
  {
    id: "c02",
    split: "calibration",
    relevant: true,
    query:
      "Wie schreibe ich Charakterisierungstests für ein undokumentiertes Abrechnungsprogramm?",
    reason: "Bestehendes Verhalten vor Änderungen absichern.",
  },
  {
    id: "c03",
    split: "calibration",
    relevant: true,
    query:
      "Der Quelltext berechnet etwas anderes, als die Sachbearbeiter erzählen. Wie kläre ich, was wirklich passiert und was künftig gelten soll?",
    reason: "Beobachtung, Annahmen und gewünschte Fachregeln trennen.",
  },
  {
    id: "c04",
    split: "calibration",
    relevant: true,
    query:
      "Welche Eingaben und Ergebnisse sollten wir vom alten System sammeln, bevor wir es ersetzen?",
    reason: "Repräsentative Vergleichsfälle vor der Ablösung aufnehmen.",
  },
  {
    id: "c05",
    split: "calibration",
    relevant: true,
    query:
      "Wir wollen die verschachtelten Rabattregeln umbauen. Wie kann ich den geplanten Ablauf erst mit Pseudocode und Gegenbeispielen durchspielen?",
    reason: "Riskante Änderungen vor der Umsetzung konkret prüfen.",
  },
  {
    id: "c06",
    split: "calibration",
    relevant: false,
    query:
      "Wie entwickle ich einen neuen Taschenrechner ohne vorhandenen Code mit TDD von der ersten Anforderung an?",
    reason: "Neuentwicklung ohne zu ermittelndes Bestandsverhalten.",
  },
  {
    id: "c07",
    split: "calibration",
    relevant: false,
    query:
      "Wie formuliere ich ein OpenRewrite-Rezept, das ausschließlich alle Aufrufe von Api.fetch() in Api.load() umbenennt?",
    reason: "Reine mechanische API-Umbenennung.",
  },
  {
    id: "c08",
    split: "calibration",
    relevant: false,
    query:
      "Wie ändere ich mit Git den Text meiner letzten lokalen Commit-Nachricht?",
    reason: "Versionsverwaltung ohne Bezug zum Programmverhalten.",
  },
  {
    id: "c09",
    split: "calibration",
    relevant: false,
    query:
      "Wie richte ich für PostgreSQL tägliche Backups und eine Aufbewahrung von sieben Tagen ein?",
    reason: "Datenbankbetrieb und Sicherungsplanung.",
  },
  {
    id: "c10",
    split: "calibration",
    relevant: false,
    query: "Wann sollte ich meine Tomaten auf dem Balkon umtopfen?",
    reason: "Gartenthema.",
  },
  {
    id: "v01",
    split: "validation",
    relevant: true,
    query:
      "Niemand weiß mehr genau, warum unser altes Tool manche Aufträge ablehnt. Wo fange ich an?",
    reason: "Undokumentiertes Verhalten systematisch ermitteln.",
  },
  {
    id: "v02",
    split: "validation",
    relevant: true,
    query:
      "Kann ich Anfragen an die bisherige Anwendung aufzeichnen und gegen ihren Nachfolger abspielen, um Unterschiede zu finden?",
    reason: "Capture-Replay zum Vergleich von Alt und Neu.",
  },
  {
    id: "v03",
    split: "validation",
    relevant: true,
    query:
      "Die neue Fassung liefert bei denselben Dateien andere Summen. Wie bauen wir einen verlässlichen automatischen Vergleich auf?",
    reason: "Regressionen anhand gleicher Ein- und Ausgaben erkennen.",
  },
  {
    id: "v04",
    split: "validation",
    relevant: true,
    query:
      "Eine Kollegin sagt, die Sonderbehandlung sei Absicht; belegt ist das bisher nur durch zwei Beispiele. Wie halten wir Wissen und Vermutungen sauber auseinander?",
    reason: "Belege und Annahmen über bestehende Fachregeln unterscheiden.",
  },
  {
    id: "v05",
    split: "validation",
    relevant: true,
    query:
      "Beim Ersetzen unserer gewachsenen Zuordnungslogik wollen wir von Listen auf eine Map wechseln. Wie skizzieren wir vorher Fälle mit doppelten Schlüsseln, damit nichts untergeht?",
    reason: "Datenstrukturwechsel durch konkrete Gegenbeispiele absichern.",
  },
  {
    id: "v06",
    split: "validation",
    relevant: false,
    query:
      "Wie schreibe ich in Java einen switch-Ausdruck für die Zahlen eins bis sieben?",
    reason: "Sprachsyntax ohne Bestandsanalyse oder Verhaltensvergleich.",
  },
  {
    id: "v07",
    split: "validation",
    relevant: false,
    query:
      "Unsere unveränderte Anwendung zieht auf einen anderen Server. Wie stelle ich dafür den DNS-Eintrag um?",
    reason: "Reine Deploymentmigration.",
  },
  {
    id: "v08",
    split: "validation",
    relevant: false,
    query:
      "Wie konfiguriere ich JUnit so, dass die Tests meines frisch angelegten Beispielprojekts parallel laufen?",
    reason:
      "Testausführung konfigurieren, kein bestehendes Verhalten ermitteln.",
  },
  {
    id: "v09",
    split: "validation",
    relevant: false,
    query:
      "Wie entferne ich einen Git-Remote namens legacy aus meiner lokalen Repository-Konfiguration?",
    reason: "Git-Konfiguration trotz thematisch ähnlichem Namen.",
  },
  {
    id: "v10",
    split: "validation",
    relevant: false,
    query:
      "Wie berechne ich die Fläche eines Kreises mit einem Radius von vier Zentimetern?",
    reason: "Geometrieaufgabe.",
  },
] as const;

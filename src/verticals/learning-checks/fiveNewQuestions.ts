import type { Question } from "../../shared/question";

type Answer = [text: string, explanation: string];

const okfSpec =
  "https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md";
const githubTasks =
  "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results";
const discovery =
  "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works";
const userStories =
  "https://www.gov.uk/service-manual/agile-delivery/writing-user-stories";
const serviceBenefits =
  "https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits";
const legacyBlueprint =
  "https://martinfowler.com/articles/black-box-to-blueprint.html";
const asvs = "https://owasp.org/projects/asvs";
const asvsReadme = "https://github.com/OWASP/ASVS/blob/master/README.md";
const asvsScope =
  "https://github.com/OWASP/ASVS/blob/master/5.0/en/0x03-What-is-the-ASVS.md";
const asvsAssessment =
  "https://github.com/OWASP/ASVS/blob/master/5.0/en/0x04-Assessment_and_Certification.md";
const asvsChanges =
  "https://github.com/OWASP/ASVS/blob/master/5.0/en/0x05-For-Users-Of-4.0.md";
const nist = "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=958388";
const sycophancy =
  "https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models";

function question(
  id: string,
  sourceUrl: string,
  prompt: string,
  right: Answer,
  wrongOne: Answer,
  wrongTwo: Answer,
): Question {
  return {
    id,
    prompt,
    options: [right, wrongOne, wrongTwo].map(([text, explanation], index) => ({
      id: ["a", "b", "c"][index],
      text,
      correct: index === 0,
      explanation,
      sourceUrl,
    })),
  };
}

export const fiveNewQuestions: Record<string, Question[]> = {
  "open-knowledge-format": [
    question(
      "OKF01",
      `${okfSpec}#3-bundle-structure`,
      "Ein Team will kuratierte API-Begriffe als OKF-Bundle versionieren. Welche Grundstruktur passt?",
      [
        "Ein Verzeichnisbaum aus Markdown-Dateien",
        "Ein Bundle ist ein Verzeichnisbaum mit Konzeptdateien im Markdown-Format.",
      ],
      [
        "Eine einzelne JSON-Datenbank",
        "Strukturierte Daten können beschrieben werden; das Bundle selbst besteht aus Markdown-Dateien.",
      ],
      [
        "Eine Sammlung ausführbarer API-Schemata",
        "OKF kann auf Schemata verweisen, ersetzt sie aber nicht.",
      ],
    ),
    question(
      "OKF02",
      `${okfSpec}#4-concept-documents`,
      "Was enthält eine einzelne OKF-Konzeptdatei?",
      [
        "YAML-Frontmatter und einen Markdown-Textkörper",
        "Die Spezifikation teilt jede Konzeptdatei in diese beiden Teile.",
      ],
      [
        "Nur YAML-Felder ohne Textkörper",
        "YAML trägt Metadaten; der freie Textkörper gehört ebenfalls zur Datei.",
      ],
      [
        "Nur Markdown-Text ohne Metadatenblock",
        "Freier Text ist vorgesehen, aber die Datei beginnt mit Frontmatter.",
      ],
    ),
    question(
      "OKF03",
      `${okfSpec}#41-frontmatter`,
      "Welches Frontmatter-Feld ist für jedes OKF-Konzept verpflichtend?",
      [
        "type",
        "type kennzeichnet die Art des Konzepts und ist das einzige immer erforderliche Feld.",
      ],
      ["title", "Ein Titel ist für die Anzeige hilfreich, aber optional."],
      [
        "resource",
        "Eine Ressourcen-URI ist bei abstrakten Konzepten nicht erforderlich.",
      ],
    ),
    question(
      "OKF04",
      `${okfSpec}#41-frontmatter`,
      "Ein OKF-Konzept beschreibt einen abstrakten Geschäftsbegriff ohne eindeutige externe Ressource. Wie ist resource zu behandeln?",
      [
        "Das Feld kann fehlen",
        "resource ist optional und kann bei abstrakten Konzepten entfallen.",
      ],
      [
        "Das Feld muss eine erfundene URI enthalten",
        "Eine künstliche URI ist keine Pflicht; resource identifiziert einen tatsächlichen zugrunde liegenden Gegenstand.",
      ],
      [
        "Das Feld muss auf das Bundle-Verzeichnis zeigen",
        "Ein Bundle-Pfad ist nicht automatisch die Ressource des beschriebenen Begriffs.",
      ],
    ),
    question(
      "OKF05",
      `${okfSpec}#41-frontmatter`,
      "Ein Team fügt ein projektspezifisches Metadatenfeld zu einer Konzeptdatei hinzu. Wie sollen OKF-Konsumenten reagieren?",
      [
        "Das unbekannte Feld tolerieren",
        "Erweiterungen sind erlaubt; Konsumenten dürfen unbekannte Felder nicht zum Ablehnungsgrund machen.",
      ],
      [
        "Das gesamte Konzept als ungültig verwerfen",
        "Unbekannte Felder sind ausdrücklich zulässig.",
      ],
      [
        "Das Feld als Ersatz für type auswerten",
        "Ein Erweiterungsfeld ersetzt das erforderliche type nicht.",
      ],
    ),
    question(
      "OKF06",
      `${okfSpec}#42-body`,
      "Wie sollte ein umfangreicher OKF-Text für Menschen und Werkzeuge gegliedert werden?",
      [
        "Mit strukturellem Markdown wie Überschriften und Listen",
        "Die Spezifikation empfiehlt strukturelles Markdown für Lesen und Wiederfinden.",
      ],
      [
        "Nur als durchgehender Fließtext",
        "Fließtext ist möglich, aber die Quelle empfiehlt Struktur für den Textkörper.",
      ],
      [
        "Nur als YAML im Frontmatter",
        "Frontmatter trägt Metadaten; Erläuterungen gehören in den Markdown-Textkörper.",
      ],
    ),
    question(
      "OKF07",
      `${okfSpec}#3-bundle-structure`,
      "Welche Rolle hat index.md in einem OKF-Verzeichnis?",
      [
        "Es bietet eine optionale Übersicht über Inhalte",
        "index.md dient der schrittweisen Orientierung im Verzeichnis.",
      ],
      [
        "Es speichert verpflichtend jedes Konzept vollständig",
        "Konzepte liegen in eigenen Markdown-Dateien; index.md ist optional.",
      ],
      [
        "Es definiert die Pflichtfelder aller Konzepte",
        "Der Index beschreibt Einträge; Pflichtfelder stehen in der Format-Spezifikation.",
      ],
    ),
    question(
      "OKF08",
      `${okfSpec}#3-bundle-structure`,
      "Ein Team möchte ein OKF-Bundle als Archiv weitergeben. Was erlaubt die Spezifikation?",
      [
        "Ein tar- oder zip-Archiv des Verzeichnisses",
        "Neben einem Git-Repository sind Verzeichnisarchive als Verteilungsform möglich.",
      ],
      [
        "Einen Export der Konzepte in eine SQL-Datenbank",
        "Eine Datenbank kann Inhalte aufnehmen, ist aber nicht die beschriebene Bundle-Form.",
      ],
      [
        "Einen generierten Suchindex ohne Konzeptdateien",
        "Ein Index kann die Nutzung erleichtern, ersetzt aber das Markdown-Bundle nicht.",
      ],
    ),
    question(
      "OKF09",
      `${okfSpec}#31-reserved-filenames`,
      "Welche Dateien sind in OKF für Verzeichnisübersicht und Änderungsverlauf reserviert?",
      [
        "index.md und log.md",
        "Diese beiden Namen haben im Bundle eine festgelegte Sonderrolle.",
      ],
      [
        "README.md und CHANGELOG.md",
        "Solche Namen können in Projekten üblich sein, sind aber nicht die reservierten OKF-Namen.",
      ],
      [
        "schema.md und sources.md",
        "Schema und Quellen können Inhalt sein, sind aber keine reservierten Dateinamen.",
      ],
    ),
    question(
      "OKF10",
      `${okfSpec}#51-provenance-sources`,
      "Wo werden Materialien erfasst, aus denen ein OKF-Konzept abgeleitet wurde?",
      [
        "Im Frontmatter-Feld sources",
        "sources verzeichnet die Herkunftsmaterialien eines Konzepts.",
      ],
      [
        "Ausschließlich im Verzeichnisnamen",
        "Ein Verzeichnispfad zeigt Gruppierung, nicht die einzelnen Herkunftsmaterialien.",
      ],
      [
        "Ausschließlich in einem zentralen Bundle-Manifest",
        "Die Quelle beschreibt sources als Feld des jeweiligen Konzepts.",
      ],
    ),
    question(
      "OKF11",
      `${okfSpec}#51-provenance-sources`,
      "Welches Feld muss ein einzelner OKF-sources-Eintrag enthalten?",
      [
        "resource",
        "resource benennt das Herkunftsartefakt oder einen beschriebenen Geltungsbereich.",
      ],
      [
        "usage_count",
        "Ein Nutzungszähler ist nur ein optionales Glaubwürdigkeitssignal.",
      ],
      ["author", "Die Urheberangabe ist nützlich, aber optional."],
    ),
    question(
      "OKF12",
      `${okfSpec}#51-provenance-sources`,
      "Warum kann ein sources-Eintrag eine stabile id tragen?",
      [
        "Um einzelne Aussagen über Fußnoten einer Quelle zuzuordnen",
        "Die id verbindet Fußnoten im Text mit dem Quellen-Eintrag.",
      ],
      [
        "Um die Reihenfolge der Quellen festzuschreiben",
        "Stabile IDs verhindern gerade eine falsche Zuordnung nach Umordnungen.",
      ],
      [
        "Um einen externen Link zu ersetzen",
        "Die id ist ein Zuordnungsschlüssel; resource benennt die Quelle.",
      ],
    ),
    question(
      "OKF13",
      `${okfSpec}#51-provenance-sources`,
      "Ein Quellenverzeichnis wird umsortiert. Welche Form der Aussage-Zuordnung bleibt laut OKF stabil?",
      [
        "Fußnoten mit sources-IDs",
        "Eine benannte ID bleibt bei einer neuen Listenreihenfolge derselben Quelle zugeordnet.",
      ],
      [
        "Fußnoten mit Listenpositionen",
        "Positionsnummern können nach Umsortierung auf andere Quellen zeigen.",
      ],
      [
        "Aussagen ohne Quellenbezug",
        "Ohne Bezug ist die Herkunft einzelner Aussagen nicht nachvollziehbar.",
      ],
    ),
    question(
      "OKF14",
      `${okfSpec}#51-provenance-sources`,
      "Wie ist usage_count einer OKF-Quelle sinnvoll auszuwerten?",
      [
        "Als grobes Signal für Nutzung und Verlauf",
        "Die Spezifikation warnt vor präzisen Vergleichen zwischen unterschiedlichen Nutzungsarten.",
      ],
      [
        "Als universeller Qualitätswert aller Quellen",
        "Ein Abrufzähler misst keine allgemeine fachliche Qualität.",
      ],
      [
        "Als Beweis für die Richtigkeit jeder Aussage",
        "Nutzung ersetzt keine inhaltliche Prüfung der Quelle.",
      ],
    ),
    question(
      "OKF15",
      `${okfSpec}#52-trust-generated-and-verified`,
      "Warum trennt OKF generated und verified?",
      [
        "Erstellung und Bestätigung können von verschiedenen Akteuren stammen",
        "generated beschreibt die Herstellung, verified eine Prüfung gegen Quelle oder Ressource.",
      ],
      [
        "Damit jede Änderung automatisch als geprüft gilt",
        "Eine Inhaltsänderung und eine erneute Bestätigung sind unabhängige Vorgänge.",
      ],
      [
        "Damit Quellenlinks entfallen können",
        "Die Felder ersetzen die dokumentierte Herkunft nicht.",
      ],
    ),
    question(
      "OKF16",
      `${okfSpec}#53-trust-tiers`,
      "Welche Vertrauensstufe ergibt sich ohne verified-Eintrag?",
      [
        "Unverified",
        "Ohne verified leitet ein Konsument die Stufe unverified ab.",
      ],
      [
        "Machine-confirmed",
        "Diese Stufe braucht mindestens eine Bestätigung durch einen nicht-menschlichen Akteur.",
      ],
      [
        "Human-reviewed",
        "Diese Stufe setzt einen Eintrag mit human:-Akteur voraus.",
      ],
    ),
    question(
      "OKF17",
      `${okfSpec}#53-trust-tiers`,
      "Eine Konzeptdatei hat nur eine Prüfung durch process:nightly. Welche Stufe leitet OKF daraus ab?",
      [
        "Machine-confirmed",
        "Nicht-menschliche verified-Akteure ergeben machine-confirmed.",
      ],
      [
        "Human-reviewed",
        "Für diese Stufe muss ein human:-Akteur bestätigt haben.",
      ],
      [
        "Unverified",
        "Ein verified-Ereignis ist vorhanden; unverified gilt ohne solchen Eintrag.",
      ],
    ),
    question(
      "OKF18",
      `${okfSpec}#54-lifecycle-status`,
      "Welcher Status gilt für ein OKF-Konzept ohne status-Feld?",
      ["stable", "Fehlt status, ist stable der definierte Standardwert."],
      [
        "draft",
        "draft muss angegeben werden und bezeichnet noch nicht geprüftes Wissen.",
      ],
      [
        "deprecated",
        "deprecated markiert ein nicht mehr aktuelles Konzept und ist kein Standardwert.",
      ],
    ),
    question(
      "OKF19",
      `${okfSpec}#55-lifecycle-stale_after`,
      "Wann gilt ein OKF-Konzept mit stale_after als veraltet?",
      [
        "Wenn der aktuelle Zeitpunkt stale_after erreicht oder überschreitet",
        "Die Spezifikation definiert einen absoluten Vergleich now >= stale_after.",
      ],
      [
        "Nach einer festen Frist seit dem letzten Lesezugriff",
        "Der Zeitpunkt hängt nicht von einem späteren Zugriff ab.",
      ],
      [
        "Nach einer festen Frist seit generated.at",
        "stale_after ist ein absoluter Zeitpunkt, keine relative Frist seit der Erstellung.",
      ],
    ),
    question(
      "OKF20",
      `${okfSpec}#61-links-between-concepts`,
      "Wie drückt OKF einen fachlichen Bezug zwischen zwei Konzepten aus?",
      [
        "Durch einen Markdown-Link mit erklärendem Kontext",
        "Der Link setzt die Verbindung; die umgebende Formulierung erklärt ihre Art.",
      ],
      [
        "Durch eine verpflichtende zentrale Beziehungstabelle",
        "Eine solche Tabelle ist in OKF nicht erforderlich.",
      ],
      [
        "Durch ein gemeinsames Tag in beiden Konzepten",
        "Tags erlauben Kategorisierung, drücken aber keinen gerichteten Bezug mit Bedeutung aus.",
      ],
    ),
    question(
      "OKF21",
      `${okfSpec}#61-links-between-concepts`,
      "Ein verlinktes OKF-Konzept existiert noch nicht. Wie soll ein Konsument damit umgehen?",
      [
        "Den defekten Link tolerieren",
        "Ein noch nicht vorhandenes Ziel macht das Ausgangskonzept laut Spezifikation nicht ungültig.",
      ],
      [
        "Das gesamte Bundle zurückweisen",
        "OKF verlangt Toleranz für fehlende Linkziele.",
      ],
      [
        "Den Link als Beweis für eine geprüfte Quelle werten",
        "Ein Link kann auf noch nicht erstelltes Wissen zeigen.",
      ],
    ),
    question(
      "OKF22",
      `${okfSpec}#8-index-files`,
      "Wie hilft ein OKF-index.md einem Agenten bei einem großen Bundle?",
      [
        "Er zeigt erst die verfügbaren Einträge eines Verzeichnisses",
        "Die Übersicht unterstützt schrittweises Öffnen relevanter Konzepte.",
      ],
      [
        "Er bündelt die Volltexte aller Unterverzeichnisse",
        "Der Index verweist auf Einträge, damit Inhalte bei Bedarf einzeln geöffnet werden.",
      ],
      [
        "Er ersetzt die einzelnen Konzeptdateien",
        "Der Index verweist auf die Inhalte, statt sie vollständig zu ersetzen.",
      ],
    ),
    question(
      "OKF23",
      `${okfSpec}#9-log-files`,
      "Wofür kann log.md in einem OKF-Bundle stehen?",
      [
        "Für einen datierten Änderungsverlauf im Verzeichnis",
        "log.md kann Änderungen eines Verzeichnisses zeitlich geordnet erfassen.",
      ],
      [
        "Für den einzigen Speicherort aller Quellen",
        "Herkunft wird pro Konzept im Feld sources erfasst.",
      ],
      [
        "Für ein verpflichtendes Ausführungsprotokoll jedes Konsumenten",
        "log.md ist optional und beschreibt Aktualisierungen des Bundle-Inhalts.",
      ],
    ),
    question(
      "OKF24",
      `${okfSpec}#101-a-computation-is-its-own-concept`,
      "Ein Kennwert wird in mehreren OKF-Konzepten verwendet. Wie kann seine Berechnung beschrieben werden?",
      [
        "Als eigenes Attested-Computation-Konzept mit Verweisen darauf",
        "Eine eigenständige Berechnung kann von mehreren Konzepten verlinkt werden.",
      ],
      [
        "Als jeweils eigenes Frontmatter-Feld in allen Verbrauchern",
        "Das würde eine Berechnung mehrfach statt als eigenständiges Konzept pflegen.",
      ],
      [
        "Nur als Zahl ohne Berechnungsregel",
        "Der Wert allein beschreibt keine sanktionierte Berechnung.",
      ],
    ),
    question(
      "OKF25",
      `${okfSpec}#106-verification-versus-attestation`,
      "Was unterscheidet verified von einer Attestation bei einer OKF-Berechnung?",
      [
        "verified bestätigt die Definition; Attestation prüft einen einzelnen Lauf",
        "Die Quelle trennt dokumentbezogene Bestätigung von der Prüfung eines konkreten Ausführungsergebnisses.",
      ],
      [
        "verified prüft jeden Lauf; Attestation nur den Dateinamen",
        "Die Rollen sind umgekehrt: Attestation betrifft den Lauf, verified die Definition.",
      ],
      [
        "Beide Felder bestätigen lediglich dieselbe Quellen-URL",
        "Die Attestation vergleicht Laufbeleg und Ergebnis, nicht nur einen Link.",
      ],
    ),
  ],
  "goal-discovery-and-stop-criteria": [
    question(
      "GD01",
      githubTasks,
      "Ein Coding-Agent soll einen unklaren Änderungswunsch bearbeiten. Was gehört laut GitHub zu einem gut abgegrenzten Auftrag?",
      [
        "Problem, Abnahmekriterien und betroffene Dateien",
        "GitHub nennt diese drei Angaben für einen klar umrissenen Auftrag.",
      ],
      [
        "Nur ein gewünschter Dateiname",
        "Der Dateiname hilft, beschreibt aber weder Problem noch Abnahme.",
      ],
      [
        "Nur die gewünschte Implementierungssprache",
        "Die Sprache legt das fachliche Ergebnis und seine Prüfung nicht fest.",
      ],
    ),
    question(
      "GD02",
      `${userStories}#focus-on-the-goal`,
      "Ein Team kann den Nutzen einer gewünschten Funktion nicht benennen. Was sollte es zuerst hinterfragen?",
      [
        "Warum diese Funktion gebraucht wird",
        "Die Quelle empfiehlt, bei unklarem Ziel den Grund für die Funktion erneut zu prüfen.",
      ],
      [
        "Welche vorhandene UI-Komponente wiederverwendet wird",
        "Komponentenwahl kann später helfen, erklärt aber den fehlenden Nutzen nicht.",
      ],
      [
        "Welches Framework den kürzesten Implementierungsweg bietet",
        "Ein technischer Weg klärt nicht, warum die Funktion gebraucht wird.",
      ],
    ),
    question(
      "GD03",
      `${userStories}#what-to-include`,
      "Welche drei Angaben sollen eine User Story nach dem Service Manual mindestens erklären?",
      [
        "Akteur, Bedarf und Ziel",
        "Die Story benennt, wer etwas braucht, was gebraucht wird und warum.",
      ],
      [
        "Framework, Datenbank und Hosting",
        "Technische Mittel können nötig werden, ersetzen aber keine Bedarfserklärung.",
      ],
      [
        "Priorität, Aufwand und Termin",
        "Planungsdaten erklären weder den Akteur noch seinen Bedarf.",
      ],
    ),
    question(
      "GD04",
      `${userStories}#acceptance-criteria`,
      "Woran lässt sich bei einer Story erkennen, ob der Dienst den Bedarf erfüllt?",
      [
        "An beobachtbaren Ergebnissen als Abnahmekriterien",
        "Abnahmekriterien benennen Ergebnisse, an denen die Erfüllung geprüft wird.",
      ],
      [
        "An abgeschlossenen Implementierungsaufgaben",
        "Abgeschlossene Tasks belegen noch nicht das Ergebnis für die Nutzenden.",
      ],
      [
        "An der Zahl bestandener interner Unit-Tests allein",
        "Interne Tests können helfen, zeigen aber ohne passende Abnahme keinen erfüllten Nutzerbedarf.",
      ],
    ),
    question(
      "GD05",
      `${userStories}#acceptance-criteria`,
      "Eine Abnahmebedingung braucht fachliche Belege. Wie kann die Story diese nachvollziehbar machen?",
      [
        "Das Kriterium mit vorhandenen Nachweisen verknüpfen",
        "Die Quelle empfiehlt, Abnahmekriterien mit stützender Evidenz zu verbinden.",
      ],
      [
        "Belege erst nach der Freigabe suchen",
        "Ohne Beleg bleibt eine entscheidende Bedingung bei der Abnahme offen.",
      ],
      [
        "Nur eine technische Aufwandsschätzung anfügen",
        "Aufwand belegt nicht das fachliche Ergebnis.",
      ],
    ),
    question(
      "GD06",
      `${discovery}#define-the-problem`,
      "Ein Auftrag lautet nur „Baut ein neues Portal“. Welcher erste Schritt hilft bei der Zielklärung?",
      [
        "Die vorgegebene Lösung als Problem und Bedarf neu formulieren",
        "Die Discovery-Anleitung empfiehlt, eine vorgegebene Lösung zunächst zu hinterfragen.",
      ],
      [
        "Sofort eine Portal-Komponente programmieren",
        "Ein Prototyp kann später helfen, klärt aber den Bedarf noch nicht.",
      ],
      [
        "Den Namen des Portals endgültig festlegen",
        "Ein Name erklärt weder Problem noch Nutzen.",
      ],
    ),
    question(
      "GD07",
      `${discovery}#define-the-problem`,
      "Warum gehört ein Nicht-Ziel in die Klärung eines Änderungswunsches?",
      [
        "Es grenzt ab, was das Team nicht lösen soll",
        "Die Quelle nennt ausdrücklich die Einigung darüber, was nicht zum Problem gehört.",
      ],
      [
        "Es ersetzt die Beschreibung des gewünschten Ergebnisses",
        "Eine Grenze allein beschreibt noch keinen positiven Nutzen.",
      ],
      [
        "Es macht Abnahmekriterien überflüssig",
        "Auch im begrenzten Umfang muss Erfolg prüfbar sein.",
      ],
    ),
    question(
      "GD08",
      `${discovery}#understanding-users-and-their-context`,
      "Wessen tatsächliche Ziele sollte eine Discovery vor einer Service-Änderung untersuchen?",
      [
        "Die Ziele der Menschen, die den Dienst nutzen",
        "Die Quelle stellt Nutzer und deren beabsichtigte Aufgaben in den Mittelpunkt.",
      ],
      [
        "Nur die technischen Vorlieben des Implementierungsteams",
        "Technikvorlieben können relevant sein, beschreiben aber keinen Nutzerbedarf.",
      ],
      [
        "Nur die Formulierung im ersten Ticket",
        "Ein Ticket kann Annahmen enthalten und muss gegen den tatsächlichen Bedarf geprüft werden.",
      ],
    ),
    question(
      "GD09",
      `${discovery}#understanding-users-and-their-context`,
      "Was hilft, wenn ein Webdienst nur einen Teil einer längeren Nutzerreise abdeckt?",
      [
        "Den weiteren Ablauf und beteiligte Stellen untersuchen",
        "Die Discovery betrachtet den größeren Weg und die beteiligten Organisationen.",
      ],
      [
        "Nur die eigene Startseite bewerten",
        "Die Startseite zeigt nicht, was vor und nach dem Dienst geschieht.",
      ],
      [
        "Alle Nachbarprozesse als irrelevant markieren",
        "Gerade Schnittstellen können den Bedarf und die Grenzen bestimmen.",
      ],
    ),
    question(
      "GD10",
      `${discovery}#understanding-constraints`,
      "Ein bestehender Prozess erschwert eine sinnvolle Verbesserung, kann aber geändert werden. Wie ist er einzuordnen?",
      [
        "Als möglicherweise weiche Einschränkung",
        "Die Quelle unterscheidet veränderbare Prozesse von harten Grenzen.",
      ],
      [
        "Als unveränderbares Gesetz",
        "Ein Organisationsprozess ist nicht automatisch eine rechtliche Pflicht.",
      ],
      [
        "Als bereits erfülltes Abnahmekriterium",
        "Eine Einschränkung belegt kein erreichtes Ergebnis.",
      ],
    ),
    question(
      "GD11",
      `${discovery}#understanding-constraints`,
      "Ein rechtlich festgelegter Rahmen verhindert eine geplante Webfunktion. Was ist für die weitere Planung entscheidend?",
      [
        "Prüfen, ob der Nutzen innerhalb der harten Grenze erreichbar ist",
        "Harte Grenzen beeinflussen, ob eine Fortsetzung sinnvoll ist.",
      ],
      [
        "Den Rahmen als technische Schuld ausblenden",
        "Eine rechtliche Grenze verschwindet nicht durch Umbenennung.",
      ],
      [
        "Die ursprüngliche Funktion trotzdem als abgenommen markieren",
        "Eine unerfüllbare Funktion ist kein bestätigtes Ergebnis.",
      ],
    ),
    question(
      "GD12",
      `${discovery}#understanding-constraints`,
      "Warum sollten besonders riskante Annahmen vor einer umfangreichen Umsetzung sichtbar sein?",
      [
        "Sie bestimmen, was früh geprüft werden muss",
        "Die Quelle verbindet bekannte Einschränkungen mit der Priorisierung riskanter Annahmen.",
      ],
      [
        "Sie machen Nutzertests grundsätzlich unnötig",
        "Annahmen müssen durch passende Beobachtungen geprüft werden.",
      ],
      [
        "Sie beweisen die Wirtschaftlichkeit des Projekts",
        "Ein Risiko ist noch kein Nutzen-Kosten-Nachweis.",
      ],
    ),
    question(
      "GD13",
      `${discovery}#identify-improvements-you-might-be-able-to-make`,
      "Eine Bedarfsklärung zeigt, dass bessere Informationen das Problem lösen könnten. Was folgt daraus?",
      [
        "Eine Alternative zum Bau neuer Software prüfen",
        "Die Quelle nennt Informationsangebote als mögliche Alternative zu einem neuen Dienst.",
      ],
      [
        "Trotzdem zwingend einen neuen Dienst bauen",
        "Der gewünschte Nutzen kann auf anderem Weg erreicht werden.",
      ],
      [
        "Den Bedarf ignorieren, weil kein Code nötig ist",
        "Auch eine Lösung ohne neuen Code kann den Bedarf erfüllen.",
      ],
    ),
    question(
      "GD14",
      `${discovery}#how-you-know-discovery-is-finished`,
      "Wann ist die Discovery nach dem Service Manual abgeschlossen?",
      [
        "Wenn über Fortsetzung oder Stopp entschieden wurde",
        "Die Phase endet mit der Entscheidung, ob eine Alpha-Phase sinnvoll ist.",
      ],
      [
        "Sobald der erste Bildschirm programmiert ist",
        "In der Discovery soll noch kein Dienst gebaut werden.",
      ],
      [
        "Sobald jede denkbare Frage beantwortet ist",
        "Die Entscheidung verlangt ausreichend relevante Erkenntnisse, nicht Allwissen.",
      ],
    ),
    question(
      "GD15",
      `${discovery}#how-you-know-discovery-is-finished`,
      "Welche zwei Gesichtspunkte tragen eine Fortsetzungsentscheidung nach Discovery?",
      [
        "Nutzbare Lösungsmöglichkeit und Verhältnis von Kosten zu Verbesserung",
        "Die Quelle nennt einen tragfähigen Dienst und die Wirtschaftlichkeit als Faktoren.",
      ],
      [
        "Nur die Menge bereits geschriebener Tickets",
        "Ticketmenge misst weder Nutzen noch Kosten.",
      ],
      [
        "Nur die Wahl eines Frameworks",
        "Ein Framework beantwortet die Entscheidungsfrage nicht.",
      ],
    ),
    question(
      "GD16",
      `${discovery}#how-you-know-discovery-is-finished`,
      "Die Recherche zeigt, dass ein geplanter Dienst kaum Nutzen bringt. Welche Entscheidung ist fachlich möglich?",
      [
        "Die Arbeit am Dienst beenden",
        "Die Quelle beschreibt den Stopp nach Discovery ausdrücklich als zulässiges Ergebnis.",
      ],
      [
        "Den Dienst allein wegen der Vorarbeit bauen",
        "Bereits investierte Zeit rechtfertigt keinen ungenügenden Nutzen.",
      ],
      [
        "Den fehlenden Nutzen aus der Abnahme ausklammern",
        "Die Entscheidung muss den tatsächlichen Nutzen berücksichtigen.",
      ],
    ),
    question(
      "GD17",
      `${serviceBenefits}#discovery-spot-problems-and-estimate-how-much-theyre-costing`,
      "Warum ist vor einer Verbesserung eine Ausgangsmessung nützlich?",
      [
        "Nur mit einem Ausgangswert lässt sich Veränderung bewerten",
        "Die Quelle empfiehlt eine Baseline, um spätere Verbesserungen einordnen zu können.",
      ],
      [
        "Sie ersetzt die Definition des Nutzerproblems",
        "Eine Zahl ohne Bedarf erklärt nicht, was verbessert werden soll.",
      ],
      [
        "Sie garantiert den Erfolg der gewählten Lösung",
        "Ein Ausgangswert sagt nichts über die spätere Wirkung aus.",
      ],
    ),
    question(
      "GD18",
      `${serviceBenefits}#discovery-spot-problems-and-estimate-how-much-theyre-costing`,
      "Welche Beobachtung eignet sich als Ausgangswert für einen umständlichen Webablauf?",
      [
        "Die bisher benötigte Zeit für eine Nutzeraufgabe",
        "Die Quelle nennt die Dauer einer Aufgabe als messbare Größe des Problems.",
      ],
      [
        "Die angestrebte Dauer des neuen Ablaufs",
        "Ein Zielwert beschreibt den Sollzustand, nicht die bisherige Belastung.",
      ],
      [
        "Die geschätzte Zahl künftiger Formularschritte",
        "Eine Entwurfsschätzung misst den bisherigen Ablauf nicht.",
      ],
    ),
    question(
      "GD19",
      `${serviceBenefits}#alpha-test-different-solutions`,
      "Welche Annahmen sollte ein Team bei mehreren Lösungsideen zuerst erproben?",
      [
        "Die mit dem größten Risiko für Machbarkeit und Nutzen",
        "Die Alpha-Anleitung empfiehlt, besonders riskante Annahmen zu untersuchen.",
      ],
      [
        "Nur Annahmen mit leicht zu bauender Demo",
        "Leichte Demonstrierbarkeit trifft nicht zwingend das entscheidende Risiko.",
      ],
      [
        "Nur bereits bestätigte Annahmen",
        "Deren erneute Prüfung klärt die offenen Risiken kaum.",
      ],
    ),
    question(
      "GD20",
      `${serviceBenefits}#decide-whether-you-should-continue-your-project`,
      "Ein Pilot erreicht den erwarteten Nutzen nicht. Was sollte die Fortsetzungsentscheidung berücksichtigen?",
      [
        "Gemessenen Nutzen, Kosten und mögliche Änderung oder Stopp",
        "Die Quelle verlangt den Vergleich mit Erwartungen und erwägt Fortsetzung, Änderung oder Ende.",
      ],
      [
        "Nur die ursprünglich geplante Lieferfrist",
        "Ein Termin allein beantwortet die Nutzenfrage nicht.",
      ],
      [
        "Nur die bereits investierten Entwicklungstage",
        "Vergangener Aufwand ersetzt keine Bewertung der weiteren Wirkung.",
      ],
    ),
    question(
      "GD21",
      `${githubTasks}#researching-planning-and-iterating-before-opening-a-pull-request`,
      "Ein Agentenauftrag enthält viele ungeprüfte Annahmen. Welcher Ablauf ist laut GitHub sinnvoll?",
      [
        "Erst Recherche und Plan, dann gezielte Codeänderungen",
        "GitHub beschreibt die iterative Klärung vor dem Pull Request als möglichen Ablauf.",
      ],
      [
        "Den Pull Request ohne Prüfung sofort öffnen",
        "Die Quelle empfiehlt bei unklarem Umfang erst Recherche und Planung.",
      ],
      [
        "Alle Annahmen als bereits bestätigte Fakten behandeln",
        "Ungeprüfte Annahmen müssen vor der Umsetzung geklärt werden.",
      ],
    ),
    question(
      "GD22",
      `${githubTasks}#making-sure-your-issues-are-well-scoped`,
      "Ein Ticket nennt nur „API reparieren“. Welche Ergänzung macht es für einen Coding-Agenten aussagekräftiger?",
      [
        "Das konkrete Fehlerbild und prüfbare Erfolgsbedingungen",
        "Problem und Abnahme gehören laut GitHub zu einem klar begrenzten Auftrag.",
      ],
      [
        "Eine Liste beliebiger denkbarer Frameworks",
        "Technologieoptionen beschreiben das Fehlerbild nicht.",
      ],
      [
        "Eine allgemeine Aufforderung, besonders gründlich zu sein",
        "Gründlichkeit ersetzt keine konkrete Ziel- und Prüfbeschreibung.",
      ],
    ),
    question(
      "GD23",
      `${userStories}#focus-on-the-goal`,
      "Wozu hilft das Ziel einer User Story bei der Abnahme?",
      [
        "Es zeigt, wann der Bedarf tatsächlich erfüllt ist",
        "Die Quelle verbindet das Ziel mit der Entscheidung, wann die Story fertig ist.",
      ],
      [
        "Es legt die Anzahl der Commits fest",
        "Commit-Zahl ist kein Merkmal eines erfüllten Bedarfs.",
      ],
      [
        "Es ersetzt alle Beispiele und Randfälle",
        "Das Ziel leitet die Abnahme, weitere Fälle können trotzdem nötig sein.",
      ],
    ),
    question(
      "GD24",
      `${discovery}#how-youll-measure-success`,
      "Was sollte vor der Umsetzung für einen verbesserten Service feststehen?",
      [
        "Welche Daten und Kennzahlen den Erfolg zeigen",
        "Die Discovery-Anleitung verlangt Überlegungen zu Messdaten und Leistungskennzahlen.",
      ],
      [
        "Welche technische Lösung das Team bevorzugt",
        "Eine Präferenz für die Umsetzung legt noch keine Erfolgsmessung fest.",
      ],
      [
        "Wie viele Tickets im ersten Sprint geschlossen werden",
        "Ticketdurchsatz sagt für sich nichts über den Nutzen des Dienstes aus.",
      ],
    ),
    question(
      "GD25",
      `${userStories}#epics`,
      "Eine geplante Änderung würde mehrere Wochen Entwicklung und Abnahme brauchen. Welche Größenanpassung empfiehlt das Service Manual, wenn möglich?",
      [
        "In kleinere, einzeln abnehmbare Stories teilen",
        "Große Epics sollen möglichst in innerhalb einer Iteration abschließbare Stories zerlegt werden.",
      ],
      [
        "Die große Story nur mit mehr Parallelität bearbeiten",
        "Zusätzliche Parallelität macht einen zu großen Abnahmeumfang nicht automatisch überschaubar.",
      ],
      [
        "Die Abnahme bis zum Ende aller Teilbereiche verschieben",
        "Das ließe die einzelnen nutzbaren Ergebnisse länger ungeprüft.",
      ],
    ),
  ],
  "design-and-legacy-specification": [
    question(
      "DL01",
      `${legacyBlueprint}#our-goal`,
      "Ein altes Fachsystem soll ohne ursprünglichen Quellcode ersetzt werden. Welches Ziel verfolgt der beschriebene Ansatz?",
      [
        "Sein funktionales Verhalten als prüfbare Spezifikation rekonstruieren",
        "Die Fallstudie will die fachliche Funktion als Grundlage für einen Ersatz nachvollziehen.",
      ],
      [
        "Seinen Maschinencode unverändert in das neue System kopieren",
        "Der Ansatz rekonstruiert Funktion und Absicht, nicht den alten Code.",
      ],
      [
        "Nur die sichtbare Oberfläche neu zeichnen",
        "Die Oberfläche allein erklärt verdeckte Regeln und Integrationen nicht.",
      ],
    ),
    question(
      "DL02",
      `${legacyBlueprint}#our-goal`,
      "Welche Szenarien gehören vor einem Ersatz in die Beschreibung eines Legacy-Systems?",
      [
        "Gewöhnliche und außergewöhnliche Abläufe",
        "Die Fallstudie nennt häufige und Ausnahmefälle als Teil des funktionalen Verständnisses.",
      ],
      [
        "Nur erfolgreiche Standardabläufe",
        "Ausnahmen gehören ausdrücklich zur beabsichtigten Spezifikation.",
      ],
      [
        "Nur technische Start- und Stoppbefehle",
        "Betriebsbefehle beschreiben nicht die fachlichen Fälle.",
      ],
    ),
    question(
      "DL03",
      `${legacyBlueprint}#key-challenges`,
      "Eine Datenbank ist zugänglich, aber der Anwendungscode fehlt. Warum reicht das Schema allein nicht?",
      [
        "Geschäftsregeln können in Prozeduren, Triggern und Abläufen liegen",
        "Die Fallstudie betont, dass die Datenbankstruktur nicht die ganze Funktion zeigt.",
      ],
      [
        "Das Schema zeigt bereits jeden Bildschirmzustand",
        "Ein Schema beschreibt keine vollständigen Interaktionen der Oberfläche.",
      ],
      [
        "Tabellennamen enthalten automatisch alle Fachentscheidungen",
        "Namen erklären Kontext und Ausnahmen nicht zuverlässig.",
      ],
    ),
    question(
      "DL04",
      `${legacyBlueprint}#key-challenges`,
      "Was zeigt die sichtbare Oberfläche eines undokumentierten Systems nur begrenzt?",
      [
        "Den letzten Schritt eines größeren Ausführungswegs",
        "Hinter einem Bildschirm können weitere Dienste und Regeln beteiligt sein.",
      ],
      [
        "Die gesamte interne Aufrufkette",
        "Die Oberfläche macht interne Aufrufe nicht vollständig sichtbar.",
      ],
      [
        "Alle historischen Gründe für das Datenmodell",
        "Solche Gründe sind aus der aktuellen Ansicht nicht ableitbar.",
      ],
    ),
    question(
      "DL05",
      `${legacyBlueprint}#our-multi-lens-approach`,
      "Warum nutzten die Autoren mehrere Arten von Artefakten für ihre Spezifikation?",
      [
        "Jede Sicht ergänzt Lücken der anderen",
        "Oberfläche, Daten und Binärartefakte zeigen verschiedene Teile des Verhaltens.",
      ],
      [
        "Damit jede Quelle dieselben Details redundant kopiert",
        "Die Sichten liefern unterschiedliche Hinweise statt bloßer Kopien.",
      ],
      [
        "Damit fachliche Bestätigung entfallen kann",
        "Die kombinierte Ableitung wurde weiterhin mit Menschen geprüft.",
      ],
    ),
    question(
      "DL06",
      `${legacyBlueprint}#ui-layer-reconstruction`,
      "Welche Hinweise untersuchten die Autoren beim Rekonstruieren der Oberfläche?",
      [
        "Validierungsregeln, Navigationswege und versteckte Felder",
        "Diese Elemente halfen, die sichtbare Interaktion zu spezifizieren.",
      ],
      [
        "Tabellen, Trigger und Datenbankindizes",
        "Diese Artefakte betreffen die Datenebene, nicht die untersuchte UI-Interaktion.",
      ],
      [
        "Aufrufgraph und Symbolnamen der Binärdateien",
        "Diese Hinweise wurden für die Anwendungsebene genutzt, nicht für die UI-Rekonstruktion.",
      ],
    ),
    question(
      "DL07",
      `${legacyBlueprint}#ui-layer-reconstruction`,
      "Was sollte bei einer KI-gestützten Aussage über ein altes Eingabefeld mitgeführt werden?",
      [
        "Die Herkunft der Aussage und ihr Kontext",
        "Die Autoren hielten eine detaillierte Herkunft fest, um Halluzinationen zu erkennen.",
      ],
      [
        "Nur eine flüssig formulierte Feldbeschreibung",
        "Eine plausible Formulierung ohne Beleg ist noch keine bestätigte Regel.",
      ],
      [
        "Nur der Name des eingesetzten Modells",
        "Der Modellname zeigt nicht, aus welchem Artefakt die konkrete Aussage stammt.",
      ],
    ),
    question(
      "DL08",
      `${legacyBlueprint}#discovery-with-change-data-capture-cdc`,
      "Welche Verbindung sollte Change Data Capture in der Fallstudie sichtbar machen?",
      [
        "Von einer UI-Aktion zu Änderungen in der Datenbank",
        "CDC wurde genutzt, um Benutzeraktionen mit Datenänderungen zu verbinden.",
      ],
      [
        "Von einer UI-Aktion zu den aufgerufenen HTTP-Routen",
        "Netzwerkverkehr wäre eine andere Beobachtung; CDC zeigte Datenbankänderungen.",
      ],
      [
        "Von einer Datenbanktabelle zu ihrem Quellcode-Modul",
        "Ein solcher Modulbezug kann hilfreich sein, folgt aber nicht aus CDC-Ereignissen allein.",
      ],
    ),
    question(
      "DL09",
      `${legacyBlueprint}#discovery-with-change-data-capture-cdc`,
      "CDC konnte nur teilweise eingeschaltet werden. Welche weitere Beobachtung nennen die Autoren als mögliche Ergänzung?",
      [
        "Netzwerkverkehr zwischen Frontend und Backend",
        "Die Fallstudie nennt Netzwerkverkehr als weitere Sicht auf den Ablauf.",
      ],
      [
        "Eine statische Liste vermuteter Funktionsnamen",
        "Vermutete Namen liefern keine zusätzliche Laufzeitbeobachtung.",
      ],
      [
        "Eine Zusammenfassung des bekannten Datenbankschemas",
        "Das Schema ist nützlich, zeigt aber keine zusätzlichen Laufzeitänderungen.",
      ],
    ),
    question(
      "DL10",
      `${legacyBlueprint}#server-logic-inferance`,
      "Wie überprüften die Autoren vermutete Beziehungen zwischen Anwendung und Datenbank?",
      [
        "Mit beobachteten Datenflüssen",
        "Vermutete Zuordnungen zu Prozeduren und Tabellen wurden anhand realer Flüsse validiert.",
      ],
      [
        "Nur anhand plausibler Methodennamen",
        "Ein Name ist ein Hinweis, aber kein Laufzeitbeleg.",
      ],
      [
        "Nur anhand der Zuversicht des LLM",
        "Eine selbstsichere Modellantwort ist keine unabhängige Bestätigung.",
      ],
    ),
    question(
      "DL11",
      `${legacyBlueprint}#ai-assisted-binary-archaeology`,
      "Wie wurden KI-Beschreibungen disassemblierter Funktionen in der Fallstudie behandelt?",
      [
        "Als Hypothesen für eine menschliche Prüfung",
        "Wahrscheinliche Funktionen wurden zusammengefasst und von Fachleuten bestätigt.",
      ],
      [
        "Als direkt ausführbare Ersatzimplementierung",
        "Die Beschreibungen dienten dem Verständnis, nicht der ungeprüften Ausführung.",
      ],
      [
        "Als automatisch verbindliche Fachregeln",
        "Fachregeln mussten anhand weiterer Evidenz validiert werden.",
      ],
    ),
    question(
      "DL12",
      `${legacyBlueprint}#ai-assisted-binary-archaeology`,
      "Warum war eine automatisch erzeugte C-Übersetzung des Binärcodes kein sicherer Beleg?",
      [
        "Sie konnte entscheidende Hinweise auslassen oder falsch darstellen",
        "Die Autoren berichten, dass die C-Übersetzung in ihrem Fall eine wichtige Spur verfehlte.",
      ],
      [
        "Sie enthielt keine Zeichenketten mehr",
        "Die Fallstudie nennt als Problem die Unzuverlässigkeit der Übersetzung, nicht einen generellen Verlust aller Strings.",
      ],
      [
        "Sie bewies bereits das gewünschte Verhalten",
        "Ein Werkzeugergebnis muss gegen weitere Beobachtungen geprüft werden.",
      ],
    ),
    question(
      "DL13",
      `${legacyBlueprint}#prior-attempts`,
      "Warum scheiterte der Versuch, alle Assemblerfunktionen gemeinsam vom LLM erklären zu lassen?",
      [
        "Abhängigkeiten sprengten das Kontextfenster",
        "Der Brute-Force-Versuch lud über Referenzen immer mehr Funktionen nach.",
      ],
      [
        "Weil es grundsätzlich keine Funktionsaufrufe gab",
        "Gerade viele Verweise verursachten die Ausweitung.",
      ],
      [
        "Weil Bildschirmdaten bereits alle Funktionen erklärten",
        "Die UI zeigte nur einen Teil des Systemverhaltens.",
      ],
    ),
    question(
      "DL14",
      `${legacyBlueprint}#prior-attempts`,
      "Was zeigte die isolierte Analyse großer Funktionspakete in der Fallstudie?",
      [
        "Viele plausibel klingende, aber unzutreffende Beschreibungen",
        "Bei der Gegenprüfung fielen Halluzinationen und ähnlich klingende Rollen auf.",
      ],
      [
        "Eine vollständig verifizierte Fachspezifikation",
        "Die isolierten Pakete ließen wichtige Zusammenhänge offen.",
      ],
      [
        "Einen Beweis, dass kleinere Ausschnitte nie helfen",
        "Der spätere Ansatz nutzte gerade gezielt begrenzte Ausschnitte.",
      ],
    ),
    question(
      "DL15",
      `${legacyBlueprint}#prior-attempts`,
      "Warum half die Analyse jeweils nur einer Funktion zunächst ebenfalls nicht ausreichend?",
      [
        "Die Ergebnisse ließen sich schwer verifizieren und verbinden",
        "Einzeldeutungen boten zu wenig Zusammenhang für belastbare Fachlogik.",
      ],
      [
        "Weil jede Funktion zwangsläufig dieselbe Aufgabe hatte",
        "Die Funktionen hatten unterschiedliche Rollen; die Zuordnung blieb unklar.",
      ],
      [
        "Weil das System keine Datenbank nutzte",
        "Die Datenbank war ein wichtiger Teil der Untersuchung.",
      ],
    ),
    question(
      "DL16",
      `${legacyBlueprint}#finding-the-relevant-function`,
      "Womit fanden die Autoren einen Einstieg in einen relevanten Binärablauf?",
      [
        "Mit einem Tabellennamen in Zeichenketten der Binärdatei",
        "Der Tabellenname führte zur Funktion mit der passenden SQL-Anweisung.",
      ],
      [
        "Mit dem Versionsnamen einer DLL",
        "Der Name konnte bei mehreren Binärkopien sogar irreführen; entscheidend war der Tabellenhinweis.",
      ],
      [
        "Mit einer vorausgesetzten Funktionsrolle im LLM-Prompt",
        "Eine vorgegebene Rolle wäre eine Hypothese, keine gefundene Verbindung zur Funktion.",
      ],
    ),
    question(
      "DL17",
      `${legacyBlueprint}#finding-the-relevant-function`,
      "Warum wäre eine Suche nur nach INSERT oder UPDATE im Fallbeispiel irreführend gewesen?",
      [
        "Die Änderung erfolgte nach einem SELECT über ADO",
        "Der untersuchte Ablauf hatte keine sichtbare INSERT- oder UPDATE-Anweisung an der gesuchten Stelle.",
      ],
      [
        "Weil die Datenbank schreibgeschützt war",
        "Die Fallstudie beschreibt eine Datenänderung, aber über einen anderen Weg.",
      ],
      [
        "Weil SQL im System gar nicht verwendet wurde",
        "Eine SELECT-Anweisung war gerade der entscheidende Hinweis.",
      ],
    ),
    question(
      "DL18",
      `${legacyBlueprint}#building-the-relevant-subtree`,
      "Wie erweiterten die Autoren den Kontext einer gefundenen Blattfunktion?",
      [
        "Sie verfolgten aufrufende Funktionen im Call Tree",
        "Der Aufrufbaum half, den fachlichen Ablauf um die gefundene Funktion zu rekonstruieren.",
      ],
      [
        "Sie benannten alle Funktionen zufällig um",
        "Namen ohne Aufrufbezug liefern keinen verlässlichen Kontext.",
      ],
      [
        "Sie betrachteten nur die Ziel-Tabelle",
        "Die Tabelle allein erklärte die vorangehenden Entscheidungen nicht.",
      ],
    ),
    question(
      "DL19",
      `${legacyBlueprint}#building-the-relevant-subtree`,
      "Was kann passieren, wenn dem LLM die erwartete Lösung beim Analysieren vorgegeben wird?",
      [
        "Seine Deutungen können in Richtung der Vorgabe verzerrt werden",
        "Die Autoren berichten von Kontextvergiftung und falschen Pfaden durch einen verratenen Suchwunsch.",
      ],
      [
        "Die Laufzeitdaten werden automatisch vollständiger",
        "Ein Prompt ändert keine beobachteten Laufzeitdaten.",
      ],
      [
        "Die Spezifikation ist dadurch unabhängig bestätigt",
        "Eine gelenkte Modellantwort ist gerade keine unabhängige Prüfung.",
      ],
    ),
    question(
      "DL20",
      `${legacyBlueprint}#multi-pass-enrichment`,
      "Wozu dienten mehrere Analyse-Durchgänge über einen begrenzten Funktionsbaum?",
      [
        "Teilhinweise wurden schrittweise zu fachlichem Kontext ergänzt",
        "Eltern- und Kindkontext halfen, Pseudocode in Funktionsbeschreibung zu überführen.",
      ],
      [
        "Jeder Durchgang verwarf alle vorherigen Beobachtungen",
        "Die Durchgänge bauten auf bereits geprüften Hinweisen auf.",
      ],
      [
        "Jeder Durchgang bewies automatisch die Richtigkeit",
        "Mehr Durchgänge ersetzen die Gegenprüfung nicht.",
      ],
    ),
    question(
      "DL21",
      `${legacyBlueprint}#validating-the-entry-point`,
      "Warum prüften die Autoren den vermuteten Einstiegspunkt zusätzlich?",
      [
        "Ein Wrapper konnte vorher weitere Operationen ausführen",
        "Ein scheinbar vollständiger Funktionsbaum musste noch gegen mögliche Aufrufer geprüft werden.",
      ],
      [
        "Ein Einstiegspunkt ist immer die Funktion mit dem kürzesten Namen",
        "Ein Name verrät die tatsächliche Aufrufposition nicht.",
      ],
      [
        "Die UI war im Projekt nicht vorhanden",
        "UI-Aufrufe wurden sogar zur Gegenprüfung verwendet.",
      ],
    ),
    question(
      "DL22",
      `${legacyBlueprint}#validating-the-entry-point`,
      "Welche Beobachtung nutzten die Autoren zur Bestätigung eines Einstiegspunkts?",
      [
        "Den Abgleich der Methodensignatur mit einem UI-Aufruf",
        "Parameter und UI-Aufruf halfen beim Eingrenzen des echten Einstiegs.",
      ],
      [
        "Die Ähnlichkeit von Funktions- und Buttonnamen",
        "Namensähnlichkeit bestätigt keinen Aufruf; die Autoren verglichen Signaturen und UI-Aufrufe.",
      ],
      [
        "Nur eine KI-Zusammenfassung ohne Herkunft",
        "Der Einstieg wurde anhand technischer Hinweise trianguliert.",
      ],
    ),
    question(
      "DL23",
      `${legacyBlueprint}#building-the-spec-from-fragments-to-functionality`,
      "Welches Arbeitsprinzip empfehlen die Autoren für undurchsichtige Systeme zuerst?",
      [
        "Bei sichtbaren Artefakten wie Screens, Schema und Logs beginnen",
        "Beobachtbare Hinweise geben eine belastbare Grundlage vor tiefer Binäranalyse.",
      ],
      [
        "Mit allen Binärfunktionen gleichzeitig anfangen",
        "Dieser Ansatz überlastete die Analyse im Fallbeispiel.",
      ],
      [
        "Zuerst das neue System vollständig implementieren",
        "Ohne geprüfte Verhaltensbasis drohen erfundene Regeln.",
      ],
    ),
    question(
      "DL24",
      `${legacyBlueprint}#building-the-spec-from-fragments-to-functionality`,
      "Warum sollten abgeleitete Legacy-Regeln eine Herkunftsspur behalten?",
      [
        "Damit spätere Zweifel bis zu den Originalartefakten zurückverfolgt werden können",
        "Eine Herkunftsspur verhindert, dass bloße Annahmen unbemerkt als Fakten weiterleben.",
      ],
      [
        "Damit keine Fachperson mehr prüfen muss",
        "Die Autoren verlangen zusätzlich die fachliche Validierung.",
      ],
      [
        "Damit alle Quellen denselben Dateinamen tragen",
        "Ein einheitlicher Name erklärt keine konkrete Aussage.",
      ],
    ),
    question(
      "DL25",
      `${legacyBlueprint}#building-the-spec-from-fragments-to-functionality`,
      "Welche Rolle haben Fachleute bei KI-gestützter Rekonstruktion kritischer Regeln?",
      [
        "Sie validieren KI-Hypothesen gegen Domänenwissen",
        "Die Fallstudie empfiehlt menschliche Bestätigung insbesondere bei geschäftskritischen Regeln.",
      ],
      [
        "Sie übernehmen jede Modellannahme als endgültig",
        "Das würde KI-Fehler in den Entwurf übertragen.",
      ],
      [
        "Sie prüfen nur das Layout des Abschlussdokuments",
        "Die fachliche Richtigkeit der rekonstruierten Regeln ist entscheidend.",
      ],
    ),
  ],
  "standards-and-constraint-rationale": [
    question(
      "SC01",
      asvs,
      "Wofür ist OWASP ASVS bei einer Webanwendung gedacht?",
      [
        "Als Sammlung prüfbarer Sicherheitsanforderungen",
        "ASVS bietet Anforderungen für Entwicklung und Verifikation von Webanwendungen.",
      ],
      [
        "Als Ersatz für die Fachanforderungen des Produkts",
        "ASVS behandelt Anwendungssicherheit, nicht den gesamten Produktnutzen.",
      ],
      [
        "Als automatische Bescheinigung der Sicherheit",
        "Das bloße Heranziehen des Standards belegt keine Umsetzung.",
      ],
    ),
    question(
      "SC02",
      `${asvsScope}#scope-of-the-asvs`,
      "Welche Art von Vorgabe gehört in den Kernbereich von ASVS?",
      [
        "Eine verifizierbare Anforderung mit Sicherheitswirkung",
        "Die Quelle begrenzt ASVS auf sicherheitsrelevante, prüfbare Anforderungen.",
      ],
      [
        "Eine reine Regel zur Formatierung von Java-Code",
        "Codestil ohne Sicherheitswirkung liegt außerhalb des ASVS-Bereichs.",
      ],
      [
        "Eine unverbindliche Empfehlung für Team-Meetings",
        "ASVS formuliert Sicherheitsanforderungen, keine beliebigen Prozesshinweise.",
      ],
    ),
    question(
      "SC03",
      `${asvsScope}#security`,
      "Wie begründet ASVS die Aufnahme einer Sicherheitsanforderung?",
      [
        "Ihre Umsetzung verringert Eintrittswahrscheinlichkeit oder Auswirkung eines Risikos",
        "Die Sicherheitswirkung ist laut ASVS ein Aufnahmekriterium.",
      ],
      [
        "Sie erhöht die Zahl technischer Regeln",
        "Regelmenge allein sagt nichts über Risikoreduktion.",
      ],
      [
        "Sie passt zu einem beliebten Framework",
        "Framework-Verbreitung ersetzt keinen Sicherheitsgrund.",
      ],
    ),
    question(
      "SC04",
      `${asvsScope}#verification`,
      "Was muss eine ASVS-Anforderung bei der Prüfung ermöglichen?",
      [
        "Eine begründbare Pass-oder-Fail-Entscheidung",
        "Verifizierbarkeit verlangt eine entscheidbare Prüfung.",
      ],
      [
        "Nur ein subjektives Gefühl höherer Sicherheit",
        "Ohne prüfbares Ergebnis erfüllt die Vorgabe das Verifikationsziel nicht.",
      ],
      [
        "Eine Prioritätsangabe ohne Prüfkriterium",
        "Priorität hilft bei Planung, liefert aber noch keine Pass-oder-Fail-Entscheidung.",
      ],
    ),
    question(
      "SC05",
      `${asvsScope}#requirement`,
      "Warum beschreibt ASVS eher Sicherheitsziele als eine einzige Implementierung?",
      [
        "Mehrere Maßnahmen können dasselbe Sicherheitsziel erfüllen",
        "Die Anforderungen sollen nicht unnötig an ein Verfahren oder eine Technologie gebunden sein.",
      ],
      [
        "Weil technische Maßnahmen nie geprüft werden dürfen",
        "Die Umsetzung muss sehr wohl gegen das Ziel geprüft werden.",
      ],
      [
        "Weil das Ziel ohne Kontext beliebig auslegbar bleiben soll",
        "Das Ziel soll verständlich und verifizierbar sein.",
      ],
    ),
    question(
      "SC06",
      `${asvsScope}#standard`,
      "Wo findet ein Team ergänzende Hinweise zur konkreten Umsetzung einer ASVS-Anforderung?",
      [
        "In passenden OWASP Cheat Sheets",
        "ASVS verweist die technologiespezifische Umsetzung auf ergänzende Leitfäden.",
      ],
      [
        "In der ASVS-Levelzuordnung der Anforderung",
        "Das Level hilft bei der Auswahl, beschreibt aber keine konkrete Implementierung.",
      ],
      [
        "In einer automatischen ASVS-Freigabe für jedes Framework",
        "Der Standard zertifiziert keine konkrete Implementierung automatisch.",
      ],
    ),
    question(
      "SC07",
      `${asvsScope}#standard`,
      "Welches OWASP-Material passt zu einer Frage nach dem konkreten Test einer ASVS-Anforderung?",
      [
        "Der Web Security Testing Guide",
        "Die Quelle trennt Sicherheitsanforderungen von detaillierten Prüfverfahren.",
      ],
      [
        "Die ASVS-Levelübersicht",
        "Eine Levelzuordnung erklärt die Priorität, nicht den konkreten Test.",
      ],
      [
        "Ein beliebiges Framework-Tutorial",
        "Ein Tutorial muss die betreffende Sicherheitsprüfung nicht abdecken.",
      ],
    ),
    question(
      "SC08",
      `${asvsScope}#documented-security-decisions`,
      "Warum fordert ASVS für manche Schutzmaßnahmen dokumentierte Sicherheitsentscheidungen?",
      [
        "Damit kontextabhängige Maßnahmen implementiert und geprüft werden können",
        "Berechtigungen und sensible Daten brauchen oft eine projektspezifische Festlegung.",
      ],
      [
        "Damit jede denkbare Eingabe pauschal verboten werden kann",
        "Dokumentation soll konkrete Entscheidungen erklären, keine undifferenzierte Sperre schaffen.",
      ],
      [
        "Damit Tests durch Prosa ersetzt werden",
        "Die dokumentierte Entscheidung ist Grundlage der anschließenden Verifikation.",
      ],
    ),
    question(
      "SC09",
      `${asvsScope}#documented-security-decisions`,
      "Für eine Spring-API unterscheiden sich Berechtigungen je Rolle. Welche Angabe macht eine ASVS-bezogene Vorgabe prüfbar?",
      [
        "Eine dokumentierte Zuordnung von Rollen zu erlaubten Aktionen",
        "Die Quelle nennt Berechtigungen als Beispiel für kontextabhängige Sicherheitsentscheidungen.",
      ],
      [
        "Nur der Satz „Berechtigungen sind wichtig“",
        "Der Satz legt kein beobachtbares Verhalten fest.",
      ],
      [
        "Nur die Wahl eines Authentifizierungsframeworks",
        "Das Framework definiert nicht automatisch die Fachberechtigungen.",
      ],
    ),
    question(
      "SC10",
      `${asvsReadme}#how-to-reference-asvs-requirements`,
      "Warum sollte ein ASVS-Verweis die Versionsnummer enthalten?",
      [
        "Anforderungskennungen können sich zwischen Versionen ändern",
        "Die Version hält fest, welcher konkrete Text gemeint ist.",
      ],
      [
        "Weil sonst ein Link technisch nicht geöffnet werden kann",
        "Die Versionsangabe dient der fachlichen Eindeutigkeit, nicht der bloßen Erreichbarkeit.",
      ],
      [
        "Weil jede Version dieselben Kennungen garantiert",
        "Gerade diese Stabilität ist nicht garantiert.",
      ],
    ),
    question(
      "SC11",
      `${asvsReadme}#how-to-reference-asvs-requirements`,
      "Welche Form verweist eindeutig auf eine ASVS-5.0.0-Anforderung?",
      [
        "v5.0.0-1.2.5",
        "Das Präfix verbindet Versionsnummer und Anforderungskennung.",
      ],
      [
        "1.2.5 ohne Versionsbezug",
        "Ohne Version kann die Kennung nach Änderungen etwas anderes meinen.",
      ],
      [
        "5/1/2/5 ohne Kennzeichnung",
        "Diese Form ist nicht das beschriebene ASVS-Referenzformat.",
      ],
    ),
    question(
      "SC12",
      `${asvsReadme}#latest-stable-version---500`,
      "Was ist beim Zitieren des ASVS-master-Zweigs zu bedenken?",
      [
        "Er kann laufende, noch nicht stabile Änderungen enthalten",
        "OWASP bezeichnet master als veränderlichen Entwicklungsstand.",
      ],
      [
        "Er ist automatisch identisch mit jeder freigegebenen Version",
        "Freigaben und master können voneinander abweichen.",
      ],
      [
        "Er enthält keine Sicherheitsanforderungen",
        "Der Zweig enthält den Standardentwurf und weitere Inhalte.",
      ],
    ),
    question(
      "SC13",
      `${asvsAssessment}#scope-of-verification`,
      "Eine Anwendung hat keine Sitzungen. Wie sollte ein ASVS-Prüfbericht entsprechende Anforderungen behandeln?",
      [
        "Die Nichtanwendbarkeit und ihren Grund festhalten",
        "Der Bericht soll Umfang und begründete Ausnahmen transparent machen.",
      ],
      [
        "Die Anforderungen stillschweigend als bestanden zählen",
        "Nichtanwendbarkeit ist kein bestandener Test.",
      ],
      [
        "Den gesamten ASVS-Nachweis ohne Erklärung verwerfen",
        "Ein eingeschränkter Umfang kann nachvollziehbar dokumentiert werden.",
      ],
    ),
    question(
      "SC14",
      `${asvsAssessment}#scope-of-verification`,
      "Welche Information braucht ein Leser, um einen ASVS-Prüfbericht einzuordnen?",
      [
        "Geprüftes Level und einbezogene Anforderungen",
        "Der Geltungsbereich muss ausweisen, was tatsächlich geprüft wurde.",
      ],
      [
        "Die Gesamtzahl bestandener Tests ohne Anforderungsbezug",
        "Die Testzahl zeigt nicht, welche ASVS-Anforderungen geprüft wurden.",
      ],
      [
        "Nur den Namen des Testwerkzeugs",
        "Ein Werkzeugname sagt nicht, welche Anforderungen abgedeckt wurden.",
      ],
    ),
    question(
      "SC15",
      `${asvsAssessment}#verification-reporting`,
      "Was sollte ein ASVS-Bericht über festgestellte Ausnahmen enthalten?",
      [
        "Die betroffenen Anforderungen und Hinweise zur Behebung",
        "Die Quelle verlangt nachvollziehbare Ausnahmen samt Orientierung zur Korrektur.",
      ],
      [
        "Nur eine Gesamtampel ohne Einzelbefunde",
        "Ohne betroffene Anforderungen ist die Aussage nicht nachprüfbar.",
      ],
      [
        "Eine reine Liste gefundener Schwachstellen",
        "Ein Bericht nur über Fehler zeigt den Umfang der geprüften Anforderungen nicht.",
      ],
    ),
    question(
      "SC16",
      `${asvsAssessment}#verification-mechanisms`,
      "Warum kann die Prüfung einer ASVS-Anforderung Quellcode und Dokumentation brauchen?",
      [
        "Ein Verhalten ist von außen nicht immer ausreichend erkennbar",
        "Für manche Anforderungen müssen Implementierung und Sicherheitsentscheidung untersucht werden.",
      ],
      [
        "Weil ein Browser-Test grundsätzlich verboten ist",
        "Laufzeittests können Teil der Prüfung sein, reichen aber nicht für alles.",
      ],
      [
        "Weil Dokumentation jeden Fehler sicher ausschließt",
        "Dokumentation hilft der Prüfung, garantiert aber keine korrekte Umsetzung.",
      ],
    ),
    question(
      "SC17",
      `${asvsAssessment}#the-role-of-automated-security-testing-tools`,
      "Was ist die Grenze eines üblichen SAST- oder DAST-Scans gegenüber ASVS?",
      [
        "Komplexe Fachlogik und Zugriffsregeln werden oft nicht vollständig geprüft",
        "Die Quelle nennt diese Anforderungen als Grenze fertiger Standardscanner.",
      ],
      [
        "Er kann überhaupt keine Sicherheitsprobleme finden",
        "Scanner können bestimmte technische Probleme durchaus aufdecken.",
      ],
      [
        "Er ersetzt eine festgelegte Prüffrage für jede Anforderung",
        "Die Abdeckung muss pro relevanter Anforderung begründet werden.",
      ],
    ),
    question(
      "SC18",
      `${asvsAssessment}#the-role-of-automated-security-testing-tools`,
      "Wie lässt sich eine projektspezifische Zugriffsregel wiederholt gegen ASVS prüfen?",
      [
        "Mit einem passenden automatisierten Anwendungs- oder Integrationstest",
        "Die Quelle empfiehlt für komplexere Anforderungen spezifische Prüfungen auf bestehender Testinfrastruktur.",
      ],
      [
        "Nur mit einem allgemeinen Scanner-Start ohne Konfiguration",
        "Ein Standardscan kennt die konkrete Rollenregel nicht.",
      ],
      [
        "Nur mit einem einmaligen Kommentar im Code",
        "Ein Kommentar führt keine wiederholbare Prüfung aus.",
      ],
    ),
    question(
      "SC19",
      `${asvsAssessment}#owasps-stance-on-asvs-certifications-and-trust-marks`,
      "Ein Anbieter wirbt mit „offiziell OWASP-ASVS-zertifiziert“. Wie ist das einzuordnen?",
      [
        "OWASP selbst bestätigt solche Zertifizierungen nicht",
        "OWASP zertifiziert laut eigener Darstellung weder Anbieter noch Software.",
      ],
      [
        "Jede solche Werbung ist automatisch ein OWASP-Prüfbeleg",
        "Ein Drittanbieter-Siegel ist keine offizielle OWASP-Bestätigung.",
      ],
      [
        "Das ASVS darf deshalb überhaupt nicht zur Prüfung genutzt werden",
        "Ein Standard kann auch ohne offizielle OWASP-Zertifizierung als Prüfgrundlage dienen.",
      ],
    ),
    question(
      "SC20",
      `${asvsChanges}#structural-changes-and-new-chapters`,
      "Warum führt ASVS 5.0 einen eigenen Bereich für Web-Frontend-Sicherheit?",
      [
        "Browser-Anwendungen und reine APIs haben unterschiedliche Sicherheitsaspekte",
        "Die Quelle nennt komplexere Browseranwendungen und API-orientierte Architekturen als Grund der Trennung.",
      ],
      [
        "Frontend-Kontrollen sind mit Sitzungsregeln identisch",
        "Die Quelle ordnet Frontend-Sicherheit gerade in ein eigenes Kapitel ein.",
      ],
      [
        "Frontend-Kontrollen sind allein mit Serverkonfiguration prüfbar",
        "Browserseitiges Verhalten kann nicht pauschal aus der Serverkonfiguration abgeleitet werden.",
      ],
    ),
    question(
      "SC21",
      `${asvsChanges}#documented-security-decisions`,
      "Warum wurden dokumentierte Sicherheitsentscheidungen in ASVS 5.0 deutlicher formuliert?",
      [
        "Sie machen für Umsetzung und Prüfung nötige Festlegungen sichtbar",
        "Implizite Erwartungen wurden zu ausdrücklich prüfbaren Dokumentationsanforderungen.",
      ],
      [
        "Sie sollen jede Sicherheitsprüfung auf Papier beschränken",
        "Die Entscheidungen leiten die technische Umsetzung und Verifikation.",
      ],
      [
        "Sie ersetzen die Auswahl eines konkreten Geltungsbereichs",
        "Auch der geprüfte Umfang muss eigens festgelegt werden.",
      ],
    ),
    question(
      "SC22",
      `${asvsChanges}#rethinking-level-definitions`,
      "Worauf beruht die Priorisierung der ASVS-5.0-Level vor allem?",
      [
        "Risikoreduktion unter Berücksichtigung des Umsetzungsaufwands",
        "Die Quelle erläutert diese Faktoren für die Level-Einteilung.",
      ],
      [
        "Nur darauf, was ein Standardscanner leicht erkennt",
        "Reine Testbarkeit war ein kritisierter Maßstab früherer Einstufungen.",
      ],
      [
        "Auf der Verbreitung einer Regel in Webframeworks",
        "Framework-Verbreitung ist kein Maß für die Risikoreduktion der Anforderung.",
      ],
    ),
    question(
      "SC23",
      `${asvsChanges}#rethinking-level-definitions`,
      "Warum ist die leichteste Prüfmethodik kein ausreichendes Auswahlkriterium für Sicherheitsvorgaben?",
      [
        "Leicht testbare Regeln sind nicht automatisch die wirksamsten",
        "ASVS warnt davor, Prüfbarkeit mit Sicherheitswirkung gleichzusetzen.",
      ],
      [
        "Weil Sicherheitsanforderungen nie testbar sein sollen",
        "ASVS verlangt ausdrücklich verifizierbare Anforderungen.",
      ],
      [
        "Weil Aufwand bei Schutzmaßnahmen völlig irrelevant ist",
        "Die Level-Betrachtung berücksichtigt auch Implementierungsaufwand.",
      ],
    ),
    question(
      "SC24",
      `${asvsAssessment}#the-role-of-penetration-testing`,
      "Was kann eine rein externe Black-Box-Prüfung gegenüber einer ASVS-Prüfung übersehen?",
      [
        "Bedrohungen und fehlende Kontrollen, die Quellcode oder Entwurf offenlegen",
        "Die Quelle empfiehlt Zugang zu Implementierung und Beteiligten für eine gründlichere Prüfung.",
      ],
      [
        "Jedes sichtbare HTTP-Ergebnis",
        "Ein Black-Box-Test kann sichtbare Antworten durchaus beobachten.",
      ],
      [
        "Jede Netzwerkverbindung",
        "Netzwerkverhalten kann auch von außen teilweise sichtbar sein.",
      ],
    ),
    question(
      "SC25",
      `${asvsScope}#scope-of-the-asvs`,
      "Ein Team übernimmt ASVS für eine Spring-Anwendung. Wie geht es mit Hosting- und CI/CD-Risiken um?",
      [
        "Sie werden zusätzlich mit passenden Leitlinien geprüft",
        "ASVS deckt Anwendungssicherheit ab und ersetzt keine Prüfung anderer Lebenszyklusbereiche.",
      ],
      [
        "Sie gelten durch ASVS automatisch als vollständig gelöst",
        "Der ASVS-Geltungsbereich umfasst diese Bereiche nicht vollständig.",
      ],
      [
        "Sie werden aus dem Projektumfang entfernt",
        "Außerhalb von ASVS heißt nicht außerhalb des Projektrisikos.",
      ],
    ),
  ],
  "llm-fallibility-and-counterchecks": [
    question(
      "LC01",
      `${nist}#page=10`,
      "Was bezeichnet NIST bei generativer KI als Konfabulation?",
      [
        "Eine selbstsicher präsentierte falsche oder irreführende Ausgabe",
        "NIST beschreibt fehlerhafte Inhalte, die mit scheinbarer Gewissheit erscheinen.",
      ],
      [
        "Eine ausdrücklich als Fiktion angeforderte Geschichte",
        "Kreative Fiktion ist nicht dieselbe Täuschung über einen Faktenanspruch.",
      ],
      [
        "Eine vor Ausführung abgebrochene Anfrage",
        "Ein Abbruch ist keine erzeugte falsche Aussage.",
      ],
    ),
    question(
      "LC02",
      `${nist}#page=10`,
      "Ein LLM nennt eine Bibliotheks-API flüssig und ohne Vorbehalt. Was folgt daraus für die Prüfung?",
      [
        "Die API anhand der passenden Originaldokumentation kontrollieren",
        "Selbstsicherer Stil schützt laut NIST nicht vor falschen Ausgaben.",
      ],
      [
        "Die Angabe wegen des sicheren Tons direkt übernehmen",
        "Gerade zuversichtlich vorgetragene Fehler sind ein Risiko.",
      ],
      [
        "Nur die Formulierung des Satzes prüfen",
        "Grammatik belegt keine vorhandene API.",
      ],
    ),
    question(
      "LC03",
      `${nist}#page=10`,
      "Welche Ausgabe kann nach NIST ebenfalls eine Konfabulation sein?",
      [
        "Ein zur vorherigen Antwort widersprüchlicher Folgeschritt",
        "NIST umfasst auch Ausgaben, die Eingaben oder früheren Aussagen widersprechen.",
      ],
      [
        "Eine ausdrücklich markierte offene Frage",
        "Eine sichtbare Unsicherheit ist nicht selbst eine erfundene Tatsache.",
      ],
      [
        "Eine korrekt zitierte unveränderte Eingabe",
        "Ein korrekt wiedergegebener Input ist kein erfundener Inhalt.",
      ],
    ),
    question(
      "LC04",
      `${nist}#page=10`,
      "Wodurch kann eine falsche LLM-Antwort zusätzlich glaubwürdig wirken?",
      [
        "Durch erfundene Begründungen oder Quellenangaben",
        "NIST warnt ausdrücklich vor falschen Logikschritten und Zitaten.",
      ],
      [
        "Durch eine echte Gegenprüfung am Quelltext",
        "Eine unabhängige Prüfung kann Fehler aufdecken, statt sie nur glaubwürdig zu machen.",
      ],
      [
        "Durch einen klaren Hinweis auf fehlende Evidenz",
        "Eine sichtbare Evidenzlücke ist kein Glaubwürdigkeitsbeleg.",
      ],
    ),
    question(
      "LC05",
      `${nist}#page=10`,
      "Bei welcher Art von Aufgabe hebt NIST Konfabulationsrisiken besonders hervor?",
      [
        "Langen offenen Antworten mit hohem Kontext- oder Fachwissenbedarf",
        "Die Quelle nennt diese Bedingungen als besonders relevant für falsche Ausgaben.",
      ],
      [
        "Nur bei Antworten mit genau einem Wort",
        "NIST beschreibt breitere Risiken und hebt offene Langformaufgaben hervor.",
      ],
      [
        "Nur bei lokal ausgeführten Tests",
        "Ein Testlauf ist keine typische Form generierter Langformantwort.",
      ],
    ),
    question(
      "LC06",
      `${nist}#page=10`,
      "Warum verdient ein KI-Vorschlag für eine sicherheitskritische Java-Regel strengere Gegenprüfung?",
      [
        "Falsche Ausgaben können folgenreiche Entscheidungen auslösen",
        "NIST betont die Auswirkungen in Anwendungen mit bedeutenden Entscheidungen.",
      ],
      [
        "Weil jede KI-Ausgabe zwangsläufig falsch ist",
        "NIST beschreibt ein Risiko, keine ausnahmslose Fehlerquote.",
      ],
      [
        "Weil sicherheitskritische Regeln nicht testbar sind",
        "Passende Tests sind gerade ein Teil der Gegenprüfung.",
      ],
    ),
    question(
      "LC07",
      `${nist}#page=10`,
      "Ein Modell liefert zu einer Behauptung eine genaue URL. Was ist als Nächstes sinnvoll?",
      [
        "Prüfen, ob die Originalseite die Behauptung wirklich trägt",
        "NIST weist auf erfundene Quellen und Zitate hin.",
      ],
      [
        "Die URL schon als inhaltlichen Nachweis werten",
        "Ein Link allein belegt weder Existenz noch passende Aussage.",
      ],
      [
        "Den Anbieter anhand der URL-Domain erkennen",
        "Eine bekannte Domain bestätigt noch nicht die konkrete Aussage auf der Seite.",
      ],
    ),
    question(
      "LC08",
      `${nist}#page=34`,
      "Wie sollten Behauptungen über die Leistungsfähigkeit eines Modells bewertet werden?",
      [
        "Mit empirisch validierten Methoden",
        "NIST empfiehlt die empirische Prüfung von Fähigkeitsbehauptungen.",
      ],
      [
        "Mit einer Werbeaussage des Anbieters allein",
        "Eine Behauptung ohne unabhängige Messung ist kein Leistungsnachweis.",
      ],
      [
        "Mit einer einzigen beeindruckenden Antwort",
        "Ein Einzelfall trägt keine belastbare Fähigkeitsbewertung.",
      ],
    ),
    question(
      "LC09",
      `${nist}#page=34`,
      "Warum sollten Tests eines KI-Systems dem späteren Einsatz ähneln?",
      [
        "Leistung muss unter vergleichbaren Bedingungen gezeigt werden",
        "NIST fordert Messung in Bedingungen ähnlich dem vorgesehenen Einsatz.",
      ],
      [
        "Damit beliebige Beispiele als Beweis genügen",
        "Unpassende Beispiele lassen die Einsatzleistung offen.",
      ],
      [
        "Damit die Testdaten später nicht dokumentiert werden müssen",
        "Die Messbedingungen und Ergebnisse sollen dokumentiert sein.",
      ],
    ),
    question(
      "LC10",
      `${nist}#page=35`,
      "Was ist bei einem erfolgreichen, aber sehr kleinen LLM-Probelauf zu vermeiden?",
      [
        "Die Wirkung ohne weitere Prüfung auf alle Fälle übertragen",
        "NIST warnt vor Verallgemeinerung aus schmalen, unsystematischen Beobachtungen.",
      ],
      [
        "Den Probelauf als begrenzte Beobachtung festhalten",
        "Das ist gerade die angemessene Einordnung eines kleinen Tests.",
      ],
      [
        "Weitere repräsentative Fälle untersuchen",
        "Zusätzliche Fälle können die Einschätzung verbessern.",
      ],
    ),
    question(
      "LC11",
      `${nist}#page=35`,
      "Welche zwei Bestandteile einer generierten Antwort nennt NIST ausdrücklich zur Überprüfung?",
      [
        "Quellen und Zitate",
        "NIST empfiehlt, die in KI-Ausgaben genannten Quellen und Zitate zu prüfen.",
      ],
      [
        "Modellname und Antwortformat",
        "Diese Angaben helfen bei der Einordnung, sind aber nicht die von NIST genannten Belege.",
      ],
      [
        "Promptlänge und Antwortdauer",
        "Diese Messwerte prüfen nicht die behaupteten Quellen der Antwort.",
      ],
    ),
    question(
      "LC12",
      `${nist}#page=35`,
      "Ein KI-System nennt eine Quelle korrekt, zieht daraus aber einen unpassenden Schluss. Was bleibt zu prüfen?",
      [
        "Ob die Aussage tatsächlich von der Quelle gestützt wird",
        "Quellenprüfung umfasst den Bezug zwischen Beleg und behaupteter Aussage.",
      ],
      [
        "Ob der Link auf einen bekannten Anbieter zeigt",
        "Ein bekannter Anbieter kann zitiert sein, ohne den gezogenen Schluss zu stützen.",
      ],
      [
        "Ob der Quellenlink ohne Anmeldung erreichbar ist",
        "Erreichbarkeit sagt noch nichts über die behauptete Aussage.",
      ],
    ),
    question(
      "LC13",
      `${nist}#page=35`,
      "Warum sollte die Herkunft von Daten für Retrieval oder Feinabstimmung geprüft werden?",
      [
        "Unbelegte Daten können die Integrität der KI-Ausgabe beeinträchtigen",
        "NIST empfiehlt die Prüfung der Datenherkunft und der Verankerung von Retrieval-Daten.",
      ],
      [
        "Weil Retrieval grundsätzlich jede Konfabulation verhindert",
        "Zusätzliche Daten garantieren keine fehlerfreie Antwort.",
      ],
      [
        "Weil ein Dateiname die fachliche Herkunft vollständig erklärt",
        "Ein Name allein zeigt weder Ursprung noch Qualität.",
      ],
    ),
    question(
      "LC14",
      `${nist}#page=36`,
      "Wie behandelt NIST KI-generierten Code vor einer risikoreichen Übernahme?",
      [
        "Auf Gültigkeit, Sicherheit und mögliche Folgefehler prüfen",
        "NIST nennt die Codeprüfung als Teil der Bewertung generierter Ausgaben.",
      ],
      [
        "Allein wegen erfolgreicher Generierung freigeben",
        "Erzeugung ist keine Prüfung der Auswirkungen.",
      ],
      [
        "Den Patch nur auf syntaktische Gültigkeit prüfen",
        "Gültige Syntax zeigt weder Sicherheit noch fachliche Folgen.",
      ],
    ),
    question(
      "LC15",
      `${nist}#page=35`,
      "Warum ist ein grüner Test für einen vorgeschlagenen Java-Patch noch kein allgemeiner Korrektheitsbeweis?",
      [
        "Er zeigt nur das Verhalten der geprüften Fälle und Bedingungen",
        "NIST verlangt, Grenzen der Übertragbarkeit von Prüfungen zu dokumentieren.",
      ],
      [
        "Er zeigt automatisch das Verhalten jeder möglichen Eingabe",
        "Ein begrenzter Testlauf deckt nicht alle Fälle ab.",
      ],
      [
        "Er macht einen Quellenvergleich rechtlich unmöglich",
        "Der Test verhindert keine zusätzliche Prüfung von Quellen oder Verträgen.",
      ],
    ),
    question(
      "LC16",
      `${nist}#page=36`,
      "Was soll ein KI-System bei Eingaben außerhalb seiner Wissensgrenze können?",
      [
        "Sicher fehlschlagen oder kontrolliert begrenzen",
        "NIST nennt sicheres Scheitern jenseits von Wissensgrenzen als Bewertungskriterium.",
      ],
      [
        "Mit derselben Gewissheit raten",
        "Raten ohne Evidenz verstärkt das Konfabulationsrisiko.",
      ],
      [
        "Jede Eingabe als erfolgreich markieren",
        "Erfolg ohne belastbare Antwort verdeckt die Grenze.",
      ],
    ),
    question(
      "LC17",
      `${nist}#page=38`,
      "Wozu können kontrafaktische Prompts in einer KI-Bewertung dienen?",
      [
        "Um Erklärungen und Verhalten unter geänderten Annahmen zu untersuchen",
        "NIST nennt kontrafaktische Prompts als dokumentierbare Erklärungstechnik.",
      ],
      [
        "Als alleiniger Beweis für fachliche Wahrheit",
        "Ein veränderter Prompt ersetzt keine Prüfung am realen Sollzustand.",
      ],
      [
        "Um Datenherkunft automatisch nachzutragen",
        "Ein Gegenprompt erzeugt keine verifizierte Herkunft der Daten.",
      ],
    ),
    question(
      "LC18",
      `${nist}#page=34`,
      "Welche Einschränkung sollte bei einer Modellbewertung dokumentiert werden?",
      [
        "Wie weit sich das Ergebnis auf andere Bedingungen übertragen lässt",
        "NIST fordert die Grenzen der Generalisierbarkeit ausdrücklich zu dokumentieren.",
      ],
      [
        "Die durchschnittliche Länge der Modellantworten",
        "Antwortlänge erklärt nicht, ob das Ergebnis unter anderen Bedingungen gilt.",
      ],
      [
        "Nur der Name der Person, die den Prompt tippte",
        "Der Name allein beschreibt nicht die geprüften Bedingungen.",
      ],
    ),
    question(
      "LC19",
      `${nist}#page=34`,
      "Wer sollte Ergebnisse einer Vorabprüfung vor einer KI-Freigabe erhalten?",
      [
        "Die für die Freigabe zuständigen Beteiligten",
        "NIST empfiehlt, Vorabtestergebnisse mit relevanten Entscheidenden zu teilen.",
      ],
      [
        "Nur das Modell selbst",
        "Eine Modellkonversation ersetzt keine verantwortliche Freigabe.",
      ],
      [
        "Nur ein späterer Nutzer nach der Freigabe",
        "Die Prüfergebnisse sollen vor der Einsatzentscheidung vorliegen.",
      ],
    ),
    question(
      "LC20",
      `${nist}#page=47`,
      "Eine KI wird produktiv genutzt. Wie sollten mögliche Konfabulationen danach behandelt werden?",
      [
        "Mit fortlaufender Beobachtung und Bewertung",
        "NIST empfiehlt Prozesse zur Überwachung generativer Systeme nach dem Einsatz.",
      ],
      [
        "Als durch den ersten Test dauerhaft erledigt",
        "Neue Fälle können nach der Freigabe auftreten.",
      ],
      [
        "Nur durch erneutes Lesen der ursprünglichen Werbeaussage",
        "Werbetext liefert keine Beobachtung des produktiven Verhaltens.",
      ],
    ),
    question(
      "LC21",
      `${nist}#page=47`,
      "Ein Modell liefert einen unerwarteten Fehlerfall. Was ist als Gegenmaßnahme sinnvoll?",
      [
        "Den Fall erfassen und in spätere Auswertung einbeziehen",
        "NIST nennt Verfahren zur Erkennung von Fehlern und unerwarteten Ausgaben.",
      ],
      [
        "Den Fall wegen einer sonst guten Durchschnittsleistung löschen",
        "Ein konkreter Fehler bleibt für die Risikobewertung relevant.",
      ],
      [
        "Nur den Antwortstil des Modells ändern",
        "Stiländerung behebt die zugrunde liegende Fehlleistung nicht zwingend.",
      ],
    ),
    question(
      "LC22",
      `${nist}#page=47`,
      "Wann sollte ein vortrainiertes Modell nach NIST neu bewertet oder aus dem Einsatz genommen werden?",
      [
        "Wenn Leistung oder Risiko außerhalb festgelegter Grenzen liegen",
        "NIST verknüpft Maßnahmen mit Risikotoleranz und definierten Leistungsgrenzen.",
      ],
      [
        "Erst wenn ein völlig fehlerfreies Ersatzmodell existiert",
        "Die Quelle verlangt Handeln anhand der gesetzten Grenzen, nicht Perfektion des Ersatzes.",
      ],
      [
        "Nur wenn ein einziger Nutzer den Antwortstil nicht mag",
        "Eine Stilpräferenz ist nicht automatisch eine Grenzüberschreitung.",
      ],
    ),
    question(
      "LC23",
      `${nist}#page=35`,
      "Ein Team nutzt menschliches Fachwissen zur Verbesserung eines Modells. Was soll laut NIST festgehalten werden?",
      [
        "Wie stark und auf welche Weise dieses Fachwissen einfließt",
        "NIST empfiehlt, den Einsatz menschlicher Domänenkenntnis zu dokumentieren.",
      ],
      [
        "Nur die Anzahl der Beteiligten",
        "Die Anzahl erklärt die fachliche Rolle des Wissens nicht.",
      ],
      [
        "Nur die endgültige Modellbezeichnung",
        "Ein Modellname beschreibt die eingesetzten Fachregeln nicht.",
      ],
    ),
    question(
      "LC24",
      sycophancy,
      "Ein LLM stimmt nach einem Einwand sprachlich zu. Wie sollte die korrigierte Sachbehauptung beurteilt werden?",
      [
        "An den maßgeblichen Quellen und Gegenfällen erneut prüfen",
        "Die Studie zeigt, dass Modelle Ansichten des Gegenübers auch zulasten der Wahrheit übernehmen können; Zustimmung ist daher kein Nachweis.",
      ],
      [
        "Die Zustimmung als unabhängige Bestätigung zählen",
        "Das gleiche Modell kann weiter falsch liegen.",
      ],
      [
        "Nur auf einen höflicheren Ton achten",
        "Tonfall belegt keine korrigierte Sache.",
      ],
    ),
    question(
      "LC25",
      `${nist}#page=36`,
      "Wie sollte der Prüfaufwand für einen KI-Vorschlag mit möglichen schweren Folgen festgelegt werden?",
      [
        "Nach Einsatzkontext, Folgen und verbleibendem Risiko",
        "NIST verlangt eine kontextbezogene Bewertung von Sicherheit und Rest-Risiko.",
      ],
      [
        "Für jede Idee auf denselben starren Mindestwert",
        "Unterschiedliche Folgen brauchen passende Prüfungen.",
      ],
      [
        "Nach Modellpreis und Antwortgeschwindigkeit",
        "Betriebskosten und Tempo ersetzen keine Bewertung der möglichen Folgen.",
      ],
    ),
  ],
};

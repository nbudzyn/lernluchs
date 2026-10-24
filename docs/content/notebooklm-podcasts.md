# Podcasts aus Primärquellen mit NotebookLM

Dieser redaktionelle Ablauf erzeugt deutsche Audio-Zusammenfassungen aus den
Primärquellen vorhandener Lernluchs-Themen und übernimmt fertige öffentliche
Audio-Links in die App. Er läuft auf ausdrücklichen Auftrag lokal im Browser.
Die statische öffentliche App erhält weder Google-Anmeldung noch KI-Zugriff.

## Lokales Skript

Nach `npm ci` stehen die benötigten Bibliotheken bereits bereit. Das Skript nutzt
das installierte Google Chrome. Es spricht semantische Steuerelemente an und
wechselt bei schmaler Ansicht zu „Sources“ beziehungsweise „Studio“.

```powershell
# Themen-IDs und Zahl textueller Primärquellen anzeigen:
node scripts/notebooklm-podcasts.mjs plan

# Einmalig im getrennten lokalen Profil selbst anmelden; Fenster danach schließen:
node scripts/notebooklm-podcasts.mjs login

# Genau einen neuen Auftrag vorbereiten und nach vollständigem Import beauftragen:
node scripts/notebooklm-podcasts.mjs start --topic research-plan-tasks

# Erst auf Fortsetzungssignal des Entwicklers vorhandene Aufträge prüfen:
node scripts/notebooklm-podcasts.mjs check

# Weitere Themen ausdrücklich auswählen; höchstens zwei davon bearbeiten:
node scripts/notebooklm-podcasts.mjs start --topic java-ai-applications --topic spec-driven-development-openspec --max 2
```

Standardmäßig liegen Browserprofil, Zuordnung und Status unter
`%LOCALAPPDATA%\Lernluchs\notebooklm-podcasts` (sonst im Benutzerverzeichnis).
`--state-dir` und `--profile` erlauben andere lokale Verzeichnisse außerhalb des
Repositorys. Ein schon für diesen Ablauf angemeldetes getrenntes Profil kann
über `--profile` weiterverwendet werden; ein gleichzeitig geöffnetes Profil
nicht übernehmen. Für die Fenstergröße gibt es beispielsweise `--viewport 800x650`.

Das Skript ist kein Hintergrunddienst: Nach dem Erzeugungsstart schließt es den
Browser und beendet den Aufruf. Auch nach zehn Minuten oder länger verwendet
`check` denselben gespeicherten Auftrag. Dauert der Quellenimport länger als
das begrenzte Importfenster, setzt ein erneutes `start` denselben Auftrag fort.
Ein unklar gebliebener Erzeugungsstart wird nicht automatisch erneut abgesendet.

Nach bestätigtem Erteilen der Audio-Aufträge den Entwickler unmittelbar
informieren und eine grobe Zeitschätzung bis zur Fertigstellung nennen. Bei
deutlich unterschiedlichen erwarteten Fertigstellungszeiten beide getrennt
angeben. Die Schätzung anhand der sichtbaren Warteschlange beziehungsweise
bisheriger Erzeugungszeiten einordnen; sie ist keine zugesicherte Dauer.

Danach löst ausschließlich der Entwickler die Fortsetzung aus. Bis zu seinem
Signal keine automatischen Statusprüfungen, Polling-Schleifen, Watcher oder
geplanten Wiederaufnahmen starten. Unabhängige Arbeiten derselben Story dürfen
währenddessen fortgesetzt werden; gespeicherte Aufträge erhalten.

`check` prüft fertige Audio-Links zusätzlich in einem nicht angemeldeten Kontext.
`ready-podcasts.json` im lokalen Statusverzeichnis enthält nur die zur Übernahme
vorbereiteten öffentlichen Quellenmetadaten. Bereits beim passenden Thema im
aktuellen Katalog enthaltene Audio-URLs werden als integriert erkannt.
Das Skript ändert selbst keine App-Dateien und umgeht damit nicht Spec, TDD,
Review oder Commit-Freigabe. Für die Übernahme gelten die folgenden Schritte.

Ein Auftrag gilt innerhalb desselben Monats bei gleicher Themen-ID und gleicher
Menge von Primärquellen-URLs als derselbe Auftrag. Ein neuer Monat oder geänderte
Quellen-URLs erzeugen eine neue Zuordnung. Redaktionelle Quellenprüfung und die
Bewertung wesentlicher Importlücken bleiben Aufgaben des ausführenden Agenten.
Bei geänderter Google-Oberfläche kann eine Anpassung nötig werden; Kontingente
werden nicht durch Upgrade- oder Zahlungsaktionen erweitert.

## Wiederaufnahme und Auswahl

1. Arbeitsort, Branch, aktive Spec und Schreibbesitzer nach dem
   [Worktree-Ablauf](../quality/worktrees.md) prüfen. Produktrelevante Änderungen
   brauchen eine aktive Spec und die üblichen RED-/GREEN-Nachweise.
2. Vor neuen Aufträgen den lokalen Arbeitsstatus und vorhandene passende
   NotebookLM-Notebooks prüfen. Zuerst fertige, noch nicht integrierte Podcasts
   übernehmen, danach laufende prüfen und erst danach neue beauftragen.
3. Themen anhand des aktuellen Nutzerauftrags auswählen. Persönliche
   Priorisierung, Notebook-Zuordnungen, Browserprofile, Kontingentstände und
   Fehlermeldungen außerhalb von Git lokal halten. Nicht aus persönlichem
   Lernstand eine öffentliche Priorisierung ableiten.
4. Für jedes Thema die `primary`-Quellen mit `mediaType: "text"` aus
   `src/verticals/topics/topics.ts` heranziehen. Bestehende Podcasts,
   Sekundärquellen und Lernluchs-Themenzusammenfassungen gehören nicht zu diesen
   Eingabequellen. Quellen nach den [Quellenregeln](source-selection.md) prüfen;
   fehlende wesentliche Aspekte oder einseitige Abdeckung gezielt ergänzen.

## Notebook vorbereiten

- Pro Thema und Podcast ein neues Notebook verwenden. Der Name ist exakt der
  aktuelle Thementitel mit der Endung ` - Primärquellen`. Ein gleicher Name allein ist
  kein Grund, einen bereits laufenden Auftrag erneut anzulegen: Vorhandene
  Quellen und Studio-Aufträge sowie die lokale Zuordnung prüfen.
- Eine erforderliche Google-Anmeldung nimmt der Nutzer im sichtbaren Browser
  selbst vor. Keine Zugangsdaten aus anderen Browserprofilen übernehmen und
  keine Authentifizierungsdaten in das Repository schreiben.
- Unter „Quelle hinzufügen“ → „Websites“ die ausgewählten URLs gemeinsam
  zeilenweise einfügen. Sie bleiben getrennte Quellen. Auf den erfolgreichen
  Import jeder einzelnen Quelle warten; Original-URLs, Anzahl und ausgewählte
  Quellen prüfen. Das Skript liest die Original-URLs aus den gerenderten
  Quellenzeilen; bei fehlendem oder abweichendem URL-Nachweis hält es an.
  Bei einer wesentlichen nicht importierbaren Quelle das Thema zurückstellen.
- Unter „Notebook freigeben“ den Zugriff „Nutzer mit einem Link“ einstellen und
  **Speichern** ausführen. Danach den gespeicherten Freigabestatus prüfen.
  Die gesonderte Einstellung „Öffentlicher Zugriff“ nicht mit Linkzugriff
  verwechseln. Keine zusätzlichen Personen einladen oder benachrichtigen.
  Kopieren/Duplizieren nicht zusätzlich erlauben, wenn dies Rechte an den
  importierten Fremdinhalten voraussetzt, die nicht geklärt sind.

## Audio beauftragen

In „Audio-Zusammenfassung“ das Format „Detaillierte Analyse“, Sprache „Deutsch“
und alle vorgesehenen Quellen wählen. Eine mögliche Längenwahl anhand der
aktuellen Oberfläche prüfen; in der erprobten deutschen Ansicht standen
„Kurz“ und „Standard“ bereit. „Standard“ verwenden und 35 Minuten im Prompt
anstreben. Die tatsächliche Laufzeit später ablesen, nicht aus dem Wunsch ableiten.

In „Worauf sollen sich die KI-Moderatoren in dieser Folge konzentrieren?“
die Zielgruppe, Stichtag und den konkreten Sechsmonatszeitraum ausdrücklich
angeben. Monat und Jahr bei jedem Auftrag neu bestimmen. Vorlage:

> Erstellt einen ausführlichen deutschsprachigen Podcast zum Thema <Thementitel>.
> Adressat: Senior Java/Web-Entwickler mit KI im <aktueller Monat und Jahr>.
> Wunschdauer: ungefähr 35 Minuten. Verbindet die wesentlichen Inhalte aller
> ausgewählten Primärquellen zu einer zusammenhängenden, fachlich gehaltvollen
> Diskussion. Behandelt die zum Thema passenden Arbeitsweisen, Beispiele für
> Java-/Webentwicklung, Entscheidungen, Grenzen und begründete Gegenpositionen.
> Ordnet belegte Entwicklungen vom <Beginn des Sechsmonatszeitraums> bis zum
> <Stichtag> ein und nutzt passende zeitlose Grundlagen. Beschränkt
> Tatsachenbehauptungen auf die Quellen, kennzeichnet persönliche Positionen
> als solche und erfindet keine Entwicklungen. Keine pauschalen Ansagen darüber,
> dass aktuelle Neuigkeiten fehlen.

Themenschwerpunkte konkret ergänzen; die Vorlage ist eine Erzeugungsanweisung
und keine zusätzliche Notebook-Quelle.

Die vorhandene kostenlose Nutzung und die angezeigten Limits berücksichtigen.
Keine feste Zahl von Audio-Aufträgen oder feste Rücksetzzeit unterstellen.
Keine Abonnements, Testabos, Cloud-Abrechnung oder kostenpflichtigen APIs
aktivieren. Bei ausgeschöpftem Kontingent gegebenenfalls die angebotene
Hintergrundwarteschlange verwenden und den Auftrag lokal festhalten.
Nach „Jetzt generieren“ oder „Später generieren“ den sichtbaren Auftragsstatus
prüfen. Wiederholte Aufrufe prüfen diesen Auftrag und erzeugen kein Duplikat.

## Fertiges Audio übernehmen

1. Auf ein tatsächlich fertiges Audio warten. Erzeugungsfehler, Wartezustand
   und fertige Ausgabe unterscheiden. Titel, tatsächliche Laufzeit und
   deutsche Ausgabe anhand der Oberfläche prüfen.
2. Die Freigabe des fertigen Audios verwenden und dessen Audio-Link ermitteln.
   Ein Notebook-Link ist kein Ersatz für einen noch fehlenden Audio-Link.
   Den öffentlichen Zugriff des Audio-Links zusätzlich prüfen.
3. Beim passenden Thema einen Eintrag mit `type: "audio-summary"`,
   `mediaType: "audio"`, `origin: "secondary"`, `language: "de"`,
   tatsächlicher Laufzeit und tatsächlichem Prüftag ergänzen. Der aus
   Primärquellen erzeugte Podcast bleibt eine Sekundärquelle.
4. Den neuen Podcast vor allen bisherigen Sekundärquellen anordnen; bestehende
   Podcasts erhalten. HTTPS, Eindeutigkeit, Quellenobergrenze und redaktionelle
   Datumsregeln beachten. Eine vorgeschaltete Nutzer-Hörprobe ist für diese
   Übernahme nicht erforderlich.
5. Die Änderung nach [Prüfumfang und Nachweisen](../quality/verification-strategy.md#prüfumfang-und-nachweise)
   prüfen. Im lokalen App-Browser Reihenfolge, Sprache, Laufzeit und Quellenlink
   nachweisen. Den lokalen Auftrag anschließend als integriert markieren.

Manueller Nutzertest und Commit-Freigabe bleiben gemäß [AGENTS.md](../../AGENTS.md)
erforderlich. Ein Push nach `origin/main` braucht einen ausdrücklichen Auftrag
und erfolgt ausschließlich aus dem eigenen Worktree; der Entwickler-Worktree
und sein lokales `main` bleiben unverändert.

## Grundlagen

Oberfläche und Originalquellen geprüft am 21.10.2026. Beschriftungen und
Nutzungslimits können sich ändern; beim Ausführen den aktuellen Zustand prüfen.

- [Audio-Zusammenfassungen erstellen und teilen](https://support.google.com/gemininotebook/answer/16212820)
- [Quellen hinzufügen](https://support.google.com/gemininotebook/answer/16215270)
- [Nutzungslimits und spätere Erzeugung](https://support.google.com/gemininotebook/answer/17670842)

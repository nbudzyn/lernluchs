# Podcasts aus Primärquellen mit NotebookLM

Auf ausdrücklichen Auftrag lokal deutsche Audio-Zusammenfassungen aus Primärquellen
bestehender Themen erzeugen und öffentliche Audio-Links übernehmen.
Die statische App erhält weder Google-Anmeldung noch KI-Zugriff.

## Lokales Skript

Nach `npm ci` nutzt das Skript installiertes Google Chrome und semantische
Steuerelemente; bei schmaler Ansicht „Sources“/„Studio“.

```powershell
# Themen-IDs und Anzahl textueller Primärquellen:
node scripts/notebooklm-podcasts.mjs plan
# Einmalig selbst im getrennten Profil anmelden, danach Fenster schließen:
node scripts/notebooklm-podcasts.mjs login
# Einen Auftrag vorbereiten und erst nach vollständigem Import beauftragen:
node scripts/notebooklm-podcasts.mjs start --topic research-plan-tasks
# Nur auf Fortsetzungssignal des Entwicklers:
node scripts/notebooklm-podcasts.mjs check
# Weitere ausdrücklich gewählte Themen, höchstens zwei:
node scripts/notebooklm-podcasts.mjs start --topic java-ai-applications --topic spec-driven-development-openspec --max 2
```

Profil/Zuordnung/Status: `%LOCALAPPDATA%\Lernluchs\notebooklm-podcasts`,
sonst Benutzerverzeichnis. `--state-dir` und `--profile` erlauben andere lokale
Verzeichnisse außerhalb des Repositorys. Angemeldetes getrenntes Profil darf
wiederverwendet werden, gleichzeitig geöffnetes nicht übernehmen.
Fenstergröße etwa mit `--viewport 800x650`.

Kein Hintergrunddienst: Nach Erzeugungsstart Browser schließen und Aufruf beenden.
Auch bei langer Wartezeit nutzt `check` den gespeicherten Auftrag. Überschreitet
Quellenimport sein Zeitfenster, setzt erneutes `start` denselben Auftrag fort.
Unklaren Erzeugungsstart nicht automatisch erneut absenden.

Nach bestätigter Beauftragung sofort informieren und grobe Fertigstellungsschätzung
anhand sichtbarer Warteschlange/bisheriger Zeiten nennen; deutlich verschiedene
Erwartungen getrennt angeben, keine zugesicherte Dauer behaupten.
Danach ausschließlich auf Entwickler-Fortsetzungssignal warten:
kein automatisches Polling, Watcher oder geplante Wiederaufnahme.
Unabhängige Storyarbeit darf weitergehen; Aufträge erhalten.

`check` prüft Audio-Links auch unangemeldet. `ready-podcasts.json` enthält nur
öffentliche Übernahmemetadaten; bereits beim Thema vorhandene URLs gelten als integriert.
Das Skript ändert keine App-Dateien und ersetzt weder Spec/TDD noch Review/Freigabe.

Gleicher Monat, Themen-ID und Menge der Primärquellen-URLs bedeutet denselben
Auftrag; neuer Monat/geänderte URLs eine neue Zuordnung. Quellenprüfung und
wesentliche Importlücken redaktionell bewerten. Geänderte Google-Oberfläche kann
Anpassung erfordern; Kontingente nicht durch Upgrade/Zahlung erweitern.

## Wiederaufnahme und Auswahl

1. Arbeitsort, Branch, Spec und Schreibbesitz nach [Worktree-Ablauf](../quality/worktrees.md) prüfen. Produktänderungen benötigen aktive Spec und RED → GREEN.
2. Lokalen Status und passende vorhandene Notebooks prüfen: zuerst fertige, nicht integrierte Podcasts übernehmen, dann laufende prüfen, erst danach neue beauftragen.
3. Themen nach Nutzerauftrag auswählen, nicht nach persönlichem Lernstand öffentlich priorisieren. Priorisierung, Notebook-Zuordnung, Profile, Kontingente und Fehler bleiben lokal außerhalb von Git.
4. Nur `primary`-Quellen mit `mediaType: "text"` aus `src/verticals/topics/topics.ts` verwenden, keine Podcasts, Sekundärquellen oder Lernluchs-Zusammenfassungen. Nach [Quellenregeln](source-selection.md) prüfen; wesentliche Lücken/einseitige Abdeckung gezielt ergänzen.

## Notebook vorbereiten

- Pro Thema/Podcast neues Notebook: exakt `<aktueller Thementitel> - Primärquellen`. Gleicher Name allein rechtfertigt keinen neuen Auftrag; Quellen, Studio-Aufträge und lokale Zuordnung prüfen.
- Google-Anmeldung macht der Nutzer selbst sichtbar. Keine Zugangsdaten aus anderen Profilen übernehmen oder Authentifizierungsdaten ins Repository schreiben.
- „Quelle hinzufügen“ → „Websites“: URLs gemeinsam zeilenweise einfügen, getrennt importieren. Auf jeden erfolgreichen Import warten; Original-URLs, Anzahl und Auswahl prüfen. Das Skript prüft URLs aus gerenderten Quellenzeilen und hält bei fehlendem/abweichendem Nachweis an. Wesentliche nicht importierbare Quelle: Thema zurückstellen.
- „Notebook freigeben“ → „Nutzer mit einem Link“ → **Speichern**; gespeicherten Status prüfen. Nicht mit „Öffentlicher Zugriff“ verwechseln. Keine Personen einladen/benachrichtigen. Kopieren/Duplizieren nicht erlauben, wenn dafür ungeklärte Rechte an Fremdinhalten nötig sind.

## Audio beauftragen

Format „Detaillierte Analyse“, Sprache „Deutsch“, alle vorgesehenen Quellen.
Aktuelle Längenwahl prüfen; „Standard“ verwenden und 35 Minuten im Prompt anstreben.
Tatsächliche Laufzeit später ablesen, nicht vom Wunsch ableiten.

Zielgruppe, Stichtag und konkreten Sechsmonatszeitraum im Fokusfeld angeben;
Monat/Jahr bei jedem Auftrag neu bestimmen:

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

Themenschwerpunkte ergänzen; Prompt ist Erzeugungsanweisung, keine Notebook-Quelle.

Kostenlose Nutzung und sichtbare Limits beachten; keine feste Auftragszahl oder
Rücksetzzeit unterstellen. Keine Abos, Testabos, Cloud-Abrechnung oder kostenpflichtigen
APIs aktivieren. Bei erschöpftem Kontingent gegebenenfalls angebotene Hintergrundwarteschlange
nutzen und lokal festhalten. Nach „Jetzt generieren“/„Später generieren“ Auftragsstatus
prüfen; Wiederaufnahme prüft denselben Auftrag statt Duplikate zu erzeugen.

## Fertiges Audio übernehmen

1. Fertiges Audio von Fehler/Wartezustand unterscheiden; Titel, tatsächliche Laufzeit und Deutsch anhand der Oberfläche prüfen.
2. Audio-Freigabelink ermitteln und öffentlichen Zugriff zusätzlich prüfen; Notebook-Link ersetzt keinen fehlenden Audio-Link.
3. Beim Thema `type: "audio-summary"`, `mediaType: "audio"`, `origin: "secondary"`, `language: "de"`, tatsächliche Laufzeit/Prüftag eintragen. Auch aus Primärquellen erzeugtes Audio bleibt Sekundärquelle.
4. Vor bisherigen Sekundärquellen anordnen, bestehende Podcasts erhalten. HTTPS, Eindeutigkeit, Quellenobergrenze und Datumsregeln beachten. Keine vorgeschaltete Nutzer-Hörprobe erforderlich.
5. Nach [Prüfumfang](../quality/verification-strategy.md#prüfumfang-und-nachweise) prüfen. Reihenfolge, Sprache, Laufzeit und Link im lokalen App-Browser nachweisen; Auftrag lokal als integriert markieren.

Manueller Nutzertest und Commit-Freigabe nach [AGENTS.md](../../AGENTS.md) bleiben
erforderlich. Push nur ausdrücklich aus eigenem Worktree; Entwickler-Checkout und dessen `main` nicht ändern.

## Grundlagen

Oberfläche und Originalquellen geprüft am 21.10.2026; beim Ausführen aktuelle
Beschriftungen und Limits prüfen.

- [Audio erstellen und teilen](https://support.google.com/gemininotebook/answer/16212820)
- [Quellen hinzufügen](https://support.google.com/gemininotebook/answer/16215270)
- [Limits und spätere Erzeugung](https://support.google.com/gemininotebook/answer/17670842)

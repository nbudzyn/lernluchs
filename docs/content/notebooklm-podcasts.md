# Podcasts aus Primärquellen mit NotebookLM

Auf ausdrücklichen Auftrag lokal deutsche Audio-Zusammenfassungen aus Primärquellen
bestehender Themen erzeugen und öffentliche Audio-Links übernehmen.
Die statische App erhält weder Google-Anmeldung noch KI-Zugriff.

## Auftrag und Stoppkriterium

- **Nur beauftragen:** keine Downloads oder Integration bereits fertiger Audios. Bestand nur zur Duplikatvermeidung prüfen.
- **Alles aktuell kostenlos Mögliche beauftragen:** sowohl sofortige als auch spätere Erzeugung ausschöpfen. Nach jedem bestätigten Auftrag das nächste geeignete Thema bearbeiten. Ein erschöpfter Sofortmodus, eine volle Warteschlange oder eine Nutzungswarnung allein beendet den Auftrag nicht.
- Erst stoppen, wenn die aktuelle Oberfläche **keinen der beiden kostenlosen Wege mehr anbietet**, alle geeigneten Themen bereits beauftragt sind oder ein konkretes Hindernis die Fortsetzung verhindert. Verbleibendes Hindernis benennen; keine feste Auftragszahl annehmen.
- Keine Abos, Testabos, Upgrades, Cloud-Abrechnung oder kostenpflichtigen APIs aktivieren. Nicht auf eine Rücksetzung warten und keine automatische Wiederaufnahme einrichten.

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

Kein Hintergrunddienst: Nach dem beauftragten Lauf Browser schließen und Aufruf
beenden, ohne auf fertige Audios zu warten. Ein Sammelauftrag darf mehrere Themen umfassen.
Auch bei langer Wartezeit nutzt `check` den gespeicherten Auftrag. Überschreitet
Quellenimport sein Zeitfenster, setzt erneutes `start` denselben Auftrag fort.
Unklaren Erzeugungsstart nicht automatisch erneut absenden.

Nach bestätigter Beauftragung sofort informieren und grobe Fertigstellungsschätzung
anhand sichtbarer Warteschlange/bisheriger Zeiten nennen; deutlich verschiedene
Erwartungen getrennt angeben, keine zugesicherte Dauer behaupten.
Für Fertigstellungsprüfung, Download und Integration danach auf ein
Entwickler-Fortsetzungssignal warten: kein automatisches Polling, Watcher oder
geplante Wiederaufnahme. Weitere vom Nutzer freigegebene Themen dürfen währenddessen
vorbereitet und abgesendet werden; bei einem Sammelauftrag gilt das Stoppkriterium oben.
Unabhängige Storyarbeit darf weitergehen; Aufträge erhalten.

`check` prüft Audio-Links auch unangemeldet. `ready-podcasts.json` enthält nur
öffentliche Übernahmemetadaten; bereits beim Thema vorhandene URLs gelten als integriert.
Das Skript ändert keine App-Dateien und ersetzt weder Spec/TDD noch Review/Freigabe.

Gleicher Monat, Themen-ID und Menge der Primärquellen-URLs bedeutet denselben
Auftrag; neuer Monat/geänderte URLs eine neue Zuordnung. Quellenprüfung und
wesentliche Importlücken redaktionell bewerten. Geänderte Google-Oberfläche kann
Anpassung erfordern; Kontingente nicht durch Upgrade/Zahlung erweitern.

### Bei geänderter Oberfläche

1. Nach dem ersten Oberflächenfehler lokale Diagnose und aktuellen UI-Zustand prüfen. Den unverändert fehlschlagenden Skriptweg nicht für jedes weitere Thema wiederholen; vorhandene lokale Helfer im Statusverzeichnis prüfen und einen verifizierten Ablauf wiederverwenden.
2. Bei einem npm-/npx-Wrapper neben der globalen Node-Version den JavaScript-Einstieg der bereits vorhandenen CLI direkt mit Node 24 starten, wie in [AGENTS.md](../../AGENTS.md#node-laufzeit) vorgegeben. Das vermeidet zusätzlich fehlerhafte Weitergabe mehrzeiliger CLI-Argumente unter Windows.
3. Freigabedialog vollständig laden lassen. „Kopien zulassen“ kann erst nach Auswahl des Linkzugriffs erscheinen. Speichern abwarten und den gespeicherten Linkzugriff samt deaktivierter Kopieroption erneut prüfen; ein anfänglich angezeigter Standardwert ist kein Nachweis.
4. Erzeugungsschaltflächen können „Jetzt generieren“, „Erstellen“ oder „Später generieren“ heißen. Sichtbarkeit und Aktivierung beider kostenlosen Wege prüfen. Nur ein abgesendeter und anschließend sichtbar bestätigter Start oder geplanter Auftrag zählt; bei unklarem Ergebnis denselben Auftrag prüfen, nicht erneut absenden.

## Wiederaufnahme und Auswahl

1. Arbeitsort, Branch, Spec und Schreibbesitz nach [Worktree-Ablauf](../quality/worktrees.md) prüfen. Produktänderungen benötigen aktive Spec und RED → GREEN.
2. Lokalen Status und passende vorhandene Notebooks gemeinsam prüfen; Monatswechsel oder eine fehlende lokale Zuordnung rechtfertigen allein keinen Doppelauftrag. Wenn Übernahme zum Auftrag gehört, zuerst fertige, nicht integrierte Podcasts übernehmen, dann laufende prüfen, erst danach neue beauftragen. Bei „nur beauftragen“ gilt die Ausnahme oben.
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

Kostenlose Wege nach dem [Stoppkriterium](#auftrag-und-stoppkriterium) nutzen.
Nach dem Absenden die unmittelbare Start- oder Planungsbestätigung prüfen und lokal
festhalten; das ist keine Fertigstellungsabfrage. Konto-, Nutzungs-, Limit-, Rücksetz-
und Warteschlangendaten einschließlich der Abbruchnachweise bleiben außerhalb von Git.

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

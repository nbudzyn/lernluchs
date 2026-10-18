## Auf Git Worktrees umstellen
Auf Git Worktrees umstellen
- Ziele:
  - Der Entwickler kann parallel arbeiten (z.B. am story-backlog)
  - Leichteres Commit (keine parallelen Änderungen oder alte Änderungen durch den Entwickler)
  - Möglicherweise parallel arbeitende Agenten
  - Evtl. später separate Worktrees für Sub-Agenten

Jeder Worktree soll bei Bedarf separat in IntelliJ geöffnet werden können (auch parallel.)

- Vorher recherchieren, was in unserem Setup zu beachten ist
  - IntelliJ?
    - Muss man eine oder mehrere gewisse IntelliJ-Dateien (workspace.xml?) in .gitignore aufnehmen (und ggf. aus dem Branch entfernen?)
  - Jeder Agent kann nur seinen einzelnen Worktree lesen?

Push geschieht weiterhin nur durch den Entwickler

Sollte man parallele lokale Installationen (Testläufe) unterstützen?
- Abwägung Vor- und Nachteile, auch mit Blick auf die bisherigen Projektvorgaben
- Was wäre zu tun, um die Anwendung mehrfach lokal zu installieren?
- Lokale GUI-Tests?
- Dynamische Ports? Jeder Worktree seine eigenen (konfigurierten) Ports?
  - Sollte man dazu ein spezielles Tool / Skript verwenden?

Sollten wir Dopplungen (Ver-dreifachungen,...) vermeiden, indem wir Dateien sharen?

Hat am Ende jeder Worktree seinen eigenen Branch? Oder geht es auch einfacher (z.B. Änderungen im Story-Backlog)?

Klare Vorgabe (auch als Info an den Entwickler, wenn relevant): Workspace darf nicht einfach im Dateisystem gelöscht werden, sondern muss mit git worktree remove (oder so ähnlich) entfernt werden. (Recherchieren!)

### Geklärtes Refinement

- Standard ist ein dauerhafter Codex-Arbeitsplatz unter C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs. Der feste lokale IntelliJ-Arbeitsplatz des Entwicklers bleibt erhalten. Zusätzliche parallele Entwicklungen erhalten eigene temporäre Worktrees.
- Parallele App-Starts und E2E-Läufe werden bereits unterstützt: getrennte Installationen und Ausgaben, explizit konfigurierbare Ports je Worktree, kein Wiederverwenden fremder Testserver.
- Die Abnahme dieser Infrastruktur-Story darf ausdrücklich den Entwicklungsnutzen statt neuer Produktfachlichkeit zeigen: getrennte Arbeitsstände, App-Starts im Browser und sichere Tests.
- Push bleibt ausschließlich Aufgabe des Entwicklers. Commit erst nach grüner Pflichtsuite und ausdrücklich positiver manueller Prüfung.
- IntelliJ workspace.xml ist schon ignoriert und nicht versioniert; keine Entfernung und kein Kopieren dieser Datei nötig.
- Keine zusätzliche Bibliothek. Git-, npm-, Vite-, Playwright- und Codex-Bordmittel sowie eine kleine lokale Schreibschutzprüfung für diesen Workflow genügen.
- Agenten erhalten einen zugeordneten Arbeitsordner; Worktrees allein begrenzen keine Leserechte. Diese bestimmen die tatsächlichen Sandbox-Berechtigungen.

## Ziel und Nicht-Ziele

Codex bearbeitet Aufgaben in eigenen Worktrees, während der Entwickler in seinem festen IntelliJ-Projekt unabhängig weiterarbeitet. Ein dokumentierter Ablauf erklärt Einrichtung, Code-Einsicht, eigene Änderungen, Branches, Zusammenführung, manuellen Test, Push und sichere Entfernung. App und E2E lassen sich parallel an unterschiedlichen Ports betreiben.

Keine neue Produktfunktion, keine automatische Synchronisation persönlicher Daten, keine automatische Commit-/Push-Freigabe, keine parallelen Subagenten und keine gemeinsame node_modules-Installation. Keine neue fachliche Importbeziehung und keine Architekturausnahme zwischen Vertikalen.

## Betroffene Bereiche und Pflichtlektüre

- Entwicklungsworkflow, Index und Agentenanweisungen.
- Vite-/Playwright-Konfiguration und gemeinsame lokale Portvalidierung; Qualitäts-Tests; LF-Checkout per .gitattributes für reproduzierbare Windows-Worktrees.
- Vertikale topics ausschließlich mit dem vorhandenen Video-E2E-Test: lokale Requests anhand der tatsächlichen baseURL erkennen. Höchstens eine fachliche Vertikale ist betroffen.
- Maßgeblich: [Workflow](../README.md), [Governance](../../governance/durable-rules.md), [Prüfstrategie](../../quality/verification-strategy.md), [übergreifende Grenzen](../../architecture/verticals-and-boundaries.md#übergreifende-grenzen) und der Abschnitt Themen derselben Grenzendokumentation.
- Die Infrastruktur-Abnahme als Ausnahme vom fachlichen Browser-Geschäftswert ist im Refinement ausdrücklich bestätigt. Die übrigen Handlungs- und Freigabeschranken gelten unverändert.

## Entscheidungen, Recherche und Risiken

Recherche am 18.10.2026 anhand der Primärquellen:

- [Git worktree](https://git-scm.com/docs/git-worktree): Arbeitsdateien, HEAD und Index getrennt; Historie und Branch-Referenzen gemeinsam. Ein Branch regulär nur in einem Worktree. Für dauerhafte Arbeit Branch vor dem Commit anlegen. Integration erfolgt ausdrücklich per Merge oder Cherry-pick. Manuelle Worktrees mit git worktree remove entfernen; kein Löschen im Explorer, kein --force als Standard. Ignorierte lokale Dateien vor Entfernung separat berücksichtigen. Hauptworktree erhalten.
- [Codex Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees): Aufgaben-Worktrees werden verwaltet und beginnen standardmäßig detached. Open öffnet den jeweiligen Ordner; Handoff bewegt Chat und Arbeitsstand zwischen Local und Worktree. Für verwaltete Worktrees die Archivierungsfunktion mit Snapshot verwenden. Automatische Bereinigung und nicht versionierte Installationen berücksichtigen. Kein Versprechen, dass ignorierte Dateien im Snapshot erhalten bleiben.
- [Codex Windows-Sandbox](https://learn.chatgpt.com/docs/windows/windows-sandbox): Dateizugriff folgt dem effektiven Berechtigungsprofil. Ein Worktree ist keine technische Beschränkung auf dessen Lesezugriff. In dieser Session sind weitere Ordner lesbar; Änderungen außerhalb freigegebener Wurzeln erfordern Freigabe.
- [IntelliJ Worktrees](https://www.jetbrains.com/help/idea/use-git-worktrees.html): als separate Projekte öffnen, nicht verschachteln; workspace.xml mit Projekt-ID nicht versionieren oder kopieren. Im Bestand bereits durch .idea/.gitignore erfüllt. Andere versionierte Projekteinstellungen bleiben erhalten.
- [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/): Installation je Worktree anhand des Lockfiles. Gemeinsame node_modules wären durch Installieren, Bereinigen und abweichende Branch-Abhängigkeiten fehleranfällig. npm-Downloadcache darf gemeinsam bleiben.
- [Playwright Webserver](https://playwright.dev/docs/test-webserver): reuseExistingServer kann fremde Server wiederverwenden; für unsere isolierten E2E-Läufe ausschalten. baseURL, Serveradresse und storageState-Origin müssen denselben gewählten Port verwenden.
- [Playwright Browser](https://playwright.dev/docs/browsers#managing-browser-binaries): versionierte Browser-Binaries im Benutzer-Cache können gemeinsam bleiben; Testkontexte und Ausgaben bleiben getrennt.
- [Vite Ports](https://vite.dev/config/server-options#server-port): sonst weicht Vite bei belegtem Port aus. Explizite Ports plus strictPort vermeiden das. .env.local ist je Worktree lokal, Shell-Umgebungswerte haben Vorrang.

Umsetzung: LERNLUCHS_DEV_PORT (Standard 5173) und LERNLUCHS_E2E_PORT (Standard 4173), jeweils ganze Dezimalzahl 1–65535. Die Ports müssen verschieden sein. Gemeinsame Validierung für Vite und Playwright; .env.local wird ignoriert. Keine automatische Portsuche oder Reservierung, daher muss der Entwickler unterschiedliche Portpaare wählen; Kollisionen sollen sichtbar scheitern. Separate Origins halten lokalen Browserzustand getrennt. Gleichzeitige Tests auf einem Gerät teilen CPU/RAM und können langsamer werden. Mehrere E2E-Läufe im selben Worktree werden nicht unterstützt.

Zusätzlicher Befund: Ein frischer Windows-Worktree wurde durch core.autocrlf=true mit CRLF ausgecheckt. Die bestehende Formatprüfung meldete deshalb 76 Dateien rot (Exitcode 1), ohne fachliche Änderungen. .gitattributes legt text=auto und eol=lf fest; ausschließlich Zeilenenden im Aufgaben-Worktree normalisiert, ohne die Git-Inhalte weiterer Vertikalen zu ändern. Der bestehende Formatcheck ist der RED-Nachweis für diese Checkout-Anforderung.

## Prüffähige Abnahme

1. Aufgaben-Worktree ist getrennt vom festen lokalen Checkout; dort entstehen keine Story-Änderungen.
2. Anleitung erklärt Codex-Verwaltung, IntelliJ, Branch/Handoff, Entwickleränderungen, reine Entwickler-Pushes und Entfernung einschließlich ignorierter Dateien.
3. Portstandard, eigene Ports, Vorrang der Shell-Werte und ungültige/gleiche Ports sind automatisiert geprüft. Playwright verwendet überall dieselbe Origin und verweigert vorhandene Server; Vite weicht nicht auf andere Ports aus.
4. Zwei getrennte Installationen können gleichzeitig die App und je einen vorhandenen E2E-Ablauf ausführen. Der Video-E2E-Test funktioniert auch auf anderem Port.
5. Vollständige Pflichtsuite nach letzter produktrelevanter Änderung grün. Lokale Browserprüfung zeigt zwei erreichbare App-Instanzen; Lernzustand wird nicht kopiert oder synchronisiert.
6. Entwickler prüft manuell. Erst nach positiver Bestätigung erfolgt Commit mit archivierter Spec. Push führt der Entwickler aus.

## Dauerhafter Codex-Arbeitsplatz und Schreibschutz

Der Entwickler-Checkout bleibt unverändert auf main. Der zusätzliche permanente Git-Worktree liegt exakt unter `C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs`. Er wird nicht der kurzlebigen Codex-Bereinigung überlassen. Die vorhandene Story wird ohne Commit und ohne fremde Änderungen übernommen; Patch und neue Dateien werden bytegenau verglichen. Die bisherige verwaltete Kopie erst danach kontrolliert über Codex archivieren. Eigene Installation und lokales Portpaar 5273/4273 bleiben erhalten; IntelliJ workspace.xml wird nicht kopiert.

Neue reguläre Chats starten im separat geöffneten lokalen Codex-Projekt dieses Ordners mit New worktree AUS. Für parallele Entwicklung New worktree EIN und ein gesondertes freies Portpaar. Aufgabenbranches wechseln je Story, Ordner und IntelliJ-Projekt bleiben bestehen. Ein benannter Aufgabenbranch ist vom Git-Branch main verschieden.

Eine atomare lokale Sperre schützt je Worktree einen aktiven schreibenden Auftrag; Story-Zuordnung und Sperre bleiben getrennt. Zustand und Sicherungen liegen ausschließlich unter LOCALAPPDATA außerhalb des Repositorys. Keine TTL-basierte Zwangsübernahme. Sauberer Arbeitsbaum ist für eine neue Story nötig; eine passende bestehende Story darf mit uncommitteten Änderungen fortgesetzt werden. Vor Übernahme prüfen: Branch, Spec, Diff und vorhandene Sitzung. Eine verwaiste Sperre benötigt geprüfte Wiederaufnahme; bei unklarer oder noch lebender Sitzung keine automatische Übernahme. Abbruch verwirft nichts; Sicherung vor jeder später ausdrücklich beauftragten Bereinigung.

Lokale Codex-Hooks prüfen unterstützte Werkzeugaufrufe, Arbeitsort, Branch und Eigentümer. Atomare Operationen unter Windows durch einen benannten Betriebssystem-Mutex; die Sperrdatei enthält Sitzung, Turn und Prozessidentität. Normales Turn-Ende gibt die Schreibsperre frei, behält Story-Zuordnung. Unterbrechung erhält den Stand zur kontrollierten Wiederaufnahme. PID allein und Zeitablauf reichen nicht als Eigentümernachweis. Unbekannte Prozessidentität wird konservativ behandelt. Die Sperre ist eine zusätzliche Fehlbedienungsabsicherung, keine vollständige Sicherheitsgrenze für beliebige externe Programme.

[Offizielle Hook-Dokumentation](https://learn.chatgpt.com/docs/hooks): lokale Hooks werden erst nach Prüfung und Vertrauen ihrer Definition ausgeführt. Diese Vertrauensprüfung nicht umgehen. Falls die App keinen programmatischen Weg zum Anlegen des lokalen Projekts oder zum Vertrauen der Hooks bereitstellt, konkrete vorbereitete Dateien liefern und den verbleibenden manuellen Schritt eindeutig benennen. Installierte CLI geprüft: 0.144.3, hooks stable/aktiv.

Zusätzliche Abnahme: dauerhafter Pfad, bytegenaue Migration, exklusive Schreibsitzung, Ablehnung falscher Arbeitsorte und Branches, sichere Fortsetzung einer verschmutzten passenden Story, Erkennung verwaister Sperren ohne Altersheuristik, überprüfte Übernahme, unveränderte Daten bei Abbruch und Serialisierung paralleler Sperroperationen. Erst RED für Sperrverhalten, dann GREEN, dann Refactoring. Keine weiteren fachlichen Vertikalen betroffen.
## Lokale LF-Angleichung des Entwickler-Checkouts

Zusätzlich gehört die lokale Umstellung des festen Entwickler-Checkouts auf LF zum Auftrag. Vorprüfung: sauberer Arbeitsbaum auf main; 15 versionierte Dateien mit CRLF und 10 mit gemischten Zeilenenden. Im Git-Index liegen diese Dateien bereits mit LF vor. Nur lokale CRLF-Bytes werden ersetzt, nachdem bytegenau geprüft wurde, dass das Ergebnis dem bestehenden HEAD entspricht. Keine Inhaltsänderung, kein Übernehmen weiterer Aufgabenänderungen, keine Änderungen ignorierter IntelliJ-Dateien und kein Commit. Die dauerhafte .gitattributes-Regel wird regulär mit der Story integriert. Prüfung: alle versionierten Dateien ohne CRLF/gemischte Zeilenenden, bytegleicher HEAD-Inhalt und sauberer Entwickler-Arbeitsbaum.

## Umsetzung und Nachweise

Implementiert auf Branch `codex/worktree-workflow`, zunächst im verwalteten Aufgaben-Worktree, dann bytegenau in den dauerhaften Codex-Worktree `C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs` übernommen. Die temporäre Kopie ist über Codex mit wiederherstellbarem Snapshot archiviert; ihr Ordner ist entfernt. Der dauerhafte Worktree ist zusätzlich mit git worktree lock gegen versehentliches Entfernen/Pruning geschützt. Der feste lokale Checkout bleibt auf `main`; dort bleiben die Git-Inhalte unverändert; die lokale LF-Angleichung ist im eigenen Abschnitt beschrieben. Beide App-Server bleiben zunächst für die manuelle Prüfung erreichbar. Keine neuen Abhängigkeiten, kein Commit, kein Push.

| Teil-Feature / Schritt | Nachweis |
| --- | --- |
| Refinement und Aktivierung | Entscheidungen geklärt; vollständige erste Story einschließlich Refinement wortgetreu übernommen, Übernahme geprüft und danach aus dem Aufgaben-Backlog entfernt. |
| RED: Ports und Servertrennung | Silent-Runner: 2 Verhaltenstests erwartungsgemäß rot (Exitcode 1, 2,83 s). Benutzerports wurden ignoriert; Vite konnte ausweichen und Playwright fremde Server übernehmen. |
| GREEN: Ports und Servertrennung | Beide Verhaltenstests nach gemeinsamer Konfiguration grün (2 Tests, 2,74 s, Exitcode 0). |
| RED: Portvalidierung | Erweiterter Silent-Lauf: 5 grün / 1 rot (3,85 s, Exitcode 1). Ungültige und gleiche Ports wurden akzeptiert. |
| RED: Videoablauf auf anderem Port | Vorhandener Video-E2E-Test auf 4273 rot (1 Test, 4,40 s, Exitcode 1): Erkennung lokaler Requests war fest auf 4173 eingestellt. |
| GREEN: Validierung und Videoablauf | Gemeinsame Konfiguration prüft Portbereich und Kollisionen. 6 Konfigurationstests grün (3,81 s, Exitcode 0); Video-E2E auf 4273 grün (1 Test, 3,83 s, Exitcode 0). Test für lokale Requests verwendet die tatsächliche baseURL-Origin. |
| RED → GREEN: Windows-Checkout | Bestehender Formatcheck beim frischen CRLF-Checkout rot (76 Dateien, Exitcode 1). .gitattributes mit text=auto/eol=lf ergänzt; Textdateien lokal normalisiert. Formatcheck danach grün. Drei per checkout-index bei explizitem core.autocrlf=true frisch ausgecheckte Beispieldateien enthalten LF, keine CRLF. Der Git-Inhalt anderer Vertikalen bleibt unverändert. |
| REFACTOR | Portauflösung und Validierung zentral in local-servers.ts. Konfigurationstests bündeln die Anforderungen und nennen ungültige Datenkennungen. Env-Fixtures verwenden die echte Vite-Env-Auswertung mit isoliertem Dateiverzeichnis; keine zusätzliche Node-Typabhängigkeit nötig. Vollständige Suite nach der letzten Änderung an der Portauflösung grün, siehe Pflichtsuite. |
| Workflow und IntelliJ | Worktree-Anleitung samt Branch/Handoff, eigenem Code, Einrichtung, Cache-Abwägung und sicherem Entfernen ergänzt; Index, Entwicklungsablauf und AGENTS.md verlinken sie. Vorhandene IntelliJ-Ignore-Regel bleibt erhalten. 46 lokale Dokumentationslinks geprüft, Exitcode 0. |
| Parallele E2E-Läufe | Fester Checkout auf 4173: vorhandener Desktop-Videoablauf grün (1 Test, 6,67 s, Exitcode 0), gleichzeitig mit der vollständigen Aufgaben-Suite auf 4273. Getrennte node_modules und Artefakte; keine Serverwiederverwendung. |
| Lokaler Browsernachweis | Chrome über DevTools: feste App unter 127.0.0.1:5173 und Aufgaben-App unter 127.0.0.1:5273 gleichzeitig geöffnet. Beide zeigen die Themenansicht. Die neue Konfigurationsdatei ist nur über den Aufgabenserver vorhanden: getrennte Arbeitsstände bestätigt. In einem gemeinsamen, frischen Browserkontext nur auf 5273 auf Themenansicht umgeschaltet; 5173 behält die Ausgangspräferenz. Damit getrennte Origins ohne Zustandstransfer nachvollzogen. |
| Reale Portkollisionen | Vite-Start bei belegtem App-Port 5273 verweigert (0,57 s); Playwright mit 5273 als E2E-Port verweigert den bereits laufenden App-Server (1,60 s). Beide negativen Prüfungen bestanden, je erwarteter Kind-Exitcode 1; Gesamt-Exitcode 0. Rohprotokolle außerhalb von Git. |
| Frühere Pflichtsuite vor der dauerhaften Einrichtung | Alle 9 Schritte aus npm run check einzeln mit vollständigen Silent-Runnern geprüft: Format 1,86 s; Lint 0,86 s; Typprüfung 0,74 s; 11 Runner-Selbsttests 0,61 s; 142 Unit-/Komponententests 15,76 s; Inhaltsvalidierung 32 Tests 4,55 s; Architekturprüfung einschließlich 4 Skripttests 5,65 s; Lizenzen 1,56 s; Produktionsbuild samt Ausgabekontrolle 2,83 s. Abschließende E2E-Suite auf 4273: 84 grün, 62,82 s. Audit: 0 Schwachstellen, 2,10 s. Alle Exitcodes 0. |
| Vertikalgrenze und Diff | Nur topics durch den vorhandenen Video-E2E-Test betroffen; Git-Inhalte der übrigen Vertikalen unverändert. Vorgeschlagener Umfang automatisiert gegen die Grenze geprüft; Whitespace-Prüfung grün. Abschließende Status-/Diff-Prüfung vor Commit bleibt vorgeschrieben. |
| Lokale LF-Angleichung Entwickler-Checkout | 25 Dateien (15 CRLF, 10 gemischt) auf LF umgestellt; alle Ergebnisse bytegenau mit HEAD verglichen. Alle 184 versionierten Dateien geprüft: keine CRLF/gemischten Zeilenenden mehr. Git-Statistikcache ausschließlich für bytegleiche Dateien abgeglichen; Arbeitsbaum und Index sauber, keine Inhaltsänderung, kein Commit. Byte-/Zeilenendenprüfung 1,24 s; alle Exitcodes 0. Keine erneute App-Testsuite erforderlich, da der bestehende Git-Inhalt exakt erhalten bleibt. |
| RED → GREEN: Schreibschutz | Zunächst 9 Schutztests rot (0 grün, 9 rot, 0,73 s, Exitcode 1), danach 9 grün (0,71 s, Exitcode 0). Zusätzliche Tests deckten fehlenden Schutz direkter Edit-/Move-Pfade und unerlaubte Post-Events für reine Leser auf: 11 grün / 2 rot, 0,75 s. Windows-Integration deckte fehlerhafte Argumentübergabe auf; nach Korrektur 14 grün, 17,19 s, Exitcode 0. Der neue Bootstrap-Lesetest zunächst rot (1 rot, 14 übersprungen, 0,62 s, Exitcode 1); eng begrenzte Leseaufrufe erlauben jetzt Einsicht ohne Story-Übernahme oder Schreibsperre. Abschließender gültiger Gesamtstand siehe Abschlussprüfung. |
| Windows-Prozesse und Wiederaufnahme | Zwei echte parallele PowerShell-Hook-Prozesse: genau ein Besitzer, zweiter abgewiesen. Interrupt und Stop behalten unterbrochene Sperre; geprüfte Wiederaufnahme erhält Änderungen und ermöglicht neuen Turn. Ein zunächst mit git status formulierter Paralleltest war nach Einführung erlaubter Lesebefehle ungeeignet; auf geschützten Werkzeugaufruf korrigiert. Prozessidentität und unbekannter Status werden konservativ behandelt; keine Altersheuristik. Konfigurierter Windows-Hook-Befehl direkt ausgeführt, gültige SessionStart-JSON-Ausgabe, 1,31 s, Exitcode 0. Kein Vertrauen automatisch erteilt. |
| Migration und Dauerhaftigkeit | Alle bisherigen Änderungen samt neuen Dateien vor Weiterentwicklung bytegenau verglichen. Eigene npm-ci-Installation (150 Pakete), lokale Portdatei übernommen, persönliche IntelliJ-Dateien nicht kopiert. Alter eigener App-Prozess kontrolliert beendet und neuer Server aus dauerhaftem Pfad gestartet. Git zeigt zwei aktive Arbeitsorte: Entwickler main, Codex codex/worktree-workflow; alter verwalteter Worktree archiviert. Entwickler-Checkout nachher erneut sauber bestätigt (0,25 s, Exitcode 0), keine globale safe.directory-Ausnahme ergänzt. |
| RED → GREEN: anwendbare lokale Sicherung | Erweiterte Windows-Integration prüft den gespeicherten Patch mit git apply --check --reverse. RED: 1 rot, 14 übersprungen, 21,85 s, Exitcode 1, wegen abgeschnittener finaler Patch-Zeile. Git-Diff-Ausgabe wird nun unverändert gespeichert; echter Anwendbarkeitscheck Bestandteil der abschließenden grünen 157er-Suite. Arbeitsbaum bleibt bei Sicherung unverändert. |
| Abschlussprüfung dauerhafter Arbeitsplatz | Alle 9 Stufen nach letzter Code-/Teständerung grün: Format 1,93 s; Lint 0,92 s; Typen 0,78 s; 11 Runner-Selbsttests 0,64 s; 157 Unit-/Komponententests 27,02 s (darunter 15 Schutztests einschließlich echter paralleler Windows-Prozesse und Git-Patch-Prüfung); Inhaltsvalidierung 32 Tests 1,92 s; Architektur einschließlich 4 Skripttests 2,11 s; Lizenzen 0,53 s; Build 1,01 s. Alle Exitcodes 0. Frühere Audit-Prüfung weiterhin gültig: Lockfile und Abhängigkeiten unverändert, 0 Schwachstellen. |
| Browser-Wiederholungsprüfung | Erste Suite am neuen Ort: 84 grün, 71,89 s, Exitcode 0. Ein weiterer Lauf meldete einen Timeout im vorhandenen Desktop-Test für ausgerichtete Lerncheck-Icons: 83 grün / 1 rot, 70,23 s, Exitcode 1. Kein DOM-Snapshot im Fehlerkontext; Ursache nicht eindeutig belegt, keine spekulative Produktänderung. Betroffener Einzeltest ohne Codeänderung grün, 3,64 s, Exitcode 0. Abschließender vollständiger Wiederholungslauf auf endgültigem Stand: 84 grün, 54,72 s, Exitcode 0. Keine Produkt- oder Teständerung wegen des einmaligen Timeouts. |
| Manuelle Entwicklerprüfung / Abschluss | Manuelle Entwicklerprüfung und Commit-Freigabe erfolgt. Spec mit der Story archiviert. Zusammenführung nach main freigegeben; Push bleibt beim Entwickler. |

## Bereitstellung zur manuellen Prüfung

- Fester IntelliJ-Checkout: bestehender Projektordner, Branch main; App http://127.0.0.1:5173/.
- Dauerhafter Aufgaben-Worktree: `C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs`, Branch codex/worktree-workflow; App http://127.0.0.1:5273/. Diesen Ordner als zweites IntelliJ-Projekt öffnen. Der neue Server läuft nach der Migration nachweislich aus diesem Ordner; Browser neu geladen und Themenansicht mit 48 Themen bestätigt.
- Im Aufgaben-Worktree ist .env.local mit 5273/4273 eingerichtet und ignoriert. Die feste Installation benötigt keine Änderung.
- In beiden Browseransichten navigieren und auf nur einer Origin die Listenansicht umschalten. Die andere Origin soll ihre Auswahl behalten. In IntelliJ den getrennten Code/Diff sowie die Worktree-Anleitung ansehen.
- Falls ein eigener E2E-Lauf gewünscht ist: aus dem Aufgaben-Worktree `npm run --silent test:e2e -- e2e/verticals/topics/learning-videos.spec.ts --project=desktop-chromium`; App-Port 5273 darf dabei weiterlaufen, Testport 4273 muss frei sein.
- Noch manuell in Codex: dauerhaften Ordner als lokales Projekt hinzufügen und die geprüften Projekt-Hooks bewusst freigeben. Reguläre neue Chats dort mit New worktree AUS, parallele Arbeit mit New worktree EIN. Die App bietet dieser Session kein Werkzeug zum Registrieren des lokalen Projekts oder zur bewussten Hook-Vertrauensfreigabe; nichts davon als bereits erledigt ausgeben. Hook-Befehle und Rückgabeformate wurden direkt geprüft; automatische Aktivierung in einem neuen echten Chat ist hier nicht nachgewiesen. Die bewusste Hook-Vertrauensfreigabe bleibt ein lokaler Einrichtungsschritt des Entwicklers; die Story-Abnahme ersetzt sie nicht.
- Positive manuelle Entwicklerprüfung und Commit-Freigabe erfolgt. Die Codex-Worktree-Archivierung erzeugt einen lokalen Sicherungs-Snapshot; dies ist kein freigegebener Story-Commit und kein Push.

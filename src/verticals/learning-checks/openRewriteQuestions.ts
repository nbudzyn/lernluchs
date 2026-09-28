import type { Question } from "../../shared/question";
import { q } from "./questionFactory";

const guide = "https://docs.openrewrite.org/running-recipes/getting-started";
const boot =
  "https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_5-community-edition";

export const openRewriteQuestions: Question[] = [
  q(
    "openrewrite-01",
    guide,
    "Ein Team will Rezepte im bestehenden Maven-Projekt ausführen. Welche Integration beschreibt der Quickstart?",
    [
      "Das rewrite-maven-plugin konfigurieren.",
      "Das Maven-Plugin führt aktivierte Rezepte im Projekt aus.",
    ],
    [
      "Einen Gradle-Init-Script als Maven-Lifecycle-Phase eintragen.",
      "Ein Gradle-Script ist keine Maven-Plugin-Konfiguration.",
    ],
    [
      "Das Rezept als JUnit-Erweiterung registrieren.",
      "JUnit führt Tests aus; Rezepte werden über das Rewrite-Plugin aktiviert.",
    ],
  ),
  q(
    "openrewrite-02",
    guide,
    "Welche Integration nennt OpenRewrite für ein Gradle-Projekt?",
    [
      "Das Rewrite-Gradle-Plugin.",
      "Der Quickstart beschreibt das Gradle-Plugin für die Rezeptausführung.",
    ],
    [
      "Das Maven-Plugin in `settings.gradle`.",
      "Maven-Plugins sind keine Gradle-Plugins.",
    ],
    [
      "Einen Spring-Boot-Starter für Rewrite.",
      "Ein Starter bindet kein Rewrite-Build-Plugin ein.",
    ],
  ),
  q(
    "openrewrite-03",
    guide,
    "Ein Rezept ist verfügbar, verändert aber beim Lauf nichts. Welcher Konfigurationsschritt ist zuerst zu prüfen?",
    [
      "Ob es als aktives Rezept eingetragen ist.",
      "Der Quickstart verlangt die Aktivierung vor dem Ausführen.",
    ],
    [
      "Ob es als Testquelle markiert ist.",
      "Die Testquellenmarkierung aktiviert keine Rezepte.",
    ],
    [
      "Ob die Git-Branch einen bestimmten Namen hat.",
      "Der Branchname steuert die Rezeptaktivierung nicht.",
    ],
  ),
  q(
    "openrewrite-04",
    guide,
    "Mit welchem Maven-Ziel startet der Quickstart aktivierte Rezepte?",
    ["`mvn rewrite:run`", "Das Ziel führt die aktivierten Rezepte aus."],
    [
      "`mvn rewrite:discover`",
      "Discover listet verfügbare Rezepte auf, führt sie aber nicht aus.",
    ],
    [
      "`mvn test`",
      "Das Testziel startet nicht den beschriebenen Rewrite-Lauf.",
    ],
  ),
  q(
    "openrewrite-05",
    guide,
    "Welche Gradle-Aufgabe führt aktivierte Rezepte aus?",
    ["`rewriteRun`", "Der Quickstart startet Rezepte mit `gradle rewriteRun`."],
    ["`rewriteDiscover`", "Diese Aufgabe zeigt verfügbare Rezepte an."],
    ["`check`", "Diese allgemeine Prüfaufgabe ist nicht die Rezeptausführung."],
  ),
  q(
    "openrewrite-06",
    guide,
    "Ein Team kennt den Namen eines verfügbaren Rezepts nicht. Was hilft laut Quickstart bei der Suche?",
    [
      "`rewrite:discover` beziehungsweise `rewriteDiscover` ausführen.",
      "Die Discover-Aufgaben listen verfügbare Rezepte.",
    ],
    [
      "`rewrite:run` beziehungsweise `rewriteRun` ausführen.",
      "Run führt aktivierte Rezepte aus statt sie aufzulisten.",
    ],
    [
      "Den kompilierten Klassenpfad als Rezeptliste lesen.",
      "Der Klassenpfad ersetzt die Discover-Ausgabe nicht.",
    ],
  ),
  q(
    "openrewrite-07",
    guide,
    "Nach einem Rezeptlauf wurden Dateien verändert. Welcher Schritt macht die Wirkung konkret prüfbar?",
    [
      "Den Git-Diff der geänderten Dateien ansehen.",
      "Der Quickstart verweist nach dem Lauf auf `git diff`.",
    ],
    [
      "Nur die Zahl der verfügbaren Rezepte vergleichen.",
      "Die Verfügbarkeit zeigt nicht, welche Dateien geändert wurden.",
    ],
    [
      "Die Aktivierung aus der Build-Datei entfernen.",
      "Das entfernt Konfiguration, prüft aber den Änderungsinhalt nicht.",
    ],
  ),
  q(
    "openrewrite-08",
    guide,
    "Wie lässt sich ein eigenes Rezept aus mehreren vorhandenen Rezepten deklarieren?",
    [
      "In `rewrite.yml` mit einem Namen und einer `recipeList`.",
      "Der Quickstart zeigt eine YAML-Rezeptdefinition mit `recipeList`.",
    ],
    [
      "Durch eine Liste von JUnit-Testnamen.",
      "Testnamen bilden keine Rewrite-Rezeptliste.",
    ],
    [
      "Durch Git-Attribute in `.gitattributes`.",
      "Git-Attribute definieren keine Rewrite-Rezepte.",
    ],
  ),
  q(
    "openrewrite-09",
    guide,
    "Ein YAML-Rezept wird nicht wie erwartet erkannt. Welchen konkreten Fehler nennt der Quickstart?",
    [
      "Falsche Einrückung der Rezeptargumente.",
      "Der Guide warnt ausdrücklich vor empfindlicher YAML-Einrückung.",
    ],
    [
      "Fehlende Java-Paketdokumentation.",
      "Paketdokumentation bestimmt die YAML-Struktur nicht.",
    ],
    [
      "Ein fehlender JAR-Manifesttitel.",
      "Der Manifesttitel ist nicht die genannte Ursache.",
    ],
  ),
  q(
    "openrewrite-10",
    guide,
    "Ein Spring-Rezept liegt in einem externen Modul statt im Rewrite-Kern. Was braucht das Build zusätzlich zur Aktivierung?",
    [
      "Die Rezeptbibliothek als Rewrite-Abhängigkeit.",
      "Externe Rezepte benötigen laut Quickstart ihr Modul im Build.",
    ],
    [
      "Eine zusätzliche Source-Set-Deklaration für Anwendungstests.",
      "Ein Test-Source-Set stellt das Rezeptmodul nicht bereit.",
    ],
    [
      "Eine Kopie sämtlicher Spring-Quellen im Projekt.",
      "Die Bibliothek wird als Abhängigkeit eingebunden, nicht kopiert.",
    ],
  ),
  q(
    "openrewrite-11",
    guide,
    "Warum empfiehlt der Guide für mehrere Gradle-Rezeptmodule ein Recipe-BOM?",
    [
      "Es stimmt passende Rezeptversionen aufeinander ab.",
      "Das BOM liefert zueinander passende Versionen für Rezeptmodule.",
    ],
    [
      "Es ersetzt die Entscheidung über aktive Rezepte.",
      "Aktive Rezepte werden weiterhin gesondert konfiguriert.",
    ],
    [
      "Es führt den Git-Diff automatisch zur Abnahme.",
      "Ein BOM verwaltet Versionen, nicht die fachliche Prüfung.",
    ],
  ),
  q(
    "openrewrite-12",
    guide,
    "Wohin legt der aktuelle Quickstart ein Gradle-Download-Token?",
    [
      "In die persönliche `~/.gradle/gradle.properties`.",
      "Die Anleitung hält Zugangsdaten aus dem Repository heraus.",
    ],
    [
      "In die versionierte Projektdatei `gradle.properties`.",
      "Damit könnte das Token in den Repository-Diff gelangen.",
    ],
    [
      "In `rewrite.yml` neben die Rezeptliste.",
      "Die YAML-Datei ist für Rezeptkonfiguration, nicht Zugangsdaten.",
    ],
  ),
  q(
    "openrewrite-13",
    guide,
    "Wie erhält Maven nach dem aktuellen Quickstart Zugang zum Code Genome Project?",
    [
      "Über einen passenden Servereintrag in der persönlichen `settings.xml`.",
      "Die Maven-Anleitung legt Anmeldedaten in `settings.xml` ab.",
    ],
    [
      "Über Zugangsdaten im Rezeptnamen.",
      "Der Rezeptname ist keine Authentifizierungskonfiguration.",
    ],
    [
      "Über eine JUnit-System-Property im Testcode.",
      "Testcode versorgt die Maven-Artefaktauflösung nicht wie beschrieben.",
    ],
  ),
  q(
    "openrewrite-14",
    guide,
    "Warum soll Maven Central neben dem Code Genome Project verfügbar bleiben?",
    [
      "Drittanbieter-Abhängigkeiten des Projekts und von Rewrite werden weiter dort aufgelöst.",
      "Das Code Genome Project hostet nicht sämtliche sonstigen Abhängigkeiten.",
    ],
    [
      "Maven Central führt die aktivierten Rezepte aus.",
      "Das Repository liefert Artefakte; die Ausführung übernimmt das Plugin.",
    ],
    [
      "Dort liegen die persönlichen Download-Tokens.",
      "Tokens werden separat in persönlichen Einstellungen gehalten.",
    ],
  ),
  q(
    "openrewrite-15",
    guide,
    "Ein Team möchte eine Migration ohne Build-Datei-Änderung ausprobieren. Welche Möglichkeit nennt der Guide?",
    [
      "Rewrite mit Init-Script oder Kommandozeile außerhalb der Build-Datei starten.",
      "Der Guide verlinkt Wege ohne dauerhafte Build-Änderung.",
    ],
    [
      "Die Build-Datei ändern und den Diff anschließend ausblenden.",
      "Das wäre gerade eine Build-Datei-Änderung.",
    ],
    [
      "Das Rezept als produktive Anwendungsklasse einbauen.",
      "Rezeptausführung gehört nicht in die Anwendungslaufzeit.",
    ],
  ),
  q(
    "openrewrite-16",
    guide,
    "Der Quickstart nutzt ein Petclinic-Beispiel mit JDK 11+. Welche Einordnung ist korrekt?",
    [
      "Die Anforderung gilt dort für das Beispielprojekt.",
      "Die Anleitung trennt Petclinic-Voraussetzung und OpenRewrite selbst.",
    ],
    [
      "Sie ist die generelle JDK-Mindestversion aller Rezepte.",
      "Die Aussage bezieht sich ausdrücklich auf das Beispielprojekt.",
    ],
    [
      "Sie betrifft den Browser-Test des Beispielprojekts.",
      "Der Guide nennt das Build des Beispielprojekts.",
    ],
  ),
  q(
    "openrewrite-17",
    boot,
    "Welche Art von Änderung beschreibt das verlinkte Spring-Boot-3.5-Rezept?",
    [
      "Build-Dateien und betroffene API-Verwendungen anpassen.",
      "Die Rezeptbeschreibung nennt Build- und API-Änderungen.",
    ],
    [
      "Fachliche Geschäftsregeln aus Anforderungen ableiten.",
      "Das Rezept beschreibt technische Migrationen, keine Fachanalyse.",
    ],
    [
      "Produktionsdaten in ein neues Schema migrieren.",
      "Eine Datenmigration ist nicht der beschriebene Rezeptumfang.",
    ],
  ),
  q(
    "openrewrite-18",
    boot,
    "Wie ist das Spring-Boot-3.5-Rezept laut Definition aufgebaut?",
    [
      "Als Komposition mehrerer Teilrezepte.",
      "Die Rezeptseite zeigt eine `recipeList` mit mehreren Migrationen.",
    ],
    [
      "Als einzelner Textaustausch über alle Dateien.",
      "Die Definition besteht aus verschiedenen Teilrezepten.",
    ],
    [
      "Als manueller Leitfaden ohne ausführbare Definition.",
      "Die Seite enthält eine ausführbare Rezeptdefinition.",
    ],
  ),
  q(
    "openrewrite-19",
    boot,
    "Ein Team braucht nur einen Teil der zusammengesetzten Spring-Migration. Was empfiehlt die Rezeptseite?",
    [
      "Die veröffentlichte Rezeptdefinition ansehen und die gewünschte Komposition anpassen.",
      "Die Seite verweist für Anpassungen auf die YAML-Quelle.",
    ],
    [
      "Das gesamte Rezept ungeprüft übernehmen.",
      "Das beantwortet den gewünschten reduzierten Umfang nicht.",
    ],
    [
      "Die einzelnen Teilrezepte als JUnit-Klassen umbenennen.",
      "JUnit-Klassen ändern die Rezeptkomposition nicht.",
    ],
  ),
  q(
    "openrewrite-20",
    boot,
    "Welche Spring-Boot-Abhängigkeiten adressiert das 3.5-Rezept laut Definition?",
    [
      "Spring-Boot-Artefakte und das `spring-boot-dependencies`-BOM.",
      "Die Definition enthält UpgradeDependencyVersion für diese Koordinaten.",
    ],
    [
      "Sämtliche Java-Abhängigkeiten unabhängig von Gruppe.",
      "Die gezeigten Upgrade-Regeln sind auf Spring-Boot-Koordinaten beschränkt.",
    ],
    [
      "Nur Testbibliotheken ohne Build-Plugins.",
      "Die Definition enthält auch Plugin- und Parent-Upgrades.",
    ],
  ),
  q(
    "openrewrite-21",
    boot,
    "Was geschieht laut Definition mit dem Spring-Boot-Maven-Plugin?",
    [
      "Seine Version kann auf 3.5.x angehoben werden.",
      "Die Recipe List enthält ein Maven-Plugin-Upgrade.",
    ],
    [
      "Es wird durch Gradle ersetzt.",
      "Ein Build-System-Wechsel ist nicht Teil dieser Regel.",
    ],
    [
      "Es wird in eine Laufzeitabhängigkeit umgewandelt.",
      "Das Rezept behandelt die Plugin-Version.",
    ],
  ),
  q(
    "openrewrite-22",
    boot,
    "Welchen Gradle-Eintrag kann das 3.5-Rezept laut Definition aktualisieren?",
    [
      "Das Plugin mit ID `org.springframework.boot`.",
      "Die Definition enthält ein Update für diese Plugin-ID.",
    ],
    [
      "Die JVM-Installation des Entwicklers.",
      "Die Rezeptdefinition verändert nicht die lokale JVM-Installation.",
    ],
    [
      "Den Namen des Git-Remotes.",
      "Git-Remote-Konfiguration gehört nicht zu dieser Migration.",
    ],
  ),
  q(
    "openrewrite-23",
    boot,
    "Welche Lizenzgrenze ist beim verlinkten Community-Rezept zu beachten?",
    [
      "Es steht unter der Moderne Source Available License; Nutzungsrechte müssen geprüft werden.",
      "Die Rezeptseite nennt diese Lizenz ausdrücklich.",
    ],
    [
      "Der Name Community Edition bestätigt eine Apache-2.0-Lizenz.",
      "Die Seite nennt eine andere Lizenz.",
    ],
    [
      "Die Lizenz ergibt sich aus der verwendeten Spring-Boot-Version.",
      "Die Versionsnummer bestimmt die Rezeptlizenz nicht.",
    ],
  ),
  q(
    "openrewrite-24",
    boot,
    "Welche Angabe macht die Rezeptseite zu benötigten Rezeptparametern?",
    [
      "Es gibt keine erforderlichen Konfigurationsoptionen.",
      "Der Usage-Abschnitt nennt keine Pflichtparameter.",
    ],
    [
      "Ein Datenbankschema muss angegeben werden.",
      "Die Seite nennt keinen solchen Pflichtparameter.",
    ],
    [
      "Ein Ziel-Repository muss im Rezeptnamen stehen.",
      "Die Definition verlangt keinen Repository-Namen.",
    ],
  ),
  q(
    "openrewrite-25",
    guide,
    "Ein OpenRewrite-Lauf endet ohne Fehler. Was belegt anschließend erst die Eignung für den eigenen Spring-Dienst?",
    [
      "Diff, Build und passende Tests gegen die Migrationsziele prüfen.",
      "Der Guide zeigt Diff und Buildprüfung; die Projekttauglichkeit erfordert fachliche Abnahme.",
    ],
    [
      "Die bloße Ausführbarkeit des Rezepts als fachliche Freigabe werten.",
      "Ein erfolgreicher Werkzeuglauf bewertet den Dienst nicht vollständig.",
    ],
    [
      "Die Rezeptliste nach Anzahl sortieren.",
      "Eine Sortierung sagt nichts über das migrierte Verhalten.",
    ],
  ),
];

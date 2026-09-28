import type { Question } from "../../shared/question";
import { q } from "./questionFactory";

const github =
  "https://docs.github.com/en/pull-requests/reference/status-checks";
const openai = "https://developers.openai.com/api/docs/guides/agent-evals";

export const agentVerificationQuestions: Question[] = [
  q(
    "agent-verification-01",
    github,
    "Ein Agent meldet seinen Patch als fertig, aber der verpflichtende Testcheck ist rot. Was muss das Übernahme-Gate tun?",
    [
      "Die Übernahme bis zum erfolgreichen Pflichtcheck sperren.",
      "Ein erforderlicher Statuscheck muss für geschützte Branches bestehen.",
    ],
    [
      "Die Erfolgsmeldung des Agenten höher gewichten.",
      "Eine Meldung ersetzt den maschinenlesbaren Prüfnachweis nicht.",
    ],
    [
      "Den Check durch einen Kommentar im Pull Request ersetzen.",
      "Ein Kommentar ist kein bestandener Pflichtstatus.",
    ],
  ),
  q(
    "agent-verification-02",
    github,
    "Welche Information liefert ein Statuscheck zu einem Commit?",
    [
      "Ob eine definierte Bedingung wie Build oder Test erfüllt wurde.",
      "GitHub verwendet Statuschecks für Repository-Bedingungen und Validierungen.",
    ],
    [
      "Ob die Änderung fachlich vollständig richtig ist.",
      "Ein Check erfasst seine konfigurierte Prüfung, nicht jede fachliche Aussage.",
    ],
    [
      "Ob der Autor die Änderung persönlich getestet hat.",
      "Ein automatischer Status belegt keine manuelle Prüfung.",
    ],
  ),
  q(
    "agent-verification-03",
    github,
    "Ein Pflichtjob wird wegen einer Workflow-Bedingung übersprungen. Wie kann GitHub den Job behandeln?",
    [
      "Als Erfolg, sodass er die Übernahme nicht blockiert.",
      "GitHub warnt, dass übersprungene Jobs als erfolgreich gemeldet werden können.",
    ],
    [
      "Als zwingenden Testfehler mit fachlicher Diagnose.",
      "Ein Skip ist keine ausgeführte Testprüfung.",
    ],
    [
      "Als Beweis für bestandene Tests.",
      "Ein übersprungener Job hat die Tests nicht ausgeführt.",
    ],
  ),
  q(
    "agent-verification-04",
    github,
    "Ein grüner GitHub-Statuscheck wird als Nachweis eines vertrauenswürdigen CI-Laufs vorgelegt. Welche Grenze muss die übernehmende Person beachten?",
    [
      "Auch schreibberechtigte Personen können einen Status setzen; Ersteller und Laufdetails sind zu prüfen.",
      "GitHub erlaubt Personen mit Schreibrecht, den Zustand eines Statuschecks im Repository zu setzen.",
    ],
    [
      "Der erwartete Checkname belegt bereits, welche CI-Integration den Lauf ausgeführt hat.",
      "Der Name allein weist weder den Ersteller noch einen tatsächlich ausgeführten CI-Lauf nach.",
    ],
    [
      "Eine grüne Conclusion weist die ausführende CI-Integration unabhängig vom Ersteller nach.",
      "Die Conclusion beschreibt ein Ergebnis; GitHub erlaubt auch Schreibberechtigten, einen Status zu setzen.",
    ],
  ),
  q(
    "agent-verification-05",
    github,
    "Welche Art von Status erzeugt GitHub Actions bei Workflow-Läufen?",
    [
      "Einen Check.",
      "GitHub Actions erzeugt Checks statt einfacher Commit-Statuses.",
    ],
    [
      "Einen externen Commit-Status ohne Checkdetails.",
      "Commit-Statuses stammen in dieser Unterscheidung von externen Diensten.",
    ],
    [
      "Eine manuelle Review-Freigabe.",
      "Ein Workflow-Lauf ist keine menschliche Review-Entscheidung.",
    ],
  ),
  q(
    "agent-verification-06",
    github,
    "Worin unterscheiden sich Checks von einfachen Commit-Statuses?",
    [
      "Checks können detaillierte Logs, Meldungen und Annotationen enthalten.",
      "Die GitHub-Dokumentation nennt diese zusätzlichen Details für Checks.",
    ],
    [
      "Commit-Statuses enthalten automatisch den gesamten Testlog.",
      "Der einfache Status hat weniger Detailtiefe.",
    ],
    [
      "Checks sind handgeschriebene Kommentare im Pull Request.",
      "Checks werden von Apps wie GitHub Actions erzeugt.",
    ],
  ),
  q(
    "agent-verification-07",
    github,
    "Wo kann ein Reviewer bei einem Check nachsehen, warum eine Validierung scheiterte?",
    [
      "Im Checks-Tab des Pull Requests mit Logs und Ergebnissen.",
      "Checks können dort Details zur ausgeführten Validierung zeigen.",
    ],
    [
      "Im Dateinamen des Agentenprofils.",
      "Ein Profilname enthält keine Checkdetails.",
    ],
    [
      "Im Prompt des ursprünglichen Agenten.",
      "Ein Prompt ersetzt den tatsächlichen Checklauf nicht.",
    ],
  ),
  q(
    "agent-verification-08",
    github,
    "Wie können Check-Anmerkungen zu einer konkreten Codezeile im Review erscheinen?",
    [
      "Sie können auch im Files-Tab bei der betroffenen Zeile sichtbar sein.",
      "GitHub verbindet zeilenbezogene Checkdetails mit der Diff-Ansicht.",
    ],
    [
      "Sie werden zum Namen der Branch umgewandelt.",
      "Annotationen sind Reviewdetails, keine Branch-Namen.",
    ],
    [
      "Sie löschen automatisch die beanstandete Zeile.",
      "Eine Annotation zeigt ein Problem, ändert aber keinen Code.",
    ],
  ),
  q(
    "agent-verification-09",
    github,
    "Ein Check hat den Status `in_progress`. Welche Aussage ist für ein Übernahme-Gate korrekt?",
    [
      "Die Prüfung läuft noch; ein erfolgreiches Ergebnis liegt noch nicht vor.",
      "`in_progress` bezeichnet einen laufenden Check ohne Abschluss.",
    ],
    [
      "Die Prüfung ist mit `success` abgeschlossen.",
      "Erst ein abgeschlossener Check erhält eine Conclusion.",
    ],
    [
      "Die Prüfung wurde fachlich abgenommen.",
      "Ein laufender technischer Check ist keine fachliche Abnahme.",
    ],
  ),
  q(
    "agent-verification-10",
    github,
    "Was signalisiert ein Checkstatus `completed` zusätzlich?",
    [
      "Der Lauf hat eine Conclusion wie Erfolg oder Fehler.",
      "GitHub trennt Abschlussstatus und abschließende Bewertung.",
    ],
    [
      "Der Check muss erfolgreich gewesen sein.",
      "Auch fehlgeschlagene Läufe können abgeschlossen sein.",
    ],
    [
      "Der Test wurde von einem Menschen bestätigt.",
      "Die Conclusion ist ein technisches Laufergebnis.",
    ],
  ),
  q(
    "agent-verification-11",
    github,
    "Ein Check endet mit `timed_out`. Wie ist das für eine verpflichtende Prüfung einzuordnen?",
    [
      "Als nicht erfolgreich abgeschlossene Prüfung, deren Details geklärt werden müssen.",
      "GitHub führt Zeitüberschreitung als eigene nicht erfolgreiche Conclusion.",
    ],
    [
      "Als fachlich bestandener Test.",
      "Ein Timeout liefert keinen bestandenen Testnachweis.",
    ],
    [
      "Als automatisch übersprungener Check.",
      "Timeout und Skip sind unterschiedliche Conclusions.",
    ],
  ),
  q(
    "agent-verification-12",
    github,
    "Warum sollte ein Gate nicht allein auf das Vorhandensein eines Checknamens achten?",
    [
      "Status, Conclusion und tatsächliche Ausführung müssen bewertet werden.",
      "Ein Check kann laufen, scheitern oder übersprungen sein.",
    ],
    [
      "Ein Checkname ändert die Implementierung automatisch.",
      "Namen prüfen oder reparieren keinen Code.",
    ],
    [
      "Ein vorhandener Name bedeutet einen erfolgreichen Lauf.",
      "Die Bewertung steht im Status und der Conclusion.",
    ],
  ),
  q(
    "agent-verification-13",
    github,
    "Welche Quelle kann einen einfachen Commit-Status statt eines detailreichen Checks setzen?",
    [
      "Ein externer Dienst oder eine Integration.",
      "GitHub unterscheidet externe Commit-Statuses von Checks durch GitHub Apps.",
    ],
    [
      "Eine Datei mit dem Namen `STATUS.md`.",
      "Eine Markdown-Datei erzeugt keinen GitHub-Status.",
    ],
    [
      "Die Antwort eines Agenten im Chat.",
      "Chattext setzt ohne technische Integration keinen Commit-Status.",
    ],
  ),
  q(
    "agent-verification-14",
    openai,
    "Ein Agent nutzt das falsche Werkzeug, obwohl alle Unit-Tests bestehen. Welche Prüfung betrachtet diesen Ablauf?",
    [
      "Ein Trace-Grader für die Werkzeugwahl.",
      "Trace-Grading kann Entscheidungen und Toolaufrufe eines Agentenlaufs bewerten.",
    ],
    [
      "Ein weiterer Build derselben unveränderten Artefakte.",
      "Der Build prüft die Agentenentscheidung bei der Werkzeugwahl nicht.",
    ],
    [
      "Ein Commit-Status ohne Ablaufdaten.",
      "Ein einfacher Status zeigt nicht die einzelnen Werkzeugentscheidungen.",
    ],
  ),
  q(
    "agent-verification-15",
    openai,
    "Welche Ereignisse kann ein Agenten-Trace für einen Lauf umfassen?",
    [
      "Modellaufrufe, Werkzeugaufrufe, Guardrails und Handoffs.",
      "OpenAI beschreibt genau diese Bestandteile des End-to-End-Ablaufs.",
    ],
    [
      "Die vollständige künftige Nutzerhistorie.",
      "Ein Trace zeichnet den betrachteten Lauf auf, nicht künftige Ereignisse.",
    ],
    [
      "Automatisch alle Quellcodeänderungen anderer Projekte.",
      "Ein Trace ist auf den ausgeführten Workflow bezogen.",
    ],
  ),
  q(
    "agent-verification-16",
    openai,
    "Welcher Einstieg eignet sich, wenn ein Agentenworkflow noch unerklärliche Fehlentscheidungen zeigt?",
    [
      "Einen repräsentativen Trace inspizieren und gezielt graden.",
      "OpenAI empfiehlt Traces zum Debuggen von Workflow-Verhalten.",
    ],
    [
      "Die Fehlentscheidung ohne Ablaufdaten erneut beschreiben.",
      "Damit fehlen Beobachtungen zu den tatsächlichen Schritten.",
    ],
    [
      "Sofort alle Prüfkriterien durch einen einzigen Gesamtscore ersetzen.",
      "Ein Gesamtscore kann den fehlerhaften Ablauf verdecken.",
    ],
  ),
  q(
    "agent-verification-17",
    openai,
    "Welche Frage lässt sich mit Trace-Grading eines Agentenlaufs untersuchen?",
    [
      "Ob ein erforderlicher Handoff tatsächlich stattfand.",
      "Die Dokumentation nennt Handoff-Entscheidungen als Beispiel für Trace-Grading.",
    ],
    [
      "Ob jeder zukünftige Nutzer dieselbe Anfrage stellt.",
      "Ein Trace belegt keine zukünftigen Nutzeranfragen.",
    ],
    [
      "Ob der Quellcode ohne Tests fehlerfrei ist.",
      "Trace-Grading ersetzt keinen vollständigen Codetest.",
    ],
  ),
  q(
    "agent-verification-18",
    openai,
    "Was bewerten Grader in einem Trace?",
    [
      "Bestimmte Teile eines Agentenlaufs anhand strukturierter Kriterien.",
      "Grader vergeben Bewertungen und Annotationen für Ablaufteile.",
    ],
    [
      "Die Laufzeitdauer des Build-Servers.",
      "Die dokumentierten Kriterien betreffen Agentenentscheidungen und -schritte.",
    ],
    [
      "Den Git-Commit durch automatische Freigabe.",
      "Ein Grader ist ein Diagnosewerkzeug, keine Commit-Autorisierung.",
    ],
  ),
  q(
    "agent-verification-19",
    openai,
    "Wann sind Datensätze und Eval-Läufe hilfreicher als die Betrachtung eines einzelnen Traces?",
    [
      "Wenn Änderungen wiederholbar an mehreren Fällen verglichen werden sollen.",
      "OpenAI empfiehlt Datensätze und Eval-Läufe für Benchmarks und wiederholbare Vergleiche.",
    ],
    [
      "Wenn ein einzelner Lauf noch nicht nachvollzogen wurde.",
      "Zum Debuggen eines konkreten Laufs empfiehlt die Quelle zunächst Traces.",
    ],
    [
      "Wenn gar keine Qualitätskriterien festgelegt werden sollen.",
      "Wiederholbare Evals benötigen einen Maßstab für gutes Verhalten.",
    ],
  ),
  q(
    "agent-verification-20",
    openai,
    "Wie kann ein Team eine geänderte Agenten-Anweisung auf Regressionen prüfen?",
    [
      "Mit denselben Bewertungsfällen vor und nach der Änderung.",
      "Wiederholbare Datensätze und Eval-Läufe dienen dem Vergleich von Prompt-Varianten.",
    ],
    [
      "Durch einmaliges Lesen des neuen Prompttexts.",
      "Der Text allein zeigt keine Verhaltensänderung in ausgeführten Fällen.",
    ],
    [
      "Durch Umbenennen des Agentenmodells.",
      "Ein neuer Name ist kein Vergleichslauf.",
    ],
  ),
  q(
    "agent-verification-21",
    openai,
    "Welche Folgemaßnahme nennt OpenAI nach gefundenen Trace-Problemen?",
    [
      "Prompts, Werkzeugoberflächen, Routing oder Guardrails gezielt verbessern.",
      "Der Trace-Grading-Ablauf führt von Befunden zur Anpassung dieser Teile.",
    ],
    [
      "Den Trace als Beweis für fachliche Vollständigkeit archivieren.",
      "Ein Trace zeigt Verhalten, aber garantiert keine Vollständigkeit.",
    ],
    [
      "Die Bewertungsdaten ungeprüft aus dem Workflow entfernen.",
      "Das würde die Fehlersuche erschweren.",
    ],
  ),
  q(
    "agent-verification-22",
    github,
    "Ein Check endet mit der Conclusion `action_required`. Was sollte die übernehmende Person tun?",
    [
      "Die verlangte Aktion und die Checkdetails prüfen, bevor sie übernimmt.",
      "Diese Conclusion kennzeichnet eine erforderliche Handlung nach dem Checklauf.",
    ],
    [
      "Die Conclusion wie einen erfolgreichen Testlauf behandeln.",
      "`action_required` ist keine `success`-Conclusion.",
    ],
    [
      "Den Check wegen seines abgeschlossenen Status ignorieren.",
      "Ein abgeschlossener Check kann weiterhin Eingreifen verlangen.",
    ],
  ),
  q(
    "agent-verification-23",
    github,
    "Ein Pull Request benötigt einen Pflichtcheck, dessen alter Checklauf archiviert wurde. Was ist vor dem Merge nötig?",
    [
      "Den erforderlichen Check erneut laufen lassen.",
      "GitHub verlangt bei archivierten erforderlichen Checks einen neuen Lauf.",
    ],
    [
      "Den alten Checknamen in der Beschreibung erwähnen.",
      "Eine Erwähnung ist kein aktueller Checklauf.",
    ],
    [
      "Den Agenten um eine neue Erfolgsmeldung bitten.",
      "Eine Chatmeldung ersetzt den erforderlichen Status nicht.",
    ],
  ),
  q(
    "agent-verification-24",
    openai,
    "Was kann ein Trace bei einer unerwünschten Werkzeugaktion genauer zeigen?",
    [
      "Welche Toolaufrufe und Entscheidungen der Agent tatsächlich traf.",
      "Ein Trace hält den End-to-End-Ablauf einschließlich Werkzeugaufrufen fest.",
    ],
    [
      "Dass die Aktion in allen denkbaren Fällen ausgeschlossen ist.",
      "Ein einzelner Lauf beweist keine allgemeine Abwesenheit des Fehlers.",
    ],
    [
      "Dass der Build des Projekts unabhängig davon erfolgreich war.",
      "Ein Trace ist kein Ersatz für den Build-Nachweis.",
    ],
  ),
  q(
    "agent-verification-25",
    openai,
    "Welche Prüfform passt zu wiederkehrenden Änderungen an Agenten-Routingregeln?",
    [
      "Ein wiederholbarer Eval-Datensatz mit Fällen für richtige und falsche Übergaben.",
      "OpenAI empfiehlt Datensätze und Eval-Läufe zum Vergleichen von Routingänderungen.",
    ],
    [
      "Ein einzelner zufälliger Probelauf ohne gespeicherte Kriterien.",
      "Damit sind Änderungen schwer vergleichbar.",
    ],
    [
      "Ein reiner Typecheck der Routingdatei.",
      "Typen zeigen nicht, ob der Agent in Beispielsituationen richtig übergibt.",
    ],
  ),
];

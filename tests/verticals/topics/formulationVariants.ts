import { semanticCorpus } from "../../../src/verticals/topics/semanticCorpus";

export const formulationTopicId = "design-and-legacy-specification";

const neutralDe =
  "Vor dem Ersatz oder der Migration einer bestehenden Anwendung wird ihr tatsächliches Verhalten untersucht. Code, Tests, Beobachtungen der Anwender und Fachgespräche liefern Belege. Repräsentative Eingaben und Ausgaben werden mit Charakterisierungstests und Capture/Replay erfasst; Regressionstests vergleichen die alte mit der neuen Implementierung. Beobachtetes Verhalten wird von Annahmen und gewünschten Geschäftsregeln getrennt. Für riskante Änderungen werden Datenstrukturen, Pseudocode und Gegenbeispiele skizziert, um die beabsichtigte Lösung vor der Umsetzung zu prüfen.";
const neutralEn =
  "Before replacing or migrating an existing application, its actual behavior is investigated. Code, tests, user observations, and domain discussions provide evidence. Representative inputs and outputs are captured using characterization tests and capture/replay; regression tests compare the old and new implementations. Observed behavior is distinguished from assumptions and desired business rules. For risky changes, data structures, pseudocode, and counterexamples are sketched to examine the intended solution before implementation.";
const structuredDe =
  "Problem: Eine bestehende Anwendung soll geändert oder abgelöst werden, ihr tatsächliches Verhalten ist jedoch unklar. Vorgehen: Code und Tests untersuchen, Anwender beobachten und mit Fachleuten sprechen. Repräsentative Ein- und Ausgaben mit Charakterisierungstests und Capture/Replay sichern; alt und neu durch Regressionstests vergleichen. Datenstrukturen, Pseudocode und Gegenbeispiele für riskante Änderungen skizzieren. Ergebnis: Belegtes Verhalten, Annahmen und gewünschte Fachregeln sind getrennt; der geplante Ersatz kann am beobachteten Verhalten geprüft werden.";
const structuredEn =
  "Problem: An existing application must be changed or replaced, but its actual behavior is unclear. Approach: Examine code and tests, observe users, and talk to domain experts. Preserve representative inputs and outputs using characterization tests and capture/replay; compare old and new through regression tests. Sketch data structures, pseudocode, and counterexamples for risky changes. Outcome: Evidenced behavior, assumptions, and desired business rules are separated; the planned replacement can be checked against observed behavior.";
const questions = [
  "Wie ermittle ich vor einer Ablösung oder Migration das tatsächliche Verhalten einer bestehenden Anwendung?",
  "Wie gewinne ich Belege aus Quellcode, Tests, Anwenderbeobachtung und Fachgesprächen und trenne sie von Annahmen und gewünschten Geschäftsregeln?",
  "Wie erfasse ich repräsentative Eingaben und Ausgaben mit Charakterisierungstests oder Capture/Replay und vergleiche alt und neu mit Regressionstests?",
  "Wie prüfe ich eine riskante Änderung vor der Umsetzung mit skizzierten Datenstrukturen, Pseudocode und Gegenbeispielen?",
];

export const formulationVariants = [
  {
    id: "baseline",
    label: "Bisheriger Suchtext",
    texts: [
      semanticCorpus
        .find(({ id }) => id === formulationTopicId)!
        .text.replace(/^passage: /, ""),
    ],
  },
  {
    id: "neutral-de",
    label: "Sachlicher Absatz · Deutsch",
    texts: [neutralDe],
  },
  {
    id: "first-person",
    label: "Ich-Perspektive · Deutsch",
    texts: [
      "Ich soll eine bestehende Anwendung ändern, ersetzen oder migrieren. Zuerst will ich verstehen, was sie tatsächlich tut. Dazu untersuche ich Code und Tests, beobachte Anwender und spreche mit Fachleuten. Mit Charakterisierungstests und Capture/Replay halte ich repräsentative Eingaben und Ergebnisse fest. Regressionstests helfen mir, die neue Implementierung mit der alten zu vergleichen. Ich unterscheide beobachtetes Verhalten von meinen Vermutungen und gewünschten Fachregeln. Riskante Änderungen prüfe ich zunächst anhand skizzierter Datenstrukturen, Pseudocode und Gegenbeispiele.",
    ],
  },
  {
    id: "structured-de",
    label: "Problem–Vorgehen–Ergebnis · Deutsch",
    texts: [structuredDe],
  },
  {
    id: "questions",
    label: "Vier Fragen · ein Vektor",
    texts: [questions.join(" ")],
  },
  {
    id: "keywords",
    label: "Stichwörter · Deutsch",
    texts: [
      "Bestehende Anwendung ändern, ersetzen, migrieren. Tatsächliches Verhalten und Legacy-Code verstehen. Belege: Code, Tests, Anwenderbeobachtung, Fachgespräch. Repräsentative Eingaben und Ausgaben; Charakterisierungstests, Capture/Replay, Regressionstests, Vergleich alter und neuer Implementierung. Beobachtungen, Annahmen und gewünschte Geschäftsregeln unterscheiden. Riskante Änderungen entwerfen: Datenstrukturen, Pseudocode, Gegenbeispiele.",
    ],
  },
  {
    id: "example",
    label: "Konkretes Beispiel · Deutsch",
    texts: [
      "Ein Team ersetzt eine gewachsene Java-Berechnungsroutine. Es untersucht Quellcode und Tests, beobachtet die Nutzung und bespricht Fachregeln mit Anwendern. Repräsentative Ein- und Ausgaben werden durch Charakterisierungstests und Capture/Replay festgehalten. Dieselben Fälle werden als Regressionstests gegen die neue Implementierung ausgeführt. Das Team trennt beobachtetes Altverhalten von Vermutungen und gewünschten Regeln. Vor riskanten Umbauten skizziert es Datenstrukturen, Pseudocode und Gegenbeispiele. So kann es den Ersatz oder eine Migration am bisherigen Verhalten prüfen.",
    ],
  },
  {
    id: "neutral-en",
    label: "Sachlicher Absatz · Englisch",
    texts: [neutralEn],
  },
  {
    id: "structured-en",
    label: "Problem–Vorgehen–Ergebnis · Englisch",
    texts: [structuredEn],
  },
  {
    id: "bilingual",
    label: "Sachlicher Absatz · DE + EN",
    texts: [`${neutralDe}\n\n${neutralEn}`],
  },
  {
    id: "separate-questions",
    label: "Vier Fragen · getrennte Vektoren (Maximum)",
    texts: questions,
  },
];

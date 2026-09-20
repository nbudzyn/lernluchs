# Design: Redaktionell geprüfter Grundlagen-Inhaltskatalog

## Datenvertrag

`CatalogItem` wird von einer ID zu einem vollständigen, öffentlichen Thema
erweitert. Jedes Thema enthält einen deutschen Titel, eine knappe Lernkarte
mit Problem, Kernkonzept, Java-/Web-Einsatz und Grenze, sowie die redaktionell
vorgeschriebenen Metadaten. Quellen sind strukturierte, statische Verweise
mit Titel, URL, Typ und Sprache. Das Schema validiert zur Laufzeit alle
Pflichtfelder, die erlaubten Statuswerte, eindeutige IDs und HTTP(S)-Quellen.
Es lädt keine Quelle zur Laufzeit.

Die sechs dauerhaften IDs sind:

1. `human-ai-responsibility`
2. `problem-understanding-and-change-boundaries`
3. `agents-md`
4. `ears-requirements`
5. `research-plan-tasks`
6. `spec-driven-development-openspec`

## Redaktionelle Prüfung

Am 20.09.2026 wurden Aussagen gegen möglichst primäre oder offizielle Quellen
geprüft: NIST AI RMF zur menschlichen Verantwortung; die offizielle
AGENTS.md-Initiative; die IEEE-Veröffentlichung zu EARS; die offizielle
OpenAI-Handreichung zu Codex-Workflows; und das offizielle OpenSpec-Repository.
Die bestehenden Dokumentationsnotizen waren lediglich Rechercheausgangspunkt.

Die Quellen zu EARS und der NIST-AI-Risikosteuerung sind ältere, weiterhin
zitierfähige Grundlagen; weil sich Werkzeuge und Praktiken schnell ändern,
werden die Inhalte zu AGENTS.md, Research/Plan/Tasks und OpenSpec bereits am
20.12.2026 erneut fachlich geprüft. Die allgemeinen Themen werden am
20.03.2027 erneut geprüft. Als bewusst nicht behandelte Alternative zu
OpenSpec wird GitHub Spec Kit genannt; die Lernkarte lehrt jedoch kein
Werkzeug als universelle Lösung.

## Grenzen und Datenschutz

Der Katalog importiert nur den gemeinsamen Vertrag. Er enthält keine Fragen,
persönlichen Daten, Tokens, Telemetrie oder Netzwerkcode. Quellen bleiben
reine URLs für eine spätere bewusste Nutzeraktion. Neue Paketabhängigkeiten
sind weder erforderlich noch freigegeben.

## Risiken und Alternativen

Externe Webquellen können sich ändern oder verschwinden; Titel, URL, Typ,
Sprache, Prüfdatum und Wiedervorlagetermin machen die redaktionelle Entscheidung
prüfbar. Der Katalog ist kein Ersatz für Originaldokumentation oder eine
rechtliche Sicherheitsbewertung. Statt einer Schema-Bibliothek wird die
vorhandene kleine Validierung erweitert; das vermeidet eine zusätzliche
Abhängigkeit für einen begrenzten Vertrag.

# Story-Backlog

Dieses Backlog enthält nur geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; danach wird sie aus dem Backlog entfernt. Die Spec dokumentiert RED → GREEN → REFACTOR.

Pro fachlichem Commit gelten höchstens zwei Vertikalen; eine Ausnahme braucht eine eigene Spec mit Begründung und Architekturtests. Zentrale
Dokumente werden erst mit der jeweiligen Umsetzung knapp um die dann geltenden Entscheidungen und nachgewiesenen Prüfungen ergänzt.

## Lernvideos als Sekundärquellen für alle Themen ergänzen

Der Lernende findet bei jedem Thema vier fachlich passende YouTube-Videos für Überblick und Vertiefung, darunter **mindestens ein deutschsprachiges Video**. Thema 1 und seine vier bereits ausgewählten Videos bleiben Bestandteil derselben Story.

### Auswahl und Integrationsregeln

- Ziel: vier Lernvideos je Thema, möglichst unter 45 Minuten, bei gleicher fachlicher Eignung aktuellere und kürzere Beiträge bevorzugen. Ältere Grundlagen sind zulässig, wenn ihre Konzepte weiterhin gelten. Keine reinen Werbevideos; Anbieterkanäle sind zulässig, wenn Erklärungen oder nachvollziehbare Demonstrationen den Lernwert bilden.
- Die folgende Vorauswahl enthält 184 Themenzuordnungen für 46 Themen und 171 unterschiedliche Videos. Wiederverwendung zwischen verwandten Themen ist beabsichtigt; je Thema keine Dublette. Recherchestand: 30.09.2026.
- **Prüfstand:** Für alle 171 unterschiedlichen Videos wurden Titel, Kanal, Gesamtlänge und Veröffentlichungsdatum auf den YouTube-Originalseiten abgerufen. Die Sprachzuordnung berücksichtigt Original-Audio-Metadaten, soweit vorhanden, sonst Originaltitel, Beschreibung und Untertitelsprache zusammen. Übersetzte Suchtreffer wurden korrigiert. Fachliche Vorauswahl anhand der Beschreibungen und vorhandener Kapitelmarken; keine vollständige Sichtung aller Videos.
- Vor Integration Titel, Audiosprache, Laufzeit, Veröffentlichungsdatum, Erreichbarkeit, Lernwert und Werbeanteil erneut redaktionell prüfen. Die Vorauswahl ist keine pauschale Inhaltsfreigabe. Ungeeignete Kandidaten ersetzen. Fachlich nur ergänzende Videos sind bei den Themen ausdrücklich gekennzeichnet und schließen die dort genannte Suchlücke nicht.
- Alle ausgewählten Videos im Sinne dieser Story als Sekundärquellen für die methodische Einordnung aufnehmen. Die Herkunft für jede konkret gestützte Aussage nach den [Quellenregeln](../content/source-selection.md) prüfen; Hersteller-Tutorials können für die Beschreibung des eigenen Werkzeugs Primärquellen sein. Diese Abgrenzung in der aktiven Spec begründen. Primärquellen der Themen erhalten.
- **Offene Entscheidung vor Aktivierung:** Die Grenze von zehn Quellen gilt weiterhin. Thema 4 hat bereits sieben Quellen (mit vier Videos elf), Themen 37 und 38 jeweils acht (mit vier Videos zwölf). Dort nach fachlicher Prüfung vorhandene Quellen begründet ersetzen oder eine ausdrückliche Änderung der Quellenregel vereinbaren. Keine Quelle allein zur Erfüllung einer Zielanzahl entfernen.
- Einen neuen Quellentyp für Videos sowie den Medientyp `video` im Quellenvertrag und in der Validierung ergänzen. Herkunftsgruppe und Medientyp bleiben unabhängig.
- Videoquellen mit verlinktem Titel, Laufzeit und neuem Symbol anzeigen; deutsche Quellen wie bisher mit `[DE]`. Bei empfohlenen Ausschnitten Gesamtlänge und Abschnitt getrennt nennen, damit ein langer Vortrag nicht als kurzes Video erscheint.
- Das Videosymbol gemäß den [Symbolrichtlinien](../content/icon-generation.md) selbst als inline-SVG gestalten, zum Beispiel als Play-Dreieck in einem Videorahmen. Konturen, Größe, Farbe, Abstände und Ausrichtung an die bestehende UI-Gestaltungssprache und Audioquellen-Anzeige anpassen; keine fremden Icons oder neuen Abhängigkeiten. Die Bedeutung „Video“ muss auch für Screenreader erkennbar sein.
- Videos durch bewusste Nutzeraktion als externe Links öffnen; keine eingebetteten Player, automatisch geladenen Vorschaubilder oder externen Laufzeit-Skripte.

### Abnahme und Umsetzung

Alle 46 Themen besitzen nach redaktioneller Prüfung je vier geeignete Videos, darunter mindestens eines mit deutschem Original-Audio; vorhandene Quellen und die Obergrenze sind fachlich abgestimmt. Die nachfolgenden fachlichen Suchlücken sind vorher geschlossen oder ausdrücklich in der aktiven Spec als Abweichung entschieden. Reine Werbung, ungeprüfte Einsparungs-/Sicherheitsversprechen und falsche Sprachkennzeichnungen gelangen nicht in den Katalog.

Video-, Text- und Audioquellen werden korrekt gruppiert und angezeigt. Links, Symbol, Laufzeit, Sprachkennzeichnung und gegebenenfalls Lernabschnitt funktionieren auf Desktop und Mobil barrierefrei. Umsetzung pro Teil-Feature mit RED → GREEN → REFACTOR; Nachweise, Pflichtsuite und lokaler Browsercheck stehen in der späteren aktiven Spec. Betroffene Vertikale: Themen; Shared nur bei Bedarf für den Quellenvertrag.

### Videoauswahl nach Themen

DE bedeutet Deutsch, EN Englisch. Gesamtlängen und Veröffentlichungsdaten stammen von den Originalseiten. Empfohlene Abschnitte stehen in den fachlichen Hinweisen; diese begrenzen auch die jeweilige Themenabdeckung.

#### 1. Mensch und KI: Verantwortung bleibt menschlich

Themen-ID: `human-ai-responsibility`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Why AI Agents Need A Human in the Loop Now](https://www.youtube.com/watch?v=cmEJ-5zYKHA) | IBM Technology | EN | 7:27 | 2026-03-10 |
| [Was ist Vertrauenswürdige KI?](https://www.youtube.com/watch?v=sNHZjpXlZl8) | appliedAI Institute for Europe | DE | 19:43 | 2024-07-02 |
| [What is AI Ethics?](https://www.youtube.com/watch?v=aGwYtUzMQUk) | IBM Technology | EN | 6:10 | 2021-09-30 |
| [How to implement AI Ethics](https://www.youtube.com/watch?v=muLPOvIEtaw) | IBM Technology | EN | 3:44 | 2024-02-05 |

Fachlicher Bezug und Grenzen: Menschliche Kontrolle, vertrauenswürdige KI und praktische Ethik.

#### 2. Problem verstehen und Änderungsgrenzen setzen

Themen-ID: `problem-understanding-and-change-boundaries`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Akzeptanzkriterien richtig formulieren – mit Beispielen](https://www.youtube.com/watch?v=VNCwMVAo2tg) | SOPHIST GmbH | DE | 6:49 | 2026-09-09 |
| [User Stories and Acceptance Criteria EXAMPLE (Agile Story Tutorial)](https://www.youtube.com/watch?v=q26147zlcMU) | The Business Analysis Doctor - IIBA Certification | EN | 11:56 | 2022-04-15 |
| [User Story Mapping 101](https://www.youtube.com/watch?v=TaMLUf3gISo) | NNgroup | EN | 3:05 | 2022-04-08 |
| [Requirement Specification vs User Stories](https://www.youtube.com/watch?v=KP0U3I-f9-Y) | Modern Software Engineering | EN | 17:34 | 2022-08-10 |

Fachlicher Bezug und Grenzen: Anforderungen, Akzeptanz und fachlicher Umfang; methodische Grundlagen statt werkzeugspezifischer Anleitung.

#### 3. Fachsprache vereinheitlichen und Komplexität begrenzen

Themen-ID: `domain-language-and-complexity`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Subdomains vs Bounded-Contexts in Domain-Driven Design (DDD) // deutsch](https://www.youtube.com/watch?v=yQgCmMBNle4) | the native web GmbH | DE | 10:14 | 2024-02-04 |
| [So gelingt DDD // deutsch](https://www.youtube.com/watch?v=Z0FWfVsRheE) | the native web GmbH | DE | 8:02 | 2021-06-02 |
| [Domain-Driven Design: Bounded Contexts Explained! 🚀](https://www.youtube.com/watch?v=8SPVfacnFvM) | ByteMonk | EN | 14:01 | 2025-04-20 |
| [Unlocking Bounded Contexts in Domain-Driven Design – A Practical Guide](https://www.youtube.com/watch?v=kLLsVT_53bw) | Codewrinkles | EN | 21:34 | 2022-12-12 |

Fachlicher Bezug und Grenzen: Ubiquitous Language und fachliche Grenzen; keine starre Regel zur Modulgröße.

#### 4. Projektwissen und Fertigkriterien gezielt dokumentieren

Themen-ID: `project-documentation-and-checklists`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Tipps für die technische Dokumentation // deutsch](https://www.youtube.com/watch?v=BNBDkIJxDm0) | the native web GmbH | DE | 13:59 | 2021-05-19 |
| [Definition of Done // deutsch](https://www.youtube.com/watch?v=Lgi2d2ft7ok) | the native web GmbH | DE | 6:29 | 2020-11-10 |
| [What nobody tells you about documentation](https://www.youtube.com/watch?v=t4vKPhjcMZg) | PyCon AU | EN | 30:52 | 2017-08-05 |
| [Better docs, happier users: What we learned applying Diataxis to HoloViz libraries](https://www.youtube.com/watch?v=buEKMi4tAew) | PyData | EN | 29:57 | 2025-11-23 |

Fachlicher Bezug und Grenzen: Technische Dokumentation, Diátaxis und Definition of Done. Ältere Grundlagen bleiben als solche gekennzeichnet.

#### 5. Langlebiges Domänenwissen mit OKF strukturieren

Themen-ID: `open-knowledge-format`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Warum jede KI dein Unternehmen neu erfindet - und was OKF ändert](https://www.youtube.com/watch?v=_LZJ-OiPzV0) | KI Palast | DE | 4:31 | 2026-07-04 |
| [Google's Open Knowledge Format: Just Markdown for AI Agents](https://www.youtube.com/watch?v=14C0E6pwBIQ) | Prism Labs | EN | 6:53 | 2026-06-14 |
| [Open Knowledge Format Explained \| Google's New AI Standard](https://www.youtube.com/watch?v=wczuwg9EZdg) | AI with Surya | EN | 8:38 | 2026-06-17 |
| [Open Knowledge Format (OKF): The Missing Layer for AI Agents](https://www.youtube.com/watch?v=5zUK_UB5HtY) | AgenticEngineering | EN | 24:27 | 2026-07-03 |

Fachlicher Bezug und Grenzen: Direkte OKF-Erklärungen; teils v0.1 statt der im Thema verlinkten v0.2. Versionsunterschiede vor Integration prüfen.

#### 6. Ziel, Nutzen und Abbruchkriterien vor dem Coding klären

Themen-ID: `goal-discovery-and-stop-criteria`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Tutorial: Projektmanagement - Projektziele](https://www.youtube.com/watch?v=MvRbBamMZm0) | Business Analyse & Co | DE | 8:55 | 2021-06-20 |
| [User Stories and Acceptance Criteria EXAMPLE (Agile Story Tutorial)](https://www.youtube.com/watch?v=q26147zlcMU) | The Business Analysis Doctor - IIBA Certification | EN | 11:56 | 2022-04-15 |
| [User Story Mapping 101](https://www.youtube.com/watch?v=TaMLUf3gISo) | NNgroup | EN | 3:05 | 2022-04-08 |
| [User Story Mapping Tutorial: How to Create and Use Story Maps](https://www.youtube.com/watch?v=uj3PlPDAlHU) | Mountain Goat Software: Agile & Scrum Mastery | EN | 11:38 | 2024-07-09 |

Fachlicher Bezug und Grenzen: Zielklärung, Nutzerabläufe und überprüfbare Abnahme; Abbruchkriterien müssen zusätzlich am konkreten Projekt festgelegt werden.

#### 7. AGENTS.md: dauerhafter Kontext für Coding-Agenten

Themen-ID: `agents-md`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [CLAUDE.md & AGENTS.md - besserer Code und weniger Tokens](https://www.youtube.com/watch?v=U7gu7vT0ib0) | Timo Schmitz | DE | 9:15 | 2026-07-24 |
| [OpenAI Codex Tutorial #6 - Using the AGENTS.md file](https://www.youtube.com/watch?v=NlNuoH5PPl4) | Net Ninja | EN | 4:44 | 2025-10-04 |
| [How I Write My AGENTS.md Files  - Best Practices](https://www.youtube.com/watch?v=6w88NVf2_lY) | NeuralNine | EN | 14:46 | 2026-01-19 |
| [Improve your AI code output with AGENTS.md (+ my best tips)](https://www.youtube.com/watch?v=KEK_WcSTiuE) | Steve (Builder.io) | EN | 7:00 | 2025-09-09 |

Fachlicher Bezug und Grenzen: Direkte Anleitungen zu Repository-Anweisungen; Aussagen über Tokenersparnis und automatische Regelbefolgung nicht als Garantie übernehmen.

#### 8. EARS: Anforderungen präzise formulieren

Themen-ID: `ears-requirements`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Gute Anforderungen schreiben // deutsch](https://www.youtube.com/watch?v=lEc1D5mjleA) | the native web GmbH | DE | 11:37 | 2021-05-13 |
| [Easy Approach to Requirements Syntax (EARS) - The Basics](https://www.youtube.com/watch?v=pa8C449yhCg) | Saxion Media Xpert Centre | EN | 13:33 | 2022-09-26 |
| [L07 10 Requirements Templates (EARS)](https://www.youtube.com/watch?v=CT1FkZyceQY) | Phil Koopman | EN | 2:44 | 2021-07-26 |
| [Easy Approach to Requirements Syntax (EARS) -  Using EARS in requirements documents](https://www.youtube.com/watch?v=Fey75aFEm7w) | Saxion Media Xpert Centre | EN | 10:55 | 2022-11-08 |

Fachlicher Bezug und Grenzen: Drei direkte EARS-Lektionen. Das deutsche Video behandelt gute Anforderungen allgemein, nicht EARS. Deutschsprachiges EARS-Tutorial bleibt eine Suchlücke.

#### 9. Bestehendes Verhalten erforschen und einen Entwurf prüfbar machen

Themen-ID: `design-and-legacy-specification`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Legacy Code angstfrei mit der Golden Master Technik ändern](https://www.youtube.com/watch?v=3wPZGfSiWYw) | ABAPConf | DE | 31:03 | 2022-09-14 |
| [How to test legacy code with characterization tests (JavaScript)](https://www.youtube.com/watch?v=2q5PdGdlL8Y) | Andrew Burgess | EN | 11:31 | 2022-06-13 |
| [Working Effectively with Legacy Code • Michael Feathers & Christian Clausen • GOTO 2023](https://www.youtube.com/watch?v=P_6eDL1aqtA&t=411s) | GOTO Conferences | EN | 45:42 | 2023-04-13 |
| [Working Effectively with Legacy Code with Michael Feathers](https://www.youtube.com/watch?v=UiU6khrBuV8) | Scott Hanselman | EN | 23:40 | 2024-01-03 |

Fachlicher Bezug und Grenzen: Golden Master und Characterization Tests; Beispiele aus ABAP und JavaScript auf Java übertragen, ohne beobachtetes Verhalten automatisch als Sollregel zu behandeln. GOTO: Lernabschnitt 06:51–45:02 (38:11) von der Definition von Legacy-Code bis Scratch Refactoring; Gesamtlänge 45:42.

#### 10. Relevante Standards und Einschränkungen begründen

Themen-ID: `standards-and-constraint-rationale`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [OWASP Top 10 2025: Das sind die aktuellen Sicherheitsrisiken \| Interview mit Christian Wenz](https://www.youtube.com/watch?v=R1KSXSd_lmk) | Developer World | DE | 16:51 | 2026-01-08 |
| [OWASP Application Security Verification Standard (ASVS) - Shanni Prutchi, Ryan Armstrong](https://www.youtube.com/watch?v=BnP2vls88fw) | OWASP Foundation | EN | 35:17 | 2025-03-21 |
| [What's New in ASVS V5 - Eden Yardeni - NDC Security 2026](https://www.youtube.com/watch?v=SHSpUsVmDLA) | NDC Conferences | EN | 45:29 | 2026-03-20 |
| [OWASP Spotlight - Project 19 - OWASP Application Security Verification standard (ASVS)](https://www.youtube.com/watch?v=3puIavsZfAk) | Vandana Verma | EN | 10:12 | 2021-07-17 |

Fachlicher Bezug und Grenzen: ASVS und risikogerechte Security-Anforderungen. Der deutsche Überblick behandelt OWASP Top 10 statt ASVS; deutsches ASVS-Tutorial bleibt eine Suchlücke. ASVS-Spotlight von 2021 als kurzer Begriffsüberblick, v5 durch NDC 2026 ergänzt (45:29, knapp über Wunschlänge).

#### 11. Plausible KI-Antworten mit Gegenbelegen prüfen

Themen-ID: `llm-fallibility-and-counterchecks`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Lügt ChatGPT? 4 Wege, um KI-Fehler zu vermeiden & Tools für genauere Ergebnisse \| Kurz erklärt](https://www.youtube.com/watch?v=-ttJuqi8Rho) | Digitalzentrum Berlin | DE | 5:21 | 2025-04-07 |
| [Why Large Language Models Hallucinate](https://www.youtube.com/watch?v=cfqtFvWOfg0) | IBM Technology | EN | 9:37 | 2023-04-20 |
| [Understanding AI Agent Hallucination in AI Systems](https://www.youtube.com/watch?v=bNRhppHct54) | IBM Technology | EN | 10:51 | 2026-08-02 |
| [Why do AI models hallucinate?](https://www.youtube.com/watch?v=005JLRt3gXI) | Claude | EN | 5:13 | 2026-04-15 |

Fachlicher Bezug und Grenzen: Halluzinationen, Grenzen und Prüfmöglichkeiten; Vermeidungstipps sind keine Korrektheitsgarantie.

#### 12. Agentenkontext gezielt auswählen und neu ordnen

Themen-ID: `context-selection-and-reset`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Effektives Context Engineering für KI Agenten](https://www.youtube.com/watch?v=dPhyDkU-0zA) | Benjamin Thorstensen | DE | 10:29 | 2025-09-13 |
| [What Is Context Engineering? Why It Matters for AI Agents](https://www.youtube.com/watch?v=Qx0fCqpkBus) | IBM Technology | EN | 9:56 | 2026-08-11 |
| [Context Engineering vs. Prompt Engineering: Smarter AI with RAG & Agents](https://www.youtube.com/watch?v=vD0E3EUb8-8) | IBM Technology | EN | 7:52 | 2025-08-18 |
| [Warum dein Claude Code Agent wichtigen Kontext vergisst (und wie du es behebst)](https://www.youtube.com/watch?v=Po3oo1foAVQ) | Alex Sprogis | DE | 23:12 | 2026-03-11 |

Fachlicher Bezug und Grenzen: Context Engineering, Kontextverlust und Kompaktierung; Produktverhalten kann sich seit Veröffentlichung geändert haben.

#### 13. Kontext und Vertrauensgrenzen für Coding-Agenten

Themen-ID: `coding-agent-context-and-trust-boundaries`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Die größte Sicherheitslücke der KI: Prompt Injection erklärt](https://www.youtube.com/watch?v=sPQfn_nGr30) | Benjamin Thorstensen | DE | 14:07 | 2026-02-06 |
| [Securing AI Agents: How to Prevent Hidden Prompt Injection Attacks](https://www.youtube.com/watch?v=5ZA1lTxTH3c) | IBM Technology | EN | 10:07 | 2026-01-10 |
| [What Is a Prompt Injection Attack?](https://www.youtube.com/watch?v=jrHRe9lSqqA) | IBM Technology | EN | 10:57 | 2024-05-30 |
| [What is Agentic Security Runtime? Securing AI Agents](https://www.youtube.com/watch?v=NH0plIdqDMk) | IBM Technology | EN | 4:59 | 2026-03-22 |

Fachlicher Bezug und Grenzen: Prompt Injection, Grenzen untrusted Inhalts und technische Sicherheitsmaßnahmen.

#### 14. Große Repositories mit einem Codegraphen erschließen

Themen-ID: `codebase-memory-for-large-repos`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Context Engineering erklärt: Wie KI Agenten verstehen](https://www.youtube.com/watch?v=GLeVxnPkeD0) | datasolut | DE | 13:22 | 2025-12-16 |
| [Codebase Memory MCP GitHub Setup Guide: Index Repos Locally and Trace Breakages Faster](https://www.youtube.com/watch?v=3GuP8gdE2Fk) | Alex Hitt | EN | 4:28 | 2026-08-27 |
| [Codebase-Memory-MCP: The Tool I Missed in My Code Knowledge Graph Comparison (120x Fewer Tokens)](https://www.youtube.com/watch?v=5kAJ7CA7ZB4) | WiseBuilder | EN | 11:17 | 2026-07-27 |
| [Graphify vs CodeGraph: I Tested Both With Claude Code](https://www.youtube.com/watch?v=Xr2MjfirjqA) | The Gray Cat | EN | 9:35 | 2026-09-15 |

Fachlicher Bezug und Grenzen: Codebase-Memory-MCP: Setup und Vergleich; dazu ein Versuch mit Graphify und CodeGraph. Das deutsche Video vermittelt Context-Engineering-Grundlagen, kein direktes Codegraph-Tutorial. Direkte deutsche Anleitung bleibt eine Suchlücke. Die Einzelfall-Messungen sind keine allgemeinen Leistungsnachweise.

#### 15. Tokenwerkzeuge erst nach einem gemessenen Engpass einsetzen

Themen-ID: `token-efficiency-tools`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Claude Code Token Limit schon wieder erreicht?](https://www.youtube.com/watch?v=3n1NfeHHCv0) | KI in der Praxis | DE | 5:17 | 2026-05-13 |
| [RTK: Token Killer for AI Agents – Real Savings or Hidden Costs?](https://www.youtube.com/watch?v=3BHcuLZhZgM) | Computalis | EN | 4:01 | 2026-08-22 |
| [I Cut My Claude Code Token Costs by 80% With This Tool](https://www.youtube.com/watch?v=_Fo9hfgTlMw) | Yaron Been | EN | 8:05 | 2026-03-15 |
| [RTK or Headroom? Why I Changed My Claude Code Setup](https://www.youtube.com/watch?v=fgIbgHMwtWg) | The Gray Cat | EN | 10:54 | 2026-09-22 |

Fachlicher Bezug und Grenzen: Tokenengpässe und RTK. Das deutsche Video behandelt Tokenlimits allgemein; kein direktes deutsches RTK-/Caveman-Tutorial belegt. Einsparungszahlen sind Anbieter-/Autorenbehauptungen und benötigen eigene Messung.

#### 16. Geheimnisse und sensible Daten beim KI-Einsatz schützen

Themen-ID: `protect-secrets-and-sensitive-data-with-ai`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Claude Code: So schützt du deine API-Keys (.env Setup)](https://www.youtube.com/watch?v=yS0rEzcXfm4) | Alex Sprogis | DE | 9:31 | 2026-05-26 |
| [Secrets Management: Secure Credentials & Avoid Data Leaks](https://www.youtube.com/watch?v=BqekRTA6VCs) | IBM Technology | EN | 9:40 | 2025-04-15 |
| [AI Is Exposing Your Data: An AI Security Problem You Can't See](https://www.youtube.com/watch?v=kyJ1vd7yEPc) | IBM Technology | EN | 11:29 | 2026-09-27 |
| [Protecting Data in AI: Strategies for Security & Governance](https://www.youtube.com/watch?v=LyfG7SGRiZA) | IBM Technology | EN | 15:19 | 2025-07-08 |

Fachlicher Bezug und Grenzen: Datenminimierung, Pseudonymisierung, Secrets und Datenabfluss; keine Rechtsberatung oder Freigabe für konkrete Unternehmensdaten.

#### 17. Research, Plan und Tasks trennen

Themen-ID: `research-plan-tasks`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Claude Code Tutorial #05 \| Plan Modus und Version 2 Update](https://www.youtube.com/watch?v=JDX-ljnaW2A) | Dennis Jan Vogt | DE | 14:45 | 2025-10-04 |
| [The Explore → Plan → Code → Commit workflow in Claude Code](https://www.youtube.com/watch?v=xJQuF02NAK8) | Claude | EN | 3:11 | 2026-05-17 |
| [I was an AI skeptic. Then I tried plan mode](https://www.youtube.com/watch?v=WNx-s-RxVxk) | Matt Pocock | EN | 12:20 | 2026-01-15 |
| [How I use Claude Code for real engineering](https://www.youtube.com/watch?v=kZ-zzHVUrO4) | Matt Pocock | EN | 10:11 | 2025-10-27 |

Fachlicher Bezug und Grenzen: Recherche und Plan vor Implementierung; Claude-Code-Beispiele auf den eigenen Workflow übertragen.

#### 18. Spec-Driven Development mit OpenSpec

Themen-ID: `spec-driven-development-openspec`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Spec-Driven Development mit Claude Code: Ein praxisorientierter Leitfaden](https://www.youtube.com/watch?v=z6MWGIa-bos) | SaM Solutions DACH | DE | 8:56 | 2026-09-03 |
| [Stop Vibe Coding: Spec-Driven Development with OpenSpec (in 8 minutes)](https://www.youtube.com/watch?v=P4EwAIflyq8) | TJ Tech Talk | EN | 7:55 | 2026-08-08 |
| [OpenSpec on a Real Project: What the Demos Don’t Show](https://www.youtube.com/watch?v=YHPMs252Opc) | Dmitrii Balakin | EN | 11:32 | 2026-07-18 |
| [Getting Started with OpenSpec \| Spec Driven Development \| Setup Tutorial](https://www.youtube.com/watch?v=raPTOBUpc3M) | Incomplete Developer | EN | 5:47 | 2026-02-20 |

Fachlicher Bezug und Grenzen: Drei direkte OpenSpec-Beiträge. Der deutsche Einstieg behandelt Spec-Driven Development allgemein; deutsches OpenSpec-Tutorial bleibt eine Suchlücke.

#### 19. Coding-Agenten nach Arbeitsumgebung auswählen

Themen-ID: `coding-agent-interface-selection`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Claude Code VS. Codex VS. Cursor: Welche KI codet am BESTEN?](https://www.youtube.com/watch?v=oQgAytGUXLc) | Christoph Magnussen | DE | 22:48 | 2026-02-15 |
| [Claude Code vs GPT Codex: Ehrlicher Vergleich](https://www.youtube.com/watch?v=ncNG21JfYws) | Agile Heroes Intelligence | DE | 7:02 | 2026-08-23 |
| [A very subjective comparison of Claude Code, OpenCode, Cursor & GitHub Copilot](https://www.youtube.com/watch?v=dMSZ0WcK1oI) | Maximilian Schwarzmüller | EN | 18:30 | 2026-01-29 |
| [Das Geheimnis guter KI-Agents: Die Harness-Schicht erklärt](https://www.youtube.com/watch?v=7_F2rGhK0iE) | Benjamin Thorstensen | DE | 9:47 | 2025-12-12 |

Fachlicher Bezug und Grenzen: Vergleiche und Unterschiede der Arbeitsumgebungen; subjektive Erfahrungen, keine reproduzierbare Rangliste oder vollständige Kiro-/Gemini-Abdeckung.

#### 20. Wiederkehrende Agentenabläufe als Skills prüfen

Themen-ID: `agent-skills-and-commands`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [SKILL.md Tutorial: So gibst du deinem KI-Agenten echte Fähigkeiten](https://www.youtube.com/watch?v=-qwEBmCo2f8) | Vibe Venture - KI & Code | DE | 41:17 | 2026-05-27 |
| [Claude Agent Skills Explained](https://www.youtube.com/watch?v=fOxC44g8vig) | Anthropic | EN | 3:14 | 2025-11-26 |
| [What AI Agent Skills Are and How They Work](https://www.youtube.com/watch?v=Lg-meK5IU8Q) | IBM Technology | EN | 12:25 | 2026-04-20 |
| [5 Best Practices for Building AI Agent Skills](https://www.youtube.com/watch?v=qYNs80FKIVc) | IBM Technology | EN | 13:22 | 2026-08-10 |

Fachlicher Bezug und Grenzen: Skills erstellen, Funktionsprinzip und Qualitätsprüfung; fremde Skills bleiben prüfpflichtig.

#### 21. Spec-Frameworks an einem kleinen Pilot vergleichen

Themen-ID: `spec-framework-selection`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Was niemand über GitHub's Spec Kit sagt](https://www.youtube.com/watch?v=fsVX9OfkFi0) | Benjamin Thorstensen | DE | 13:25 | 2025-09-23 |
| [Spec-Driven Development mit Claude Code: Ein praxisorientierter Leitfaden](https://www.youtube.com/watch?v=z6MWGIa-bos) | SaM Solutions DACH | DE | 8:56 | 2026-09-03 |
| [OpenSpec on a Real Project: What the Demos Don’t Show](https://www.youtube.com/watch?v=YHPMs252Opc) | Dmitrii Balakin | EN | 11:32 | 2026-07-18 |
| [This “Anti-Vibe Coding” Tool Is Actually Brilliant](https://www.youtube.com/watch?v=qQZENQkraT4) | DevOps Toolbox | EN | 10:55 | 2026-07-10 |

Fachlicher Bezug und Grenzen: Spec Kit und OpenSpec kritisch einordnen; kein vollständiger gemeinsamer Benchmark aller Frameworks.

#### 22. Aufgaben und Abbruchkriterien für parallele Agenten festlegen

Themen-ID: `parallel-agent-task-boundaries`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Claude Code Agent Teams: Mehrere KI-Agents coden parallel](https://www.youtube.com/watch?v=Ag6Ly61Mc3E) | IchBinFabian | DE | 11:38 | 2026-02-07 |
| [Multi Agent Systems Explained: How AI Agents & LLMs Work Together](https://www.youtube.com/watch?v=sWH0T4Zez6I) | IBM Technology | EN | 7:57 | 2025-12-15 |
| [Multi-agent workflows in VS Code](https://www.youtube.com/watch?v=J5KTpq7hVn4) | Visual Studio Code | EN | 5:08 | 2026-03-18 |
| [Das Geheimnis guter KI-Agents: Die Harness-Schicht erklärt](https://www.youtube.com/watch?v=7_F2rGhK0iE) | Benjamin Thorstensen | DE | 9:47 | 2025-12-12 |

Fachlicher Bezug und Grenzen: Multi-Agent-Workflows und Grenzen des Harness; konkrete Ownership- und Abbruchregeln zusätzlich spezifizieren.

#### 23. Git-Worktrees für isolierte Änderungen nutzen

Themen-ID: `git-worktrees-for-isolated-changes`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [#147 Topic: Git Worktree für Parallele Coding Agenten](https://www.youtube.com/watch?v=SxQZb51WJY0) | todo:cast Developer Podcast | DE | 24:30 | 2026-01-11 |
| [Git Worktrees Tutorial #1 - What are Git Worktrees?](https://www.youtube.com/watch?v=Vf_0QpLsFRs) | Net Ninja | EN | 7:49 | 2026-03-03 |
| [Git Worktrees Tutorial #2 - Adding Git Worktrees](https://www.youtube.com/watch?v=5RB7RJ-d7Zk) | Net Ninja | EN | 7:03 | 2026-03-06 |
| [Git Worktrees Tutorial #5 - Worktrees in Agentic Coding Workflows](https://www.youtube.com/watch?v=1QNrxuUu5CU) | Net Ninja | EN | 4:12 | 2026-03-13 |

Fachlicher Bezug und Grenzen: Direkte Worktree-Erklärungen, Erstellung und Agentenabläufe.

#### 24. Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen

Themen-ID: `code-navigation-with-symbols-and-references`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [IntelliJ IDEA schnell lernen: Die wichtigsten Funktionen für den Einstieg](https://www.youtube.com/watch?v=CYcMMSHbz8w) | Bit-Bäckerei Ullenboom | DE | 39:31 | 2026-02-27 |
| [Navigation in IntelliJ IDEA](https://www.youtube.com/watch?v=1UHsJyCq1SU) | IntelliJ IDEA, a JetBrains IDE | EN | 8:00 | 2019-04-09 |
| [Navigating your code in VS Code — Symbols, definitions, references, navigation, and more!](https://www.youtube.com/watch?v=_4rSbklsVkk&t=935s) | Code 2020 | EN | 53:26 | 2020-11-28 |
| [IntelliJ Navigation Shortcuts You Need to Know](https://www.youtube.com/watch?v=bWivMas6Ilw) | Sebastian Daschner | EN | 6:31 | 2023-02-06 |

Fachlicher Bezug und Grenzen: IntelliJ-/VS-Code-Navigation mit Symbolen und Referenzen; der deutsche Einstieg ist breiter als reine Referenzsuche. Empfohlener Abschnitt bei Code 2020: 15:35–49:42 (34:07) zu Symbolen, Definitionen, Referenzen und Call Hierarchy; anhand veröffentlichter Kapitelmarken gewählt. Gesamtlänge 53:26.

#### 25. Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen

Themen-ID: `versioned-library-docs-with-context7`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Wie Du MCP-Server für Claude Code einrichtest (zu einfach)](https://www.youtube.com/watch?v=9RiTjWRT8kA) | AI News Daily | DE | 4:35 | 2025-07-25 |
| [Make AI Use Live Documentation with Context7 MCP](https://www.youtube.com/watch?v=Tk4y63IsA4s) | Code A Program | EN | 6:17 | 2026-01-20 |
| [How to use Context7 tutorial](https://www.youtube.com/watch?v=IJipWGrElhE) | Gui Bibeau | EN | 5:49 | 2025-04-21 |
| [Context 7 MCP: Get Documentation Instantly + VS Code Setup](https://www.youtube.com/watch?v=-ls0D-rtET4) | JeredBlu | EN | 4:21 | 2025-04-21 |

Fachlicher Bezug und Grenzen: Context7 und Dokumentationszugriff über MCP; der deutsche Einstieg zeigt die MCP-Einrichtung mit Context7, behandelt Versionsbindung aber nicht vertieft. Installierte Bibliotheksversion und abgerufene Dokumentation zusätzlich abgleichen.

#### 26. Spezialisierte Subagents mit klarem Aufgabenbesitz einsetzen

Themen-ID: `specialized-subagents-and-ownership`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Claude Code Sub-Agents erklärt - Mit Claude ein Team bauen](https://www.youtube.com/watch?v=8ex-HOTYOmM) | Moritz Brandes | DE | 17:51 | 2025-10-23 |
| [Alles, was du über Claude Code Subagents wissen musst (in unter 40min)](https://www.youtube.com/watch?v=0g_ApRmfOjs) | Elias Mostafi | DE | 37:07 | 2026-08-23 |
| [Introduction to Sub Agents in GitHub Copilot \| Multi-Agent Workflows](https://www.youtube.com/watch?v=N3Yo43uZotE) | Bitovi | EN | 4:21 | 2026-03-24 |
| [How to Orchestrate Multiple GitHub Copilot Agents (Subagent Tutorial)](https://www.youtube.com/watch?v=ALXRvWs4wTg) | TechRill Academy | EN | 11:20 | 2026-03-24 |

Fachlicher Bezug und Grenzen: Subagents in Claude Code und Copilot; Demo-Rollen erzwingen noch keinen Dateibesitz.

#### 27. Kontext zwischen Agenten gezielt übergeben

Themen-ID: `agent-context-handoffs`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Effektives Context Engineering für KI Agenten](https://www.youtube.com/watch?v=dPhyDkU-0zA) | Benjamin Thorstensen | DE | 10:29 | 2025-09-13 |
| [Understanding multi-agent handoffs](https://www.youtube.com/watch?v=WTr6mHTw5cM) | LangChain | EN | 11:28 | 2025-04-03 |
| [/handoff is my new favourite skill](https://www.youtube.com/watch?v=dtAJ2dOd3ko) | Matt Pocock | EN | 12:24 | 2026-05-21 |
| [A2A Protocol (Agent2Agent) Explained: How AI Agents Collaborate](https://www.youtube.com/watch?v=Tud9HLTk8hg) | IBM Technology | EN | 8:52 | 2025-10-06 |

Fachlicher Bezug und Grenzen: Handoffs und Kontextübergaben; A2A ist Kommunikation zwischen Agenten, nicht gleichbedeutend mit einem SDK-Handoff. Das deutsche Context-Engineering-Video ist eine Ergänzung, kein direktes Handoff-Tutorial.

#### 28. Werkzeugrechte und MCP-Zugriffe begrenzen

Themen-ID: `agent-tool-and-mcp-permissions`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [MCP Security: Sicherheitsrisiken beim Model Context Protocol \| Security Podcast](https://www.youtube.com/watch?v=n9OiWOeyU-E&t=600s) | INNOQ | DE | 96:14 | 2025-12-22 |
| [Why Your MCP Client Needs a Sandbox](https://www.youtube.com/watch?v=pGce9T4E5Yw) | goose OSS | EN | 13:08 | 2025-06-19 |
| [What is Agentic Security Runtime? Securing AI Agents](https://www.youtube.com/watch?v=NH0plIdqDMk) | IBM Technology | EN | 4:59 | 2026-03-22 |
| [AI Privilege Escalation: Agentic Identity & Prompt Injection Risks](https://www.youtube.com/watch?v=xHJ0_Vm7lK8) | IBM Technology | EN | 14:35 | 2026-02-14 |

Fachlicher Bezug und Grenzen: MCP-Sicherheit, Sandbox und Rechtebegrenzung. Deutscher INNOQ-Podcast: Lernabschnitt 10:00–52:36 (42:36) zu Prompt Injection, Gegenmaßnahmen, Tool Shadowing, Human-in-the-Loop und Sandboxing, anhand veröffentlichter Kapitelmarken gewählt. Gesamtlänge 96:14; nicht als kurzes Gesamtvideo ausweisen.

#### 29. Modulgrenzen und öffentliche Schnittstellen gestalten

Themen-ID: `module-boundaries-and-public-interfaces`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Das Java-Modulsystem in der Praxis \| Serban Iordache](https://www.youtube.com/watch?v=6PuLzd5rvAc) | JAX \| Community & Konferenzen | DE | 59:50 | 2020-02-05 |
| [Introduction to Java Modules \| Java for Beginners](https://www.youtube.com/watch?v=3KP5YiKLkeo) | Microsoft Developer | EN | 12:42 | 2022-08-31 |
| [Modules in One Lesson](https://www.youtube.com/watch?v=MGX-JfMl9-Y) | Java | EN | 45:26 | 2017-10-03 |
| [How to create Modules in Java 9 - Tutorial](https://www.youtube.com/watch?v=89tplxrXJTU) | Aneesh Mistry | EN | 9:32 | 2022-01-16 |

Fachlicher Bezug und Grenzen: Java-Modulsystem, Exporte und Kapselung; Java-Mechanik ersetzt keinen fachlichen Modulzuschnitt. Deutscher JAX-Vortrag: 59:50, deshalb längere Vertiefung; eine gleichwertige kürzere deutsche Alternative bleibt zu suchen. „Modules in One Lesson“: 45:26, knapp über der bevorzugten Länge.

#### 30. Fachverhalten mit TDD absichern

Themen-ID: `tdd-for-domain-behavior`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Test-Driven Development (TDD) // deutsch](https://www.youtube.com/watch?v=71nLhdZuMk0) | the native web GmbH | DE | 6:26 | 2021-03-10 |
| [JUnit 5 Basics 12 - Test driven development with JUnit](https://www.youtube.com/watch?v=zFJdQYn9u_8) | Java Brains | EN | 6:18 | 2019-02-17 |
| [Test-Driven Development (TDD) in Java #1 - The 3 Steps of TDD](https://www.youtube.com/watch?v=eMU_hninZAs) | Codemanship | EN | 23:25 | 2020-03-18 |
| [Test-Driven Development in Java: Complete Beginner Tutorial (TDD Explained with Real Example)](https://www.youtube.com/watch?v=ZEpIYARW6Us) | Deividas Strole | EN | 9:47 | 2025-10-07 |

Fachlicher Bezug und Grenzen: RED → GREEN → REFACTOR und Java-/JUnit-Beispiele; Testfälle müssen das richtige Fachverhalten beschreiben.

#### 31. Java-Architekturregeln mit ArchUnit prüfen

Themen-ID: `archunit-for-java-architecture`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [ArchUnit: Software-Architektur bewahren von Johannes Thorn](https://www.youtube.com/watch?v=hcT2yZRxRvg) | NooK | DE | 47:23 | 2022-12-20 |
| [Java ArchUnit Test your Java architecture](https://www.youtube.com/watch?v=FAykZTP4Aa4) | Mike Møller Nielsen | EN | 15:16 | 2020-12-24 |
| [Unit Test Your Java Architecture With ArchUnit by Roland Weisleder](https://www.youtube.com/watch?v=ef0lUToWxI8) | Devoxx | EN | 43:07 | 2023-03-21 |
| [Unit Test Your Spring Architecture With ArchUnit by Roland Weisleder @ Spring I/O 2024](https://www.youtube.com/watch?v=sGmhaizFcEA) | Spring I/O | EN | 45:31 | 2024-07-16 |

Fachlicher Bezug und Grenzen: Direkte ArchUnit-Anleitungen und Architekturtests. Der deutsche Vortrag dauert 47:23 und überschreitet die bevorzugten 45 Minuten knapp; mangels belegter Kapitelmarken kein willkürlicher Ausschnitt. Spring-I/O-Beitrag: 45:31, ebenfalls knapp über der Wunschlänge.

#### 32. Deterministische Prüf-Gates im Agenten-Harness gestalten

Themen-ID: `deterministic-agent-verification-gates`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Prozesse mit GitHub Actions // deutsch](https://www.youtube.com/watch?v=DAVJ1OGNi4o) | the native web GmbH | DE | 8:31 | 2021-03-01 |
| [setting up required github PR checks (beginner - intermediate) anthony explains #315](https://www.youtube.com/watch?v=LGY1jPUso5I) | anthonywritescode | EN | 6:08 | 2021-07-19 |
| [GitHub Actions Tutorial \| Run Automated Tests](https://www.youtube.com/watch?v=uFcXrWT4f80) | Andy's Tech Tutorials | EN | 4:18 | 2023-08-27 |
| [How to use GitHub Actions \| GitHub for Beginners](https://www.youtube.com/watch?v=BQrohJ3PT7I) | GitHub | EN | 8:04 | 2026-03-16 |

Fachlicher Bezug und Grenzen: Technisch erzwungene CI-Prüfungen, Required Checks und Tests mit einem demonstrierten Fehlschlag; keine direkte Anleitung zum projektspezifischen Agenten-Harness.

#### 33. Automatisierung nach Nutzen und Kontrollpunkten auswählen

Themen-ID: `automation-value-and-gates`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Human in the Loop in n8n (Tutorial, Deutsch)](https://www.youtube.com/watch?v=UFCKZ6RjUv4) | Philip Thomas | DE | 13:41 | 2025-08-17 |
| [Why AI Agents Need A Human in the Loop Now](https://www.youtube.com/watch?v=cmEJ-5zYKHA) | IBM Technology | EN | 7:27 | 2026-03-10 |
| [What is Human In The Loop with AI? How HITL Shapes AI Systems](https://www.youtube.com/watch?v=9iS-YYLIXiw) | IBM Technology | EN | 10:44 | 2026-03-17 |
| [Building AI Agents for Real-World Problems & Workflows](https://www.youtube.com/watch?v=4Vg2aVtrX8k) | IBM Technology | EN | 7:53 | 2026-06-18 |

Fachlicher Bezug und Grenzen: Human-in-the-Loop und zuverlässige Workflow-Kontrollpunkte; n8n-Beispiel und allgemeine Agentengrundlagen, kein Beweis wirtschaftlichen Nutzens.

#### 34. Java-/Spring-Migrationen mit OpenRewrite durchführen

Themen-ID: `java-spring-migrations-with-openrewrite`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Legacy Code angstfrei mit der Golden Master Technik ändern](https://www.youtube.com/watch?v=3wPZGfSiWYw) | ABAPConf | DE | 31:03 | 2022-09-14 |
| [Upgrading your Java & Spring Boot applications with OpenRewrite in IntelliJ](https://www.youtube.com/watch?v=e4R6AZHpAD8) | Dan Vega | EN | 13:52 | 2024-03-15 |
| [Migrate to Java 25 using OpenRewrite](https://www.youtube.com/watch?v=6LGL64AwEEY) | Moderne and OpenRewrite | EN | 4:41 | 2025-10-20 |
| [Automate Spring Boot 2.x to 3.x Migration With OpenRewrite  \| @Javatechie](https://www.youtube.com/watch?v=50mhP1SBTis) | Java Techie | EN | 21:34 | 2024-03-22 |

Fachlicher Bezug und Grenzen: Drei direkte OpenRewrite-Anleitungen. Die deutsche Ergänzung erklärt Golden-Master-Tests als Schutz bei Legacy-Änderungen in ABAP, nicht OpenRewrite selbst; direktes deutsches OpenRewrite-Tutorial bleibt eine Suchlücke. Zielversion und Rezeptlizenz separat prüfen.

#### 35. Webabläufe mit Playwright prüfen

Themen-ID: `playwright-for-web-flows`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Webseiten testen mit Playwright - German Perl/Raku Workshop 2023](https://www.youtube.com/watch?v=-4FpUpePvFM) | German Perl Workshop - gpw | DE | 14:35 | 2023-10-20 |
| [Playwright Assertions: Avoid Race Conditions with This Simple Fix!](https://www.youtube.com/watch?v=1VxkHP8vfGg) | Playwright | EN | 1:27 | 2025-02-13 |
| [Playwright Beginner Tutorial 9 \| Assertions](https://www.youtube.com/watch?v=hYNOFle3zic) | Automation Step by Step | EN | 29:49 | 2022-09-08 |
| [Playwright Assertions: Locator assertions vs Generic assertions explained.](https://www.youtube.com/watch?v=e11z1kyLzDM) | Artem Bondar | EN | 11:11 | 2025-05-01 |

Fachlicher Bezug und Grenzen: Deutsche Einführung mit einfachen Browsertests aus einem Perl-Webanwendungs-Kontext, dazu englische Assertion-Tutorials. Beispiele mit stabilen Locators und Auto-Waiting gegen aktuelle Playwright-Dokumentation abgleichen.

#### 36. Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen

Themen-ID: `web-xss-and-safe-dom`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Schwachstellen einfach erklärt: Cross-Site-Scripting (XSS)](https://www.youtube.com/watch?v=Pve8B9RDa1o) | MindBytes GmbH | DE | 4:36 | 2024-05-06 |
| [XSS einfach erklärt – Einführung in Cross-Site Scripting (Reflect, Stored & DOM XSS)](https://www.youtube.com/watch?v=ORggQtJBw8w) | Hood Informatik | DE | 23:25 | 2025-01-29 |
| [DOM-Based Cross-Site Scripting (DOM XSS) Explained](https://www.youtube.com/watch?v=_3Wgx1FabIo) | Andrew Hoffman | EN | 7:49 | 2021-08-18 |
| [OWASP BeNeLux Day Don't trust the DOM: Bypassing XSS mitigations via script gadgets by S. Lekies](https://www.youtube.com/watch?v=rssg--FP1AE) | OWASP Foundation | EN | 42:14 | 2017-11-27 |

Fachlicher Bezug und Grenzen: XSS-Arten, DOM-XSS und Grenzen von Schutzmaßnahmen; Angriffsdemos dienen dem Verständnis der Prävention.

#### 37. Web- und KI-Risiken mit passenden Baselines prüfen

Themen-ID: `web-security-baseline`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [OWASP Top 10 2025: Das sind die aktuellen Sicherheitsrisiken \| Interview mit Christian Wenz](https://www.youtube.com/watch?v=R1KSXSd_lmk) | Developer World | DE | 16:51 | 2026-01-08 |
| [OWASP Top 10 2025 explained:  What it is, what changed, and how to use it](https://www.youtube.com/watch?v=qzvfKXynk-I) | Codific | EN | 6:50 | 2026-02-19 |
| [Top 10 Security Risks in AI Agents Explained](https://www.youtube.com/watch?v=soFWS8NBcSU) | IBM Technology | EN | 8:58 | 2026-03-23 |
| [Securing AI Agents: How to Prevent Hidden Prompt Injection Attacks](https://www.youtube.com/watch?v=5ZA1lTxTH3c) | IBM Technology | EN | 10:07 | 2026-01-10 |

Fachlicher Bezug und Grenzen: OWASP Web Top 10:2025 plus eigenständige Agentenrisiken; nicht als vollständige ASVS- oder Header-Prüfung verstehen.

#### 38. UI-Komponenten entwerfen und sichtbar prüfen

Themen-ID: `ui-design-system-workflow`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Storybook Crashkurs - Komponentenbasierte UI Entwicklung](https://www.youtube.com/watch?v=UPrnl4gBmhc) | Fabian Hiller | DE | 26:22 | 2020-11-28 |
| [Intro to Design Systems \| Penpot Hands-On Demo](https://www.youtube.com/watch?v=kyu2L-4zeWg&t=152s) | Penpot | EN | 58:43 | 2024-11-27 |
| [Component testing in Storybook with play functions](https://www.youtube.com/watch?v=dcuzwCHI940) | Chromatic | EN | 6:56 | 2022-09-08 |
| [Accessibility Testing in Storybook with Axe and Playwright](https://www.youtube.com/watch?v=63nQ9qC3Tck) | newline | EN | 7:59 | 2023-04-11 |

Fachlicher Bezug und Grenzen: Storybook, Penpot und Komponenten-/Accessibility-Tests; bei älteren Tutorials aktuelle APIs gegen Dokumentation prüfen. Penpot: Lernabschnitt 02:32–43:22 (40:50) zu Shared Libraries, Farben, Typografie und Komponenten. Gesamtlänge 58:43; Publishing und Token-Vorschau sind zusätzliche Vertiefung.

#### 39. Java-API-Dokumentation gezielt erzeugen

Themen-ID: `technical-documentation-generation`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Javadoc - Dokumentationskommentare](https://www.youtube.com/watch?v=heIVLnVXfmk) | nerdwest | DE | 13:02 | 2020-03-14 |
| [Java-Dokumentationen erzeugen \| Einstieg in Java](https://www.youtube.com/watch?v=pWfffdV0VUY) | Rheinwerk | DE | 7:05 | 2014-06-27 |
| [JavaDoc Hits the Markdown on Comments - Inside Java Newscast #68](https://www.youtube.com/watch?v=AvAIFq4fLPw) | Java | EN | 6:53 | 2024-05-01 |
| [JEP Explained. JEP 467: Markdown Documentation Comments](https://www.youtube.com/watch?v=hEWU2OMtNnw) | IntelliJ IDEA, a JetBrains IDE | EN | 44:58 | 2024-10-16 |

Fachlicher Bezug und Grenzen: Javadoc-Grundlagen und neuere Markdown-Kommentare; JDK-23-Neuerungen sind keine vollständige JDK-26-Referenz.

#### 40. Abhängigkeiten und Sicherheitslücken risikobasiert bewerten

Themen-ID: `dependency-security-assessment`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Supply Chain Security Explained - deutsch - 4k - 8k](https://www.youtube.com/watch?v=2cEKEEJraDk) | Sven Ruppert - german | DE | 31:18 | 2022-03-21 |
| [Preventing Software Supply Chain Attacks With Dependency Management Best Practices](https://www.youtube.com/watch?v=7IoXciSucw4) | César Soto Valero | EN | 15:00 | 2023-10-14 |
| [Software supply chain and vulnerability assessment with syft and grype](https://www.youtube.com/watch?v=ee-jtLAmGnI) | DFIRScience | EN | 7:18 | 2022-01-18 |
| [Supply Chain Vulnerabilities - CompTIA Security+ SY0-701 - 2.3](https://www.youtube.com/watch?v=WqvCJLpwExY) | Professor Messer | EN | 9:12 | 2023-11-17 |

Fachlicher Bezug und Grenzen: Supply Chain, Dependency Management und Schwachstellenbewertung; Scannerfunde im konkreten Einsatz priorisieren.

#### 41. KI-generierte Änderungen prüfen und übernehmen

Themen-ID: `review-and-accept-ai-generated-changes`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Code-Reviews // deutsch](https://www.youtube.com/watch?v=b35FvjoUqUs) | the native web GmbH | DE | 4:34 | 2021-01-27 |
| [How I Review AI-Generated Code](https://www.youtube.com/watch?v=As2xy_cSx00) | Owain Lewis | EN | 14:20 | 2026-03-27 |
| [How Developers Secure AI-Generated Code: 5 Security Best Practices](https://www.youtube.com/watch?v=X0UI0O8YzJM) | IBM Technology | EN | 11:27 | 2026-09-14 |
| [How AI Is Changing Code Reviews & Software Development](https://www.youtube.com/watch?v=c57vAe-mMLo) | IBM Technology | EN | 14:09 | 2026-08-31 |

Fachlicher Bezug und Grenzen: Menschliches Diff-Review und Sicherheit KI-generierten Codes; automatisierte Reviews ersetzen keine Freigabe.

#### 42. Parallelität gegen einen seriellen Ablauf messen

Themen-ID: `compare-parallel-and-serial-agent-work`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [n8n Evaluation Trigger: AI Agents endlich zuverlässig testen (deutsch)](https://www.youtube.com/watch?v=tMl1G777pv4) | David Borst | DE | 8:44 | 2025-08-16 |
| [Single Agent Vs. Multi-Agent Systems in AI \| How To Choose The Right Architecture](https://www.youtube.com/watch?v=2lTFI6FAqhk) | Snowflake Developers | EN | 3:44 | 2025-11-05 |
| [Observability and Evals for AI Agents: A Simple Breakdown](https://www.youtube.com/watch?v=FDVdLrloFOw) | LangChain | EN | 14:44 | 2026-02-17 |
| [Evaluating and Debugging Non-Deterministic AI Agents](https://www.youtube.com/watch?v=4u64WEuQHYE) | Google Cloud Tech | EN | 7:14 | 2025-04-30 |

Fachlicher Bezug und Grenzen: Evaluation, Observability und Single-/Multi-Agent-Abwägung. Das deutsche n8n-Tutorial erklärt Evaluation, nicht einen seriell-parallelen Coding-Benchmark; einen solchen Vergleich muss das Team selbst messen. Das deutsche Beispiel nutzt ein LLM als Bewerter; solche Bewertungen sind selbst zu prüfen und kein deterministisches Qualitäts-Gate.

#### 43. Bug-Triage bis zum PR schrittweise automatisieren

Themen-ID: `bug-triage-and-pr-automation`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [GitHub und Visual Studio Code Tipps: Der Agent-Modus von GitHub Copilot und der MCP-Server](https://www.youtube.com/watch?v=TUq-Q--fjcM) | Tom Wechsler | DE | 26:14 | 2025-10-19 |
| [How the GitHub Copilot coding agent works \| GitHub Checkout](https://www.youtube.com/watch?v=1GVBRhDI5No) | GitHub | EN | 6:58 | 2025-05-30 |
| [Use GitHub Copilot Coding Agent to solve open issues in a GitHub repository](https://www.youtube.com/watch?v=sMVESy4jHLg) | The Code Wolf | EN | 12:59 | 2025-09-04 |
| [Jira Ticket ➡️ GitHub Pull Request (Automatically!) with Custom Copilot Agents and Agentic Workflows](https://www.youtube.com/watch?v=kaIz0X_YByE) | Mickey Gousset | EN | 24:54 | 2026-03-04 |

Fachlicher Bezug und Grenzen: Copilot-Agenten von Issue bis Patch/PR; deutsche Ergänzung erklärt Agentenmodus und MCP, nicht den gesamten Triageprozess. Automatische externe Aktionen bleiben an eigene Freigaben gebunden.

#### 44. Lokale und souveräne KI-Stacks bewusst erproben

Themen-ID: `local-model-stack-evaluation`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Was ich über lokale KI gelernt habe](https://www.youtube.com/watch?v=M1j_uRqKMKI) | c't 3003 | DE | 22:28 | 2026-08-28 |
| [Lokale KI in VS Code: Ollama Guide & Modellwahl](https://www.youtube.com/watch?v=i96JY0zzEZg) | Programmieren lernen | DE | 10:38 | 2026-09-13 |
| [Learn Ollama in 15 Minutes - Run LLM Models Locally for FREE](https://www.youtube.com/watch?v=UtSSMs6ObqY) | Tech With Tim | EN | 14:01 | 2025-01-13 |
| [How to Run a Local AI Agent with Ollama, Qwen 3, and LangGraph](https://www.youtube.com/watch?v=MAZUI4jGlU8) | PyCharm, a JetBrains IDE | EN | 12:48 | 2026-04-09 |

Fachlicher Bezug und Grenzen: Lokaler Betrieb, Modellwahl und Ollama-Agenten. Qwen-Grundlagen, keine vollständige Hermes-/Bionic-Abdeckung oder Sicherheitsgarantie.

#### 45. Agenten-Harness mit technischen Grenzen gestalten

Themen-ID: `coding-harness-design`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Das Geheimnis guter KI-Agents: Die Harness-Schicht erklärt](https://www.youtube.com/watch?v=7_F2rGhK0iE) | Benjamin Thorstensen | DE | 9:47 | 2025-12-12 |
| [Harness Engineering Explained in 22 Minutes](https://www.youtube.com/watch?v=UmZytjgs2eo) | Shaw Talebi | EN | 22:39 | 2026-07-19 |
| [Harness Engineering: Building the Production Cage for Powerful Domain Agents — Mike Chambers, AWS](https://www.youtube.com/watch?v=gxVZ_1tuuq4) | AI Engineer | EN | 20:46 | 2026-09-14 |
| [Why Your MCP Client Needs a Sandbox](https://www.youtube.com/watch?v=pGce9T4E5Yw) | goose OSS | EN | 13:08 | 2025-06-19 |

Fachlicher Bezug und Grenzen: Harness-Aufbau, Produktionsgrenzen und Sandbox; Sicherheitsbehauptungen am eigenen Bedrohungsmodell prüfen.

#### 46. Git-Commits klein und nachvollziehbar halten

Themen-ID: `focused-git-commits`

| Video | Kanal | Sprache | Gesamtlänge | Veröffentlicht |
| --- | --- | --- | --- | --- |
| [Git add - Die staging area sinnvoll nutzen](https://www.youtube.com/watch?v=Tl9PV3Kso_k) | slugaIO - Full AdTech Stack Developer | DE | 5:14 | 2020-05-01 |
| [Git Interactive staging](https://www.youtube.com/watch?v=zzh7cRpTNS4) | Steven Lee | EN | 6:18 | 2020-05-17 |
| [Atomic Commits Explained: Stop Writing Useless Git Messages](https://www.youtube.com/watch?v=zH0mn7gktsQ) | PHP Architect | EN | 6:28 | 2025-06-17 |
| [Git Basics Atomic Commits](https://www.youtube.com/watch?v=16xT6BYoVr4) | SkillBakery Studio | EN | 2:32 | 2022-04-13 |

Fachlicher Bezug und Grenzen: Staging und atomare Commits; kleine Commits müssen fachlich zusammenhängend und lauffähig bleiben.

## Status eines Themas auf deutsch anzeigen (nicht "active" etc.)

Status auf deutsch (nicht "active" etc.)

- im Source Code selbst gern englisch

## Weitere UI-Verbesserungen

- eine Texteingabe, die Themen auch über Begriffe in der Beschreibung findet (etwa „Ope“ für „Open Spec“)
- ein kompakten alternativer Einstieg über einen oder mehrere Lernpfade auf derselben Seite.

## Verwendung von nmp prüfen, ggf. regulieren

Verwendung von nmp prüfen, ggf. regulieren

## OWASP Dependency Check einbinden

OWASP Dependency Check einbinden

- Immer? Nach jeder Änderung von... was? Am Ende vor dem Commit? Vor jedem install...?

## Regelmäßige Aktivitäten planen und zeitgesteuert auf Ausführung hinweisen

- Generell überlegen: Vielleicht eine Liste der regelmäßigen Aktivitäten machen, die einmal täglich geprüft und dann während der Entwicklung
  vorgeschlagen wird?
    - z.B.:
        - Auf Secrets prüfen (z.B. mit TruffleHog?!)
        - Links (Primärquellen und Sekundärquellen) auf Erreichbarkeit und Sicherheitsrisiken prüfen, ggf. ersetzen (Themen höchstens
          minimal anpassen; Fragen bleiben gleich)
        - Aktualisierung der Inhalte prüfen
        - Auf personenbezogene Daten prüfen und anbieten, sie zu entfernen oder zu anonymisieren

Vielleicht eine eigene Datei, die dann durchgegangen wird, wenn ein Kalenderdatum, DAS IN DER ZENTRALEN DOKU STEHT, erreicht oder
überschritten ist? (Dieses Kalenderdatum muss dann nach der Abarbeitung weitergesetzt werden.)

## Zunächst nur Tests der jeweiligen Vertikale laufen lassen?

Nur Tests der Vertikalen laufen lassen? Alle Tests erst, wenn die grün sind? Vor dem Commit immer alle Tests

## Impressum und Datenschutz-Policy einfügen. Haftungsausschluss

Impressum und Datenschutz-Policy einfügen. Haftungsausschluss Neue Vertikale "Legal" o.Ä.

## Link zu ChatGPT zum Lenern

Ein Link oder Button öffnet ChatGPT mit dem Prompt "Das hier möchte ich lernen: " und dann dem vollständigen Texte des Themas inkl. Primär-
und vielleicht Sekundärquellen

## Link zur Google-KI zum Lernen

Ein Link oder Button öffnet die online-Google-KI mit dem Prompt "Das hier möchte ich lernen: " und dann dem vollständigen Texte des Themas
inkl. Primär- und vielleicht Sekundärquellen

## Bei YouTube suchen

Ein Link öffnet YouTube und sucht nach einigen Kernbegriffen (vorher statisch aus den Inhalten extrahiert) - alternativ Suche nach Deutschen
oder Englischen Begriffen?

## NF: Bezeichnungen vereinheitlichen

Wir haben nur wenige fachliche Dinge in der Anwendung. Die identifizieren und auf einheitliche Begriffe festlegen (mit einheitlichen)
Übersetzungen. Die bisherigen "unscharfen Synonyme" (u.a. "Katalog" oder "Karte") aus dem Glossar entfernen und im Code umbenennen.
(Ubiquitous Language)

## NF: Regelmäßig nachfragen

Regelmäßig nachfragen:

- Können wir ein gecodetes kleines Tool gebrauchen, dass dir beim nächsten Mal bei Aufgabe X hilft?
- Würde uns ein eigener Skill helfen?
- Sollte man die Doku fürs nächste Mal anpassen, um Zeit / Tokens zu sparen?

## NF: Akteure klar benennen

Statt User oder Benutzer oder Nutzer wollen wir zukünftig differenzieren:

- Der Lernende: Der Nutzer der installierten Anwendung
- Der Entwickler: Der menschliche User, der die Entwicklung dieser Anwendung steuert
- Die KI: Das LLM, hier in der Regel Codex, die große Teile der Entwicklung durchführt

Bezeichnungen überall umbenennen. Auch ins glossar eintragen, auch mit englischen Übersetzungen.

## NF: Language Server einbinden

Language Server einbinden

Ziel: Suchen und Code-Bearbeitung beschleunigen

- LSP
    - IntelliJ MCP? oder ACP

## NF: Reihenfolge der Themen zusammenziehen

Führe neue Karte und ihre Einfügeposition an einer Stelle in der Themen-Vertikale zusammen. Entferne die getrennte ID-Liste `additionsAfter`
als zweite Pflegequelle. Sichere mit einem zunächst roten Test ab, dass jede neue Karte genau einmal erscheint, alle 26 (?) bisherigen
Themen ihre relative Reihenfolge behalten und jeder Pfad in Listenreihenfolge verläuft. Ändere weder öffentliche Themenverträge noch
Pfadinhalte.

## Detaillierter redaktionelle Metadaten nur auf Wunsch zeigen

Bei redaktionelle Metadaten nur fachlich geprüft anzeigen ( "September 2026") - den Rest erst auf Klick aufklappen

## NF: Redaktionelle Metadaten zusammenziehen

Fasse die gleichartigen Helfer in `newLearningTopics.ts` und `expandedLearningTopics.ts` zu einem internen Helfer der Themen-Vertikale
zusammen. Halte quellenspezifische Prüfdaten weiterhin einzeln änderbar; eine spätere Prüfung einer Quelle darf nicht automatisch alle
anderen Quellen umdatieren. Sichere bestehende Veröffentlichungs-, Prüf- und Wiedervorlagedaten durch Tests ab.

## NF: Empfehlungen für AGENTS.md-Dateien hart prüfen

Empfehlungen für AGENTS.md-Dateien aktuell ermitteln und mit Architektur-Tests (oder Commit-Hooks?) hart prüfen.

Erster Ansatz:

- Keine AGENTS.md-Datei soll länger als 150 (?) Zeilen sein.
- Es gibt eine AGENTS.md-Datei auf oberster Ebene (weitere sind erlaubt)

Auch CLAUDE.md anlegen, Verweis (mit @) auf AGENTS.md-Datei oder nur als Symlink.

Außerdem einmal prüfen, ob es widersprüchliche Regeln im Projekt gibt.

## Initial in einem Projekt angewendet / umfassend in einem Projekt umgesetzt

Zusätzlich zu "nicht gelernt" / "gelernt" gibt es einen weiteren Status je Thema: Die Praxiserfahrung (--> Glossar!).

Praxiserfahrung wird manuell angegeben - dazu gibt es in der Themenliste (--> Glossar!) ein weiteres Icon rechts neben dem Testfragen-Icon,
das eine kleine Ansicht öffnet.

- Die neue Ansicht ist gestaltet wie die Testfragen-Ansicht (Lernchecks)
- Der Benutzer wählt dort manuell zwischen:
    - Nicht angewendet
    - Initial in einem Projekt angewendet
    - Umfassend in einem Projekt umgesetzt
    - In Leib und Blut übergegangen (bitte weniger emphatisch formuliert)
- Es muss 1 Auswahl getroffen werden, die Auswahl wird sofort gespeichert
- Alternativ kann der User auch abbrechen, denn bleibt die bisherige Auswahl erhalten.

Implizit gilt für alle (alten und neuen) Themen: "Nicht angewendet"

Die Praxiserfahrung wird (analog zum grünen Haken für "gelern") in der Themenliste durch ein Symbol angezeigt.

- Nicht angewendet: Kein Symbol
- Initial in einem Projekt angewendet: Symbol soundso
- Umfassend in einem Projekt umgesetzt: Symbol soundso
- In Leib und Blut übergegangen: Symbol soundso
- Falls nötig werden Symbole nach den Projektregeln als Grafiken erzeugt (oder textuelle Zeichen in einer Farbe)

## Themenliste und Themendetails responsiv nebeneinander oder einzeln anzeigen

Bei ausreichend Platz stehen Themenliste und gewähltes Thema nebeneinander. Auf dem Handy öffnet sich das Thema in einer eigenen Ansicht;
bei jedem Zurückkehren zur Liste, auch nach einem Lerncheck, bleiben Filterung und Scrollposition erhalten. Der Entwurf berücksichtigt
spätere externe Aktionen zum Thema, ohne dafür zunächst ungenutzte Bedienelemente anzuzeigen.

Vertikalen: Themen

## Nichtbestehen auf Wunsch lokal speichern

Hat der User einen Lerncheck zu Ende durchgeführunt und NICHT bestanden, erhält er beim Verlassen der Übersicht eine Rückfrage: "Thema auf
nicht bestanden zurücksetzen?"

- (NUR) wenn der User das bestätigt, wird das Bestehen dieses Themas lokal wieder gelöscht. Alle anderen Elemente des Lernstands bleiben
  erhalten!

Der Browser-E2E-Test deckt Nichtbestehen mit und ohne Löschen des Lernstands UND DEN ERHALT ANDERER, BEREITS BESTANDENER THEMEN ab.

Außerdem werden alle Begriffe im Glossar mit genau einem englischen Begriff ergänzt (sofern noch nicht vorhanden). Betroffene englische
Bezeichner werden innerhalb der beiden Vertikalen vereinheitlicht, ohne Fachlogik zu ändern.

Vertikalen: Lernchecks, Lernfortschritt

## Nur die vorgegebenen Vertikalen bearbeiten

Jede aktivierte Spec muss die max. 2 Vertikalen nennen, die geändert werden sollen. Beim Commit (?) prüfen, ob wirklich maximal diese
angegebenen Vertikalen geändert wurden (sowohl Tests als auch Prod-Code - zusätzlich app und shared erlaubt sowie docs. main.tsx vielleicht
auf Anfrage. Bei den Tests auch architecture und quality.

## Sicherstellen, dass Architektur oder Bibliotheken nicht unbemerkt geändert werden

Sicherstellen, dass Architektur oder Bibliotheken nicht unbemerkt geändert werden. Möglicherweise gewisse Architekturen, Bibliotheken oder
Toolaufrufe verbieten?

## Bereits gestellte Fragen je Thema lokal merken

Die App merkt sich auf dem Gerät je Thema, welche Fragen bereits gestellt wurden. Neue Durchläufe bevorzugen ausschließlich noch nicht
gestellte Fragen, bis der Pool des Themas ausgeschöpft ist. Danach beginnt ein neuer Zyklus. Innerhalb eines Durchlaufs erscheint keine
Frage doppelt.

Die spätere Änderungs-Spec legt fest, wann eine abgebrochene Frage als gestellt gilt, wie ein Rest von weniger als fünf Fragen mit dem
nächsten Zyklus verbunden wird und wie veraltete Fragen-IDs nach Katalogänderungen behandelt werden. Ohne gespeicherten Stand bleibt der
Fragenablauf nutzbar. Browser-E2E-Tests prüfen mehrere Durchläufe, Ausschöpfung, Neustart und Abbruch.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Lokale Fragehistorie und Zyklusregel knapp in Produktstand und Architektur ergänzen.

## Themen auf einer Landkarte erkunden

Die sechs Grundlagenthemen erscheinen als frei navigierbare grafische Landkarte mit fachlichen Querverbindungen. Lernende können jedes Thema
ohne Sperre auswählen. Die vorhandene zugängliche Liste bleibt als Fallback nutzbar, auch wenn die Grafik ausfällt. Die Landkarte liest
Katalog und bestätigten Fortschritt nur über kleine öffentliche Verträge und delegiert Änderungen an die zuständige Vertikale.
Browser-E2E-Tests prüfen Auswahl, Querverbindung und Listenfallback.

Falls wir inzwischen den 01.12.2026 oder später haben, werden in dieser Story die Quellen der vorhandenen Themen zu `AGENTS.md`,
Research/Plan/Tasks und OpenSpec erneut fachlich geprüft und bei Bedarf aktualisiert. - Falls Datum noch nicht erreicht, dann diesen Auftrag
in die nächste Story verschieben.

Vertikalen: Themen, Landkarte

Dokumentation nach Umsetzung: Landkarte, Fallback und Vertikalgrenzen knapp in Produktstand und Architektur ergänzen.

## App installieren und Kernabläufe offline nutzen

Nach dem ersten erfolgreichen Laden ist die öffentliche GitHub-Pages-App installierbar und zeigt offline Landkarte, Liste, Themen,
Lernchecks und bereits bestätigten Fortschritt. Der versionierte Service-Worker-Cache hält App und Katalog einschließlich Fragen je Build
zusammen; Updates mischen keine Build-Stände und überschreiben keinen lokalen Fortschritt. Der öffentliche Build enthält nur App und
Katalog, keine persönlichen Daten oder extern nachgeladenen Laufzeitressourcen. Externe Quellen können offline als nicht verfügbar
erscheinen und öffnen sich nur nach bewusster Aktion. Browser- und PWA-Prüfungen decken Erstladen, Offline-Nutzung und kontrollierte Updates
ab. Die neuen PWA-/Offline-Gates werden nach grünem Nachweis in der Qualitätsstrategie dokumentiert.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Installation, Offline-Grenzen, Cache-Strategie und tatsächlich grüne Prüfungen knapp in Produktstand,
Architektur und Qualitätsstrategie ergänzen.

## Kernabläufe und Release auf Zielbrowsern abnehmen

Lernende können die installierbare App auf den unterstützten Geräten durchgängig nutzen: ein Thema wählen, einen Lerncheck wiederholen,
Fortschritt bestätigen und die Kerninhalte nach dem Erstladen offline öffnen.

Die vollständige Pflichtsuite ist grün: Format, Lint, Typen, Inhalts- und Schema-Validierung, Unit- und Komponententests, Browser-E2E,
Architekturgrenzen, bekannte Schwachstellen und unzulässige Lizenzen, Produktionsbuild sowie PWA-/Offline-Prüfung. Insbesondere werden
Querverbindungen, Themen und Metadaten, Bestehen und Nichtbestehen mit anderem Fragensatz, bestätigter Fortschritt über Reload,
Offline-Nutzung und der Ausfall eines optionalen Quellenlinks geprüft. Automatisierte Tests decken definierte Desktop- und mobile Viewports
ab. Der GitHub-Pages-Release durchläuft dieselben Pflichtprüfungen; ein fehlendes oder fehlschlagendes Gate verhindert die Veröffentlichung.
GitHub Dependency Review und Dependabot ergänzen die Abhängigkeitsprüfung; Updates werden getrennt getestet und bewusst freigegeben.

Installation und Kernabläufe werden zusätzlich auf Samsung Internet/Android, Chrome und Firefox unter Windows 11 sowie Safari auf einem
aktuellen iPhone geprüft. Browser, Version, Ablauf und Ergebnis werden in der Änderungs-Spec beziehungsweise dem Release-Nachweis
dokumentiert. Die bereits eingerichtete GitHub-Pages-Bereitstellung wird mit der installierbaren Version erneut geprüft. Nach grünem
Nachweis beschreibt die Qualitätsstrategie die tatsächlich eingerichteten Gates und Geräteprüfungen.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Unterstützte Browser, nachgewiesene Abläufe und Release-Gates knapp in Produktstand und Qualitätsstrategie
ergänzen.

## Quellen und Videos gezielt erkunden

Lernende sehen je Thema, welche Quellen und Videos verfügbar sind, erkennen deren Typ und Aktualität und öffnen externe Angebote nur nach
bewusster Aktion. Die redaktionelle Pflege bleibt im öffentlichen Katalog; die App bietet keine Inhaltsbearbeitung. Ein ausgefallener
externer Link blockiert das Thema nicht. Browser-Tests prüfen Anzeige und Öffnung.

Vertikale: Themen

Dokumentation nach Umsetzung: Tatsächliche Quell- und Videodaten, Pflege und Öffnungsverhalten knapp in Produktstand und redaktioneller
Richtlinie ergänzen.

## Aktualisierte und ersetzte Themen nachvollziehen

Lernende erkennen bei einem geänderten oder ersetzten Thema das fachliche Prüfdatum und gegebenenfalls einen Nachfolger. Ein archiviertes
Thema bleibt lesbar, damit frühere Lernschritte nachvollziehbar sind. Redaktionell werden fachliche Prüfung und bloße Textänderung getrennt
erfasst. Tests prüfen Archivierung und Nachfolgerhinweis.

Vertikale: Themen

Dokumentation nach Umsetzung: Archivierungs- und Nachfolgerregeln knapp in Produktstand und redaktioneller Richtlinie ergänzen.

## Persönliche Hinweise zu Themen festhalten

Lernende können zu einem Thema eine lokale Notiz oder einen Fehler- und Aktualitätshinweis festhalten und später wiederfinden. Hinweise
enthalten Themen-ID, Datum und kurze Begründung; sie bleiben ohne bewussten Export auf dem Gerät und gelangen nicht nach Git. Browser-Tests
prüfen Speichern, Wiederfinden und Trennung vom öffentlichen Katalog.

Vertikalen: Themen, Lernfortschritt

Dokumentation nach Umsetzung: Lokale Hinweise und ihren Datenfluss knapp in Produktstand, Architektur und redaktioneller Richtlinie
ergänzen.

## Lernziele aus dem eigenen Fortschritt setzen

Lernende können für ein Thema ein persönliches Ziel setzen, ändern und abschließen. Das Ziel zeigt den bestätigten Fortschritt, ohne ihn zu
ersetzen, und bleibt nach Reload erhalten. Browser-Tests prüfen diese Abläufe.

Vertikalen: Lernfortschritt, Lernziele

Dokumentation nach Umsetzung: Lernziele und ihre Beziehung zum Fortschritt knapp in Produktstand und Architektur ergänzen.

## Termine für Lernziele planen

Lernende können einem Ziel einen lokalen Termin geben, ändern oder entfernen und fällige Ziele in der App erkennen. Termine werden nicht
öffentlich übertragen. Browser-Tests prüfen Fälligkeit und Änderungen.

Vertikale: Lernziele

Dokumentation nach Umsetzung: Terminverhalten knapp in Produktstand und Architektur ergänzen.

## Erinnerungen für fällige Lernziele einstellen

Lernende können für ein Ziel eine Erinnerung ein- und ausschalten. Fällige Erinnerungen erscheinen beim Öffnen der App, ohne Zeitdruck oder
Streaks. Browser-Tests prüfen Anzeige und Abschalten.

Vertikale: Lernziele

Dokumentation nach Umsetzung: Erinnerungsregeln knapp in Produktstand und Architektur ergänzen.

## Mutation Testing einführen?

Mutation Testing einführen?

## Benachrichtigungen für Erinnerungen erlauben

Lernende können Benachrichtigungen für bestehende Erinnerungen ausdrücklich aktivieren und wieder deaktivieren. Ohne Berechtigung bleiben
Erinnerungen in der App sichtbar. Die Änderungs-Spec klärt Browserunterstützung und den gewählten Mechanismus; Tests prüfen Zustimmung und
Fallback.

Vertikalen: Lernziele, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Berechtigungen, unterstützte Browser und Fallback knapp in Produktstand, Architektur und Qualitätsstrategie
ergänzen.

## Für TDD: TIA Parasoft

Für TDD: TIA Parasoft

## Persönliche Daten exportieren und wiederherstellen

Lernende können Fortschritt, Ziele und Hinweise bewusst als Datei exportieren und auf einem Gerät wieder importieren. Vor dem Import sehen
sie, welche Daten ersetzt oder zusammengeführt würden, und bestätigen die Aktion. Ungültige Dateien verändern keine vorhandenen Daten.
Browser-Tests prüfen Export, Vorschau, Import und Fehlerfall.

Vertikalen: Lernfortschritt, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Exportformat, Importregeln und Datenschutz knapp in Produktstand und Architektur ergänzen.

## Inhaltsversionen von Themen und gelerntem Stand berücksichtigen

Erst mit dieser Story erhalten Themen fachliche Inhaltsversionen. Jede Änderung an einem Thema erzeugt eine neue Inhaltsversion. Zusätzliche
Fragen dürfen jederzeit zu einer bestehenden Inhaltsversion hinzukommen, ohne deren Nummer zu ändern. Quellen und Fragen sind jeweils einer
konkreten Inhaltsversion zugeordnet.

Wird ein Thema beantwortet, wird die zugehörige Inhaltsversion beim Speichern des Lernstands mitgeführt. Die Anzeige unterscheidet, ob ein
Thema in der aktuellen Inhaltsversion oder nur in einer älteren gelernt wurde. Ein späterer Versionswechsel löscht den bisherigen Lernstand
nicht. **Offene Frage für die spätere Spec:** Wird die Version schon nach jeder Antwort oder erst nach bewusster Bestätigung dauerhaft
gespeichert? Die Änderungs-Spec legt außerdem die genaue Versions- und Migrationsregel fest, auch für Lernstand ohne bisherige
Inhaltsversion und für reine Quellenänderungen. Browser-Tests prüfen Lernen, Versionswechsel, ältere Lernstände und zusätzliche Fragen ohne
Versionswechsel.

Bis zur Umsetzung dieser Story gibt es keine fachlichen Inhaltsversionen. Eine technische App- oder Katalog-Buildnummer ist davon getrennt.
Die betroffenen Vertikalen Themen, Lernchecks und Lernfortschritt werden für die Umsetzung in Schritte mit höchstens zwei Vertikalen pro
fachlichem Commit geschnitten.

Dokumentation nach Umsetzung: Versionsregeln und Bezug von Fragen, Quellen und Lernstand knapp in Produktstand, Architektur und
redaktioneller Richtlinie ergänzen.

## Persönlichen Zustand ohne Login zwischen Geräten synchronisieren

Lernende können ihren bestätigten persönlichen Zustand bewusst zwischen Geräten abgleichen, ohne Login oder serverseitige
Benutzerverwaltung. Die Änderungs-Spec prüft vor der Implementierung eine sichere, praktikable Lösung und legt Zustimmung,
Konfliktbehandlung, Löschung und Ausfallverhalten fest. Die bestehende lokale Nutzung bleibt unabhängig von einer Verbindung möglich.
Browser-Tests prüfen Abgleich, Konflikt und Offline-Fallback.

Vertikalen: Lernfortschritt, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Tatsächlichen Datenfluss, Grenzen und Sicherheitsentscheidung knapp in Produktstand und Architektur ergänzen.

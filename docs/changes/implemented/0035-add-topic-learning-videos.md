## Lernvideos als Sekundärquellen für alle Themen ergänzen

Der Lernende findet bei jedem Thema fachlich passende YouTube-Videos für Überblick und Vertiefung. Ziel sind vier Videos, darunter **mindestens ein deutschsprachiges Video zum konkreten Thema**. Fehlt bislang ein geeignetes deutsches Video, werden zunächst nur die geeigneten englischen Videos aufgenommen; weniger als vier Videos und vorerst kein deutsches Video sind dort ausdrücklich zulässig. Thema 1 und seine vier bereits ausgewählten Videos bleiben Bestandteil derselben Story.

### Auswahl und Integrationsregeln

- Ziel: vier Lernvideos je Thema, möglichst unter 45 Minuten, bei gleicher fachlicher Eignung aktuellere und kürzere Beiträge bevorzugen. Ältere Grundlagen sind zulässig, wenn ihre Konzepte weiterhin gelten. Keine reinen Werbevideos; Anbieterkanäle sind zulässig, wenn Erklärungen oder nachvollziehbare Demonstrationen den Lernwert bilden.
- Die folgende Vorauswahl enthält 184 Themenzuordnungen für 46 Themen und 171 unterschiedliche Videos. Wiederverwendung zwischen verwandten Themen ist beabsichtigt; je Thema keine Dublette. Recherchestand: 30.09.2026.
- **Prüfstand:** Für alle 171 unterschiedlichen Videos wurden Titel, Kanal, Gesamtlänge und Veröffentlichungsdatum auf den YouTube-Originalseiten abgerufen. Die Sprachzuordnung berücksichtigt Original-Audio-Metadaten, soweit vorhanden, sonst Originaltitel, Beschreibung und Untertitelsprache zusammen. Übersetzte Suchtreffer wurden korrigiert. Fachliche Vorauswahl anhand der Beschreibungen und vorhandener Kapitelmarken; keine vollständige Sichtung aller Videos.
- Die unmittelbar zuvor von einer anderen ChatGPT-Instanz erstellten und geprüften Videodaten werden auf ausdrückliche Entscheidung ohne erneute externe Prüfung übernommen. Der dokumentierte Prüfstand und die fachlichen Hinweise der Vorauswahl bilden die Integrationsgrundlage. Ungeeignete Kandidaten gemäß diesen Hinweisen weglassen; die bekannten Suchlücken werden in dieser Umsetzung nicht durch neue Recherche gefüllt. Deutsche Videos zu lediglich verwandten Grundlagen zählen nicht und werden nicht als Ersatz für ein direktes deutsches Tutorial aufgenommen.
- **Entscheidung im Refinement:** Bei Themen ohne geeignetes deutsches Video zum konkreten Thema werden zunächst nur die geeigneten englischen Kandidaten integriert. Die betreffenden Themen und fehlenden Videos werden in der aktiven Spec dokumentiert; diese ausdrücklich erlaubten Lücken verhindern den Abschluss der Story nicht.
- Alle ausgewählten Videos im Sinne dieser Story als Sekundärquellen für die methodische Einordnung aufnehmen. Die Herkunft für jede konkret gestützte Aussage nach den [Quellenregeln](../../content/source-selection.md) prüfen; Hersteller-Tutorials können für die Beschreibung des eigenen Werkzeugs Primärquellen sein. Diese Abgrenzung in der aktiven Spec begründen. Primärquellen der Themen erhalten.
- **Entscheidung im Refinement:** Die Obergrenze wird mit dieser Story von zehn auf insgesamt zwanzig Quellen je Thema erhöht, über alle Medientypen hinweg. Die Quellenregeln und die automatisierte Validierung werden bei der Umsetzung entsprechend angepasst. Zwanzig ist eine Obergrenze, keine Zielanzahl; jede Quelle braucht fachlichen Mehrwert. Thema 4 hat mit den vier Videos elf Quellen, Themen 37 und 38 jeweils zwölf. Keine Quelle allein zur Erfüllung einer Zielanzahl entfernen; bestehende Primärquellen erhalten.
- Einen neuen Quellentyp für Videos sowie den Medientyp `video` im Quellenvertrag und in der Validierung ergänzen. Herkunftsgruppe und Medientyp bleiben unabhängig.
- Videoquellen mit verlinktem Titel, Laufzeit und neuem Symbol anzeigen; deutsche Quellen wie bisher mit `[DE]`. Bei empfohlenen Ausschnitten Gesamtlänge und Abschnitt getrennt nennen, damit ein langer Vortrag nicht als kurzes Video erscheint.
- Das Videosymbol gemäß den [Symbolrichtlinien](../../content/icon-generation.md) selbst als inline-SVG gestalten, zum Beispiel als Play-Dreieck in einem Videorahmen. Konturen, Größe, Farbe, Abstände und Ausrichtung an die bestehende UI-Gestaltungssprache und Audioquellen-Anzeige anpassen; keine fremden Icons oder neuen Abhängigkeiten. Die Bedeutung „Video“ muss auch für Screenreader erkennbar sein.
- Videos durch bewusste Nutzeraktion als externe Links öffnen; keine eingebetteten Player, automatisch geladenen Vorschaubilder oder externen Laufzeit-Skripte.

### Abnahme und Umsetzung

Für alle 46 Themen ist die Vorauswahl redaktionell geprüft und sind die geeigneten Videos integriert. Ziel sind je vier Videos, darunter mindestens eines mit deutschem Original-Audio zum konkreten Thema. Bei fehlendem geeignetem deutschen Video sind zunächst nur geeignete englische Videos und weniger als vier Videos zulässig. Diese offenen Lücken werden je betroffenem Thema in der aktiven Spec dokumentiert und verhindern die Abnahme nicht; eine neue Suche zum Schließen der Lücken gehört nicht zur jetzigen Umsetzung. Vorhandene Quellen bleiben fachlich abgestimmt; insgesamt gelten höchstens zwanzig Quellen je Thema. Reine Werbung, ungeprüfte Einsparungs-/Sicherheitsversprechen und falsche Sprachkennzeichnungen gelangen nicht in den Katalog.

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

## Ziel, Grenzen und Umsetzungsschnitt

Die Themen-Vertikale ergänzt die vorhandene Videoauswahl und ihre Anzeige. Quellenvertrag und Validierung bleiben intern in dieser Vertikale; App und andere Vertikalen werden nicht erweitert. Neue Abhängigkeiten, neue Videorecherche, eingebettete Player, Vorschaubilder und Änderungen an Lernchecks oder persönlichem Zustand gehören nicht zum Umfang.

Geltende Dokumente: [Dauerhafte Vorgaben](../../governance/durable-rules.md), [Vertikalen](../../architecture/verticals-and-boundaries.md), [Redaktion](../../content/editorial-policy.md), [Quellenregeln](../../content/source-selection.md), [Symbole](../../content/icon-generation.md), [Pflichtsuite](../../quality/verification-strategy.md).

## Risiken und konkrete Abnahme

- Quellenobergrenze: zwanzig insgesamt, mindestens eine Primärquelle; bestehende Quellen und ihre Prüfdaten bleiben erhalten.
- Medienvertrag: Video hat Gesamtlänge; ein optionaler Lernabschnitt besitzt gültige Start-/Endzeiten innerhalb der Gesamtlänge. Textquellen dürfen keine Laufzeit tragen. Herkunft und Medium bleiben unabhängig.
- Anzeige: Video erhält ein eigenes zugängliches inline-SVG; Titel und [DE] bleiben im Link, Gesamtlänge und Lernabschnitt stehen getrennt daneben. Primärquellen stehen vor Sekundärquellen. Keine externen Laufzeitressourcen vor Nutzeraktion.
- Inhaltsrisiko: Die Vorauswahl enthält fachlich nur ergänzende deutsche Videos. Diese werden bei den betreffenden Spezialthemen weggelassen; geeignete englische Kandidaten dürfen ohne deutschen Ersatz übernommen werden. Abweichungen werden je Thema dokumentiert.
- Quellenübersicht: Die Tabellen oben dokumentieren Originaltitel, Kanal, Sprache, Gesamtlänge, Veröffentlichung und den Originalseiten-Prüfstand vom 30.09.2026. Die fachlichen Hinweise nennen gestützte Aspekte und Grenzen pro Thema. Sie sind keine vollständige Sichtung der Videos und keine Garantie von Anbieterbehauptungen.
- Redaktionelle Übernahme: Die geprüfte Vorauswahl wird ausdrücklich ohne erneute Prüfung der Videodaten integriert. Die dokumentierten Grenzen und die vereinbarten Auslassungen bleiben maßgeblich.
- Technische Abnahme: gezielte Vertrags-, Katalog- und Komponententests, vollständiges `npm run check`, Desktop-/Mobil-E2E und Audit. Lokaler Browserablauf: erstes Thema mit vier Videos, ein Thema ohne deutschen Ersatz, ein langer Vortrag mit Lernabschnitt; Linköffnung und Quellenanzeige prüfen.
- Commit: erst nach vollständig grüner Pflichtsuite und ausdrücklich bestätigter manueller Nutzerprüfung.

## Umsetzung und Nachweise

Die Umsetzung und ihre Nachweise sind abgeschlossen.


### Vereinbarte Inhaltsübernahme und Auslassungen

Die 184 Vorauswahl-Zuordnungen wurden anhand der dokumentierten fachlichen Hinweise in 175 integrierte Zuordnungen überführt: 37 Themen besitzen vier Videos, neun Themen drei englische Videos. Neue Recherche und erneute externe Prüfung der Videodaten wurden ausdrücklich ausgeschlossen. Originaltitel, Sprache, Laufzeit, Links und vorhandene Kapitelhinweise stammen unverändert aus der unmittelbar zuvor geprüften Vorauswahl. Bestehende Quellen, Themeninhalte, Themen-Prüfdaten und Lernpfade bleiben erhalten; die technische Katalognummer ist jetzt 7.

| Thema | Bewusst ausgelassenes deutsches Video / Grenze |
| --- | --- |
| `ears-requirements` | Gute Anforderungen allgemein, kein EARS-Tutorial. |
| `standards-and-constraint-rationale` | OWASP Top 10 statt ASVS. |
| `codebase-memory-for-large-repos` | Context Engineering statt direkter Codegraph-Anleitung. |
| `token-efficiency-tools` | Allgemeine Tokenlimits statt RTK-/Caveman-Tutorial. |
| `spec-driven-development-openspec` | Spec-Driven Development allgemein statt OpenSpec. |
| `agent-context-handoffs` | Context Engineering statt Handoff-Tutorial. |
| `java-spring-migrations-with-openrewrite` | Golden-Master-Tests in ABAP statt OpenRewrite. |
| `compare-parallel-and-serial-agent-work` | n8n-Evaluation statt seriell-parallelem Coding-Vergleich. |
| `bug-triage-and-pr-automation` | Agentenmodus und MCP statt Triage bis PR. |

Alle übrigen dokumentierten Grenzen der Vorauswahl bleiben bestehen. Die längeren Beiträge bleiben zulässig, weil 45 Minuten eine Präferenz sind. Vier dokumentierte Lernabschnitte (Legacy/GOTO, Navigation/Code 2020, MCP/INNOQ, UI/Penpot) stehen getrennt von der jeweiligen Gesamtlänge im Vertrag und in der Anzeige.

Herkunft: Die Videos dienen überwiegend methodischer Einordnung und sind Sekundärquellen. Fünf Herstellerdemonstrationen sind für die Beschreibung ihrer eigenen Werkzeuge Primärquellen: JetBrains-Navigation (`1UHsJyCq1SU`), GitHub Actions (`BQrohJ3PT7I`), GitHub Copilot Coding Agent (`1GVBRhDI5No`), Penpot (`kyu2L-4zeWg`) und Chromatic/Storybook Component Testing (`dcuzwCHI940`). Das Videoformat selbst bestimmt die Herkunft nicht. Aussagen über allgemeinen Nutzen, Einsparungen oder Sicherheit werden daraus nicht als Garantie übernommen.

### RED → GREEN → REFACTOR

| Teil-Feature | RED-Nachweis | GREEN / REFACTOR |
| --- | --- | --- |
| Quellenvertrag und Obergrenze | Der gezielte Test `videoSources.test.ts` hatte drei fachliche Fehlschläge: zwanzig Quellen wurden abgelehnt, gültiges Video abgelehnt, Video-Metadaten bei Audio akzeptiert. | `videoSources.test.ts` und `topics.test.ts`: 34 Tests grün. Typ `learning-video`, Medium `video`, Laufzeit und optionaler Lernabschnitt ergänzt; Grenze zwanzig; Dubletten einschließlich YouTube-Startzeitvarianten abgewiesen. Medienprüfung in einen internen Helfer gezogen. |
| Katalogintegration | `learningVideos.test.ts`: drei Tests rot, weil alle Videozuordnungen und der lange MCP-Beitrag fehlten. | 175 Zuordnungen integriert; alle drei Tests anschließend grün. Daten liegen intern in `learningVideos.ts`; Katalog komponiert sie, bestehende Quellen bleiben erhalten. |
| Videoanzeige | Der neue Komponententest scheiterte am fehlenden zugänglichen Symbol mit Namen Video. | Symbol, Gesamtlänge und separater Lernabschnitt ergänzt. Gemeinsame SVG-Stilregeln mit Audio. `npm test -- --run tests/verticals/topics`: 7 Dateien, 68 Tests grün. |

Gezielte Chromium-E2E: 4 Tests grün auf Desktop und Pixel-7-Viewport. Erstes Thema mit vier Videos, EARS mit drei englischen Videos, MCP-Vortrag mit Gesamtlänge 96:14 und Lernabschnitt 10:00–52:36, Linköffnung in neuem Tab, keine externen Requests vor dem Klick und kein horizontaler Überlauf geprüft. Die externe Zielseite wird im Test lokal ersetzt; Video-Inhalte werden nicht neu geprüft.

### Lokaler Browsernachweis

Codex In-app-Browser unter `http://127.0.0.1:5173/`: Erstes Thema ausgewählt und bis zu den Quellen gescrollt; vier Video-Symbole, Originaltitel, [DE] und Laufzeiten neben unveränderten Text-/Audioquellen sichtbar geprüft. EARS zeigt drei englische Videos ohne deutsches Grundlagen-Ersatzvideo. MCP zeigt den langen deutschen Vortrag mit getrennten Angaben Gesamtlänge 96:14 und Lernabschnitt 10:00–52:36. Darstellung und Umbruch ohne Überdeckung geprüft. Externe Zielseiten wurden bei dieser Sichtprüfung nicht erneut abgerufen; die kontrollierte Linköffnung ist durch den grünen Desktop-/Mobil-E2E abgedeckt. Vorschau bleibt zur manuellen Nutzerprüfung geöffnet.

### Technische Pflichtprüfung

Nach der letzten Code-Refaktorierung ist `npm run check` vollständig grün: Format, Type-Aware-Lint, Typprüfung, 170 Unit-/Komponententests in 26 Dateien, Inhalts-/Lerncheck-Validierung, Architekturgrenzen und Vertikalzählung, Lizenzen und Produktionsbuild. `npm audit --audit-level=high`: keine bekannten Schwachstellen. Keine Abhängigkeiten hinzugefügt; fachlich ist nur die Themen-Vertikale verändert.

Manuelle Nutzerprüfung und ausdrückliche Commitfreigabe sind erfolgt.

Vollständige Browser-Pflichtsuite nach der letzten Codeänderung: `npm run test:e2e` beendet mit Exitcode 0, 90 Tests grün auf Desktop-Chromium und Mobile-Chromium. `git diff --check` grün. Nur Nachweise wurden danach in dieser Spec ergänzt.

### Abschließende Anzeigeentscheidung

Das Videosymbol wird als selbst gezeichneter neutraler Filmstreifen ohne Play-Dreieck umgesetzt. Die Gesamtlänge steht wie bei Podcasts als bloßer Zeitwert im gleichen Textstil direkt nach dem Link; der optionale Lernabschnitt bleibt getrennt benannt. Manuelle Nutzerprüfung und ausdrückliche Commitfreigabe sind erfolgt; die angeforderten abschließenden Anzeigeänderungen sind von der Commitfreigabe umfasst.


Abschließende Anzeigeänderung: RED durch den gezielten Komponententest, weil die Laufzeit noch den Präfix Gesamtlänge trug; anschließend alle 20 TopicBrowser-Komponententests grün. Refaktorierung vereinheitlicht die Zeitwertausgabe für Audio und Video und entfernt den abweichenden Videolaufzeit-Stil. Das neutrale Filmstreifen-SVG bleibt für Screenreader als Video benannt.

Aktueller Browsernachweis unmittelbar zur Commitvorbereitung: Codex In-app-Browser, lokale Vorschau auf schmalem Viewport. MCP-Quellen zeigen selbst gezeichnete Filmstreifen, bloße Zeitwerte im selben Textstil wie Podcastlaufzeiten sowie einen separat benannten Lernabschnitt. Sichtprüfung von Symbol, Umbruch und Laufzeiten grün; keine Videodaten erneut geprüft.


Abschließende Pflichtsuite nach der Anzeigeänderung: `npm run check` mit 170 Unit-/Komponententests vollständig grün; `npm run test:e2e` mit 90 Desktop-/Mobiltests grün, beide Exitcode 0. `npm audit --audit-level=high` ohne bekannte Schwachstellen. Manuelle Nutzerprüfung und Commitfreigabe erfolgt.

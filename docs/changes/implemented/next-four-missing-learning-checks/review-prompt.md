# Unabhängige Fachprüfung: vier neue Lerncheck-Pools

Prüfe alle folgenden Fragen unabhängig gegen die jeweils verlinkten Originalquellen. Melde nur Fragen-IDs mit fachlichem Fehler, mehrdeutiger Lösung, schwachem oder ebenfalls richtigem Distraktor, unzutreffender Erklärung oder unpassendem Quellenbezug. Antworte mit einer sehr kurzen Liste der beanstandeten IDs und je einem knappen Grund; wenn keine Beanstandung vorliegt, schreibe: Keine Beanstandungen.

## agent-skills-and-commands

### AS01 – Ein Team wiederholt denselben geprüften Agentenablauf. Was ist der passende Inhalt eines Skills?

- AS01-1 [RICHTIG] Anweisungen und Ressourcen für diesen Ablauf. — Skills bündeln wiederholbare Arbeitsabläufe. Quelle: https://developers.openai.com/plugins/concepts/skills
- AS01-2 [FALSCH] Ein dauerhaftes Protokoll aller Nutzerdaten. — Ein Skill beschreibt den Ablauf und ist kein Datenspeicher. Quelle: https://developers.openai.com/plugins/concepts/skills
- AS01-3 [FALSCH] Ein Ersatz für die fachliche Abnahme. — Der Skill liefert Anweisungen, keine Abnahmeentscheidung. Quelle: https://developers.openai.com/plugins/concepts/skills

### AS02 – Welche Datei enthält die verpflichtenden Anweisungen eines Skills?

- AS02-1 [RICHTIG] SKILL.md — Die Skill-Datei enthält Metadaten und Anweisungen. Quelle: https://developers.openai.com/plugins/build/skills
- AS02-2 [FALSCH] plugin.json — Ein Plugin-Manifest beschreibt das Paket, nicht den einzelnen Skill-Ablauf. Quelle: https://developers.openai.com/plugins/build/skills
- AS02-3 [FALSCH] tasks.md — Eine Aufgabenliste ersetzt die Skill-Anweisungen nicht. Quelle: https://developers.openai.com/plugins/build/skills

### AS03 – Wozu dient die Beschreibung im Kopf einer Skill-Datei?

- AS03-1 [RICHTIG] Sie zeigt, bei welchen Anliegen der Skill berücksichtigt werden soll. — Die Beschreibung steuert die Aktivierung. Quelle: https://developers.openai.com/plugins/build/skills
- AS03-2 [FALSCH] Sie gewährt Dateisystemrechte für den Ablauf. — Rechte werden außerhalb der Skill-Beschreibung kontrolliert. Quelle: https://developers.openai.com/plugins/build/skills
- AS03-3 [FALSCH] Sie speichert die Ergebnisse früherer Durchläufe. — Die Beschreibung dient der Auswahl, nicht der Speicherung. Quelle: https://developers.openai.com/plugins/build/skills

### AS04 – Wo stehen die konkreten Schritte eines Skills?

- AS04-1 [RICHTIG] Im Anweisungsteil von SKILL.md. — Dort wird der Ablauf beschrieben. Quelle: https://developers.openai.com/plugins/build/skills
- AS04-2 [FALSCH] Im Skill-Namen. — Der Name identifiziert den Skill, beschreibt aber nicht den Ablauf. Quelle: https://developers.openai.com/plugins/build/skills
- AS04-3 [FALSCH] In der Berechtigungsliste des MCP-Servers. — Berechtigungen definieren Zugriff, nicht die Schrittfolge. Quelle: https://developers.openai.com/plugins/build/skills

### AS05 – Ein Skill braucht ausführliche Hintergrundinformationen. Wo passen diese hin?

- AS05-1 [RICHTIG] In verlinkte Dateien unter references/. — Referenzen halten den Haupttext knapp und können gezielt geladen werden. Quelle: https://developers.openai.com/plugins/build/skills
- AS05-2 [FALSCH] In eine längere Aktivierungsbeschreibung. — Die Beschreibung soll Auslöser nennen, nicht Hintergrundmaterial tragen. Quelle: https://developers.openai.com/plugins/build/skills
- AS05-3 [FALSCH] In die Liste erlaubter MCP-Werkzeuge. — Werkzeugdeklarationen enthalten keine fachliche Referenz. Quelle: https://developers.openai.com/plugins/build/skills

### AS06 – Ein Skill soll eine vorhandene Vorlage kopieren. Welcher unterstützende Ordner passt?

- AS06-1 [RICHTIG] assets/ — Assets sind für Vorlagen und zu übernehmende Dateien vorgesehen. Quelle: https://developers.openai.com/plugins/build/skills
- AS06-2 [FALSCH] scripts/ — Scripts sind für ausführbare Verarbeitung vorgesehen. Quelle: https://developers.openai.com/plugins/build/skills
- AS06-3 [FALSCH] references/ — References sind für nachzuschlagende Informationen vorgesehen. Quelle: https://developers.openai.com/plugins/build/skills

### AS07 – Wann ist ein Script als Skill-Ressource sinnvoll?

- AS07-1 [RICHTIG] Wenn deterministische Berechnung oder Dateiverarbeitung gebraucht wird. — Die Anleitung nennt Scripts für solche wiederholbaren Operationen. Quelle: https://developers.openai.com/plugins/build/skills
- AS07-2 [FALSCH] Wenn eine kurze Anweisung denselben Schritt zuverlässig beschreibt. — Dann ist laut Anleitung kein zusätzliches Script nötig. Quelle: https://developers.openai.com/plugins/build/skills
- AS07-3 [FALSCH] Wenn die Aktivierungsbeschreibung zu lang ist. — Eine lange Beschreibung wird gekürzt, nicht durch ein Script ersetzt. Quelle: https://developers.openai.com/plugins/build/skills

### AS08 – Wie sollte ein Skill abgegrenzt werden?

- AS08-1 [RICHTIG] Auf ein erkennbares Nutzerziel mit klaren Eingaben und Schritten. — Die Anleitung fordert eine erkennbare Aufgabe und Workflow-Grenze. Quelle: https://developers.openai.com/plugins/build/skills
- AS08-2 [FALSCH] Auf sämtliche Tätigkeiten eines Teams zugleich. — Ein überbreiter Skill verliert eine erkennbare Aktivierungsgrenze. Quelle: https://developers.openai.com/plugins/build/skills
- AS08-3 [FALSCH] Auf die bloße Rollenbezeichnung des Agenten. — Eine Rolle definiert noch keinen überprüfbaren Ablauf. Quelle: https://developers.openai.com/plugins/build/skills

### AS09 – Was übernimmt ein MCP-Server im Zusammenspiel mit einem Skill?

- AS09-1 [RICHTIG] Live-Daten, Autorisierung und kontrollierte Aktionen. — Diese Aufgaben liegen beim Server. Quelle: https://developers.openai.com/plugins/concepts/skills
- AS09-2 [FALSCH] Die Entscheidung, wann eine Anleitung fachlich nützlich ist. — Die Skill-Beschreibung und der Auftrag steuern die Auswahl. Quelle: https://developers.openai.com/plugins/concepts/skills
- AS09-3 [FALSCH] Die Formulierung aller wiederverwendbaren Workflow-Schritte. — Dafür ist der Skill gedacht. Quelle: https://developers.openai.com/plugins/concepts/skills

### AS10 – Ein Ablauf braucht keine Live-Daten und keine fremden Werkzeuge. Was gilt für den Skill?

- AS10-1 [RICHTIG] Er kann allein mit Anweisungen und Ressourcen arbeiten. — Skills können ohne MCP-Server funktionieren. Quelle: https://developers.openai.com/plugins/concepts/skills
- AS10-2 [FALSCH] Er benötigt dennoch einen MCP-Server für jede Ausführung. — Der Server ist bei einem rein angeleiteten Ablauf optional. Quelle: https://developers.openai.com/plugins/concepts/skills
- AS10-3 [FALSCH] Er muss als externes Skript veröffentlicht werden. — Ein Script ist für reine Anweisungen nicht erforderlich. Quelle: https://developers.openai.com/plugins/concepts/skills

### AS11 – Ein Skill deklariert eine MCP-Abhängigkeit. Was muss die Anleitung zusätzlich leisten?

- AS11-1 [RICHTIG] Werkzeugreihenfolge und Verhalten bei fehlenden Ergebnissen erklären. — Die Abhängigkeit stellt das Werkzeug bereit, ersetzt aber keine Workflow-Anweisung. Quelle: https://developers.openai.com/plugins/build/skills
- AS11-2 [FALSCH] Die Autorisierung im Skill-Text selbst erteilen. — Autorisierung liegt am Werkzeug beziehungsweise Server. Quelle: https://developers.openai.com/plugins/build/skills
- AS11-3 [FALSCH] Jeden möglichen Werkzeugaufruf ungeprüft auslösen. — Die Anleitung muss Auswahl und Fehlerfälle regeln. Quelle: https://developers.openai.com/plugins/build/skills

### AS12 – Welche Anfrage prüft, ob ein Skill bei eindeutiger Nennung aktiviert wird?

- AS12-1 [RICHTIG] Eine direkte Bitte um seinen beschriebenen Ablauf. — Direkte Anfragen sind ein vorgesehener Aktivierungstest. Quelle: https://developers.openai.com/plugins/build/skills
- AS12-2 [FALSCH] Eine Umschreibung des Ziels ohne Skill-Namen. — Sie prüft die indirekte Aktivierung. Quelle: https://developers.openai.com/plugins/build/skills
- AS12-3 [FALSCH] Eine Anfrage mit fehlenden Pflichteingaben. — Sie prüft eher die nötige Rückfrage. Quelle: https://developers.openai.com/plugins/build/skills

### AS13 – Wie prüft ein Team die Aktivierung ohne expliziten Skill-Namen?

- AS13-1 [RICHTIG] Mit einer indirekten Anfrage, die dasselbe Ziel ausdrückt. — Indirekte Anfragen gehören zu den empfohlenen Tests. Quelle: https://developers.openai.com/plugins/build/skills
- AS13-2 [FALSCH] Mit einem Testprompt, der den Skill beim Namen aufruft. — Das prüft nur die direkte Aktivierung. Quelle: https://developers.openai.com/plugins/build/skills
- AS13-3 [FALSCH] Mit der Prüfung des Plugin-Manifests allein. — Das Manifest zeigt keine Aktivierung bei einer Anfrage. Quelle: https://developers.openai.com/plugins/build/skills

### AS14 – Ein Skill benötigt einen Projektpfad, die Anfrage nennt keinen. Welcher Testfall ist das?

- AS14-1 [RICHTIG] Unvollständige Eingabe mit erwarteter Rückfrage. — Die Anleitung empfiehlt Tests auf fehlende nötige Angaben. Quelle: https://developers.openai.com/plugins/build/skills
- AS14-2 [FALSCH] Ein Lauf mit angenommenem Standardpfad. — Der nötige Pfad fehlt; eine unbelegte Annahme wäre kein passender Testausgang. Quelle: https://developers.openai.com/plugins/build/skills
- AS14-3 [FALSCH] Ein Test der Ausgabeformatierung nach vollständig gelieferter Eingabe. — Hier fehlt eine nötige Eingabe, bevor eine Ausgabe geprüft werden kann. Quelle: https://developers.openai.com/plugins/build/skills

### AS15 – Warum gehören themenfremde Anfragen in die Skill-Tests?

- AS15-1 [RICHTIG] Sie zeigen, ob der Skill fälschlich aktiviert wird. — Die Anleitung fordert Anfragen, bei denen der Skill nicht starten sollte. Quelle: https://developers.openai.com/plugins/build/skills
- AS15-2 [FALSCH] Sie prüfen die Ergebnisqualität bei erfolgreichen Aufrufen. — Eine themenfremde Anfrage soll gerade keinen Skill-Aufruf auslösen. Quelle: https://developers.openai.com/plugins/build/skills
- AS15-3 [FALSCH] Sie messen die Laufzeit des vollständigen Skill-Ablaufs. — Bei ausbleibender Aktivierung läuft dieser Ablauf nicht. Quelle: https://developers.openai.com/plugins/build/skills

### AS16 – Bei einer unpassenden Anfrage startet der Skill häufig. Was wird zuerst geschärft?

- AS16-1 [RICHTIG] Seine Beschreibung und Aktivierungsbedingungen. — Die Anleitung nennt die Beschreibung als Hebel bei falscher Aktivierung. Quelle: https://developers.openai.com/plugins/build/skills
- AS16-2 [FALSCH] Die Ausgabevorlage für erfolgreiche Durchläufe. — Sie beeinflusst das Ergebnis nach der Aktivierung. Quelle: https://developers.openai.com/plugins/build/skills
- AS16-3 [FALSCH] Die Schrittfolge für erfolgreich gestartete Durchläufe. — Eine neue Schrittfolge korrigiert die falsche Auswahl vor dem Start nicht. Quelle: https://developers.openai.com/plugins/build/skills

### AS17 – Der Skill startet korrekt, liefert aber uneinheitliche Ergebnisse. Was wird überarbeitet?

- AS17-1 [RICHTIG] Die konkreten Anweisungen im Skill. — Bei inkonsistentem Ablauf sollen die Anweisungen präzisiert werden. Quelle: https://developers.openai.com/plugins/build/skills
- AS17-2 [FALSCH] Die Beschreibung der Aktivierungsbedingungen. — Die Aktivierung funktioniert bereits; es fehlt Ablaufklarheit. Quelle: https://developers.openai.com/plugins/build/skills
- AS17-3 [FALSCH] Die Liste indirekter Testanfragen. — Weitere Tests allein korrigieren den Ablauf nicht. Quelle: https://developers.openai.com/plugins/build/skills

### AS18 – Was ist bei einer MCP-importierten Skill-Version zu beachten?

- AS18-1 [RICHTIG] Die importierten Dateien sind zunächst ein Snapshot. — Die Plattform lädt sie nicht bei jedem Lauf neu vom Server. Quelle: https://developers.openai.com/plugins/build/skills
- AS18-2 [FALSCH] Jeder Lauf liest automatisch die neuesten Serverdateien. — Der Import ist ein Snapshot. Quelle: https://developers.openai.com/plugins/build/skills
- AS18-3 [FALSCH] Der Import ersetzt die Prüfung des Skills. — Ein Snapshot sagt nichts über fachliche Qualität aus. Quelle: https://developers.openai.com/plugins/build/skills

### AS19 – Ein importierter Skill wurde auf dem Server geändert. Wie gelangt die Änderung in einen neuen Plugin-Entwurf?

- AS19-1 [RICHTIG] Server bereitstellen und erneut scannen. — Die Anleitung nennt erneutes Deployment und Scannen. Quelle: https://developers.openai.com/plugins/build/skills
- AS19-2 [FALSCH] Die lokale Skill-Datei ohne erneuten Scan bearbeiten. — Das aktualisiert den importierten Snapshot nicht. Quelle: https://developers.openai.com/plugins/build/skills
- AS19-3 [FALSCH] Den vorhandenen Snapshot unverändert testen. — Das prüft weiterhin die alte Fassung. Quelle: https://developers.openai.com/plugins/build/skills

### AS20 – Ein fremder Skill fordert Zugriff auf viele Konten. Welche Prüfung ist vor Nutzung passend?

- AS20-1 [RICHTIG] Benötigte Berechtigungen und Datenzugriffe auf das Nutzerziel begrenzen. — Die Sicherheitsanleitung verlangt minimale Rechte und Daten. Quelle: https://developers.openai.com/plugins/guides/security-privacy
- AS20-2 [FALSCH] Alle angefragten Rechte vorsorglich erteilen. — Breiter Zugriff widerspricht dem Prinzip minimaler Berechtigungen. Quelle: https://developers.openai.com/plugins/guides/security-privacy
- AS20-3 [FALSCH] Die beworbene Funktion des Skills mit dem Bedarf vergleichen. — Die Beschreibung allein zeigt weder tatsächlich angeforderte Rechte noch Datenfluss. Quelle: https://developers.openai.com/plugins/guides/security-privacy

### AS21 – Wo muss ein MCP-Werkzeug seine Eingaben prüfen?

- AS21-1 [RICHTIG] Auch serverseitig bei jedem Aufruf. — Die Sicherheitsanleitung verlangt Validierung am Server trotz Modellaufruf. Quelle: https://developers.openai.com/plugins/guides/security-privacy
- AS21-2 [FALSCH] In einer Formulierung des Skill-Prompts. — Prompt-Anweisungen ersetzen keine serverseitige Validierung. Quelle: https://developers.openai.com/plugins/guides/security-privacy
- AS21-3 [FALSCH] Beim erstmaligen Installieren des Skills. — Jeder Aufruf kann neue Eingaben enthalten. Quelle: https://developers.openai.com/plugins/guides/security-privacy

### AS22 – Ein Skill führt zu einer nicht rückgängig zu machenden Aktion. Welche Kontrolle ist passend?

- AS22-1 [RICHTIG] Menschliche Bestätigung vor der Aktion. — Die Sicherheitsanleitung fordert sie für irreversible Vorgänge. Quelle: https://developers.openai.com/plugins/guides/security-privacy
- AS22-2 [FALSCH] Eine ausführliche Protokollierung nach der Aktion. — Ein späteres Protokoll ersetzt die Entscheidung vor der Nebenwirkung nicht. Quelle: https://developers.openai.com/plugins/guides/security-privacy
- AS22-3 [FALSCH] Eine automatische Freigabe nach erfolgreicher Aktivierung. — Aktivierung ist keine Bestätigung der konkreten Aktion. Quelle: https://developers.openai.com/plugins/guides/security-privacy

### AS23 – Was sollte vor dem Schreiben eines Skills für seine Evaluation festgelegt werden?

- AS23-1 [RICHTIG] Messbare Kriterien für Erfolg und Verhalten. — Der Leitfaden beginnt mit prüfbaren Erfolgszielen. Quelle: https://developers.openai.com/blog/eval-skills
- AS23-2 [FALSCH] Die geplanten Werkzeugnamen. — Werkzeugnamen allein definieren keinen Erfolg. Quelle: https://developers.openai.com/blog/eval-skills
- AS23-3 [FALSCH] Die Zahl der Testprompts. — Die Zahl sagt nichts über die geprüften Ergebnisse. Quelle: https://developers.openai.com/blog/eval-skills

### AS24 – Eine Evaluation fragt, ob der Skill gestartet und die erwarteten Werkzeuge genutzt wurden. Welche Zielart prüft sie?

- AS24-1 [RICHTIG] Prozessziele. — Skill-Aufruf und Werkzeugschritte sind Prozessziele. Quelle: https://developers.openai.com/blog/eval-skills
- AS24-2 [FALSCH] Stilziele. — Stilziele betreffen Form und Konvention der Ausgabe. Quelle: https://developers.openai.com/blog/eval-skills
- AS24-3 [FALSCH] Effizienzziele. — Effizienz betrachtet beispielsweise unnötige Aufrufe. Quelle: https://developers.openai.com/blog/eval-skills

### AS25 – Welche Kombination liefert bei Skill-Evaluierungen konkrete Hinweise auf Regressionen?

- AS25-1 [RICHTIG] Aufgezeichnete Läufe mit gezielten deterministischen und rubrikbasierten Checks. — Der Leitfaden kombiniert Traces, Artefakte und kleine Prüfungen. Quelle: https://developers.openai.com/blog/eval-skills
- AS25-2 [FALSCH] Ein einmaliges subjektives Gesamturteil. — Ein pauschales Urteil zeigt die Ursache eines Fehlers kaum. Quelle: https://developers.openai.com/blog/eval-skills
- AS25-3 [FALSCH] Die erfolgreiche Installation des Skills. — Installation prüft weder Aktivierung noch Ergebnisqualität. Quelle: https://developers.openai.com/blog/eval-skills

## spec-framework-selection

### SF01 – Welches OpenSpec-Artefakt hält zuerst fest, warum eine Änderung nötig ist?

- SF01-1 [RICHTIG] proposal.md — Das Proposal beschreibt die Motivation. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF01-2 [FALSCH] tasks.md — Tasks enthält die Umsetzungsschritte. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF01-3 [FALSCH] design.md — Design beschreibt den technischen Weg. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF02 – Wo beschreibt OpenSpec das geänderte Verhalten einer Fähigkeit?

- SF02-1 [RICHTIG] In einer Delta-Spec unter specs/<capability-path>/spec.md. — Dieses Artefakt beschreibt, was sich fachlich ändert. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF02-2 [FALSCH] Im Dateinamen des Change-Ordners. — Der Ordnername ersetzt die Verhaltensbeschreibung nicht. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF02-3 [FALSCH] In der Aufgabenliste allein. — Tasks planen Arbeit, definieren aber nicht den Verhaltensvertrag. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF03 – Welches OpenSpec-Artefakt beschreibt den technischen Lösungsweg?

- SF03-1 [RICHTIG] design.md — Das Design legt dar, wie die Änderung gebaut wird. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF03-2 [FALSCH] proposal.md — Das Proposal begründet die Änderung. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF03-3 [FALSCH] spec.md — Die Spec beschreibt das gewünschte Verhalten. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF04 – Welche Datei dient im OpenSpec-Standard als Implementierungscheckliste?

- SF04-1 [RICHTIG] tasks.md — Tasks sammelt die umzusetzenden Schritte. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF04-2 [FALSCH] proposal.md — Das Proposal erklärt den Anlass. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF04-3 [FALSCH] .openspec.yaml — Diese Datei enthält Änderungsmetadaten. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF05 – In welcher Reihenfolge beginnt der OpenSpec-Standardablauf?

- SF05-1 [RICHTIG] Mit dem Proposal vor Specs und Design. — Die dokumentierte Artefaktfolge startet mit dem Proposal. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF05-2 [FALSCH] Mit Tasks vor der Änderungsbegründung. — Tasks bauen auf den vorangehenden Artefakten auf. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF05-3 [FALSCH] Mit der Implementierung vor den Artefakten. — Apply folgt erst nach den erforderlichen Artefakten. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF06 – Welche beiden OpenSpec-Artefakte können nach dem Proposal in beliebiger Reihenfolge entstehen?

- SF06-1 [RICHTIG] Specs und Design. — Der Standard erlaubt beide Reihenfolgen. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF06-2 [FALSCH] Proposal und Tasks. — Das Proposal steht vor den Tasks. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF06-3 [FALSCH] Tasks und Apply. — Apply folgt den Tasks. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF07 – Wenn bei einer OpenSpec-Änderung weder Specs noch Design ausgelassen werden: Wann werden die Tasks vorbereitet?

- SF07-1 [RICHTIG] Nachdem Proposal, Specs und Design vorliegen. — Im vollständigen Standardablauf benötigen Tasks diese Artefakte; das Schema erlaubt bei anderen Änderungen Ausnahmen. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF07-2 [FALSCH] Schon vor dem Proposal. — Die Änderungsbegründung steht zuerst. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF07-3 [FALSCH] Erst nach dem Archivieren. — Archivieren folgt der umgesetzten Änderung. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF08 – Was markiert im OpenSpec-Standard den Übergang zur Implementierung?

- SF08-1 [RICHTIG] Apply nach der Aufgabenliste. — Die dokumentierte Folge führt von Tasks zu Apply. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF08-2 [FALSCH] Proposal ohne weitere Prüfung. — Ein Proposal ist noch kein Implementierungsstart. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF08-3 [FALSCH] Das Anlegen des Change-Ordners allein. — Ein Ordner enthält noch keine umsetzbaren Artefakte. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF09 – Eine kleine OpenSpec-Änderung braucht keinen eigenen Architekturentwurf. Was ist laut Schema möglich?

- SF09-1 [RICHTIG] Design auslassen, wenn dessen Bedingungen nicht gelten. — Das Standard-Schema erlaubt das Auslassen unter dieser Bedingung. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF09-2 [FALSCH] Den Grund für die Änderung auslassen. — Das Proposal steht am Anfang. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF09-3 [FALSCH] Tasks vor jeder Verhaltensbeschreibung schreiben. — Tasks benötigen die erforderlichen Vorarbeiten. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF10 – Ein OpenSpec-Pilot betrifft zwei getrennte Fähigkeiten. Wie werden die Verhaltensänderungen abgelegt?

- SF10-1 [RICHTIG] Je Fähigkeit in einer eigenen Delta-Spec. — Das Schema sieht eine spec.md pro Capability-Pfad vor. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF10-2 [FALSCH] Alle Anforderungen in design.md. — Design beschreibt den Bauweg, nicht alle Capability-Verträge. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF10-3 [FALSCH] Jede Fähigkeit als Dateiname in tasks.md. — Aufgaben ersetzen keine Delta-Specs. Quelle: https://openspec.dev/docs/schemas/spec-driven

### SF11 – Welche Phase folgt im Kernablauf von GitHub Spec Kit direkt auf Specify?

- SF11-1 [RICHTIG] Plan. — Der dokumentierte Kernablauf ist Specify → Plan → Tasks → Implement → Converge. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF11-2 [FALSCH] Implement. — Vor Implement liegen Plan und Tasks. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF11-3 [FALSCH] Converge. — Converge schließt den Ablauf ab. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md

### SF12 – Was entsteht in Spec Kit vor der Implementierungsphase aus dem Plan?

- SF12-1 [RICHTIG] Eine gegliederte Aufgabenfolge. — Tasks baut auf Specify und Plan auf. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF12-2 [FALSCH] Ein automatischer Produktiv-Release. — Der Ablauf setzt einen Release nicht als Folgeschritt voraus. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF12-3 [FALSCH] Eine Berechtigung für alle Agentenwerkzeuge. — Planung erteilt keine Rechte. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md

### SF13 – Welcher Spec-Kit-Prozess kann als eigenständiger Einstieg dienen, ohne sofort eine Implementierung zu starten?

- SF13-1 [RICHTIG] Idea Assessment. — Die Dokumentation beschreibt Assessment als unabhängigen, optionalen Einstieg. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF13-2 [FALSCH] Der Implement-Schritt des SDD-Kernablaufs. — Implement setzt die vorherigen SDD-Artefakte voraus. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF13-3 [FALSCH] Der Converge-Schritt des SDD-Kernablaufs. — Converge steht am Ende des Umsetzungsablaufs. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md

### SF14 – Welches Format tragen die zentralen Spec-Kit-Artefakte?

- SF14-1 [RICHTIG] Markdown-Dateien für die aufeinanderfolgenden Phasen. — Die Dokumentation beschreibt Markdown-Artefakte. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF14-2 [FALSCH] Kompilierten Java-Code. — Das Framework organisiert Spezifikationsartefakte. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF14-3 [FALSCH] Einträge in einer proprietären Datenbank. — Die genannten Artefakte sind Dateien. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md

### SF15 – Ein Team möchte Spec Kit mit einem anderen Coding-Agenten erproben. Was unterstützt die Dokumentation?

- SF15-1 [RICHTIG] Agentenspezifische Integrationen samt generischer Ausweichmöglichkeit. — Spec Kit nennt Integrationen und eine generische Variante. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF15-2 [FALSCH] Eine Pflicht zur Nutzung eines einzelnen Agenten. — Die Dokumentation beschreibt mehrere Integrationen. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF15-3 [FALSCH] Eine automatische fachliche Freigabe des gewählten Agenten. — Integration ersetzt keine fachliche Prüfung. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md

### SF16 – Warum ist bei Spec Kit ein Pilot in einem bestehenden Repository sinnvoll abzugrenzen?

- SF16-1 [RICHTIG] Es gibt eine eigene Anleitung für bestehende Codebasen. — Der Einstieg unterscheidet bestehende Projekte. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF16-2 [FALSCH] Weil jede Codebasis zuerst neu erzeugt werden muss. — Der Leitfaden sieht bestehende Projekte ausdrücklich vor. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md
- SF16-3 [FALSCH] Weil Specs dort keine Rolle mehr spielen. — Der Ablauf bleibt spezifikationsgeführt. Quelle: https://github.com/github/spec-kit/blob/main/docs/index.md

### SF17 – Welche drei Kerndateien bilden eine Kiro-Feature-Spec?

- SF17-1 [RICHTIG] requirements.md, design.md und tasks.md. — Kiro nennt diese drei Dateien als Grundstruktur. Quelle: https://kiro.dev/docs/specs/
- SF17-2 [FALSCH] proposal.md, changelog.md und package.json. — Das sind nicht die drei Kiro-Spec-Dateien. Quelle: https://kiro.dev/docs/specs/
- SF17-3 [FALSCH] README.md, Dockerfile und build.gradle. — Diese Dateien gehören nicht zum Spec-Kernablauf. Quelle: https://kiro.dev/docs/specs/

### SF18 – Wofür nutzt Kiro bei einem Fehlerfall bugfix.md?

- SF18-1 [RICHTIG] Für Analyse des aktuellen, erwarteten und unveränderten Verhaltens. — Bugfix-Specs halten die Fehleranalyse fest. Quelle: https://kiro.dev/docs/specs/
- SF18-2 [FALSCH] Für die Liste aller installierten Plugins. — Die Datei dient der Fehler-Spezifikation. Quelle: https://kiro.dev/docs/specs/
- SF18-3 [FALSCH] Für automatisch akzeptierte Codeänderungen. — Eine Bugfix-Spec ist keine Freigabe. Quelle: https://kiro.dev/docs/specs/

### SF19 – Was beschreibt in Kiro design.md?

- SF19-1 [RICHTIG] Architektur, Datenfluss und Implementierungsüberlegungen. — Die Designphase hält den technischen Ansatz fest. Quelle: https://kiro.dev/docs/specs/
- SF19-2 [FALSCH] Das ursprüngliche Nutzerproblem. — Das gehört in Requirements oder Bugfix-Analyse. Quelle: https://kiro.dev/docs/specs/
- SF19-3 [FALSCH] Den aktuellen Aufgabenstatus. — Aufgabenstatus liegt bei Tasks. Quelle: https://kiro.dev/docs/specs/

### SF20 – Was enthält in Kiro tasks.md?

- SF20-1 [RICHTIG] Diskrete, nachverfolgbare Umsetzungsschritte. — Tasks ist die detaillierte Implementierungsplanung. Quelle: https://kiro.dev/docs/specs/
- SF20-2 [FALSCH] Den gesamten Originalquellcode. — Tasks beschreibt Arbeiten, nicht den vollständigen Code. Quelle: https://kiro.dev/docs/specs/
- SF20-3 [FALSCH] Die endgültige fachliche Abnahme. — Eine Aufgabenliste ersetzt keine Abnahme. Quelle: https://kiro.dev/docs/specs/

### SF21 – Eine Anforderung ist schon technisch klar. Welche Kiro-Variante kann mit dem Design beginnen?

- SF21-1 [RICHTIG] Design-First. — Kiro unterscheidet Requirements-First und Design-First. Quelle: https://kiro.dev/docs/specs/
- SF21-2 [FALSCH] Bugfix-Only für jedes neue Feature. — Bugfix betrifft Fehleranalyse. Quelle: https://kiro.dev/docs/specs/
- SF21-3 [FALSCH] Tasks-Only als einzige Spec-Phase. — Kiro beschreibt auch Anforderungen und Design. Quelle: https://kiro.dev/docs/specs/

### SF22 – Ein Team möchte zuerst Nutzerverhalten und Abnahme klären. Welche Kiro-Variante passt?

- SF22-1 [RICHTIG] Requirements-First. — Hier beginnt die Feature-Spec mit Anforderungen. Quelle: https://kiro.dev/docs/specs/
- SF22-2 [FALSCH] Design-First mit ausgelassenen Anforderungen. — Die Frage priorisiert die Klärung des Nutzerverhaltens. Quelle: https://kiro.dev/docs/specs/
- SF22-3 [FALSCH] Task-Ausführung vor der Problemklärung. — Tasks folgen aus den Spec-Phasen. Quelle: https://kiro.dev/docs/specs/

### SF23 – Wie behandelt Kiro unabhängige Aufgaben beim Ausführen aller Spec-Tasks?

- SF23-1 [RICHTIG] Es kann Abhängigkeiten analysieren und unabhängige Tasks parallel ausführen. — Die Dokumentation beschreibt Abhängigkeitswellen. Quelle: https://kiro.dev/docs/specs/
- SF23-2 [FALSCH] Es erklärt alle Tasks automatisch für unabhängig. — Abhängigkeiten werden gerade berücksichtigt. Quelle: https://kiro.dev/docs/specs/
- SF23-3 [FALSCH] Es ersetzt die Tasks durch einen unstrukturierten Prompt. — Die Tasks-Liste bleibt Grundlage. Quelle: https://kiro.dev/docs/specs/

### SF24 – Welcher Kiro-Ablauf erzeugt Anforderungen, Design und Tasks für ein klar verstandenes Feature in einem Durchgang?

- SF24-1 [RICHTIG] Quick Spec. — Kiro beschreibt Quick Spec für gut verstandene Features. Quelle: https://kiro.dev/docs/specs/
- SF24-2 [FALSCH] Bugfix-Spec. — Dieser Ablauf beginnt mit Fehleranalyse. Quelle: https://kiro.dev/docs/specs/
- SF24-3 [FALSCH] Ein MCP-Server ohne Spec. — Er erstellt die drei Spec-Artefakte nicht. Quelle: https://kiro.dev/docs/specs/

### SF25 – Woran kann ein Java-/Web-Team in einem kleinen Framework-Pilot die Trennung von fachlichem Was und technischem Wie prüfen?

- SF25-1 [RICHTIG] An getrennter Verhaltens-Spec und Design-Artefakt. — OpenSpec ordnet Verhalten den Specs und den Bauweg dem Design zu. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF25-2 [FALSCH] An einer gemeinsamen Aufgabenliste für Verhalten und Bauweg. — Tasks sind die Umsetzungscheckliste und ersetzen die getrennten Artefakte nicht. Quelle: https://openspec.dev/docs/schemas/spec-driven
- SF25-3 [FALSCH] An einem Proposal mit technischen Schritten allein. — Das Proposal erklärt den Grund der Änderung, nicht beide Ebenen. Quelle: https://openspec.dev/docs/schemas/spec-driven

## automation-value-and-gates

### AV01 – Ein Team erprobt einen Agenten für wiederkehrende Java-Bugfixes. Welche erste Aufgabe passt zum Einstieg?

- AV01-1 [RICHTIG] Ein klar begrenzter Fehler mit prüfbarem Ergebnis. — GitHub empfiehlt anfangs einfache, gut abgegrenzte Aufgaben. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV01-2 [FALSCH] Eine umfassende Architekturänderung über mehrere Repositories. — Der Leitfaden nennt breite, kontextreiche Änderungen als schwierig. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV01-3 [FALSCH] Eine Änderung an kritischer Geschäftslogik ohne Fachkontext. — Solche Aufgaben verlangen besondere menschliche Klärung. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV02 – Ein Agentenauftrag nennt bereits betroffene Dateien und Abnahmekriterien, aber nicht den Anlass der Änderung. Was fehlt?

- AV02-1 [RICHTIG] Eine klare Beschreibung des zu lösenden Problems. — Der Leitfaden nennt das Problem zusätzlich zu Dateien und Akzeptanzkriterien. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV02-2 [FALSCH] Die vermutete Implementierung ohne Fehlerbeschreibung. — Ein Lösungsvorschlag erklärt den zu lösenden Fehler nicht vollständig. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV02-3 [FALSCH] Weitere Dateipfade ohne Fehlerbeschreibung. — Dateihinweise sind bereits vorhanden und erklären den Anlass der Änderung nicht. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV03 – Woran erkennt ein Agent im Auftrag, was als gute Lösung gilt?

- AV03-1 [RICHTIG] An vollständigen Akzeptanzkriterien. — GitHub nennt Kriterien einschließlich erwarteter Tests. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV03-2 [FALSCH] An der Zahl der geänderten Dateien. — Dateizahl bewertet die geforderte Wirkung nicht. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV03-3 [FALSCH] An der bloßen Meldung, dass ein Issue geschlossen wurde. — Der Status ersetzt keine inhaltlichen Kriterien. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV04 – Was hilft einem Agenten, eine Änderung in einem großen Repository einzugrenzen?

- AV04-1 [RICHTIG] Hinweise auf betroffene Dateien und Bereiche. — Der Leitfaden empfiehlt Richtungen zu relevanten Dateien. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV04-2 [FALSCH] Zugriff auf alle Repositories des Unternehmens. — Breiter Zugriff macht den Task nicht genauer. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV04-3 [FALSCH] Ein Auftrag ohne fachliche Grenze. — Fehlende Grenzen erschweren die richtige Änderung. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV05 – Ein Entwickler möchte eine komplexe Legacy-Komponente selbst gründlich verstehen. Wie ordnet GitHub diesen Lernauftrag für einen Cloud-Agenten ein?

- AV05-1 [RICHTIG] Als möglichen Fall für eigene Bearbeitung durch den Entwickler. — GitHub nennt Aufgaben mit persönlichem Lernziel unter den Ausnahmen für Delegation. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV05-2 [FALSCH] Als reine Dokumentationsänderung ohne Lernbedarf. — Der Auftrag zielt ausdrücklich auf das eigene Verständnis des Entwicklers. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV05-3 [FALSCH] Als automatische Freigabe einer Agentenänderung. — Ein Lernziel ist keine Freigabe für Änderungen. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV06 – Ein Team möchte einen Agenten eine Änderung vorbereiten lassen, den Diff aber vor einem Pull Request prüfen. Welcher Ablauf passt?

- AV06-1 [RICHTIG] Repository recherchieren, Plan und Branch-Änderungen prüfen, dann über den Pull Request entscheiden. — GitHub beschreibt Forschung, Planung und Iteration vor dem PR. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV06-2 [FALSCH] Zuerst einen Pull Request öffnen und erst danach den Änderungsansatz klären. — Die Quelle beschreibt ausdrücklich den Vorab-Ablauf. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV06-3 [FALSCH] Den Branch ohne Diff-Prüfung direkt zur Übernahme markieren. — Der Vorab-Ablauf ermöglicht gerade die Diff-Prüfung. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV07 – Wie können Repository-Anweisungen einen Agenten bei der Verifikation unterstützen?

- AV07-1 [RICHTIG] Sie nennen Build-, Test- und Validierungsbefehle. — Der Leitfaden empfiehlt diese Angaben in Projektanweisungen. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV07-2 [FALSCH] Sie ersetzen die Ausführung aller Tests. — Anweisungen sollen Tests ermöglichen, nicht ersetzen. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV07-3 [FALSCH] Sie gewähren automatisch Produktionszugriff. — Projektanweisungen sind keine Zugriffsfreigabe. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV08 – Ein Bot soll Playwright-Tests bearbeiten. Wo können dafür dateispezifische Regeln liegen?

- AV08-1 [RICHTIG] In pfadbezogenen Repository-Anweisungen. — GitHub beschreibt Anweisungsdateien mit passenden Dateiglob-Mustern. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV08-2 [FALSCH] Im Dateinamen eines beliebigen Issues. — Ein Issue-Name verteilt keine Dateiregeln. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV08-3 [FALSCH] Im generierten Testbericht. — Ein Bericht steuert die Arbeit vor der Änderung nicht. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV09 – Ein Agent benötigt für Tests Projektabhängigkeiten. Was kann den Start seiner Umgebung stabilisieren?

- AV09-1 [RICHTIG] Vorinstallation über definierte Setup-Schritte. — GitHub beschreibt vorbereitete Abhängigkeiten in der Agentenumgebung. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV09-2 [FALSCH] Installation durch Versuch und Irrtum während jedes Laufs. — Der Leitfaden bezeichnet diesen Weg als langsam und unzuverlässig. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV09-3 [FALSCH] Installationsbefehle im Tasktext ohne Umgebungs-Setup. — Ein Tasktext bereitet die Abhängigkeiten noch nicht vor. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV10 – Welcher Nutzen entsteht, wenn der Agent seine Änderung in der eigenen Umgebung bauen und testen kann?

- AV10-1 [RICHTIG] Fehler werden vor dem Pull Request sichtbarer. — Der Leitfaden verbindet Build und Tests mit besser prüfbaren Vorschlägen. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV10-2 [FALSCH] Das menschliche Review entfällt. — Automatische Tests ersetzen keine Prüfung. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results
- AV10-3 [FALSCH] Die Änderung gilt automatisch als produktionsreif. — Ein grüner Agentenlauf ist keine Freigabe. Quelle: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results

### AV11 – Ein Agenten-Workflow soll unzulässige Nutzeranfragen vor der Hauptverarbeitung stoppen. Welche Kontrolle passt?

- AV11-1 [RICHTIG] Input-Guardrail. — Sie validiert die Eingabe vor dem Hauptmodell. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV11-2 [FALSCH] Output-Guardrail. — Sie kontrolliert die Ausgabe am Ende. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV11-3 [FALSCH] Tool-Guardrail. — Sie prüft Werkzeugaufrufe. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV12 – Ein Workflow soll sensible Daten vor der Antwort aus dem Endergebnis entfernen. Welche Kontrolle passt?

- AV12-1 [RICHTIG] Output-Guardrail. — Sie validiert oder redigiert die finale Ausgabe. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV12-2 [FALSCH] Input-Guardrail. — Sie prüft den Eingang, nicht das finale Ergebnis. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV12-3 [FALSCH] Tool-Guardrail an einem einzelnen Werkzeug. — Sie sieht nicht zwingend die gesamte finale Antwort. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV13 – Wo wird das Argument eines Funktionstools unmittelbar vor dem Aufruf geprüft?

- AV13-1 [RICHTIG] An einer Tool-Guardrail. — Sie prüft Argumente oder Ergebnisse am Werkzeug. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV13-2 [FALSCH] An der Formulierung des Nutzerauftrags. — Ein Auftrag validiert keine konkreten Tool-Argumente. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV13-3 [FALSCH] Beim finalen Ausgabeformat. — Eine Endausgabeprüfung liegt zu spät für den Werkzeugaufruf. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV14 – Ein Agent möchte eine Bestellung stornieren. Welche Kontrolle hält die Nebenwirkung bis zur Entscheidung an?

- AV14-1 [RICHTIG] Human-in-the-loop-Freigabe. — Die Dokumentation empfiehlt eine Freigabepause vor sensiblen Aktionen. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV14-2 [FALSCH] Eine Input-Guardrail für den ersten Prompt. — Sie entscheidet nicht über den konkreten Storno-Aufruf. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV14-3 [FALSCH] Eine Stilprüfung der Antwort. — Stil verhindert keine Nebenwirkung. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV15 – Was passiert bei einer ausstehenden Werkzeugfreigabe im beschriebenen SDK-Ablauf?

- AV15-1 [RICHTIG] Der Lauf liefert eine Unterbrechung mit wiederaufnehmbarem Zustand. — So ist der Approval-Lifecycle dokumentiert. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV15-2 [FALSCH] Die Aktion wird ausgeführt und anschließend bewertet. — Die Freigabe steht vor der Ausführung. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV15-3 [FALSCH] Der gesamte Auftrag wird ohne Zustand neu gestartet. — Der Zustand erlaubt die Fortsetzung desselben Laufs. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV16 – Wie wird ein angehaltener Agentenlauf nach einer Freigabe fortgesetzt?

- AV16-1 [RICHTIG] Mit dem gespeicherten Zustand desselben Laufs. — Der Lifecycle nimmt den Run aus state wieder auf. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV16-2 [FALSCH] Mit einem neuen, unverbundenen Auftrag. — Das würde den bisherigen Zustand verlieren. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV16-3 [FALSCH] Durch stilles Überspringen der geprüften Aktion. — Die Freigabeentscheidung wird ausdrücklich verarbeitet. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV17 – Eine Freigabeentscheidung dauert länger. Was kann der Workflow speichern?

- AV17-1 [RICHTIG] Den serialisierten Laufzustand für die spätere Fortsetzung. — Die Dokumentation nennt das Speichern von state. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV17-2 [FALSCH] Die bisher erzeugten Ergebnisartefakte. — Artefakte enthalten nicht den vollständigen Wiederaufnahmezustand. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV17-3 [FALSCH] Die Argumente des wartenden Werkzeugs. — Damit lässt sich der gesamte unterbrochene Lauf nicht fortsetzen. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV18 – Was prüfen Guardrails laut SDK-Anleitung automatisch?

- AV18-1 [RICHTIG] Eingaben, Ausgaben oder Werkzeugverhalten. — Diese drei Kontrollpunkte sind beschrieben. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV18-2 [FALSCH] Die fachliche Richtigkeit jedes Geschäftsentscheids. — Eine Guardrail garantiert keine vollständige Fachprüfung. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV18-3 [FALSCH] Die menschliche Zustimmung ohne Rückfrage. — Freigaben sind eine eigene Entscheidung. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV19 – Welche Guardrail gilt bei einer Kette mehrerer Agenten nur für den ersten Agenten?

- AV19-1 [RICHTIG] Die agentenbezogene Input-Guardrail. — Die Dokumentation nennt diese Laufgrenze ausdrücklich. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV19-2 [FALSCH] Jede Tool-Guardrail im Workflow. — Tool-Guardrails sitzen an ihren Werkzeugen. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV19-3 [FALSCH] Die Freigabe eines sensiblen Werkzeugs. — Sie gilt am konkreten Nebenwirkungspunkt. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV20 – Welche agentenbezogene Guardrail läuft in einer Agentenkette nur beim finalen Ausgeber?

- AV20-1 [RICHTIG] Output-Guardrail. — Sie läuft laut Dokumentation beim Agenten mit der finalen Ausgabe. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV20-2 [FALSCH] Input-Guardrail. — Sie läuft beim ersten Agenten. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV20-3 [FALSCH] Eine Tool-Guardrail. — Sie hängt an einem Werkzeug, nicht an der finalen Rolle. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV21 – Ein Manager-Agent nutzt mehrere Werkzeuge mit Nebenwirkungen. Wo gehört die Prüfung jedes Aufrufs hin?

- AV21-1 [RICHTIG] An das jeweilige Werkzeug und den Nebenwirkungspunkt. — Die Anleitung warnt vor alleinigen Agenten-Guardrails für alle Tool-Aufrufe. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV21-2 [FALSCH] In die anfängliche Eingabekontrolle. — Sie sieht spätere konkrete Tool-Aufrufe nicht vollständig. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV21-3 [FALSCH] In den fertigen Bericht. — Dann kann die Nebenwirkung bereits eingetreten sein. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV22 – Welche Information gehört in eine Freigabeprüfung für einen sensiblen Werkzeugaufruf?

- AV22-1 [RICHTIG] Ziel, Aktion, Argumente und genehmigter Umfang. — Die Anleitung nennt diese Größen für die Scope-Prüfung. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV22-2 [FALSCH] Der Anzeigename des Agenten. — Er beschreibt weder Ziel noch Aktion. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV22-3 [FALSCH] Die Länge der Modellantwort. — Sie belegt keine erlaubte Aktion. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV23 – Ein geplanter Werkzeugaufruf liegt außerhalb des genehmigten Bereichs. Was ist die passende Gate-Entscheidung?

- AV23-1 [RICHTIG] Den Aufruf vor der Ausführung verweigern. — Die Anleitung verlangt das Ablehnen von Aktionen außerhalb des Scopes. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV23-2 [FALSCH] Den Aufruf ausführen und nachträglich markieren. — Das Gate soll vor der Nebenwirkung greifen. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV23-3 [FALSCH] Die Scope-Prüfung dem Modell allein überlassen. — Die Grenze soll unabhängig durchgesetzt werden. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV24 – Bei einem autorisierten Cybersicherheits-Workflow ist die Freigabestelle nicht erreichbar. Welches Verhalten schützt den sensiblen Übergang?

- AV24-1 [RICHTIG] Ohne Freigabe nicht ausführen. — Die Anleitung fordert ein geschlossenes Fehlerverhalten. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV24-2 [FALSCH] Die Aktion nach Zeitablauf automatisch zulassen. — Das würde die Freigabegrenze umgehen. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV24-3 [FALSCH] Die Freigabe im Prompt als erteilt markieren. — Prompttext ersetzt keine externe Freigabeentscheidung. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

### AV25 – Ein Team nutzt einen eigenen Agenten-Workflow mit Responses API. Welche Annahme über Codex-Auto-Review ist korrekt?

- AV25-1 [RICHTIG] Der eigene Workflow muss seine Prüf- und Freigabegrenzen selbst einrichten. — Die Dokumentation sagt, dass API- und SDK-Apps Auto-Review nicht automatisch erben. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV25-2 [FALSCH] Codex-Auto-Review schützt den fremden Workflow automatisch. — Die API-Anwendung erbt diesen Mechanismus nicht. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- AV25-3 [FALSCH] Ein Prompt allein setzt alle technischen Grenzen durch. — Freigabe und Werkzeuggates müssen im Workflow umgesetzt werden. Quelle: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals

## web-security-baseline

### WS01 – Welche Aufgabe erfüllt die OWASP Top 10:2025 für Webanwendungen?

- WS01-1 [RICHTIG] Sie macht wichtige Risikoklassen für Entwicklung und Prüfung sichtbar. — OWASP beschreibt sie als Awareness-Dokument für Webanwendungssicherheit. Quelle: https://top10.owasp.org/2025/
- WS01-2 [FALSCH] Sie zertifiziert eine konkrete App nach einem grünen Scan. — Die Risikoliste ist keine Produktzertifizierung. Quelle: https://top10.owasp.org/2025/
- WS01-3 [FALSCH] Sie ersetzt die Prüfung der eigenen Zugriffsregeln. — Die Liste benennt Risiken, testet keine konkrete Anwendung. Quelle: https://top10.owasp.org/2025/

### WS02 – Eine Web-App erhält zusätzlich einen LLM-Agenten. Welcher neue Risikoaspekt folgt aus dessen Verarbeitung fremder Texte?

- WS02-1 [RICHTIG] Prompt Injection über dem Agenten zugeführte Inhalte. — OWASP führt Prompt Injection als LLM-spezifische Risikoklasse. Quelle: https://genai.owasp.org/llm-top-10/
- WS02-2 [FALSCH] Fehlende CORS-Begrenzung für bestehende API-Antworten. — CORS ist ein Webzugriffsrisiko; es erklärt keine Anweisungen im Modellkontext. Quelle: https://genai.owasp.org/llm-top-10/
- WS02-3 [FALSCH] Fehlender TLS-Schutz beim Laden bestehender Webressourcen. — TLS ist ein Transportrisiko; es erklärt keine Anweisungen im Modellkontext. Quelle: https://genai.owasp.org/llm-top-10/

### WS03 – Ein Nutzer ändert im API-Pfad eine Datensatz-ID und sieht fremde Kundendaten. Welcher Kontrollpunkt fehlt?

- WS03-1 [RICHTIG] Autorisierung anhand der Datensatz-Zugehörigkeit. — OWASP nennt fremde Datensätze über IDs als Broken Access Control. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS03-2 [FALSCH] Eine Prüfung, ob der Nutzer angemeldet ist. — Anmeldung allein prüft nicht den Besitz dieses Datensatzes. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS03-3 [FALSCH] Eine schwerer zu erratende Datensatz-ID. — Unvorhersehbarkeit ersetzt keine Objektberechtigung. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/

### WS04 – Wo muss eine Spring-API die Berechtigung für einen geschützten Endpunkt durchsetzen?

- WS04-1 [RICHTIG] In vertrauenswürdigem serverseitigem Code. — OWASP warnt vor manipulierbaren Prüfungen im Frontend. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS04-2 [FALSCH] In einem React-Route-Guard vor dem API-Aufruf. — Clientcode kann umgangen werden. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS04-3 [FALSCH] In einer clientseitigen Prüfung des Rollen-Tokens. — Ein Angreifer kann Clientcode umgehen oder manipulieren. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/

### WS05 – Welcher Standardzugriff passt für nicht öffentliche API-Ressourcen?

- WS05-1 [RICHTIG] Verweigern, bis eine konkrete Berechtigung erteilt ist. — OWASP empfiehlt Deny by default. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS05-2 [FALSCH] Freigeben, solange keine Sperrliste existiert. — Das widerspricht der Standardverweigerung. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS05-3 [FALSCH] Freigeben, wenn die ID schwer zu erraten ist. — Unvorhersehbare IDs ersetzen keine Autorisierung. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/

### WS06 – Eine API schützt GET, aber POST und DELETE für denselben Datensatz nicht. Welche Prüfung ist nötig?

- WS06-1 [RICHTIG] Autorisierung für jede betroffene Operation testen. — OWASP nennt fehlende Kontrollen für POST, PUT und DELETE. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS06-2 [FALSCH] Die GET-Antwort erneut testen. — Die Schreiboperationen bleiben ungeschützt. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS06-3 [FALSCH] Die Buttons im Browser verstecken. — Direkte API-Aufrufe bleiben möglich. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/

### WS07 – Eine Web-API erlaubt Anfragen von einer unerwarteten fremden Origin. Welche Einstellung ist zu prüfen?

- WS07-1 [RICHTIG] Die CORS-Freigabe der API. — OWASP führt fehlkonfiguriertes CORS bei Zugriffskontrolle auf. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS07-2 [FALSCH] Die Passwortlänge der angemeldeten Nutzer. — Sie begrenzt nicht erlaubte Browser-Origins. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/
- WS07-3 [FALSCH] Die Gültigkeitsdauer des Session-Cookies. — Sie legt die CORS-Origin-Liste nicht fest. Quelle: https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/

### WS08 – Ein produktiver Dienst hat ein unverändertes Standardkonto. Welche Risikoklasse trifft zu?

- WS08-1 [RICHTIG] Security Misconfiguration. — OWASP nennt aktivierte Standardkonten mit unverändertem Passwort. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/
- WS08-2 [FALSCH] Fehlerhafte Datenintegrität. — Das Problem liegt in der Sicherheitskonfiguration. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/
- WS08-3 [FALSCH] Mangelnde Ausgabeleistung. — Leistung ist nicht die Ursache des Standardkontos. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/

### WS09 – Ein Spring-Endpunkt zeigt Nutzern vollständige Stacktraces. Was sollte die Sicherheitsbasis prüfen?

- WS09-1 [RICHTIG] Die Fehlerbehandlung und Offenlegung interner Details. — OWASP nennt zu ausführliche Fehler als Konfigurationsrisiko. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/
- WS09-2 [FALSCH] Die interne Protokollierung derselben Ausnahme. — Logging kann sinnvoll sein, entfernt den Stacktrace aus der Antwort aber nicht. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/
- WS09-3 [FALSCH] Die Validierung des ursprünglichen Requests. — Auch bei gültigen Requests können Ausnahmen interne Details offenlegen. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/

### WS10 – Ein Server sendet vorgesehene Sicherheitsheader nicht. Wo liegt der erste Prüfansatz?

- WS10-1 [RICHTIG] Bei der tatsächlichen Server- und Header-Konfiguration. — OWASP nennt fehlende oder unsichere Header als Fehlkonfiguration. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/
- WS10-2 [FALSCH] Bei einer zusätzlichen clientseitigen Warnmeldung. — Eine Warnung ergänzt den fehlenden Response-Header nicht. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/
- WS10-3 [FALSCH] Bei einer Erklärung im Repository-README. — Dokumentation verändert die ausgelieferten Header nicht. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/

### WS11 – Nach einem Upgrade bleiben neue Schutzfunktionen deaktiviert. Was verlangt eine Sicherheitsbasis?

- WS11-1 [RICHTIG] Die wirksamen Einstellungen der neuen Version kontrollieren. — OWASP nennt nicht aktivierte neue Schutzfunktionen als Konfigurationsrisiko. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/
- WS11-2 [FALSCH] Die Abhängigkeiten auf die neue Version aktualisieren. — Das aktiviert und prüft die neue Schutzfunktion noch nicht. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/
- WS11-3 [FALSCH] Die vor dem Upgrade grünen Tests wiederholen. — Sie belegen die neue Einstellung nicht. Quelle: https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/

### WS12 – Eine Anwendung setzt ungeprüfte Eingaben in einen SQL-Befehl ein. Welche Risikoklasse ist betroffen?

- WS12-1 [RICHTIG] Injection. — Unvertrauenswürdige Daten beeinflussen den Interpreter. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/
- WS12-2 [FALSCH] Broken Access Control. — Eine mögliche Folge ist Datenzugriff; der beschriebene Fehler ist die Befehlsinjektion. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/
- WS12-3 [FALSCH] Security Misconfiguration. — Der konkrete Fehler ist die dynamisch beeinflusste Abfrage. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/

### WS13 – Welche Änderung trennt in einer Datenbankabfrage Werte besser von der Befehlsstruktur?

- WS13-1 [RICHTIG] Parameterisierte Abfragen statt String-Verkettung. — OWASP nennt dynamische, nicht parametrisierte Aufrufe als Risiko. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/
- WS13-2 [FALSCH] Alle Eingabewerte vor der Verkettung auf Länge prüfen. — Längenprüfung trennt Werte nicht von SQL-Syntax. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/
- WS13-3 [FALSCH] Die Abfrage aus dem Controller in einen Service verschieben. — Ein Schichtenwechsel ändert die unsichere Verkettung nicht. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/

### WS14 – Kann eine ORM-Suche ungeprüfte Eingaben sicherheitlich problematisch nutzen?

- WS14-1 [RICHTIG] Ja, unsichere Suchparameter können zusätzliche Daten preisgeben. — OWASP nennt ORM-Suchparameter ausdrücklich. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/
- WS14-2 [FALSCH] Nein, ORM schließt jede Form von Injection aus. — OWASP nennt gerade diesen Fehlerfall. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/
- WS14-3 [FALSCH] Wenn gar keine Datenbank vorhanden ist. — Der Fall betrifft eine ORM-Abfrage auf Daten. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/

### WS15 – Welche Kombination empfiehlt OWASP zum Auffinden von Injection in einer Web-API?

- WS15-1 [RICHTIG] Code-Review und automatisierte Tests über Eingabekanäle. — OWASP nennt beide Ansätze einschließlich Fuzzing. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/
- WS15-2 [FALSCH] Unit-Tests für die erwarteten Standardwerte. — Feindliche Eingaben und weitere Kanäle bleiben ungeprüft. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/
- WS15-3 [FALSCH] Ein Scan der bekannten Bibliotheksversionen. — Ein Dependency-Scan findet keine selbst gebaute unsichere Abfrage. Quelle: https://top10.owasp.org/2025/A05_2025-Injection/

### WS16 – Wie sollten aktive und passive Ressourcen einer HTTPS-Seite geladen werden?

- WS16-1 [RICHTIG] Ebenfalls über HTTPS. — MDN empfiehlt sichere Ressourcenladung für beide Arten. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS16-2 [FALSCH] Aktive Skripte über HTTP und Bilder über HTTPS. — Auch aktive Ressourcen brauchen HTTPS. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS16-3 [FALSCH] Nach zufälliger Wahl des Browsers. — Die Seite sollte die sichere Ressource festlegen. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides

### WS17 – Welche Wirkung hat HSTS für spätere Verbindungen?

- WS17-1 [RICHTIG] Der Browser soll die Site über HTTPS kontaktieren. — MDN beschreibt diese HSTS-Vorgabe. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS17-2 [FALSCH] Die App prüft damit Datensatzberechtigungen. — HSTS betrifft Transport, nicht Autorisierung. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS17-3 [FALSCH] Der Browser führt damit geprüfte Skripte aus. — Skriptausführung ist kein HSTS-Ziel. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides

### WS18 – Wofür dient eine Content Security Policy auf einer Weboberfläche?

- WS18-1 [RICHTIG] Sie begrenzt ladbaren Code und dessen erlaubte Aktionen. — MDN beschreibt CSP als fein abgestufte Kontrolle gegen unter anderem XSS. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS18-2 [FALSCH] Sie ersetzt jede sichere DOM-Verarbeitung. — MDN beschreibt CSP als Maßnahme zur Risikominderung, nicht als vollständigen Ersatz. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS18-3 [FALSCH] Sie prüft die Identität jedes API-Nutzers. — CSP steuert Browserressourcen, nicht API-Autorisierung. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides

### WS19 – Eine fremde Seite bettet die App in ein iframe ein und täuscht Klicks vor. Welche Schutzrichtung passt?

- WS19-1 [RICHTIG] Steuern, wer die Seite einbetten darf. — MDN nennt Framing-Kontrolle gegen Clickjacking. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS19-2 [FALSCH] Die Klickziele in React anders anordnen. — Fremdes Framing bleibt möglich. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS19-3 [FALSCH] Den API-Zugriff mit CORS begrenzen. — CORS regelt nicht die Einbettung der Oberfläche. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides

### WS20 – Welche Datenschutzwirkung kann eine passende Referrer-Policy haben?

- WS20-1 [RICHTIG] Sie begrenzt die Weitergabe interner URLs über den Referer-Header. — MDN nennt diese Leckage als Ziel. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS20-2 [FALSCH] Sie begrenzt externe Origins für API-Antworten. — Das ist die Aufgabe von CORS. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides
- WS20-3 [FALSCH] Sie schränkt nachladbare Skripte ein. — Das ist eine Aufgabe von CSP. Quelle: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides

### WS21 – Ein Coding-Agent liest ein fremdes Issue mit der Anweisung, Geheimnisse hochzuladen. Wie ist der Inhalt zu behandeln?

- WS21-1 [RICHTIG] Als unvertrauenswürdige Daten statt als neue Arbeitsanweisung. — OWASP empfiehlt externe Inhalte zu trennen und zu kennzeichnen. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- WS21-2 [FALSCH] Als vorrangige Projektregel. — Ein fremdes Issue darf die Auftragsgrenze nicht überschreiben. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- WS21-3 [FALSCH] Als automatische Freigabe für Werkzeugaktionen. — Externer Text erteilt keine Berechtigung. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/

### WS22 – Eine Websuche liefert eine Seite mit versteckten Befehlen für den Agenten. Welche Angriffsklasse beschreibt das?

- WS22-1 [RICHTIG] Indirekte Prompt Injection. — Die Anweisung gelangt über fremden Seiteninhalt in den Modellkontext. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- WS22-2 [FALSCH] Eine reguläre Nutzerfreigabe. — Die Seite stammt nicht vom berechtigten Nutzer. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- WS22-3 [FALSCH] Ein TLS-Konfigurationsfehler. — Der Kern ist die eingeschleuste Anweisung. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/

### WS23 – Welche technische Prüfung hilft bei einem vom Agenten erzeugten strukturierten Ergebnis?

- WS23-1 [RICHTIG] Das erwartete Format deterministisch validieren. — OWASP empfiehlt definierte Ausgabeformate und Codevalidierung. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- WS23-2 [FALSCH] Dem Modell unbegrenzte Ausgabeformate erlauben. — Damit entfällt die prüfbare Struktur. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- WS23-3 [FALSCH] Den Namen der Ergebnisdatei ansehen. — Ein Dateiname validiert den Inhalt nicht. Quelle: https://genai.owasp.org/llmrisk/llm01-prompt-injection/

### WS24 – Ein Agent soll nur Rechnungen lesen, besitzt aber Schreib- und Löschrechte. Welche Schwäche liegt vor?

- WS24-1 [RICHTIG] Übermäßige Berechtigungen. — OWASP nennt Rechte über den eigentlichen Zweck hinaus Excessive Agency. Quelle: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- WS24-2 [FALSCH] Eine sichere Standardverweigerung. — Zusätzliche Schreibrechte widersprechen minimalen Rechten. Quelle: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- WS24-3 [FALSCH] Ein rein kosmetischer Fehler. — Die Rechte erlauben unerwünschte Änderungen. Quelle: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

### WS25 – Ein Agent darf einen Beitrag vorbereiten und veröffentlichen. Was begrenzt die Veröffentlichung als risikoreiche Aktion?

- WS25-1 [RICHTIG] Eine konkrete menschliche Freigabe vor dem Posten. — OWASP empfiehlt Zustimmung vor folgenreichen Agentenaktionen. Quelle: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- WS25-2 [FALSCH] Ein langer Systemprompt ohne Werkzeugkontrolle. — Promptlänge ersetzt keine Freigabe. Quelle: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- WS25-3 [FALSCH] Die automatische Veröffentlichung nach dem Entwurf. — Das überspringt die risikoreiche Entscheidung. Quelle: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

# Lernchecks bestehen

## Ziel und Umfang

Ein abgeschlossener Fragendurchlauf zu einer Lernkarte gilt genau dann als bestanden, wenn alle fünf Fragen richtig beantwortet wurden.
Damit gilt die Lernkarte für diesen Durchlauf als bestanden. Das Ergebnis erscheint erst mit der Antwortübersicht nach der fünften Antwort.
Ein abgebrochener Durchlauf hat kein Ergebnis.

- Bei Bestehen steht oben in der Ergebnisansicht deutlich „Lerncheck bestanden“. Unmittelbar darunter, vor der Antwortübersicht, erscheint
  genau ein zufällig ausgewählter Glückwunsch aus der folgenden Liste. Jeder der 50 Texte ist auswählbar. Die bestehende Antwortübersicht
  mit Erklärungen und Quellen bleibt sichtbar.
- Bestehensstatus und Glückwunsch bilden eine eigenständige, warm gestaltete Erfolgskarte. Der Glückwunsch ist deutlich größer als der
  Fließtext; die Karte bleibt auf schmalen Ansichten und bei dunkler Farbumgebung lesbar. Die 50 Wortlaute bleiben unverändert.
- Bei mindestens einer falschen Antwort steht an derselben Stelle die neutrale Überschrift „Antworten im Überblick“. Es erscheint weder
  eine negative Bestehensmeldung noch ein Glückwunsch. Die gewählten falschen Antworten, richtigen Antworten und Erklärungen bleiben
  sichtbar.
- Nach dem Ergebnis führt „Zur Themenliste“ zurück zur Kartenauswahl; von dort kann ein neuer, unabhängiger Fragendurchlauf gestartet
  werden. Das gilt auch nach einem Abbruch sowie nach dem Verlassen oder Neuladen der Seite. Ein zuvor ausgewählter Glückwunsch darf erneut
  erscheinen.

Die 50 Texte sind kurz, wertschätzend und ohne direkte Anrede mit „du“ oder „Sie“. Einige spielen geistreich mit KI-Begriffen, ohne den
Lernerfolg kleinzureden. Die Wortlaute für diese Story sind:

1. Herzlichen Glückwunsch!
2. Glückwunsch, das war stark!
3. Bravo, alles richtig!
4. Großartig gemacht!
5. Fünf Richtige – wunderbar!
6. Ein glänzender Abschluss!
7. Geschafft – mit Bravour!
8. Punktlandung!
9. Das war überzeugend!
10. Ein Ergebnis zum Freuen!
11. Hervorragend!
12. Tolle Leistung!
13. Das kann sich sehen lassen!
14. Fünf Fragen, fünf Treffer!
15. Souverän gelöst!
16. Alles richtig – wie schön!
17. Volltreffer auf ganzer Linie!
18. Fünfmal richtig – Chapeau!
19. Ein rundum gelungener Durchlauf!
20. Das sitzt!
21. Ein guter Blick fürs Wesentliche!
22. Klar gedacht, richtig entschieden.
23. Fünf gute Entscheidungen hintereinander!
24. Ein feiner Moment zum Feiern!
25. Starke Entscheidungen, schöner Abschluss!
26. Das verdient ein Lächeln.
27. Eine Runde Applaus für diesen Durchlauf!
28. Hier passt einfach alles.
29. Ein Ergebnis wie aus einem Guss.
30. Beste Mischung: Neugier und Klarheit.
31. Ein starker Schlusspunkt!
32. Das war ein guter Lauf!
33. Fünfmal auf den Punkt.
34. Ein Grund, kurz stolz zu sein.
35. Wissen, das im richtigen Moment da ist.
36. Das war aufmerksam und treffsicher!
37. Ein kleiner Triumph zum Mitnehmen.
38. So macht Lernen Freude!
39. Ein schönes Stück Klarheit gewonnen.
40. Die Antworten sitzen, der Moment gehört gefeiert!
41. Künstliche Intelligenz? Hier glänzt die natürliche!
42. Fünf Treffer – ein ziemlich guter Output!
43. Der Prompt: nachdenken. Der Output: fünf Richtige.
44. Kontext verstanden, Antworten getroffen!
45. Keine Halluzination: Dieses Ergebnis ist echt.
46. Mensch im Loop, Freude im Blick!
47. Bestes Modell für heute: neugierig bleiben.
48. Vom Input zum Aha – fünfmal geglückt!
49. Ergebnis geprüft: Anlass zur Freude gefunden.
50. KI kann unterstützen. Dieser Erfolg gehört dem Menschen.

Browser-E2E-Tests prüfen einen Durchlauf mit fünf richtigen Antworten samt Bestehensanzeige und genau einem Glückwunsch aus der Liste,
einen Durchlauf mit mindestens einer falschen Antwort ohne Bestehensmeldung oder Glückwunsch sowie erneut gestartete Durchläufe nach
Rückkehr zur Themenliste und nach einem Neuladen. Die Auswahl der Glückwünsche wird zusätzlich mit kontrolliertem Zufall getestet.

Abgrenzung: Weder Bestehen noch Glückwunsch werden gespeichert. Es ist keine lokale Datenhaltung nötig.

Vertikalen: Lernchecks

## Risiken und Abnahme

- **Ergebnisgrenze:** Der Lerncheck zeigt den Status erst nach der fünften Antwort; ein Abbruch erzeugt keinen Status. Komponenten- und Browser-Test prüfen beide Grenzen.
- **Nichtbestehen ohne negative Meldung:** Ein Durchlauf mit mindestens einer falschen Antwort zeigt die neutrale Überschrift und weiterhin die fachlichen Erklärungen und Quellen, aber weder Bestehensanzeige noch Glückwunsch.
- **Glückwunsch-Auswahl:** Die Liste enthält genau 50 verschiedene, unveränderte Texte ohne direkte Anrede. Ein kontrollierbarer Zufall macht auch den ersten und letzten Eintrag testbar; bei Erfolg erscheint genau ein Text, bei Nichtbestehen keiner. Eine erneute Auswahl darf denselben Text liefern.
- **Hervorhebung:** Status und Glückwunsch werden zusammen als zugänglicher Bereich dargestellt. Die Farbgestaltung wird bei normaler und dunkler Farbumgebung sowie auf schmaler Browserbreite geprüft; der Inhalt wird nicht allein über Farbe vermittelt.
- **Wiederholung ohne gespeicherten Zustand:** Rückkehr zur Themenliste, Abbruch und Neuladen erlauben einen neuen Durchlauf. Weder Ergebnis noch Glückwunsch werden lokal gespeichert. Die bestehende zufällige Fragenauswahl und die Antwortübersicht bleiben funktionsfähig.
- **Vertikalgrenze:** Die Änderung bleibt in Lernchecks; der Inhaltskatalog und die Komposition in `src/app` benötigen keine neue Fachlogik. Es werden keine neuen Abhängigkeiten benötigt. Die [Vertikalgrenzen](../../architecture/verticals-and-boundaries.md) und die [Qualitätsstrategie](../../quality/verification-strategy.md) gelten weiter.
- **Browser-Abnahme:** Auf Desktop- und Smartphone-Viewport werden Bestehen, Nichtbestehen, Wiederholung und Neuladen sichtbar geprüft. Vor einem Commit dokumentiert diese Spec zusätzlich den manuellen Browsernachweis und die ausdrückliche Bestätigung des Nutzers.

## Umsetzung und Nachweise

Die Umsetzung und die Prüfungen vom 27.09.2026 sind dokumentiert. Der Nutzer hat die Erfolgsansicht im lokalen Browser selbst angesehen und die Darstellung positiv bestätigt. Anschließend hat er den Commit freigegeben.

| Schritt | Ergebnis und Nachweis |
| --- | --- |
| RED: Bestehen und Glückwunsch | `npm test -- --run tests/verticals/learning-checks/LearningCheck.test.tsx`: 2 von 6 Tests fehlgeschlagen. Nach fünf richtigen Antworten fehlten „Lerncheck bestanden“ und der Glückwunsch; auch der letzte Listeneintrag war nicht auswählbar, weil es noch keine Liste gab. |
| GREEN: Bestehen und Glückwunsch | Die 50 Texte in Lernchecks ergänzt und bei der fünften richtigen Antwort genau einen Text ausgewählt. Derselbe Testlauf: 6 von 6 grün; kontrollierter Zufall `0` und `0.999999` erreicht den ersten und letzten Eintrag. |
| RED: Nichtbestehen | Nach Ergänzung der Erwartung „Antworten im Überblick“ schlug `npm test -- --run tests/verticals/learning-checks/LearningCheck.test.tsx` mit 1 von 6 fehlgeschlagenen Tests fachlich korrekt fehl: Es stand noch „Nicht alle Antworten richtig“. |
| GREEN: Nichtbestehen | Neutrale Überschrift umgesetzt; derselbe Testlauf danach 6 von 6 grün. Gewählte falsche und richtige Antworten, Erklärungen und Quellen bleiben sichtbar; kein Glückwunsch bei Nichtbestehen. |
| RED: Hervorhebung | Nach Nutzerfeedback einen Komponententest für einen zusammengehörigen, zugänglichen Glückwunschbereich ergänzt. `npm test -- --run tests/verticals/learning-checks/LearningCheck.test.tsx`: 1 von 6 fehlgeschlagen; der Bereich „Glückwunsch“ fehlte. |
| GREEN: Hervorhebung | Bestehensstatus und unveränderten Glückwunsch in einer eigenen Erfolgskarte gruppiert und lokal gestaltet. Derselbe Testlauf danach 6 von 6 grün. |
| Regression: Abbruch und Wiederholung | Abbruch bleibt ergebnislos. Die Browser-E2E-Tests prüfen Neustart über die Themenliste und nach Neuladen; beide Desktop- und Smartphone-Projekte sind grün. Keine zusätzliche Zustandsänderung war nötig. |
| REFACTOR | Prettier auf die geänderten TypeScript- und CSS-Dateien angewandt und die Textliste auf genau 50 eindeutige, zur Spec wortgleiche Einträge ohne direkte Anrede geprüft. Nach der visuellen Anpassung `npm run check` erneut grün: Format, Lint, Typen, 40 Unit-/Komponententests, 8 Katalogtests, Architektur, Lizenzen und Build. |
| Automatisierte Abnahme | `npm run test:e2e`: 8 von 8 Chromium-Tests auf Desktop- und Smartphone-Viewport grün. `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit. |
| Lokaler Browsernachweis | Codex In-app-Browser unter `http://127.0.0.1:4175/`: Einen Lerncheck mit fünf richtigen Antworten beendet; „Lerncheck bestanden“, ein Glückwunsch und fünf Antwortbegründungen sichtbar. Zweiten Durchlauf mit falschen Antworten beendet; „Antworten im Überblick“ ohne Glückwunsch und mit richtigen sowie gewählten falschen Antworten sichtbar. Rückkehr zur Themenliste und Neuladen geprüft. |
| Visueller Nachweis nach Feedback | Codex In-app-Browser unter `http://127.0.0.1:4175/`: Erfolgskarte mit deutlich größerem Glückwunsch, warmem Hintergrund und abgesetzter Kontur geprüft. Bei 390 Pixel breitem Viewport bleibt die Karte ohne horizontalen Überlauf lesbar; den Viewport anschließend zurückgesetzt. `npm run test:e2e` danach erneut 8 von 8 grün. |
| Nutzerabnahme | Nutzer hat die Erfolgsseite im In-app-Browser selbst angesehen, die Darstellung ausdrücklich bestätigt und den Commit freigegeben. |

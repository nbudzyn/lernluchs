# Formatieren in IntelliJ IDEA

`.idea/prettier.xml` aktiviert das lokale Prettier-Paket beim Speichern und bei
„Reformat Code“. `.prettierrc.json` und `.editorconfig` legen die gemeinsamen Regeln fest.

Nach Übernahme das Projekt erneut öffnen. Die Plugins „JavaScript and TypeScript“
und „Prettier“ müssen aktiv sein. Unter **Languages & Frameworks → JavaScript →
Prettier** müssen **Automatic Prettier configuration** und **Run on save** aktiv sein.

Unter **Tools → Actions on Save** die zusätzlichen Aktionen **Reformat code**,
**Optimize imports** und **Code cleanup** deaktivieren. Diese persönlichen Optionen
bleiben in der nicht versionierten `.idea/workspace.xml`.
**Run Prettier** genügt; auch **Reformat code → Changed lines** bleibt aus.
Prettier formatiert die gesamte geänderte Datei.

**Run for files**, ohne verschachtelte Gruppen:

```text
{src/**/*.ts,src/**/*.tsx,tests/**/*.ts,tests/**/*.tsx,e2e/**/*.ts,scripts/**/*.mjs,.github/workflows/*.yml,*.json,*.ts,*.cjs}
```

Kontrolle: TypeScript-Datei anders einrücken, speichern und `npm run format:check`
ausführen. Eingebaute IDE-Code-Stile allein garantieren keine Prettier-Konformität.

# DODAVANJE LINTER-A JE KADI OBJASNJENILA OVDE

<https://kadikraman.github.io/react-native-v2/code-style>

# ALI POSTO JA KORISTIM TYPESCRIPT, MORACU INSTALIRATI PARSERA ZA TYPESCRIPT I JOS NEKE PAKETE

OVAJ TUTORIJAL, KOJI SAM PRONASAO, JESTE ONAJ KOJI CU KORISTITI

<https://dev.to/kornil/how-to-set-up-react-native-typescript-and-eslint-prettier-4i9h>

## EVO STA CU SVE INSTALIRATI

- `yarn add prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-universe --dev`

## ONDA SAM KRIRAO I FAJLOVE: `.eslintrc.js` I `.prettierrc`

VIDI I SAM STA SAM DODAO U NJIH

## E ONDA SAM MORAO DA EDITUJEM `~/.config/Code/User/settings.json` NARAVNO TO RADIS U VSCODE-U PRITISKOM NA `Ctrl + ,`

OVO JE ONO STA SAM DODAO

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

SVE OSTALO SAM ZADRZAO STO AJE TU BILO RANIJE

## NARAVNO VSCODE EXTENZIJE ZA ESLINT I PRETTIER SU BILE INSTALIRANE OD RANIJE

## MISLIM DA CES NA KRAJU PRIMETITI DA TI JE TVOJ CODE `App.tsx`-A PODVUCEN ZUTOM LINIJOM NA NEKIM MESTIMA STO ZNACI DA LINTER FUNKCIONISE
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

SVE OSTALO SAM ZADRZAO STOA JE TU BILO RANIJE

TAKODJE SAM MODIFIKOVAO I `package.json`

DODAO SAM OVO

```json
"eslintConfig": {
    "extends": "universe/native"
  }
```

## NARAVNO VSCODE EXTENZIJE ZA ESLINT I PRETTIER SU BILE INSTALIRANE OD RANIJE

## MISLIM DA CES NA KRAJU PRIMETITI DA TI JE TVOJ CODE `App.tsx`-A PODVUCEN ZUTOM LINIJOM NA NEKIM MESTIMA STO ZNACI DA LINTER FUNKCIONISE

# KADI JE UMESTO ONOGA STO SAM JA INSTALIRAO USTVARI INSTALIRALA `@react-native-community/eslint-config`

ISPITAJ DA MZODA MOZES DA KORISTIS I TU KOFIGURACIJU U SLUCAJ UTYPESCRIPT-A

MOZDA MOZES DA PROBAS I SA TIM SETTINGSIMA

TAKO JE, MOGUCE JE

**SAMO SAM U `package.json` I U `.eslintrc.js` *DEFINISAO DA SE KORISTI UPRAVO `'@react-native-community'` UMESTO `'universe/native'`***

# SADA CU DODATI ESLINT ZA RUNNING SCRIPT  U `package.json` FAJLU

DODAO SAM OVAJ SCRIPT

```json
"lint": "eslint ."
```

MOZES I DA ISPROBAS OVAJ SCRIPT

- `yarn lint`

# OVO NISU KONACNA LINTING PRAVILA, JER SAM IH TWEAKO-VAO TOKOM RADA

TO JE PROSTO JER ME NESTO STO JE PODVUCENO CRVENO ZAISTA NERVIRA, A TICE SE SAMO PRETTIER-A (SVE STO IMA VEZE SA PRETTIER-OM SAM JA KASNIJE STAVIO NA NIZI NIVO, AKO SMEM TAK ODA SE IZRAZIM, JER AKO CE TO PRETTIER DA ISPRAVI, ZASTO JE TO PODVUCENO CRVENOM)
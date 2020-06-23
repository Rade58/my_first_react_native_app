# SADA CU SE POZABAVITI NAVIGATION-OM

NARAVNO TREBA POSLUSATI KADI, ALI TAKODJE JE POTREBNO PROCITATI SVE ODAVDE:

<https://kadikraman.github.io/react-native-v2/navigation-intro>

# ONO STO SAM SAZNAO IZ POMENUTOGA JESTE

- React Native NEMA BUILT IN NAVIGATION, I ZATO **MORAS KORISTITI LIBRARY**

- MOGU DA BIRAM IZMEDJU DVA LIBRAY-JA: [React Navigation](https://reactnavigation.org/) I [React Native Navigation](https://wix.github.io/react-native-navigation/docs/before-you-start/)

**OBA LIBRARY-JA IMAJU ISTU FUNKCIONALNOST** (OBA RADE ISTU STVAR)

**OBA SE DANAS NE RAZLIKUJU U SEGMENTU PERFORMANSI**

# JA CU UCITI LIBRARY `React Navigation` JER JE ON BUILT INTO EXPO

AKO NECU DA IDEM IZVAN EXPO SAFESPACE-A, ODNOSNO AKO NE ZELIM DA EJECT-UJEM EXPO, KORISTIM POMENUTI LIBRARY

# POTREBNO JE INSTALIRATI NEKE DEPENDANCIES

[______](https://kadikraman.github.io/react-native-v2/navigation-expo)

- `yarn add @react-navigation/native`

**I DODAJEM I EXPO COMPATIBILE DEPENDANCIES** (KAO STO VIDIS INSTALIRAM IH UZ POMOC expo CLI-A)

- `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

# SADA U SVOJ APP, MOZES UVESTI KOMPONENTU, KOJA SE ZOVE `NavigationContainer` I BUKVALNO SVE WRAPP-UJES U NJU (UVOZ IZ `@react-navigation/native`)

MOZES VIDETI KAKO SAM TO URADIO INSIDE: `App.tsx`

***

***

# !!!! DODAVANJE NAVIGATION SA PLAIN React Native-OM !!!!

KAO STO REKOH, NEMAM EMULATORE I ZATO NE KORISTIM PLAIN REACT NATIVE VEC KORISTIM EXPO

ALI U BUDUCNOSTI [OVDE JE SVE OBJASNJEN OZA INSTALACIJE KOJE SU POTTREBNE I OSTALO, VEZAN OZA IMPLEMENTIRANJE NAVIGACIJE U PLAIN REACT NATIVE-U](https://kadikraman.github.io/react-native-v2/navigation-rn)

***

***

***

***

# PRE NEGO STO POCNEM DA RADIM PRIMER ZA NAVIGATION, MORAM URADITI NEKOLIKO STVARI

U PREDHODNOM PRIMERU NISAM SE BAS DRZAO CIRCULUM JER SAM SAM EXPLORE-OVAO REACT NATIVE DO ODREDJENOG NIVOA

ZATO NISAM IMPLEMENTIRAO OVO

```ts
const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];
```

NAIME JA IMAM ITEM-E A TREBAO SAM IH OBOJITI OVIM BOJAMA

TO CU SADA URADITI

A ZASTO?

**`IDEJA JE DA ZA OVAJ PRIMER NAVIGATION, JA USTVARI IMAM OBOJENE ELEMENTE I DA SE ONDA TOUCH-OM NA ELEMENT USTVARI ODLAZI NA SEPARATE PAGE UPRAVO TE BOJE NA KOJU SI TOUCH-OVAO`**

`A TAMO TREBA DA DEFINISEM PREDSTAVLJANJE COLOR PALETT-A`

***

ZATO MALO KORIGUJEM PRIMER I UVODIM OVAJ NIZ U PRIMER

**TAKODJE OVO IZISKUJE UPOTREBU `FlatList` A NE `SectionList`-A**

TAKO DA SAM SVE TO KORIGOVAO I MOGU SE POSVETITI PRIMER-U

***
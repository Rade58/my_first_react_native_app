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

ALI U BUDUCNOSTI [OVDE JE SVE OBJASNJEN OZA INSTALACIJE KOJE SU POTTREBNE I OSTALO, VEZANO ZA IMPLEMENTIRANJE NAVIGACIJE U PLAIN REACT NATIVE-U](https://kadikraman.github.io/react-native-v2/navigation-rn)

ZA OVO SU POTREBNI MULTIPLE SETUPS, I ZA ANDROID I ZA IOS, A POTREBNO JE I IMATI DOBRU MASIN UDA RUNN-UJES EMULATOR-E

TAKODJE MORAS IMATI MAC

***

***

# #️⃣#️⃣#️⃣#️⃣ VAZNE STVARI O NAVIGATIONU NA NATIVE DEVICE-U #️⃣#️⃣#️⃣#️⃣

- POSTOJE DVA TIPA NAVIGATION-A

:one: **`BOTTOM NAVIGATION`** (ROOT NAVIGATIONS)

:two: **`STACK NAVIGATION`**

I TO KADI [OVDE LEPO OBJASNJAVA](https://kadikraman.github.io/react-native-v2/adding-navigation)

ALI HAJDE DA JA SVOJIM RECIMA OBJASNIM

- **`BOTTOM NAVIGATION`** VIDEO SI JE NA PRIMER NA TWITTERU, ALI JE DOBAR PRIMER HEADSPACE APP

VIDIS NEKOLIKO IKONICA POREDANIH U REDU NA DNU, I KAKO PRITISKAS NA NJIH POJAVLJUJE TI SE NOVI SCREEN

I KADA TO RADIS VEOMA JE BITN UOCITI DA **PAGE, ODNOSNO SCREEN JE LOADED IMMEDIATELY AS YOU NAVIGATE**

`OVO ZNACI DA SE TVOJE, ALL BOOTOM ROOT NAVIGATION PAGES KOJE IMAS` **`RENDER-UJU AS SOON AS YOU OPEN APPLICATION`**

> `So if you have any, like crazy data fetching that you're doing, be mindful of the fact that everything that gets launched when you launch the route page, get launched straight away.`

PREDPOSTAVLJAM DAKLE DA OVAJ QUOTE PREDSTAVLJA UPOZORENJE DA BI TREBALO OBRATITI PAZNJU DA IPAK NEMAM VELIK IDATA FETCHING ZA POMENUTU TIP NAVIGATION-A

- **STACK NAVIGATION** JE NAVIGATION INSIDE PAGES; ODNONO NAVIGATION DOLZAZI IN STACKS

>> NAVIGATION INSIDE PAGES, COMES IN STACKS

UPRAVO JE BIO PRIMER NA HEADSPACE APP, KADA JE KADI KLIKNULA NA ODREDJENI ELEMENT NA PAGE-U (NE GOVORIM O BOTTOM NAVIGATION-U), KADA SE ONDA OTVORILA NOVA STRANICA

**`TA NOVA STRANICA IMA` `BACK BUTTON` (U LEVOM GORNJEM COSKU NAJCESCE)**

ALI AKO POGLEDAS BOTTOM, ODNOSNO BOTTOM NAVIGATION, VIDECES DA SI I DALJE NA ISTOM MESTU STO SE TICE BOTTOM NAVIGATION-A

**`USTVARI DODAT JE NOVI PAGE ON TOP OF MY STACK, ALI TI --NE IDES-- NA WHOLE DIGFFERENT PAGE`**

I OVO SLEDECE JE BITNA STVAR

TI MOZES DA PROMENIS BOTTOM NAVIGATION, ODNONO DA NAVIGATE-UJES DO DRUGOG SCREENA ODNONO PAGE0A U POGLEDU BOTTOM NAVIGATION-A

**I ONDA MOZES PONOVO DA SE VRATIS U PREDHODNI BOTTOM PAGE NA KOJEM SI BIO**

**`TADA CES VIDETI DA TVOJ STACK (ODNONO TVOJ 'STACK NAVIGATION POREDAK' ZA TRENUTNO IZBRANI BOTTOM) NIJE RESETOVAN, DAKLE I DALJE CES BITI NA PAGE-U STACK NAVIGACIJE, KOJI SI OTVORIO PRE NEGO STO SI, RANIJE NAVIGATE-OVAO U POGLEDU BOTTOM NAVIGATION-A`**

***

## JA CU U MOM PRIMERU DODAVATI STACK NAVIGATION, A BOTTOM NAVIGATION NIJE POTREBNA ZA MOJ APP

NAIME JA VEC IMAM PAGE, NA KOJEM JE RENDERED LIST SA COLORIMA

JA CU DEFINISATI DA SE MOZE TAPOVATI NA ITEM

A TO CE REZULTOVATI OTVARANJEM NOVOG PAGE-A U STACKU, A ONO STO CE BITI PRIKAZANO NA NOVOM PAGE-U, BICE COLOR SCHEMA ZA KARAKTERISTICNU BOJU

***

***

# A PRE NEGO STO POCNEM DA RADIM PRIMER ZA NAVIGATION, MORAM URADITI NEKOLIKO STVARI

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
***

# :one::one::one::one: DODAVANJE NAVIGATION-A :one::one::one::one:

OVAJ DEO SE ISTO APLICIRA I ZA EXPO A I ZA PLAIN REACT NATIVE

STO SE TICE REACT NAVIGATION LIBRARY-JA, SVI NAVIGATORI SI BROKEN INTO SMALL LIBRARIES

A JA CU SAMO KORISTITI STACK NAVIGATION I MORAM DA INSTALIRAM NAVIGATORA

## MORAS PRVO INSTALIRATI `STACK NAVIGATOR`-A

- `yarn add @react-navigation/stack`

## DOBRA PRAKSA JE IMATI `screens` DIREKTORIJUM GDE CES KEEPOVATI SVE SVOJE PAGE-OVE

- `mkdir screens`

## STO SE TICE `App.tsx`, CISTO TI NAPOMINJEM DA SI TI TAMO SVE WRAPP-OVAO U `NavigationContainer` 

TO TI JE BIO UVOZ IZ `@react-navigation/native`

## KRIRACU DVA SCREEN-A: `Home` SCREEN I `ColorPalette`

- `touch screens/Home.tsx`
- `touch screens/ColorPalette.tsx`

U SUSTINI CollorPallete KOMPONENTU CU STAVITI ONU FLAT LIST-U KOJA SE NALAZI U `App.tsx`; A TO SU OBOJENI ELEMENTI KOJI SU RENDERED UZ POMOC `FlatList` KOMPONENTE

U SUSTINI JA CU ZA screens/ColorPalette.tsx

**USTVARI TACNIJE RECENO JA CU SAV ONAJ FLAT LIST CODE APSTRACTOVATI OUT U NOVU KOMPONENTU** (TO JE **`ColorPalette`**)

**`POSTO SI ZAVSIO DEFINISANJE ColorPalette KOMPONENTE UVOZIS JE U App.tsx UKLONI SAV VISAK CODE-A`**

JER ZA RENDERING LISTE COLOR ITEM-A. BICE ODGOVORNA COLOR PALLET KOMPONENTA

Home KOMPONENTU SAM ZA SADA DEFINISAO SAMO KAO HELLO WORLD KOMPONENTU (DAKLE RENDERUJE SAMO HELLO WORLD)

### UVESCU KOMPONENTE (ODNOSNO SCREEN-OVE) `Home` I `ColorPalette` U MOJA APP (`App.tsx`)

## U `App.tsx` UVOZIM TAKODJE I FUNKCIJU `createStackNavigator` FROM `@react-navigation/stack`

- `code App.tsx` 

```tsx
import React, { FunctionComponent } from 'react';

//
import { NavigationContainer } from '@react-navigation/native';

// === !== === !== === !== === !== === !== ===
import { createStackNavigator } from '@react-navigation/stack';
// === !== === !== === !== === !== === !== ===

import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

// I KREIRAM STACK
const Stack = createStackNavigator();
// Stack MOGU SMATRATI           'SANDBOX'-OM        SCREEN-OVA
//                                                              IZMEDJU KOJIH SE MOZE NAVIGATE-OVATI IN A STACK
// === !== === !== === !== === !== === !== ===
// JA USTVARI IZ    Stack   OBJEKTA IZDVAJAM        Navigator       KOMPONENTU, KOJU ONDA RENDER-UJEM
// I NJEGA WRAPP-UJEM AROUND NECEGA DRUGOGSTO ISTO IZDVAJA

// IZDVAJAM I       Screen      KOMPONENTU

// === !== === !== === !==

const App: FunctionComponent = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* SADA DEFINISEM SVE SCREEN-OVE INSIDE STACK */}
      {/* I KAO STO VIDIS REFERENCIRAM KOMPONENTU, ALI DAJE M I IME */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ColorPalette" component={ColorPalette} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
```

## SADA MOZES STARTOVATI APP I VIDECES DA CE HOME BITI RENDERED

TO JE ZATO STO JE ON PRVI LAYED OUT

## E SADA ZELIM DA DEFINISEM LINK-OVE (AKO SE TO TAKO ZOVE U REACT NATIVE-U)

USTVARI JA ZELIM DA UVEDEM INTERAKTIVNOST

## A DA BIH MOGAO DA IMAM INTERAKTIVNOST, TREBA MI NEKI NACIN ZA REGISTERING USER TAPS (DODIRA, ILI TOUCH-EVA)

NAIME JASN OJE DA NA WEB-U IMAM KLIK I IMAM BUTTONS, JA NE MOGU DA DEFINISEM KLIK HANDLER-A NA NATIVE-U 

# ONO STO MI TREBA JESU `TOUCABLE COMPONENTS`, KOJE ISTO UVOZIS IZ `'react-native'` PAKETA

POSTOJI CELA SELEKCIJA TIH KOMPONENTI

[EVO KADI IH JE OVDE PREDSTAVILA](https://kadikraman.github.io/react-native-v2/adding-navigation) (NA KRAJU STRANICE)

A TO CU URADITI I JA

- [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight) (KOMPONENTA CE BITI POTAMNJENA NA TOUCH)

- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) (SMANJICE JOS SE OPACITY ON TOUCH) (**NAJCESCE SE KORISTI**)

- [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback) (NECE BITI NIKAKVOG VIZUELNOG EFFECT-A) (**NAJCESCE SE KORISTI**)

- [TouchableNativeFeedback](https://reactnative.dev/docs/touchablenativefeedback) (BICE OSECAJ KAO NA ANDROID-U)

## JA CU KORISTITI `TouchableOpacity` U SLUCAJU MOG PRIMER-A

NA NJEMU CES REGISTROVATI HANDLER:

- `onPress`

NA WEB IMAS onClick A NA NATIVE DEVICE-U JE **`onPress`**

## A ONO STA SE KORITI JESTE `navigation` PROP, I ON CE TI SLUZITI ZA NAVIGATION BETWEEN SCREENS

[POGLEDAJ DOKUMENTACIJU](https://reactnavigation.org/docs/navigation-prop)

VIDIS POSTO JE TVOJA KOMPONENTA REFRENCED KAO SCREEN (POGLEDAJ GORNJI POSLEDNJI CODE BLOCK KOJI SAM POSTAVIO)

**TO ZNACI DA IZ NJE MOZES IZDVOJITI `navigation` PROP**

A TAK `navigation` PROP JESTE USTVARI JESTE **NAVIGACIJSKI STACK** *NAS KOJ ITI MOZES STACKOVATI SCREEN*

USTVARI TO JE OBJEKAT (ILI BOLJE RECENO NIZ) NA KOJI MOZES `push`-OVATI (ALI I NE SAMO TO **IMAS I SVE OSTALE ARRAY METHODS**)

A STA TI USTVARI STACK-UJES, ODNOSNO PUSH-UJES

**`E PA TO JE IME SCREEN-A`** (ZADAO SI GA NA Screen KOMPONENTI (OPET POGLEDAJ GORNJI CODE BLOCK KOJ ISAM OSTAVIO))

NAVIGATION PROP JESTE NAVIGATIO NARRAY

## IMAJUCI SVE TO NA UMU DEFINISACU HANDLER NA Home KOMPONENTI I NA KRAJU PRITISKOM NA NEK ITEKST NA Home-U TREBAL OBI DA NAVIGATE-UJE DO ColorPallet-A

- `code screens/Home/tsx`

```tsx
import React, { FunctionComponent } from 'react';

import {
  Text,
  View,
  // UVEZAO SAM KOMPONENTU ZA TOUCHING
  TouchableOpacity,
} from 'react-native';

// DA VIDIM DA LI MOGU DA NADJEM PRAVI PROP TYPE
import { StackScreenProps } from '@react-navigation/stack'; // OVAJ TYPE IMA I GENERIC, KOJIM SE PREDPOSTAVLJAM DEFINISU OSTALI PROPSI KOMPONENTE (VIDIM DA MORA BITI Record)
// PRONASAO SAM PRAVI TYPE
// === !== === !== ===

// sa koji mogu da type-ujem komponentu
const Home: FunctionComponent<StackScreenProps<any>> = ({
  navigation,
  route,
}) => (
  // KAO STO VIDIS IMAS I route PROP (PREDPOSTAVLJAM DA JE TO ONAJ name SCREENA, KOJI MI NE TREBA OVDE)
  <View>
    <TouchableOpacity
      onPress={() => {
        //  EVO VIDIS PUSH-OVAO SAM IME SCREEN-A U NAVIGATION
        navigation.push('ColorPalette');
        // DAKLE TO BI TREBAL ODA SE DOGODI ON PRESS
      }}
    >
      <Text>Color Pallete</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
```

I SADA MOZES DA STARTUJES APP I DA PROBAS DA NAVIGATE-UJES

## KADI JE UMESTO `navigation.push` KORISTILA `navigation.navigate`

ISTI JE PRINCIP I NIJE MI JASNO KOJA JE RAZLIKA IZMEDJU DVA POMENUTA

MOGUCE JE DA JE POMENUTA FUNKCIJA NESTO OPTIMIZOVANA ILI IMA ANIMATION

## ISTO TAKO `TOUCHABLES` SU PO DEFAULTU SA WHITE BACKGROUND-OM, PA MOZES I SAM DEFINISATI STIL ZA NJIH

# ZATO CU SADA DA DEFINISEM NEKE STILOVE ZA TOUCHABLE ELEMENT, A TAKODJE CU POKUSTATI DA KORISTIM `navigation.navigate` UMESTO `navigation.push`

```tsx
import React, { FunctionComponent } from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

const Home: FunctionComponent<StackScreenProps<any>> = ({
  navigation,
  route, // OVO I DALJE NE KORISTIM
}) => (
  <View>
    <TouchableOpacity
      style={styles.touchableStyles}
      onPress={() => {
        // KORISTIO SAM     navigate I NE VIDIM NIKAKVU RAZLIKU
        navigation.navigate('ColorPalette');
      }}
    >
      <Text style={styles.textStuff}>Color Pallete</Text>
    </TouchableOpacity>
  </View>
);

// DEFINISAO I UPOTREBIO STILIZOVANJE

const styles = StyleSheet.create({
  touchableStyles: {
    margin: 8,
    backgroundColor: 'crimson',
    width: 100,
    padding: 8,
    marginTop: 28,
  },
  textStuff: {
    color: 'blanchedalmond',
  },
});

export default Home;
```

MALO SAM STILIZOVAO TOUCHABLE

A KORISCENJE navigate UMESTO push NISTA NIJE PROMENILO

# JEDNA STVAR KOJU MOZDA TREBAS DA ZNAS JESTE DA TI NE TREBA `SafeAreaView` ZA SCREEN-OVE

JER JE U VRHU VEC POSTAVLJEN BANNER KOJI GOVORI O KOJEM JE PAGE-U REC A TAJ BANNER NIJE OVERLAP-OVAO TELEFONOV TOP BAR (TAMO GDE JE BATERIJA I TIME ...)

# ALI UPRAVO TI MOZES STILIZOVASTI UPRAVO TAJ PROSTOR PAGE-A, GDE STOJI IME SCREEN-A; ALI TO RADIS U SCREEN KOMPOENENTI

SADA CU UKLONITI `SafeAreaView` FROM `ColorPalette` KOMPONENTE

- `code screens/ColorPalette.tsx`

```tsx
import React, { FunctionComponent } from 'react';
import {
  SafeAreaView, // NE KORISTIM VISE
  FlatList,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

import ItemBox from '../components/ItemBox';

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

const ColorPalette: FunctionComponent = () => {
  const {
    /* first,
    third,
    fourth, */
    droidSafeArea,
    /*  second,
    otherStyles,
    //
    textOne,
    textTwo,
    textThree,
    textFour, */
    //
    explain,
    textExplain,
    flatListBox,
    screenStyle,
  } = globalStyles;

  return (
    // COMMENTED OUT I NE KORISTIM GA VISE
    // <SafeAreaView style={droidSafeArea}>
    <View>
      <View style={explain}>
        <Text style={textExplain}>
          Evo ih neki element i stilizovani su kao što vidiš, i nalaze se u flat
          listi
        </Text>
      </View>
      {/* --------------------------*/}
      <Text>Fake Header</Text>
      <FlatList
        style={flatListBox}
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ItemBox itemName={item.colorName} boxColor={item.hexCode} />
        )}
        ListHeaderComponent={<Text>Neki Header</Text>}
        ListFooterComponent={<Text>Neki Footer</Text>}
        ListEmptyComponent={<Text>Buyaaaaaaa</Text>}
        // horizontal={true}
      />
      <Text>Fake Footer</Text>
      {/* === !== === !== === !== */}
    </View>
    // </SafeAreaView>
  );
};

export const globalStyles = StyleSheet.create({
  screenStyle: {
    backgroundColor: 'blanchedalmond',
    color: 'crimson',
  },

  flatListBox: {
    borderColor: 'crimson',
    borderWidth: 2,
    marginHorizontal: 8,
  },

  explain: {
    margin: 28,
  },
  textExplain: {
    fontSize: 20,
  },
  // === !== ===
  otherStyles: {
    flex: 0,
    borderWidth: 2,
    paddingTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: 'yellow',
    marginTop: 18,
    marginHorizontal: 14,
    padding: 24,
  },
  // === !== === !==
  first: {
    backgroundColor: 'olive',
  },
  second: {
    backgroundColor: 'crimson',
  },
  fourth: {
    backgroundColor: 'tomato',
  },
  // === !== === !==
  third: {
    backgroundColor: 'teal',
  },
  // === !== === !==
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  // === !== === !==
  textOne: {
    color: 'blanchedalmond',
    fontSize: 12,
    fontWeight: 'normal',
  },
  textTwo: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textThree: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  textFour: {
    color: 'green',
    fontSize: 18,
    fontWeight: '100',
    fontStyle: 'italic',
  },
});

export default ColorPalette;

```

**A BANNER SCREEN-A MOGU STILIZOVATI AKO DODAM DODATNE OPCIJE NA SCREEN-U**

TADA NA ZELJENOM `Screen` REACT ELEMENTU (TAKVA DVA SI KORISTIO U `App.tsx`) ZADAJES `options` PROPS

U TOM `options` PROP-U MOZES DA ZADASW I `title` I JOS MNOGE DRUGE STVARI (USTVARI MOGUCE JE PROSLEDJIVATI DINAMICKI, RAZNE STVARI, PRETEZNO STILOVE, DA BIH ONI BILI UPOTREBLJENI NA PAGE-U (STO CU RADITI  UNAVIGATION VEZBI))

# SAZNAO SAM RAZLIKU IZMEDJU `push` I `navigate`

>> There push adds the screen to the top of the stack whereas, I think navigate is if you use the bottom nav, you could navigate to a different nav as well. Cuz I think push would automatically just add it to the top of the current stack. Whereas navigate you could use to also navigate between the bottom navs.

DAKLE navigate IMA U VIDU I BOTTOM NAVIGATION
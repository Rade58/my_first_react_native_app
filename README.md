# U OVOM BRANCH-U IDEJA JE DA MALO PROSIRIM PRIMER IZ PROSLOG BRANCH-A; A NAJVAZNIJA STVAR OGLEDA SE U TOME DA SE MOGU PROSLEDJIVATI PARMAS, U SCREEN DO KOJEG NAVIGATE-UJEM, A TO OSTAVLJA MNOGE MOGUCNOSTI UPOTREBE TIH PODATAKA, KOJI BI BILI PROSLEDJENI 

[OVDE MOZES VIDETI POSTAVKU](https://kadikraman.github.io/react-native-v2/navigation-exercise)

DA SE SAMO KRATKO OSVRNEM NA POSTAVKU, JER PLANIRAM OVDE DA IZNESEM JOS DOSTA INFORMACIJA UZ PRIMER

A OVO SU TI TRI NIZA KOJA CES KORISTITI SA `FlatList` KOMPONENTOM

```ts
const SOLARIZED = [
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

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const THEME_COLORS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

```

OVA TRI NIZA MOZES SPOJITI U JEDAN ARRAY, KOJI BI SE NA PRIMER ZVAO `COLLOR_PALETTS`

```ts
const COLOR_PALETTES = [
  {title: 'SOLARIZED', data: SOLARIZED},
  {title: 'RAINBOW', data: RAINBOW},
  {title: 'THEME_COLORS', data: THEME_COLORS}

]
```

A SADA DA SE POSVETING TYPESCRIPT-U, ODNOSNO TYPE DEFFINITIONSIMA VEZANIM ZA react-navigation

# DA TI PRVO OBJASNIM, KAKO MOZES PROSLEDJIVATI PARAMETRE, 'IZ SPOLASNJEG SVETA' U SCREEN KOMPONENTU

KADA NEST-UJES Stack.Screen KOMPONENTU, TI JOJ MOZES DODATI PROPSE

:one: **`initialParams`** 
  
SA CIME JOJ MOZES PROSLEDITI STA ZELIS, I TO TREBA DA BUDE DOSTUPNO U KOMPONENTI KOJA REPREZENTUJE SCREEN, **KROZ NJEN `route` PROP** (KOJI MORAS DODATN ORESTRUKTURIRATI DA UZMES PODATKE (params PROPERTI))

:two: **`options`**

I TO TREBA DA BUDE FUNKCIJA I TO OVAKVA:

```ts
// MORAS RESTRUKTURIRTI     route     SVE DOK NE NADJES     props     I ONDA MOZES PROSLEDJIVATI U NJIH STA ZELIS

({navigation, route}) => ({ovo: 'jeste objekat koji saljem unutar screen-a'})

``` 

# ALI TI MOZES PROSLEDJIVATI U KOMPONENTU U KOJU NAVIGATE-UJES; TADA TI PROSLEDJUJES IZ JEDNOG SCREEN-A U DRUGI

TADA KORISTIM `navigation.navigate` I UZ IME SCREEN-A DO KOJEG NAVIGATE-UJEM DEFINISEM I DODATNE PODATKE KOJE TREBA PROSLEDITI DO NOVOG SCREEN-A

```ts

navigation.navigate("NekiScreen", {
  // U OVOM OBJEKTU TREBA DA SE NALAZI SAV DATA KOJI TREBAS DA PROSLEDIS
})

// NISAM SIGURAN DA LI JE OVO MOGUCE ZA     push    ALI CU PROVERITI JEDNOM PRILIKOM

```

AL ISADA ZELIM DA SAZNAM KAKO NAJBOLJE IMPLEMENTIRATI TYPESCRIPT U OVOM SLUCAJU

# ONO STO ZELIM DA URADIM JESTE DA VIDIM KAKO JE NAJBOLJE TYPE-OVATI SCREEN KOMPONENTE, KAKO BI ZNAO STA DA OCEKUJEM U NJIMA, U POGLEDU DODATNIH PARMETARA; AL IZELIM TAKODJE DA TYPE-UJEM SAMI Screen, JER ZELIM DA IMAM I TYPESCRIPT PODRSKU KADA PROSLEDJUJEM DATA SCREEN-U

[JA U SUSTINI VEC IMAM GUIDE](https://reactnavigation.org/docs/typescript/)

ALI HAJDE DA TO DEFINISEM KROZ PRIMER, A IZ GUIDE-A ZNAM KOJE TYPE-OVE MOGU UVOZITI I KORISTITI

**ONO O CEMU SAM RAZMISLJAO JESTE DA JE IPAK NAJBOLJE DA `Stack` KREIRAM U ODVOJENOM JAVASCRIPT FAJLU, `A U TOM FAJLU BIH DEFINISAO I TYPE-OVE`**

KREIRACU I FOLDER DA BIH NEKAKO MARKIRAO DOBRU PRAKSU DA SE NA PRIMER, SVE VEZANO ZA NAVIGATORE DRZI U JEDNOM FOLDERU

- `mkdir navigators`

- `touch navigators/color-app-stack-navigator.ts`

```ts
// UVOZICU SVE I OBJASNJAVATI CEMU SLUZI
import {
  //
  createStackNavigator,
  // --> types
  // SLEDECI TYPE CE MI SLUZITI DA PRAVILNO TYPE-UJEM navigation
  //                KONKRETNO JE NAJVAZNIJE DA CE TO ODREDITI
  // U TYPING POREDKU, STA SMEM DA DODAM
  StackNavigationProp,
} from '@react-navigation/stack';

// TREBACE MI I NESTO S CIM MOGU DA TYPE-UJEM ROUTE, ALI TO SE UVIZI IZ DRUGOG PAKETA
import {
  RouteProp,
  // SAMO ZA PROVERU-----
  NavigationContainer,
  // -----
} from '@react-navigation/native';

// / --------------
import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import Tryout from '../screens/TryoutScreen';
// / --------------

// MORAS NAPRAVITI INTERFACE-OVE, KOJI CE ODGOVARATI PARAMSIMA, KOJE SMES SLATI U SCREEN
interface RouteColorScreenI {
  // U MOM PRIMERU TO CE BITI BOJE
  colors: { colorName: string; hexCode: string }[];
  title: string;
}
// DVA INTERFACE PRAVIM JER RAZLICITE STVARI SALJE U SCREEN-OVE NA KOJIMA CE BITI RENDERED COLOR, I U Home SCREEN
// JER U home SCREEN JA SALJEM SVE STO IMAM OD PODATAKA
interface RouteHomeScreenI {
  allColorData: {
    title: string;
    data: { colorName: string; hexCode: string }[];
  }[];
}

// ALI SADA JE DOBRO DA DEFINISES TYPE-OVE ZA ROUTE-OVE
// JER CES KORISTITI Record TYPE
// ALI OVO CE TI POMOCI STA SA CIM SMES DA PAIR-UJES
// O OVOME NEMA NISTA U DOKUMENTACIJI ALI IZGLEDA DA TREBAS DA POVEZES
// ROUTE TYPE SA TYPE-OVIMA ZA SCREEN-OVE

// DEFINISACU PRVO TYPE-OVE ZA MOGUCE SCREEN-OVE (TEK KASNIJE CES VIDETI ZASTO SAM ODLUCIO DA OVO IZVEZEM (U JEDNOJ SCREEN KOMPONENTI CES VIDETI ZASTO (ZATO STO NISU DOBRO TYPE-OVALI NESTO ALI NEMA VEZE)))
export type colorScreenNamesType = 'SOLARIZED' | 'RAINBOW' | 'THEME_COLORS'; // MOZDA JE OVO BIL ODOBRO MESTO ZA UPOTREBU enum-A, ALI TO CU U NEKOM MOM PROJEKTU

type homeScreenNameType = 'Home';

// === !== === A SADA DA DEFINISEM TE RECORD-E !== === !==
type colorRecordRouteToScreen = Record<colorScreenNamesType, RouteColorScreenI>;
type homeRecordRouteToScreen = Record<homeScreenNameType, RouteHomeScreenI>;
// === !== === !== === !==

// ====>      IZUZETNO VAZNO         &
//  MISLIM DA OVDE TREBA DODATI RECORDE KAO TYPE-OVE (MORAS KORISTITI      &      )
const Stack = createStackNavigator<
  homeRecordRouteToScreen & colorRecordRouteToScreen
>();

// SADA CU DA TYPE-UJEM DVA PROP-A KOMPONENTE KOJA TREBA DA REPREZENTUJE SCREEN

// TREBAS OBRATITI PAZNJU NA TO ODAKLE ZELIS GDE DA SE NAVIGATE-UJE
// JER MOZE SE DESITI DA POGRESNO DEFINISES TYPING ZA
// navigation
// A NAVIGATIO NTREBA BITI TAK OTYPED DA
// KORISTICU    StackNavigationProp   TYPE

// ZELIM TYPE SAFETY ZA SLEDECE
// ZELIM DA HOME PAGE IMA MOGUCNOST NAVIGACIJE DO OSTALIH COLOR PAGE-OVA
// I TAKODJE DEFINISEM DA IM SE PRI TOM NAVIGATE-INGU

// =============================================================================================
// ALI PRVO CU DEFINISATI ROUTE INSIDE SCREEN
//  I VODI MRACUNA STA GDE PRIPADA
// === KORISTIM     RouteProp
type routeOfColorScreenType = RouteProp<
  colorRecordRouteToScreen,
  colorScreenNamesType //   OPET SE MORA ZADADVATI MOGUCA IMENA
>;
type routeOfHomeScreenType = RouteProp<
  homeRecordRouteToScreen,
  homeScreenNameType
>;
// ==============================================================================================
// A SADA DEFINISEM KAKO CE nvigate PROP IZGLEDATI (USTVARI PO TYPE SAFTY-JU GDE CU SE MOCI NAVIGATE-OVATI IZ HOME-A)
// PRVO IDU VREDNOSTI STA CE SE MOCI POSLATI
// PA ONDA IDU VREDNSOTI DO KOJIH SCREEN-OVA CE SE MOCI POSLATI
// - PRVI GENERIC SE ODNOSI NA ONO STA SE SALJE
// - DRUGI ARGUMENT SE ODNOSI NA IMENA SCREEN-OVA
// ALI I DALJE CES MORATI KORISTI Record TYPE

type navigateToColorScreenType = Record<
  colorScreenNamesType,
  RouteColorScreenI
>;

type HomeNavigationPropType = StackNavigationProp<navigateToColorScreenType>;

// I TO BI BILO TO STO SE TICE TYPING-A ,A SADA MORAM ODLLUCITI STA DA IZVOZIM

// NIKAKAV NAVIGATION IZ COLOR SCREEN-OVA NIJE PREDVIDJEN IAK OSAM TAMO MOGAO DA DEFINISEM DA IMA HOME BUTTON ALI TO NECU URADITI
// U OVOM SLUCAJU

// MOGU PODELITI IZVOZENJE U NEKOLIKO GRUPA

const { Navigator, Screen } = Stack;
/**
 * @description Navigator SE WRAPPP-UJE OKO INDIVIDUAL Screen-OVA (OVDE SU TI TE DVE KOMPONENTE) /I NE ZABORAVI DA SVE MOTA BITI U *" NavigationContainer "* KOMPONENTI/
 */
export default { Navigator, Screen }; // MOGAO SAM DIREKTNO IZVESTI Stack ALI OVDE TI SVE POKAZUJEM KAKO IZGLEDA
// TI IZVEZI SAMO       Stack     U BUDUCNOSTI, KAO DEFAULT EXPORT

// ZELIM DA IZVEZEM SVE POTREBNE TYPE-OVE
// ONO STO CE TREBATI SU PROP TYPE-OVI ZA KOMPONENTE

export interface HomeScreenProps {
  navigation: HomeNavigationPropType;
  route: routeOfHomeScreenType;
}

export interface ColorScreenProps {
  navigation: any; // NEMA NIKAKVE JASNE NAVIGACIJE, MOZE SE RADITI BILO STA IZ COLOR SCREEN-OVA
  route: routeOfColorScreenType;
}
```

# SADA MOGU DA KRIRAM JEDNU COLOR PALLETE KOMPONENTU, ODNONO SCREEN, U KOJOJ CU KORISTITI `ColorScreenProps` INTERFACE

- `touch screens/Pallete.tsx`

```tsx
import React, { FunctionComponent } from 'react';

import { View, Text, FlatList } from 'react-native';

// UVOZIM TYPE-OVE
import { ColorScreenProps } from '../navigators/color-app-stack-navigator';

// UVOZIM KOMPONENTU, KOJI CU KORISTITI KAO INDIVIDUAL LIST ITEM (MAL OSAM JE MODIFIKOVAO DA BI PRIHVATLA hexCode I ColorName PROPSE)
import Item from '../components/ItemBox';
// POGLEDAJ AKO TE ZANIMA KAKO IZGLEDA

const Pallete: FunctionComponent<ColorScreenProps> = ({
  navigation, // OVO OVDE NECE BITI NI ISKORISCENO (JER NAVIGACIJE IZ OVE KOMPONENTE NEMA) (SEM OSIM PRITISKA NA 'BACKSPACE')
  route,
}) => {
  const { params } = route; // INSIDE route POSTOJE JOS PROPERTIJI key I name (ALI NE VIDIM DA M ITREBAJU)

  const { colors, title } = params;

  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <Item hexCode={item.hexCode} colorName={item.colorName} />
        )}
        keyExtractor={({ hexCode }) => hexCode}
      />
    </View>
  );
};

export default Pallete;
```

# KREIRACU I HOME KOMPONENTU, ODNOSNO SCREEN

- `touch screens/ColorHome.tsx`

```tsx

```






#########################################
#########################################
#########################################
#########################################
#########################################
#########################################
#########################################
#########################################
#########################################

# ALI PRE NEGO STO ODRADIM PRIMER, HAJDE DA NAUCIM NEKOLIKO STVARI O ONOJ KOMPONENTI KOJA SE KORISTI KAO SCREEN, ODNOSNO DA VIDIM KOJI SU TU BITNI MOMENTI, KONKRETNO PO PITANJU TYPESCRIPT-A, KOJEG JA KORISTIM

ONO SA CIME BI TYPE-OVAO PROPSE TAKVE KOMPONENTE JESTE SLEDECE

```ts
// OVO JE DAKEL TYPE KOJEG SAM RANIJE SPOMINJAO, ALI GA NISAM UPOTREBIO NA BOLJUI NACIN
import { StackScreenProps } from '@react-navigation/stack'

// MEDJUTIM I OVAJ TYPE ZAHTEVA DA MU SE DODA BAR JEDAN TYPE ARGUMENT (GENERIC) 

```

ZNAS I SAM DA JE U KOMPONENTI KAOJA SE KORISTI KAO SCREEN, USTVARI DOSTUPAN **`navigation`** PROP

I ON IMA METODE POPUT **`push`** I **`navigate`**

SECAS SE KAKO SI OVIM METODAMA RANIJE SAMO `ZADAVAO IME PAGE DO KOJEG ZELIS DA NAVIGATE-UJES` KAO ARGUMENT (DAKLE STRING)

MEDJUTIM, METODI SE MOZE DODAVATI JOS ARGUMENTATA

MOZE SE DODATI BILO STA I TO CE 'ZAVRSITI' KAO **`PODACI DOSTUPNI ZA PAGE DO KOJEG SE NAVIGATE-UJE`** 

```ts
// EVO POGLEDAJ
navigation.navigate('Home', {nekaBoja: '#fffff', nekiTekst: "blah"})
```

## E UPRAVO A SA TYPE-OM `StackScreenProps`, ODNONO SA NJEGOVIM GENERICS-OM, KOJI EXTEND-UJE `Record` TYPE (TO JE GLOBALNO DOSTUPAN TYPE U TYPESCRIPT-U), TI MOZES DEFINISATI DA IMAS SUGESTIONS KADA KORISTIS `navigate`, ODNONO DA STRIKTN OZNAS STA SMES POSLATI, U NOVI SCREEN, JER SI TI SVE TO TYPE-OVAO

EVENTUALLY DOCI CU DO TOGA ZASTO SE KORISTI Reacord

ALI HAJDE DA SE PRVO PODSETIM RECORD-A

U SUSTINI MISLIM DA JE `NAJVAZNIJE TO DA SE Record-OM MOZE DEFINISITATI I KOJE IME SME DA IMA NEKI PROPERTI U KEY VALUE PARU U OBJEKTU`

HAJDE SADA DA VIDIM KAKO RADI Reacord

## HAJDE PRVO DA VIDIM, KAKAV JE USTVARI `Record` TYPE

EVO NJEGOCVE DEFINICIJE

```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

// NEMOJ DA TE ZBUNJUJE     keyof

// STA JE USTVARI     keyof

// PA EVO GLEDAJ OVAJ TYPE              type nesto = keyof {trah: 1, blah: "48px"}
//                            nesto   JE USTVARI TYPE-A     'trah' | 'blah'

```

IZGLEDA, NAIZGLED KOMPLIKOVANO ALI IPAK JE USTVARI, SAMO TYPE KOJI DEFINISE NEKI OBJEKAT

A GENERICS-I OVOG TYPE, DEFINISU

- `TIP KLJUCA OBJEKATA`

- `I TIP VALUE-A TOG KLJUCA`

HAJDE DA URADIM JEDNU VEZBU SA DVA Record-A, DA VIDIS KAKVA JE USTVARI NJEGOVA MOC

```ts
type pneuma = 'leblebija' | 'badem';

enum vicarious {
  leblebija = 'leblebija',
  badem = 'badem',
}

type rec1 = Record<pneuma, { a: string; b: number }>;

type rec2 = Record<vicarious, { a: string; b: number }>;

// MORAS KORISTITI SVAKI KLJUC BEZ OBZIRA STO JE U PITANJU ENUM ILI TYPE SA |
// DAKLE U OBJEKTU MORAJU BITI I  leblebija     I     badem

const abala: rec1 = { badem: { a: '', b: 2 }, leblebija: { a: '', b: 4 } };

const inglez: rec2 = { badem: { a: '', b: 8 }, leblebija: { a: '', b: 48 } };


// I leblebija I badem MORAJU IMATI TACNE VREDNOSTI   

```

# MEDJUTIM `StackScreenProps` MALO DURUGACIJE UZIMA ARGUMENTE, ILI BAR SE MENI TAKO CINI DA IMA PECULIAR THING, ALI MISLIM DA MI JE JASNO

EVO POGLEDAJ KAKO SAM JA NAPRAVIO TAJ TYPE

**NECU KORITITI KONKRETNO OVAJ TYPE (OVO JE SAMO POKAZNA VEZBA), ALI GA OVDE POKAZUJES, KAKO BI BOLJE ZNAO STA TREBA DA URADIS U PRIMER-U**

```ts
type screenNames = "SOLARIZED"| "LIGHT"| "DARK"

// OVAJ SAM TYPE EXPORT-OVAO JER CU GA KORISTITI
// PRILIKOM     POZIVANJA       import { createStackNavigator } from '@react-navigation/stack'
// (PRILIKOM POZIVANJA  createStacNavigator )
export type stackRecord = Record<string, {hexBoje: string[]; something: string }>

// === !== === !==
type ComponentScreenProps = StackScreenProps<stackRecord, screenNames>
// === !== === !==
```

**KADA SA OVIM TYPE-OM TYPE-UJES SVOJU KOMPONENTU, BICE TI DOSTUPNO NEKOLIKO STVARI, STO CU I OBJASNITI**

POSTO ZNAS DA MOZES IMATI SLEDECE PROPSE

```ts
const {navigation, route} = props

// I POSTO    JE OVAKAV route PROP

const {key, name, params} = route

```

STVARI CE BITI TYPED OVAKO

```php

key  -->   string

name -->   "SOLARIZED"| "LIGHT"| "DARK"

params    -->      {hexBoje: string[]; something: string}  

```

POCETNE **PARAMS** MOZES PROSLEDITI KADA DEFINISES Screen, A MORACE BITI U GORNJEM FORMATU, JER SAM TAKO DEFINISAO

# DAKLE MORAS TAKODJE DA ZADAS TYPE DEFFINITION ZA SCREEN, KADA PRAVIS SCREEN, I UPRAVO SAM ZATO IZVEZAO POMENUTY TYPE (Record), MADA JE TYPE MOGAO BITI DEFINISAN BILO GDE

TO RADIS DA BI STRIKNO DEFINISAO STA SE MOZE PROSLEDITI ZA POCETAK

```tsx
// PRI KREIRANJU STACK-A

import {stackRecordtType} from 'tamo gde sam ga definisao'

const Stack = createStackNavigator<stackRecordType>();

// U SUSTINI SADA IMAS TYPE SAFTY KADA DEFINISES SCREEN (KADA KORISTIS Stack.Screen)

// A RANIJE SI POKAZAO KAKO DA IMAS TYPE SAFTY KADA DEFINISES KONKRETNI SCREEN KOMPONENTU
```

**JA CU SVE OVO POKAZATI I U KONKRETNOM PRIMER-U PA CES MOCI DA VIDIS SAV CODE**

TO JEST JA CU SAV CODE PREDSTAVITI OVDE KADA ZAVRSIM PRIMER

# ALI ONO STO NISAM ZNAO RANIJE JESTE DA SVE IMAS U DOKUMENTACIJI

<https://reactnavigation.org/docs/typescript/>

ALI NE VERUJEM DA JE SVE UP TO DATE, JER SAM JA MORAO KORISTITI Reacord

A NIGDE NISAM VIDEO DA SE U DOKUMENTACIJI KORISTI Record

**CAK SAV VIDEO DA NEKO GOVORI DA BAS SVE I NIJE DEFINISANO KAKO TREBA SA TYPESCRIPTOM**

# TAKODJE KADA SE DEFINISU PARMAS ZA Screen ,TADA SE I NE MORAJU PROSLEDJIVATI DODATNI PARAMS, TAKO STO UOPSTE NE KORISTIS `initialParams` PROPS

TAKO DA SU INICIJELNI USTVARI PARMAS OPCIONA STVAR

# MEDJUTIM TI MOZES KORISTITI I `options` FUNKCIJU NA SAMOM SCREENU PRI NJEGOVOM LAYINGU U NAVIGATOR

PARAMETRI TE FUNKCIJE SU ISTI KAO I ONI PROPSI KOJI BI SE NASLI U SCREEN KOMPONENTI

navigate I route A POVRATNA VREDNOST TE KOMPONENTE MORA BITI ONO STA SI TYPE-OVAO, A STA SE SME PROSLEDITI PRI KORISCENJU navigate-A

I MOZES RESTRUKTURIRATI route

ALI TO ZNACI DA JOJ MOZES SLATI STA HOCES IZ SPOLJANJEG SVETA ALI NARAVNO TO MORA BITI U SKLADU SA TYPSCRIPT TYPING-OM

# !!!! PROBLEM SA TYPING-OM !!!!

ON OSTO SE SALJE IZ SPOLJASNJEG SVETA, JE ISTO ONO STO SE MORA PROSLEDITI KADA SE ZOVE `navigate`

SEM AKO NEMAM ZADATU OPCIONSOST U POGLEDU TYPE-OVA ZA POMENUTI

MOZDA UPRAVO MOGU DA ISKORISTIM TU OPCIONSOST (VIDECU KAKO)

***
***
***
***

# ---- DA SE KONACNO POSVETIM PRIMERU ----

# MISLIM DA SAM DOBRO OSMISLIO IDEJU PO KOJOJ BI SE NAVIGATOR CUVAO U POSEBNOM FAJLU, ALI I SVI POTREBNI TYPE-OVI BI SE TAM ODEFINISALI

- `mkdir navigators`

- `touch navigators/color-app-stack-navigator.ts`

```ts

```

# 'NORMALIZUJ' PODATKE DA BUDU POGODNI ZA `SectionList`, A TAKODJE MOZES DA SLICE-UJES NESTO OD PODATAKA DA BIH IMAO BIH RENDER-OVAO NEKE BOJE I WRAPP-OVAO IH U `TouchableOpacity` NA HOME SCREEN-U 

MOZE DATA DA TI BUDE I U SEPARATE FILE-U

#######################################################################
#######################################################################
#######################################################################
#######################################################################
<!--  POGLEDAJ DOKUMENTACIJU, MOZDA NISTI TREBAO DA KORISTIS RECORD -->

<!-- POGLEDAJ DOKUMENTACIJU A OVO SVE IZBRISI -->

TYPE-UJ SVAKI PROP ODVOJENO

```ts
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
```

#######################################################################
#######################################################################
#######################################################################
#######################################################################



KREIRACU KOMPONENTU KOJA TREBA DA BUDE SCREEN ZASIGURNO

ALI TA KOMPONENTA CE IMATI "DINAMICKI SCREEN NAME", ODNOSNO SCREEN NAME CE BITI NESTO STO SE MOZE PASS-OVATI IZ SPOLJASNJEG SVETA

- `touch screens/ColorScreenTemplate.tsx`

```tsx

```


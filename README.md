# U OVOM BRANCH-U IDEJA JE DA MALO PROSIRIM PRIMER IZ PROSLOG BRANCH-A; A NAJVAZNIJA STVAR 

[OVDE MOZES VIDETI POSTAVKU](https://kadikraman.github.io/react-native-v2/navigation-exercise)

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

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

```

# ALI PRE NEGO STO ODRADIM PRIMER, HAJDE DA NAUCIM NEKOLIKO STVARI O ONOJ KOMPONENTI KOJA SE KORISTI KAO SCREEN, ODNONO DA VIDIM KOJI SU TU BITNI MOMENTI, KONKRETNO PO PITANJU TYPESCRIPT-A, KOJEG JA KORISTIM

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

## E UPRAVO A SA TYPE-OM `StackScreenProps`, ODNONO SA NJEGOVIM GENERICS-OM, KOJI EXTEND-UJE `Record` TYPE (TO JE GLOBALNO DOSTUPAN TYPE U TYPESCRIPT-U), TI MOZES DEFINISATI

EVENTUALLY DOCI CU DO TOGA ZASTO SE KORISTI Reacord

ALI HAJDE DA SE PRVO PODSETIM RECORD-A

U SUSTINI MISLIM DA JE `NAJVAZNIJE TO DA SE Record-OM MOZE DEFINISITATI I KOJE IME SME DA IMA NEKI PROPERTI`

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

# MEDJUTIM `StackScreenProps` MALO DURUGACIJE UZIMA ARGUMENTE, ILI BAR SE MENI TAK OCINI DA IMA PECULIAR THING, ALI MISLIM DA MI JE JASNO

EVO POGLEDAJ KAKO SAM JA NAPRAVIO TAJ TYPE

**NECU KORITITI KONKRETNO OVAJ TYPE (OVO JE SAMO POKAZNA VEZBA), ALI GA OVDE POKAZUJES, KAKO BI BOLJE ZNAO STA TREBA DA URADIS U PRIMER-U**

```ts
type screenNames = "SOLARIZED"| "LIGHT"| "DARK"

type stackRecord = Record<string, {hexBoje: string[]; something: string }>

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

**PARAMS** MOZES PROSLEDITI KADA DEFINISES Screen, A MORACE BITI U GORNJEM FORMATU, JER SAM TAKO DEFINISAO






# MISLIM DA PRVO TREBA DEFINISATI DA `CollorPalette` KOMPONENTA BUDE KOMPONENTA, KOJOJ SE KAO PROP DODAJE, UPRAVO NIZ KOJI JE U FORMATU KOJI JE FORMAT, TRI GORE PRIKAZANA NIZA

**IME PAGE-A CE BITI **


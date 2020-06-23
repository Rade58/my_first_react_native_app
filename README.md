# LISTE

***

!!!!
**VAZNO VAZNO VAZNO VAZNO**
!!!!

OVO JE JAKO BITNA STVAR, POGOTOVO AKO *IMAS PREDPOSTAVKU DA MOZES KORITITI ARRAY NECEGA I NA NJEMU PRIMENITI map*

TO OBICNO RADIS NA WEB-U

**`ALI U SLUCAJU NATIVE APLIKACIJE map-ING ACROSS NEKOG NIZA JE -- NESTO STO NIKADA NE RADI ZBOG UTICAJA NA PERFORMACES --`**

EVO STA JE [KADI REKLA O TOME](https://kadikraman.github.io/react-native-v2/lists):

`What if instead of 4 colors, we had 10 or even 100? How would we display them then? If you're already familiar with React, you might be tempted to add all the colors in an array and .map over them. This is a very common mistake for newcomers to React Native. While it may be fine to do on the web, in React Native you should avoid using map in the render. This is because mapping over an array is not optimized. React Native will attempt to render every single element in the array all at once, regardless of whether they are visible on the screen or not.`

***

# ZATO SE ZA RENDERING LISTE, KORISTE SPECIJALNE KOMPONENTE

ONE SE ZOVU

- **`FlatList`**

- **`SectionList`**

KAD GOD IMAS ARRAY OF DATA, KOJE TREBAS DA RENDER-UJES, NAJVEROVATNIJE TREBA DA KORISTIS JEDNU OD POMENUTIH STVARI

ISTO TAKO KADI UVEK POSEZE ZA DOKUMENTACIJOM ZA [FlatList](https://reactnative.dev/docs/flatlist) I [SectionList](https://reactnative.dev/docs/sectionlist)

TAMO JE SVE OBJASNJENO (SVI PROPERTIJI)

# `FlatList`

IMA MNOGI KONFIGURACIJSKIH OPCIJA, ALI TRI PROPA SU NAJVAZNIJA

- **`data`** (ARRAY OF DATA INTENDED FOR RENDER)

- **`renderItem`** (FUNKCIJA KOJA GOVORI FLAT LISTI DA RENDERUJE EACH INDIVIDUAL ITEM)

- **`keyExtractor`** (FUNKCIJA KOJA SLUZI DA SE DEFINISE UNIQUE KEY FOR EACH ITEM)

[EVO OVDE IMAS PRIMER](https://snack.expo.io/@kadikraman/flatlist-example)

KOJI SAM JA TRANSFORMISAO U TYPESCRIPT I KOJI SAM IZKOMENTARISAO

```jsx
import React, {FunctionComponent} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const Food: FunctionComponent<{name: string;}> = props => {
  // STILOVI SU OVDE DEFINISANI (SAMO PRAVIM OBSERVATION)
  
  // I JEDINO STO SE IZ PROPS-A KORISTI JESTE       name
  
  return (
    <View style={styles.food}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const FOODS = [
  'Apples',
  'Broccoli',
  'Cookies',
  'Doritos',
  'Eclairs'
];

const App: FunctionComponent = () => {
  return (
    <FlatList
      // EVO KAO STO VIDIS PROSLEDJEN JE ARRAY, KAO DATA
      data={FOODS}
      // U OVOM SLUCAJU key CE BITI SAMI ITEM FROM    FOODS     ARRAY
      // NARAVNO, DA JE NIZ SASTAVLJEN OD OBJECT ITEM-A, I DA JE NESTO DRUGO INTENDED FOR KEY, SIGRNO BIH TO KORISTIO IZ POMENUTOG OBJEKTA
      keyExtractor={(item, index) => item}  // A AK ONEMAS NISTA UNIQUE (AKO NEKAD IMAS DVA ISTA ITEM-A U NIZU), PA MOZES DA KORISTIS INDEX
      //                                                                                                          KOJI TI JE TAKODJE DOSTUPAN

      // A OVA FUNKCIJA DAKLE DEFINISE KOJI CE SE REACT ELEMENT RENDER-OVATI
      //  I KOJI CE MU VREDNOST ZA PROP BITI PROSLEDJEN-A
      renderItem={({ item }) => <Food name={item} />}
    />
  );
}

const styles = StyleSheet.create({
  food: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'teal',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
});

export default App;
```

MISLIM DA NIJE TESKO ZAPAMTITI KAKO SE RENDER-UJE NESTO UZ POMOC `FlatList`-A

ALI UVEK MI JE DOSTUPNA DOKUMENTACIJA, CIJI SAM LINK OSTAVIO

KAKO KADI KAZE:

"` If you have 1,000 elements in your array, it actually only renders the ones that your user can see`"

A DAKLE NAJBITNIJE DA ZNAM DA SE MAPING NE KORISTI ZBOG PERFORMANCES

**DAKLE NE ZELIM DA SE LISTA SVAKI PUT RERENDER-UJE KAO STO JE TO SLUCAJ NA WEB-U** UPRAVO ZATO SE KORISTI POMENUTA KOMPONENTA ILI SE KORISTI SectionList KOMPONENTA, O KOJOJ CU U NASTAVKU GOVORITI

# `SectionList`

VIDIM DA JE JEDINA RAZLIKA TO STO SE MOZE DODADATI SECTION HEADER

NAJBOLJE JE POSMATRATI PRIMER

```tsx
import React, {FunctionComponent} from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';

const Food: FunctionComponent<{name: string;}> = props => {
  return (
    <View style={styles.food}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

// EVO, TI SDA IMAS NIZ ALI NIZ TI JE SASTAVLJEN OD OBJEKATA
const FOODS = [
  // I JOS JEDNA KARAKTERISTICNA STVAR JE STO SE U OBJEKTU NALAZI NIZ ITEM-A
  { title: 'Healthy', data: ['Apples', 'Broccoli']},

  //  OVDE JE DAKE BITNO DA LISTA MORA BITI UNER    data   (F=DAKLE MORA POSTOJATI NIZ CIJE JE IME data)
  // A STO SE TICE    title     TU JE USTVARI MOGLO DA STOJI BILO STA
  { title: 'Not so Healthy', data: ['Cookies', 'Doritos', 'Eclairs']},
];

//    title   CES TI I ONAKO REFERENCIRATI, ZATO I NE MORA DA BUDE title

// DOK data ARRAY MORA TU DA POSTOJI      



// GORE KAO STO VIDIZ     title     REPREZENT-UJE KATEGORIJU ILI SEKCIJU


// E TI UPRAVO MOZES RENDER-OVATI LISTU NA TAKAV NACIN DA CE BITI
// RENDERED I IME KATEGORIJE

const App: FunctionComponent = () => {
  return (
    <SectionList
      //    EVO OVDE PROSLEDJUJES CEO OBJEKAT KOJI JE U FORMATU KOJI SAM OBJASNIO  
      sections={FOODS}
      // DAKLE OVO JE ITEM IZ     data    ARRAY-A
      keyExtractor={(item, index) => item}
      // OVDE JE BITNO ZAPAMTITI DA MORAS KORISTITI PROPERTI    item
      // I MOZDA JE NAZIV     data    MALO MISLEADING U OVOM SLUCAJU
      // JER TI USTVARI UZIMAS TRENUTNI ITEM IZ ONOG    data ARRAY-A
      // A OVDE JE TO PREDSTAVLJENO OBJEKATOM (AL IVALJDA I ZATO POSTOJI DOKUMENTACIJA, KOJOJ UVEK MOGU PRISTUPITI AKO NESTO ZABORAVIM)
      renderItem={data => <Food name={data.item} />}

      // E OVDE DEFINISES KAKO I GDE SE RENDER-UJE SECTION HEADER
      renderSectionHeader={({ section }) => (
        //  IKAO STO VIDIS ZISTA SE REFERENCIRA ZELJENI PROPERTI, U OVOM SLUCAJU JEDINO STO JE APPROPRIATE
        // USTVARI JEDINO STA I POSTOJI JESTE     title
        <Text style={styles.header}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  food: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'teal',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  header: {
    fontSize: 18,
    marginBottom: 5
  }
});

export default App;
```

***

KADI KAZE DA SEKCIJE JESU STICKY

`Now, SectionList has had these because if you use it on the actual device, the sections actually get sticky, so they stay on the screen until you parse the section`

**TO BI MOGAO DA ISPITAM NA MOM DEVICE-U, KADA BUDEM RADIO VEZBU**

***

# KADI JE NABROJALA NEKE PROPSE `FlatList` I `SectionList` KOMPONENTI; I TO SU PROPSI KOJE ONA NAJCESCE KORISTI

<https://kadikraman.github.io/react-native-v2/lists#list-props>

OVO JE ZATO STO OBE KOMPONENTE IMAJU OGROMAN BROJ PROPS-A KOJI SU OPTIMIZED

UGLAVNOM ONA JE SPOMENULA NEKE KOJE MOZES VIDETI NA OSTAVLJENOM URL-U

**A U SAMOJ DOKUMENTACIJI ZA POMENUTE KOMPONENTE**, **`TI DESNO MOZES VIDETI SVE PROPSE TIH KOMPONENTI`**

A TAKODJE SAM PRIMETIO DA SU LISTED I NEKE METODE

OSTAVLJAM TI OPET LINKOVE

<https://reactnative.dev/docs/flatlist>

<https://reactnative.dev/docs/sectionlist>

***

ALI STA JE TO BITNO KOD SVIH TIH PROPS-A JESTE DA SU ONI HELPERI, KOJIMA SE NESTO RENDER-UJE

NA PRIMER POSTOJI PROPS KOJ IDEFINISE DA SE IZMEDJU LIST ITEM-A RENDER-UJE SEPARATOR KOJEG TI IZABERES

TAKODJE ONO STO JE KADI POMENULA JESTE

`ListEmptyComponent`

**POMENUTI PROPERTI JE NAROCITO BITAN ZA FETCHING DATA (AJAX REQUEST) KADA SE MOZE DESITI DA FETCH-UJES EMPTY ARRAY**

E PA POMENUTI PROP TI DAJE MOGUCNOST DA NESTO DEFINISES DA SE RENDER-UJE U SLUCAJU EMPTY ARRAY-A

TU SU I PROPSI ZA RENDERING NECEGA U FOOTER-U, ALI I HEADER-U LISTE

TAKODJE POSTOJI PROPSI KOJI DEFINISU DA SE LISTA DISPLAY-UJE HORIZONTALNO 

TAKODJE JE MOGUCE DEFINISATI PROP KOJI RENDERUJE ITEME U ONOLIKOM BROJU KOLONA KOLIKO TI TO ZELIS

POSTOJI I PROPS KOJIM SE DEFINISE CALLBACK, KOJI CE BITI CALLED KADA USER SCROLL-UJE AT THE END OF THE LIST

**OVO POSLEDJNJE JE USEFULL ZA PAGINATION (PAGINATION MOZES POSMATRATI KAO FETCHING DATA-A IZ NEKOLIKO SEPARATE REQUEST-OVA)** (E PA UPRAVO IMAS PROPS KOJI TI OMOGUCAVA KAD DA ZADAS DA SE IZVRSI CALLBACK KOJI MOZE FETCH-OVATI SLEDECI DEO TVOJI PODATKA, PA SLEDECI I TAK ODALJE)

***

## `extraData` PROP

[__________](https://reactnative.dev/docs/flatlist#extradata)

KADI KAZE DA JOJ JE OVO POMOGLO

U SUSTINI POZNATO TI JE DA AKO SE DATA PROMENI, DA CE SE I LISTA ITEM-A RERENDER-OVATI

**ALI NEKADA POSTOJI I EXTERNAL FACTOR, KOJI BI TREBALO DA BUDE OKIDAC ZA RERENDER-UJE LISTE**

KADI KAZE DA JU JE KORISCENJE OVOGA, POSTEDEL ODODATNOG DEBUGGING-A, KOJI BI MORALA DA OBAVLJA

## NAJBOLJE BI BILO NAPRAVITI NEKU EXTENSIVE LISTU, I RENDER-OVATI JE UZ POMOC POMENUTIH KOMPONENTI, KAKO BIH VIDEO KAKO FUNKCIONISE TO STO CE KOMPONENTE RENDER-OVATI; ISTO TAKO MOZDA BI BIL OSTVARNO DOBRO PRIBELEZITI POMENUTE PROPSE KAO NESTO STO CE SE CESTO KORITITI I STO BIH TREBAO IMATI LISTED USEPARATE BRANCH-U (NEKA TO BUDE SLEDECI BRANCH)

`IPAK NISAM PRAVIO NOVI BRANCH, A MOZES POGLEDATI I SAM VIDEO SNIMAK DA VIDIS KAKO JE KADI ODRADILA PRIMER SA LISTOM`

U NASTAVKU JA SAM SE MALO IGRAO SA SectionList-OM I NAPRAVIO SDAM NE KI MOJ PRIMER 

***

***

***

***

# :one::one::one::one: PRIMER :one::one::one::one:

NAJBOLJE BI BILO DA KORISTIM GENERATOR KAKO BI NAPRAVIO OBJEKTE KOJE ZELIM

ISTO TAKO NAPRAVICU PRIMER SA `SectionList` KOMPONENTOM, JER ME ZANIMA STA CE TO SVE ONA RENDER-OVATI I ZELIM DA UPOTREBIM NAJVAZNIJE PROPSE ZA TU KOMPONENTU

***

KREIRAM PRVO FAJL KOJI CE PREDSTAVLJATI DATA, ODNONO MOZE DA PREDSTAVLJA FETCHED DATA

A ONO STA CU USTVARI URADITI JESTE DA CU KORISTITI GENERATOR, KOKO BI KREIRAO NIZ KOJI JE PODESAN DA SE KORISTI SA `SectionList` KOMPONENTOM

- `touch/code makeRadesData.ts`

```ts
const generatorMaker = (param: number) => blahGeneratorFunc(param);

// OVO JE MOZDA BILO SAMO PODSECANJE KAKO FUNKCIONISU GENERATORI
// NISAM IH BAS UPOTREBIO NEGO SAMO OVAKO
function* blahGeneratorFunc(param: number) {
  yield { myItem: `item${param}` };
}

/**
 *
 * @param color BOJA ZA PODLISTU KOJOM ONA MOZE BITI ODREDJENA
 * @param title NASLOV PODLISTE
 * @param len DUZINA NIZA ITEM-A
 */
const makeArrayAndHeading = (color: string, title: string, len: number) => {
  const arr: string[] = [];

  for (let i = 1; i <= len; i++) {
    const generator = generatorMaker(i);
    const generated = generator.next();

    if (generated.value) {
      arr.push(generated.value.myItem);
    }
  }

  return { title, color, data: arr };
};

/**
 * @description FUNKCIJA USTVARI PRAVI OBJEKAT U FORMATU {color, title, data: NIZ STRINGOVA}
 */
export default makeArrayAndHeading;
```

***

***

GORNJU FUNKCIJU MOGU DA UPOTREBIM ZA KRIRANJE OBJEKTA KOJI BI PREDSTAVLJAO DATA

I TO DATA POGODAN ZA KORISCENJE SA `SectionList` KOMPONENTOM

- `touch/code fetchedData.ts`

```ts
import makeHeadingAndArray from './makeRadesData';

const fetchedData: {
  title: string;
  color: string;
  data: string[];
}[] = [
  makeHeadingAndArray('crimson', 'GraphQL', 60),
  makeHeadingAndArray('aqua', 'React', 58),
  makeHeadingAndArray('dodgerblue', 'Typescript', 48),
  makeHeadingAndArray('lightcoral', 'Javascript', 38),
];

// MOGU KORISTITI OVAJ OBJEKAT ZA RENDERING LISTE, UPOTREBOM            SectionList          KOMPONENTE

export default fetchedData;

```

***

***

NAPRAVICU KOMPONENTU, KOJA BI TREBALA DA SE RENDER-UJE KAO ITEM LISTE

- `touch/code components/ItemBox.tsx`

```tsx
import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemBox: FunctionComponent<{ itemName: string }> = (props) => {
  const { itemName } = props;

  return (
    <View style={itemBoxStyles.boxStyles}>
      {/* OVDE JE DAKLE BITAN   itemNAME   */}
      <Text style={itemBoxStyles.textStyles}>{itemName}</Text>
    </View>
  );
};

const itemBoxStyles = StyleSheet.create({
  textStyles: {
    color: 'crimson',
    marginLeft: 'auto',
    marginRight: 'auto',

    borderWidth: 2,
    borderColor: 'crimson',
  },
  boxStyles: {
    borderColor: 'blanchedalmond',
    borderWidth: 2,
    margin: 8,
    textAlign: 'center',
  },
});

export default ItemBox;



```

***

***

SADA CU DA U `App.tsx` UPOTREBIM    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    `SectionList`  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   KOMPONENTU, SA STVARIMA KOJE SAM DEFINISAO 

- `code App.tsx`

```jsx
import React, { FunctionComponent } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  // UVESCU I       SectionList
  SectionList,
} from 'react-native';

// UVESXU I ItemBox KOMPONENTU KOJ USAM MALOCAS NAPRAVIO I NIZ KOJI SAM NAPRAVIO
import ItemBox from './components/ItemBox';
import dataArray from './fetchedData';
// === !== === !== === !==

import Box from './components/Box';

const App: FunctionComponent = () => {
  const {
    first,
    third,
    fourth,
    droidSafeArea,
    second,
    otherStyles,
    //
    textOne,
    textTwo,
    textThree,
    textFour,
    //
    explain,
    textExplain,
  } = globalStyles;

  return (
    <SafeAreaView style={droidSafeArea}>
      <View style={explain}>
        <Text style={textExplain}>
          Evo ih neki element i stilizovani su kao što vidiš
        </Text>
        {/* DA, NISTA TE NE SPRECAVA DA IMAS NESTED MULTIPLE VIEWS */}
        <View>
          <Text>Malo sam se poigrao</Text>
        </View>
      </View>
      {/* comment-ujem ih out da bi mi bilo lakse da vidim    sECTIONlIST */}
      {/* <Box
        no={1}
        boxStyles={first}
        otherStyles={otherStyles}
        textStyles={textOne}
      />
      <Box
        no={2}
        boxStyles={second}
        otherStyles={otherStyles}
        textStyles={textTwo}
      />
      <Box
        no={3}
        boxStyles={third}
        otherStyles={otherStyles}
        textStyles={textThree}
      />
      <Box
        no={4}
        boxStyles={fourth}
        otherStyles={otherStyles}
        textStyles={textFour}
      /> */}
      {/* EVO OVDE CU DA RENDERUJEM     SectionList */}
      <SectionList
        sections={dataArray}
        keyExtractor={(item, index) => item}
        renderItem={(data) => <ItemBox itemName={data.item} />}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: section.color }}>
            <Text>{section.title}</Text>
          </View>
        )}
      />
      {/* === !== === !== === !== */}
    </SafeAreaView>
  );
};

export const globalStyles = StyleSheet.create({
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

export default App;

```

PRIMER SAM USPESNO DEFINISAO ALI POSTOJI JOS NEKE PROPSI KOJE BIH MOGAO DA DEFINISEM

RECIMO MOGUCE JE DEFINISATI LIST HEADER I LIST FOOTER COMPONENT

TO JE ONO STO CE BITI ISPOD I IZNAD I NECE BITI SCROLLED SA OSTALIM LISTAMA

***

## HAJDE DA ZADAM I `ListFootercomponent` I `ListHeaderComponent`

DA OVDE NE PREDSTAVLJAM CODE, MOZES I SAM POGLEDATI KAKO SAM TO DEFINISAO

TREBA IMATI NA UMU DA SE I FOOTER  I HEADER, KOJI SE DEFINISU SA POMENUTIM PROPSIMA, USTVARI SCROLL-UJU SA OSTATOKOM LISTE

TI MOZES RENDER-OVATI NESTO PRE I POSLE LISTE I TO NECE BITI DEO LISTE I NECE SE SCROLL-OVATI

## ISPROBAO SAM I `ListEmptyComponent` PROP

MISLIM DA SAM O TOME VEC GOVORIO, ALI U SUSTINI AKO JE PRAZAN NIZ ZADAT, ODNONO MZODA JE PRAZAN NIZ FETCHED ZA MOJU LISTU, E TU BUKVALNO DEFINISEM PLACEHOLDER KOMPONENTU KOJA SE RENDER-UJE ZA SLUCAJ PRAZNOG NIZA

I TO MOZES VIDETI JER SAM I TO PROVAO U PRIMERU

## `horizontal` PROP JE BOOLEAN PROP KOJIM DEFINISEM DA SE LISTA SCROLL-UJE HORIZONTALNO

U OVOM SLUCAJU TAKODJE CE SE PROMENITI FLEXBOX POREDAK, AKO SMEM TAKO DA GA NZAOVEM

IZDUZICE JE ITEMI, DO DNA I NALAZICE SE HORIZONTALNO JEDAN FDO DRUGOG

I TO SAM ISPROBAO

## `numColumns` DEFINISE BROJ KOLONA PREKO KOJIH SE MOGU PROSTIRATI TVOJI ITEMI U LISTI

MISLI MDA SE OVO ODNOSI SAMO NA `FlatList`

## `extraData` `onEndReached` SAM VEC SPOMENUO

# NOVO STA SAM SAZNAO

:one: AKO TVOJ DATA IMA (TVOJI OBJEKTI U NIZU) IMAJU PROPERTI **`key`** KOJI BI BIO UNIQUE, NE MORAS DEFINISATU `keyExtractor` PROP

:two: style MOZES TAKODJE ZADATI I ZA POMENUTE DVE KOMPONENTE KOJE RENDER-UJU LISTE, I NARAVN TO CE STILIZOVATI LIST ITEM

# ONO CEMU CU POSVETITI CELI BRANCH IAKO JE TO SMAO HELPER JESTE CODE KOJI TI POMAZE DA OTKLONIS ONUAJ PROBLEM SA LOW CONTRAST-OM IZMEDJU BOJE TEKSTA I BOJE ELEMENTA U KOJEM JE TEKST

# DAKLE POMENUTE LIST KOMPONENTE SU UVEK SCROLLABLE

MEDJUTIM POSTOJ I KOMPONENTA

- **`ScrollView`**

NJU KORISTIM KADA SE NE RADI O LISTI ALI ZELIM DA NESTO BUDE SCROLLABLE
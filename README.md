# STYLING

U REACT NATIVE-U, SAV STYLING SE **`OBAVLJA INLINE`**

DAKLE NE POSTOJI NI CASCADE NI SPECIFICITI, O TOME MOGU DA ZABORAVIM U REACT NATIVE-U

# DA BIH KRIRAO STILOVE, KORISTIM `StyleSheet` ELEMNT, KOJI SAM TI VEC POKAZAO

# ONDA MOZES DA KREIRAS STYLES OBJEKAT, UZ POMOC POMENUTOG ELEMENTA, ODNONO OBJEKTA

KONVENCIJA JE DA SE TO RADI ODMAH BEFORE `export`

OVAKO NA PRIMER

```tsx
import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView style={globalStyles.droidSafeArea}>
    <View>
      <Text>Moj Prvi app</Text>
    </View>
  </SafeAreaView>
);

const globalStyles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;

```

# SADA CU MALO DA STILIZUJEM, A PRVO CU STILIZOVATI `container`

NARAVNO UVEK MOZES DA KORISTIS  `Ctrl` + `Space`, DA VIDIS STA SVE MOZES STILIZOVATI, KROZ POMENUTI OBJEKAT 

```tsx
import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView style={globalStyles.droidSafeArea}>
    {/* POSTO ZELIM DA MI OVAJ SLEDECI View BUDE CONTAINER, UPRAVO CU MU ZADATI
    STILOVE KOJE SAM DEFINISAO ZA CONTINER DOLE */}
    <View style={globalStyles.container}>
      <Text>Moj Prvi React Native App</Text>
    </View>
  </SafeAreaView>
);

const globalStyles = StyleSheet.create({
  // OVA IMENA KAO STO SAM OVOM ZDAO container, SU PROIZVOLJNO ZDATA
  //  DAKLE JA SAM IH SMISLIO, JEDINO JE BITNO DA SE OVAJ OBJEKAT REFERENCIRA KADA DEFINISES STILOVE ODREDJENOG
  // REACT ELEMENT-A
  container: {
    margin: 10,
    borderWidth: 2,
    borderLeftColor: 'tomato',
    paddingTop: 12,
    backgroundColor: 'crimson',
  },
  // OVO OVDE SAM PODESIO RANIJE STA SAM I OBKASNIO
  // U CILJU DA NEUTRALIZUJEM PROBLEM PO KOJEM MI JE TEKST APP ISAO PO TOP
  // BANNER-U UREDJAJA
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;

```

# ALI NEMOJ DA UPADNES U ZAMKU I POMISLIS DA JE STILIZOVANJE POTPUNO ISTO KAO U CSS

VEC ZNAS DA NEMA CASCADE-A I NEMA SPECIFICIRTY-JA, STO JE SJAJNO

ALI POSTOJI JOS STVARI PO KOJIMA SE STILIZOVANJE RAZLIKUJE SA ONIM NA WEB-U

*SECAS SE SHORTHAND-OVA U CSS, KOJI SU TI OMOGUCILI DA DEFINISES MARGIN NA SLEDECI NACIN*?

```css
.tag{
  margin: 10 2;   
}
/* E PA , OVAKVO NESTO NIJE MOGUCE U NATIVE-U */

```

**ALI ZATO IMAS MOGUCNOST KORISENJA PROPERTIJA KOJI SE ONDOSE NA VERTIKALNO, ODNOSNO HORIZONTALNO STANJE**

NA PRIMER IMAS **`marginVertical`**

```tsx
import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView style={globalStyles.droidSafeArea}>
    <View style={globalStyles.container}>
      <Text>Moj Prvi React Native App</Text>
    </View>
  </SafeAreaView>
);

const globalStyles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderLeftColor: 'tomato',
    paddingTop: 12,
    backgroundColor: 'crimson',
    // EVO VIDIS KAK OSAM DEFINISAO VERTIKALNU MARGINU
    marginVertical: 60,
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;
```

# ONO STO MOZES DA PRIMETIS JESTE DA `NEMA JEDINICA`; KAKO VIDIS NIGDE NISI STAVLJAO PIKSELE

NATIVE STYLES NEMAJU NIKAKVE JEDINICE

ONE CORRESPOND DO **`DENCITY INDEPENDENT PIXELS`**

# DOKUMENTACIJA ZA RAZLICITE VRSTE PROPS-A

KADI JE BILA LJUBAZNA I OSTAVILA LINKOVE

[View STYLING PROPS](https://reactnative.dev/docs/view-style-props)

[Text STYLING PROPS](https://reactnative.dev/docs/text-style-props)

[Image STYLING PROPS](https://reactnative.dev/docs/image-style-props)

LISTA NIJE COMPREHENSIVE, ODNOSNO NIJE OBIMNA

# SVAKO POZICIONIRANJE U NATIVU KORISTI FLEXBOX

AKO HOCES DA PROVEZBAS FLEXBOX MOZES D KORISTIS OVU CONVINIENT APLIKACIJU

[FLEXBOX FROGGY](https://flexboxfroggy.com/)

PO DEFAULTU SVI ELEMNTI U NATIVU SU DISPLAYED AS FLEX

SADA CU SVE U CONTAINER-U KOJI IMAM U MOM APP-U DA POZICIONIRAM, KORISCENJEM FLEX PROPERTIJA

```tsx
import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView style={globalStyles.droidSafeArea}>
    <View style={globalStyles.container}>
      <Text>Moj Prvi React Native App</Text>
    </View>
  </SafeAreaView>
);

const globalStyles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderLeftColor: 'olive',
    paddingTop: 12,
    backgroundColor: 'blanchedalmond',
    // marginVertical: 18,
    // POZICIONIRANJE (ZAPAMTI DA JE DISPLAYED FLEX PO DEFAULT-U)
    flex: 1, // POGLEDAJ STA SAM DOLE REKAO O OVOME
    alignItems: 'center',
    justifyContent: 'center',
  },
  // === !== === !==
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;

```

# PRIMECUJES DA SAM GORE KORISTIO `flex: 1`

**TO UPRAVO ZNACI DA ELEMENT ZAUZME PROSTOS SVOG CONTAINER-A**

A TO JE U MOM SLUCAJU BIO `SafeAreaView` KOJI ISTO IMA flex VREDNOST 1 ,STO ZNACI DA ON ZAUZIMA DOSTUPAN PROSTOR UREDJAJA, ODNONO EKRANA

# !! TI MOZES KORISTITI DIREKTNONAPISATI style OBJEKAT U TAG-U, ALI TO NIJE RECOMMENDED !!

DAKLE IPAK TI KORISTI StyleSheet.create PA OBJEKAT KOJI PROILAZI IZ TOGA REFERENCIRAJ NA REACT ELEMENT-U

TO JE ZATO STO SE KORISCENJEM POMENUTOGA PROPERTIJI USTVARI CACHE-UJU I OPTIMIZIRAJ

ALI NEKADA KADA ZELIS DA IMAS DINAMICKE STILOVE TI MOZES PISATI DIREKTNO OVJEKAT NA style PROP-U KOMPONENTE

ODNONO KADA ZELIS DA IAMS DINAMICKE SIRINE ILI BOJE ILI NESTO SLICNO

# MOGUCE JE PROSLEDJIVANJE I ARAY-A OF STYLES

TO JE AKO IMAM MULTIPLE STYLES, I ZELIM DA IH APLICIRAM BEZ TOGA DA SVE KOMBINUJEM U JEDAN OBJEKAT

AKO NA PRIMER IMA SHARED STYLES ODNONO SHARED STYLESHEETS

# RANIJE SI GOVORIO DA NE POSTOJI CASCADE ILI SPECIFICITY, ALI IPAK POSTOJI NESTO DRUGO; USTVARI IPAK POSTOJI MOGUCNOST DA OVERRIDE-UJES NESTO

NARAVNO TAJ OVERRIDING SE MOZE DESITI KADA IMAS UPRAVO ARRAY STYLESHEET-OVA

POKAZACU TI STA CE OVERRIDE-OVATI STA U OVOM SLUCAJU

```tsx
import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView style={globalStyles.droidSafeArea}>
    {/* EVO VIDIS SADA SAM ZADAO NIZ STYLESHEET-OVA */}
    <View style={[globalStyles.container, globalStyles.otherStyles]}>
      <Text>Moj Prvi React Native App</Text>
    </View>
  </SafeAreaView>
);

const globalStyles = StyleSheet.create({
  otherStyles: {
    backgroundColor: 'teal', // OVA CE BITI BACKGROUND COLOR, JER SI OVAJ OBJEKAT ZADAO KAO POSLEDNJI U GORNJEM NIZU
  },
  // === !== === !==
  container: {
    borderWidth: 2,
    borderLeftColor: 'olive',
    paddingTop: 12,
    backgroundColor: 'blanchedalmond', // OVO CE BITI OVERRIDEN
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // === !== === !==
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;

```

DAKLE BITAN JE REDOSLED U NIZU KOJIM SI ZADAO STVARI, JER ONO POSLEDNJE ZADATO CE OVERRIDE-OVATI STVARI ONOH PREDHODNOG IZ NIZA

# POSTOJI MOGUCNOST DA SE KORISTE I STYLED COMPONENTS (ONE SU NAVEDENE KAO SIDENOTE U OWOM WORKSHOP-U)

[OVDE JE TO OBJASNJENO](https://kadikraman.github.io/react-native-v2/styling#side-note-styled-components)

NE MISLIM DA BIH KORISTIO STYLED COMPONENTS

A I SAM SAM PRIMETIO DA @emotion IMA ISTO SVOJU IMPLEMENTACIJU

***

neki info:

DOZVOLJAVAJU UPOTREBU snake-case PROPERTIJA

(GORE TO NISI MOGAO JER SE MORA KORISTITI cammelCase)

***

# FONT PROPERTIJE I PROPERTIJE VEZNE ZA TEXT, MORAS DEFINISATI I DODAVATI DIREKTNO ZA Text ELEMENT

TO SU PROPERTIJI POPUT: `color, fontWeight, fontFamily, fontSize`

***
***
***
***
***
***
***
***
***
***
***
***
# VEZBA

**VEZBA** (JA SAM NESTO NA BRZINU DEFINISAO ALI MISLI MDA SAM SHVATIO ESENCE, KAK OSE USTVARI STILIZUJE)

```tsx
import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => {
  const {
    first,
    container,
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
      </View>
      <View style={[otherStyles, container]}>
        <Text style={textOne}>Prvi Cont</Text>
      </View>
      <View style={[otherStyles, first]}>
        <Text style={textTwo}>Drugi Cont</Text>
      </View>
      <View style={[otherStyles, second]}>
        <Text style={textThree}>Treci Cont</Text>
      </View>
      <View style={[otherStyles, fourth]}>
        <Text style={textFour}>Cetvrti Cont</Text>
      </View>
    </SafeAreaView>
  );
};

const globalStyles = StyleSheet.create({
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
  container: {
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
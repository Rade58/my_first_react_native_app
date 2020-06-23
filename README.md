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

const Food: FunctionComponent = props => {
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
      keyExtractor={item => item}
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


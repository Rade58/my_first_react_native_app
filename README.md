# FORM IN `React Native`

OSTAVICU OVDE [KADIN INFO KOJI JE OSTAVILA ZA FORMS](https://kadikraman.github.io/react-native-v2/forms)

A KAKO KADI KAZE

>> If you use web developments, you kind of familiar with having to have a actual HTML form element, where your form lives, and there's a button that has, it's the submit button and kind of things. In React Native, things are sort of simpler and more difficult. Simpler in that, there is no restraints and having to have everything inside the form element.
>> But more difficult is because you have to track everything yourself with the state, when to submit it, and everything else. There are a bunch of inputs that are available for React Native

**JA CU SADA PROCI KROZ NEKE KOJE KADI NAJCESCE KORISTI**

***

- [TextInput](https://reactnative.dev/docs/textinput)

***

# `TextInput` KOMPONENTA

KAKO BI BOLJE SHVATIO `TextInput` I NJEGOVE PROPS-E JA CU ODRADITI JEDAN PRIMER PO UZORU NA KADIN

USTVARI DODACU, JOS JEDAN SCREEN U MOJ APP, I U NJEMU CU PREDSTAVITI RAZNE OPCIJE `TextInput` KOMPONENTE

- `touch screens/TextInputReview.tsx`

GLEDACU DA KOMENTARISEM STVARI KOJE SU MI PECULIAR, ILI SLICNO

JA SAM DOSTA URADIO U OVOM PRIMERU I MNOGE STVARI SU SELF EXPLANATORY [ALI TI CITAJ KADINU STRANICU ZA DODADATNI INFO](https://kadikraman.github.io/react-native-v2/forms) (**OVDE SU TI INFORMACIJE VEZANE ZA TO KOJE PROPSE MOZES KORISTITI I KOJI SU TO PROPSI PRIHVACENI BOTH NA iOS-U I Android-U**)

```tsx
import React, { useState, FunctionComponent } from 'react';

import { Text, TextInput, ScrollView, StyleSheet } from 'react-native';

import { InputPreviewScreenProps } from '../navigators/color-app-stack-navigator';

const Review: FunctionComponent<InputPreviewScreenProps> = (props) => {
  const [basicText, setBasicText] = useState<string>('');
  // VIDECES UBRZO ZASTO SAM OVO TYPE-OVAO KA OSTRING
  const [someNumber, setSomeNumber] = useState<string>('');
  //
  const [password, setPassword] = useState<string>('');
  //
  const [multilineValue, setMultilineValue] = useState<string>('');

  return (
    <ScrollView style={styles.container}>
      {/* ----------------- INPUT TEXT-A --------------------- */}
      <Text>Obicni tekstualni input</Text>
      <Text>I Njegova vrednost: {basicText}</Text>
      <TextInput
        style={styles.input}
        value={basicText}
        // OVDE MI JE CUDNO DA SE KAO HANDLER ZADAJE SET STATE FUNKCIJA
        // ODNOSNO CUDNO MI JE DA SE NIJE CITAO VALUE SA EVENT-OVOG TARGET-A ?
        // onChangeText={setBasicText}
        //  MEDJUTI MSAZNA OSAM DA JE U PITANJ UFUNKCIJA KOJOJ SE PROSLEDJUJE JEDAN STRING ARGUMENT, STO ZNACI DA MOZE I OVAKO
        onChangeText={(value) => setBasicText(value)}
        //
        placeholder="Just a plane text input"
      />
      {/* ---- INPUT NUMBER-A  (KAO STO VIDIS U PITANJU JE STRING, ALI SAMO JE TASTATURA NUMERICKA) -------- */}
      <Text>Number input</Text>
      <Text>Current value: {someNumber}</Text>
      <TextInput
        style={styles.input}
        value={someNumber}
        // SADA CU SAMO SETT-OVATI SET STATE FUNKCIJU, KAO HANDLERA, JER VAZI ISTO KAO I ZA PREDHONDNI TextInput
        onChangeText={setSomeNumber}
        // JEDINA RAZLIKA JE U TASTATURI
        keyboardType="numeric"
        //
        placeholder="Only number goes here"
      />
      {/* ----------------- INPUT PASSWORD-A ------------------- */}
      <Text>Password input</Text>
      <Text>Current value: 🤫</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        // SLEDECI PROP JE BITAN ZA SKRIVENO UNOSENJE
        secureTextEntry={true}
        //
        placeholder="Enter secret"
      />
      {/*-------------------- MULTILINE INPUT-------------------- */}
      <Text>Multiline input</Text>
      <Text>Current value:{multilineValue}</Text>
      <TextInput
        style={styles.input}
        value={multilineValue}
        onChangeText={setMultilineValue}
        // SLEDECE JE BITNO ZA MULTILINE
        multiline={true}
        numberOfLines={4}
        // u slucaju multiline-A   TASTATURA DOBIJA I 'ENTER' DUGME NA KEYBOARD-U, SHVATAS ZASTO
        placeholder="Many lines, many joys" 
      />
      
    </ScrollView>
  );
};

// da stavim border oko inputa i dodam jos neko stilizovanje

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 4,
    margin: 8,
  },
  container: {
    flex: 1,
    padding: 8,
  },
});

export default Review;

```
[--](https://snack.expo.io/@radedev/9d1834)

KAKO SAM OVO WIRE-OVAO UP KAO SCREEN, MOZES VIDETI U KOMPONENTAMA (**MADA TO NIJE TEMA TRENUTNE LEKCIJE**)

`screens/ColorHome.tsx`, `App.tsx` , A STO SE TICE TYPE-OVA I NJIH SAM PROSITIO U `navigators/color-app-stack-navigator.ts` 

# `Picker` KOMPONENTA

[____](https://kadikraman.github.io/react-native-v2/forms#picker)

ELEMNT KOJI USTVARI SLUZI ZA SELECT-OVANJE ZELENE VREDNOSTI, KAO STO JE NA WEB-U `select` ELEMENT SA NJEGOVIM `option`-IMA

ONA JE VEOMA INTERESANTNA JER IZGLEDA DRUGACIJE CROSS PLATFORMS

!!!! **MEDJUTIM VIDIM DA JE OVA KOMPONENTA `DEPRECATED`** !!!!

COMUNITY SAVETUJE UPOTREBU

[@react-native-community/picker](https://github.com/react-native-community/react-native-picker)-A

# `Switch` KOMPONENTA

[----](https://kadikraman.github.io/react-native-v2/forms#switch)

[DOCS](https://reactnative.dev/docs/switch)

U SUSTIN IREC JE O PREKIDACU O TOGGLE BUTTON-U

IMA MALO PROPSA, MOZES DA IG POGLEDAS, A VECINOM SE ODNOSE NA BOJE

# I POSTOJI LAODS AND LOADS OF OTHE COMPONENTS KOJE SU OUTTHERE, KOJE MOZES EXPLORE-OVATI U TVOJE SLOBODNO VREME

>> But not everything is built into React Native.

>> So when I build applications, I tend to rely on community and third-party components quite a bit. A lot of them are actually under the React Native community organization. This is basically a community, it's a bunch of open source libraries that are in the React community, like on the React Community care.

<https://github.com/react-native-community>

>> So there's a Slack channel, and there's a bunch of components that sometimes people have built, they don't have time to maintain so they kind of hand them off to the community. So generally, these are all quite reliable things. But a lot of the time, if you need a component, you just Google for it.

>> For example, a date picker, there isn't really a good date picker solutions built in. So you would just search on google for React Native date picker. Any search words, and then you have a bunch of options.

# FORM IN `React Native`

OSTAVICU OVDE [KADIN INFO KOJI JE OSTAVILA ZA FORMS](https://kadikraman.github.io/react-native-v2/forms)

A KAKO KADI KAZE

>> If you use web developments, you kind of familiar with having to have a actual HTML form element, where your form lives, and there's a button that has, it's the submit button and kind of things. In React Native, things are sort of simpler and more difficult. Simpler in that, there is no restraints and having to have everything inside the form element.
>> But more difficult is because you have to track everything yourself with the state, when to submit it, and everything else. There are a bunch of inputs that are available for React Native

**JA CU SADA PROCI KROZ NEKE KOJE KADI NAJCESCE KORISTI**

***

- [TextInput](https://reactnative.dev/docs/textinput)

***

# KAKO BI BOLJE SHVATIO `TextInput` I NJEGOVE PROPS-E JA CU ODRADITI JEDAN PRIMER PO UZORU NA KADIN

USTVARI DODACU, JOS JEDAN SCREEN U MOJ APP, I U NJEMU CU PREDSTAVITI RAZNE OPCIJE `TextInput` KOMPONENTE

- `touch screens/TextInputReview.tsx`

GLEDACU DA KOMENTARISEM STVARI KOJE SU MI PECULIAR, ILI SLICNO

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


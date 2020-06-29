import React, { useState, FunctionComponent } from 'react';

import { Text, TextInput, ScrollView, StyleSheet } from 'react-native';

interface ReviewPropsI {
  navigation: any;
  route: any;
}

const Review: FunctionComponent<ReviewPropsI> = (props) => {
  const [basicText, setBasicText] = useState<string>('');
  // VIDECES UBRZO ZASTO SAM OVO TYPE-OVAO KA OSTRING
  const [someNumber, setSomeNumber] = useState<string>('');

  return (
    <ScrollView>
      {/* INPUT TEXT-A */}
      <Text>Obicni tekstualni input</Text>
      <Text>I Njegova vrednost: {basicText}</Text>
      <TextInput
        value={basicText}
        // OVDE MI JE CUDNO DA SE KAO HANDLER ZADAJE SET STATE FUNKCIJA
        // ODNOSNO CUDNO MI JE DA SE NIJE CITAO VALUE SA EVENT-OVOG TARGET-A ?
        // onChangeText={setBasicText}
        //  MEDJUTI MSAZNA OSAM DA JE U PITANJ UFUNKCIJA KOJOJ SE PROSLEDJUJE JEDAN STRING ARGUMENT, STO ZNACI DA MOZE I OVAKO
        onChangeText={(value) => setBasicText(value)}
        //
        placeholder="Just a plane text input"
      />
      {/* INPUT NUMBER-A  (KAO STO VIDIS U PITANJU JE STRING, ALI SAMO JE TASTATURA NUMERICKA) */}
      <Text>Number input</Text>
      <Text>Current value: {someNumber}</Text>
      <TextInput
        value={someNumber}
        // SADA CU SAMO SETT-OVATI SET STATE FUNKCIJU, KAO HANDLERA, JER VAZI ISTO KAO I ZA PREDHONDNI TextInput
        onChangeText={setSomeNumber}
        // JEDINA RAZLIKA JE U TASTATURI
        keyboardType="numeric"
        //
        placeholder="Only number goes here"
      />
    </ScrollView>
  );
};

export default Review;

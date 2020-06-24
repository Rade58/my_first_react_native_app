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

import React, { FunctionComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';

// OVO JE DAKLE TYPE ZA PROPSE JEDNOG SCREEN-A (NARAVNO, JASNO MI JE DA MU SE DODAJU GENERICS)
import { StackScreenProps } from '@react-navigation/stack';

// JA SADA USTVARI ZELIM DA TYPE-UJEM, SVE ONE SCREEN NAME-OVE, PREMA KOJIMA CE SE NAVIGATE-OVATI IZ Home-A

type screenNamesType = 'SOLARIZED' | 'RAINBOW' | 'FRONTEND_MASTERS'; // OVDE SI MOZDA MOGAO DEFINISATI enum (ALI enu mSE UVEK MORA REFERENCIRATI)

type StackPropsType = StackScreenProps<any>;

// SADA MOZES DA OVAJ TYPE DA KORISTIS KAO TYPE ZA PROPSE KOMPONENTE KOJA CE BITI REFERENCED KAO SCREEN COMPONENT
const Home: FunctionComponent<StackPropsType> = (props) => {
  // POKUSAJ DA RESTRUKTURIRAS PROPSE DA VIDIS STA SVE IMA

  const { navigation, route } = props; // NARAVNI, IMAS      navigation    I     route     STO JE DOBRO

  const { key, name, params } = route;

  return (
    <View>
      <TouchableOpacity
        style={styles.touchableStyles}
        onPress={() => {
          navigation.navigate('SOLARIZED');
        }}
      >
        <Text>Pritisni</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableStyles}
        onPress={() => {
          navigation.navigate('TRYOUT');
        }}
      >
        <Text>Pritisni</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify({ route }, null, 2)}</Text>

      {/* OVO OVDE JE GENERIC DA TE NE ZBUNJUJE */}
      {/* <SectionList
        //
        sections={params.colors}
        renderItem={({ index, item, section, separators }) => {
          const { hexColor, screenName, colors } = item;

          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', {});
              }}
            >
              <Text>{hexColor}</Text>
            </TouchableOpacity>
          );
        }}
      /> */}
    </View>
  );
};
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

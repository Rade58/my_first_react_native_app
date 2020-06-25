import React, { FunctionComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

/**
 * @description INTERFACE ONOG OBJEKATA KOJI JE INDIVIDUALNI OBJEKAT data NIZA NAMENJENOG ONOM OBJEKTU, KOJI JE OPET ITEM NAMENJEN ZA SectionList
 */
interface SectionListLevel2ItemI {
  hexColor: string;
  screenName: string;
  colors: string[];
}

interface SectionListLevel1ItemI {
  sectionHeading: string;
  data: SectionListLevel2ItemI[];
}

type SectionsArgumentArr = SectionListLevel1ItemI[];

enum Blah {
  LELO = 'lelo',
}

/**
 * @description RECORD NAMENJEN ZA StackScreenProps
 */
type ParamsStackScreenI = Record<Blah, {}>;

// === !== === !== === !== ===

enum karbonaraEnum {
  PASTA = 'PASTA',
  SPAGETE = 'SPAGETE',
  TROGLODIT = 'TROGLODIT',
}

interface karbonararaInter {
  hexColorArr: string[];
  hexColorName: string;
}

type KarbonaraRecord = Record<string, karbonararaInter>;

// === !== === !== === !== ===

const Home: FunctionComponent<StackScreenProps<any>> = ({
  navigation,
  route,
}) => (
  // const { key, name, params } = route;

  //    params      JESTE NIZ   // I ON JE NIZ NAMENJEN ZA    SectionList

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

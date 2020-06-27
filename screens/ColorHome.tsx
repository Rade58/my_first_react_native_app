import React, { FunctionComponent } from 'react';

import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// TYPE-OVI
import { HomeScreenProps } from '../navigators/color-app-stack-navigator'; // ZASTO SAM UVEZAO IMENA JESTE ZATO STO SAM ODLUCIO DA KOSRISTIM SECTION LIST, A ONA NIJE DOBRO TYPED
//                                                                              A MENI TREBAJU COLOR SCREEN NAMES

const Home: FunctionComponent<HomeScreenProps> = ({ navigation, route }) => {
  const { params, name } = route;

  const { allColorData } = params;

  const pickedColorData: typeof allColorData = [];

  for (let colorsObject of allColorData) {
    const { data, imeScreena } = colorsObject;

    pickedColorData.push({ imeScreena, data: data.slice(0, 4) });
  }

  return (
    <View>
      <Text>{name}</Text>
      <SectionList
        sections={pickedColorData}
        // horizontal={true}
        // OVDE JEDINO STO U SLEDECOJ FUNKCIJI RESTRUCTURED     section   NIJE TYPED I NE ZNA SE DA POSTOJI imeScreen-A
        // PROPERTI NA NJEMU (SAMO SE data UZIMA U OBZIR, JER ONO MORA BITI TAMO)
        // MEDJUTIM BITNO JE DA NE JAVLJA GRESKU
        renderSectionHeader={(
          { section: { data, imeScreena } } // ALI NISTA TE NE SPRECAVA DA RESTRUKTURIRANJEM STAVIS I     imeScreen-A
        ) => (
          <TouchableOpacity
            onPress={() => {
              // ALI NISTA MI NE SMETA DA UPOTREBIM imeScreen-A

              navigation.navigate('ColorPallete', {
                colors: data.concat([]),
                imeScreena: imeScreena,
              });
            }}
          >
            <Text>{imeScreena}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View style={[{ backgroundColor: item.hexCode }, styles.colorItems]}>
            <Text>{item.colorName}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorItems: {
    width: 108,
    margin: 4,
    padding: 8,
  },
});

export default Home;

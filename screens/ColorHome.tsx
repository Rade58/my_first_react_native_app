import React, { FunctionComponent } from 'react';

import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// TYPE-OVI
import {
  HomeScreenProps,
  colorScreenNamesType,
} from '../navigators/color-app-stack-navigator'; // ZASTO SAM UVEZAO IMENA JESTE ZATO STO SAM ODLUCIO DA KOSRISTIM SECTION LIST, A ONA NIJE DOBRO TYPED
//                                                                              A MENI TREBAJU COLOR SCREEN NAMES

const Home: FunctionComponent<HomeScreenProps> = ({ navigation, route }) => {
  const { params, name } = route;

  const { allColorData } = params;

  const pickedColorData: typeof allColorData = [];

  for (let colorsObject of allColorData) {
    const { data, title } = colorsObject;

    pickedColorData.push({ title, data: data.slice(0, 4) });
  }

  return (
    <View>
      <Text>{name}</Text>
      <SectionList
        sections={pickedColorData}
        // horizontal={true}
        // OVDE JEDINO STO U SLEDECOJ FUNKCIJI RESTRUCTURED     section   NIJE TYPED I NE ZNA SE DA POSTOJI title NA NJEMU (SAM Odata UZIMA U OBZIR)
        // MEDJUTIM BITNO JE DA NE JAVLJA GRESKU
        renderSectionHeader={(
          { section: { data, title } } // IMAS DOSTUPNU I data (MALO VECE RESTRUKTURIRANJE SAM NAPRAVIO)
        ) => (
          <TouchableOpacity
            onPress={() => {
              // PROBLEM JE STO title NIJE TYPED ZATO SAM OVAKO MORAO DA GA TYPE-UJEM (PROBLEM JE SECTION LIST)
              navigation.navigate(title as colorScreenNamesType, {
                colors: data.concat([]), //READONLY JE PA SAM GA OVAKO KOPIRAO
                title,
              });
            }}
          >
            <Text>{title}</Text>
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
    width: 20,
    margin: 10,
  },
});

export default Home;

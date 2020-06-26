import React, { FunctionComponent } from 'react';

import { View, Text, SectionList, TouchableOpacity } from 'react-native';

// TYPE-OVI
import { HomeScreenProps } from '../navigators/color-app-stack-navigator';

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
        horizontal={true}
        // OVDE JEDINO STO U SLEDECOJ FUNKCIJI RESTRUCTURED     section   NIJE TYPED I NE ZNA SE DA POSTOJI title NA NJEMU (SAM Odata UZIMA U OBZIR)
        // MEDJUTIM BITNO JE DA NE JAVLJA GRESKU
        renderSectionHeader={(
          { section: { data, title } } // IMAS DOSTUPNU I data (MALO VECE RESTRUKTURIRANJE SAM NAPRAVIO)
        ) => (
          <TouchableOpacity>
            <Text>{title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.hexCode}
      />
    </View>
  );
};

export default Home;

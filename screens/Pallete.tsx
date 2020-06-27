import React, { FunctionComponent } from 'react';

import { View, Text, FlatList } from 'react-native';

// UVOZIM TYPE-OVE
import { ColorScreenProps } from '../navigators/color-app-stack-navigator';

// UVOZIM KOMPONENTU, KOJI CU KORISTITI KAO INDIVIDUAL LIST ITEM (MAL OSAM JE MODIFIKOVAO DA BI PRIHVATLA hexCode I ColorName PROPSE)
import Item from '../components/ItemBox';
// POGLEDAJ AKO TE ZANIMA KAKO IZGLEDA

const Pallete: FunctionComponent<ColorScreenProps> = ({
  navigation, // OVO OVDE NECE BITI NI ISKORISCENO (JER NAVIGACIJE IZ OVE KOMPONENTE NEMA) (SEM OSIM PRITISKA NA 'BACKSPACE')
  route,
}) => {
  const { params } = route; // INSIDE route POSTOJE JOS PROPERTIJI key I name (ALI NE VIDIM DA M ITREBAJU)

  const { colors, title } = params;

  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <Item hexCode={item.hexCode} colorName={item.colorName} />
        )}
        keyExtractor={({ hexCode }) => hexCode}
      />
      <View>
        <Text>{JSON.stringify(params, null, 2)}</Text>
      </View>
    </View>
  );
};

export default Pallete;

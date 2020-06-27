import React, { FunctionComponent } from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

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

  const { colors, imeScreena } = params; // CISTO TI POKAZUJEM STA IMAS

  // imeScreena     TI NECES U OBIMU OVE KOMPONENTE EKSPLICITNO KORISTITI
  //              ALI KADA BUDES DEFINISAO    options     PROP PRI MOUNTING-U SCREEN-A
  //            TADA CES DEFINISATI DA imeScreen-A BUDE       title     KOJI CE PRIKAZIVATI IME SCREEN-A NA VRHU RENDERED SCREEN-A
  //  (TO CES TEK URADITI U App.tsx)

  return (
    <View>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <View style={styles.shadowsAndStuff}>
            <Item hexCode={item.hexCode} colorName={item.colorName} />
          </View>
        )}
        keyExtractor={({ hexCode }) => hexCode}
      />
      {/* OVDE SAM SAM OSTRINGIFIKOVAO PODATKE JER ZELIM DA VIDIM STA CE BITI U PARMASIMA
      OVO UJEDNO PREDSTAVLJA I COO LTRICK ZA DEBUGING*/}
      <View>
        <Text>{JSON.stringify(params, null, 2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowsAndStuff: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default Pallete;

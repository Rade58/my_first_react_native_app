import React, { useState, FunctionComponent } from 'react';

import {
  View,
  Text,
  StyleSheet,
  // UVOZIM TextInput I Switch, ALI I FaltList JER CE FlatList
  // SLUZITI DA RENDER-UJEM MNOSTVO Switch-EVA
  TextInput,
  Switch,
  FlatList,
} from 'react-native';

import { ModalPropsI } from '../navigators/rootStackAndTypes';

// UVOZIM I PODATKE KOJE CE KORISTITI MODAL KOMPONENTA
import data, { ModalDataObjectI } from '../modalData';

// YPE ZA DATA DISPLAYED NA HOME-U
import { ApiDataItemI } from '../screens/ColorHome';

const AddNewPaletteModal: FunctionComponent<ModalPropsI> = (props) => {
  // MOGU DA OTPOCNEM SA RESTRUKTURIRANJEM
  const { route, navigation } = props;
  const { params } = route;

  // EVO VEC SAM MOGAO UZETI SET STATE FUNKCIJU HOME-A, KOJA JE KAO POSLEDICA NAVIGATINGA TO MODAL NALZI
  // U MODALU
  const { setStateFunc } = params;

  // ALI SADA JA TREBAM DA DEFINISEM GRANU STATE-A ZA OVU KOMPONENTU, A TA GRANA TREBA DA
  // SKLADISTI TRENUTNO FORMIRANI NOVU PALETU

  // DAKLE TO TREBA DA BUDE NIZ U FORMATU:
  /*
      {
          id: string;
          paletteName: string;
          colors: { colorName: string; hexCode: string }[];
      }
  */

  // MISLIM DA SE PODACI MORAJU CUVATI U VISE GRANA STATE
  //   -- JEDNA ZA IME PALETE
  const [currentPaletteName, setCurrentPaletteName] = useState<string>('');
  //  -- DRUGA ZA TRENUTNO IZABRANE COLOR OBJEKTE
  //    ** I NAJBOLJE BI BILO DA TO BUDU REFERENCE INDEKSA ONOG OBJEKTA KOJI SE NALAZI U DATA ARRAY-U**

  const [indexesOfDataArray, setIndexesOfDataArray] = useState<number[]>([]);

  // ZATO JE NAJBOLJE DA
  // === !== === !==
  /* type colorsRecord = Record<number, { hexCode: string; colorName: string }>;
  const [
    currentPickedColors,
    setCurrentPickedColors,
  ] = useState<colorsRecord | null>(); */
  // === !== === !==

  return (
    <View>
      <FlatList
        // DAKLE ZADAO SAM DA DATA BUDE ONAJ ARRAY, U KOJIMA SU OBJEKTI SA {colorName, hexCode} CLANOVIMA
        data={data}
        renderItem={({ item, index }) => {
          // INDEX CE MI TAKODJE TREBATI I TO U HANDLERU
          const { hexCode, colorName } = item;

          return (
            <View style={styles.items}>
              <Text>{colorName}</Text>
              <Text>{JSON.stringify(indexesOfDataArray, null, 2)}</Text>
              {/* NISAM SETT-OVAO  value  ZA SVITCH-EVE JER ZNAM DA JE PO DEFAULT-U false */}
              <Switch
                onValueChange={(bool) => {
                  if (bool) {
                    return setIndexesOfDataArray((curr) =>
                      curr.concat([index])
                    );
                  }

                  return setIndexesOfDataArray((curr) => {
                    const indexOfMember = curr.indexOf(index);

                    return curr
                      .slice(0, indexOfMember)
                      .concat(curr.slice(indexOfMember + 1, curr.length));
                  });
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    borderColor: 'blanchedalmond',
    shadowColor: 'crimson',
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 2,
  },
});

export default AddNewPaletteModal;

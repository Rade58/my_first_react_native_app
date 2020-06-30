import React, { useState, FunctionComponent } from 'react';

import {
  View,
  Text,
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
  //  -- DRUGA ZA TRENUTNO IZABRANE COLOR OBJEKTE
  //    S TIM STO COLOR OBJEKTI TREBAJU DA BUDU DICTIONARY, ILI RECORD A NE NIZ

  // EVO POGLEDAJ

  const [currentPaletteName, setCurrentPaletteName] = useState<string>('');

  type colorsRecord = Record<number, { hexCode: string; colorName: string }>;

  const [
    currentPickedColors,
    setCurrentPickedColors,
  ] = useState<colorsRecord | null>();

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          const { hexCode, colorName } = item;

          return (
            <View>
              <Text>{colorName}</Text>
              <Switch value={false} onValueChange={(bool) => {}} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default AddNewPaletteModal;

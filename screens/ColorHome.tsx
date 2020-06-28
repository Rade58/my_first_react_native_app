import React, {
  FunctionComponent,
  // UVOZIM HOOK-OVE
  useState,
  useCallback,
  useEffect,
} from 'react';

import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// HAJDE DA PRVO NAPRAVIM INTERFACE KOJIM CU TYPE-OVATI DATA, ZA KOJI MCU PRAVITI REQUEST
interface ApiDataItem {
  id: number;
  paletteName: string;
  colors: { colorName: string; hexCode: string }[];
}

type ApiDataType = ApiDataItem[];

// TYPE-OVI
import { HomeScreenProps } from '../navigators/color-app-stack-navigator';
import { FlatList } from 'react-native-gesture-handler';

const Home: FunctionComponent<HomeScreenProps> = ({ navigation, route }) => {
  const { params, name } = route;
  // ***************************************************************************************************
  // ***************************************************************************************************
  // OVO VISE NECU KORISTITI, ALI MRZI ME DA VRSIM REDEFINISANJE OVOGA
  // === !== ===--------------  NEKA OVO OSTANE ** NO-OP ** ---------------   !== === !==
  const { allColorData } = params;

  const pickedColorData: typeof allColorData = [];

  /* for (let colorsObject of allColorData) {
    const { data, imeScreena } = colorsObject;

    pickedColorData.push({ imeScreena, data: data.slice(0, 4) });
  } */

  // SLUZICE MI DA NAPRAVIM FLAT LIST ZA ONE PREVIEW BOJE NA HOME SCREEN-U
  const takePreviewColors = (
    colorsArr: { colorName: string; hexCode: string }[]
  ) => {
    const myColors: typeof colorsArr = colorsArr.slice(0, 4);

    return myColors;
  };

  // ***************************************************************************************************
  // ***************************************************************************************************

  // OVDE CU CUVATI DATA I MOGU DA GA TYPE-UJEM
  const [colorData, setColorData] = useState<ApiDataType>([]);

  // ISKORISTICU USE CALLBACK U KOJEM CU DEFINISATI NETWORK REQUEST

  const fetchApiDataCallback = useCallback(async () => {
    const jsonData = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes'
    );

    const data: ApiDataType = await jsonData.json();

    setColorData(data);
  }, []);

  useEffect(() => {
    fetchApiDataCallback();
  }, [fetchApiDataCallback]);

  return (
    <View style={{ flex: 1 }}>
      <Text>{name}</Text>
      {/* UMESTO SECTION LIST ZELIM DA KORISTIM FLAT LIST */}
      <FlatList
        style={{ flex: 1 }}
        data={colorData}
        renderItem={({ item: { colors, paletteName } }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPallete', {
                colors,
                imeScreena: paletteName,
              });
            }}
          >
            <View style={[styles.colorItems]}>
              <Text>{paletteName}</Text>
              <FlatList
                style={styles.prevContainer}
                data={takePreviewColors(colors)}
                renderItem={({ item: { colorName, hexCode } }) => (
                  <View
                    style={[{ backgroundColor: hexCode }, styles.preview]}
                  />
                )}
                keyExtractor={({ hexCode }) => hexCode}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  prevContainer: {
    borderColor: 'crimson',
    borderWidth: 4,
    flex: 1,
    flexDirection: 'column',
  },

  preview: {
    width: 38,
    height: 38,
    borderColor: 'olive',
    borderWidth: 2,
  },

  colorItems: {
    // width: 108,
    flex: 1,
    margin: 4,
    padding: 8,
  },
});

export default Home;

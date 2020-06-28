# U PROSLOM BRANCH-U SAM NAUCIO NOVE STVARI VEZANE ZA `useState`, ZATIM `useCallback`, PA `useEffect`; A SADA CU DA PROSIRIM MOJ PRIMER, TAKO STO CU NAPRAVITI NETWORK REQUEST, PREM API, KOJI JE LKADI NAPRAVILA

EVO GA API AGAINST WHO I'M SENDING REQUEST

<https://color-palette-api.kadikraman.now.sh/palettes>

## DA SE PODSETIM, OD KOJIH JE KOMPONENTI I SCREEN-OVA NAPRAVLJAN MOJ APP, KAK OBIH VIDEO GDE BI TO SLAO NETWORK REQUEST

- App.tsx
  - screens/ColorHome.tsx
  - screens/Pallete.tsx
    - components/ItemBox.tsx

DOBRO PRONASAO SAM DA JE TO USTVARI `screens/ColorHome.tsx`, JER TAMO JA USTVARI KORISTIM NIZ SVIH OBJEKATA, POGODNIH ZA SECTION LIST-U

I VIDIM DA MORAM NAPRAVITI NEKE PROMENE, JER SAM JA NA SVOJU RUKU GRADIO PREDHODNI PRIMER, I NISAM MNOGO OBRACO PAZNJU NA KADIN PRIMER, TAKO DA CU MORATI NAPRAVITI NEKE PROMENE

**USTVARI NISAM MORAO NISTA U VELIKOJ MERI MENJATI, NIKAKVE TYPE-OVE NISAM MORAO MENJATI**

**SAMO SAM UMESTO ONOG ARRAY-A, KOJEG UZIMAM IZ `params`-A (`allColorData`), JA USTVARI `UPOTREBIO DATA DOBIJEN IZ API-A`**

EVO POGLEDAJ KAKO SAM SVE URADIO

- `code screens/ColorHome.tsx`

```tsx
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
  // SectionList,
  FlatList,
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

const Home: FunctionComponent<HomeScreenProps> = ({ navigation, route }) => {
  const { params, name } = route;
  // ***************************************************************************************************
  // ***************************************************************************************************
  // OVO VISE NECU KORISTITI, ALI MRZI ME DA VRSIM REDEFINISANJE OVOGA
  // === !== ===--------------  NEKA OVO OSTANE ** NO-OP ** ---------------   !== === !==
  // const { allColorData } = params;

  // const pickedColorData: typeof allColorData = [];

  /* for (let colorsObject of allColorData) {
    const { data, imeScreena } = colorsObject;

    pickedColorData.push({ imeScreena, data: data.slice(0, 4) });
  } */

  // SLUZICE MI DA NAPRAVIM FLAT LIST ZA ONE PREVIEW BOJE NA HOME SCREEN-U (HELPER FUNKCIJA)
  const takePreviewColors = (
    colorsArr: { colorName: string; hexCode: string }[]
  ) => {
    const myColors: typeof colorsArr = colorsArr.slice(0, 4);

    return myColors;
  };

  // ***************************************************************************************************
  // ***************************************************************************************************

  // URL MOGU   CUVATI U VRAIJABLI

  const colorsURL = 'https://color-palette-api.kadikraman.now.sh/palettes';

  // OVDE CU CUVATI DATA I MOGU DA GA TYPE-UJEM
  const [colorData, setColorData] = useState<ApiDataType>([]);

  // ISKORISTICU USE CALLBACK U KOJEM CU DEFINISATI NETWORK REQUEST

  const fetchApiDataCallback = useCallback(async () => {
    const result = await fetch(colorsURL);

    if (result.ok) {
      const data: ApiDataType = await result.json();
      setColorData(data);
    }
  }, []);

  useEffect(() => {
    fetchApiDataCallback();
  }, [fetchApiDataCallback]);

  return (
    <View>
      <Text>{name}</Text>
      {/* UMESTO SECTION LIST ZELIM DA KORISTIM FLAT LIST */}
      <FlatList
        style={{ marginRight: 'auto' }}
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
    // borderColor: 'crimson',
    // borderWidth: 4,
    flex: 1,
    flexDirection: 'row',
    marginRight: 'auto', // MOGUCA JE I OVA PODESITI UMESTO BROJA
  },

  preview: {
    margin: 4,
    width: 38,
    height: 38,
    // borderColor: 'olive',
    // borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },

  colorItems: {
    flex: 1,
    margin: 4,
    padding: 8,
    marginTop: 8,
  },
});

export default Home;
```

I TO JE TO, UZ NEKE MALE STVARI, U DRUGIM KOMPONENTAMA (PRETEZNO STYLING (UKLANJANJE BORDER-A))

# NEKI NOTES U VEZI TESTING-A

>> For React Native, what would you use for unit testing? Would you use something like React?

>> There's a React Native testing library that's special for React Native, it is React Native test library. And then if you want to do end to end testing, there's a framework called Detox, that's kind of the best for that.

>> There's some limitations on running on some Android devices on specific CIs. But in general, if you want to do end to end testing in React Native, Detox is kind of like the main thing you use. And you can write your tests in JavaScript, which is pretty cool.

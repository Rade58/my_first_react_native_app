# U PREDHODNOM DELU NAUCIO SI KAKO DA PRAVIS NETWORK REQUESTS, UZ KORISCENJE HOOK-OVA (`useState`, `useCalllback` I `useEffect`), A SADA CES NAUCITI O **`PULL TO REFRESH`**

SECAS SE PODCAST APP-A KOJEG KORISTIS PA KADA POKUSAS DA SCROLL-UJES, ODNOSNO DA PULL-UJES DOWN, DESI SE USTVARI NETWORK REQUEST, KOJI REFETCH-UJE EPISODES FROM THE SERVER, DAKLE DOGADJA SE PONOVNI NETWORK REQUEST

**E PA OVO JE BUILT INTO REACT NATIVE**

**`SVAKI ELEMENT KOJI JE SCROLLABLE, KAO STO SU`**

- `ScrollView`

- `FlatList`

- `SectionList`

IMAJU PROP KOJI SE ZOVE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **`refreshControl`**

ZA KOJI DEFINISEM *`SPECIJALNI`* REACT NATIVE ELEMENT, KOJI REPREZENTUJE

**`RefreshControl`** KOMPONENTA ([DOCS](https://reactnative.dev/docs/refreshcontrol))

KOJA DISPLAY-UJE LOADING

I IZGLEDA RAZLICITO NA ANDROID-U I RAZLICITO NA iOS-U

## NEKE OD NAJVAZNIJIH PROPS-A ZA `RefreshControl` KOMPONENTU, MOGU VIDETI U DOKUMENTACIJI, A USTVARI POSTOJE DVA NAJVAZNIJA PROPS-A

[_____](https://reactnative.dev/docs/refreshcontrol)

- **`refreshing`** (BOOLEAN, KOJI INDICIRA DA LI VIEW TREBA DA INDICIRA AKTIVNI REFRESH)

- **`onRefresh`** (FUNKCIJA KOJA SE POZIVA KADA SE OTPOCINJE SA REFRESHING-OM)

# SADA CU DA NA `FlatList` ELEMENTU, INSIDE `screens/ColorHome.tsx` COMPONENT, ZADAM `refreshControl` PROP, KOJEM CU KAO VREDNSOT ZADATI, `RefreshControl` ELEMENT, KOJEM CU ZA POCETAK ZADATI propove `refreshing -> true` I `onRefresh -> praznu funkciju`

OVAKO

- `code screens/ColorHome.tsx`

```tsx
import React, {
  FunctionComponent,
  //
  useState,
  useCallback,
  useEffect,
  //
} from 'react';

import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  // UVOZIM PRVO KOMPONENTU     RefreshControl
  RefreshControl,
} from 'react-native';

import { HomeScreenProps } from '../navigators/color-app-stack-navigator';
import PalettePreview from '../components/PreviewPalette';

interface ApiDataItem {
  id: number;
  paletteName: string;
  colors: { colorName: string; hexCode: string }[];
}

type ApiDataType = ApiDataItem[];

const Home: FunctionComponent<HomeScreenProps> = ({ navigation, route }) => {
  const colorsURL = 'https://color-palette-api.kadikraman.now.sh/palettes';

  const [colorData, setColorData] = useState<ApiDataType>([]);

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
      <FlatList
        // EVO ZADACU SVE OVDE
        refreshControl={
          <RefreshControl refreshing={true} onRefresh={() => {}} />
        }
        //
        style={styles.list}
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
            <PalettePreview colors={colors} paletteName={paletteName} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: { marginRight: 'auto' },
});

export default Home;
```

SPINNER BI SADA TREBAO DA SE OKRECE NEKONTROLISANO (I TO SPINER SE RAZLIKUJE NA ANDROID-U I IOS-U)

MOJA PREDPOSTAVKA JE DA CU MORATI DEFINISATI NEKI BOOLEAN STATE, I TAKO KONTROLISATI REFRESHING

DAKLE DA OVO UCINIM DINAMICNIJIM

ALI PRE TOGA JEDNA NOVINA

# `FlatList` JE IZGLEDA UPROSTIO UPOTREBU POMENUTOGA I UMESTO DA DEFINISES `refreshControl` PROP SA `RefreshControl` KOMPONENTOM; TI MOZES DA DIREKTNO `FlatList`-I ZADAS PROPSE: `refreshing` I onRefresh I SVE FUNKCIONISE ISTO

U SUSTINI `RefreshControl` KOMPONENTU TI BIH TREBAO DEFINISATI SAM OAKO ZELIS DA CUSTOMIZE-UJES SPINNER, JER POSTOJI JOS PROPS-A NA `RefreshControl` KOMPONENTI, I TO PROPS-A, KOJIMA MOZES CUSTOMIZE-OVATI SPINNER

ZA SADA JACU KORISTII ONO STO SAM DO SADA DEFINISAO

# DA SADA UCINIM, TAJ REFRESHING, DINAMICNIJIM



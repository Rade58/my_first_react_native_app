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

import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
} from 'react';

import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Text,
} from 'react-native';

import { HomeScreenProps } from '../navigators/color-app-stack-navigator';

import PalettePreview from '../components/PreviewPalette';

interface ApiDataItem {
  id: number;
  paletteName: string;
  colors: { colorName: string; hexCode: string }[];
}

type ApiDataType = ApiDataItem[];

const Home: FunctionComponent<HomeScreenProps> = (props) => {
  const colorsURL = 'https://color-palette-api.kadikraman.now.sh/palettes';

  const { navigation, route } = props;

  const [colorData, setColorData] = useState<ApiDataType>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const fetchApiDataCallback = useCallback(async () => {
    const result = await fetch(colorsURL);

    if (result.ok) {
      const data: ApiDataType = await result.json();
      setColorData(data);
    }
  }, []);

  const handleRefetch = useCallback(async () => {
    setIsRefreshing(true);
    await fetchApiDataCallback();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3800);
    //
  }, [setIsRefreshing, fetchApiDataCallback]);

  useEffect(() => {
    fetchApiDataCallback();
  }, [fetchApiDataCallback]);

  return (
    <View>
      {/* ------------- DODAO SLEDECE --------------------------- */}
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewPalette');
          }}
        >
          <Text style={styles.inputPreview}>Add a color scheme</Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------------------- */}
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              handleRefetch();
            }}
          />
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
  inputPreview: { fontSize: 38 },
});

export default Home;

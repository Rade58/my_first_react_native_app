import React, { FunctionComponent } from 'react';
import {
  SafeAreaView, // NE KORISTIM VISE
  FlatList,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

import ItemBox from '../components/ItemBox';

const ColorPalette: FunctionComponent<{
  colors: { colorName: string; hexCode: string }[];
}> = (props) => {
  const {
    droidSafeArea,
    //
    explain,
    textExplain,
    flatListBox,
    screenStyle,
  } = globalStyles;

  const { colors } = props;

  return (
    // COMMENTED OUT I NE KORISTIM GA VISE
    // <SafeAreaView style={droidSafeArea}>
    <View>
      <View style={explain}>
        <Text style={textExplain}>
          Evo ih neki element i stilizovani su kao što vidiš, i nalaze se u flat
          listi
        </Text>
      </View>
      {/* --------------------------*/}
      <Text>Fake Header</Text>
      <FlatList
        style={flatListBox}
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ItemBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text>Neki Header</Text>}
        ListFooterComponent={<Text>Neki Footer</Text>}
        ListEmptyComponent={<Text>Buyaaaaaaa</Text>}
        // horizontal={true}
      />
      <Text>Fake Footer</Text>
      {/* === !== === !== === !== */}
    </View>
    // </SafeAreaView>
  );
};

export const globalStyles = StyleSheet.create({
  screenStyle: {
    backgroundColor: 'blanchedalmond',
    color: 'crimson',
  },

  flatListBox: {
    borderColor: 'crimson',
    borderWidth: 2,
    marginHorizontal: 8,
  },

  explain: {
    margin: 28,
  },
  textExplain: {
    fontSize: 20,
  },
  // === !== ===
  otherStyles: {
    flex: 0,
    borderWidth: 2,
    paddingTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: 'yellow',
    marginTop: 18,
    marginHorizontal: 14,
    padding: 24,
  },
  // === !== === !==
  // === !== === !==
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default ColorPalette;

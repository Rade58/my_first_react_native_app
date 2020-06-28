import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  // --> types
} from 'react-native';

interface PreviewPropsI {
  colors: {
    colorName: string;
    hexCode: string;
  }[];
  paletteName: string;
}

const PalettePreview: FunctionComponent<PreviewPropsI> = (props) => {
  const { colors, paletteName } = props;

  const takePreviewColors = (
    colorsArr: { colorName: string; hexCode: string }[]
  ) => {
    const myColors: typeof colorsArr = colorsArr.slice(0, 4);

    return myColors;
  };

  return (
    <View style={[styles.colorItems]}>
      <Text>{paletteName}</Text>
      <FlatList
        style={styles.prevContainer}
        data={takePreviewColors(colors)}
        renderItem={({ item: { colorName, hexCode } }) => (
          <View style={[{ backgroundColor: hexCode }, styles.preview]} />
        )}
        keyExtractor={({ hexCode }) => hexCode}
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

export default PalettePreview;

import React, { FunctionComponent } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  //
  // SectionList,
  //
  FlatList,
} from 'react-native';

//
import { NavigationContainer } from '@react-navigation/native';

// === !== === !== === !== === !== === !== ===
import ItemBox from './components/ItemBox';
// === !== === !== === !== === !== === !== ===

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

// === !== === !== === !== === !== === !== ===

// import Box from './components/Box';

const App: FunctionComponent = () => {
  const {
    /* first,
    third,
    fourth, */
    droidSafeArea,
    /*  second,
    otherStyles,
    //
    textOne,
    textTwo,
    textThree,
    textFour, */
    //
    explain,
    textExplain,
    flatListBox,
  } = globalStyles;

  // EVO KAO STO VIDIS DODAO SAM NavigationContainer

  return (
    <NavigationContainer>
      <SafeAreaView style={droidSafeArea}>
        <View style={explain}>
          <Text style={textExplain}>
            Evo ih neki element i stilizovani su kao što vidiš, i nalaze se u
            flat listi
          </Text>
        </View>
        {/* --------------------------*/}
        <Text>Fake Header</Text>
        <FlatList
          style={flatListBox}
          data={COLORS}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <ItemBox itemName={item.colorName} boxColor={item.hexCode} />
          )}
          ListHeaderComponent={<Text>Neki Header</Text>}
          ListFooterComponent={<Text>Neki Footer</Text>}
          ListEmptyComponent={<Text>Buyaaaaaaa</Text>}
          // horizontal={true}
        />
        <Text>Fake Footer</Text>
        {/* === !== === !== === !== */}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export const globalStyles = StyleSheet.create({
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
  first: {
    backgroundColor: 'olive',
  },
  second: {
    backgroundColor: 'crimson',
  },
  fourth: {
    backgroundColor: 'tomato',
  },
  // === !== === !==
  third: {
    backgroundColor: 'teal',
  },
  // === !== === !==
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  // === !== === !==
  textOne: {
    color: 'blanchedalmond',
    fontSize: 12,
    fontWeight: 'normal',
  },
  textTwo: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textThree: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  textFour: {
    color: 'green',
    fontSize: 18,
    fontWeight: '100',
    fontStyle: 'italic',
  },
});

export default App;

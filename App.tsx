import React, { FunctionComponent } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  // UVESCU I       SectionList
  SectionList,
} from 'react-native';

// UVESXU I ItemBox KOMPONENTU KOJ USAM MALOCAS NAPRAVIO I NIZ KOJI SAM NAPRAVIO
import ItemBox from './components/ItemBox';
import dataArray from './fetchedData';
// === !== === !== === !==

import Box from './components/Box';

const App: FunctionComponent = () => {
  const {
    first,
    third,
    fourth,
    droidSafeArea,
    second,
    otherStyles,
    //
    textOne,
    textTwo,
    textThree,
    textFour,
    //
    explain,
    textExplain,
  } = globalStyles;

  return (
    <SafeAreaView style={droidSafeArea}>
      <View style={explain}>
        <Text style={textExplain}>
          Evo ih neki element i stilizovani su kao što vidiš
        </Text>
        {/* DA, NISTA TE NE SPRECAVA DA IMAS NESTED MULTIPLE VIEWS */}
        <View>
          <Text>Malo sam se poigrao</Text>
        </View>
      </View>
      {/* comment-ujem ih out da bi mi bilo lakse da vidim    sECTIONlIST */}
      {/* <Box
        no={1}
        boxStyles={first}
        otherStyles={otherStyles}
        textStyles={textOne}
      />
      <Box
        no={2}
        boxStyles={second}
        otherStyles={otherStyles}
        textStyles={textTwo}
      />
      <Box
        no={3}
        boxStyles={third}
        otherStyles={otherStyles}
        textStyles={textThree}
      />
      <Box
        no={4}
        boxStyles={fourth}
        otherStyles={otherStyles}
        textStyles={textFour}
      /> */}
      {/* EVO OVDE CU DA RENDERUJEM     SectionList */}
      <Text>Fake Header</Text>
      <SectionList
        sections={dataArray}
        // sections={[]}     // VAZNO ZA ListEmptyComponent
        keyExtractor={(item, index) => item}
        renderItem={(data) => <ItemBox itemName={data.item} />}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: section.color }}>
            <Text>{section.title}</Text>
          </View>
        )}
        // OVO MOGU DA BUDU REACT ELEMENTI IL IDA BUDU FUNKCIJE KOJE RETURN-UJEU REACT ELEMENTE
        ListHeaderComponent={<Text>Neki Header</Text>}
        ListFooterComponent={<Text>Neki Footer</Text>}
        ListEmptyComponent={<Text>Buyaaaaaaa</Text>}
        // horizontal={true}
      />
      <Text>Fake Footer</Text>
      {/* === !== === !== === !== */}
    </SafeAreaView>
  );
};

export const globalStyles = StyleSheet.create({
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

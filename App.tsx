import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => {
  const {
    first,
    container,
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
      </View>
      <View style={[otherStyles, container]}>
        <Text style={textOne}>Prvi Cont</Text>
      </View>
      <View style={[otherStyles, first]}>
        <Text style={textTwo}>Drugi Cont</Text>
      </View>
      <View style={[otherStyles, second]}>
        <Text style={textThree}>Treci Cont</Text>
      </View>
      <View style={[otherStyles, fourth]}>
        <Text style={textFour}>Cetvrti Cont</Text>
      </View>
    </SafeAreaView>
  );
};

const globalStyles = StyleSheet.create({
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
  container: {
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

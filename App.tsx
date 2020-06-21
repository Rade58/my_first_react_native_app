import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

// DEFINISEM STILOVE OVAKO (O OVOME CE JOS BITI RECI)
const globalStyles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // DAKLE OBICNI TERNARRY
  },
});

const App: FunctionComponent = () => (
  // I SADA SAMO NAVEDEM STILOVE U SAFE AREA KOMPONENTI
  <SafeAreaView style={globalStyles.droidSafeArea}>
    <View>
      <Text>Moj Prvi app</Text>
    </View>
  </SafeAreaView>
);

export default App;

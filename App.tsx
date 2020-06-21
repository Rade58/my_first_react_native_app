import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView style={globalStyles.droidSafeArea}>
    <View style={globalStyles.container}>
      <Text>Moj Prvi React Native App</Text>
    </View>
  </SafeAreaView>
);

const globalStyles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderLeftColor: 'olive',
    paddingTop: 12,
    backgroundColor: 'blanchedalmond',
    // marginVertical: 18,
    // POZICIONIRANJE (ZAPAMTI DA JE DISPLAYED FLEX PO DEFAULT-U)
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // === !== === !==
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;

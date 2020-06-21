import React, { FunctionComponent } from 'react';

import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView style={globalStyles.droidSafeArea}>
    {/* EVO VIDIS SADA SAM ZADAO NIZ STYLESHEET-OVA */}
    <View style={[globalStyles.container, globalStyles.otherStyles]}>
      <Text>Moj Prvi React Native App</Text>
    </View>
  </SafeAreaView>
);

const globalStyles = StyleSheet.create({
  otherStyles: {
    backgroundColor: 'blanchedalmond',
  },
  // === !== === !==
  container: {
    backgroundColor: 'teal',
    borderWidth: 2,
    borderLeftColor: 'olive',
    paddingTop: 12,
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

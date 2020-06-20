import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App: FunctionComponent = () => {
  console.log('Rade develop-uje ovaj app');

  return (
    <View style={styles.container}>
      <Text>Ovo je Moj Prvi React Native Projekat</Text>
    </View>
  );
};

export default App;

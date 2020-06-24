import React, { FunctionComponent } from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

const Home: FunctionComponent<StackScreenProps<any>> = ({
  navigation,
  route, // OVO I DALJE NE KORISTIM
}) => (
  <View>
    <TouchableOpacity
      style={styles.touchableStyles}
      onPress={() => {
        // KORISTIO SAM     navigate I NE VIDIM NIKAKVU RAZLIKU
        navigation.navigate('ColorPalette');
      }}
    >
      <Text style={styles.textStuff}>Color Pallete</Text>
    </TouchableOpacity>
  </View>
);

// DEFINISAO I UPOTREBIO STILIZOVANJE

const styles = StyleSheet.create({
  touchableStyles: {
    margin: 8,
    backgroundColor: 'crimson',
    width: 100,
    padding: 8,
    marginTop: 28,
  },
  textStuff: {
    color: 'blanchedalmond',
  },
});

export default Home;

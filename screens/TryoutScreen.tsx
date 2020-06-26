import React, { FunctionComponent } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

type screenNames = 'SOLARIZED' | 'LIGHT' | 'DARK';

export type stackRecord = Record<
  string,
  { hexBoje: string[]; something: string; colors?: string[] }
>;

interface SpolajnjiSvet {
  bauk: string;
}

// === !== === !==
type ComponentScreenProps = StackScreenProps<stackRecord, screenNames>;
// === !== === !==

const Tryout: FunctionComponent<ComponentScreenProps> = (props) => {
  const { navigation, route } = props;
  const { key, name, params } = route;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', {
            hexBoje: ['nesto blah', '#fff'],
            something: '',
          });
        }}
      >
        <Text>{JSON.stringify({ params, name, key }, null, 2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tryout;

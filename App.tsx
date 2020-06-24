import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
//
import { NavigationContainer } from '@react-navigation/native';

// === !== === !== === !== === !== === !== ===
import { createStackNavigator } from '@react-navigation/stack';

import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App: FunctionComponent = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* SADA DEFINISEM SVE SCREEN-OVE INSIDE STACK */}
      {/* I KAO STO VIDIS REFERENCIRAM KOMPONENTU, ALI DAJE M I IME */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          animationEnabled: true,
        }}
      />
      <Stack.Screen name="ColorPalette" component={ColorPalette} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;

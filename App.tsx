import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
//
import { NavigationContainer } from '@react-navigation/native';

// === !== === !== === !== === !== === !== ===
import { createStackNavigator } from '@react-navigation/stack';

import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

// TRI NIZA

const SOLARIZED = [
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

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

//

const Stack = createStackNavigator();

const App: FunctionComponent = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* SADA DEFINISEM SVE SCREEN-OVE INSIDE STACK */}
      {/* I KAO STO VIDIS REFERENCIRAM KOMPONENTU, ALI DAJE M I IME */}
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{
          mojiParams: {
            SOLARIZED: 'SOLARIZED',
            FRONTEND_MASTERS: 'FRONTEND_MASTERS',
            RAINBOW: 'RAINBOW',
          },
        }}
        options={{
          animationEnabled: true,
        }}
      />
      <Stack.Screen name="SOLARIZED" component={ColorPalette} options={{}} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;

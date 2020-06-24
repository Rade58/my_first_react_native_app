import React, { FunctionComponent } from 'react';

//
import { NavigationContainer } from '@react-navigation/native';

// === !== === !== === !== === !== === !== ===
import { createStackNavigator } from '@react-navigation/stack';
// === !== === !== === !== === !== === !== ===

import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

// I KREIRAM STACK
const Stack = createStackNavigator();
// Stack MOGU SMATRATI           'SANDBOX'-OM        SCREEN-OVA
//                                                              IZMEDJU KOJIH SE MOZE NAVIGATE-OVATI IN A STACK
// === !== === !== === !== === !== === !== ===
// JA USTVARI IZ    Stack   OBJEKTA IZDVAJAM        Navigator       KOMPONENTU, KOJU ONDA RENDER-UJEM
// I NJEGA WRAPP-UJEM AROUND NECEGA DRUGOGSTO ISTO IZDVAJA

// IZDVAJAM I       Screen      KOMPONENTU

// === !== === !== === !==

const App: FunctionComponent = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* SADA DEFINISEM SVE SCREEN-OVE INSIDE STACK */}
      {/* I KAO STO VIDIS REFERENCIRAM KOMPONENTU, ALI DAJE M I IME */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ColorPalette" component={ColorPalette} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;

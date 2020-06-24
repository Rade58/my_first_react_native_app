import React, { FunctionComponent } from 'react';

//
import { NavigationContainer } from '@react-navigation/native';

import ColorPalette from './screens/ColorPalette';

// === !== === !== === !== === !== === !== ===
// import ItemBox from './components/ItemBox';
// === !== === !== === !== === !== === !== ===

// === !== === !== === !== === !== === !== ===

// import Box from './components/Box';

const App: FunctionComponent = () => (
  <NavigationContainer>
    <ColorPalette />
  </NavigationContainer>
);
export default App;

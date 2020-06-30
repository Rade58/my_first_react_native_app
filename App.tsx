import React, { FunctionComponent } from 'react';
//
import { NavigationContainer } from '@react-navigation/native';

// UVEZI SCREEN, KOJI JE UJEDNO I STACK
import MainStackScreen from './screens/MainStackScreen';

import RootStack from './navigators/rootStackAndTypes';

const { Navigator, Screen } = RootStack;

const App: FunctionComponent = () => (
  <NavigationContainer>
    <Navigator>
      <Screen<'Main'>
        name="Main"
        component={MainStackScreen}
        // I NE SMES POKAZATI HEADER JER
        // TO JE ZATO STO OVAJ STACK IMA SCREEN-OVI I TREBA DA SE POKAZUJU
        // HEADERI SEPARATE SCREEN-OVA A NE OKVIRNO
        // STACK-A
        options={{ headerShown: false }}
      />
      {/* NISAM JOS ZAVRSIO JER MI TREBA MODAL ALI I TO CU UBRZO DEFINISATI */}
    </Navigator>
  </NavigationContainer>
);
export default App;

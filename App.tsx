import React, { FunctionComponent } from 'react';
//
import { NavigationContainer } from '@react-navigation/native';
import MainStackScreen from './screens/MainStackScreen';
import RootStack from './navigators/rootStackAndTypes';

// UVOZIM KOMPONENTU
import AddNewPaletteModal from './components/AddNewPaletteModal';

const { Navigator, Screen } = RootStack;

const App: FunctionComponent = () => (
  <NavigationContainer>
    {/* I ONO STA SAM MOZDA ZABORAVIO JESTE DA NA SAMOM NAVIGATORU
    ZADAM        mode="modal"        */}
    <Navigator mode="modal">
      <Screen<'Main'>
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      {/* DA DEFINISEM I MODAL */}
      <Screen name="AddNewPalette" component={AddNewPaletteModal} />
    </Navigator>
  </NavigationContainer>
);
export default App;

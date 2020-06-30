// U OVAJ SCREEN UVOZIM MainS SCREEN I UVOZIM Palette SCREEN (USTVARI TO JE NAJVAZNIJE STA UVOZIM)
// TAKODJE UVOZIM NavigatorContainer-A

// UVOZIM MOJ STACK, KOJEM CU NA UVOZU DATI IME     MainStack  (CISTO DA SE ZNA, ODNONO DA SE RAZLUCI, ALI NEMA PRETERANIH, 'CODING' RAZLOGA ZA TO)

import React, { FunctionComponent } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import MainStack from '../navigators/color-app-stack-navigator';
import Home from './ColorHome';
import Palette from './Pallete';

//
const { Navigator, Screen } = MainStack;
//

const MainStackScreen: FunctionComponent = () => {
  // CISTO RADI PODSECANJA I MORAS ZNATI DA SU props  USTVARI {navigation, route}
  //                                                              MADA NE VERUJEM DA CU IH KORISTITI

  let a;

  return (
    <Navigator>
      <Screen<'Home'> name="Home" component={Home} />
      <Screen<'ColorPallete'>
        name="ColorPallete"
        component={Palette}
        //  NE ZABORAVI DA PODESIS TITLE PALETTE SCREEN JER JE ON DINAMICKI, SECAS SE OD RANIJE
        options={({ navigation, route }) => ({
          title: route.params.imeScreena,
        })}
      />
    </Navigator>
  );
};

export default MainStackScreen;

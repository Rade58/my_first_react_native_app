// UVOZICU SVE I OBJASNJAVATI CEMU SLUZI
import {
  //
  createStackNavigator,
  // --> types
  // SLEDECI TYPE CE MI SLUZITI DA PRAVILNO TYPE-UJEM navigation
  //                KONKRETNO JE NAJVAZNIJE DA CE TO ODREDITI
  // U TYPING POREDKU, STA SMEM DA DODAM
  StackNavigationProp,
} from '@react-navigation/stack';

// TREBACE MI I NESTO S CIM MOGU DA TYPE-UJEM ROUTE, ALI TO SE UVIZI IZ DRUGOG PAKETA
import {
  RouteProp,
  // SAMO ZA PROVERU-----
  NavigationContainer,
  // -----
} from '@react-navigation/native';

// / --------------
import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import Tryout from '../screens/TryoutScreen';
// / --------------

// MORAS NAPRAVITI INTERFACE-OVE, KOJI CE ODGOVARATI PARAMSIMA, KOJE SMES SLATI U SCREEN
interface RouteColorScreenI {
  // U MOM PRIMERU TO CE BITI BOJE
  colors: { colorName: string; hexCode: string }[];
  title: string;
}
// DVA INTERFACE PRAVIM JER RAZLICITE STVARI SALJE U SCREEN-OVE NA KOJIMA CE BITI RENDERED COLOR, I U Home SCREEN
// JER U home SCREEN JA SALJEM SVE STO IMAM OD PODATAKA
interface RouteHomeScreenI {
  allColorData: {
    title: string;
    data: { colorName: string; hexCode: string }[];
  }[];
}

// ALI SADA JE DOBRO DA DEFINISES TYPE-OVE ZA ROUTE-OVE
// JER CES KORISTITI Record TYPE
// ALI OVO CE TI POMOCI STA SA CIM SMES DA PAIR-UJES
// O OVOME NEMA NISTA U DOKUMENTACIJI ALI IZGLEDA DA TREBAS DA POVEZES
// ROUTE TYPE SA TYPE-OVIMA ZA SCREEN-OVE

// DEFINISACU PRVO TYPE-OVE ZA MOGUCE SCREEN-OVE
type colorScreenNamesType = 'SOLARIZED' | 'RAINBOW' | 'THEME_COLORS'; // MOZDA JE OVO BIL ODOBRO MESTO ZA UPOTREBU enum-A, ALI TO CU U NEKOM MOM PROJEKTU

type homeScreenNameType = 'Home';

// === !== === A SADA DA DEFINISEM TE RECORD-E !== === !==
type colorRecordRouteToScreen = Record<colorScreenNamesType, RouteColorScreenI>;
type homeRecordRouteToScreen = Record<homeScreenNameType, RouteHomeScreenI>;
// === !== === !== === !==

// =============================================================================================
// OVO NECE TREBATI OVDE AL ICE TREBATI ZA DIREKTAN TYPING SCREEN KOMPONENTE
// ROUTE PROPS TYPE, STO CE NA KRAJU ODLUCITI STA CU MOCI DA DAJEM SCREEN-OVIMA
// === KORISTIM     RouteProp
type RouteToScreenColor = RouteProp<
  colorRecordRouteToScreen,
  colorScreenNamesType //   OPET SE MORA ZADADVATI MOGUCA IMENA
>;
type RouteToScreenHome = RouteProp<homeRecordRouteToScreen, homeScreenNameType>;
// ==============================================================================================

// ====>      IZUZETNO VAZNO         &
//  MISLIM DA OVDE TREBA DODATI RECORDE KAO TYPE-OVE (MORAS KORISTITI      &      )
const Stack = createStackNavigator<
  homeRecordRouteToScreen & colorRecordRouteToScreen
>();

// PROVERA

const TryoutComponent: FunctionComponent = () => {
  let something = 4;

  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="RAINBOW"
            initialParams={{ colors: [{ colorName: '', hexCode: '' }] }}
            component={Tryout}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

// !!!!! PODSETNIK DA SE SCREEN NAME MOZE TYPE-OVATI (ANOTATOVATI) I KADA LAY-UJES DOWN Screen KOMPONENTU

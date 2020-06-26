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
export type colorScreenNamesType = 'SOLARIZED' | 'RAINBOW' | 'THEME_COLORS'; // MOZDA JE OVO BIL ODOBRO MESTO ZA UPOTREBU enum-A, ALI TO CU U NEKOM MOM PROJEKTU

type homeScreenNameType = 'Home';

// === !== === A SADA DA DEFINISEM TE RECORD-E !== === !==
type colorRecordRouteToScreen = Record<colorScreenNamesType, RouteColorScreenI>;
type homeRecordRouteToScreen = Record<homeScreenNameType, RouteHomeScreenI>;
// === !== === !== === !==

// ====>      IZUZETNO VAZNO         &
//  MISLIM DA OVDE TREBA DODATI RECORDE KAO TYPE-OVE (MORAS KORISTITI      &      )
const Stack = createStackNavigator<
  homeRecordRouteToScreen & colorRecordRouteToScreen
>();

// SADA CU DA TYPE-UJEM DVA PROP-A KOMPONENTE KOJA TREBA DA REPREZENTUJE SCREEN

// TREBAS OBRATITI PAZNJU NA TO ODAKLE ZELIS GDE DA SE NAVIGATE-UJE
// JER MOZE SE DESITI DA POGRESNO DEFINISES TYPING ZA
// navigation
// A NAVIGATIO NTREBA BITI TAK OTYPED DA
// KORISTICU    StackNavigationProp   TYPE

// ZELIM TYPE SAFETY ZA SLEDECE
// ZELIM DA HOME PAGE IMA MOGUCNOST NAVIGACIJE DO OSTALIH COLOR PAGE-OVA
// I TAKODJE DEFINISEM DA IM SE PRI TOM NAVIGATE-INGU

// =============================================================================================
// ALI PRVO CU DEFINISATI ROUTE INSIDE SCREEN
//  I VODI MRACUNA STA GDE PRIPADA
// === KORISTIM     RouteProp
type routeOfColorScreenType = RouteProp<
  colorRecordRouteToScreen,
  colorScreenNamesType //   OPET SE MORA ZADADVATI MOGUCA IMENA
>;
type routeOfHomeScreenType = RouteProp<
  homeRecordRouteToScreen,
  homeScreenNameType
>;
// ==============================================================================================
// A SADA DEFINISEM KAKO CE nvigate PROP IZGLEDATI (USTVARI PO TYPE SAFTY-JU GDE CU SE MOCI NAVIGATE-OVATI IZ HOME-A)
// PRVO IDU VREDNOSTI STA CE SE MOCI POSLATI
// PA ONDA IDU VREDNSOTI DO KOJIH SCREEN-OVA CE SE MOCI POSLATI
// - PRVI GENERIC SE ODNOSI NA ONO STA SE SALJE
// - DRUGI ARGUMENT SE ODNOSI NA IMENA SCREEN-OVA
// ALI I DALJE CES MORATI KORISTI Record TYPE

type navigateToColorScreenType = Record<
  colorScreenNamesType,
  RouteColorScreenI
>;

type HomeNavigationPropType = StackNavigationProp<navigateToColorScreenType>;

// I TO BI BILO TO STO SE TICE TYPING-A ,A SADA MORAM ODLLUCITI STA DA IZVOZIM

// NIKAKAV NAVIGATION IZ COLOR SCREEN-OVA NIJE PREDVIDJEN IAK OSAM TAMO MOGAO DA DEFINISEM DA IMA HOME BUTTON ALI TO NECU URADITI
// U OVOM SLUCAJU

// MOGU PODELITI IZVOZENJE U NEKOLIKO GRUPA

const { Navigator, Screen } = Stack;
/**
 * @description Navigator SE WRAPPP-UJE OKO INDIVIDUAL Screen-OVA (OVDE SU TI TE DVE KOMPONENTE) /I NE ZABORAVI DA SVE MOTA BITI U *" NavigationContainer "* KOMPONENTI/
 */
export default { Navigator, Screen }; // MOGAO SAM DIREKTNO IZVESTI Stack ALI OVDE TI SVE POKAZUJEM KAKO IZGLEDA
// TI IZVEZI SAMO       Stack     U BUDUCNOSTI, KAO DEFAULT EXPORT

// ZELIM DA IZVEZEM SVE POTREBNE TYPE-OVE
// ONO STO CE TREBATI SU PROP TYPE-OVI ZA KOMPONENTE

export interface HomeScreenProps {
  navigation: HomeNavigationPropType;
  route: routeOfHomeScreenType;
}

export interface ColorScreenProps {
  navigation: any; // NEMA NIKAKVE JASNE NAVIGACIJE, MOZE SE RADITI BILO STA IZ COLOR SCREEN-OVA
  route: routeOfColorScreenType;
}

// --------

/* const TryoutComponent: FunctionComponent<{
  navigation: HomeNavigationPropType;
  route: routeOfHomeScreenType;
}> = (props) => {
  let something = 4;

  const { navigation, route } = props;

  navigation;

  const { params } = route;

  const { allColorData } = params;

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
}; */

// !!!!! PODSETNIK DA SE SCREEN NAME MOZE TYPE-OVATI (ANOTATOVATI) I KADA LAY-UJES DOWN Screen KOMPONENTU

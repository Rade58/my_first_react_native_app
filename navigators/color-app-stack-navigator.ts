// UVOZICU SVE I OBJASNJAVATI CEMU SLUZI
import {
  //
  createStackNavigator,
  //
  // --> types
  // SLEDECI TYPE CE MI SLUZITI DA PRAVILNO TYPE-UJEM navigation
  //                KONKRETNO JE NAJVAZNIJE DA CE TO ODREDITI
  // U TYPING POREDKU, STA SMEM DA DODAM
  StackNavigationProp,
} from '@react-navigation/stack';

// TREBACE MI I NESTO S CIM MOGU DA TYPE-UJEM ROUTE, ALI TO SE UVIZI IZ DRUGOG PAKETA
import {
  RouteProp,
  //
} from '@react-navigation/native';

// / --------------------------------------------------------------------------------------
// / --------------------------------------------------------------------------------------

// MORAS NAPRAVITI INTERFACE-OVE, KOJI CE ODGOVARATI PARAMSIMA, KOJE SMES SLATI U SCREEN
// DAKEL TYPE-UJES ONO STA MOZES OCEKIVATI U      route     PROPU       , ODNOSNO U NJEGOVOM        params    PROPU
// IL IDA BUDEM JOS TACNIJI,
//                              OVDE------------>           props: {route: {params :  {TYPE-UJES OVAJ OBJEKAT}  }}
interface RouteColorScreenI {
  // U MOM PRIMERU TO CE BITI BOJE
  colors: { colorName: string; hexCode: string }[];
  imeScreena: string;
}

// DVA INTERFACE PRAVIM JER RAZLICITE STVARI SALJE U SCREEN-OVE NA KOJIMA CE BITI RENDERED COLOR, I U Home SCREEN

// JER U home SCREEN JA SALJEM SVE STO IMAM OD PODATAKA
interface RouteHomeScreenI {
  allColorData: {
    imeScreena: string;
    data: { colorName: string; hexCode: string }[];
  }[];
}

// ALI SADA JE DOBRO DA DEFINISES TYPE-OVE ZA ROUTE-OVE
// JER CES KORISTITI Record TYPE
// ALI OVO CE TI POMOCI STA SA CIM SMES DA PAIR-UJES
// O OVOME NEMA NISTA U DOKUMENTACIJI ALI IZGLEDA DA TREBAS DA POVEZES
// ROUTE TYPE SA TYPE-OVIMA ZA SCREEN-OVE

// !!!!!!!!!!!    VAZNA STVAR      !!!!!!!!!!!!!!!!
// TI CES IMATI
//                -     SAMO JEDAN SCREEN U KOJI CES RENDER-OVATI BOJE
//                    ALI JA CU TAKORECI PREVARITI KORISNIKA TAK OSTO CU MU SERVIRATI RAZLICITE PODATKE U TOM
//                    I TO U ZAVISNOSTI OD PARMAETARA, KOJE BUDEM PROSLEDJIVAO SA
//                                                                                        navigation.navigate()

// MOZES SE PREVARITI PA ODLUCITI SE DA TYPE-UJE MULTIPLE SCREENS
// ALI TI TO NE TREBAS RADITI, JER TI CES NAVIGATE-OVATI SAMO DO JEDNOG SCREEN-A U KOJ ICE SE SLATI RAZLICITI PARAMSI

// DAKLE SCREEN NAME GDE CE BITI LISTED BOJE CE BITI TYPED SA SLEDECIM
export type colorScreenNameType = 'ColorPallete';

// A NIJE SPORNO KOJE CE IME BITI ZA          Home
type homeScreenNameType = 'Home';

// === !== === A SADA DA DEFINISEM TE RECORD-E !== === !==
type colorRecordRouteToScreen = Record<colorScreenNameType, RouteColorScreenI>;
type homeRecordRouteToScreen = Record<homeScreenNameType, RouteHomeScreenI>;
// === !== === !== === !==

// ====>      IZUZETNO VAZNO         &
//  MISLIM DA OVDE TREBA DODATI RECORDE KAO TYPE-OVE (I MORAS KORISTITI      &      )
const Stack = createStackNavigator<
  homeRecordRouteToScreen & colorRecordRouteToScreen
>();

// SADA CU DA TYPE-UJEM DVA PROP-A KOMPONENTE KOJA TREBA DA REPREZENTUJE SCREEN

// TREBAS OBRATITI PAZNJU NA TO ODAKLE ZELIS GDE DA SE NAVIGATE-UJE
// JER MOZE SE DESITI DA POGRESNO DEFINISES TYPING ZA
// navigation
// A NAVIGATIO NTREBA BITI TAKO TYPED DA UZIMAS U OBZIR ODAKLE DOKLE NAVIGATE-UJES
// I STA SE MOZE NACI U params-U, U SCREEN-U, NAKON NAVIGATING-A
// KORISTICU    StackNavigationProp   TYPE

// ZELIM TYPE SAFETY ZA SLEDECE
// ZELIM DA HOME PAGE IMA MOGUCNOST NAVIGACIJE DO COLLOR PALLETE PAGE (U KOJI CE SE PROSLEDJIVATI RAZLICITE VREDNOSTI STO CU POKAZATI KASNIJE)
// I TAKODJE DEFINISEM (U POGLEDU TYPING-A) DA SE PRI TOM NAVIGATE-INGU PROSLEDJUJE   IME SCREEN-A (ODNONO ONO STO TREBA BITI IME DISPLAYED U VRHU)
// I NIZ OBJEKATA U KOJEM JE JEDAN PROPERTI IME BOJE A DRUGI HEXCODE

// =============================================================================================
// DAKLE TYPE-UJEM ROUTE- INSIDE SCREEN
//  I VODI MRACUNA STA GDE PRIPADA
// === KORISTIM     RouteProp
type routeOfColorScreenType = RouteProp<
  colorRecordRouteToScreen,
  colorScreenNameType
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
// - DRUGI GENERIC SE ODNOSI NA IMENA SCREEN-OVA
// ALI I DALJE CES MORATI KORISTI Record TYPE

type navigateToColorScreenType = Record<colorScreenNameType, RouteColorScreenI>;

type HomeNavigationPropType = StackNavigationProp<navigateToColorScreenType>;

// I TO BI BILO TO STO SE TICE TYPING-A ,A SADA MORAM ODLLUCITI STA DA IZVOZIM

// NIKAKAV NAVIGATION IZ COLOR SCREEN-A NIJE PREDVIDJEN, IAKO SAM TAMO MOGAO DA DEFINISEM DA IMA HOME BUTTON ALI TO NECU URADITI
// U OVOM SLUCAJU

// MOGU PODELITI IZVOZENJE U NEKOLIKO GRUPA

const { Navigator, Screen } = Stack;
/**
 * @description Navigator SE WRAPPP-UJE OKO INDIVIDUAL Screen-OVA (OVDE SU TI TE DVE KOMPONENTE) /I NE ZABORAVI DA to sve MOTA BITI U *" NavigationContainer "* KOMPONENTI/
 */
export default { Navigator, Screen }; // MOGAO SAM DIREKTNO IZVESTI Stack ALI OVDE TI SVE POKAZUJEM KAKO IZGLEDA Stack IZNUTRA (IMA DVE KOMPONENTE)
// TI IZVEZI SAMO       Stack     U BUDUCNOSTI, KAO DEFAULT EXPORT

// ZELIM DA IZVEZEM SVE POTREBNE TYPE-OVE
// ONO STO CE TREBATI SU PROP TYPE-OVI ZA KOMPONENTE

/**
 * @description PROPSI HOME KOMPONENTE
 */
export interface HomeScreenProps {
  navigation: HomeNavigationPropType;
  route: routeOfHomeScreenType;
}

/**
 * @description PROPSI COLOR PALETTE KOMPONENTE
 */
export interface ColorScreenProps {
  navigation: any; // NEMA NIKAKVE JASNE NAVIGACIJE, MOZE SE RADITI BILO STA IZ COLOR PALETTE SCREEN-A
  route: routeOfColorScreenType;
}

// !!!!! PODSETNIK DA SE SCREEN NAME MOZE TYPE-OVATI (ANOTATOVATI) I KADA LAY-UJES DOWN Screen KOMPONENTU

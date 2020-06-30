# MODAL

[_____](https://kadikraman.github.io/react-native-v2/modals)

DA BI SE DISPLAY-OVAO MODAL, POTREBAN JE THINKERING SA NAVIGATIONOM

IDEJA JE, DAKLE DA JA, ZA MOJ PRIMER, DEFINISEM MODAL, KOJI BI SE OTVARAO I KOJI BI HOLD-OVAO FORM

MORAM REFACTOR-OVATI, NAVIGATION, MOG PROJEKTA DA BI TAKVO NESTO BILO MOGUCE

ALI NAJBOLJEJE KRENUTI OD TOGA, STA JA USTVARI SVE TREBAM ZNATI DA BIH MOGAO DEFINISATI OVAKO NESTO

# U SUSTINI TI MORAS ZNATI SLEDECE STVARI

[NESTING NAVIGATORA](https://reactnavigation.org/docs/nesting-navigators)-A (RENDERING NEKOG NAVIGATOR-A, U SCREEN-U DRUGOG NAVIGATOR-A)

A KADA NAUCIM TO, ONDA SE MOGU POZABAVITI TIME, KAKO USTVARI DA DEVELOP-UJEM

[OPENING FULL-SCREEN MODAL](https://reactnavigation.org/docs/modal/)-A

I O OVOME MOGU PROCITATI IZ LINKOVA KOJE SAM TI OSTAVIO

ILI MOGU PRATITTI KADINO OBJASNJENJE

HAJDE DA KRENRM OD MOG APP-A, DA OBJASNIM KAKVU TO ON NAVIGACIJU IMA

# TI TRENUTNO U TVOM APP-U IMAS JEDAN NAVIGATION STACK I TO JE ROOT STACK

I TAJ ROOT STACK SE SASTOJI OD DVA SCREEN-A: `HOME` I `COLLOR PALETTE DETAILS` (ILI KAKO SAM GA VEC DRUGACIJE NAZVAO)

MEDJUTIM JA ZELIM NESTO DRUGACIJU SITUACIJU (A KADI JE PREDSTAVILA I SLIKU (**MALI CRNI GRAPH**), O TOME KAKVA JE TO SITUACIJA KOJU TREBAM DA DEFINISEM)

# MORAM REDEFINISATI SITUACIJU, PRI KOJOJ TREBA DA 'UMETNEM' STACK, USTVARI UMETANJE JE POGRESNA REC I ZATO CU BITI DETALJNIJI

TREBALO BI DA IMAM

ROOT STACK --> TREBAO BI DA SLUZI ZA NVIGATING IZMEDJU:

- `MAIM SCREEN-A`

- `MODALA` (KOJI JE POSEBAN I VIDECES ZASTO JE POSEBAN I ZASTO SE KORISTI)

A OVO TREBAM DA REDEFINISEM

MAIN STACK --> MA KAKO SI GA VEC NAZVAO, JESTE ONO STO TRENUTNO IMAS, A TO JE NAVIGATING BETWEEN

- `MAIN SCREEN`

- `COLOR PALETTE SCREEN`

- `IMAM I NOVI SCREEN KOJI SAM DODAO U PREDHODNOM BRANCH-U` (NEKA OSTANE I DALJE TU JER NE SMETA (IPAK JE N KRAJU NISAM KORISTIO))

TI USTVARI TREBA DA, AKO MOGU TAKO DA SE IZRAZIM, LIFT-UJES TVOJ MAIN STACK, DA BI UMETNO U **NOVI STACK** A TO CE BITI ROOT STACK, KOJI IMA MIAN SCREEN I MODAL SCREEN

O MODALU CU GOVORITI NESTO KASNIJE, JER ON IMA POSEBNA SVOJSTVA (ON NECE BITI ITS OWN SCREEN)

# :one: HAJDE DA KRENEM OD TOGA DA CU DA PREMESTIM. MOJ POSTOJECI STACK I DA CU MU DATIT IME MainStack

JA SAM STACK DEFINIAO OVDE I NEMA POTREBE TAMO DA BILO STA MENJAM

`navigators/color-app-stack-navigator.ts`

ps. NISAM KRIV STO SAM, RANIJE, OVAKO GLUPO IME DAO FAJLU, YOU GO WITH IT

TAJ STACK JE DAKLE TRENUTNI ROOT STACK, KOJEG KORISTIM U MOM APP-U

TREBAM OVAJ STACK UKLONITI IZ `App.tsx` I STAVIM GA U MAIN

- `code App.tsx`

```tsx
import React, { FunctionComponent } from 'react';
//
import { NavigationContainer } from '@react-navigation/native';

// === !== === !== === OVO OVDE VISE NECU KORISTITI !== === !== === !== ===
// import Stack from './navigators/color-app-stack-navigator';

// import Home from './screens/ColorHome';  // OVO VISE BNECE BITI OVDE
//import Palette from './screens/Pallete';   // NI OVO VISE NECE BITI OVDE

// import InputTextPreview from './screens/TextInputReview';
//

// const { Navigator, Screen } = Stack;  //

//  (OVO I ONAKO NIJE VISE ONO STO SE KORISTI U APP-U JER SE DATA UZIMA IZ NETWORK REQUEST-A)
/* const SOLARIZED = [
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

const RANDOM_COLORS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  { imeScreena: 'Solarized', data: SOLARIZED },
  { imeScreena: 'Rainbow', data: RAINBOW },
  { imeScreena: 'Random Colors', data: RANDOM_COLORS },
];
 */
//

const App: FunctionComponent = () => (
  <NavigationContainer>
    {/* OVO VISE NECE BITI OVDE */}
    {/* <Navigator>
      <Screen<'Home'>
        component={Home}
        name="Home"
        initialParams={{ allColorData: COLOR_PALETTES }}
      />
      <Screen<'ColorPallete'>
        name="ColorPallete"
        component={Palette}
        options={({
          route: {
            params: { imeScreena },
          },
        }) => ({
          title: imeScreena,
        })}
      />
      <Screen name="Input Preview" component={InputTextPreview} />
    </Navigator> */}
  </NavigationContainer>
);
export default App;

```

# :two: HAJDE SADA DA KREIRAM NOVI SCREEN, KOJI CE SE ZVATI `MainStackScreen.tsx`

- `touch screens/MainStackScreen.tsx`

```tsx
// U OVAJ SCREEN UVOZIM MainS SCREEN I UVOZIM Palette SCREEN (USTVARI TO JE NAJVAZNIJE STA UVOZIM)
// TAKODJE UVOZIM NavigatorContainer-A

// UVOZIM MOJ STACK, KOJEM CU NA UVOZU DATI IME     MainStack  (CISTO DA SE ZNA, ODNONO DA SE RAZLUCI, ALI NEMA PRETERANIH, 'CODING' RAZLOGA ZA TO)

import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default MainStackScreen;

```

# :three: KREIRAM ROOT STACK I SVE STO UZ TO IDE U POGLEDU TYPESCRIPT-A

- `touch navigators/rootStackAndTypes.ts` (NESTO PRIHVATLJIVIJE IME OD ONOGA STO SAM IMAO ZA DRUGI FAJL U OVOM FOLDERU)

```ts
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface RouteHomeScreenStackI {
  // nestoBezvezeZaSada: any;
}

type RouteModalI = RouteHomeScreenStackI;

// SCREEN NAMES
type mainStackScreenNameType = 'Main';
type modalNameType = 'AddNewPalette';

// RECORDS
type mainStackRecordRouteToScreen = Record<
  mainStackScreenNameType,
  RouteHomeScreenStackI
>;
type modalRecordRouteToScreen = Record<modalNameType, RouteModalI>;

// PRAVLJENJE STACK-A
const RootStack = createStackNavigator<
  mainStackRecordRouteToScreen & modalRecordRouteToScreen
>();

// ROUTE TYPES
type routeOfMainStackScreen = RouteProp<
  mainStackRecordRouteToScreen,
  mainStackScreenNameType
>;

type routeOfModal = RouteProp<modalRecordRouteToScreen, modalNameType>;

// navigation TYPES
// OVO SAM EXPORT-OVAO SA RAZLOGOM (DA PROSIRIM TYPE ZA HOME)
export type navigateToModal = Record<modalNameType, any>;
type MainStackScreenNavigationPropType = StackNavigationProp<navigateToModal>;
// EKSPLICITNOG NAVIGATINGA NEMA IZ MODALA OZIM BACKSPACE NAZAD TO HOME
//

// STACK JE DEFAULT EXPORT
/**
 * @description ROOT STACK
 */
export default RootStack;

// TYPE-OVI ZA SCREEN-OVE

/**
 * @description HOME STACK SCREEN PROPSI
 */
export interface MainStackScreenPropsI {
  navigation: MainStackScreenNavigationPropType;
  route: routeOfMainStackScreen;
}

export interface ModalPropsI {
  navigation: any;
  route: routeOfModal;
}

```

# :four: UVOZIM ROOT STACK, (I OSTALO), U `App.tsx` KAKO BIH TAMO USPOSTAVIO ROOT STACK

**OVDE CU NAUCITI I KAKO DA MOUNT-UJEM MODAL**, ODNONO KOJI SE PROPSI TADA DAJU Screen-U

```tsx
// U OVAJ SCREEN UVOZIM MainS SCREEN I UVOZIM Palette SCREEN (USTVARI TO JE NAJVAZNIJE STA UVOZIM)
// TAKODJE UVOZIM NavigatorContainer-A

// UVOZIM MOJ STACK, KOJEM CU NA UVOZU DATI IME     MainStack  (CISTO DA SE ZNA, ODNONO DA SE RAZLUCI, ALI NEMA PRETERANIH, 'CODING' RAZLOGA ZA TO)

import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default MainStackScreen;

```

# :five: POSTO CE SE IZ HOME SCRENN-A, KOJI JE DEO MAIN STACK-A, USTVARI NAVIGATE-OVATI DO MODALA, TREBAJU MI PROP TYPES U HOME KOMPONENTI, ODNON OSCREEN-U, KONKRETNO ZBOG NAVIGATE-A, JER CU TAMO KORISTITI NAVIGATE TO MODAL

MORAM PROSIRITI TYPE-OVE ZA HOME, SA ONIM TYPE-OVIMA IZ MAIN-A

- `code navigators/color-app-stack-navigator.ts`


```ts
// OSTAVLJAM SAM ODEO CODE-A
import {navigateToModal} from './rootStackAndTypes'

// ...
// ...

type navigateToColorScreenType = Record<
  colorScreenNameType,
  RouteColorScreenI
> &
  Record<inputPreviewScreenNameType, RouteInputPreviewScreenI> &
  navigateToModal;


```

# :six: DEFINISAO SAM NAVIGATING DO MODALA

- `code screens/ColorHome.tsx` (HOME SCREEN JE DEO I ROOT STACK-A ALI I MAIN STACK-A, SAM OTI NAPOMINJEM)

```tsx
import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
} from 'react';

import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Text,
} from 'react-native';

import { HomeScreenProps } from '../navigators/color-app-stack-navigator';

import PalettePreview from '../components/PreviewPalette';

interface ApiDataItem {
  id: number;
  paletteName: string;
  colors: { colorName: string; hexCode: string }[];
}

type ApiDataType = ApiDataItem[];

const Home: FunctionComponent<HomeScreenProps> = (props) => {
  const colorsURL = 'https://color-palette-api.kadikraman.now.sh/palettes';

  const { navigation, route } = props;

  const [colorData, setColorData] = useState<ApiDataType>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const fetchApiDataCallback = useCallback(async () => {
    const result = await fetch(colorsURL);

    if (result.ok) {
      const data: ApiDataType = await result.json();
      setColorData(data);
    }
  }, []);

  const handleRefetch = useCallback(async () => {
    setIsRefreshing(true);
    await fetchApiDataCallback();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3800);
    //
  }, [setIsRefreshing, fetchApiDataCallback]);

  useEffect(() => {
    fetchApiDataCallback();
  }, [fetchApiDataCallback]);

  return (
    <View>
      {/* ------------- DODAO SLEDECE --------------------------- */}
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewPalette');
          }}
        >
          <Text style={styles.inputPreview}>Add a color scheme</Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------------------- */}
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              handleRefetch();
            }}
          />
        }
        //
        style={styles.list}
        data={colorData}
        renderItem={({ item: { colors, paletteName } }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPallete', {
                colors,
                imeScreena: paletteName,
              });
            }}
          >
            <PalettePreview colors={colors} paletteName={paletteName} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: { marginRight: 'auto' },
  inputPreview: { fontSize: 38 },
});

export default Home;

```


**SADA AK OBUDES U HOME KOMPONENTI ZELEO DA NAVIGATE-UJES DO MODAL SCREEN-A, IMACES TYPESCRIPT COVERAGE**

ALI JA JOS NISAM POSTAVIO MODAL SCREEN, TAK ODA CU SADA TO DA URADIM

# :seven: STAVLJANJE MODAL SCREEN-A A U ROOT STACK NAVIGATOR-A

ALI NISAM NAPRAVIO JOS APPRPRIATE COMPONENT

ZA POCETAK NEKA TO BUDE OBICNA HELLO WORLS KOMPONENTA

- `touch components/AddNewPaletteModal.tsx`

```tsx
import React, { FunctionComponent } from 'react';

import { View, Text } from 'react-native';

import { ModalPropsI } from '../navigators/rootStackAndTypes';

const AddNewPaletteModal: FunctionComponent<ModalPropsI> = (props) => {
  let a;

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

export default AddNewPaletteModal;

```

- `code App.tsx`

```tsx
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
    <Navigator>
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

```

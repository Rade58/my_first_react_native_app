import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
//
import { NavigationContainer } from '@react-navigation/native'; // MOZDA BI BILO DOBRO DA SE OVO ZASTALNO

// === !== === !== === !== === !== === !== ===
import Stack from './navigators/color-app-stack-navigator';

//
// KOMPONENTE KOJE CE SE KORISTITI KA OSCREEN-OVI
import Home from './screens/ColorHome';
import Palette from './screens/Pallete';

// KOMPOPNENTE VEZANE ZA NAVIGACIJU
const { Navigator, Screen } = Stack;

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

const THEME_COLORS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

//

const COLOR_PALETTES = [
  { title: 'Solarized', data: SOLARIZED },
  { title: 'Rainbow', data: RAINBOW },
  { title: 'theme colors', data: THEME_COLORS },
];

const App: FunctionComponent = () => (
  <NavigationContainer>
    <Navigator>
      {/* PRVO HOME */}
      <Screen<'Home'>
        component={Home}
        name="Home"
        initialParams={{ allColorData: COLOR_PALETTES }}
      />
      {/* E SADA DOLAZI ONO BITNO, ODNOSNO ONO NAJBITNIJE        'ZADAVANJE OCIONOG NAME-A ZA SCREEN, JER JA SAMO LAY-JEM JEDAN Screen ALI ON MOZE BITI
      VISE SCREENOVA'    KORISTIM     options  */}

      <Screen<'Solarized'>
        name={'Solarized'}
        component={Palette}
        options={({
          route: {
            params: { title },
          },
        }) => ({
          title: title + '****',
        })}
      />
      <Screen<'Rainbow'>
        name={'Rainbow'}
        component={Palette}
        options={({
          route: {
            params: { title },
          },
        }) => ({
          title: title + '..<><>..',
        })}
      />
      <Screen<'theme colors'>
        name={'theme colors'}
        component={Palette}
        options={({
          route: {
            params: { title },
          },
        }) => ({
          title: title,
        })}
      />
    </Navigator>
  </NavigationContainer>
);
export default App;

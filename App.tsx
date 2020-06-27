import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
//
import { NavigationContainer } from '@react-navigation/native'; // MOZDA BI BILO DOBRO DA SE OVO IZVOZI IZ
//                                                                FAJLA GDE SAM DEFINISAO SVE TYPE-OVE
//                                                                I OSTALE KOMPONENTE VEZANE ZA NAVIGACIJU

// === !== === !== === !== === !== === !== ===
import Stack from './navigators/color-app-stack-navigator';

//
// KOMPONENTE KOJE CE SE KORISTITI KAO SCREEN-OVI
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

const RANDOM_COLORS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

// KOJA SAM SPOJIO U OBJEKAT KOJI JE POGODAN DA SE KORISTI SA SECTION LIST-OM
const COLOR_PALETTES = [
  { imeScreena: 'Solarized', data: SOLARIZED },
  { imeScreena: 'Rainbow', data: RAINBOW },
  { imeScreena: 'Random Colors', data: RANDOM_COLORS },
];

//

const App: FunctionComponent = () => (
  <NavigationContainer>
    <Navigator>
      {/* PRVO HOME I VIDIS DA MOZES I OVDE DA DODAS GENERIC */}
      <Screen<'Home'>
        component={Home}
        name="Home"
        // DAKLE JA MOGU PROSLEDITI BILO KOJI DATA KOJI
        // I LEPO JE DA SAM IMAO MOGUCNOST DA DOBIJE SUGESTIONS ON    Ctrl + Space
        initialParams={{ allColorData: COLOR_PALETTES }}
      />
      {/* E SADA DOLAZI ONO BITNO, ODNOSNO ONO NAJBITNIJE   'ZADAVANJE  NAME-A ZA SCREEN, JER JA SAMO LAY-JEM JEDAN Screen ALI ON MOZE
      RENDER-OVATI RAZLICIT DATA OD SLUCAJA DO SLUCAJ'    KORISCENJEM     options    PROPA  */}

      <Screen<'ColorPallete'>
        name="ColorPallete"
        component={Palette}
        // I OVO JE NAJVAZNIJE
        // RESTRUKTURIRAS ONO STO SE U KOMPONENTU, ODNON IOSCREEN SALJE PRILIKOM
        // NAVIGATE-OVANJA DO NJE
        // I SA TIM PODACIMA MOZES DEFINISATI NEKA OD SVOJSTAVA SCREEN-A
        // JA MENJAM    title   SCREEN-A, UPRAVO SA POMENUTIM PASSED IN TOKOM NAVIGATING-A PODACIMA
        options={({
          route: {
            params: { imeScreena },
          },
        }) => ({
          // I OPET IMAM SUGESTIJE KORISCENJEM   Ctrl + Space
          title: imeScreena,
        })}
      />
    </Navigator>
  </NavigationContainer>
);
export default App;

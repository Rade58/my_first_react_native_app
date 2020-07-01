# U PROSLOM BRANCHU TI SI DEFINISAO MODAL, A SADA TREBAS DA NAPRAVIS FORM ELEMENTE U TOM MODALAU

USTVARI TREBAS DA NAPRAVIS JEDAN `TextInput` U KOJI CE SE UNOSITI IME NOVE COLOR PALETE

TAKODJE BICE OBEZBEDJENO MNOGO BOJA

E TE BOJE TREBA DA SE PICK-UJU UZ POMOC `Switch` KOMPONENTE

**NA KRAJU, SVE STO UNESES TREBA DA BUDE DODATO U ONAJ ARRAY, U KOJEM SU OSTALE COLOR PALETTE** (GRANA STATE-A U `screens/ColorHome.tsx`)

NARAVNO TREBA BI DA SE DEFINISE I REACT ELEMENT REPRESENTED BY `TouchableOpacity`, I ON BI TREBALO DA PREDSTAVLJA SUBMIT DUGME, KOJIM SE MENJA GRANA STATE-A NA HOME PAGE-U, I UJEDNO NAVIGATE-UJE BACK TO HOME PAGE (MORAS VIDETI KOJU METODU `navigation` PROP-A TREBAS DA KORISTIS DA BI NAVIGAT-OVAO BACK TO HOME PAGE, JER SI TO RANIJE SMO RADIO SA BACKSPACE-OM U LEFOM GORNJEM UGLU)

## EVO GA NIZ, CIJI DATA TREBA DA BUDE DISPLAYED U MODALU

```ts
const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
  { colorName: 'Aquamarine', hexCode: '#7FFFD4' },
  { colorName: 'Azure', hexCode: '#F0FFFF' },
  { colorName: 'Beige', hexCode: '#F5F5DC' },
  { colorName: 'Bisque', hexCode: '#FFE4C4' },
  { colorName: 'Black', hexCode: '#000000' },
  { colorName: 'BlanchedAlmond', hexCode: '#FFEBCD' },
  { colorName: 'Blue', hexCode: '#0000FF' },
  { colorName: 'BlueViolet', hexCode: '#8A2BE2' },
  { colorName: 'Brown', hexCode: '#A52A2A' },
  { colorName: 'BurlyWood', hexCode: '#DEB887' },
  { colorName: 'CadetBlue', hexCode: '#5F9EA0' },
  { colorName: 'Chartreuse', hexCode: '#7FFF00' },
  { colorName: 'Chocolate', hexCode: '#D2691E' },
  { colorName: 'Coral', hexCode: '#FF7F50' },
  { colorName: 'CornflowerBlue', hexCode: '#6495ED' },
  { colorName: 'Cornsilk', hexCode: '#FFF8DC' },
  { colorName: 'Crimson', hexCode: '#DC143C' },
  { colorName: 'Cyan', hexCode: '#00FFFF' },
  { colorName: 'DarkBlue', hexCode: '#00008B' },
  { colorName: 'DarkCyan', hexCode: '#008B8B' },
  { colorName: 'DarkGoldenRod', hexCode: '#B8860B' },
  { colorName: 'DarkGray', hexCode: '#A9A9A9' },
  { colorName: 'DarkGrey', hexCode: '#A9A9A9' },
  { colorName: 'DarkGreen', hexCode: '#006400' },
  { colorName: 'DarkKhaki', hexCode: '#BDB76B' },
  { colorName: 'DarkMagenta', hexCode: '#8B008B' },
  { colorName: 'DarkOliveGreen', hexCode: '#556B2F' },
  { colorName: 'Darkorange', hexCode: '#FF8C00' },
  { colorName: 'DarkOrchid', hexCode: '#9932CC' },
  { colorName: 'DarkRed', hexCode: '#8B0000' },
  { colorName: 'DarkSalmon', hexCode: '#E9967A' },
  { colorName: 'DarkSeaGreen', hexCode: '#8FBC8F' },
  { colorName: 'DarkSlateBlue', hexCode: '#483D8B' },
  { colorName: 'DarkSlateGray', hexCode: '#2F4F4F' },
  { colorName: 'DarkSlateGrey', hexCode: '#2F4F4F' },
  { colorName: 'DarkTurquoise', hexCode: '#00CED1' },
  { colorName: 'DarkViolet', hexCode: '#9400D3' },
  { colorName: 'DeepPink', hexCode: '#FF1493' },
  { colorName: 'DeepSkyBlue', hexCode: '#00BFFF' },
  { colorName: 'DimGray', hexCode: '#696969' },
  { colorName: 'DimGrey', hexCode: '#696969' },
  { colorName: 'DodgerBlue', hexCode: '#1E90FF' },
  { colorName: 'FireBrick', hexCode: '#B22222' },
  { colorName: 'FloralWhite', hexCode: '#FFFAF0' },
  { colorName: 'ForestGreen', hexCode: '#228B22' },
  { colorName: 'Fuchsia', hexCode: '#FF00FF' },
  { colorName: 'Gainsboro', hexCode: '#DCDCDC' },
  { colorName: 'GhostWhite', hexCode: '#F8F8FF' },
  { colorName: 'Gold', hexCode: '#FFD700' },
  { colorName: 'GoldenRod', hexCode: '#DAA520' },
  { colorName: 'Gray', hexCode: '#808080' },
  { colorName: 'Grey', hexCode: '#808080' },
  { colorName: 'Green', hexCode: '#008000' },
  { colorName: 'GreenYellow', hexCode: '#ADFF2F' },
  { colorName: 'HoneyDew', hexCode: '#F0FFF0' },
  { colorName: 'HotPink', hexCode: '#FF69B4' },
  { colorName: 'IndianRed', hexCode: '#CD5C5C' },
  { colorName: 'Indigo', hexCode: '#4B0082' },
  { colorName: 'Ivory', hexCode: '#FFFFF0' },
  { colorName: 'Khaki', hexCode: '#F0E68C' },
  { colorName: 'Lavender', hexCode: '#E6E6FA' },
  { colorName: 'LavenderBlush', hexCode: '#FFF0F5' },
  { colorName: 'LawnGreen', hexCode: '#7CFC00' },
  { colorName: 'LemonChiffon', hexCode: '#FFFACD' },
  { colorName: 'LightBlue', hexCode: '#ADD8E6' },
  { colorName: 'LightCoral', hexCode: '#F08080' },
  { colorName: 'LightCyan', hexCode: '#E0FFFF' },
  { colorName: 'LightGoldenRodYellow', hexCode: '#FAFAD2' },
  { colorName: 'LightGray', hexCode: '#D3D3D3' },
  { colorName: 'LightGrey', hexCode: '#D3D3D3' },
  { colorName: 'LightGreen', hexCode: '#90EE90' },
  { colorName: 'LightPink', hexCode: '#FFB6C1' },
  { colorName: 'LightSalmon', hexCode: '#FFA07A' },
  { colorName: 'LightSeaGreen', hexCode: '#20B2AA' },
  { colorName: 'LightSkyBlue', hexCode: '#87CEFA' },
  { colorName: 'LightSlateGray', hexCode: '#778899' },
  { colorName: 'LightSlateGrey', hexCode: '#778899' },
  { colorName: 'LightSteelBlue', hexCode: '#B0C4DE' },
  { colorName: 'LightYellow', hexCode: '#FFFFE0' },
  { colorName: 'Lime', hexCode: '#00FF00' },
  { colorName: 'LimeGreen', hexCode: '#32CD32' },
  { colorName: 'Linen', hexCode: '#FAF0E6' },
  { colorName: 'Magenta', hexCode: '#FF00FF' },
  { colorName: 'Maroon', hexCode: '#800000' },
  { colorName: 'MediumAquaMarine', hexCode: '#66CDAA' },
  { colorName: 'MediumBlue', hexCode: '#0000CD' },
  { colorName: 'MediumOrchid', hexCode: '#BA55D3' },
  { colorName: 'MediumPurple', hexCode: '#9370D8' },
  { colorName: 'MediumSeaGreen', hexCode: '#3CB371' },
  { colorName: 'MediumSlateBlue', hexCode: '#7B68EE' },
  { colorName: 'MediumSpringGreen', hexCode: '#00FA9A' },
  { colorName: 'MediumTurquoise', hexCode: '#48D1CC' },
  { colorName: 'MediumVioletRed', hexCode: '#C71585' },
  { colorName: 'MidnightBlue', hexCode: '#191970' },
  { colorName: 'MintCream', hexCode: '#F5FFFA' },
  { colorName: 'MistyRose', hexCode: '#FFE4E1' },
  { colorName: 'Moccasin', hexCode: '#FFE4B5' },
  { colorName: 'NavajoWhite', hexCode: '#FFDEAD' },
  { colorName: 'Navy', hexCode: '#000080' },
  { colorName: 'OldLace', hexCode: '#FDF5E6' },
  { colorName: 'Olive', hexCode: '#808000' },
  { colorName: 'OliveDrab', hexCode: '#6B8E23' },
  { colorName: 'Orange', hexCode: '#FFA500' },
  { colorName: 'OrangeRed', hexCode: '#FF4500' },
  { colorName: 'Orchid', hexCode: '#DA70D6' },
  { colorName: 'PaleGoldenRod', hexCode: '#EEE8AA' },
  { colorName: 'PaleGreen', hexCode: '#98FB98' },
  { colorName: 'PaleTurquoise', hexCode: '#AFEEEE' },
  { colorName: 'PaleVioletRed', hexCode: '#D87093' },
  { colorName: 'PapayaWhip', hexCode: '#FFEFD5' },
  { colorName: 'PeachPuff', hexCode: '#FFDAB9' },
  { colorName: 'Peru', hexCode: '#CD853F' },
  { colorName: 'Pink', hexCode: '#FFC0CB' },
  { colorName: 'Plum', hexCode: '#DDA0DD' },
  { colorName: 'PowderBlue', hexCode: '#B0E0E6' },
  { colorName: 'Purple', hexCode: '#800080' },
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'RosyBrown', hexCode: '#BC8F8F' },
  { colorName: 'RoyalBlue', hexCode: '#4169E1' },
  { colorName: 'SaddleBrown', hexCode: '#8B4513' },
  { colorName: 'Salmon', hexCode: '#FA8072' },
  { colorName: 'SandyBrown', hexCode: '#F4A460' },
  { colorName: 'SeaGreen', hexCode: '#2E8B57' },
  { colorName: 'SeaShell', hexCode: '#FFF5EE' },
  { colorName: 'Sienna', hexCode: '#A0522D' },
  { colorName: 'Silver', hexCode: '#C0C0C0' },
  { colorName: 'SkyBlue', hexCode: '#87CEEB' },
  { colorName: 'SlateBlue', hexCode: '#6A5ACD' },
  { colorName: 'SlateGray', hexCode: '#708090' },
  { colorName: 'SlateGrey', hexCode: '#708090' },
  { colorName: 'Snow', hexCode: '#FFFAFA' },
  { colorName: 'SpringGreen', hexCode: '#00FF7F' },
  { colorName: 'SteelBlue', hexCode: '#4682B4' },
  { colorName: 'Tan', hexCode: '#D2B48C' },
  { colorName: 'Teal', hexCode: '#008080' },
  { colorName: 'Thistle', hexCode: '#D8BFD8' },
  { colorName: 'Tomato', hexCode: '#FF6347' },
  { colorName: 'Turquoise', hexCode: '#40E0D0' },
  { colorName: 'Violet', hexCode: '#EE82EE' },
  { colorName: 'Wheat', hexCode: '#F5DEB3' },
  { colorName: 'White', hexCode: '#FFFFFF' },
  { colorName: 'WhiteSmoke', hexCode: '#F5F5F5' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'YellowGreen', hexCode: '#9ACD' },
];
```

## JA SAM ODLUCIO DA OVO ODRADIM SAM, I DA NE GLEDAM RESENJE ZA SADA, JER IMAM IDEJU KAKO BI OVO ODRADIO

MEDJUTIM EVO IH [NEKE PREPORUKE KOJE SAM NASO OVDE](https://kadikraman.github.io/react-native-v2/forms-exercise#hints)

***

- AKO KORISNIK NETACNO UNESE PODATKE (AKO NIJE DAO IME PALETI ILI NIJE IZABRAO NI JEDNU BOJU)

KORISTI [Alert](https://reactnative.dev/docs/alert), DA NOTIFY-UJES KORISNIKA DA NIJE DOBRO UNEO STUFF

***

- OGRANICI DA MINIMALAN BROJ BOJA KOJE KORISNIK MOZE IZBRATI BUDE 4

OVO TI GOVORIM ZATO STO U PREVIEW-U PALETTE, STOJE 4 BOJE

***

- DA BI SE VRATIO NA ZELJENI SCREEN, U OVOM SLUCAJ UDA BI SE VATIO SA MODALA NA HOME, MOGU KORISTITI

**`navigation.goBack()`**

***

DA SADA KRENEM SA DEFINISANJEM

# :one: UBACICU DATA U SEPARATE FILE

- `touch modalData.ts`

DA OVDE NISTA NE POKAZUJEM I SAM MOZES VIDETI DA JE IZ TOG FAJLA IZVEZEN EKSTENZIVNI NISI KOJI SAM, GORE PREDSTAVIO

# :two: POSTO ZNAM DA CU KORISTITI SET STATE FUNKCIJU IZ HOME KOMPONENTE, DEFINISACU DA SE TA FUNKCIJA PROSLEDI DO MODALA

**PRE TOGA MORAM DA PROSIRIM TYPE-OVE ZA MODAL DA BIH MOGAO UZETI OVU FUNKCIJU SA `props.route.params`**

- `code navigators/rootStackAndTypes.ts`

```tsx
// SAMO PREDSTAVLJAM ONO STA SAM DODAO U CODE-U, NECU PREDSTAVLJATI CEO FAJL JER JE EKSTENZIVAN I PREVISE IZKOMENTARISAN

// === !== === !==
// === !== === !==
import { Dispatch, SetStateAction } from 'react';
import { ApiDataType } from '../screens/ColorHome';

type setStateFunc = Dispatch<SetStateAction<ApiDataType>>; // OVO JE TYPE ZA SET STATE FUNKCIJU

interface RouteHomeScreenStackI {
  // DODAO SAM OVAJ PROPERTI
  setStateFunc: setStateFunc;
}
// === !== === !==
// === !== === !==

// ... JOS CODE-A
// ...
// ...

// EVO TYPE-UJEM DA SE GORNJA FUNKCIJA MORA PROSLEDITI TOKOM NAVIGATING-A IZ HOMA TO MODAL
// === !== === !== // === !== === !== // === !== === !== // === !== === !==
export type navigateToModal = Record<modalNameType, RouteHomeScreenStackI>;
// === !== === !== // === !== === !== // === !== === !== // === !== === !==
```

**I SADA ODMAH IDEM I DA PROSLEDIM TU FUNKCIJU IZ HOME-A**

- `code screens/ColorHome.tsx`

```tsx
// OPET NECU PREDSTAVLJATI SAV CODE VEC CU TI SAMO POKAZATI HANDLER NA TOUCHABLE OPACITY-JU
// JER SAM TAM OTO URADIO
<TouchableOpacity
  onPress={() => {
    navigation.navigate('AddNewPalette', {
      // EVO VIDIS OVO SAM DODAO
      setStateFunc: setColorData,
      // setColorData JESTE FUNKCIJA U KOJOJ CUVA NIZ SA COLOR OBJEKTIMA KOJI SU FETCHED SA API
      // ODNOSNO NETWORK REQUEST-A
    });
  }}
>
  <Text style={styles.inputPreview}>Add a color scheme</Text>
</TouchableOpacity>
```


# :three: NAKON STO SAM OVO URADIO ODLAZIM U MODAL, PRVENSTVENO CISTO DA VIDIM, U POGLEDU TYPING-A DA LI MOGU PRONACI GORNJU FUNKCIJU ZA KOJ USAM DEFINISAO DA SE TAMO PROSLEDJUJE PRI NAVIGATING-U; ALI I DA BIH OTPOCEO SA DEFINISANJEM SVEGA U MODAL KOMPONENTI ; A DODACU DOSTA OBJASNJENJA U VIDU KOMENTARA

**MORAM, TAKODJE KREIRATI I KOMPONENTU U KOJOJ CE BITI RENDERED INDIVIDUAL `Switch`, JER MORAM VODITI RACUNA O STATE-U SVAKOG SWITCH-A INDIVIDUALY, ODNONO O TOME DA LI JE TURNED ON ILI TURNED OFF ,AKO SMEME TAK ODA SE IZARAZIM** (DAKLE OVO SAM ODVOJIO SAMO ZBOG TOGA STO MI TREBA STATE SVAKE INDIVIDUAL SWITCH KOMPONENTE, DA LI JE TURNED ON ILI TURNED OFF, DAKLE BOOLEAN)

- `touch components/ItemSwitch.tsx`

```tsx
import React, { useState, FunctionComponent } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

interface ItemSwitchPropsI {
  colorName: string;
  setIndexesOfDataArray: (value: React.SetStateAction<number[]>) => void;
  index: number;
}

const ItemSwitch: FunctionComponent<ItemSwitchPropsI> = (props) => {
  const { colorName, setIndexesOfDataArray, index } = props;

  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false);

  return (
    <View style={styles.items}>
      <Text>{colorName}</Text>
      <Switch
        value={isTurnedOn} // MORAS DEFINISATI DA BOOLEAN
        onValueChange={(bool) => {
          // BITNO JE DA OVAJ boolean KOJI SE NADJE U FUNKCIJI BUDE ONO CIME CES PROMENITI STATE
          //      DAKEL ON TREB DA BUDE PROSLEDJEN U      setIsTurnedOn

          // ZASTO TI OVO GOVORIM, PA NOVI value BIVA PROSLEDJEN KAO ARGUMENT

          console.log({ bool }); // OVO SAM PRVENSTVENO STAMPAO DA PROVERIM DA LI IMAM ENDLESS LOOP

          if (bool) {
            // DAKLE OVDE JE BOOLEAN USTVARI       true
            setIndexesOfDataArray((currIndexesArr) =>
              currIndexesArr.concat([index])
            );

            // ZNAS I SAM ZASTO JE OVDE RETURNED (DA SE NE BI   DALJE IZVSAVALA OVA FUNKCIJA)

            // ALI JA MENJAM STATE OVDE I BOOLEAN CE POSTATI ONO ISTO, I MISLIM DA JA OVDE IMAM PROBLEM SA ENDLESS LOOP-OM KOJI RADI ISTO ILI NE?

            return setIsTurnedOn(bool);
            // SAMO MI NIJE JASNO ZASTO OVO NE IZAZIVA ENDLESS LOOP
            // ALI IPAK MOZDA JE OVO ISKLJUCENO IZ TOGA DA TRIGGER-UJE PONOVNO IZVRSAVANJE
            // onValueChange

            // IAKO ZAR JA, TO UPRAVO NISAM URADIO: PROMENIO    value     STO BI OPET TREBALO DA TRIGGER-UJE
            // IZVRSENJE ISTE OVE FUNKCIJE
          }

          // NE NEMA NIKAKVOG ENDLES LOOP-A U SETTINGU ISTIG BOOLEAN
          // SVE RADI OVAKO A I DALJE MI NIJE JASNO KAKO RADI

          // JEDINA STVAR NA KOJ USAM DOSAO, ODNONO DOSAO SAM DO ZAKLJUCKA DA SAMA INTERAKCIJA
          // NA Switch-u, PROIZVODI BOOLEAN VREDNOST

          // ------------------------

          setIndexesOfDataArray((currIndexesArr) => {
            const indexOfMember = currIndexesArr.indexOf(index);

            return currIndexesArr
              .slice(0, indexOfMember)
              .concat(
                currIndexesArr.slice(indexOfMember + 1, currIndexesArr.length)
              );
          });

          return setIsTurnedOn(bool);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    borderColor: 'blanchedalmond',
    shadowColor: 'crimson',
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 2,
  },
});

export default ItemSwitch;

```

SADA CU, IZMEDJU OSTALIH POMENUTIH STVARI I UVESTI GORNJU KOMPONENTU U MODAL, I ONDA CU  

- `code components/AddNewPaletteModal.tsx`

```tsx
import React, { useState, FunctionComponent } from 'react';

import {
  View,
  Text,
  StyleSheet,
  // UVOZIM TextInput I Switch, ALI I FaltList JER CE FlatList
  // SLUZITI DA RENDER-UJEM MNOSTVO Switch-EVA
  TextInput,
  Switch,
  FlatList,
} from 'react-native';

import { ModalPropsI } from '../navigators/rootStackAndTypes';

// UVOZIM I PODATKE KOJE CE KORISTITI MODAL KOMPONENTA
import data, { ModalDataObjectI } from '../modalData';

// YPE ZA DATA DISPLAYED NA HOME-U
import { ApiDataItemI } from '../screens/ColorHome';

// KOMPONENTA KOJA RENDER-UJE JEDAN SWITCH I NAME OF COLOR (UZ OSTALU LOGIKU)
import ItemSwitch from './ItemSwitch';

const AddNewPaletteModal: FunctionComponent<ModalPropsI> = (props) => {
  // MOGU DA OTPOCNEM SA RESTRUKTURIRANJEM
  const { route, navigation } = props;
  const { params } = route;

  // EVO VEC SAM MOGAO UZETI SET STATE FUNKCIJU HOME-A, KOJA JE KAO POSLEDICA NAVIGATINGA TO MODAL NALZI
  // U MODALU
  const { setStateFunc } = params;

  // ALI SADA JA TREBAM DA DEFINISEM GRANU STATE-A ZA OVU KOMPONENTU, A TA GRANA TREBA DA
  // SKLADISTI TRENUTNO FORMIRANI NOVU PALETU

  // DAKLE TO TREBA DA BUDE NIZ U FORMATU:
  /*
      {
          id: string;
          paletteName: string;
          colors: { colorName: string; hexCode: string }[];
      }
  */

  // MISLIM DA SE PODACI MORAJU CUVATI U VISE GRANA STATE
  //   -- JEDNA ZA IME PALETE
  const [currentPaletteName, setCurrentPaletteName] = useState<string>('');
  //  -- DRUGA ZA TRENUTNO IZABRANE COLOR OBJEKTE
  //    ** I NAJBOLJE BI BILO DA TO BUDU REFERENCE INDEKSA ONOG OBJEKTA KOJI SE NALAZI U DATA ARRAY-U**

  const [indexesOfDataArray, setIndexesOfDataArray] = useState<number[]>([]);

  return (
    <View>
      {/* CISTO ZBOG DEBUGGINGA OVDE RENDER-UJEM VREDNOST
      I DA OVA VREDNOST SE USPESNO MENJA, ODNONO UVEK VIDIM NOVI NIZ
      JER IZ SAMOG SWITCH-A, SVAKOG OD NJIH, JA MENJAM OVAJ STATE */}
      <Text>{JSON.stringify(indexesOfDataArray, null, 2)}</Text>
      <FlatList
        // DAKLE ZADAO SAM DA DATA BUDE ONAJ ARRAY, U KOJIMA SU OBJEKTI SA {colorName, hexCode} CLANOVIMA
        data={data}
        keyExtractor={({ colorName }) => colorName}
        renderItem={({ item, index, separators }) => {
          // INDEX CE MI TAKODJE TREBATI I TO U HANDLERU
          const { hexCode, colorName } = item; // ZA SADA SAMO KORISTIM colorName
          // MOZDA U BUDUCNOSTI UPOTREBIM OVU BOJU, ALI NECU (MOZDA JE TO MOGLA BITI BOJA ZA SWITCH, KADA JE UPALJEN)

          return (
            // EVO RENDER-OVAO SAM SAMO ITEM SWITCH
            <ItemSwitch
              colorName={colorName}
              setIndexesOfDataArray={setIndexesOfDataArray}
              index={index}
            />
          );
          // I ZA SADA OSTAVLJAM SVE OVAKO, JER ZELIM DA COMMIT-UJEM I POSLE DODADAM JOS PAR OBJASNJENJA
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  something: {},
});

export default AddNewPaletteModal;

```

# :four: ZELIM SADA DA MODALU ZADAM I `TextInput` KOJI CE SLUZITI ZA DODAVANJE IMENA PLAETE, I DA DODAM SUBMIT TOUCHABLE, KOJI CE URADITI DA: SE USTVARI DODADA NOVA PALETA (`setStateFunc` KOJU SAM PROSLEDIO ON NAVIGATIONG IZ HOME-A), ALI ZELIS I KADA KORISNIK PRITISNE SUBMIT DA SE NAVIGATE-UJE BACK TO HOME, A TO MOZES URADITI TAK OSTO CES UPOTREBITI `navigation.goBack`, KAO STO SAM I REKAO

- `code components/AddNewPaletteModal.tsx`

```tsx
import React, { useState, FunctionComponent } from 'react';

import {
  View,
  Text,
  StyleSheet,
  //
  TextInput,
  FlatList,
  TouchableOpacity,
  // MORAO SAM KORISTITI SAFE AREA VIEW I ZADATI DONJI APDDING ZBOG ANDROIDOVA TRI DUGMETA
  SafeAreaView,
} from 'react-native';

import { ModalPropsI } from '../navigators/rootStackAndTypes';
import data, { modalDataArr } from '../modalData';
// import { ApiDataItemI, ApiDataType } from '../screens/ColorHome';
import ItemSwitch from './ItemSwitch';

const AddNewPaletteModal: FunctionComponent<ModalPropsI> = (props) => {
  const { route, navigation } = props;
  const { params } = route;
  const { setStateFunc } = params;

  const [currentPaletteName, setCurrentPaletteName] = useState<string>('');

  const [indexesOfDataArray, setIndexesOfDataArray] = useState<number[]>([]);

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        {/* <Text>{JSON.stringify(indexesOfDataArray, null, 2)}</Text> */}
        {/* EVO DEFINISEM TextInput SA SVOM LOGIKOM */}
        <TextInput
          style={styles.tekstIput}
          value={currentPaletteName}
          onChangeText={setCurrentPaletteName}
          placeholder="add a name to your new palette"
        />
        {/* ----------------------------------------- */}
        <FlatList
          style={styles.flat}
          data={data}
          keyExtractor={({ colorName }) => colorName}
          renderItem={({ item, index, separators }) => {
            const { hexCode, colorName } = item;

            return (
              <ItemSwitch
                colorName={colorName}
                setIndexesOfDataArray={setIndexesOfDataArray}
                index={index}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        {/* ZADAJEM I SUBMIT TOUCHABLE */}
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            const colors: modalDataArr = [];

            let counter = 0;

            for (let index of indexesOfDataArray) {
              colors[counter] = data[index];

              counter++;
            }

            setStateFunc((curr) => {
              let arr = curr.concat([]);

              arr.unshift({
                colors: colors,
                paletteName: currentPaletteName,
                id: `${Math.random()}-${currentPaletteName}`,
              });

              return arr;
            });

            navigation.goBack();
          }}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        {/* ----------------------------------------- */}
      </View>
    </SafeAreaView>
  );
};

// NEKI OD STILOVA

const styles = StyleSheet.create({
  separator: {
    borderWidth: 1,
    borderColor: 'blanchedalmond',
  },

  tekstIput: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 14,
  },
  safe: {
    paddingBottom: 260,
  },
  something: {},
  submit: {
    borderColor: 'crimson',
    borderWidth: 1,
    padding: 4,
    margin: 8,
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  submitText: {
    fontSize: 18,
  },
  flat: {
    borderWidth: 2,
    borderTopColor: 'olive',
    borderBottomColor: 'tomato',
  },
});

export default AddNewPaletteModal;

```

# ⚠️⚠️⚠️⚠️ ALI ZBOG JEDNE STVARI KOJU SAM URADIO, JA IMAM WARNING, A TICE SE PROSLEDJIVANJA FUNKCIJA U NAVIFATION SCREEN ⚠️⚠️⚠️⚠️

WARNING JE ISAO OD PRILIKE OVAKO:

***

> Non-serializable values were found in the navigation state, which can break usage such as persisting and restoring state. This might happen if you passed non-serializable values such as function, class instances etc. in params. If you need to use components with callbacks in your options, you can use 'navigation.setOptions' instead.

***

U SUSTINI OVO SE DOGODILO JER SAM PRILIKOM POZIVANJA navigation.navigate U HOME SCREEN-U (DA BI NAVIGATE-OVAO DO MODAL-A), PRILIKOM TOG PROCESA USTVARI PROSLEDIO SET STATE FUNKCIJU, KOJA JE FUNKCIJA HOME SCREEN-A

WARNING SE ZBOG TOGA DESIO

# DA RESIM OVAJ PROBLEM MOGAO SAM PRIMENITI DRUGI PRINCIP, KOJI BI SE SASTOJAO OD SLEDECEG

- SLANJE DATA-E, PRILIKOM NAVIGATING-A IZ MODALA U HOME SCREEN-A

- SETTING STATE-A, ON MOUNTING U HOME SCREEN-U (**USTVARI NE ON MOUNTING VEC KADA SE PROMENI JEDAN DEPENDANCY**)

TO CU I DA URADIM ALI CU MALO DA KORIGUJEM TYPE-OVE, TAK ODA CU TYPE-OVATI DA SE PRILIKOM NAVIGATING-A IZ MODALA U HOME, MORA PROSLEDITI DATA U POTREBNOM FORMAT-U

- `code navigators/rootStackAndTypes.ts`

```ts
import { modalDataArr } from '../modalData';

// ...
// ..

type setStateFunc = Dispatch<SetStateAction<ApiDataType>>; // OVO JE TYPE ZA SET STATE FUNKCIJU, KOJI VISE NECU KORISTITI

interface RouteHomeScreenStackI {
  // --------- OVO VISE NE ZELIM OVDE  ----------------
  // setStateFunc: setStateFunc;
}

// ...
// ...
// ...
// ...

export interface ModalRouteDataI {
  colors: modalDataArr;
  paletteName: string;
  id: string;
}

export type navigateToHome = Record<'Home', ModalRouteDataI>;
// === !== === !==
// === !== === !==
// ...  // OSTAL OSVE SE OVERRIDE-UJE OVIM VREDNOSTIMA TAK ODA NECU 

type ModalNavigation = StackNavigationProp<navigateToHome>;  // OVO CE NA KRAJU BITI navigation PROP

// DALJI CODE NE CU OSTAVLJATI OVDE (IZVOZI ZA PROPSE ZA MODAL SCREEN)


```

JOS MALO TYPING-A; TACNIJE TYPING ZA ROUTE ZA HOME SCREEN

- `code navigators/color-app-stack-navigator.ts`

```ts
// ...
import { ModalRouteDataI } from './rootStackAndTypes';
// ...
// ...
// ...

// OVAJ TYPE UBACUJEM OVDE

type homeRecordRouteToScreen = Record<homeScreenNameType, ModalRouteDataI>;

// I DALJE SE SA TIM TYPE-UJE route PROP, STO NECU POKAZIVATI

```

**SADA MOGU DA DEFINISEM DA SE DATA PROSLEDJUJE IZ MODALA**

- `code `

```tsx
import React, { useState, FunctionComponent } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { ModalPropsI } from '../navigators/rootStackAndTypes';
import data, { modalDataArr } from '../modalData';
import ItemSwitch from './ItemSwitch';

const AddNewPaletteModal: FunctionComponent<ModalPropsI> = (props) => {
  const { route, navigation } = props;
  const { params } = route;
  //const { setStateFunc} = params; // OVO VISE NE STIZE IZ PARAMS

  const [currentPaletteName, setCurrentPaletteName] = useState<string>('');

  const [indexesOfDataArray, setIndexesOfDataArray] = useState<number[]>([]);

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        {/* <Text>{JSON.stringify(indexesOfDataArray, null, 2)}</Text> */}
        {/* EVO DEFINISEM TextInput SA SVOM LOGIKOM */}
        <TextInput
          style={styles.tekstIput}
          value={currentPaletteName}
          onChangeText={setCurrentPaletteName}
          placeholder="add a name to your new palette"
        />
        {/* ----------------------------------------- */}
        <FlatList
          style={styles.flat}
          data={data}
          keyExtractor={({ colorName }) => colorName}
          renderItem={({ item, index, separators }) => {
            const { hexCode, colorName } = item;

            return (
              <ItemSwitch
                colorName={colorName}
                setIndexesOfDataArray={setIndexesOfDataArray}
                index={index}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            const colors: modalDataArr = [];

            let counter = 0;

            for (let index of indexesOfDataArray) {
              colors[counter] = data[index];

              counter++;
            }

            // OVO IZBACUJEM JER NEMA VISE OVE FUNKCIJE

            /* setStateFunc((curr) => {
              let arr = curr.concat([]);

              arr.unshift({
                colors: colors,
                paletteName: currentPaletteName,
                id: `${Math.random()}-${currentPaletteName}`,
              });

              return arr;
            }); */

            // E SADA NE KORISSTIM VISE goBack
            // navigation.goBack()

            // VEC KORISTIM navigate SA DATOM
            navigation.navigate('Home', {
              colors: colors,
              id: `${Math.random()}-${currentPaletteName}`,
              paletteName: currentPaletteName,
            });
            // I OVDE SAM ZAVRSIO POSAO, A SADA DA HANDLE-UJEM OVAJ
            // DATA U HOME SCREEN-U
          }}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderWidth: 1,
    borderColor: 'blanchedalmond',
  },

  tekstIput: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 14,
  },
  safe: {
    paddingBottom: 260,
  },
  something: {},
  submit: {
    borderColor: 'crimson',
    borderWidth: 1,
    padding: 4,
    margin: 8,
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  submitText: {
    fontSize: 18,
  },
  flat: {
    borderWidth: 2,
    borderTopColor: 'olive',
    borderBottomColor: 'tomato',
  },
});

export default AddNewPaletteModal;
```





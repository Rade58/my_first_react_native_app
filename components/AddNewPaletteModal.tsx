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

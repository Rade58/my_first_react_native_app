import React, {
  // UVESCU I useCallabck
  useCallback,
  //
  useState,
  FunctionComponent,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  // UVESCU Alert OBJEKAT
  Alert,
} from 'react-native';

import { ModalPropsI } from '../navigators/rootStackAndTypes';
import data, { modalDataArr } from '../modalData';
import ItemSwitch from './ItemSwitch';

const AddNewPaletteModal: FunctionComponent<ModalPropsI> = (props) => {
  const { route, navigation } = props;
  // const { params } = route;

  const [currentPaletteName, setCurrentPaletteName] = useState<string>('');

  const [indexesOfDataArray, setIndexesOfDataArray] = useState<number[]>([]);

  // EVO KAKAV SAM CALLBACK NAPRAVIO
  const handleSubmit = useCallback(() => {
    if (!currentPaletteName) {
      return Alert.alert('Please Enter a pallete name.');
    }

    if (indexesOfDataArray.length < 4) {
      return Alert.alert('Not enough colors, pick 4 or more.');
    }

    const colors: modalDataArr = [];

    let counter = 0;

    for (let index of indexesOfDataArray) {
      colors[counter] = data[index];

      counter++;
    }

    navigation.navigate('Home', {
      colors: colors,
      id: `${Math.random()}-${currentPaletteName}`,
      paletteName: currentPaletteName,
    });
  }, [currentPaletteName, indexesOfDataArray, navigation]);

  // KORISTICU GA (POZVACU GA) U OBIMU onPress HANDLERA
  // ILI USTVARI ON CE BITI onPress HANDLER

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <TextInput
          style={styles.tekstIput}
          value={currentPaletteName}
          onChangeText={setCurrentPaletteName}
          placeholder="add a name to your new palette"
        />
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
          // EVO POGLEDAJ
          onPress={handleSubmit}
          //
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

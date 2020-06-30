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
      <TouchableOpacity
        onPress={() => {
          setIsTurnedOn((curr) => !curr);
        }}
      >
        <Text>{colorName}</Text>
      </TouchableOpacity>
      {/* <Text>{isTurnedOn ? 'true' : 'false'}</Text> */}
      <Switch
        value={isTurnedOn}
        onValueChange={(bool) => {
          if (bool) {
            setIndexesOfDataArray((currIndexesArr) =>
              currIndexesArr.concat([index])
            );

            // setIsTurnedOn(false);
          }

          setIndexesOfDataArray((currIndexesArr) => {
            const indexOfMember = currIndexesArr.indexOf(index);

            return currIndexesArr
              .slice(0, indexOfMember)
              .concat(
                currIndexesArr.slice(indexOfMember + 1, currIndexesArr.length)
              );
          });

          // setIsTurnedOn(true);
        }}
        pointerEvents="none"
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

import React, { useState, FunctionComponent } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

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
      {/* NISAM SETT-OVAO  value  ZA SVITCH-EVE JER ZNAM DA JE PO DEFAULT-U false */}
      <Switch
        value={isTurnedOn}
        onValueChange={(bool) => {
          if (bool) {
            setIndexesOfDataArray((currIndexesArr) =>
              currIndexesArr.concat([index])
            );

            return setIsTurnedOn(false);
          }

          setIndexesOfDataArray((currIndexesArr) => {
            const indexOfMember = currIndexesArr.indexOf(index);

            return currIndexesArr
              .slice(0, indexOfMember)
              .concat(
                currIndexesArr.slice(indexOfMember + 1, currIndexesArr.length)
              );
          });

          setIsTurnedOn(true);
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

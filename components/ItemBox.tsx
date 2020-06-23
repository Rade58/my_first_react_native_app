import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemBox: FunctionComponent<{ itemName: string; boxColor: string }> = (
  props
) => {
  const { itemName, boxColor } = props;

  const textColor =
    parseInt(boxColor.replace('#', ''), 16) > 0xffffff / 1.1
      ? 'black'
      : 'white';

  return (
    <View style={[itemBoxStyles.boxStyles, { backgroundColor: boxColor }]}>
      {/* OVDE JE DAKLE BITAN   itemNAME   */}
      <Text style={[itemBoxStyles.textStyles, { color: textColor }]}>
        {itemName}
      </Text>
    </View>
  );
};

const itemBoxStyles = StyleSheet.create({
  textStyles: {
    color: 'crimson',
    marginLeft: 'auto',
    marginRight: 'auto',

    borderWidth: 2,
    borderColor: 'olive',
  },
  boxStyles: {
    borderColor: 'blanchedalmond',
    borderWidth: 2,
    margin: 8,
    textAlign: 'center',
    padding: 8,
  },
});

export default ItemBox;

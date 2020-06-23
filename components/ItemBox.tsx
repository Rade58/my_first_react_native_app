import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemBox: FunctionComponent<{ itemName: string }> = (props) => {
  const { itemName } = props;

  return (
    <View style={itemBoxStyles.boxStyles}>
      {/* OVDE JE DAKLE BITAN   itemNAME   */}
      <Text style={itemBoxStyles.textStyles}>{itemName}</Text>
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
  },
});

export default ItemBox;

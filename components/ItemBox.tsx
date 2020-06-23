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
  textStyles: { color: '#fff' },
  boxStyles: {
    borderColor: 'blanchedalmond',
    borderWidth: 2,
  },
});

export default ItemBox;

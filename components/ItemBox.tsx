import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemBox: FunctionComponent<{ colorName: string; hexCode: string }> = (
  props
) => {
  const { colorName, hexCode } = props;

  const textColor =
    parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white';

  return (
    <View style={[itemBoxStyles.boxStyles, { backgroundColor: hexCode }]}>
      {/* OVDE JE DAKLE BITAN   itemNAME   */}
      <Text style={[itemBoxStyles.textStyles, { color: textColor }]}>
        {colorName}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ItemBox;

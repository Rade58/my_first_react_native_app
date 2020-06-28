import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

const Box: FunctionComponent<{
  no: number;
  boxStyles: any;
  otherStyles: any;
  textStyles: any;
}> = (props) => {
  const { no, boxStyles, otherStyles, textStyles } = props;

  return (
    <View style={[boxStyles, otherStyles]}>
      <Text style={textStyles}>Element {no}</Text>
    </View>
  );
};

export default Box;

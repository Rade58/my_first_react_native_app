import React, { FunctionComponent } from 'react';

import { View, Text, SectionList, TouchableOpacity } from 'react-native';

// TYPE-OVI
import { HomeScreenProps } from '../navigators/color-app-stack-navigator';

const Home: FunctionComponent<HomeScreenProps> = ({ navigation, route }) => {
  const { params } = route;

  const { allColorData } = params;

  return (
    <View>
      <Text>Tekst</Text>
    </View>
  );
};

export default Home;

import React, { FunctionComponent } from 'react';

import { stackNavigatorColorPropTypes } from '../navigators/color-app-stack-navigator';

import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

interface RootStackParamList {
  User: {
    id: string;
    name: string;
  };
}

const ColorScreen: FunctionComponent<> = (props) => {
  const { navigation, route } = props;

  const { key, name, params } = route;

  const { colors, title } = params;

  return <></>;
};

export default ColorScreen;

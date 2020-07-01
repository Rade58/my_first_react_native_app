import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// === !== === !==
// === !== === !==
import { Dispatch, SetStateAction } from 'react';
import { ApiDataType } from '../screens/ColorHome';

import { modalDataArr } from '../modalData';

type setStateFunc = Dispatch<SetStateAction<ApiDataType>>; // OVO JE TYPE ZA SET STATE FUNKCIJU

interface RouteHomeScreenStackI {
  // --------- OVO VISE NE ZELIM OVDE  ----------------
  // setStateFunc: setStateFunc;
}
// === !== === !==
// === !== === !==

type RouteModalI = RouteHomeScreenStackI;

// SCREEN NAMES
type mainStackScreenNameType = 'Main';
type modalNameType = 'AddNewPalette';

// RECORDS
type mainStackRecordRouteToScreen = Record<
  mainStackScreenNameType,
  RouteHomeScreenStackI
>;
type modalRecordRouteToScreen = Record<modalNameType, RouteModalI>;

// PRAVLJENJE STACK-A
const RootStack = createStackNavigator<
  mainStackRecordRouteToScreen & modalRecordRouteToScreen
>();

// ROUTE TYPES
type routeOfMainStackScreen = RouteProp<
  mainStackRecordRouteToScreen,
  mainStackScreenNameType
>;

// === !== === !==
// === !== === !==
export interface ModalRouteDataI {
  colors: modalDataArr;
  paletteName: string;
  id: string;
}
export type navigateToHome = Record<'Home', ModalRouteDataI>;
// === !== === !==
// === !== === !==

type routeOfModal = RouteProp<modalRecordRouteToScreen, modalNameType>;

// navigation TYPES
// === !== === !== // === !== === !== // === !== === !== // === !== === !==
export type navigateToModal = Record<modalNameType, RouteHomeScreenStackI>;
// === !== === !== // === !== === !== // === !== === !== // === !== === !==
type MainStackScreenNavigationPropType = StackNavigationProp<navigateToModal>;
type ModalNavigation = StackNavigationProp<navigateToHome>;

// EKSPLICITNOG NAVIGATINGA NEMA IZ MODALA OZIM BACKSPACE NAZAD TO HOME
//

// STACK JE DEFAULT EXPORT
/**
 * @description ROOT STACK
 */
export default RootStack;

// TYPE-OVI ZA SCREEN-OVE

/**
 * @description HOME STACK SCREEN PROPSI
 */
export interface MainStackScreenPropsI {
  navigation: MainStackScreenNavigationPropType;
  route: routeOfMainStackScreen;
}

export interface ModalPropsI {
  navigation: ModalNavigation;
  route: routeOfModal;
}

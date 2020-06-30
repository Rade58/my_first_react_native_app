import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface RouteHomeScreenStackI {
  // nestoBezvezeZaSada: any;
}

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

type routeOfModal = RouteProp<modalRecordRouteToScreen, modalNameType>;

// navigation TYPES
export type navigateToModal = Record<modalNameType, any>;
type MainStackScreenNavigationPropType = StackNavigationProp<navigateToModal>;
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
  navigation: any;
  route: routeOfModal;
}

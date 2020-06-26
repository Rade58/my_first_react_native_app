//  MISLIM DA SAM SVE POGRESNO RAZUMEO I DA NISAM TREBAO KORISTITI Record

import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

export type screenNameType = 'SOLARIZED' | 'FRONTEND_MASTERS' | 'RAINBOW';

export type homeType = 'Home';

/**
 * @description OVDE TREBAS DA SE SETIS I KAZEZ, PA OZ HOME-A ZELIM DA NAVIGATE-UJEM DO COLOR-A I DA U SKLAD USA TIM I TYPE-UJES
 */
interface NavigatorStackHomeParamsI {
  // MOJA IDEJA JE DA NAPRAIM DAKLE DISTINGCIJU IZMEDJU NAVIGATINGA TO Home I OSTALIH KOMPONENTI

  title: screenNameType;
  colors: { colorName: string; hexCode: string }[];
}

// EVENTUALLY OVO BUKVALNO TYPE-UJE DA U COLOR THEME SCREEN-U IMAM TU POGLEDU TYPE ANOTAIONA SAMO MOGUCNOST DA
// NAVIGATE-UJEm U HOME SCREEN I OBRNUTO (DAKLE OVDE GOVORIM O TYPESCRIPT-U)
interface NavigatorSackColorParams {
  //  HOME SCREEN-U TREBA 4 BOJE OD SVAKE GRUPE DA BIH BILI WRAPPED U TouchableOpacity
  // TO CU UZETI U OBZIR KADA BUDEM OVO TYPE-OVAO
  fourColors: { title: screenNameType; colorHexes: string[] }[];
}

type recordOfColorScreensAndParams = Record<
  screenNameType,
  NavigatorStackColorParamsI
>;

type recordOfHomeScreensAndParams = Record<homeType, NavigatorSackHomeParams>;

export type stackNavigatorColorPropTypes = StackScreenProps<
  recordOfColorScreensAndParams,
  screenNameType
>;
export type stackNavigatorHomePropTypes = StackScreenProps<
  recordOfHomeScreensAndParams,
  homeType
>;

// PRAVIM I TYPE-UJE Stack
/**
 * @description OVDE SAM DAKLE NAPRAVIO DA IMAM DVE MOGUCNOSTI ZA Stack (ODNONO DVA MOGUCA Record-A SAM DEFINISAO)
 */
const Stack = createStackNavigator<
  recordOfHomeScreensAndParams | recordOfColorScreensAndParams
>();

export const { Navigator, Screen } = Stack;

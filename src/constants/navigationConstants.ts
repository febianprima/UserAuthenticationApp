import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import colors from './colors';

export const hiddenHeaderNavigationOptions: NativeStackNavigationOptions = {
  contentStyle: {
    backgroundColor: colors.darkGray,
  },
  headerShown: false,
} as const;

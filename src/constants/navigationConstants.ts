import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const hiddenHeaderNavigationOptions: NativeStackNavigationOptions = {
  contentStyle: {
    backgroundColor: '#3D3C3A',
  },
  headerShown: false,
} as const;

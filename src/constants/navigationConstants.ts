import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const contentStyle: NativeStackNavigationOptions['contentStyle'] = {
  flex: 1,
  paddingHorizontal: 24,
  paddingVertical: 32,
} as const;

export const headerNavigationStyle: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#3D3C3A',
  },
  headerTintColor: 'white',
  headerBackButtonDisplayMode: 'minimal',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
} as const;

export const navigationOptions: NativeStackNavigationOptions = {
  contentStyle,
  ...headerNavigationStyle,
} as const;

export const hiddenHeaderNavigationOptions: NativeStackNavigationOptions = {
  contentStyle: {
    backgroundColor: '#3D3C3A',
  },
  headerShown: false,
} as const;

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const contentStyle: NativeStackNavigationOptions['contentStyle'] = {
  flex: 1,
  paddingHorizontal: 24,
  paddingVertical: 32,
} as const;

const headerNavigationStyle: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'teal',
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

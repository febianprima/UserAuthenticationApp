import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import useIsAuthorized from '../hooks/useIsAuthorized';
import useIsUnauthorized from '../hooks/useIsUnauthorized';
import useIsCheckingAuthentication from '../hooks/useIsCheckingAuthentication';
import SplashScreen from '../screens/SplashScreen';

const AuthorizedStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
    },
  },
});

const UnauthorizedStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Splash: {
      if: useIsCheckingAuthentication,
      screen: SplashScreen,
      options: {
        headerShown: false,
      },
    },
    AuthorizedStack: {
      if: useIsAuthorized,
      screen: AuthorizedStack,
      options: {
        headerShown: false,
      },
    },
    UnauthorizedStack: {
      if: useIsUnauthorized,
      screen: UnauthorizedStack,
      options: {
        headerShown: false,
      },
    },
  },
});

const RootStackNavigation = createStaticNavigation(RootStack);

export default RootStackNavigation;

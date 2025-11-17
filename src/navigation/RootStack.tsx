import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationOptions } from '../constants/navigationConstants';
import useIsAuthorized from '../hooks/useIsAuthorized';
import useIsCheckingAuthentication from '../hooks/useIsCheckingAuthentication';
import useIsUnauthorized from '../hooks/useIsUnauthorized';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';

const AuthorizedStack =
  createNativeStackNavigator<NavigationStack.AuthorizedStackParamList>({
    screens: {
      Home: {
        screen: HomeScreen,
        options: navigationOptions,
      },
    },
  });

const UnauthorizedStack =
  createNativeStackNavigator<NavigationStack.UnauthorizedStackParamList>({
    screens: {
      Login: {
        screen: LoginScreen,
        options: navigationOptions,
      },
      Register: {
        screen: RegisterScreen,
        options: navigationOptions,
      },
    },
  });

const RootStack =
  createNativeStackNavigator<NavigationStack.RootStackParamList>({
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

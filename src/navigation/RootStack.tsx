import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogOut } from 'lucide-react-native';
import { useContext } from 'react';
import CustomHeader from '../components/CustomHeader';
import { hiddenHeaderNavigationOptions } from '../constants/navigationConstants';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
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
        options: {
          header: () => {
            const { logout } = useContext(AuthenticationContext);
            return (
              <CustomHeader
                title="Home"
                RightIcon={LogOut}
                onRightIconPress={logout}
              />
            );
          },
        },
      },
    },
  });

const UnauthorizedStack =
  createNativeStackNavigator<NavigationStack.UnauthorizedStackParamList>({
    screens: {
      Login: {
        screen: LoginScreen,
      },
      Register: {
        screen: RegisterScreen,
      },
    },
    screenOptions: hiddenHeaderNavigationOptions,
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

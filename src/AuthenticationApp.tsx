/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthenticationProvider from './contexts/AuthenticationContext';
import RootStackNavigation from './navigation/RootStack';

function AuthenticationApp() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <AuthenticationProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStackNavigation />
      </AuthenticationProvider>
    </SafeAreaProvider>
  );
}

export default AuthenticationApp;

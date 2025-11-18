import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthenticationProvider from './contexts/AuthenticationContext';
import RootStackNavigation from './navigation/RootStack';

function AuthenticationApp() {
  return (
    <SafeAreaProvider>
      <AuthenticationProvider>
        <StatusBar barStyle={'light-content'} />
        <RootStackNavigation />
      </AuthenticationProvider>
    </SafeAreaProvider>
  );
}

export default AuthenticationApp;

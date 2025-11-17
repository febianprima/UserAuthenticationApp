declare namespace NavigationStack {
  type AuthorizedStackParamList = {
    Home: undefined;
  };

  type UnauthorizedStackParamList = {
    Login: undefined;
    Register: undefined;
  };

  type RootStackParamList = {
    Splash: undefined;
    AuthorizedStack: undefined;
    UnauthorizedStack: undefined;
  };

  type AuthorizedStackNavigation =
    import('@react-navigation/native-stack').NativeStackNavigationProp<AuthorizedStackParamList>;
  type UnauthorizedStackNavigation =
    import('@react-navigation/native-stack').NativeStackNavigationProp<UnauthorizedStackParamList>;
}

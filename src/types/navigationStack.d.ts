declare namespace NavigationStack {
  type AuthorizedStackParamList = {
    Home: undefined;
  };

  type UnauthorizedStackParamList = {
    Login: undefined;
    Register: RegisterNavigationParams;
  };

  type RootStackParamList = {
    Splash: undefined;
    AuthorizedStack: undefined;
    UnauthorizedStack: undefined;
  };

  type RegisterNavigationParams = {
    emailAddress?: string;
  };

  type RegisterRouteProp = import('@react-navigation/native').RouteProp<{
    Register: RegisterNavigationParams;
  }>;

  type AuthorizedStackNavigation =
    import('@react-navigation/native-stack').NativeStackNavigationProp<AuthorizedStackParamList>;
  type UnauthorizedStackNavigation =
    import('@react-navigation/native-stack').NativeStackNavigationProp<UnauthorizedStackParamList>;
}

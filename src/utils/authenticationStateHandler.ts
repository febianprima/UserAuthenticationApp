import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAuthenticationState = async (
  authenticationState: `${Authentication.State}`,
) => {
  await AsyncStorage.setItem(
    'authenticationState',
    authenticationState ?? Authentication.State.Unauthorized,
  );
};

export const getAuthenticationState = async () => {
  const authenticationState = (await AsyncStorage.getItem(
    'authenticationState',
  )) as `${Authentication.State}`;
  return authenticationState;
};

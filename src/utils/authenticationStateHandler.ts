import AsyncStorage from '@react-native-async-storage/async-storage';

export const cacheUser = async (user: Authentication.User) => {
  const userString = JSON.stringify(user);
  await AsyncStorage.setItem('user', userString);
};

export const getCachedUser = async () => {
  const userString = await AsyncStorage.getItem('user');
  const user = JSON.parse(userString as string) as Authentication.User;
  return user;
};

export const clearCacheUser = async () => {
  await AsyncStorage.removeItem('user');
};

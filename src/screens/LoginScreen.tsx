import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const LoginScreen = () => {
  const { navigate } =
    useNavigation<NavigationStack.UnauthorizedStackNavigation>();

  const { login } = useContext(AuthenticationContext);

  const handleRegister = () => {
    navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleRegister} label="Register" type="secondary" />
        <Button onPress={login} label="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 16,
  },
  buttonsContainer: {
    gap: 16,
  },
});

export default LoginScreen;

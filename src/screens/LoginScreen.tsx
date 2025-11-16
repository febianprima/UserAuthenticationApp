import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const LoginScreen = () => {
  const { login } = useContext(AuthenticationContext);
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

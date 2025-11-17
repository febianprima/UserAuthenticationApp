import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const RegisterScreen = () => {
  const { register } = useContext(AuthenticationContext);
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button onPress={register} label="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 16,
  },
});

export default RegisterScreen;

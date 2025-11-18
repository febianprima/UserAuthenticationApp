import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import ContentContainer from '../components/ContentContainer';
import TextInputComponent from '../components/TextInput';
import colors from '../constants/colors';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const LoginScreen = () => {
  const { navigate } =
    useNavigation<NavigationStack.UnauthorizedStackNavigation>();

  const { login } = useContext(AuthenticationContext);

  const formRef = useRef<Authentication.LoginForm>({
    emailAddress: '',
    password: '',
  });

  const handleRegister = () => {
    navigate('Register');
  };

  const handleLogin = () => {
    login(formRef.current);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ContentContainer
        title="Welcome to Authentication App"
        description="Sign in to your account to continue"
      >
        <TextInputComponent
          formRef={formRef}
          label="Email"
          placeholder="Enter your email"
          type="alt"
          textContentType="emailAddress"
        />
        <TextInputComponent
          formRef={formRef}
          label="Password"
          placeholder="Enter your password"
          type="alt"
          textContentType="password"
        />
      </ContentContainer>
      <View style={styles.buttonsContainer}>
        <Text style={styles.attentiveText}>Don't have an account?</Text>
        <Button onPress={handleRegister} label="Register" type="secondaryAlt" />
        <Button onPress={handleLogin} label="Login" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  buttonsContainer: {
    gap: 16,
  },
  attentiveText: {
    color: colors.lightGrey,
    textAlign: 'center',
  },
});

export default LoginScreen;

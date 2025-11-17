import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import TextInputComponent from '../components/TextInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContentContainer from '../components/ContentContainer';

const LoginScreen = () => {
  const { navigate } =
    useNavigation<NavigationStack.UnauthorizedStackNavigation>();

  const { login } = useContext(AuthenticationContext);

  const handleRegister = () => {
    navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ContentContainer
        title="Welcome to Authentication App"
        description="Sign in to your account to continue"
      >
        <TextInputComponent
          label="Email"
          placeholder="Enter your email"
          type="alt"
          textContentType="emailAddress"
        />
        <TextInputComponent
          label="Password"
          placeholder="Enter your password"
          type="alt"
          textContentType="password"
        />
      </ContentContainer>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleRegister} label="Register" type="secondaryAlt" />
        <Button onPress={login} label="Login" />
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
});

export default LoginScreen;

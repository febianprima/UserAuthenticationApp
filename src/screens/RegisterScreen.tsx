import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import ContentContainer from '../components/ContentContainer';
import TextInputComponent from '../components/TextInput';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const RegisterScreen = () => {
  const { register } = useContext(AuthenticationContext);
  return (
    <SafeAreaView style={styles.container}>
      <ContentContainer
        title="Create an account"
        description="Register yourself to continue"
      >
        <TextInputComponent
          label="Name"
          placeholder="Enter your name"
          type="alt"
          textContentType="name"
        />
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
      <Button onPress={register} label="Register" />
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
});

export default RegisterScreen;

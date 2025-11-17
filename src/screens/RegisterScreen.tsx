import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';
import ContentContainer from '../components/ContentContainer';
import TextInputComponent from '../components/TextInput';
import colors from '../constants/colors';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const RegisterScreen = () => {
  const {goBack} = useNavigation<NavigationStack.UnauthorizedStackNavigation>();
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
      <View style={styles.buttonsContainer}>
        <Text style={styles.attentiveText}>Already have an account?</Text>
        <Button onPress={() => goBack()} label="Back to login" type="secondaryAlt" />
      <Button onPress={register} label="Register" />
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

export default RegisterScreen;

import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

import { UserX } from 'lucide-react-native';
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

  const [showModal, setShowModal] = useState(false);

  const handleRegister = () => {
    navigate('Register', { emailAddress: formRef.current.emailAddress });
  };

  const handleLogin = async () => {
    try {
      await login(formRef.current);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setShowModal(true);
      }
    }
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
      <Modal visible={showModal} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
            <UserX size={100} color={colors.error} style={styles.modalHero} />
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>Invalid credentials</Text>
              <Text style={styles.modalDescription}>
                User not found or password is incorrect
              </Text>
            </View>
            <Button onPress={() => setShowModal(false)} label="Close" type='secondary' />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentContainer: {
    backgroundColor: colors.lightGrey,
    padding: 24,
    borderRadius: 16,
    gap: 24,
  },
  modalTitleContainer: {
    gap: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkGray,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    color: colors.darkGray,
    textAlign: 'center',
  },
  modalButtonsContainer: {
    gap: 16,
  },
  modalHero: {
    alignSelf: 'center',
  },
});

export default LoginScreen;

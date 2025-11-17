import { SignatureIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SignatureIcon size={100} color={colors.lightBlue} />
      <Text style={styles.title}>It's good to see you again, A!</Text>
      <Text style={styles.subtitle}>I've sent a verification code to abc@mail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: colors.darkGrey,
    textAlign: 'center',
  },
});

export default HomeScreen;

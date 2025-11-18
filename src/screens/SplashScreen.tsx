import { Target } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Target size={100} color={colors.lightBlue} />
      <Text style={styles.title}>Authentication App</Text>
      <Text style={styles.description}>Checking authentication state...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkGray,
  },
  description: {
    fontSize: 16,
    color: colors.lightBlue,
  },
});

export default SplashScreen;

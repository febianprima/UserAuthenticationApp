import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';

interface IButtonProps {
  onPress: () => void;
  label: string;
  type?: 'primary' | 'secondary' | 'secondaryAlt';
}

const Button = (props: IButtonProps) => {
  const { onPress, label, type = 'primary' } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`${type}Container`]]}
    >
      <Text style={styles[`${type}Label`]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 16,
  },
  primaryContainer: {
    backgroundColor: colors.lightBlue,
  },
  secondaryContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.darkGray,
    opacity: 0.6,
  },
  secondaryAltContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.lightBlue,
  },
  primaryLabel: {
    color: colors.darkGray,
    fontWeight: 'bold',
  },
  secondaryLabel: {
    color: colors.darkGray,
    fontWeight: 'bold',
  },
  secondaryAltLabel: {
    color: colors.lightBlue,
    fontWeight: 'bold',
  },
});

export default Button;

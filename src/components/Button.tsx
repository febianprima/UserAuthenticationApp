import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IButtonProps {
  onPress: () => void;
  label: string;
  type?: 'primary' | 'secondary';
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
    backgroundColor: 'teal',
  },
  secondaryContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'teal',
    opacity: 0.6,
  },
  primaryLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  secondaryLabel: {
    color: 'teal',
    fontWeight: 'bold',
  },
});

export default Button;

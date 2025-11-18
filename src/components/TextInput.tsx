import React, { RefObject, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import colors from '../constants/colors';
import validateInput from '../utils/validateInput';
import PasswordInputRightIcon from './PasswordInputRightIcon';

interface ITextInputProps {
  formRef: RefObject<Record<string, string>>;
  label: string;
  placeholder: string;
  type: 'primary' | 'alt';
  textContentType: TextInputProps['textContentType'];
}

const TextInputComponent = (props: ITextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [validatorResult, setValidatorResult] = useState<string>('');

  const {
    formRef,
    label,
    placeholder,
    type = 'primary',
    textContentType,
  } = props;

  const textColor = type === 'primary' ? colors.black : colors.white;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const onChangeText = (text: string) => {
    const result = validateInput({ type: textContentType, value: text });
    setValidatorResult(result);

    if (textContentType) {
      formRef.current[textContentType] = text;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        defaultValue={formRef.current[textContentType!]}
        selectionColor={textColor}
        placeholderTextColor={textColor}
        cursorColor={textColor}
        textContentType={textContentType}
        secureTextEntry={textContentType === 'password' && !isPasswordVisible}
        autoCapitalize={'none'}
      />
      {textContentType === 'password' && (
        <Pressable style={styles.rightIcon} onPress={togglePasswordVisibility}>
          <PasswordInputRightIcon
            isPasswordVisible={isPasswordVisible}
            type={type}
          />
        </Pressable>
      )}
      {validatorResult && (
        <Text style={styles.errorText}>{validatorResult}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 12,
    fontSize: 16,
    fontWeight: '500',
    color: colors.lightGrey,
    paddingHorizontal: 8,
    backgroundColor: colors.darkGray,
    zIndex: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.white,
    padding: 20,
    borderRadius: 16,
    color: colors.white,
  },
  rightIcon: {
    position: 'absolute',
    top: 18,
    right: 16,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
    paddingLeft: 18,
  },
});

export default TextInputComponent;

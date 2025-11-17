import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

interface ITextInputProps {
  label: string;
  placeholder: string;
  type: 'primary' | 'alt';
  textContentType: TextInputProps['textContentType'];
}

const TextInputComponent = (props: ITextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { label, placeholder, type = 'primary', textContentType } = props;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const RightIcon = () => {
    if (isPasswordVisible) {
      return (
        <EyeOff size={20} color={type === 'primary' ? 'black' : 'white'} />
      );
    }

    return <Eye size={20} color={type === 'primary' ? 'black' : 'white'} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        // onChangeText={onChangeText}
        // value={value}
        selectionColor={type === 'primary' ? 'black' : 'white'}
        placeholderTextColor={type === 'primary' ? 'black' : 'white'}
        cursorColor={type === 'primary' ? 'black' : 'white'}
        textContentType={textContentType}
        secureTextEntry={textContentType === 'password' && !isPasswordVisible}
      />
      {textContentType === 'password' && (
        <Pressable style={styles.rightIcon} onPress={togglePasswordVisibility}>
          <RightIcon />
        </Pressable>
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
    color: '#DADBDD',
    paddingHorizontal: 8,
    backgroundColor: '#3D3C3A',
    zIndex: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    borderRadius: 16,
    color: 'white',
  },
  rightIcon: {
    position: 'absolute',
    top: 18,
    right: 16,
  },
});

export default TextInputComponent;

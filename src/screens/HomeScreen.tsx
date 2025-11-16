import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const HomeScreen = () => {
  const { logout } = useContext(AuthenticationContext);
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

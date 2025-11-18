import React, { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import CustomHeader from './CustomHeader';
import { LogOut } from 'lucide-react-native';

const HomeHeader = () => {
  const { logout } = useContext(AuthenticationContext);
  return (
    <CustomHeader title="Home" RightIcon={LogOut} onRightIconPress={logout} />
  );
};

export default HomeHeader;

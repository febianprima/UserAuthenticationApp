import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useIsCheckingAuthentication = () => {
  const { hasFinishChecked } = useContext(AuthenticationContext);

  return !hasFinishChecked;
};

export default useIsCheckingAuthentication;

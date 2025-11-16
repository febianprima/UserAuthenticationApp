import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  getAuthenticationState,
  setAuthenticationState,
} from '../utils/authenticationStateHandler';

export const AuthenticationContext = createContext({
  isAuthorized: false,
  hasFinishChecked: false,
  login: () => {},
  logout: () => {},
});

const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [hasFinishChecked, setHasFinishChecked] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = async () => {
    setIsAuthorized(true);
    setAuthenticationState('authorized');
  };

  const logout = async () => {
    setIsAuthorized(false);
    setAuthenticationState('unauthorized');
  };

  const hasAuthorizedChecker = useCallback(async () => {
    const isPreviouslyAuthorized = await getAuthenticationState();

    setHasFinishChecked(true);
    setIsAuthorized(isPreviouslyAuthorized === 'authorized' || isAuthorized);
  }, [isAuthorized]);

  useEffect(() => {
    hasAuthorizedChecker();
  }, [hasAuthorizedChecker]);

  const authenticationValue = {
    isAuthorized,
    hasFinishChecked,
    login,
    logout,
  };

  return (
    <AuthenticationContext.Provider value={authenticationValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;

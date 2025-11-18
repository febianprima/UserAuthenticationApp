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
import getUserData from '../utils/getUserData';

export const AuthenticationContext = createContext<{
  isAuthorized: boolean;
  hasFinishChecked: boolean;
  login: (formValue: Authentication.LoginForm) => void;
  logout: () => void;
  register: (formValue: Authentication.RegisterForm) => void;
  user: Omit<Authentication.User, 'password'> | null;
}>({
  isAuthorized: false,
  hasFinishChecked: false,
  login: () => {},
  logout: () => {},
  register: () => {},
  user: null,
});

const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [hasFinishChecked, setHasFinishChecked] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState<Omit<
    Authentication.User,
    'password'
  > | null>(null);

  const login = async (formValue: Authentication.LoginForm) => {
    const { emailAddress } = formValue;

    const userData = getUserData(emailAddress);

    if (!userData) {
      return;
    }

    setUser({
      name: userData.name,
      emailAddress: userData.emailAddress,
    });

    setIsAuthorized(true);
    setAuthenticationState('authorized');
  };

  const register = (formValue: Authentication.RegisterForm) => {
    const { name, emailAddress } = formValue;

    setUser({
      name,
      emailAddress,
    });

    setIsAuthorized(true);
    setAuthenticationState('authorized');
  };

  const logout = () => {
    setUser(null);
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
    register,
    user,
  };

  return (
    <AuthenticationContext.Provider value={authenticationValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;

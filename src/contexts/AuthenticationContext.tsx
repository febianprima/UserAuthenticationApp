import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import users from '../constants/users.json';
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

  const usersRef = useRef<Authentication.User[]>(users);

  const login = async (formValue: Authentication.LoginForm) => {
    const { emailAddress } = formValue;

    const userData = getUserData(emailAddress, usersRef.current);

    if (!userData) {
      throw new Error();
    }

    setUser({
      name: userData.name,
      emailAddress: userData.emailAddress,
    });

    setIsAuthorized(true);
    setAuthenticationState('authorized');
  };

  const register = (formValue: Authentication.RegisterForm) => {
    const { name, emailAddress, password } = formValue;

    setUser({
      name,
      emailAddress,
    });

    usersRef.current.push({
      name,
      emailAddress,
      password,
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

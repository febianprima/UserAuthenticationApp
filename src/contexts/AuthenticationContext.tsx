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
  getCachedUser,
  cacheUser,
  clearCacheUser,
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
    cacheUser(userData);
  };

  const register = (formValue: Authentication.RegisterForm) => {
    const { name, emailAddress } = formValue;

    setUser({
      name,
      emailAddress,
    });

    usersRef.current.push(formValue);

    setIsAuthorized(true);
    cacheUser(formValue);
  };

  const logout = () => {
    setUser(null);
    setIsAuthorized(false);
    clearCacheUser();
  };

  const hasAuthorizedChecker = useCallback(async () => {
    const cachedUser = await getCachedUser();

    setIsAuthorized(cachedUser !== null || isAuthorized);

    if (cachedUser) {
      setUser(cachedUser);
      usersRef.current.push(cachedUser);
    }

    setHasFinishChecked(true);
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

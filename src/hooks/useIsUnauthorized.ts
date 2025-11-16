import { useContext } from 'react';

import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useIsUnauthorized = () => {
  const { isAuthorized } = useContext(AuthenticationContext);

  return !isAuthorized;
};

export default useIsUnauthorized;

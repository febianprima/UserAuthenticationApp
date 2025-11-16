import { useContext } from 'react';

import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useIsAuthorized = () => {
  const { isAuthorized } = useContext(AuthenticationContext);

  return isAuthorized;
};

export default useIsAuthorized;

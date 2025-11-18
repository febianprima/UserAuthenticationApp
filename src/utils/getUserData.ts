import users from '../constants/users.json';

const getUserData = (emailAddress: string): Authentication.User | undefined => {
  const user = users.find(
    (item: Authentication.User) => item.emailAddress === emailAddress,
  );

  return user;
};

export default getUserData;

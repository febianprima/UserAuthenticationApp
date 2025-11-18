const getUserData = (
  emailAddress: string,
  users: Authentication.User[],
): Authentication.User | undefined => {
  const user = users.find(
    (item: Authentication.User) => item.emailAddress === emailAddress,
  );

  return user;
};

export default getUserData;

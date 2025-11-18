const getUserData = (
  emailAddress: string,
  users: Authentication.User[],
): Authentication.User | undefined => {
  const normalizedEmailAddress = emailAddress.toLowerCase();
  const user = users.find(
    (item: Authentication.User) => item.emailAddress === normalizedEmailAddress,
  );

  return user;
};

export default getUserData;

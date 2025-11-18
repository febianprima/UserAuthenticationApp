declare namespace Authentication {
  type LoginForm = {
    emailAddress: string;
    password: string;
  };

  type RegisterForm = {
    name: string;
    emailAddress: string;
    password: string;
  };

  type User = {
    name: string;
    emailAddress: string;
    password: string;
  };
}

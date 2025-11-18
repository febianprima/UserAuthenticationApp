import { TextInputProps } from 'react-native';

interface IInputValidators {
  type: TextInputProps['textContentType'];
  value: string;
}

type InputValidatorResult =
  | 'valid'
  | 'email_format_invalid'
  | 'password_format_invalid'
  | 'password_length_invalid'
  | 'empty';

const inputValidatorResults: Record<InputValidatorResult, string> = {
  valid: '',
  email_format_invalid: 'Email format is invalid',
  password_format_invalid:
    'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
  password_length_invalid: 'Password must be at least 6 characters long',
  empty: 'This field is required',
};

const validateInput = (props: IInputValidators) => {
  const { type, value } = props;

  let result: InputValidatorResult;
  switch (type) {
    case 'emailAddress':
      result = emailValidator(value);
      break;
    case 'password':
      result = passwordValidator(value);
      break;
    default:
      result = value.length > 0 ? 'valid' : 'empty';
  }

  return inputValidatorResults[result];
};

const emailValidator = (value: string) => {
  if (!value) return 'empty';

  const isValid = value.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/);
  return isValid ? 'valid' : 'email_format_invalid';
};

const passwordValidator = (value: string) => {
  if (!value) return 'empty';

  if (value.length < 6) return 'password_length_invalid';

  const isValid = value.match(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  );

  if (!isValid) return 'password_format_invalid';

  return 'valid';
};

export default validateInput;

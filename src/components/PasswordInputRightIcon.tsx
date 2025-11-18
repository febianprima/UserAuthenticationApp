import { Eye, EyeOff } from 'lucide-react-native';
import colors from '../constants/colors';

interface IPasswordInputRightIconProps {
  isPasswordVisible: boolean;
  type: 'primary' | 'alt';
}

const PasswordInputRightIcon = (props: IPasswordInputRightIconProps) => {
  const { isPasswordVisible, type = 'primary' } = props;
  const textColor = type === 'primary' ? colors.black : colors.white;

  if (isPasswordVisible) {
    return <EyeOff size={20} color={textColor} />;
  }

  return <Eye size={20} color={textColor} />;
};

export default PasswordInputRightIcon;

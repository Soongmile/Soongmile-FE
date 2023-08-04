import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import { ButtonProps } from './SquareBtn';

const SignoutBtn = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default SignoutBtn;

const ButtonWrapper = styled.button<ButtonProps>`
  height: 40px;
  padding: 12px 16px;
  border-radius: 100px;
  border: 1px solid ${theme.colors.gray2};

  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  font-weight: ${theme.fontStyles.Text_S.fontWeight};
  color: ${theme.colors.primary};
  cursor: pointer;

  background-color: ${theme.colors.primary_tag};
`;

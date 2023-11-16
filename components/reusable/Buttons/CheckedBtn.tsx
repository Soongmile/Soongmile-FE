import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import { ButtonProps } from './SquareBtn';

const CheckedBtn = ({ onClick, able = true, children, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} able={able} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default CheckedBtn;

const ButtonWrapper = styled.button<ButtonProps>`
  height: 56px;
  padding: 18px 20px;
  border-radius: 100px;
  border: none;

  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: white;
  cursor: ${({ able }) => (able ? 'pointer' : 'not-allowed')};

  background-color: ${({ able }) => (able ? theme.colors.primary : theme.colors.primary_disabled)};
`;

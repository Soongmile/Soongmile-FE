import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import { ButtonProps } from './SquareBtn';

const CheckedBtn = ({ onClick, disabled = false, children, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled} {...props}>
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
  cursor: pointer;

  background-color: ${theme.colors.primary};

  &:disabled {
    background-color: ${theme.colors.primary_disabled};
  }
`;

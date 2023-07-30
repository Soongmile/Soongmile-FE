import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import { ButtonProps } from './UploadBtn';

export const CheckedBtn: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
  }) => {
    return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>중복확인</ButtonWrapper>
    )
}

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
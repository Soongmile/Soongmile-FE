import { styled } from 'styled-components';
import theme from '../../../styles/theme';

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const UploadBtn = ({ onClick, disabled = false }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      업로드
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<ButtonProps>`
  height: 56px;
  padding: 19px 32px;
  border-radius: 8px;
  border: none;

  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: white;
  cursor: pointer;

  background-color: ${theme.colors.primary};

  &:disabled {
    background-color: ${theme.colors.primary_disabled};
  }

  &:hover {
    background-color: ${theme.colors.hovered};
  }
`;

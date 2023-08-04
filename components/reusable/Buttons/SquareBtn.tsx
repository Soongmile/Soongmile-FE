import { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled } from 'styled-components';
import theme from '../../../styles/theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  able?: boolean;
  children: ReactNode;
}

const SquareBtn = ({ onClick, able = true, children, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} able={able} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default SquareBtn;

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

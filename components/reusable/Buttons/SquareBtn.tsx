import { ReactNode } from 'react';
import { styled } from 'styled-components';
import theme from '../../../styles/theme';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => {};
  disabled?: boolean;
  children: ReactNode;
}

const UploadBtn = ({ onClick, disabled = false, children }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default UploadBtn;

const ButtonWrapper = styled.button<ButtonProps>`
  height: 56px;
  padding: 19px 32px;
  border-radius: 8px;
  border: none;

  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: white;
  cursor: pointer;

  background-color: ${(props) =>
    props.able ? theme.colors.primary : theme.colors.primary_disabled};

  &:hover {
    background-color: ${(props) => (props.able ? theme.colors.hovered : '')};
  }
`;

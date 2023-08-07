import styled from 'styled-components';
import theme from '@/styles/theme';
import { ButtonProps } from './SquareBtn';

const ToggleBtn = ({ able = true, children, onClick, ...props }: ButtonProps, name: string) => {
  return (
    <ButtonWrapper able={able} onClick={onClick} name={name} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default ToggleBtn;

const ButtonWrapper = styled.button<ButtonProps>`
  height: 24px;
  padding: 5px 12px;
  border-radius: 8px;
  border: none;

  font-size: ${theme.fontStyles.Caption.fontSize}px;
  font-weight: ${theme.fontStyles.Caption.fontWeight};

  background-color: ${(props) => (props.able ? theme.colors.black_tag : theme.colors.primary_tag)};
  color: ${(props) => (props.able ? theme.colors.gray3 : theme.colors.primary)};
  cursor: pointer;
`;

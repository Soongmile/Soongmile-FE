import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import { ButtonProps } from './SquareBtn';
import PencilIcon from '../../../assets/icons/Pencil.svg';

const QuestionBtn = ({ onClick, children }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <IconWrapper>
        <PencilIcon alt="연필" width="24" height="24" />
      </IconWrapper>
      {children}
    </ButtonWrapper>
  );
};

export default QuestionBtn;

const ButtonWrapper = styled.button<ButtonProps>`
  height: 56px;
  padding: 16px 16px;
  border-radius: 100px;
  border: none;

  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: white;
  cursor: pointer;

  background-color: ${theme.colors.primary};

  &:hover {
    background-color: ${theme.colors.hovered};
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

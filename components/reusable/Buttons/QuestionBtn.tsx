import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import { ButtonProps } from './UploadBtn';
import PencilIcon from '../../../assets/icons/Pencil.svg';

export const QuestionBtn: React.FC<ButtonProps> = ({ onClick }) => {
    return (
    <>
    <ButtonWrapper onClick={onClick}>
        <IconWrapper>
            <PencilIcon alt="연필" width="24" height="24"/>
        </IconWrapper>
        질문하기
    </ButtonWrapper>
    </>
    )
}

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
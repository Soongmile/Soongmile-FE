import Spacing from '@/components/reusable/Spacing';
import theme from '@/styles/theme';
import styled from 'styled-components';

interface QuestionTitleProps {
  titleName: string;
  isSVG?: boolean;
}

const QuestionTitle = ({ titleName, isSVG = true }: QuestionTitleProps) => {
  return (
    <TitleTitleWrap>
      <TitleTitle>{titleName}</TitleTitle>
      {isSVG && (
        <>
          <Spacing size={4} direction="horizontal" />
          <TitleEllipse />
        </>
      )}
    </TitleTitleWrap>
  );
};

export default QuestionTitle;

const TitleTitleWrap = styled.div`
  display: flex;
`;

const TitleTitle = styled.div`
  font-size: ${theme.fontStyles.Text_L.fontSize};
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
`;

const TitleEllipse = styled.div`
  width: 5px;
  height: 5px;
  background-image: url('img/ellipse.svg');
`;

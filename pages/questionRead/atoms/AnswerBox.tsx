import Spacing from '@/components/reusable/Spacing';
import theme from '@/styles/theme';
import dynamic from 'next/dynamic';
import dateConvertor from '@/utils/dateConverter';
import styled from 'styled-components';

interface AnswerBoxProps {
  // 추후 데이터 넘어오는 방식에 따라서 변경 예정
  userName: string;
  content: string;
  postTime: string;
  likes: number;
}

const Viewer = dynamic(() => import('../../../components/reusable/MarkDown/MarkdownViewer'), {
  ssr: false,
});

const AnswerBox = ({ userName, content, postTime }: AnswerBoxProps) => {
  return (
    <StyledAnswerBox>
      <TitleWrap>
        <Title>
          <span className="title-username">{`A. ${userName}`}</span>
          <span className="title-answer">님의 답변</span>
        </Title>
        <Declaration>신고</Declaration>
      </TitleWrap>
      <Spacing size={24} direction="vertical" />
      <AnswerContent>
        <Viewer content={content} />
      </AnswerContent>
      <Spacing size={24} direction="vertical" />
      <Date>{dateConvertor(postTime)}</Date>
    </StyledAnswerBox>
  );
};

export default AnswerBox;

const StyledAnswerBox = styled.div`
  width: 944px;
  padding: 32px;
  border-radius: 16px;
  border: ${`1px solid ${theme.colors.gray2}`};
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Title_S.fontWeight};

  & > .title-username {
    color: ${theme.colors.alert};
  }

  & > .title-answer {
    color: ${theme.colors.black};
  }
`;

const Declaration = styled.div`
  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: ${theme.colors.gray2};
`;

const AnswerContent = styled.div`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  color: ${theme.colors.black};
`;

const Date = styled.div`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  color: ${theme.colors.gray2};
  align-self: self-end;
`;

import Spacing from '@/components/reusable/Spacing';
import Tag from '@/components/reusable/Tag';
import theme from '@/styles/theme';
import styled from 'styled-components';

const Question = () => {
  return (
    <StyledQuestion>
      <ContentWrap>
        <TagWrap>
          <Tag color="color" size="small">
            <p>학교 생활</p>
          </Tag>
          <Spacing direction="horizontal" size={16} />
          <Tag color="gray" size="small">
            <p>공부법</p>
          </Tag>
          <Spacing direction="horizontal" size={16} />
          <Tag color="gray" size="small">
            <p>경영학</p>
          </Tag>
        </TagWrap>
        <Spacing direction="vertical" size={8} />
        <QuestionContentWrap>
          <TitleWrap>
            <Title>{`Q. ${'경영학 인강이나 공부 방법'}`}</Title>
            <Declaration>신고</Declaration>
          </TitleWrap>
          <Spacing direction="vertical" size={32} />
          <QuestionContent>
            경영학을 심도깊게 기초부터 배우고 싶은데요!
            <br />
            강의, 퀄리티, 내용, 교수진이 괜찮은 인강 사이트 & 공부 방법이 궁금합니다!
            <br />
            공부하기 좋은 서적도 추천해주시면 감사하겠습니다
          </QuestionContent>
          <Spacing direction="vertical" size={32} />
          <InfoContainer>
            <Info>슝슝이</Info>
            <InfoWrap>
              <Info>4시간 전</Info>
              <Spacing direction="horizontal" size={16} />
              <Info>{`조회수 ${100}`}</Info>
            </InfoWrap>
          </InfoContainer>
        </QuestionContentWrap>
      </ContentWrap>
    </StyledQuestion>
  );
};

export default Question;

const StyledQuestion = styled.section`
  width: 100%;
  background-color: ${theme.colors.white};
  height: fit-content;
  padding: 40px 0 72px 0;
`;

const ContentWrap = styled.div`
  width: 944px;
  margin: 0 auto;
`;

const TagWrap = styled.div`
  width: 100%;
  display: flex;
`;

const QuestionContentWrap = styled.div`
  width: 100%;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Title_S.fontWeight};
  color: ${theme.colors.primary};
`;

const Declaration = styled.div`
  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: ${theme.colors.gray2};
`;

const QuestionContent = styled.div`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  color: ${theme.colors.black};
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoWrap = styled.div`
  display: flex;
`;

const Info = styled.div`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  color: ${theme.colors.gray2};
`;

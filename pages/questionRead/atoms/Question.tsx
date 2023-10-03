import Spacing from '@/components/reusable/Spacing';
import Tag from '@/components/reusable/Tag';
import theme from '@/styles/theme';
import { GetQuestionResponse } from '@/types/question.type';
import fieldConverter from '@/utils/fieldConverter';
import dateConvertor from '@/utils/dateConverter';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Viewer = dynamic(() => import('../../../components/reusable/MarkDown/MarkdownViewer'), {
  ssr: false,
});

interface QuestionProps {
  data?: GetQuestionResponse;
}

const Question = ({ data }: QuestionProps) => {
  return (
    <StyledQuestion>
      {data ? (
        <ContentWrap>
          <TagWrap>
            {data.field?.map((item) => (
              <>
                <Tag color="color" size="small">
                  <p>{fieldConverter(item)}</p>
                </Tag>
                <Spacing direction="horizontal" size={16} />
              </>
            ))}
            {data.tag?.map((item, index) =>
              index < data.tag.length - 1 ? (
                <>
                  <Tag color="gray" size="small">
                    <p>{item}</p>
                  </Tag>
                  <Spacing direction="horizontal" size={16} />
                </>
              ) : (
                <Tag color="gray" size="small">
                  <p>{item}</p>
                </Tag>
              ),
            )}
          </TagWrap>
          <Spacing direction="vertical" size={8} />
          <QuestionContentWrap>
            <TitleWrap>
              <Title>{`Q. ${data.title}`}</Title>
              <Declaration>신고</Declaration>
            </TitleWrap>
            <Spacing direction="vertical" size={32} />
            <QuestionContent>{data.content && <Viewer content={data.content} />}</QuestionContent>
            <Spacing direction="vertical" size={32} />
            <InfoContainer>
              <Info>{data.memberName}</Info>
              <InfoWrap>
                {/* 수정 필요 */}
                <Info>{dateConvertor(data.postTime)}</Info>
                <Spacing direction="horizontal" size={16} />
                <Info>{`조회수 ${data.hits}`}</Info>
              </InfoWrap>
            </InfoContainer>
          </QuestionContentWrap>
        </ContentWrap>
      ) : null}
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

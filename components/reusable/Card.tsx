import styled from 'styled-components';
import colors from '@/styles/colors';
import Tag from './Tag';
import Spacing from './Spacing';

const Card = () => {
  return (
    <StyledCard>
      <Tag variant="color" content="직무" />
      <Spacing direction="vertical" size={16} />
      <Title>제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다</Title>
      <Spacing direction="vertical" size={16} />
      <ContentText>
        내용 미리보기 최대 3줄 (약 40자) 내용 미리보기 최대 3줄 (약 40자) 내용 미리보기 최대 3줄 (약
        40자) 내용 미리보기 내용 미리보기 최대 3줄 (약 40자) 내용 미리보기 최대 3줄 (약 40자) 내용
        미리보기 최대 3줄 (약 40자) 내용 미리보기
      </ContentText>
      <Spacing direction="vertical" size={16} />
      <StackTagsWrap>
        <Tag variant="gray" content="스택" />
        <Spacing direction="horizontal" size={8} />
        <Tag variant="gray" content="스택" />
        <Spacing direction="horizontal" size={8} />
        <Tag variant="gray" content="스택" />
      </StackTagsWrap>
      <Spacing direction="vertical" size={16} />
      <InfoTextWrap>
        <InfoText>{`${35}분전`}</InfoText>
        <InfoTwoTextWrap>
          <InfoText>{`조회수 ${100}`}</InfoText>
          <Spacing direction="horizontal" size={16} />
          <InfoText>{`답변 ${3}`}</InfoText>
        </InfoTwoTextWrap>
      </InfoTextWrap>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 280px;
  height: 240px;
  border-radius: 8px;
  border: 1px solid var(--gray-1, #f2f4f6);
  background: var(--white, #fff);
  padding: 21px 32px 20px 32px;
`;

const ContentText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  height: 51px;
  color: ${theme.colors.gray3};
`;

const StackTagsWrap = styled.div`
  display: flex;
  width: max-content;
  flex-direction: row;
`;

const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
`;

const InfoTextWrap = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoText = styled.span`
  font-size: ${theme.fontStyles.Caption.fontSize}px;
  font-weight: ${theme.fontStyles.Caption.fontWeight};
`;

const InfoTwoTextWrap = styled(InfoTextWrap)`
  width: fit-content;
  justify-content: start;
`;

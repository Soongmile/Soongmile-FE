import SquareBtn from '@/components/reusable/Buttons/SquareBtn';
import TextInput from '@/components/reusable/Inputs/TextInput';
import Spacing from '@/components/reusable/Spacing';
import theme from '@/styles/theme';
import styled from 'styled-components';

const MyAnswer = () => {
  return (
    <MyAnswerContainer>
      <MyAnswerWrap>
        <Title>나의 답변</Title>
        <Spacing size={32} direction="vertical" />
        <section>
          <GuideTitleWrap>
            <GuideTitleImg />
            <Spacing size={8} direction="horizontal" />
            <GuideTitle>질문 가이드</GuideTitle>
          </GuideTitleWrap>
          <Spacing size={16} direction="vertical" />
          <Guide>
            <GuideP>구체적인 행동을 조언해주면 좋아요.</GuideP>
            <GuideP>질문자에 대한 섣부른 판단이나 평가는 지양해요.</GuideP>
          </Guide>
        </section>
        <Spacing size={32} direction="vertical" />
        <TextInput
          placeholder="답변 작성 시 답변 가이드를 지켜주세요."
          width="944px"
          height="240px"
        />
        <Spacing size={32} direction="vertical" />
        <AlignedSquareBtn>답변 게시</AlignedSquareBtn>
      </MyAnswerWrap>
    </MyAnswerContainer>
  );
};

export default MyAnswer;

const MyAnswerContainer = styled.section`
  width: 100%;
  padding: 72px 0 72px 0;
`;

const MyAnswerWrap = styled.div`
  width: 944px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Title_S.fontWeight};
  color: ${theme.colors.black};
`;

const GuideTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GuideTitleImg = styled.div`
  width: 24px;
  height: 24px;

  background-image: url('/img/developer_guide.svg');
`;

const GuideTitle = styled.div`
  color: ${theme.colors.primary};
  font-size: 18px;
  font-weight: 600;
`;

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  width: 944px;
  height: 78px;
  border-radius: 16px;
  background-color: ${theme.colors.secondary};
  padding: 18px 32px;
  justify-content: space-between;
`;

const GuideP = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  font-size: ${theme.fontStyles.Text_S.fontWeight};
`;

const AlignedSquareBtn = styled(SquareBtn)`
  align-self: self-end;
`;

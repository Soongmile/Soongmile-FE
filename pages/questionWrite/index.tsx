import Spacing from '@/components/reusable/Spacing';
import TextInput from '@/components/reusable/Inputs/TextInput';
import theme from '@/styles/theme';
import type { NextPage } from 'next';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import SquareBtn from '@/components/reusable/Buttons/SquareBtn';
import QuestionTitle from './atoms/QuestionTitle';
import FieldSelector from './atoms/FieldSelector';
import MarkdownEditorSkeleton from './atoms/MarkdownEditorSkeleton';
import StackSearch from './atoms/StackSearch';

const MarkdownEditor = dynamic(() => import('./atoms/MarkdownEditor'), {
  ssr: false,
  loading: () => {
    return <MarkdownEditorSkeleton />;
  },
});

const QuestionWrite: NextPage = () => {
  return (
    <Wrap>
      <Spacing size={68} direction="vertical" />
      <Title>질문하기</Title>
      <Spacing size={32} direction="vertical" />
      <section>
        <GuideTitleWrap>
          <GuideTitleImg />
          <Spacing size={8} direction="horizontal" />
          <GuideTitle>질문 가이드</GuideTitle>
        </GuideTitleWrap>
        <Spacing size={16} direction="vertical" />
        <Guide>
          <GuideP>무엇에 대해 궁금한 지 구체적이고 명확하게 질문을 해요.</GuideP>
          <GuideP>문제를 해결하기 위해 시도한 것이 있다면 같이 적어요.</GuideP>
          <GuideP>검색해보고 지나치게 중복되는 정보는 묻지 않도록 해요.</GuideP>
        </Guide>
      </section>
      <section>
        <Spacing size={32} direction="vertical" />
        <QuestionTitle titleName="제목" />
        <Spacing size={16} direction="vertical" />
        <Info>제목을 지을 때는 구체적이고 내용을 포괄할 수 있도록 지어요.</Info>
        <Spacing size={10} direction="vertical" />
        <TextInput
          placeholder="예시) 피그마 공부 방법을 알 수 있을까요?"
          width="640px"
          height="56px"
        />
      </section>
      <section>
        <Spacing size={32} direction="vertical" />
        <QuestionTitle titleName="본문" />
        <Spacing size={16} direction="vertical" />
        <Info>제목에서 적은 문제를 구체적으로 설명해주세요. 적어도 30자는 넘어야 해요!</Info>
        <Spacing size={10} direction="vertical" />
        <ContentTip>Tip) 내가 처한 상황을 적으면 더 도움되는 답변을 얻을 수 있어요.</ContentTip>
        <Spacing size={16} direction="vertical" />
        <MarkdownEditor />
      </section>
      <FieldSelector />
      <StackSearch />
      <Spacing size={64} direction="vertical" />
      <SquareBtn>업로드</SquareBtn>
      <Spacing size={64} direction="vertical" />
    </Wrap>
  );
};

export default QuestionWrite;

const Wrap = styled.div`
  margin: 0px auto;
  width: 640px;
  height: max-content;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

const GuideTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GuideTitleImg = styled.div`
  width: 24px;
  height: 24px;

  background-image: url('img/developer_guide.svg');
`;

const GuideTitle = styled.div`
  color: var(--primary, #006794);

  font-size: 18px;
  font-weight: 600;
`;

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 103px;
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

const Info = styled.div`
  color: ${theme.colors.gray3};
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
`;

const Tip = styled.div`
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  font-weight: ${theme.fontStyles.Text_S.fontWeight};
`;

const ContentTip = styled(Tip)`
  color: ${theme.colors.gray2};
`;

import theme from '@/styles/theme';
import styled from 'styled-components';
import Spacing from '@/components/reusable/Spacing';
import { AnswerType } from '@/types/question.type';
import AnswerBox from './AnswerBox';

const Answer = ({ answers }: { answers?: AnswerType[] }) => {
  return (
    <AnswerContainer>
      {answers?.map((item, idx) => (
        <>
          <AnswerBox
            key={item.id}
            userName={item.memberName}
            content={item.content}
            postTime={item.postTime}
            likes={item.likes}
          />
          {idx < answers.length - 1 && <Spacing size={48} direction="vertical" />}
        </>
      ))}
    </AnswerContainer>
  );
};

export default Answer;

const AnswerContainer = styled.section`
  width: 100%;
  padding: 72px 0;
  background-color: ${theme.colors.gray1};
`;

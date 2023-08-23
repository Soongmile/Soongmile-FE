import theme from '@/styles/theme';
import styled from 'styled-components';
import Spacing from '@/components/reusable/Spacing';
import AnswerBox from './AnswerBox';

const Answer = () => {
  const AnswerBoxes = ['경영 마스터', '박숭실'];

  return (
    <AnswerContainer>
      {AnswerBoxes.map((item, idx) => (
        <>
          <AnswerBox userName={item} />
          {idx < AnswerBoxes.length - 1 && <Spacing size={48} direction="vertical" />}
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

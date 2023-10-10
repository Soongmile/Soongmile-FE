import theme from '@/styles/theme';
import styled from 'styled-components';
import Spacing from '@/components/reusable/Spacing';
import { useRouter } from 'next/router';
import useGetQuestionRead from '@/hooks/useGetQuestionRead';
import Search from '../../components/reusable/Search';
import Question from './atoms/Question';
import Answer from './atoms/Answer';
import MyAnswer from './atoms/MyAnswer';

const QuestionRead = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data } = useGetQuestionRead(Number(pid) as number);

  return (
    <Container>
      <Spacing direction="vertical" size={64} />
      <Search />
      <Spacing direction="vertical" size={64} />
      <Question data={data} />
      <Answer answers={data?.answerList} />
      <MyAnswer pId={Number(pid) as number} />
    </Container>
  );
};

export default QuestionRead;

const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.gray0};
`;

import theme from '@/styles/theme';
// import { useRouter } from 'next/router';
import styled from 'styled-components';
import Spacing from '@/components/reusable/Spacing';
import Search from '../../components/reusable/Search';
import Question from './atoms/Question';
import Answer from './atoms/Answer';
import MyAnswer from './atoms/MyAnswer';

const QuestionRead = () => {
  // const router = useRouter();
  // const { pid } = router.query;

  return (
    <Container>
      <Spacing direction="vertical" size={64} />
      <Search />
      <Spacing direction="vertical" size={64} />
      <Question />
      <Answer />
      <MyAnswer />
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

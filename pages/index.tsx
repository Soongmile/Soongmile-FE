import Card from '@/components/reusable/Card';
import Header from '@/components/reusable/Header';
import type { NextPage } from 'next';
import colors from '../styles/colors';
import theme from '@/styles/theme';
import { styled } from 'styled-components';
import Spacing from '@/components/reusable/Spacing';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Spacing direction="vertical" size={56} />
        <MainBanner>
          <ContentBox>
            <TextBox>
              <SlimText>후배에게 도움도 주고, 상품까지 얻고 싶다면?</SlimText>
              <Spacing direction="vertical" size={21} />
              <MText>숭차로에서 다양한 지식과 답변을 공유해보세요!</MText>
            </TextBox>
          </ContentBox>
        </MainBanner>
        <Spacing direction="vertical" size={43} />
      </Container>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;

const Background = styled.div`
  background-color: ${colors.gray0};
`;

const Container = styled.div`
  width: 1120px;
  height: 100vh;
  margin: 0 auto;
`;

const MainBanner = styled.div`
  height: 330px;
  border-radius: 16px;
  background-color: ${colors.secondary};
`;

const SlimText = styled.div`
  color: ${colors.primary};
  font-size: ${theme.fontStyles.Title_M.fontSize}px;
  font-weight: 400;
`;

const MText = styled.div`
  color: ${colors.primary};
  font-size: ${theme.fontStyles.Title_M.fontSize}px;
  font-weight: ${theme.fontStyles.Title_M.fontWeight};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 14px;
  margin-left: 130px;
`;

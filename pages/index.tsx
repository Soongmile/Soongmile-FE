import Card from '@/components/reusable/Card';
import { useState } from 'react';
import type { NextPage } from 'next';
import { MAINPAGE_MENU_LIST } from '@/const';
import SideBar from '@/components/reusable/SideBar';
import Search from '@/components/reusable/Search';
import Spacing from '@/components/reusable/Spacing';
import { styled } from 'styled-components';
import colors from '../styles/colors';
import theme from '@/styles/theme';
import BannerMan from '../assets/BannerMan.svg';
import Left from '../assets/icons/LeftArrow.svg';
import Right from '../assets/icons/RightArrow.svg';

const Home: NextPage = () => {
  const itemsPerPage = 6; // 한 페이지에 표시할 아이템 수
  const totalItems = 12; // 전체 아이템 수 (예시로 12개로 설정)

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const cardsPerPage = 3;

  // 현재 보이는 카드 범위의 시작 인덱스
  const [isstartIndex, setIsStartIndex] = useState(0);

  // 좌우 화살표를 클릭하여 카드 범위를 업데이트하는 함수
  const handleArrowClick = (direction: string) => {
    if (direction === 'left') {
      // 좌측 화살표를 클릭할 때
      if (startIndex > 0) {
        setIsStartIndex(isstartIndex - cardsPerPage);
      }
    } else if (direction === 'right') {
      // 우측 화살표를 클릭할 때
      // 여기서는 startIndex를 증가시켜 다음 범위의 카드를 표시합니다.
      // 실제 데이터 배열의 길이와 함께 사용하여 끝까지 스크롤하면 더 이상 표시할 카드가 없도록 처리할 수 있습니다.
      setIsStartIndex(isstartIndex + cardsPerPage);
    }
  };

  // 현재 보이는 카드 범위에 해당하는 카드 컴포넌트 렌더링
  const visibleCards = Array.from({ length: cardsPerPage }, (_, index) => (
    <Card key={isstartIndex + index} id={isstartIndex + index + 1} />
  ));

  return (
    <>
      <Background>
        <Container>
          <Spacing direction="vertical" size={56} />
          <MainBanner>
            <ContentBox>
              <FlexColBox>
                <SlimText>후배에게 도움도 주고, 상품까지 얻고 싶다면?</SlimText>
                <Spacing direction="vertical" size={21} />
                <MText>숭차로에서 다양한 지식과 답변을 공유해보세요!</MText>
              </FlexColBox>
              <BannerMan alt="남자" width="310" height="310" />
            </ContentBox>
          </MainBanner>
          <Spacing direction="vertical" size={43} />
          <Search />
          <Spacing direction="vertical" size={32} />
          <BarContainer>
            <SideBar menuList={MAINPAGE_MENU_LIST} />
            <FlexColBox2>
              <Title>전체</Title>
              <CardContainer>
                {Array.from({ length: endIndex - startIndex }, (_, index) => (
                  <Card key={startIndex + index} id={startIndex + index + 1} />
                ))}
              </CardContainer>
              <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                  <PageBtn
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </PageBtn>
                ))}
              </Pagination>
            </FlexColBox2>
          </BarContainer>
          <Spacing direction="vertical" size={73} />
        </Container>
      </Background>
      <Background2>
        <Container>
          <Spacing direction="vertical" size={64} />
          <BlueTitle>명예의 전당</BlueTitle>
          <Spacing direction="vertical" size={32} />
          <CardHonor>
            {/* 좌측 화살표 */}
            <Left onClick={() => handleArrowClick('left')} />
            {/* 현재 보이는 카드 컴포넌트 렌더링 */}
            {visibleCards}
            {/* 우측 화살표 */}
            <Right onClick={() => handleArrowClick('right')} />
          </CardHonor>
        </Container>
        <Spacing direction="vertical" size={64} />
      </Background2>
    </>
  );
};

export default Home;

const Background = styled.div`
  background-color: ${colors.gray0};
`;

const Background2 = styled.div`
  background-color: ${colors.white};
`;

const Container = styled.div`
  width: 1120px;
  height: fit-content;
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

const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexColBox2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 142px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 14px;
  margin-left: 110px;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-bottom: 32px;
  overflow: hidden;
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-template-rows: repeat(2, 240px);
  gap: 32px;
`;

const BlueTitle = styled.div`
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Title_S.fontWeight};
  color: ${colors.primary};
  text-align: center;
`;

const Pagination = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 24px;
`;

const PageBtn = styled.button`
  margin-left: 10px;
  border: none;
  background-color: transparent;
  color: ${theme.colors.gray2};
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  font-weight: ${theme.fontStyles.Text_S.fontWeight};

  color: ${theme.colors.gray2};

  &.active {
    color: ${theme.colors.primary};
    font-weight: bold;
    border-radius: 100%;
    border: 1px solid ${theme.colors.gray2};
    padding: 6px 10px 6px 10px;
  }
`;

const CardHonor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;

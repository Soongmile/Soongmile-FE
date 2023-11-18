import Card from '@/components/reusable/Card';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { MAINPAGE_MENU_LIST } from '@/const';
import SideBar from '@/components/reusable/SideBar';
import Search from '@/components/reusable/Search';
import Spacing from '@/components/reusable/Spacing';
import { styled } from 'styled-components';
import theme from '@/styles/theme';
import { useRecoilValue } from 'recoil';
import usePostBoard from '@/hooks/usePostBoard';
import currentState from '@/states/CurrentState';
import { QuestionType, BoardState } from '@/states/BoardState';
import colors from '../styles/colors';
import BannerMan from '../assets/BannerMan.svg';
import Left from '../assets/icons/LeftArrow.svg';
import Right from '../assets/icons/RightArrow.svg';
import BoardState from '../states/BoardState';

const Home: NextPage = () => {
  const { mutate: postGetBoard } = usePostBoard();
  const [currentPage, setCurrentPage] = useState(1);
  const currentTitle = useRecoilValue<string>(currentState);
  const currentBoard = useRecoilValue<QuestionType[]>(BoardState);

  const BoardArr = [...currentBoard].reverse();

  useEffect(() => {
    postGetBoard();
  }, [currentTitle]);

  const itemsPerPage = 6;
  const totalItems = currentBoard.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const cardsPerPage = 3;

  const [isstartIndex, setIsStartIndex] = useState(0);

  const handleArrowClick = (direction: string) => {
    if (direction === 'left') {
      if (isstartIndex > 0) {
        setIsStartIndex(Math.max(0, isstartIndex - cardsPerPage));
      }
    } else if (direction === 'right') {
      setIsStartIndex(isstartIndex + cardsPerPage);
    }
  };

  const formatPostTime = (postTime: string): string => {
    const currentDate = new Date();
    const postDate = new Date(postTime);
    const timeDifference = currentDate.getTime() - postDate.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (Math.floor(timeDifference / (1000 * 60 * 60 * 24))) {
      const year = postDate.getFullYear();
      const month = postDate.getMonth() + 1;
      const day = postDate.getDate();

      return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    }

    if (days > 0) {
      return `${days}일 전`;
    }

    if (hours > 0) {
      return `${hours}시간 전`;
    }

    if (minutes > 0) {
      return `${minutes}분 전`;
    }
    return '방금 전';
  };

  const compareHits = (a: QuestionType, b: QuestionType) => {
    return b.hits - a.hits;
  };

  const sortedBoardArr = [...BoardArr].sort(compareHits);

  const topSixBoardArr = sortedBoardArr.slice(0, 6);
  const isLeftArrowVisible = isstartIndex > 0;
  const isRightArrowVisible = isstartIndex + cardsPerPage < topSixBoardArr.length;

  const visibleCards = Array.from(
    { length: Math.min(cardsPerPage, topSixBoardArr.length - isstartIndex) },
    (_, index) => {
      const boardItem = topSixBoardArr[isstartIndex + index];

      return (
        <Card key={boardItem.id} {...boardItem} postTime={formatPostTime(boardItem.postTime)} />
      );
    },
  );

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
              <Title>{currentTitle}</Title>
              <CardContainer>
                {BoardArr.slice(startIndex, endIndex).map((boardItem) => (
                  <Card
                    key={boardItem.id}
                    {...boardItem}
                    postTime={formatPostTime(boardItem.postTime)}
                  />
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
            <Left
              onClick={() => isLeftArrowVisible && handleArrowClick('left')}
              style={{
                cursor: isLeftArrowVisible ? 'pointer' : 'not-allowed',
              }}
            />
            {visibleCards}
            <Right
              onClick={() => isRightArrowVisible && handleArrowClick('right')}
              style={{
                cursor: isRightArrowVisible ? 'pointer' : 'not-allowed',
              }}
            />
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

import Spacing from '@/components/reusable/Spacing';
import type { NextPage } from 'next';
import Search from '@/components/reusable/Search';
import styled from 'styled-components';
import theme from '@/styles/theme';
import SideBar from '@/components/reusable/SideBar';
import { MAINPAGE_MENU_LIST } from '@/const';
import Card from '@/components/reusable/Card';
import { useState } from 'react';

const SearchPage: NextPage = () => {
  const itemsPerPage = 12; // 한 페이지에 표시할 아이템 수
  const totalItems = 20; // 전체 아이템 수 (예시로 12개로 설정)

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <Container>
      <Spacing direction="vertical" size={64} />
      <Search />
      <Spacing direction="vertical" size={64} />
      <ContentWrap>
        <SideBar menuList={MAINPAGE_MENU_LIST} />
        <Spacing direction="horizontal" size={138} />
        <RightWrap>
          <Title>전체</Title>
          <Spacing direction="vertical" size={32} />
          <CardWrap>
            {Array.from({ length: endIndex - startIndex }, (_, index) => (
              <Card key={startIndex + index} id={startIndex + index + 1} />
            ))}
          </CardWrap>
          <Spacing direction="vertical" size={24} />
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
          <Spacing direction="vertical" size={73} />
        </RightWrap>
      </ContentWrap>
    </Container>
  );
};

export default SearchPage;

const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.gray0};
`;

const ContentWrap = styled.div`
  display: flex;
`;

const RightWrap = styled.div`
  width: 904px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Title_S.fontWeight};
`;

const CardWrap = styled.div`
  width: 904px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px 32px;
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

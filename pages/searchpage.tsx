import Spacing from '@/components/reusable/Spacing';
import type { NextPage } from 'next';
import Search from '@/components/reusable/Search';
import styled from 'styled-components';
import theme from '@/styles/theme';
import SideBar from '@/components/reusable/SideBar';
import { MAINPAGE_MENU_LIST } from '@/const';
import Card from '@/components/reusable/Card';

const SearchPage: NextPage = () => {
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
          <CardWrap />
          <Spacing direction="vertical" size={24} />
          <PaginationWrap>
            <PaginationItem pageSelected>1</PaginationItem>
            <Spacing direction="horizontal" size={2} />
            <PaginationItem pageSelected={false}>2</PaginationItem>
            <Spacing direction="horizontal" size={2} />
            <PaginationItem pageSelected={false}>3</PaginationItem>
          </PaginationWrap>
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
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px 32px;
`;

interface PageProps {
  pageSelected: boolean;
}

const PaginationWrap = styled.div`
  height: 32px;
  width: fit-content;
  display: flex;
  margin: 0 auto;
`;

const PaginationItem = styled.span<PageProps>`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.pageSelected && `url('/img/paginationSelected.svg')`};
  color: ${(props) => (props.pageSelected ? theme.colors.primary : theme.colors.gray2)};
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  font-weight: ${theme.fontStyles.Text_S.fontWeight};
  background-size: contain;
  background-position: center;
  cursor: pointer;
`;

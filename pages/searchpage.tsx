import Spacing from '@/components/reusable/Spacing';
import type { NextPage } from 'next';
import Search from '@/components/reusable/Search';
import styled from 'styled-components';
import theme from '@/styles/theme';
import SideBar from '@/components/reusable/SideBar';
import { MAINPAGE_MENU_LIST } from '@/const';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import searchFilterState from '@/states/searchFilterState';
import { useSearchParams } from 'next/navigation';
import usePostSearch from '@/hooks/usePostSearch';
import Card from '@/components/reusable/Card';
// import Card from '@/components/reusable/Card';

const SearchPage: NextPage = () => {
  const selectedState = useRecoilValue(searchFilterState);

  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  const { mutate: postSearch, data } = usePostSearch();

  useEffect(() => {
    if (search !== null) {
      postSearch({ keyword: search as string, filter: selectedState });
    }
  }, [search, selectedState]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 한 페이지에 표시할 아이템 수

  const startIndex = (currentPage - 1) * itemsPerPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
            {data && data?.result.length > 0 ? (
              data.result
                .slice(startIndex, Math.min(startIndex + itemsPerPage, data.result.length))
                .map((items) => (
                  <Card
                    id={items.id}
                    title={items.title}
                    content={items.content}
                    tags={items.tag}
                    fields={items.fields}
                    hits={items.hits}
                    answerCount={items.answerCount}
                    postTime={items.postTime}
                    key={items.id}
                  />
                ))
            ) : (
              <div>검색 결과가 없습니다.</div>
            )}
          </CardWrap>
          <Spacing direction="vertical" size={24} />
          <Pagination>
            {data
              ? Array.from({ length: Math.ceil(data.result.length / itemsPerPage) }, (_, index) => (
                  <PageBtn
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </PageBtn>
                ))
              : null}
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

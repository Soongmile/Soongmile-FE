import QuestionBtn from '@/components/reusable/Buttons/QuestionBtn';
import Spacing from '@/components/reusable/Spacing';
import SearchInput from '@/components/reusable/Inputs/SearchInput';
import SearchFilter from '@/components/reusable/SearchFilter';
import styled from 'styled-components';

const Search = () => {
  return (
    <SearchContainer>
      <SearchFilter />
      <Spacing direction="horizontal" size={24} />
      <SearchInput placeholder="궁금한 내용을 검색해보세요" border={false} width="733px" />
      <Spacing direction="horizontal" size={48} />
      <QuestionBtn>질문하기</QuestionBtn>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 1120px;
  height: 56px;
  display: flex;
`;

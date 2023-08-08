import theme from '@/styles/theme';
import styled from 'styled-components';

const SearchFilter = () => {
  return (
    <StyledSearchFilter>
      <span>제목 + 내용</span>
      <ArrowDownImg />
    </StyledSearchFilter>
  );
};

export default SearchFilter;

const StyledSearchFilter = styled.div`
  width: 180px;
  height: 56px;
  background-color: ${theme.colors.white};
  border-radius: 16px;
  padding: 17px 8px 18px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ArrowDownImg = styled.div`
  width: 48px;
  height: 48px;
  background-image: url('/img/downArrow.svg');
`;

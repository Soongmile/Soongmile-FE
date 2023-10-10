import QuestionBtn from '@/components/reusable/Buttons/QuestionBtn';
import Spacing from '@/components/reusable/Spacing';
import SearchInput from '@/components/reusable/Inputs/SearchInput';
import SearchFilter from '@/components/reusable/Search/SearchFilter';
import styled from 'styled-components';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import searchFilterState from '@/states/searchFilterState';
import { useRouter } from 'next/router';
import SearchFilterDropdown from './SearchFilterDropdown';

interface SearchProps {
  variant?: 'up' | 'down';
}

const Search = ({ variant = 'down' }: SearchProps) => {
  const [dropdownState, setDropdownState] = useState<boolean>(false);
  const selectedState = useRecoilValue(searchFilterState);

  const ref = useRef<HTMLButtonElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleAutoSearch = (
    searchRef: MutableRefObject<HTMLButtonElement | null>,
    searchDropRef: MutableRefObject<HTMLDivElement | null>,
    e: MouseEvent,
  ) => {
    if (searchRef.current && searchDropRef.current && e) {
      if (
        !searchRef.current.contains(e.target as Node) &&
        !searchDropRef.current.contains(e.target as Node)
      ) {
        setDropdownState(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (e) => handleAutoSearch(ref, dropRef, e));
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      document.removeEventListener('mousedown', (e) => handleAutoSearch(ref, dropRef, e));
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <SearchContainer>
      <SearchFilterWrap>
        {dropdownState && variant === 'up' && (
          <>
            <SearchFilterDropdown ref={dropRef} />
            <Spacing direction="vertical" size={16} />
          </>
        )}
        <SearchFilter
          ref={ref}
          onClick={() => {
            setDropdownState(!dropdownState);
          }}
        >
          <span>{selectedState}</span>
        </SearchFilter>
        {dropdownState && variant === 'down' && (
          <>
            <Spacing direction="vertical" size={16} />
            <SearchFilterDropdown ref={dropRef} />
          </>
        )}
      </SearchFilterWrap>
      <Spacing direction="horizontal" size={24} />
      <SearchInput placeholder="궁금한 내용을 검색해보세요" border={false} width="733px" />
      <Spacing direction="horizontal" size={48} />
      <QuestionBtn
        onClick={() => {
          router.push('/questionWrite');
        }}
      >
        질문하기
      </QuestionBtn>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 1120px;
  height: 56px;
  display: flex;
`;

const SearchFilterWrap = styled.div``;

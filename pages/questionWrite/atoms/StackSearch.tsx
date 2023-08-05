import Spacing from '@/components/reusable/Spacing';
import SearchInput from '@/components/reusable/Inputs/SearchInput';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@/styles/theme';
import StackDummy from '@/const/dummy';
import SearchTag from '@/pages/questionWrite/atoms/SearchTag';
import { useRecoilValue } from 'recoil';
import searchTagState from '@/states/searchTagState';
import fieldListState from '@/states/fieldListState';
import QuestionTitle from './QuestionTitle';
import StackSearchList from './StackSearchList';
import AutoSearchContainer from './AutoSearchContainer';

const StackSearch = () => {
  const fieldList = useRecoilValue(fieldListState);
  const searchTags = useRecoilValue(searchTagState);

  const [autoSearch, setAutoSearch] = useState(false);
  const [display, setDisplay] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [allStackList, setAllStackList] = useState<string[]>([]);
  const [keyItems, setKeyItems] = useState<string[]>(allStackList);

  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 검색창 외부 클릭시 검색창 닫힘
  const handleAutoSearch = (
    searchRef: MutableRefObject<HTMLDivElement | null>,
    searchInputRef: MutableRefObject<HTMLInputElement | null>,
    e: MouseEvent,
  ) => {
    if (searchRef.current && searchInputRef.current && e) {
      if (
        !searchRef.current.contains(e.target as Node) &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        if (autoSearch) {
          setAutoSearch(false);
          setTimeout(() => {
            setDisplay(false);
            // keyword 초기화
            // -> keyword.len === 0이면, 전체 리스트자동 초기화
            setKeyword('');
          }, 200);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (e) => handleAutoSearch(ref, inputRef, e));
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      document.removeEventListener('mousedown', (e) => handleAutoSearch(ref, inputRef, e));
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  useEffect(() => {
    setAllStackList([]);
    let newArr: string[] = [];

    for (const field in fieldList) {
      if (!fieldList[field]) {
        newArr = [...Array.from(new Set([...newArr, ...StackDummy[field]]))];
      }
    }
    setAllStackList([...newArr]);
  }, [fieldList]);

  useEffect(() => {
    setKeyItems(allStackList);
  }, [allStackList]);

  // 검색 기능
  const updateData = () => {
    const filtered = allStackList.filter((list: string) =>
      list.toLowerCase().includes(keyword.toLowerCase()),
    );
    setKeyItems(filtered);
  };

  useEffect(() => {
    if (keyword.length === 0) {
      // KeyItems 초기화
      setKeyItems(allStackList);
    }
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <section>
      <Spacing size={32} direction="vertical" />
      <QuestionTitle titleName="스택 / 툴" isSVG={false} />
      <Spacing size={16} direction="vertical" />
      <SearchWrap>
        {display && (
          <AutoSearchContainer ref={ref}>
            <AutoSearchWrap autoSearch={autoSearch}>
              {keyItems.map((item) => (
                <StackSearchList name={item} />
              ))}
            </AutoSearchWrap>
            <Spacing size={16} direction="vertical" />
          </AutoSearchContainer>
        )}
        <SearchInput
          ref={inputRef}
          onClick={() => {
            if (autoSearch) {
              setAutoSearch(!autoSearch);
              setTimeout(() => {
                setDisplay(false);
              }, 200);
            } else {
              setAutoSearch(!autoSearch);
              setDisplay(true);
            }
          }}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="예시) Kotlin, Figma 등"
        />
      </SearchWrap>
      <Spacing size={16} direction="vertical" />
      <SearchTagsWrap>
        {searchTags.map((item) => (
          <SearchTag name={item} />
        ))}
      </SearchTagsWrap>
    </section>
  );
};

export default StackSearch;

const SearchWrap = styled.div`
  position: relative;
`;

interface AutoSearchWrapProps {
  autoSearch: boolean;
}

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const bounceOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1)
  }
  100% {
    opacity: 0;
    transform: scale(0.5)
  }
`;

const AutoSearchWrap = styled.div<AutoSearchWrapProps>`
  width: 640px;
  height: 345px;
  padding: 20px 0;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 3px 6px 2px rgba(176, 176, 176, 0.5);
  animation: ${(props) => (props.autoSearch ? bounceIn : bounceOut)};
  animation-duration: 0.25s;

  overflow-y: scroll;
`;

const SearchTagsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
`;

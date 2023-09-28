import searchFilterState from '@/states/searchFilterState';
import theme from '@/styles/theme';
import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface SearchFilterDropdownProps {
  children?: ReactNode;
}

const SearchFilterDropdown = forwardRef(
  ({ children = null }: SearchFilterDropdownProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [selectedState, setSelectedState] = useRecoilState(searchFilterState);

    return (
      <StyledSearchFilterDropdown ref={ref}>
        <Category
          selected={selectedState === '제목'}
          onClick={() => {
            setSelectedState('제목');
          }}
        >
          제목
        </Category>
        <Category
          selected={selectedState === '내용'}
          onClick={() => {
            setSelectedState('내용');
          }}
        >
          내용
        </Category>
        <Category
          selected={selectedState === '제목+내용'}
          onClick={() => {
            setSelectedState('제목+내용');
          }}
        >
          제목+내용
        </Category>
        {children}
      </StyledSearchFilterDropdown>
    );
  },
);

export default SearchFilterDropdown;

interface CategoryProps {
  selected: boolean;
}

const StyledSearchFilterDropdown = styled.div`
  z-index: 1;
  width: 180px;
  height: 223px;
  border-radius: 8px;
  padding: 20px 8px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 3px 6px 2px rgba(176, 176, 176, 0.5);
  position: absolute;
`;

const Category = styled.button<CategoryProps>`
  width: 164px;
  height: 60px;
  border-radius: 8px;
  padding: 19px 70px 20px 20px;
  background-color: ${(props) => (props.selected ? theme.colors.gray1 : theme.colors.white)};
  font-size: ${(props) =>
    props.selected
      ? `${theme.fontStyles.Text_L.fontSize}px`
      : `${theme.fontStyles.Text_L.fontSize}px`};
  font-weight: ${(props) =>
    props.selected ? theme.fontStyles.Text_L.fontWeight : theme.fontStyles.Text_M.fontWeight};
  color: ${(props) => (props.selected ? theme.colors.primary : theme.colors.gray3)};
  cursor: pointer;
  text-align: left;
  border: none;
`;

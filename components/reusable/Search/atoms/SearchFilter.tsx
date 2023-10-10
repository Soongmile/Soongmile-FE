import theme from '@/styles/theme';
import { ButtonHTMLAttributes, ForwardedRef, ReactElement, forwardRef } from 'react';
import styled from 'styled-components';

interface SearchFilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement;
}

const SearchFilter = forwardRef(
  ({ children, ...props }: SearchFilterProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyledSearchFilter ref={ref} {...props}>
        {children}
        <ArrowDownImg />
      </StyledSearchFilter>
    );
  },
);

export default SearchFilter;

const StyledSearchFilter = styled.button`
  width: 180px;
  height: 56px;
  background-color: ${theme.colors.white};
  border-radius: 16px;
  padding: 17px 8px 18px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  & span {
    font-size: ${theme.fontStyles.Text_M.fontSize}px;
    font-weight: ${theme.fontStyles.Text_M.fontWeight};
  }

  color: ${theme.colors.gray3};
  cursor: pointer;
`;

const ArrowDownImg = styled.div`
  width: 48px;
  height: 48px;
  background-image: url('/img/downArrow.svg');
`;

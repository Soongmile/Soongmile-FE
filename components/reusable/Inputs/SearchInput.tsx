import { styled } from 'styled-components';
import { Dispatch, ForwardedRef, InputHTMLAttributes, SetStateAction, forwardRef } from 'react';
import { useRouter } from 'next/router';
import theme from '../../../styles/theme';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  width?: string;
  height?: string;
  border?: boolean;
  forwardvalue?: string;
  forwardsetvalue?: Dispatch<SetStateAction<string>>;
}

const SearchInput = forwardRef(
  (
    {
      placeholder = '',
      width = '640px',
      height = '56px',
      border = true,
      forwardvalue = '',
      forwardsetvalue,
      ...props
    }: SearchInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const router = useRouter();

    return (
      <SearchInputWrap width={width} height={height} ref={ref}>
        <InputBox
          placeholder={placeholder}
          width={width}
          height={height}
          border={border.toString()}
          value={forwardvalue}
          onChange={(e) => {
            if (forwardsetvalue === undefined) return;
            forwardsetvalue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              router.push(`/searchpage?search=${forwardvalue}`);
            }
          }}
          {...props}
        />
        <SearchImg />
      </SearchInputWrap>
    );
  },
);

export default SearchInput;

const InputBox = styled.input<{ width: string; height: string; border: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-left: 24px;
  border-radius: 16px;
  border: ${({ border }) => (border === 'true' ? `1px solid ${theme.colors.gray2}` : 'none')};
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  font-size: ${theme.fontStyles.Text_M.fontSize}px;

  &::placeholder {
    color: ${theme.colors.gray2};
    font-weight: ${theme.fontStyles.Text_M.fontWeight};
    font-size: ${theme.fontStyles.Text_M.fontSize}px;
  }

  &:hover {
    border-color: ${theme.colors.gray3};
  }

  &:focus {
    outline: 1px solid ${theme.colors.primary};
    box-shadow: 0px 1px 3px 1px rgba(176, 176, 176, 0.5);
  }
`;

const SearchInputWrap = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchImg = styled.div`
  position: absolute;
  right: 24px;
  width: 30px;
  height: 30px;
  background-image: url('/img/search.svg');
`;

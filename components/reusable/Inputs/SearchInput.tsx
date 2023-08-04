import { styled } from 'styled-components';
import { InputHTMLAttributes } from 'react';
import theme from '../../../styles/theme';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  width?: string;
  height?: string;
}

const SearchInput = ({
  placeholder = '',
  width = '640px',
  height = '56px',
  ...props
}: SearchInputProps) => {
  return (
    <SearchInputWrap>
      <InputBox placeholder={placeholder} width={width} height={height} {...props} />
      <SearchImg />
    </SearchInputWrap>
  );
};

export default SearchInput;

const InputBox = styled.input<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-left: 24px;
  border-radius: 16px;
  border: 1px solid ${theme.colors.gray2};
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

const SearchInputWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchImg = styled.div`
  position: absolute;
  right: 13px;
  width: 30px;
  height: 30px;
  background-image: url('/img/search.svg');
`;

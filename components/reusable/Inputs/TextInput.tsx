import { styled } from 'styled-components';
import { InputHTMLAttributes } from 'react';
import theme from '../../../styles/theme';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  width: string;
  height: string;
  hasError?: boolean;
  errorMessage?: string;
}

const TextInput = ({
  placeholder = '',
  width = '640px',
  height = '56px',
  hasError = false,
  errorMessage = '',
  ...props
}: TextInputProps) => {
  return (
    <>
      <InputBox
        placeholder={placeholder}
        width={width}
        height={height}
        className={hasError ? 'has-error' : ''}
        {...props}
      />
      {hasError && errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage> // 에러 메시지 출력
      ) : null}
    </>
  );
};

export default TextInput;

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
    &.has-error {
      outline: 1px solid ${theme.colors.error};
    }
  }
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: ${theme.colors.error};
  font-weight: ${theme.fontStyles.Text_S.fontWeight};
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
`;

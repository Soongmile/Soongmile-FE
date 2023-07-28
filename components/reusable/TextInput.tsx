import { Spacing } from "../reusable/Spacing";
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import colors from '../../styles/colors';

interface TextInputProps {
  placeholder?: string;
  width?: string;
  height?: string;
  hasError?: boolean;
  errorMessage?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  placeholder = "",
  width = "630px",
  height = "46px",
  hasError = false,
  errorMessage = "",
}) => {
  return (
    <>
      <InputBox
        placeholder={placeholder}
        width={width}
        height={height}
        className={hasError ? "has-error" : ""}
      />
      {hasError && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage> // 에러 메시지 출력
      )}
    </>
  );
};

const InputBox = styled.input<{ width: string; height: string; }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-left: 24px;
  border-radius: 16px;
  border: 1px solid ${colors.gray2};
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  
  &::placeholder {
    color: ${colors.gray3};
    font-weight: ${theme.fontStyles.Text_M.fontWeight};
    font-size: ${theme.fontStyles.Text_M.fontSize}px;
  }

  &:hover {
    border-color: ${colors.gray3};
  }

  &:focus {
    outline: 1px solid ${colors.primary};
    box-shadow: 0px 1px 3px 1px rgba(176, 176, 176, 0.50);
  }

  &.has-error {
    outline: 1px solid ${colors.error};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: ${colors.error};
  font-weight: ${theme.fontStyles.Text_S.fontWeight};
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
`;
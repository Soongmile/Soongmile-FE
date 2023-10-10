import theme from '@/styles/theme';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  color: 'color' | 'gray';
  size: 'small' | 'big';
  children: ReactNode;
}

const Tag = ({ color = 'color', size = 'small', children, ...props }: Props) => {
  return (
    <StyledTag color={color} size={size} {...props}>
      {children}
    </StyledTag>
  );
};

export default Tag;

interface StyledTagProps {
  color: 'color' | 'gray';
  size: 'small' | 'big';
}

const StyledTag = styled.span<StyledTagProps>`
  background-color: ${(props) => backgroundColor[props.color]};
  color: ${(props) => textColor[props.color]};
  border-radius: ${(props) => radiusSize[props.size]};
  height: 24px;
  min-width: fit-content;
  font-size: ${theme.fontStyles.Caption.fontSize}px;
  border: none;
  padding: 5px 12px;
  margin: 0;
`;

const backgroundColor = {
  color: theme.colors.primary_tag,
  gray: theme.colors.black_tag,
};

const textColor = {
  color: theme.colors.primary,
  gray: theme.colors.gray3,
};

const radiusSize = {
  small: '8px',
  big: '100px',
};

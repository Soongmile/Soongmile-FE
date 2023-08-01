import { HTMLAttributes, memo } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

export const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: Props) {
  return <StyledSpacing direction={direction} size={size} />;
});

interface StyledSpacingProps {
  readonly direction: 'horizontal' | 'vertical';
  readonly size: number;
}

const StyledSpacing = styled.div<StyledSpacingProps>`
  flex: none;
  width: ${(props) => (props.direction === 'horizontal' ? `${props.size}px` : undefined)};
  height: ${(props) => (props.direction === 'vertical' ? `${props.size}px` : undefined)};
`;
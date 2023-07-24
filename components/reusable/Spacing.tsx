import StyledSpacing from '@/styles/StyledSpacing';
import { HTMLAttributes, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

export const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: Props) {
  return <StyledSpacing direction={direction} size={size} />;
});

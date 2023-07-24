import StyledTag from '@/styles/StyledTag';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  readonly variant?: 'color' | 'gray';
}

export function Tag({ variant = 'color', ...props }: Props) {
  return (
    <StyledTag variant={variant} {...props}>
      내용
    </StyledTag>
  );
}

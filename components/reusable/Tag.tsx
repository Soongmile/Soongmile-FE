import colors from '@/styles/colors';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  readonly variant?: 'color' | 'gray';
  readonly content: string;
}

export function Tag({ variant = 'color', content, ...props }: Props) {
  return (
    <StyledTag variant={variant} {...props}>
      {content}
    </StyledTag>
  );
}

interface StyledTagProps {
  readonly variant: 'color' | 'gray';
}

const StyledTag = styled.span<StyledTagProps>`
  background-color: ${(props) => backgroundColor[props.variant]};
  color: ${(props) => textColor[props.variant]};
  border-radius: ${(props) => radiusSize[props.variant]};
  height: 24px;
  min-width: fit-content;
  font-size: 12px;
  border: none;
  padding: 5px 12px;
  margin: 0;
`;

const backgroundColor = {
  color: colors.primarybg,
  gray: colors.graybg,
};

const textColor = {
  color: colors.primary,
  gray: colors.gray3,
};

const radiusSize = {
  color: '8px',
  gray: '100px',
};

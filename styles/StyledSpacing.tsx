import styled from 'styled-components';

interface StyledSpacingProps {
  readonly direction: 'horizontal' | 'vertical';
  readonly size: number;
}

const StyledSpacing = styled.div<StyledSpacingProps>`
  flex: 'none';
  width: ${(props) => (props.direction === 'horizontal' ? `${props.size}px` : undefined)};
  width: ${(props) => (props.direction === 'vertical' ? `${props.size}px` : undefined)};
`;

export default StyledSpacing;

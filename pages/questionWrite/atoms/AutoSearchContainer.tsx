import { ForwardedRef, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

interface AutoSearchContainerProps {
  children?: ReactNode;
}

const AutoSearchContainer = forwardRef(
  ({ children }: AutoSearchContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <StyledAutoSearchContainer ref={ref}>{children}</StyledAutoSearchContainer>;
  },
);

export default AutoSearchContainer;

const StyledAutoSearchContainer = styled.div`
  position: absolute;
  bottom: 56px;
`;

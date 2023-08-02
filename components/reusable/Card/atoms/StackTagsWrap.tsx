import { ForwardedRef, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

const StackTagsWrap = forwardRef(
  ({ children }: { children: ReactNode }, ref: ForwardedRef<HTMLDivElement>) => {
    return <StyledStackTagsWrap ref={ref}>{children}</StyledStackTagsWrap>;
  },
);

const StyledStackTagsWrap = styled.div`
  display: flex;
  width: 216px;
  margin-left: 32px;
  flex-direction: row;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-scrollbar: no-button;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StackTagsWrap;

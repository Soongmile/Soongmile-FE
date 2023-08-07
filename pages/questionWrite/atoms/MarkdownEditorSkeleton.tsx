import theme from '@/styles/theme';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled, { keyframes } from 'styled-components';

const MarkdownEditorSkeleton = () => {
  return (
    <section>
      <Skeleton>
        <ShimmerWrap>
          <Shimmer />
        </ShimmerWrap>
      </Skeleton>
    </section>
  );
};

export default MarkdownEditorSkeleton;

const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 30px 30px #e0e0e0;
  transform: skewX(-20deg);
`;

const loading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translate(200%);
  }
`;

const ShimmerWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  animation: ${loading} 2.5s infinite;
`;

const Skeleton = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 5px;
  background-color: ${theme.colors.black_tag};
  overflow: hidden;
`;

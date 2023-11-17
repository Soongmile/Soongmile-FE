import { styled } from 'styled-components';
import theme from '@/styles/theme';
import colors from '../styles/colors';

const Point = () => {
  return (
    <Background>
      <Container>🚧 릴리즈 예정입니다. 🚧</Container>
    </Background>
  );
};

export default Point;

const Background = styled.div`
  background-color: ${colors.gray0};
`;

const Container = styled.div`
  width: 1120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 72px - 352px);
  margin: 0 auto;
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Title_S.fontWeight};
`;

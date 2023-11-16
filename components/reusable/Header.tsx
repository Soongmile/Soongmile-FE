import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import Logo from '../../assets/Logo.svg';

interface LinkProps {
  active: boolean;
}

const Header = () => {
  const pathname = usePathname();
  return (
    <Container>
      <Content>
        <Link href="/">
          <Logo />
        </Link>
        <Nav>
          <NavLink active={pathname === '/'} href="/">
            홈
          </NavLink>
          <NavLink active={pathname === '/questionWrite'} href="/questionWrite">
            질문
          </NavLink>
          <NavLink active={pathname === '/point'} href="/point">
            포인트
          </NavLink>
          <NavLink active={pathname === '/coffeeChat'} href="/coffeeChat">
            커피챗
          </NavLink>
        </Nav>
        <Nav>
          <NavLink active={pathname === '/signin'} href="/signin">
            로그인
          </NavLink>
          <NavLink active={pathname === '/signup'} href="/signup">
            회원가입
          </NavLink>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${theme.colors.white};
  border-bottom: 2px solid ${theme.colors.gray1};
`;

const Content = styled.div`
  width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const NavLink = styled.a<LinkProps>`
  font-size: ${(props) =>
    props.active ? theme.fontStyles.Text_L.fontSize : theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${(props) =>
    props.active ? theme.fontStyles.Text_L.fontWeight : theme.fontStyles.Text_M.fontWeight};
`;

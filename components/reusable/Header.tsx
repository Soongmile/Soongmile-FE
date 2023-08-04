import Link from 'next/link';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { usePathname } from 'next/navigation';

interface LinkProps {
  active: boolean;
}

const Header = () => {
  const pathname = usePathname();
  return (
    <Container>
      <Link href="/">
        <LogoImg />
      </Link>
      <Nav>
        <NavLink active={pathname === '/'} href="/">
          홈
        </NavLink>
        <NavLink active={pathname === '/questionWrite'} href="/questionWrite">
          질문
        </NavLink>
        <NavLink active={pathname === ''} href="/">
          포인트
        </NavLink>
        <NavLink active={pathname === ''} href="/">
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
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding-left: 155px;
  padding-right: 155px;
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  border-bottom: 2px solid ${theme.colors.gray1};
  align-items: center;
`;

const LogoImg = styled.div`
  width: 72px;
  height: 72px;
  background-image: url('Logo.svg');
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

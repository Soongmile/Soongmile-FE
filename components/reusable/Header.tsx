import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from 'styled-components';
import { deleteCookie, getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import theme from '../../styles/theme';
import Logo from '../../assets/Logo.svg';

interface LinkProps {
  active: boolean;
}

const Header = () => {
  const pathname = usePathname();
  const [token, setToken] = useState<string>('');
  const [memberName, setMemberName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    // 페이지 이동 후에 쿠키 값을 확인하고 업데이트
    const updateCookies = () => {
      const tokenCookie = getCookie('token');
      if (tokenCookie) {
        setToken(tokenCookie as string);
      }

      const memberNameCookie = getCookie('memberName');
      if (memberNameCookie) {
        setMemberName(memberNameCookie);
      }
    };

    // 페이지 이동을 기다리기 위해 router.events 사용
    const handleRouteChange = () => {
      updateCookies();
    };

    // 이벤트 리스너 등록
    router.events.on('routeChangeComplete', handleRouteChange);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

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
          {token && memberName ? (
            <NavSpan>{`${memberName}님`}</NavSpan>
          ) : (
            <NavLink active={pathname === '/signin'} href="/signin">
              로그인
            </NavLink>
          )}

          {token && memberName ? (
            <NavLink
              active={false}
              onClick={() => {
                deleteCookie('token');
                deleteCookie('memberName');
                router.reload();
              }}
            >
              로그아웃
            </NavLink>
          ) : (
            <NavLink active={pathname === '/signup'} href="/signup">
              회원가입
            </NavLink>
          )}
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
  cursor: pointer;
`;

const NavSpan = styled.span`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
`;

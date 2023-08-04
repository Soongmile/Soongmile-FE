import sideBarState from '@/states/sideBarState';
import theme from '@/styles/theme';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface SideBarListProps {
  href: string;
  title: string;
}

const SideBarList = ({ href, title }: SideBarListProps) => {
  const [currentSideBar, setCurrentSideBar] = useRecoilState<string>(sideBarState);

  return (
    <StyledSideBarList
      href={href}
      currentsidebar={currentSideBar}
      onClick={() => {
        setCurrentSideBar(href);
      }}
    >
      {title}
    </StyledSideBarList>
  );
};

export default SideBarList;

interface StyledSideBarListProps {
  currentsidebar: string;
}

const StyledSideBarList = styled.a<StyledSideBarListProps>`
  font-size: ${theme.fontStyles.Text_M.fontSize};
  font-weight: ${(props) =>
    props.currentsidebar === props.href
      ? theme.fontStyles.Text_L.fontWeight
      : theme.fontStyles.Text_M.fontWeight};
  color: ${(props) =>
    props.currentsidebar === props.href ? theme.colors.black : theme.colors.gray3};
`;

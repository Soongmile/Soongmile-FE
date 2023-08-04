import styled from 'styled-components';
import SideBarList from './SideBarList';
import Spacing from './Spacing';

interface SideBarProps {
  menuList: {
    title: string;
    href: string;
  }[];
}

const SideBar = ({ menuList }: SideBarProps) => {
  return (
    <StyledSideBar>
      {menuList.map(({ title, href }, index) => (
        <>
          <SideBarList title={title} href={href} />
          {index < menuList.length - 1 && <Spacing direction="vertical" size={16} />}
        </>
      ))}
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

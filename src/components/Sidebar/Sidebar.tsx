import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./styles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle} offset={-80}>
            Projects
          </SidebarLink>
          <SidebarLink to="travel" onClick={toggle} offset={-80}>
            Travel
          </SidebarLink>
          <SidebarLink to="other" onClick={toggle} offset={-80}>
            Other
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

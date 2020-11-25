import React from 'react';
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  Icon,
  CloseIcon
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>  
          <SidebarLink to="portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>  
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>  
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/email" onClick={toggle}>
            Email Me
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;

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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About
          </SidebarLink>  
          <SidebarLink to="portfolio">
            Portfolio
          </SidebarLink>  
          <SidebarLink to="contact">
            Contact
          </SidebarLink>  
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/email">
            Email Me
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;

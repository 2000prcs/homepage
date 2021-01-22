import React from 'react';
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  // SideBtnWrap,
  // SidebarRoute,
  Icon,
  CloseIcon
} from './SidebarElements';

const Sidebar = ({ isOpen, scrollPage, toggle }) => {

  const handleClick = (pageNumber) => {
    scrollPage(pageNumber);
    toggle();
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={() => handleClick(1)}>
            About
          </SidebarLink>  
          <SidebarLink onClick={() => handleClick(2)}>
            Portfolio
          </SidebarLink>  
          <SidebarLink onClick={() => handleClick(3)}>
            Contact
          </SidebarLink>  
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute onClick={handleClick}>
            Email Me
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;

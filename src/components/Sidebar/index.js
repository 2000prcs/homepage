import React from 'react';
import SidebarLink from './SidebarLink';
import {
  IconContainer,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  StyledCloseIcon,
} from './SidebarElements';
import navData from '../Navbar/NavData';

const Sidebar = ({ currentPage, isOpen, scrollPage, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <IconContainer onClick={toggle}>
        <StyledCloseIcon />
      </IconContainer>
      <SidebarWrapper>
        <SidebarMenu>
          {navData.map((data) => 
            <SidebarLink
              isCurrentPage={currentPage === data.pageNumber}
              pageName={data.pageName}
              pageNumber={data.pageNumber} 
              toggle={toggle}
              scrollPage={scrollPage}
              key={data.pageNumber}
            />
          )}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;

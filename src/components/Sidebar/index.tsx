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

type SidebarProps = {
  currentPage: number,
  isOpen: boolean,
  scrollPage: (pageNumber: number) => void,
  toggle: () => void
}

const Sidebar = ({ currentPage, isOpen, scrollPage, toggle }: SidebarProps) => {
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

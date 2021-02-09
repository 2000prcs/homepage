import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  MobileIcon,
  StyledMenuIcon
} from './NavbarElements';
import NavItem from './NavItem';
import navData from './NavData';

const NavBar = ({ currentPage, scrollPage, toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={() => scrollPage(0)}>Home</NavLogo>
          <MobileIcon onClick={toggle}>
            <StyledMenuIcon />
          </MobileIcon>
          <NavMenu>
            {navData.map((data) => 
              <NavItem
                isCurrentPage={currentPage === data.pageNumber}
                pageName={data.pageName}
                pageNumber={data.pageNumber}
                scrollPage={scrollPage}
                key={data.pageNumber}
              />
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar;

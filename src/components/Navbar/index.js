import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon
} from './NavbarElements';

const NavBar = ({ scrollPage, toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={() => scrollPage(0)}>Home</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => scrollPage(1)}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollPage(2)}>Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollPage(3)}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar;

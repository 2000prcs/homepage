import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
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
      {/* <div style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0),rgba(47, 52, 172, 0))'}}></div> */}
    </>
  )
}

export default NavBar;

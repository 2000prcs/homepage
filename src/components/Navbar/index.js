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

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Home</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/email">Email Me</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar;

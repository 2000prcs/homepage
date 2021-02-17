import styled from 'styled-components';
import { NavProps, NavLinkProps } from './ElementsProps';
import HomeIcon from '../../icons/home.svg';
import MenuIcon from '../../icons/menu.svg';

export const Item = styled.li`
  display: flex;
  margin-right: 2.5rem;
`

export const Nav = styled.nav<NavProps>`
  align-items: center;
  background: transparent;
  backdrop-filter: saturate(100%) blur(10px);
  display: flex;
  font-size: clamp(15px,1.3rem,30px);
  height: 80px;
  justify-content: center;
  top: ${({ isVisible }) => ( isVisible ? '0' : '-80px' )};
  transition: 0.6s all ease;
  position: fixed;
  width: 100%;
  z-index: 10;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 40px;
`

export const NavLogo = styled.div`
  color: #ffffff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled.div<NavLinkProps>`
  align-items: center;
  border-bottom: ${({ isCurrentPage }) => (isCurrentPage ? '2px solid #ffffff' : 'none' )};
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.8rem;
  }
`

export const StyledHomeIcon = styled(HomeIcon)`
  width: 40px;
  height: 40px;

  &:hover {
    fill: #eaa9be;
  }
`

export const StyledMenuIcon = styled(MenuIcon)`
  width: 40px;
  height: 40px;
`

export const Underline = styled.div`
  height: 2px;
`
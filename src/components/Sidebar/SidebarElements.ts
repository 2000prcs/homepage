import styled from 'styled-components';
import { SidebarContainerProps, LinkTextProps } from './ElementsProps';
import CloseIcon from '../../icons/x.svg';

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(16, 46, 65, 0.95);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const IconContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const StyledCloseIcon = styled(CloseIcon)`
  color: #ffffff;
  width: 40px;
  height: 40px;
`

export const SidebarWrapper = styled.div`
  color: #ffffff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const Link = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 600;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
`

export const LinkText = styled.div<LinkTextProps>`
  border-bottom: ${({ isCurrentPage }) => (isCurrentPage ? '2px solid #ffffff' : 'none' )};
`

export const Underline = styled.div`
  height: 3px;
`
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  MobileIcon,
  StyledHomeIcon,
  StyledMenuIcon
} from './NavbarElements';
import NavItem from './NavItem';
import debounce from '../../helpers/debounce';

type NavBarProps = {
  currentPage: number,
  parallaxRef: {
    [key: string]: any
  },
  scrollPage: (pageNumber: number) => void,
  toggle: () => void
}

const NavBar = ({ currentPage, parallaxRef, scrollPage, toggle }: NavBarProps) => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            pageName
            pageNumber
          }
        }
      }
    }
  `);
  const navData = data.allDataJson.edges.map((item: { node: object }) => item.node);

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPosition = parallaxRef.current.container.scrollTop;
    setIsVisible((prevScrollPosition > currentScrollPosition && prevScrollPosition - currentScrollPosition > 70) || currentScrollPosition < 10);
    setPrevScrollPosition(currentScrollPosition);
  }, 100);

  useEffect(() => {
    if(parallaxRef.current && parallaxRef.current.container) {
      parallaxRef.current.container.onscroll = () => { handleScroll(); };
    }
  }, [isVisible, prevScrollPosition, handleScroll, parallaxRef]);

  return (
      <Nav isVisible={isVisible}>
        <NavbarContainer>
          <NavLogo onClick={() => scrollPage(0)}>
            <StyledHomeIcon />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <StyledMenuIcon />
          </MobileIcon>
          <NavMenu>
            {navData.map((data: { pageName: string, pageNumber: number }) =>
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
  )
}

export default NavBar;

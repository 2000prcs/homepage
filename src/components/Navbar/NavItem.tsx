import React, { useState } from 'react';
import { Item, NavLink, Underline } from './NavbarElements';
import HoverSpring from '../../helpers/HoverSpring';

type NavItemProps = {
  isCurrentPage: boolean,
  pageName: string,
  pageNumber: number,
  scrollPage: (pageNumber: number) => void
}

const NavItem = ({ isCurrentPage, pageName, pageNumber, scrollPage }: NavItemProps) => {
  const [isHover, setIsHover] = useState(false);  

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Item>
      <HoverSpring isHover={isHover}>
        {(props) => (
          <NavLink
            isCurrentPage={isCurrentPage}
            onClick={() => scrollPage(pageNumber)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {pageName}
            <Underline style={props}></Underline>
          </NavLink>
        )}
      </HoverSpring>
    </Item>
  );
}

export default NavItem;
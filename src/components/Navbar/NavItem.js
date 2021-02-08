import React, { useState } from 'react';
import HoverSpring from '../HoverSpring';
import { Item, NavLinks, Underline } from './NavbarElements';

const NavItem = ({ isCurrentPage, pageName, pageNumber, scrollPage }) => {
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
          <NavLinks
            isCurrentPage={isCurrentPage}
            onClick={() => scrollPage(pageNumber)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {pageName}
          <Underline style={props}></Underline>
          </NavLinks>
        )}
      </HoverSpring>
    </Item>
  );
}

export default NavItem;
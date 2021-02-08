import React, { useState } from 'react';
import { Link, Underline } from './SidebarElements';
import HoverSpring from '../HoverSpring';

const SidebarLink = ({ isCurrentPage, pageName, pageNumber, scrollPage, toggle }) => {
  const [isHover, setIsHover] = useState(false);

  const handleClick = (pageNumber) => {
    scrollPage(pageNumber);
    toggle();
  }

  const handleMouseEnter  = () => {
    setIsHover(true);
  }

  const handleMouseLeave  = () => {
    setIsHover(false);
  }

  return (
      <HoverSpring isHover={isHover}>
        {(props) => (
            <Link
              onClick={() => handleClick(pageNumber)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                {pageName}
                <Underline style={props}></Underline>  
              </div>
            </Link>
        )}
      </HoverSpring>
  ); 
}

export default SidebarLink;
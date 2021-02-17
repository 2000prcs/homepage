import React, { useState } from 'react';
import { Link, LinkText, Underline } from './SidebarElements';
import HoverSpring from '../../helpers/HoverSpring';

type SidebarLinkProps = {
  isCurrentPage: boolean,
  pageName: string,
  pageNumber: number,
  scrollPage: (pageNumber: number) => void,
  toggle: () => void
}

const SidebarLink = ({ isCurrentPage, pageName, pageNumber, scrollPage, toggle }: SidebarLinkProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleClick = (pageNumber: number) => {
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
              <LinkText isCurrentPage={isCurrentPage}>
                {pageName}
                <Underline style={props}></Underline>  
              </LinkText>
            </Link>
        )}
      </HoverSpring>
  ); 
}

export default SidebarLink;
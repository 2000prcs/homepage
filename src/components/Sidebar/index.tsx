import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SidebarLink from './SidebarLink';
import {
  IconContainer,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  StyledCloseIcon,
} from './SidebarElements';

type SidebarProps = {
  currentPage: number,
  isOpen: boolean,
  scrollPage: (pageNumber: number) => void,
  toggle: () => void
}

const Sidebar = ({ currentPage, isOpen, scrollPage, toggle }: SidebarProps) => {
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

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <IconContainer onClick={toggle}>
        <StyledCloseIcon />
      </IconContainer>
      <SidebarWrapper>
        <SidebarMenu>
          {navData.map((data: { pageName: string, pageNumber: number }) => 
            <SidebarLink
              isCurrentPage={currentPage === data.pageNumber}
              pageName={data.pageName}
              pageNumber={data.pageNumber} 
              toggle={toggle}
              scrollPage={scrollPage}
              key={data.pageNumber}
            />
          )}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;

import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
    </Nav>
  );
};

export default Header

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

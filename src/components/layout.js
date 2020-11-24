import React from 'react';
// import Header from "./Header"
import styled from 'styled-components';
import NavBar from './Navbar';


const Layout = ({ children }) => {
  return (
    <>
        <NavBar />
        <main>{children}</main>
    </>
  )
}

export default Layout

import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <>
        <Sidebar />
        <NavBar />
        <main>{children}</main>
    </>
  )
}

export default Layout

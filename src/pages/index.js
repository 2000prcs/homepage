import React from 'react';
import SEO from '../components/seo';
// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
import Home from '../components/Home';

import '../styles/globalStyles.css';

const App = () => {
  return (
  <>
    <SEO title="App" />
    {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
    {/* <Navbar toggle={toggle} /> */}
    <Home />
  </>
  )
};

export default App;

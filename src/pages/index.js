import React, { useState } from 'react';
import SEO from '../components/seo';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import '../styles/globalStyles.css';

const Home = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {  
    setIsOpen(!isOpen);
  };
  
  return (
  <>
    <SEO title="Home" />
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <div className="content">  
      <h1>Hi I'm Mo</h1>
      <h1>I'm a Software Engineer</h1>
    </div>
  </>
  )
};

export default Home;

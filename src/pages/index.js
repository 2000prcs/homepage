import React, { useState } from 'react';
import SEO from '../components/seo';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

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
    <HeroSection />
  </>
  )
};

export default Home;

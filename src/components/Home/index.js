import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import ProfileSection from '../AboutSection';
import PortfolioSection from '../PortfolioSection';
import ContactSection from '../ContactSection';

import star from '../../icons/star.svg';

const Home = () => {
  const parallaxRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const scrollPage = (pageNumber) => {
    parallaxRef.current.scrollTo(pageNumber);
  };

  const toggle = () => {  
    setIsOpen(!isOpen);
  };

  return ( 
    <>
    <Navbar toggle={toggle} scrollPage={scrollPage} />
    <Sidebar isOpen={isOpen} toggle={toggle} scrollPage={scrollPage} />
    <Parallax pages={4} ref={parallaxRef}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={4}
        style={{ backgroundColor: '#04B2D9', backgroundSize: 'cover' }}
      /> 
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#049DD9' }} />
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#0367A6' }} />
      <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#012340' }} />
      <ParallaxLayer
        offset={0.5}
        speed={0.8}
        style={{ opacity: 0.1 }}
      >
        <img src={star} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        <img src={star} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        <HeroSection scrollPage={scrollPage} pageNumber={1} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        onClick={() => {parallaxRef.current.scrollTo(2)}}
      >
        <ProfileSection />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.1}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => {parallaxRef.current.scrollTo(3)}}
      >
        <PortfolioSection />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={-0}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => {parallaxRef.current.scrollTo(0)}}
      >
        <ContactSection />
      </ParallaxLayer>
    </Parallax>
    </>
  );
};

export default Home;

import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import ProfileSection from '../AboutSection';
import PortfolioSection from '../PortfolioSection';
import ContactSection from '../ContactSection';

import FishOneImg from '../../images/yellow_fish.svg';
import FishGroupImg from '../../images/fish_cluster.svg';
import JellyfishImg from '../../images/jellyfish.svg';
import CrabImg from '../../images/crab.svg';
import DolphinImg from '../../images/dolphin.svg';
import FishTwoImg from '../../images/fish2.svg';
import OctopusImg from '../../images/octopus.svg';
import RayImg from '../../images/ray.svg';
import SeaHorseImg from '../../images/sea_horse.svg';
import StarFishImg from '../../images/starfish.svg';
import SquidImg from '../../images/squid.svg';
import TurtleImg from '../../images/turtle.svg';
import WaleImg from '../../images/wale.svg';

import BackgroundImg from '../../images/underwater.png';

const Home = () => {
  const parallaxRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const scrollPage = (pageNumber) => {
    parallaxRef.current.scrollTo(pageNumber);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const commonStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
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
        style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}
      />
      <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#04b2d9', opacity: 0.6 }} />
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#049dd9', opacity: 0.6 }} />
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#0367a6', opacity: 0.6 }} />
      <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#012340', opacity: 0.6 }} />
      <ParallaxLayer offset={0} speed={-0.3}>
        <FishGroupImg style={{ display: 'block', width: '50%', marginLeft: '45%', marginTop: '-25%'}} />
        <TurtleImg style={{ display: 'block', width: '50%', marginLeft: '70%', marginTop: '-20%' }} />
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={0.8}
      >
        <FishOneImg style={{ display: 'block', width: '50%', marginLeft: '-8%' }} />
        <FishTwoImg style={{ display: 'block', width: '50%', marginLeft: '-5%', marginTop: '-50%' }} />
        <WaleImg style={{ display: 'block', width: '50%', marginLeft: '7%', marginTop: '50%' }} />
        <DolphinImg style={{ display: 'block', width: '50%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2}>
        <RayImg style={{ display: 'block', width: '50%', marginLeft: '17%', marginTop: '-40%' }} />
        <SeaHorseImg style={{ display: 'block', width: '50%', marginLeft: '-15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8}>
        <CrabImg style={{ display: 'block', width: '50%', marginLeft: '55%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5}>
        <OctopusImg style={{ display: 'block', width: '50%', marginLeft: '70%', marginTop: '-20%' }} />
        <JellyfishImg style={{ display: 'block', width: '50%', marginLeft: '40%', marginTop: '-10%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1}>
        <StarFishImg style={{ display: 'block', width: '50%', marginLeft: '60%' }} />
        <SquidImg style={{ display: 'block', width: '50%', marginLeft: '40%', marginTop: '-20%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4}>
        <FishOneImg style={{ display: 'block', width: '50%', marginLeft: '5%' }} />
        <FishOneImg style={{ display: 'block', width: '55%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <FishGroupImg style={{ width: '50%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={commonStyle}
      >
        <HeroSection scrollPage={scrollPage} pageNumber={1} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={commonStyle}
      >
        <ProfileSection />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.1}
        style={commonStyle}
      >
        <PortfolioSection />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={-0}
        style={commonStyle}
      >
        <ContactSection />
      </ParallaxLayer>
    </Parallax>
    </>
  );
};

export default Home;

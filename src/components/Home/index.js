import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import ProfileSection from '../AboutSection';
import PortfolioSection from '../PortfolioSection';
import ContactSection from '../ContactSection';

import FishOneImg from '../../images/fish1.svg';
import FishTwoImg from '../../images/fish2.svg';
import TwoFishesImg from '../../images/two_fishes.svg';
import FishClusterImg from '../../images/fish_cluster.svg';
import JellyfishImg from '../../images/jellyfish.svg';
import CrabImg from '../../images/crab.svg';
import DolphinImg from '../../images/dolphin.svg';
import OctopusImg from '../../images/octopus.svg';
import SeaHorseImg from '../../images/sea_horse.svg';
import StarFishImg from '../../images/starfish.svg';
import SquidImg from '../../images/squid.svg';
import TurtleImg from '../../images/turtle.svg';
import WaleImg from '../../images/wale.svg';
import EllImg from '../../images/ell.svg';
import LobsterImg from '../../images/lobster.svg';
import AnglerFishImg from '../../images/angler_fish.svg';
import FuguImg from '../../images/fugu.svg';
import BabySharkImg from '../../images/baby_shark.svg';
import MermaidOneImg from '../../images/mermaid1.svg';
import MermaidTwoImg from '../../images/mermaid2.svg';
import MermaidThreeImg from '../../images/mermaid3.svg';
import MermaidFourImg from '../../images/mermaid4.svg';

import BackgroundImg from '../../images/underwater.png';

const Home = () => {
  const parallaxRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollPage = (pageNumber) => {
    setCurrentPage(pageNumber);
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
    <Navbar currentPage={currentPage} toggle={toggle} scrollPage={scrollPage} />
    <Sidebar currentPage={currentPage} isOpen={isOpen} toggle={toggle} scrollPage={scrollPage} />
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
        <FishClusterImg style={{ display: 'block', width: '50%', marginLeft: '55%', marginTop: '-12%'}} />
        <TwoFishesImg style={{ display: 'block', width: '50%', marginLeft: '60%', marginTop: '-30%'}} />
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={0.3}>
        <TurtleImg style={{ display: 'block', width: '50%', marginLeft: '0%', marginTop: '10%' }} />
        <FuguImg style={{ display: 'block', width: '50%', marginLeft: '5%', marginTop: '-30%' }} />
        <DolphinImg style={{ display: 'block', width: '50%', marginLeft: '0%', marginTop: '70%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.3} speed={0.8}>
        <FishOneImg style={{ display: 'block', width: '50%', marginLeft: '-5%', marginTop: '15%' }} />
        <FishTwoImg style={{ display: 'block', width: '50%', marginLeft: '50%', marginTop: '-23%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.5} speed={0.5}>
        <WaleImg style={{ display: 'block', width: '50%', marginLeft: '5%', marginTop: '10%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2}>
        <SeaHorseImg style={{ display: 'block', width: '50%', marginLeft: '50%', marginTop: '35%' }} />
        <BabySharkImg style={{ display: 'block', width: '50%', marginLeft: '30%', marginTop: '-30%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8}>
        <CrabImg style={{ display: 'block', width: '50%', marginLeft: '-15%', marginTop: '-21%' }} />
        <MermaidTwoImg style={{ display: 'block', width: '15%', marginLeft: '5%', marginTop: '-25%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5}>
        <OctopusImg style={{ display: 'block', width: '50%', marginLeft: '30%', marginTop: '15%' }} />
        <StarFishImg style={{ display: 'block', width: '50%', marginLeft: '40%', marginTop: '10%' }} />
        <MermaidThreeImg style={{ display: 'block', width: '15%', marginLeft: '70%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1}>
        <SquidImg style={{ display: 'block', width: '50%', marginLeft: '40%', marginTop: '2%' }} />
        <AnglerFishImg style={{ display: 'block', width: '50%', marginLeft: '0%', marginTop: '5%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4}>
        <MermaidFourImg style={{ display: 'block', width: '15%', marginLeft: '60%' }} />
        <EllImg style={{ display: 'block', width: '50%', marginLeft: '35%', marginTop: '8%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.3}>
        <LobsterImg style={{ display: 'block', width: '50%', marginLeft: '10%', marginTop: '0%' }} />
        <MermaidOneImg style={{ display: 'block', width: '15%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.5} speed={-0.4}>
        <JellyfishImg style={{ display: 'block', width: '50%', marginLeft: '70%' }} />
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

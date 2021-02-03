import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import ProfileSection from '../AboutSection';
import PortfolioSection from '../PortfolioSection';
import ContactSection from '../ContactSection';

import FishOneImg from '../../images/yellow_fish.svg';
import FishTwoImg from '../../images/fish2.svg';
import TwoFishesImg from '../../images/two_fishes.svg';
import FishGroupImg from '../../images/fish_cluster.svg';
import JellyfishImg from '../../images/jellyfish.svg';
import CrabImg from '../../images/crab.svg';
import DolphinImg from '../../images/dolphin.svg';
import OctopusImg from '../../images/octopus.svg';
import RayImg from '../../images/ray.svg';
import SeaHorseImg from '../../images/sea_horse.svg';
import StarFishImg from '../../images/starfish.svg';
import SquidImg from '../../images/squid.svg';
import TurtleImg from '../../images/turtle.svg';
import WaleImg from '../../images/wale.svg';
import EllImg from '../../images/ell.svg';
import LobsterImg from '../../images/lobster.svg';
import AnglerFishImg from '../../images/angler_fish.svg';
import FuguImg from '../../images/fugu.svg';
import AmmoniteImg from '../../images/ammonite.svg';
import BabySharkImg from '../../images/baby_shark.svg';
import MermaidOneImg from '../../images/mermaid1.svg';
import MermaidTwoImg from '../../images/mermaid2.svg';
import MermaidThreeImg from '../../images/mermaid3.svg';
import MermaidFourImg from '../../images/mermaid4.svg';
import MermaidFiveImg from '../../images/mermaid5.svg';
import MermaidSixImg from '../../images/mermaid6.svg';


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
        <FishGroupImg style={{ display: 'block', width: '50%', marginLeft: '45%', marginTop: '-12%'}} />
        <TwoFishesImg style={{ display: 'block', width: '50%', marginLeft: '45%', marginTop: '-25%'}} />
        <TurtleImg style={{ display: 'block', width: '50%', marginLeft: '70%', marginTop: '-33%' }} />
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={0.8}
      >
        <FishOneImg style={{ display: 'block', width: '50%', marginLeft: '-8%' }} />
        <FishTwoImg style={{ display: 'block', width: '50%', marginLeft: '-5%', marginTop: '-23%' }} />
        <FuguImg style={{ display: 'block', width: '50%', marginLeft: '-5%', marginTop: '-75%' }} />
        <WaleImg style={{ display: 'block', width: '50%', marginLeft: '50%', marginTop: '37%' }} />
        <DolphinImg style={{ display: 'block', width: '50%', marginLeft: '15%', marginTop: '16%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2}>
        <RayImg style={{ display: 'block', width: '50%', marginLeft: '17%', marginTop: '-49%' }} />
        <MermaidOneImg style={{ display: 'block', width: '15%', marginLeft: '48%', marginTop: '-17%' }} />        
        <SeaHorseImg style={{ display: 'block', width: '50%', marginLeft: '-15%' }} />
        <BabySharkImg style={{ display: 'block', width: '50%', marginLeft: '25%', marginTop: '-15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8}>
        <CrabImg style={{ display: 'block', width: '50%', marginLeft: '8%', marginTop: '-21%' }} />
        <MermaidTwoImg style={{ display: 'block', width: '15%', marginLeft: '18%', marginTop: '-10%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5}>
        <OctopusImg style={{ display: 'block', width: '50%', marginLeft: '30%', marginTop: '-19%' }} />
        <MermaidFiveImg style={{ display: 'block', width: '15%', marginLeft: '70%', marginTop: '-13%' }} />
        <MermaidThreeImg style={{ display: 'block', width: '15%', marginLeft: '21%', marginTop: '5%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1}>
        <StarFishImg style={{ display: 'block', width: '50%', marginLeft: '40%', marginTop: '-12%' }} />
        <SquidImg style={{ display: 'block', width: '50%', marginLeft: '40%', marginTop: '2%' }} />
        <AnglerFishImg style={{ display: 'block', width: '50%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4}>
        <EllImg style={{ display: 'block', width: '50%', marginLeft: '35%', marginTop: '13%' }} />
        <LobsterImg style={{ width: '50%' }} />
        <MermaidSixImg style={{ width: '15%', marginLeft: '25%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.5} speed={-0.4}>
        <JellyfishImg style={{ width: '50%', marginLeft: '0%' }} />
        <AmmoniteImg style={{ width: '50%', marginLeft: '-50%' }} />
        <MermaidFourImg style={{ display: 'block', width: '15%', marginLeft: '58%', marginTop: '-35%'  }} />
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

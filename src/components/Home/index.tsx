import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';
import HeroSection from '../HeroSection/index';
import AboutSection from '../AboutSection/index';
import PortfolioSection from '../PortfolioSection/index';
import ContactSection from '../ContactSection/index';
import BackgroundImg from '../../images/underwater.png';
import {
  StyledFishClusterImg,
  StyledTwoFishesImg,
  StyledTurtleImg,
  StyledFuguImg,
  StyledDolphinImg,
  StyledFishOneImg,
  StyledFishTwoImg,
  StyledWaleImg,
  StyledSeaHorseImg,
  StyledBabySharkImg,
  StyledCrabImg,
  StyledMermaidTwoImg,
  StyledSquidImg,
  StyledAnglerFishImg,
  StyledOctopusImg,
  StyledStarFishImg,
  StyledMermaidThreeImg,
  StyledJellyfishImg,
  StyledMermaidFourImg,
  StyledEllImg,
  StyledLobsterImg,
  StyledMermaidOneImg
} from './HomeElements';

const Home = () => {
  const parallaxRef = useRef<Parallax>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    parallaxRef.current.scrollTo(pageNumber);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const parallaxLayerCommonStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  };

  return ( 
    <>
    <Navbar currentPage={currentPage} parallaxRef={parallaxRef} scrollPage={scrollPage} toggle={toggle} />
    <Sidebar currentPage={currentPage} isOpen={isOpen} scrollPage={scrollPage} toggle={toggle} />
    <Parallax pages={4} ref={parallaxRef}>
      <ParallaxLayer
        factor={4}
        offset={0}
        speed={0}
        style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}
      />
      <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#04b2d9', opacity: 0.6 }} />
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#049dd9', opacity: 0.6 }} />
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#0367a6', opacity: 0.6 }} />
      <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#012340', opacity: 0.6 }} />
      <ParallaxLayer offset={0} speed={-0.3}>
        <StyledFishClusterImg />
        <StyledTwoFishesImg />
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={0.3}>
        <StyledTurtleImg />
        <StyledFuguImg />
        <StyledDolphinImg />
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={0.8}>
      <StyledFishOneImg />
      <StyledFishTwoImg />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={0.5}>
        <StyledWaleImg />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2}>
        <StyledSeaHorseImg />
        <StyledBabySharkImg />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8}>
        <StyledCrabImg />
        <StyledMermaidTwoImg />
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={-0.1}>
        <StyledSquidImg />
        <StyledAnglerFishImg />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5}>
        <StyledOctopusImg />
        <StyledStarFishImg />
        <StyledMermaidThreeImg />
      </ParallaxLayer>
      <ParallaxLayer offset={2.5} speed={-0.4}>
        <StyledJellyfishImg />
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0.4}>
        <StyledMermaidFourImg />
        <StyledEllImg />
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0.3}>
        <StyledLobsterImg />
        <StyledMermaidOneImg />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={parallaxLayerCommonStyle}
      >
        <HeroSection />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={parallaxLayerCommonStyle}
      >
        <AboutSection />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.1}
        style={parallaxLayerCommonStyle}
      >
        <PortfolioSection />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={-0}
        style={parallaxLayerCommonStyle}
      >
        <ContactSection />
      </ParallaxLayer>
    </Parallax>
    </>
  );
};

export default Home;

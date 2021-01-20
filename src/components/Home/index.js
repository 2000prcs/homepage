import React, { useRef } from 'react';
// import Video from '../../videos/video.mp4';
import Image from '../Image';
import { HeroContainer, HeroBg, VideoBg } from './HomeElements';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import HeroSection from '../HeroSection';
import ProfileSection from '../ProfileSection';
import PortfolioSection from '../PortfolioSection';
import ContactSection from '../ContactSection';
// import image from '../../images/sky_background.jpg';

//import svg from '../../images/flowers.svg';
//import bg from '../../images/sky_background.jpg'
import star from '../../images/star.svg';

const Home = () => {
  const parallaxRef = useRef();
  const url = (name) => `../../images/${name}`;

  return (
    // <HeroContainer>
      // <HeroBg>
        // {/* <VideoBg autoplay loop muted src={Video} type="video/mp4" /> */}
    <Parallax pages={4} ref={parallaxRef}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={4}
        style={{ backgroundColor: '#04B2D9', backgroundSize: 'cover' }}
      /> 
      {/* <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#24292e' }} /> */}
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
        onClick={() => {parallaxRef.current.scrollTo(1)}}
      >
        <HeroSection />
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
      // </HeroBg>
    // </HeroContainer>
  );
};

export default Home;

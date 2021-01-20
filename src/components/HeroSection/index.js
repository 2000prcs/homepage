import React, { useRef } from 'react';
// import Video from '../../videos/video.mp4';
import Image from '../Image';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
// import image from '../../images/sky_background.jpg';

import svg from '../../images/flowers.svg';
import bg from '../../images/sky_background.jpg'

const HeroSection = () => {
  const parallaxRef = useRef();
  const url = (name) => `../../images/${name}`;

  return (
    // <HeroContainer>
      // <HeroBg>
        // {/* <VideoBg autoplay loop muted src={Video} type="video/mp4" /> */}
    <Parallax pages={3} ref={parallaxRef}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{ backgroundImage: url('../../images/sky_background.jpg'), backgroundSize: 'cover' }}
      > 
        <img src={bg} style={{ width: '100%' }} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => {parallaxRef.current.scrollTo(1)}}
      >
        <div className="content">
          <h1>Hi I'm Mo</h1>
          <h1>I'm a Software Engineer</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => {parallaxRef.current.scrollTo(2)}}
      >
        <img src={svg} style={{ width: '50%' }} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={-0}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => {parallaxRef.current.scrollTo(0)}}
      >
        <img src={svg} style={{ width: '40%' }} />
      </ParallaxLayer>
    </Parallax>
      // </HeroBg>
    // </HeroContainer>
  );
};

export default HeroSection;

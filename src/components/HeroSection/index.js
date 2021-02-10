import React from 'react';
import { Container } from './HeroSectionElements';

const HeroSection = () => {
  return (
    <Container>
      <h1>Hi I'm Mo <span role="img" aria-label="emoji">😊👋</span></h1>
      <h1>I'm a Software Engineer <span role="img" aria-label="emoji">💻</span></h1>
    </Container>
  );
};

export default HeroSection;
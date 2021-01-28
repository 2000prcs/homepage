import React from 'react';
import { Container, Heading, Icon } from './HeroSectionElements';

const HeroSection = ({ scrollPage, pageNumber }) => {
  return (
    <Container>
      <Heading>Hi I'm Mo 😊👋</Heading>
      <Heading>I'm a Software Engineer 💻</Heading>
    </Container>
  );
};

export default HeroSection;
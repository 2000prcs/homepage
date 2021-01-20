import React from 'react';
import { Container, Heading, Icon } from './HeroSectionElements';

import arrow from '../../images/arrow-down-circle.svg';

const HeroSection = ({ scrollPage, pageNumber }) => {
  return (
    <Container>
      <Heading>Hi I'm Mo 😊👋</Heading>
      <Heading>I'm a Software Engineer 💻</Heading>
      <Icon onClick={() => {scrollPage(pageNumber)}}>
        <img src={arrow} />
      </Icon>
    </Container>
  );
};

export default HeroSection;
import React from 'react';
import { Container, Content, Intro, Row } from './AboutSectionElements';
import AboutBlock from './AboutBlock';

import pets from '../../images/pets.jpg';

const AboutSection = () => {
  const AboutDataFirstRow  = [ 'Cat & Dog', 'Game', 'Travel'];
  const AboutDataSecondRow = [ 'Party', 'Piano', 'Book' ];

  return (
    <Container>
      <Intro>
        I was born and raised in South Korea, and I moved to the US in 2014.
        Choosing software engineer as my career was because I love seeing people's happy faces while they're experiencing my creations.
        My motivation and inspiration often comes from people around me.
      </Intro>
      <Content>
        <Row>
          {AboutDataFirstRow.map(data => <AboutBlock text={data} src={pets} />)}
        </Row>
        <Row>
          {AboutDataSecondRow.map(data => <AboutBlock text={data} src={pets} />)}
        </Row>
      </Content>
    </Container>
  );
};

export default AboutSection;
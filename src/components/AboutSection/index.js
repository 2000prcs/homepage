import React from 'react';
import { Block, Container, Content, Intro, Row } from './AboutSectionElements';

// import svg from '../../images/flowers.svg';

const AboutSection = () => {

  return (
    // <img src={svg} style={{ width: '50%' }} />
    <Container>
      <Intro>
        I was born and raised in South Korea, and I moved to the US in 2014.
        Choosing software engineer as my career was because I love seeing people's happy faces while they're experiencing my creations.
        My motivation and inspiration often comes from people around me.
      </Intro>
      <Content>
        <Row>
          <Block>
            Cat & Dog
          </Block>
          <Block>
            Game
          </Block>
          <Block>
            Travel
          </Block>
        </Row>
        <Row>
          <Block>
            Party
          </Block>
          <Block>
            Piano
          </Block>
          <Block>
            Book
          </Block>
        </Row>
      </Content>
    </Container>
  );
};

export default AboutSection;
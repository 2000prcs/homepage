import React from 'react';
import { Container, Content, Intro, Technologies, Title, Paragraph } from './AboutSectionElements';
import AboutRows  from './AboutRows';
import AboutData from './AboutData';

const AboutSection = () => {
  return (
    <Container>
      <Intro>
        <Paragraph>I was born and raised in South Korea 🇰🇷, and I moved to the US in 2014.</Paragraph>
        <Paragraph>Choosing software engineer as my career was because I love seeing people's happy faces while they're experiencing my creations.</Paragraph>
        <Paragraph>My motivation and inspiration often comes from people around me.</Paragraph>
      </Intro>
      <Content>
        <Title>
          Technologies I've worked with 💎
        </Title>
        <Technologies>
          {AboutData.map(rowData => <AboutRows rowData={rowData} />)}
        </Technologies>
        <Title>
          What I love ❤️
        </Title>
          My furry babies
          Game
          Travel
          Music & Dance
          Piano
          Food
          Books
      </Content>
    </Container>
  );
};

export default AboutSection;
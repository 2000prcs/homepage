import React from 'react';
import { Container, Content, Intro, Title, Paragraph } from './AboutSectionElements';
import AboutRows  from './AboutRows';
import AboutData from './AboutData';

const AboutSection = () => {
  return (
    <Container>
      <Intro>
        <Paragraph>I was born and raised in South Korea 🇰🇷, and I moved to the US in 2014.</Paragraph>
        <Paragraph>Choosing software engineer as my career was because I love seeing people's happy faces while they're experiencing my creations.</Paragraph>
        {/* My motivation and inspiration often comes from people around me. */}
      </Intro>
      <Content>
        <Title>
          What I love ❤️
        </Title>
        {AboutData.map(rowData => <AboutRows rowData={rowData} />)}
      </Content>
    </Container>
  );
};

export default AboutSection;
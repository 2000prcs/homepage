import React from 'react';
import AboutRow  from './AboutRow';
import { Container, Content, Intro, List, Title, Paragraph } from './AboutSectionElements';
import { TechnologiesData, InterestsData } from './AboutData';

const AboutSection = () => {
  return (
    <Container>
      <Intro>
        <Title>안녕하세요!</Title>
        <Paragraph>Born and raised in South Korea 🇰🇷, moved to the US 🇺🇸 in 2014.</Paragraph>
        <Paragraph>I love seeing people's happy faces while they're experiencing my creations - it's what led me to be a Software Engineer.</Paragraph>
        <Paragraph>My motivation and inspiration often comes from people around me.</Paragraph>
      </Intro>
      <Content>
        <Title>
          Technologies I've worked with 💎
        </Title>
        <List>
          {TechnologiesData.map(rowData => <AboutRow rowData={rowData} />)}
        </List>
        <Title>
          What I love ❤️
        </Title>
        <List>
          {InterestsData.map(rowData => <AboutRow rowData={rowData} />)}
        </List>
      </Content>
    </Container>
  );
};

export default AboutSection;
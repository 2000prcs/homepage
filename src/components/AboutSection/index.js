import React from 'react';
import AboutRows  from './AboutRows';
import {
  Container, Content, Interests, Intro, Technologies, Title, Paragraph
} from './AboutSectionElements';
import { TechnologiesData, InterestsData } from './AboutData';

const AboutSection = () => {
  return (
    <Container>
      <Intro>
        <Paragraph>안녕하세요! Born and raised in South Korea 🇰🇷, moved to the US in 2014.</Paragraph>
        <Paragraph>I love seeing people's happy faces while they're experiencing my creations - it's what led me to be a Software Engineer.</Paragraph>
        <Paragraph>My motivation and inspiration often comes from people around me.</Paragraph>
      </Intro>
      <Content>
        <Title>
          Technologies I've worked with 💎
        </Title>
        <Technologies>
          {TechnologiesData.map(rowData => <AboutRows rowData={rowData} withIcon />)}
        </Technologies>
        <Title>
          What I love ❤️
        </Title>
        <Interests>
          {InterestsData.map(rowData => <AboutRows rowData={rowData} />)}
        </Interests>
      </Content>
    </Container>
  );
};

export default AboutSection;
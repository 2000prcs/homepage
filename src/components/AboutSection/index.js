import React from 'react';
import AboutRow  from './AboutRow';
import { Container, Content, Intro, List, Title, Paragraph } from './AboutSectionElements';
import { interests, technologies, paragraphs } from './AboutData';

const AboutSection = () => {
  return (
    <Container>
      <Intro>
        <Title>안녕하세요!</Title>
        {paragraphs.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
      </Intro>
      <Content>
        <Title>
          Technologies I've worked with <span role="img" aria-label="emoji">💎</span>
        </Title>
        <List>
          {technologies.map((rowData, index) => <AboutRow rowData={rowData} key={index} />)}
        </List>
        <Title>
          What I love <span role="img" aria-label="emoji">❤️</span>
        </Title>
        <List>
          {interests.map((rowData, index) => <AboutRow rowData={rowData} key={index} />)}
        </List>
      </Content>
    </Container>
  );
};

export default AboutSection; 
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AboutRow  from './AboutRow';
import { Container, Content, Intro, List, Title, Paragraph } from './AboutSectionElements';

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson(filter: {pageName: {eq: "About"}}) {
        edges {
          node {
            paragraphs
            technologies
            interests
          }
        }
      }
    }
  `);
  const aboutData = data.allDataJson.edges.map((item: { node: object }) => item.node);

  return (
    <Container>
      <Intro>
        <Title>안녕하세요!</Title>
        {aboutData[0].paragraphs.map((paragraph: string) => <Paragraph key={paragraph}>{paragraph}</Paragraph>)}
      </Intro>
      <Content>
        <Title>
          Technologies I've worked with <span role="img" aria-label="emoji">💎</span>
        </Title>
        <List>
          {aboutData[0].technologies.map((rowData: string[], index: number) => <AboutRow rowData={rowData} key={index} />)}
        </List>
        <Title>
          What I love <span role="img" aria-label="emoji">❤️</span>
        </Title>
        <List>
          {aboutData[0].interests.map((rowData: string[], index: number) => <AboutRow rowData={rowData} key={index} />)}
        </List>
      </Content>
    </Container>
  );
};

export default AboutSection; 
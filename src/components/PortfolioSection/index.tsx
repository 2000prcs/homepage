import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Content, Title } from './PortfolioSectionElements';
import PortfolioBlock from './PortfolioBlock';

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson(filter: {pageName: {eq: "Portfolio"}}) {
        edges {
          node {
            content {
              name
              description
              imageName
              gifName
              repo
              technologies
            }
          }
        }
      }
    }
  `);
  const portfolioData = data.allDataJson.edges.map((item: { node: object }) => item.node);

  return (
    <Container>
      <Title>
        My Work
      </Title>
      <Content>
        {portfolioData[0].content.map((
          data: { 
            description: string, 
            gifName: string,
            imageName: string,
            name: string,
            repo: string,
            technologies: string
          }) => 
          <PortfolioBlock
            description={data.description}
            gifName={data.gifName}
            imageName={data.imageName}
            name={data.name}
            repo={data.repo}
            technologies={data.technologies}
            key={data.name}
          />
        )}
      </Content>
    </Container>
  );
};

export default PortfolioSection;
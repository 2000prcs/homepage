import React from 'react';
import { Container, Content, Title } from './PortfolioSectionElements';
import PortfolioBlock from './PortfolioBlock';
import PortfolioData from './PortfolioData';

const PortfolioSection = () => {
  return (
    <Container>
      <Title>
        My Work
      </Title>
      <Content>
        {PortfolioData.map(data => 
          <PortfolioBlock
            description={data.description}
            gif={data.gif}
            image={data.image}
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
import React from 'react';
import { Block, Container, Content, Title } from './PortfolioSectionElements';
import PortfolioData from './PortfolioData';

const PortfolioSection = () => {

  return (
  <Container>
    <Title>
      My Work
    </Title>
    <Content>
      {PortfolioData.map(data => <Block data={data} />)}
    </Content>
  </Container>
  );
};

export default PortfolioSection;
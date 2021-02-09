import React from 'react';
import {
  Block,
  BlockContainer,
  Description, 
  Name,
  SideContent,
  StyledGithubIcon,
  Technologies
} from './PortfolioSectionElements';

const PortfolioBlock = ({ description, gif, image, name, technologies, repo }) => {
  return (
    <BlockContainer>
        <Block image={image} gif={gif} />
        <SideContent>
          <Name>{name}</Name>
          <Technologies>{technologies}</Technologies>
          <Description>{description}</Description>
          <a href={repo} target="_blank" rel="noreferrer">
            <StyledGithubIcon />
          </a>
        </SideContent>
    </BlockContainer>
  );
};

export default PortfolioBlock;
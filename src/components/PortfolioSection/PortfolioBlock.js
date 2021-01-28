import React from 'react';
import {
  Block, BlockContainer, SideContent, Description, Name, Technologies
} from './PortfolioSectionElements';

import githubIcon from '../../icons/github.svg';

const PortfolioBlock = ({ name, description, gif, image, technologies, repo }) => {
  return (
    <BlockContainer>
        <Block image={image} gif={gif} />
        <SideContent>
          <Name>{name}</Name>
          <Technologies>{technologies}</Technologies>
          <Description>{description}</Description>
          <a href={repo}>
            <img src={githubIcon} style={{ width: '30px' }}/>
          </a>
        </SideContent>
    </BlockContainer>
  );
};

export default PortfolioBlock;
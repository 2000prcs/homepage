import React from 'react';
import {
  Block, BlockContainer, TopContent, SideContent, Overlay, Description, Name, Technologies
} from './PortfolioSectionElements';

const PortfolioBlock = ({ name, description, gif, image, technologies }) => {
  return (
    <BlockContainer>
      {/* <TopContent> */}
        <Block image={image} gif={gif} />
        <SideContent>
          <Name>{name}</Name>
          <Technologies>{technologies}</Technologies>
          <Description>{description}</Description>
        </SideContent>
      {/* </TopContent> */}
    </BlockContainer>
  );
};

export default PortfolioBlock;
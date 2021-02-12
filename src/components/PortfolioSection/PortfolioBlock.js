import React, { useState } from 'react';
import {
  Block,
  BlockContainer,
  Description, 
  Name,
  Overlay,
  SideContent,
  StyledPlayIcon,
  StyledGithubIcon,
  Technologies
} from './PortfolioSectionElements';

const PortfolioBlock = ({ description, gif, image, name, technologies, repo }) => {
  const [isGifPlaying, playGif] = useState(false);

  return (
    <BlockContainer>
      <Block 
        gif={gif}
        image={image}
        isGifPlaying={isGifPlaying}
        onClick={() => playGif(!isGifPlaying)}
      >
        {!isGifPlaying &&
          (
            <Overlay>
              <StyledPlayIcon />
            </Overlay>
          )
        }
      </Block>
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
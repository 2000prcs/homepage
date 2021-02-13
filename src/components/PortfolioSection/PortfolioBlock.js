import React, { useState } from 'react';
import {
  Block,
  BlockContainer,
  Description, 
  Name,
  Link,
  Overlay,
  SideContent,
  StyledPlayIcon,
  StyledGithubIcon,
  SubTitle,
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
        <SubTitle>
          <Name>
            {name}
          </Name>
          <Link href={repo} target="_blank" rel="noreferrer">
            <StyledGithubIcon />
          </Link>
        </SubTitle>
        <Technologies>{technologies}</Technologies>
        <Description>{description}</Description>
      </SideContent>
    </BlockContainer>
  );
};

export default PortfolioBlock;
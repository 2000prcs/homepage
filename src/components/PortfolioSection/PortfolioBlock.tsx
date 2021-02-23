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

type PortfolioBlockProps = {
  description: string,
  gifName: string,
  imageName: string,
  name: string,
  repo: string,
  technologies: string
}

const PortfolioBlock = ({ description, gifName, imageName, name, repo, technologies }: PortfolioBlockProps) => {
  const [isGifPlaying, playGif] = useState(false);
  const gif = require(`../../assets/images/${gifName}`);
  const image = require(`../../assets/images/${imageName}`);

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
import React from 'react';
import { Block, Overlay, Text } from './AboutSectionElements';

const AboutBlock = ({ text, gif, image }) => {
  return (
    <Block image={image} gif={gif}>
      <Overlay>
        <Text>{text}</Text>
      </Overlay>
    </Block>
  );
};

export default AboutBlock;
import React from 'react';
import { Block } from './AboutSectionElements';

const AboutBlock = ({ text, src }) => {

  return (
    <Block src={src}>
      {text}
    </Block>
  );
};

export default AboutBlock;
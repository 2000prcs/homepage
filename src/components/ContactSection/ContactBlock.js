import React from 'react';

import { Block } from './ContactSectionElements';

const ContactBlock = ({ name, Icon, url }) => {
  return (
    <Block>
      <a href={url} target="_blank" rel="noreferrer"><Icon alt={name} /></a>
    </Block>
  );
};

export default ContactBlock;
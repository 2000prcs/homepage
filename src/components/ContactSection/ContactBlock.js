import React from 'react';

import { Block } from './ContactSectionElements';

const ContactBlock = ({ name, icon, url }) => {
  return (
    <Block>
      <a href={url} target="_blank"><img alt={name} src={icon} /></a>
    </Block>
  );
};

export default ContactBlock;
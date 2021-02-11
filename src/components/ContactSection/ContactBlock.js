import React from 'react';
import { Block } from './ContactSectionElements';

const ContactBlock = ({ name, icon, url }) => {
  return (
    <Block>
      <a href={url} target="_blank" rel="noreferrer">{icon}</a>
    </Block>
  );
};

export default ContactBlock;
import React from 'react';
import { Block } from './ContactSectionElements';

type ContactBlockProps = {
  icon: React.SVGProps<SVGElement>,
  url: string
}

const ContactBlock = ({ icon, url }: ContactBlockProps) => {
  return (
    <Block>
      <a href={url} target="_blank" rel="noreferrer">{icon}</a>
    </Block>
  );
};

export default ContactBlock;
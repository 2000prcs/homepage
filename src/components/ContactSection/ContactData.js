import React from 'react';
import { 
  StyledGithubIcon,
  StyledLinkedinIcon,
  StyledInstagramIcon,
  StyledEmailIcon
} from './ContactSectionElements';

const contactData = [
  {
    name: 'github',
    icon: <StyledGithubIcon />,
    url: 'https://github.com/2000prcs'
  },
  {
    name: 'linkedin',
    icon: <StyledLinkedinIcon />,
    url: 'https://www.linkedin.com/in/moyeonglee'
  },
  {
    name: 'instagram',
    icon: <StyledInstagramIcon />,
    url: 'https://www.instagram.com/momo_sf'
  },
  {
    name: 'email',
    icon: <StyledEmailIcon />,
    url: 'mailto:2000prcs@gmail.com'
  },
];

export default contactData;
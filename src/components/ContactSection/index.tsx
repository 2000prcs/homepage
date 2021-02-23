import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Title, Content } from './ContactSectionElements';
import ContactBlock from './ContactBlock';
import { 
  StyledGithubIcon,
  StyledLinkedinIcon,
  StyledInstagramIcon,
  StyledEmailIcon
} from './ContactSectionElements';

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson(filter: {pageName: {eq: "Contact"}}) {
        edges {
          node {
            content {
              icon
              name
              url
            }
          }
        }
      }
    }
  `);
  const contactData = data.allDataJson.edges.map((item: { node: object }) => item.node);

  interface ContactIconsConfig {
    [key: string]: React.SVGProps<SVGElement>,
  }
  const contactIcons: ContactIconsConfig = {
    github: <StyledGithubIcon />,
    linkedin: <StyledLinkedinIcon />,
    instagram: <StyledInstagramIcon />,
    email: <StyledEmailIcon />
  };

  return (
    <Container>
      <Title>Contact Me!</Title>
      <Content>
        {contactData[0].content.map((
          data: {
            icon: string,
            name: string,
            url: string
          }) =>
          <ContactBlock
            icon={contactIcons[data.name]}
            url={data.url}
            key={data.name}
          />
        )}
      </Content>
    </Container>
  );
};

export default ContactSection;
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
// import contactData from './ContactData';

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson(filter: {pageName: {eq: "Portfolio"}}) {
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

  return (
    <Container>
      <Title>Contact Me!</Title>
      <Content>
        {contactData[0].content.map((
          data: { 
            icon: string,
            name: string,
            url: string
          }) => {
            const iconComponent = `Styled${data.icon}Icon`

            return (
              <ContactBlock
                icon={iconComponent}
                url={data.url}
                key={data.name}
              />
            );
          }
        )}
      </Content>
    </Container>
  );
};

export default ContactSection;
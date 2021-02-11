import React from 'react';
import { Container, Title, Content } from './ContactSectionElements';
import ContactBlock from './ContactBlock';
import contactData from './ContactData';

const ContactSection = () => {

  return (
    <Container>
      <Title>Contact Me!</Title>
      <Content>
        {contactData.map((data) => 
          <ContactBlock
            name={data.name}
            icon={data.icon}
            url={data.url}
            key={data.name}
          />
        )}
      </Content>
    </Container>
  );
};

export default ContactSection;
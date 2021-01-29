import React from 'react';
import { Container, Title, Content } from './ContactSectionElements';
import ContactBlock from './ContactBlock';
import ContactData from './ContactData';

const ContactSection = () => {

  return (
    <Container>
      <Title>Contact Me</Title>
      <Content>
        {ContactData.map((data) => 
          <ContactBlock
            name={data.name}
            icon={data.icon}
            url={data.url}
          />
        )}
      </Content>
    </Container>
  );
};

export default ContactSection;
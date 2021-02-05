import React from 'react';
import { Container, Title, Content } from './ContactSectionElements';
import ContactBlock from './ContactBlock';
import ContactData from './ContactData';

const ContactSection = () => {

  return (
    <Container>
      <Title>Contact Me!</Title>
      <Content>
        {ContactData.map((data) => 
          <ContactBlock
            name={data.name}
            Icon={data.icon}
            url={data.url}
            key={data.name}
          />
        )}
      </Content>
    </Container>
  );
};

export default ContactSection;
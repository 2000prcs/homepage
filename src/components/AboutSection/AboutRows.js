import React from 'react';
import AboutBlock from './AboutBlock';
import { Row } from './AboutSectionElements';

const AboutRows = ({ rowData }) => {

  return (
    <Row>
      {rowData.map(data =>
        <AboutBlock
          gif={data.gif}
          image={data.image}
          text={data.text}
          key={data.text}
        />)}
    </Row>
  );
};

export default AboutRows;
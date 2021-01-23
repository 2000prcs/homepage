import React from 'react';
import AboutBlock from './AboutBlock';
import { Row } from './AboutSectionElements';

import icon from '../../icons/code-flat.svg';

const AboutRows = ({ rowData }) => {

  return (
    <Row>
      {rowData.map(data =>
        <div><img src={icon} style={{ width: '30px' }} />{data.text}</div>
        // <AboutBlock
        //   gif={data.gif}
        //   image={data.image}
        //   text={data.text}
        //   key={data.text}
        // />
      )}
    </Row>
  );
};

export default AboutRows;
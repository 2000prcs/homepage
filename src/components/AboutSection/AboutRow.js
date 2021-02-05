import React from 'react';
import { Block, Row } from './AboutSectionElements';

const AboutRow = ({ rowData }) => {
  return (
    <Row>
      {rowData.map(data =>
        <Block>
          {data}
        </Block>
      )}
    </Row>
  );
};

export default AboutRow;
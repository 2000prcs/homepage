import React from 'react';
import { Block, Row } from './AboutSectionElements';

type AboutRowProps = {
  rowData: string[];
}

const AboutRow = ({ rowData }: AboutRowProps) => {
  return (
    <Row>
      {rowData.map(data =>
        <Block key={data}>
          {data}
        </Block>
      )}
    </Row>
  );
};

export default AboutRow;
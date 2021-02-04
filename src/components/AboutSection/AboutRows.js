import React from 'react';
import { Block, Image, Row } from './AboutSectionElements';

import Icon from '../../icons/code-flat.svg';

const PortfolioRows = ({ rowData, withIcon }) => {

  return (
    <Row>
      {rowData.map(data =>
        <Block>
          {withIcon && <Icon style={{ width: '30px' }} />}
          {data.text}
        </Block>
      )}
    </Row>
  );
};

export default PortfolioRows;
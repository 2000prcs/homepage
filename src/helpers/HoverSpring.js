import React from 'react';
import { Spring } from 'react-spring/renderprops';

const HoverSpring = ({ children, isHover }) => {
  return (
    <Spring
      from={{ opacity: '0' }}
      to={{
        opacity: isHover ? '1' : '0',
        width: isHover ? '100%' : '0%',
        backgroundColor: isHover ? 'white': 'blue'
      }}
      config={{ duration: 400 }}
    >
    {children}
  </Spring>
  );
}

export default HoverSpring;
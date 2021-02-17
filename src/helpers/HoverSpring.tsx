import React from 'react';
import { Spring } from 'react-spring/renderprops';

type HoverSpringProps = {
  children: (props: any) => React.ReactNode,
  isHover: boolean
}

const HoverSpring = ({ children, isHover }: HoverSpringProps) => {
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
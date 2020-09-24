import React, { FunctionComponent, useEffect } from 'react';

import { animated, useSpring } from 'react-spring';

import Typography from '../Typography';

const AnimatedTypography = animated(Typography);

export type MessageProps = {
  children?: string;
};

const Message: FunctionComponent<MessageProps> = (props) => {
  const { children = '' } = props;

  const [{ length }, set] = useSpring(() => ({ length: 0, config: { clamp: true, mass: 15, precision: 1 } }))

  useEffect(() => {
    set({ length: children.length });
  }, [children]);

  return (
    <AnimatedTypography>
      {length.interpolate((num) => children.slice(0, num))}
    </AnimatedTypography>
  )
}

export default Message;

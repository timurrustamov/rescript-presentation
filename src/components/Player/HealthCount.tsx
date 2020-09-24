import React, { CSSProperties, FunctionComponent } from "react";

import { animated, useSpring } from "react-spring";
import styled from "styled-components";

import Typography from "../Typography";

export type HealthCountProps = {
  maxHp?: number;
  hp?: number;
  className?: string;
  style?: CSSProperties;
};

const Container = styled.div`
  position: relative;
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  right: -72px;
  height: 100%;
  width: calc(100% + 82px);
  background-color: black;
  transform: skew(-30deg);
  z-index: -1;
`;
const Text = styled(Typography)`
  color: white;
  font-size: 18px;
  text-shadow: 0 0 3px 3px white;
`;

const HealthCount: FunctionComponent<HealthCountProps> = (props) => {
  const { maxHp, hp, className, style } = props;
  const { animatedHp } = useSpring({
    animatedHp: hp,
    config: { clamp: true, precision: 1 },
  });

  return (
    <Container className={className} style={style}>
      <Background />
      <Text>
        <animated.span>
          {animatedHp.interpolate((hp) => hp!.toFixed())}
        </animated.span>
        /{maxHp}
      </Text>
    </Container>
  );
};

export default HealthCount;

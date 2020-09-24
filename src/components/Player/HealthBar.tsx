import React, { CSSProperties, FunctionComponent } from "react";

import styled from "styled-components";

import HP from "../HP";

export type HealthBarProps = {
  name?: string;
  hp?: number;
  maxHp?: number;
  className?: string;
  style?: CSSProperties;
};

const Container = styled.div`
  position: relative;
  height: 28px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 0;
`;
const HPBackground = styled.div`
  position: absolute;
  top: 0;
  right: -72px;
  height: 100%;
  width: calc(100% + 72px);
  background-color: white;
  transform: skew(-30deg);
  z-index: -1;
`;

const HealthBar: FunctionComponent<HealthBarProps> = (props) => {
  const { hp, maxHp, className, style } = props;

  return (
    <Container className={className} style={style}>
      <HPBackground />
      <HP max={maxHp} current={hp} />
    </Container>
  );
};

export default HealthBar;

import React, { CSSProperties, FunctionComponent } from "react";

import styled from "styled-components";

import Typography from "./Typography";

export type PokemonNameProps = {
  name?: string;
  lvl?: number;
  className?: string;
  style?: CSSProperties;
};

const Container = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0 -24px 12px;
`;

const Name = styled(Typography)`
  font-weight: lighter;
  margin-bottom: 16px;
  margin: 0 12px;
`;

const Level = styled(Typography)`
  font-size: 13px;
  letter-spacing: -2px;
  margin: 0 12px;
  font-weight: lighter;
  color: orange;
  text-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.35);
`;

const PokemonName: FunctionComponent<PokemonNameProps> = (props) => {
  const { name, lvl, className, style } = props;

  return (
    <Container className={className} style={style}>
      <Name>{name}</Name>
      <Level>
        Lv.<Typography>{lvl}</Typography>
      </Level>
    </Container>
  );
};

export default PokemonName;

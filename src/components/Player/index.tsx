import React, { CSSProperties, FunctionComponent } from "react";
import styled from "styled-components";

import HealthBar from "./HealthBar";
import Pokemon from "../Pokemon";
import PokemonName from "../PokemonName";

import Pikachu from "pokemon-sprites/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif";
import HealthCount from "./HealthCount";

export type PlayerProps = {
  name?: string;
  hp?: number;
  maxHp?: number;
  lvl?: number;
  className?: string;
  style?: CSSProperties;
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BarContainer = styled.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Player: FunctionComponent<PlayerProps> = (props) => {
  const { name, hp, maxHp, lvl, className, style } = props;

  return (
    <Wrapper className={className} style={style}>
      <Pokemon hp={hp} src={Pikachu} />

      <BarContainer>
        <PokemonName name={name} lvl={lvl} />
        <HealthBar hp={hp} maxHp={maxHp} />
        <HealthCount hp={hp} maxHp={maxHp} />
      </BarContainer>
    </Wrapper>
  );
};

export default Player;

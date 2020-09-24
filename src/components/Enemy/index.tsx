import React, { CSSProperties, FunctionComponent, useEffect } from "react";
import styled from "styled-components";

import Pokemon from "../Pokemon";
import HealthBar from "./HealthBar";

import Abra from "pokemon-sprites/sprites/pokemon/versions/generation-v/black-white/animated/63.gif";
import PokemonName from "../PokemonName";
import useCoordinator from "../Coordinator/useCoordinator";
import { Attack } from "../Coordinator/useGameReducer";

export type EnemyProps = {
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

const attacks: Readonly<Attack[]> = [
  {
    name: "Bubble",
    damage: 90,
    type: "Normal",
  },
  {
    name: "Fury Swipes",
    damage: 100,
    type: "Normal",
  },
  {
    name: "Pound",
    damage: 115,
    type: "Normal",
  },
];

const Enemy: FunctionComponent<EnemyProps> = (props) => {
  const { name, hp, maxHp, lvl, className, style } = props;
  const [state, actions] = useCoordinator();

  useEffect(() => {
    if (state.turn === 'ENEMY') {
      const attack = attacks[Math.floor(Math.random() * attacks.length)];

      const timeout = setTimeout(() => actions.enemyAttack(attack), 3000);
      return () => clearTimeout(timeout);
    }
  }, [state.turn]);

  return (
    <Wrapper className={className} style={style}>
      <BarContainer>
        <PokemonName name={name} lvl={lvl} />
        <HealthBar hp={hp} maxHp={maxHp} />
      </BarContainer>

      <Pokemon hp={hp} src={Abra} />
    </Wrapper>
  );
};

export default Enemy;

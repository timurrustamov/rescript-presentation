import React, { FunctionComponent, useEffect, useState } from "react";

import { Normalize } from "styled-normalize";
import styled from "styled-components";

import Fonts from "./Fonts";

import Enemy from "./Enemy";
import Background from "./Background";
import Player from "./Player";
import GUI from "./GUI";
import Coordinator from "./Coordinator";
import useCoordinator from "./Coordinator/useCoordinator";

const Battleground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 24px 0;
`;

const Interface: FunctionComponent = () => {
  const [state] = useCoordinator();
  const { player, enemy } = state;

  return (
    <Background>
      <Battleground>
        <Enemy name={enemy.name} hp={enemy.hp} maxHp={enemy.maxHp} lvl={36} />
        <Player name={player.name} hp={player.hp} maxHp={player.maxHp} />
      </Battleground>

      <GUI />
    </Background>
  );
};

const Game: FunctionComponent = () => {
  return (
    <>
      <Normalize />
      <Fonts />

      <Coordinator
        message="A wild something has appeared !"
        player={{ name: 'Pikachu', hp: 300}}
        enemy={{ name: 'Abra', hp: 260 }}
      >
        <Interface />
      </Coordinator>
    </>
  );
};

export default Game;

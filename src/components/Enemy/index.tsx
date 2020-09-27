import React, { CSSProperties, FunctionComponent, useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Abra from 'pokemon-sprites/sprites/pokemon/versions/generation-v/black-white/animated/63.gif';

import Pokemon from '../Pokemon';
import HealthBar from './HealthBar';
import PokemonName from '../PokemonName';
import { State } from '../Game/store';
import { Attack, enemyAttack } from '../Game/attacks';

export type EnemyProps = {
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
    name: 'Bubble',
    damage: 90,
    type: 'Normal',
  },
  {
    name: 'Fury Swipes',
    damage: 100,
    type: 'Normal',
  },
  {
    name: 'Pound',
    damage: 115,
    type: 'Normal',
  },
];

const Enemy: FunctionComponent<EnemyProps> = (props) => {
  const { className, style } = props;

  const { name, hp, maxHp } = useSelector((state: State) => state.enemy);
  const isEnemyTurn = useSelector((state: State) => state.turn === 'ENEMY');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEnemyTurn) {
      const attack = attacks[Math.floor(Math.random() * attacks.length)];
      /** Delay enemy attack, so the message of the attack could be read */
      const timeout = setTimeout(() => dispatch(enemyAttack(attack)), 3000);
      return () => clearTimeout(timeout);
    }
  }, [isEnemyTurn]);

  return (
    <Wrapper className={className} style={style}>
      <BarContainer>
        <PokemonName name={name} lvl={36} />
        <HealthBar hp={hp} maxHp={maxHp} />
      </BarContainer>

      <Pokemon hp={hp} src={Abra} />
    </Wrapper>
  );
};

export default Enemy;

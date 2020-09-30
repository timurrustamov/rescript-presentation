import React, { CSSProperties, FunctionComponent, useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Squirtle from 'pokemon-sprites/sprites/pokemon/versions/generation-v/black-white/animated/7.gif';

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
    name: 'Water Gun',
    damage: 90,
    type: 'Water',
  },
  {
    name: 'Water Fall',
    damage: 115,
    type: 'Water',
  },
  {
    name: 'Pound',
    damage: 80,
    type: 'Normal',
  },
];

const Enemy: FunctionComponent<EnemyProps> = (props) => {
  const { className, style } = props;

  const { name, hp, maxHp } = useSelector((state: State) => state.enemy);

  const dispatch = useDispatch();
  const isEnemyTurn = useSelector((state: State) => state.turn === 'ENEMY');
  const isInPlay = useSelector((state: State) => state.play);
  const gameOver = useSelector((state: State) => state.enemy.hp <= 0 || state.player.hp <= 0);

  const attack = attacks[Math.floor(Math.random() * attacks.length)];

  useEffect(() => {
    if (isEnemyTurn && isInPlay && !gameOver) {
      const timeout = setTimeout(() => dispatch(enemyAttack(attack)), 5000);
      return () => clearTimeout(timeout);
    }
  }, [isEnemyTurn, isInPlay, gameOver]);

  useEffect(() => {
    if (isEnemyTurn && isInPlay) {
      dispatch(enemyAttack(attack));
    }
  }, [isInPlay]);

  return (
    <Wrapper className={className} style={style}>
      <BarContainer>
        <PokemonName name={name} lvl={36} />
        <HealthBar hp={hp} maxHp={maxHp} />
      </BarContainer>

      <Pokemon hp={hp} src={Squirtle} />
    </Wrapper>
  );
};

export default Enemy;

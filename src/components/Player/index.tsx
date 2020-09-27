import React, { CSSProperties, FunctionComponent } from 'react';

import styled from 'styled-components';
import Pikachu from 'pokemon-sprites/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif';
import { useSelector } from 'react-redux';

import HealthBar from './HealthBar';
import Pokemon from '../Pokemon';
import PokemonName from '../PokemonName';
import HealthCount from './HealthCount';
import { State } from '../Game/store';
import { playerLevel } from '../../Demo.bs';

export type PlayerProps = {
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
  const { className, style } = props;
  const { name, hp, maxHp } = useSelector((state: State) => state.player);

  return (
    <Wrapper className={className} style={style}>
      <Pokemon hp={hp} src={Pikachu} />

      <BarContainer>
        <PokemonName name={name} lvl={playerLevel} />
        <HealthBar hp={hp} maxHp={maxHp} />
        <HealthCount hp={hp} maxHp={maxHp} />
      </BarContainer>
    </Wrapper>
  );
};

export default Player;

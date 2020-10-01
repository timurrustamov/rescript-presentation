import React, { FunctionComponent } from 'react';

import { Normalize } from 'styled-normalize';
import styled from 'styled-components';

import Fonts from './Fonts';

import Enemy from './Enemy';
import Background from './Background';
import Player from './Player';
import GUI from './GUI';
import Game from './Game';

const Battleground = styled.div`
  flex: 1 0.5 60%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 24px 0;
`;

const App: FunctionComponent = () => {
  return (
    <>
      <Normalize />
      <Fonts />

      <Game>
        <Background>
          <Battleground>
            <Enemy />
            <Player />
          </Battleground>

          <GUI />
        </Background>
      </Game>
    </>
  );
};

export default App;

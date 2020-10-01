import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { GameOver as ReasonGameOver } from '../../Demo.bs';
import { restart } from '../Game/store';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-self: stretch;
  & .ReasonGameOver {
    flex: 1;
    align-self: center;
    display: flex;
    text-align: center;
    flex-direction: column;
    font-family: PressStart2P;
    font-size: 18px;
    line-height: 1.8;
    color: white;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 2);
    & button {
      margin-top: 24px;
      padding: 24px;
      background-color: whitesmoke;
    }
  }
`;

const GameOver: FunctionComponent = () => {
  const dispatch = useDispatch();

  if (ReasonGameOver?.make) {
    return (
      <Wrapper>
        <ReasonGameOver.make className="ReasonGameOver" restart={() => dispatch(restart)}>
          Thank you AixJS! 🚀
        </ReasonGameOver.make>
      </Wrapper>
    );
  }

  return <span>Thank you AixJS! 🚀</span>;
};

export default GameOver;

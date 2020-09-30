import React, { FunctionComponent, useEffect } from 'react';

import { Provider, useDispatch, useSelector } from 'react-redux';

import useKeydown from '../../hooks/useKeydown';
import store, { clearEffect, hideMessage, play, showMessage, State } from './store';

const SideEffects: FunctionComponent = () => {
  const dispatch = useDispatch();

  const isInPlay = useSelector((state: State) => state.play);
  const isPlayerTurn = useSelector((state: State) => state.turn === 'PLAYER');
  const gameOver = useSelector((state: State) => state.enemy.hp <= 0 || state.player.hp <= 0);

  useKeydown(['Space'], () => {
    dispatch(play());
    if (!isInPlay || isPlayerTurn) {
      dispatch(hideMessage());
    }
  });

  useEffect(() => {
    if (gameOver) {
      dispatch(showMessage('Game over ! Thanks for playing 😁'));
    }
  }, [gameOver]);

  const hasMessage = useSelector((state: State) => !!state.message);
  useEffect(() => {
    if (hasMessage && isInPlay && !gameOver) {
      const timeout = setTimeout(() => dispatch(hideMessage()), 5000);
      return () => clearTimeout(timeout);
    }
  }, [hasMessage, isInPlay, gameOver]);

  const hasEffect = useSelector((state: State) => !!state.effect);
  useEffect(() => {
    if (hasEffect) {
      const timeout = setTimeout(() => dispatch(clearEffect()), 2000);
      return () => clearTimeout(timeout);
    }
  }, [hasEffect]);

  return null;
};

const Game: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <Provider store={store}>
      <SideEffects />
      {children}
    </Provider>
  );
};

export default Game;

import React, { FunctionComponent, useEffect, useState } from 'react';

import { Provider, useDispatch, useSelector } from 'react-redux';

import useKeydown from '../../hooks/useKeydown';
import store, { hideMessage, State } from './store';

const SideEffects: FunctionComponent = () => {
  const [play, setPlay] = useState(false);

  const dispatch = useDispatch();
  const isPlayerTurn = useSelector((state: State) => state.turn === 'PLAYER');
  const hasMessage = useSelector((state: State) => !!state.message);

  useKeydown(['Space'], () => {
    setPlay(true);
    if (isPlayerTurn) {
      dispatch(hideMessage());
    }
  });

  useEffect(() => {
    if (hasMessage && play) {
      const timeout = setTimeout(() => dispatch(hideMessage()), 5000);
      return () => clearTimeout(timeout);
    }
  }, [hasMessage, play]);

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

import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

import { playerName, getInitialBattleMessage } from '../../Demo.bs';

type Actor = {
  hp: number;
  maxHp: number;
  name: string;
  type: 'Electric' | 'Water' | 'Psychic' | 'Normal';
};

export type State = {
  player: Actor;
  enemy: Actor;
  message?: string;
  turn: 'PLAYER' | 'ENEMY';
};

const initialMessage = getInitialBattleMessage?.('Abra', Math.random() > 0.5) || 'Hello rescript !';

const initialState: State = {
  enemy: { hp: 360, maxHp: 360, name: 'Abra', type: 'Water' },
  player: { hp: 290, maxHp: 290, name: playerName || '', type: 'Electric' },
  turn: 'PLAYER',
  message: initialMessage,
};

export const showMessage = createAction<string>('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');
export const playerTakeDamage = createAction<number>('PLAYER_TAKE_DAMAGE');
export const enemyTakeDamage = createAction<number>('ENEMY_TAKE_DAMAGE');

const reducer = createReducer(initialState, (builder) => {
  const getActorAfterDamage = (actor: Actor, damage = 0) => {
    const { hp: oldHp } = actor;

    const hp = Math.max(oldHp - damage, 0);
    return { ...actor, hp };
  };

  return builder
    .addCase(showMessage, (state, action) => {
      return { ...state, message: action.payload };
    })
    .addCase(hideMessage, (state) => {
      return { ...state, message: undefined };
    })
    .addCase(playerTakeDamage, (state, action) => {
      return {
        ...state,
        turn: 'PLAYER',
        player: getActorAfterDamage(state.player, action.payload),
      };
    })
    .addCase(enemyTakeDamage, (state, action) => {
      return {
        ...state,
        turn: 'ENEMY',
        enemy: getActorAfterDamage(state.enemy, action.payload),
      };
    });
});

const store = configureStore({ reducer });

export default store;

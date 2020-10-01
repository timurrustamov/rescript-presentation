import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

import { playerName, getHpAfterDamage, getInitialBattleMessage } from '../../Demo.bs';

type Actor = {
  hp: number;
  maxHp: number;
  name: string;
  type: 'Electric' | 'Water' | 'Psychic' | 'Normal';
};

export type State = {
  play: boolean;
  player: Actor;
  enemy: Actor;
  message?: string;
  effect?: 'Electric' | 'Water' | 'Psychic' | 'Normal';
  turn: 'PLAYER' | 'ENEMY';
};

const initialMessage = getInitialBattleMessage?.('Squirtle', Math.random() > 0.5) || 'Hello rescript !';

const initialState: State = {
  play: false,
  enemy: { hp: 400, maxHp: 400, name: 'Squirtle', type: 'Water' },
  player: { hp: 290, maxHp: 290, name: playerName || '', type: 'Electric' },
  turn: 'PLAYER',
  message: initialMessage,
};

export const play = createAction('PLAY');
export const showMessage = createAction<string>('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');
export const addEffect = createAction<State['effect']>('ADD_EFFECT');
export const clearEffect = createAction('CLEAR_EFFECT');
export const playerTakeDamage = createAction<number>('PLAYER_TAKE_DAMAGE');
export const enemyTakeDamage = createAction<number>('ENEMY_TAKE_DAMAGE');
export const restart = createAction('RESTART');

const reducer = createReducer(initialState, (builder) => {
  const getActorAfterDamage = (actor: Actor, damage = 0) => {
    const { hp: oldHp } = actor;
    const newHp = getHpAfterDamage ? getHpAfterDamage(oldHp, damage) : oldHp;

    const hp = Math.max(newHp, 0);
    return { ...actor, hp };
  };

  return builder
    .addCase(play, (state) => {
      return { ...state, play: true };
    })
    .addCase(showMessage, (state, action) => {
      return { ...state, message: action.payload };
    })
    .addCase(hideMessage, (state) => {
      return { ...state, message: undefined };
    })
    .addCase(addEffect, (state, action) => {
      return { ...state, effect: action.payload };
    })
    .addCase(clearEffect, (state) => {
      return { ...state, effect: undefined };
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
    })
    .addCase(restart, () => initialState);
});

const store = configureStore({ reducer });

export default store;

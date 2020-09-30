import { ThunkAction, Action } from '@reduxjs/toolkit';

import { getDamageMultiplier } from '../../Demo.bs';
import { showMessage, enemyTakeDamage, playerTakeDamage, State, addEffect } from './store';

export type Attack = {
  name: string;
  damage: number;
  type: 'Normal' | 'Water' | 'Electric' | 'Psychic';
};

const toResEnumType = (type: Attack['type']): 0 | 1 | 2 | 3 => {
  switch (type) {
    case 'Electric':
      return 0;
    case 'Water':
      return 1;
    case 'Psychic':
      return 2;
    case 'Normal':
      return 3;
  }
};

const formatMessage = (actorName: string, attackName: string, multiplier: number) => {
  const message = `${actorName} attack with ${attackName}.`;

  if (multiplier > 1) {
    return message + `\nThis is super effective !`;
  }
  if (multiplier < 1) {
    return message + `\nThis is not very effective...`;
  }
  return message;
};

type Thunk = ThunkAction<void, State, unknown, Action<string>>;

export const playerAttack = (attack: Attack): Thunk => {
  return (dispatch, getState) => {
    const { enemy, player } = getState();
    const { name, damage, type } = attack;

    const multiplier = getDamageMultiplier?.(toResEnumType(type), toResEnumType(enemy.type)) || 1;
    
    dispatch(showMessage(formatMessage(player.name, name, multiplier)));
    dispatch(addEffect(type));
    dispatch(enemyTakeDamage(damage * multiplier));
  };
};

export const enemyAttack = (attack: Attack): Thunk => {
  return (dispatch, getState) => {
    const { enemy, player } = getState();
    const { name, damage, type } = attack;

    const multiplier = getDamageMultiplier?.(toResEnumType(type), toResEnumType(player.type)) || 1;
    dispatch(showMessage(formatMessage(enemy.name, name, multiplier)));
    dispatch(addEffect(type));
    dispatch(playerTakeDamage(damage * multiplier));
  };
};

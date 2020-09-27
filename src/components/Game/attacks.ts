import { ThunkAction, Action } from "@reduxjs/toolkit";
import { getDamageMultiplier } from "../../Demo.bs";
import { showMessage, enemyTakeDamage, playerTakeDamage, State } from "./store";

export type Attack = {
  name: string;
  damage: number;
  type: "Normal" | "Water" | "Electric" | "Psychic";
};

const resEnumType = (type: Attack["type"]): 0 | 1 | 2 | 3 => {
  switch (type) {
    case "Electric":
      return 0;
    case "Water":
      return 1;
    case "Psychic":
      return 2;
    case "Normal":
      return 3;
  }
};

const formatMessage = (
  actorName: string,
  attackName: string,
  multiplier: number
) => {
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

    const multiplier =
      getDamageMultiplier?.(resEnumType(type), resEnumType(enemy.type)) || 1;
    dispatch(showMessage(formatMessage(player.name, name, multiplier)));

    dispatch(enemyTakeDamage(damage * multiplier));
  };
};
export const enemyAttack = (attack: Attack): Thunk => {
  return (dispatch, getState) => {
    const { enemy, player } = getState();
    const { name, damage, type } = attack;

    const multiplier =
      getDamageMultiplier?.(resEnumType(type), resEnumType(player.type)) || 1;
    dispatch(showMessage(formatMessage(enemy.name, name, multiplier)));

    dispatch(playerTakeDamage(damage * multiplier));
  };
};

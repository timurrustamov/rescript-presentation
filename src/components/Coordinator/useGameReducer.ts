import { Reducer, useCallback, useReducer } from "react";

import { getHpAfterDamage } from '../../Demo.bs';

type Actor = {
  hp: number;
  maxHp: number;
  name: string;
};

export type State = {
  player: Actor;
  enemy: Actor;
  message?: string;
  turn: "PLAYER" | "ENEMY";
};

export type Attack = {
  name: string;
  damage: number;
  type: 'Normal' | 'Electric' | 'Psychic';
}

type Actions =
  | { type: "SHOW_MESSAGE"; content: string }
  | { type: "HIDE_MESSAGE" }
  | { type: "PLAYER_ATTACK"; damage: number }
  | { type: "ENEMY_ATTACK"; damage: number };

const gameReducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return { ...state, message: action.content };
    case "HIDE_MESSAGE":
      return { ...state, message: undefined };
    case "PLAYER_ATTACK": {
      const { enemy } = state;
      return {
        ...state,
        turn: "ENEMY",
        enemy: { ...enemy, hp: Math.max(getHpAfterDamage(enemy.hp, action.damage), 0) },
      };
    }
    case "ENEMY_ATTACK": {
      const { player } = state;
      return {
        ...state,
        turn: "PLAYER",
        player: { ...player, hp: Math.max(getHpAfterDamage(player.hp, action.damage), 0)},
      };
    }
    default:
      return state;
  }
};

type InitialActor = {
  hp?: number;
  name?: string;
};

const useGameReducer = (
  player: InitialActor,
  enemy: InitialActor,
  startMessage?: string
) => {
  const [state, dispatch] = useReducer(gameReducer, {
    turn: "PLAYER",
    message: startMessage,
    player: {
      hp: player.hp || 0,
      maxHp: player.hp || 0,
      name: player.name || "",
    },
    enemy: {
      hp: enemy.hp || 0,
      maxHp: enemy.hp || 0,
      name: enemy.name || "",
    },
  });

  const enemyAttack = (attack: Attack) => {
    const { name, damage } = attack;
    const content = `${state.enemy.name} attacks with ${name}`;

    dispatch({ type: "SHOW_MESSAGE", content });
    dispatch({ type: "ENEMY_ATTACK", damage });
  };

  const playerAttack = (attack: Attack) => {
    const { name, damage } = attack;
    const content = `${state.player.name} attacks with ${name}`;

    dispatch({ type: "SHOW_MESSAGE", content });
    dispatch({ type: "PLAYER_ATTACK", damage });
  };

  const hideMessage = useCallback(() => dispatch({ type: "HIDE_MESSAGE" }), []);

  return [state, { playerAttack, enemyAttack, hideMessage }] as const;
};

export default useGameReducer;

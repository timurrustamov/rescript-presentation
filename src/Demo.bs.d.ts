import { FunctionComponent } from 'react';

export const playerName: undefined | string;

export const playerLevel: undefined | number;

export const getInitialBattleMessage: undefined | ((enemyName: string, isEnemyEvil: boolean) => string);

export const getHpAfterDamage: undefined | ((currentHp: number, damage: number) => number);

export const getNextCursorPosition: undefined | ((currentAttackIndex: number, moveType: number) => number);

export const getDamageMultiplier:
  | undefined
  | ((attackType: 0 | 1 | 2 | 3, defenceType: 0 | 1 | 2 | 3) => number);

export type GameOverProps = {
  className?: string;
  restart?: () => void;
};
export const GameOver: undefined | {
  make?: FunctionComponent<GameOverProps>
};

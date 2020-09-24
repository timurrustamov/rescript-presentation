import React, {
  createContext,
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import useKeydown from "../../hooks/useKeyDown";

import useGameReducer from "./useGameReducer";

export type GameContext = ReturnType<typeof useGameReducer>;

export type CoordinatorProps = {
  player?: { hp: number; name: string };
  enemy?: { hp: number; name: string };
  message?: string;
  children: ReactElement;
};

const defaultContext: GameContext = [
  {
    enemy: { hp: 0, maxHp: 0, name: "MissingNo" },
    player: { hp: 0, maxHp: 0, name: "MissingNo" },
    message: "Error: No Context were found !",
    turn: "PLAYER",
  },
  {
    playerAttack: () => undefined,
    enemyAttack: () => undefined,
    hideMessage: () => undefined,
  },
];

export const CoordinatorContext = createContext<GameContext>(defaultContext);

const Coordinator: FunctionComponent<CoordinatorProps> = (props) => {
  const { player = {}, enemy = {}, message, children } = props;

  const [play, setPlay] = useState(false);
  const context = useGameReducer(player, enemy, message);

  useKeydown(["Space"], () => {
    setPlay(true);
    if (context[0].turn === "PLAYER") {
      context[1].hideMessage();
    }
  });

  useEffect(() => {
    if (context[0].message && play) {
      const timeout = setTimeout(context[1].hideMessage, 5000);
      return () => clearTimeout(timeout);
    }
  }, [context[0].message, context[0].turn, context[1].hideMessage, play]);

  return (
    <CoordinatorContext.Provider value={context}>
      {children}
    </CoordinatorContext.Provider>
  );
};

export default Coordinator;

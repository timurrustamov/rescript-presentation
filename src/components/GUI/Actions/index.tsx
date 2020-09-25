import React, { CSSProperties, FunctionComponent, useState } from "react";

import styled from "styled-components";

import useKeydown from "../../../hooks/useKeyDown";
import useCoordinator from "../../Coordinator/useCoordinator";
import { Attack } from "../../Coordinator/useGameReducer";
import Typography from "../../Typography";
import Action from "./Action";
import AttackTag from "./Action/ActionTag";
import { getNextCursorPosition } from "../../../Demo.bs";

export type ActionsProps = {
  className?: string;
  style?: CSSProperties;
};

const Container = styled.div`
  display: flex;
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;
  align-items: baseline;
`;

const attacks: Readonly<Attack[]> = [
  {
    name: "Double Team",
    damage: 65,
    type: "Normal",
  },
  {
    name: "Thunder Wave",
    damage: 100,
    type: "Electric",
  },
  {
    name: "Light Screen",
    damage: 95,
    type: "Psychic",
  },
  {
    name: "Thunderbold",
    damage: 70,
    type: "Electric",
  },
] as const;

const Actions: FunctionComponent<ActionsProps> = (props) => {
  const { className, style } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [state, actions] = useCoordinator();
  const isSelected = (index: number) => index === selectedIndex % 4;
  const normalizeCurrentIndex = (type: number) => (i: number) => getNextCursorPosition(Math.abs(i), type);

  useKeydown(["Space"], () => {
    const attack = attacks[selectedIndex % 4];
    if (state.turn === "PLAYER" && attack) {
      actions.playerAttack(attack);
    }
  });

  useKeydown(["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"], (code) => {
    switch (code) {
      case "ArrowUp":
        return setSelectedIndex(normalizeCurrentIndex(0));
      case "ArrowRight":
        return setSelectedIndex(normalizeCurrentIndex(1));
      case "ArrowDown":
        return setSelectedIndex(normalizeCurrentIndex(2));
      case "ArrowLeft":
        return setSelectedIndex(normalizeCurrentIndex(3));
      default:
        return;
    }
  });

  return (
    <Container className={className} style={style}>
      {attacks.map((attack, id) => {
        return (
          <Action key={id} selected={isSelected(id)}>
            <Typography>{attack.name}</Typography>

            <AttackTag type={attack.type} />
          </Action>
        );
      })}
    </Container>
  );
};

export default Actions;

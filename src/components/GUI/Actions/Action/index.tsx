import { CSSProperties } from 'react';

import styled, { css, keyframes } from 'styled-components';

import Typography from '../../../Typography';

export type ActionProps = {
  selected?: boolean;
  className?: string;
  style?: CSSProperties;
};

const float = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(0px, -4px);
  }
  60% {
    transform: translate(0px, 2px);
  }
  70% {
    transform: translate(0px, 1px);
  }
  80% {
    transform: translate(0px, 4px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

const styleElevation = (props: ActionProps) => {
  const { selected } = props;
  if (selected) {
    return css`
      animation: ${float} 3s ease-in-out infinite;
      border: 1px solid red;
      box-shadow: 0px 0px 26px 0px rgba(255, 255, 255, 0.75);
    `;
  }
  return css``;
};

const Action = styled.button<ActionProps>`
  flex: 1 1 calc(50% - 24px);
  margin: 6px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border: 1px solid darkgray;
  border-radius: 12px;
  background-color: dimgray;
  box-shadow: 0 0 2px 2px darkgray;
  outline: none;
  transition: transform 1s, border 1s;
  && ${Typography} {
    font-size: 14px;
  }
  ${styleElevation}
`;

export default Action;

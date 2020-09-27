import React, { CSSProperties, FunctionComponent } from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Message from './Message';
import Actions from './Actions';
import { State } from '../Game/store';

export type GUIProps = {
  className?: string;
  style?: CSSProperties;
};

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  flex: 1 1 300px;
  padding: 24px;
  border: 1px solid red;
  background: linear-gradient(
    95deg,
    rgba(4, 3, 29, 0.7777485994397759) 0%,
    rgba(30, 30, 43, 0.6965161064425771) 52%,
    rgba(56, 64, 66, 0.7525385154061625) 100%
  );
`;

const GUI: FunctionComponent<GUIProps> = (props) => {
  const { className, style } = props;

  const message = useSelector((state: State) => state.message);

  if (message) {
    return (
      <Controls className={className} style={style}>
        <Message key={message}>{message}</Message>
      </Controls>
    );
  }

  return (
    <Controls className={className} style={style}>
      <Actions />
    </Controls>
  );
};

export default GUI;

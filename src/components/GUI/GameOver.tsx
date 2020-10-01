import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

import Typography from '../Typography';

const Wrapper = styled.div`
  flex: 1;
  align-self: center;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const GameOver: FunctionComponent = () => {
  return (
    <Wrapper>
      <Typography>Thank you AixJS! 🚀</Typography>
    </Wrapper>
  );
};

export default GameOver;

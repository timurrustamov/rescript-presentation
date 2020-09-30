import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

import background from '../../assets/images/background.png';
import Effects from './Effects';

const Wallpaper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  overflow: hidden;
  /* filter: blur(1px); */
`;

const Background: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <Wallpaper>
      <Effects />
      {children}
    </Wallpaper>
  );
};

export default Background;

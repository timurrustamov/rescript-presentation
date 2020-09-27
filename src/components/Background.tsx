import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

import background from '../assets/images/background.png';

const Wallpaper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  /* filter: blur(1px); */
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  image-rendering: pixelated;
  z-index: -1;
`;

const Background: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <Wallpaper>
      <BackgroundImage src={background} />
      {children}
    </Wallpaper>
  );
};

export default Background;

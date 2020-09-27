import { createGlobalStyle } from 'styled-components';

import PressStart2P from '../assets/fonts/PressStart2P.ttf';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'PressStart2P';
    src: url(${PressStart2P});
    font-weight: 300;
    font-style: normal;
  }
`;

export default Fonts;

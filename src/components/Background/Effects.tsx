import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';

import styled from 'styled-components';

import { State } from '../Game/store';
import thunder from '../../assets/images/thunder.gif';
import psychic from '../../assets/images/psychic.gif';
import water from '../../assets/images/water.gif';
import normal from '../../assets/images/normal.gif';

const Effect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  mix-blend-mode: color-dodge;
`;

const Thunder = styled(Effect)`
  background-image: url(${thunder});
`;
const AnimatedThunder = animated(Thunder);

const Psychic = styled(Effect)`
  background-image: url(${psychic});
`;
const AnimatedPsychic = animated(Psychic);

const Water = styled(Effect)`
  background-image: url(${water});
`;
const AnimatedWater = animated(Water);

const Normal = styled(Effect)`
  background-image: url(${normal});
`;
const AnimatedNormal = animated(Normal);

const Effects: FunctionComponent = () => {
  const effect = useSelector((state: State) => state.effect);

  const transitions = useTransition(effect, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 0.7 },
    leave: { opacity: 0 },
    config: { delay: 500, friction: 50, tension: 120, mass: 20 },
  });

  return (
    <>
      {transitions.map(({ item, key, props }) => {
        switch (item) {
          case 'Electric':
            return <AnimatedThunder key={key} style={props} />;
          case 'Psychic':
            return <AnimatedPsychic key={key} style={props} />;
          case 'Water':
            return <AnimatedWater key={key} style={props} />;
          case 'Normal':
            return <AnimatedNormal key={key} style={props} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Effects;

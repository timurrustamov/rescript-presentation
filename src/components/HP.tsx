import React, { CSSProperties, FunctionComponent, useMemo } from 'react';

import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import Typography from './Typography';

export type HPProps = {
  max?: number;
  current?: number;
  className?: string;
  style?: CSSProperties;
};

const Text = styled(Typography)`
  color: green;
  font-size: 16px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 2);
  margin-right: 12px;
`;

const StyledBar = styled(animated.div)`
  width: 80%;
  height: 14px;
  border-radius: 6px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.45);
`;

const StyledBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  height: 24px;
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 154px;
  height: 28px;
`;

const HP: FunctionComponent<HPProps> = (props) => {
  const { max = 0, current = 0, className, style } = props;
  const ratio = useMemo(() => {
    if (max === 0) {
      return 0;
    }
    return Math.max(Math.min(current / max, 1), 0);
  }, [max, current]);

  const { health } = useSpring({ health: ratio });

  return (
    <Background className={className} style={style}>
      <Text>HP</Text>

      <StyledBarWrapper>
        <StyledBar
          style={{
            width: health.interpolate((hp) => `${hp * 100}%`),
            backgroundColor: health.interpolate({
              range: [0, 0.25, 0.5, 1],
              output: ['red', 'red', 'yellow', 'green'],
            }),
          }}
        />
      </StyledBarWrapper>
    </Background>
  );
};

export default HP;

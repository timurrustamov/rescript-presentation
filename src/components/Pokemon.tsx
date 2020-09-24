import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { animated, useSpring } from "react-spring";

import styled from "styled-components";

export type PokemonProps = {
  hp?: number;
  src?: string;
  className?: string;
};

const Image = styled(animated.img)`
  margin: auto;
  flex: 1 1 200px;
  height: 200px;
  padding: 5%;
  object-fit: contain;
  image-rendering: pixelated;
`;

const Pokemon: FunctionComponent<PokemonProps> = (props) => {
  const { hp, src, className } = props;
  const hpRef = useRef(hp);

  const [state, toggle] = useState(false);

  useEffect(() => {
    if (hp !== hpRef.current) {
      hpRef.current = hp;
      toggle(!state);
    }
  }, [hp]);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { mass: 3, tension: 200 }
  });

  return (
    <Image
      src={src}
      className={className}
      style={{
        transform: x
          .interpolate({
            range: [0, 0.25, 0.5, 0.75, 1],
            output: [0, 1, 0, 1, 0],
          })
          .interpolate(
            (x) => `translateX(${x * 25}%)`
          ),
        filter: x.interpolate({
          range: [0, 0.5, 1],
          output: [1, 10, 1],
        }).interpolate(
          (x) => `saturate(${x})`
        )
      }}
    />
  );
};

export default Pokemon;

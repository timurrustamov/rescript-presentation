import React, { CSSProperties, FunctionComponent, useMemo } from "react";

import styled from "styled-components";
import { Attack } from "../../../Coordinator/useGameReducer";

import Typography from "../../../Typography";

const Tag = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  && ${Typography} {
    font-size: 8px;
    text-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const Electric = styled(Tag)`
  background-color: #fc3;
`;

Electric.defaultProps = {
  children: <Typography>Electric</Typography>,
};

export const Normal = styled(Tag)`
  background-color: #aa9;
`;

Normal.defaultProps = {
  children: <Typography>Normal</Typography>,
};

export const Psychic = styled(Tag)`
  background-color: #f59;
`;

Psychic.defaultProps = {
  children: <Typography>Psychic</Typography>,
};

export type ActionTagProps = {
  type?: Attack['type'];
  className?: string;
  style?: CSSProperties;
};

const ActionTag: FunctionComponent<ActionTagProps> = (props) => {
  const { type, className, style } = props;

  const Component = useMemo(() => {
    switch (type) {
      case "Electric":
        return Electric;
      case "Psychic":
        return Psychic;
      default:
        return Normal;
    }
  }, [type]);

  return <Component className={className} style={style} />;
};

export default ActionTag;

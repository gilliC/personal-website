import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorsPalette } from "services/styling/consts";

export const LinkedIcon = ({ url, icon }) => {
  return (
    <Icon href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="2x" color={colorsPalette.BLACK} />
    </Icon>
  );
};

const Icon = styled.a` flex: 1; align-self: center;
:hover svg {
  color: ${colorsPalette.MAIN_COLOR_TO};
  transition: 300ms linear all;

}
`;


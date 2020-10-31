import React from "react";
import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const ScreenTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

const Title = styled.h1`
  color: ${colorsPalette.MAIN_COLOR_TO};
  font-family: ${MAIN_FONT}; font-weight: 600; font-size: min(4vw, 80px);
  margin: 16px 0px;
`;

import React from "react";
import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Number = () => {
  return <Title>4</Title>;
};

const Title = styled.h1`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-weight: normal;
  font-size: min(150vw, 150px);
  text-align: center;
`;

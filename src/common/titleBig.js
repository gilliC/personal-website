import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const TitleBig = styled.h1`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT}; font-size: min(2vw, 40px); font-weight: 400;
  text-align: center;
`;

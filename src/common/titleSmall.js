import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const TitleSmall = styled.h1`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT}; font-size: min(1.1vw, 30px); font-weight: 700;
  margin: 0;
`;

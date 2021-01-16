import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Description = styled.p`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-size: min(1vw, 20px);
  /* font-weight: 700; */
  margin: 0;
`;

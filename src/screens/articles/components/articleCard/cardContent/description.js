import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Description = styled.p`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-size: min(1vw, 20px);
  margin: 0;
  height: 45%;
  display: flex; justify-content: center; align-items: center;
`;

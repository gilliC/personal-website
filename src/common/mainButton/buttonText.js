import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const ButtonText = styled.p`
  color: ${colorsPalette.MAIN_COLOR_TO};
  font-family: ${MAIN_FONT};
  font-weight: 300;
  font-size: min(2vw, 24px);
  transition: all 0.5s;
`;

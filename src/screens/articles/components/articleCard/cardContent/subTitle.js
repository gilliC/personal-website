import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const SubTitle = styled.p`
  color: ${colorsPalette.GREY};
  font-family: ${MAIN_FONT};
  font-size: min(0.8vw, 20px);
  font-weight: 700;
  margin: 0;
`;

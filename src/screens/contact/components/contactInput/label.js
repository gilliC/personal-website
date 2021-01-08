import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Label = styled.label`
  transform-origin: left center;
  color: ${colorsPalette.BLACK}; font-size: 15px;
  font-style: italic; font-family: ${MAIN_FONT};
  box-sizing: border-box;
  padding: 5px 15px;
  display: block; position: absolute;
  margin-top: -40px; z-index: 2;
  pointer-events: none;
`;

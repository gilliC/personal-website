import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Input = styled.input`
  background-color: none;
  border: 3px solid ${colorsPalette.MAIN_COLOR_TO}; border-radius: 7px;
  line-height: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  color: ${colorsPalette.BLACK}; font-weight: 100; font-size: 17px;
  position: relative; z-index: 1; display: block;

  :focus {
    outline: none;
    background-color: ${colorsPalette.MAIN_COLOR_TO};
  }
  :valid {
    background-color: ${colorsPalette.MAIN_COLOR_TO};
  }


:focus ~ label {
  -moz-transform: translate(0, -35px);
  -ms-transform: translate(0, -35px);
  -webkit-transform: translate(0, -35px);
  transform: translate(0, -35px);
}

:valid ~ label {
  text-transform: uppercase;
  font-style: italic; font-family: ${MAIN_FONT};
  -moz-transform: translate(5px, -35px) scale(0.6);
  -ms-transform: translate(5px, -35px) scale(0.6);
  -webkit-transform: translate(5px, -35px) scale(0.6);
  transform: translate(5px, -35px) scale(0.6);
}
`;

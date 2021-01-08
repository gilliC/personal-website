import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const TextArea = styled.textarea`
  background-color: white;
  border: 3px solid ${colorsPalette.MAIN_COLOR_TO}; border-radius: 7px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  color: ${colorsPalette.BLACK}; font-weight: 400; font-size: 17px; font-family: ${MAIN_FONT};
  position: relative; z-index: 1; display: block;

:-webkit-autofill,
:-webkit-autofill:hover, 
:-webkit-autofill:focus, 
:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

  :focus {
    outline: none;
    background-color: ${colorsPalette.MAIN_COLOR_TO};
  }
  :valid {
    background-color: ${colorsPalette.MAIN_COLOR_TO};
  }


:focus ~ label {
  -moz-transform: translate(0, -30px);
  -ms-transform: translate(0, -30px);
  -webkit-transform: translate(0, -30px);
  transform: translate(0, -30px);
}

:valid ~ label {
  text-transform: uppercase;
  font-style: italic; font-family: ${MAIN_FONT};
  -moz-transform: translate(5px, -30px) scale(0.6);
  -ms-transform: translate(5px, -30px) scale(0.6);
  -webkit-transform: translate(5px, -30px) scale(0.6);
  transform: translate(5px, -30px) scale(0.6);
}
`
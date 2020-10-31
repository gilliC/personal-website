import { colorsPalette } from "services/styling/consts";
import styled from "styled-components";

export const TextContainer = styled.div`
  height: min(500vw, 500px); width: min(55vw, 700px);;
  background-color: ${colorsPalette.WHITE};
  border: 6pt solid rgba(73,173,173,0.5); border-radius: 42px;
  box-shadow: 0px 10px 10px 8px rgba(0,0,0,0.3);
  
  padding: 15px 50px; box-sizing: border-box;
  position: absolute; top: 3vw; left: 5vw;
`;

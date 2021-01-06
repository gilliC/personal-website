import { colorsPalette } from "services/styling/consts";
import styled from "styled-components";

export const TextContainer = styled.div`
  width: min(60vw, 1200px);
  background-color: ${colorsPalette.WHITE};
  border: 6pt solid rgba(73,173,173,0.5); border-radius: 42px;
  box-shadow: 0px 10px 10px 8px rgba(0,0,0,0.3);
  
  padding: 5vh 5vw; box-sizing: border-box;
  position: absolute; top: 6vh; left: 5vw;
`;

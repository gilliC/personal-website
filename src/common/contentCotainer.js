import { colorsPalette } from "services/styling/consts";
import styled from "styled-components";

export const ContentCotainer = styled.div`
  width: min(60vw, 1200px);
  background-color: ${colorsPalette.WHITE};
  border: 6pt solid rgba(73,173,173,0.5); border-radius: 42px;
  box-shadow: 0px 10px 10px 8px rgba(0,0,0,0.3);
  
  padding: 5vh 5vw; box-sizing: border-box;
  transition: 300ms linear all;

  :hover{
    border-color: ${colorsPalette.SECONDARY_COLOR_TO};
    box-shadow: 0px 10px 10px 8px rgba(52, 0, 104,0.3);

  }
`;

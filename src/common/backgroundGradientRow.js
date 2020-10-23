import styled from "styled-components";
import { colorsPalette } from "services/styling/consts";

 export const BackgroundGradientRow = styled.div`
 background-image: linear-gradient(to bottom right, ${colorsPalette.MAIN_COLOR_FROM}, ${colorsPalette.MAIN_COLOR_TO});
 height: 50vh;
 width: 100%;
 position: absolute;
 top: 25vh;

 z-index: -1;
`;

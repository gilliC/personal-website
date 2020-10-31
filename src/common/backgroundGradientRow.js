import styled from "styled-components";
import { colorsPalette } from "services/styling/consts";
import { useLocation } from "react-router-dom";

export const BackgroundGradientRow = () => {
  const location = useLocation();
  const isShow = location.pathname !== '/';
  return <ColorRow isShow={isShow} />;
};

export const ColorRow = styled.div`
  background-image: linear-gradient(to bottom right, ${colorsPalette.MAIN_COLOR_FROM}, ${colorsPalette.MAIN_COLOR_TO} );
  height: 50vh;
  position: absolute; top: 25vh;

  z-index: -1;
  transition: width 0.5s ease-in-out;
  transition-delay: 0.5s;
  width: ${props=> props.isShow ? '100%' : '0%'};
`;

import styled from "styled-components";
import { colorsPalette } from "services/styling/consts";
import { useLocation } from "react-router-dom";

export const SPACE_HEIGHT = '10vh';

export const BackgroundGradientRow = ({ children, topComponent }) => {
  const location = useLocation();
  const isShow = location.pathname !== "/";
  return (
    <div>
      <VerticalSpace isWithTopComponent={!!topComponent} />
      {topComponent}
      <ColorRow isShow={isShow}>{children}</ColorRow>
    </div>
  );
};
const VerticalSpace = styled.div`height: ${props=> props.isWithTopComponent ? 0 : SPACE_HEIGHT }`;

export const ColorRow = styled.div`
  background-image: linear-gradient(to right, ${colorsPalette.MAIN_COLOR_FROM}, ${colorsPalette.MAIN_COLOR_TO},  ${colorsPalette.MAIN_COLOR_FROM});
  height: 50vh;
  transition: width 0.5s ease-in-out;
  transition-delay: 0.5s;
  width: ${(props) => (props.isShow ? "100%" : "0%")};
`;

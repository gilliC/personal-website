import styled from "styled-components";
import { colorsPalette } from "services/styling/consts";
import { useLocation } from "react-router-dom";

export const BackgroundGradientRow = ({ children }) => {
  const location = useLocation();
  const isShow = location.pathname !== "/";
  return (
    <div>
      <VerticalSpace height={300} />
      <ColorRow isShow={isShow}>{children}</ColorRow>
    </div>
  );
};
const VerticalSpace = styled.div`height: 10vh`;

export const ColorRow = styled.div`
  background-image: linear-gradient(to bottom right, ${colorsPalette.MAIN_COLOR_FROM}, ${colorsPalette.MAIN_COLOR_TO});
  height: 50vh;
  transition: width 0.5s ease-in-out;
  transition-delay: 0.5s;
  width: ${(props) => (props.isShow ? "100%" : "0%")};
`;

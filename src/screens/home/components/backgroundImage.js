import React from "react";
import styled from "styled-components";
import imgSRC from "assets/home_background_04.png";

export const BackgroundImage = (props) => {
  return <Image>{props.children}</Image>;
};
const Image = styled.div`
  background-image: url(${imgSRC});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 70vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

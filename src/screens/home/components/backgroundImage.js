import React from "react";
import styled from "styled-components";
import imgSRC from "assets/home_background_04.png";

export const BackgroundImage = (props) => {
  return <Image>{props.children}</Image>;
};

const Image = styled.div`
  background-image: url(${imgSRC});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 672px; width: 1016px;
  position: absolute; top: 0; right:0;
  z-index: -1;
`;

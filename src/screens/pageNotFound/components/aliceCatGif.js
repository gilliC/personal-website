import React from "react";
import styled from "styled-components";
import catImage from "assets/alice_cat_02.gif";
import catGif from "assets/alice_cat_01.gif";

export const AliceCatGif = () => {
  return (
    <Container style={{ position: "relative" }}>
      <img src={catImage} alt="cat gif" />
      <Gif src={catGif} alt="cat gif" height="120px" width="120px" />
    </Container>
  );
};

const Container = styled.div` position: relative; `;

const Gif = styled.div`
  position: absolute;
  top: 30%;
  left: 35%;
`;

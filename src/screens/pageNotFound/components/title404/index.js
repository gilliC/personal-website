import React from "react";
import styled from "styled-components";
import { Number } from "./number";
import { AliceCatGif } from "../aliceCatGif";

export const Title404 = () => {
  return (
    <Container>
      <Number />
      <AliceCatGif />
      <Number />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 320px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

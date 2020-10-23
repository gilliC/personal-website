import React from "react";
import styled from "styled-components";
import { Explnation } from "./components/explnation";
import { Qoute } from "./components/qoute";
export const ScreenPageNotFound = () => {
  return (
    <Container>
      <Qoute />
      <Explnation />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-color: teal;
`;

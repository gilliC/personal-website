import React from "react";
import styled from "styled-components";
import { VerticalSpace } from "common/verticalSpace";
import { Titles } from "./components/titles";
import { ContactButton } from "./components/contactButton";
import { BackgroundImage } from "./components/backgroundImage";

export const ScreenHome = () => {
  return (
    <Container>
      <Titles />
      <VerticalSpace flex={0.5} />
      <ContactButton />
      <VerticalSpace flex={1} />
      <BackgroundImage />
    </Container>
  );
};

const Container = styled.div`
  display: flex; flex-direction: column;
  padding-right: min(10vw, 100px);
  padding-left: min(10vw, 100px);
  height: 100%;
`;

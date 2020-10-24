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
      <VerticalSpace height={50} />
      <ContactButton />
      <BackgroundImage />
    </Container>
  );
};

const Container = styled.div`
  padding-right: min(10vw, 100px);
  padding-left: min(10vw, 100px);
`;

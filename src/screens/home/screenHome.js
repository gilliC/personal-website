import React from "react";
import styled from "styled-components";
import { VerticalSpace } from "common/verticalSpace";
import { Titles } from "./components/titles";
import { ContactButton } from "./components/contactButton";

export const ScreenHome = () => {
  return (
    <Container>
      <Titles />
      <VerticalSpace height={50} />
      <ContactButton />
    </Container>
  );
};

const Container = styled.div`
  padding: min(10vw, 100px);
`;

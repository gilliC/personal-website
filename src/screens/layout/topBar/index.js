import React from "react";
import styled from "styled-components";
import { NameTitle } from "./components/nameTitle";
import { NavLinks } from "./components/navLinks";

export const TopBar = () => {
  return (
    <Container>
      <NameTitle />
      <NavLinks />
    </Container>
  );
};

const Container = styled.div`
  padding-top: min(2vw, 20px);
  padding-right: min(10vw, 100px);
  padding-left: min(10vw, 100px);
  display: flex;
  justify-content: space-between;
`;

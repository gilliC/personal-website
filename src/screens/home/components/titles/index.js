import { VerticalSpace } from "common/verticalSpace";
import React from "react";
import styled from "styled-components";
import { Description } from "./components/description";
import { JobTitle } from "./components/jobTitle";
import { NameTitle } from "./components/nameTitle";

export const Titles = () => {
  return (
    <Container>
      <NameTitle />
      <JobTitle />
      <VerticalSpace height={50} />
      <Description />
    </Container>
  );
};
const Container = styled.div`
flex: 1;
width: 60vw;
`;

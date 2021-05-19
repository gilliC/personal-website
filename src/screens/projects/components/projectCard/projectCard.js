import React from "react";
import styled from "styled-components";
import { ProjectDescription } from "./components/projectDescription";
import { ExamplesCarousel } from "./components/examplesCarousel";

export const ProjectCard = (props) => {
  return (
    <Container>
      <ProjectDescription />
      <ExamplesCarousel />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: row;
  display: flex;
`;
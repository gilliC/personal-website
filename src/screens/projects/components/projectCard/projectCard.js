import React from "react";
import styled from "styled-components";
import { ProjectDescription } from "./components/projectDescription";
import { ExamplesCarousel } from "./components/examplesCarousel";
import { projectesList } from "screens/projects/projectsList";

export const ProjectCard = (props) => {
  const projectsCards = projectesList.map((item) => {
    return (
      <Container>
        <ProjectDescription {...item} />
        <ExamplesCarousel images={item.images} />
      </Container>
    );
  });
  return projectsCards;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: row;
  display: flex;
`;

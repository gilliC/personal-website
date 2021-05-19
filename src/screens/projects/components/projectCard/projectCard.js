import React from "react";
import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";
import { TextMed } from "common/textMed";
import { ProjectDescription } from "./components/projectDescription";
import { ExamplesCarousel } from "./components/examplesCarousel";

export const ProjectCard = (props) => {
  return (
    <Container>
      <ProjectDescription />
      <SideContainer>
        <ExamplesCarousel />
      </SideContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: row;
  display: flex;
`;
const SideContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  color: ${colorsPalette.MAIN_COLOR_TO};
  font-family: ${MAIN_FONT};
  font-weight: bold;
  font-size: 35px;
`;

export const SubTitle = styled.h2`
  color: ${colorsPalette.MAIN_COLOR_FROM};
  font-family: ${MAIN_FONT};
  font-weight: bold;
  font-size: 22px;
`;

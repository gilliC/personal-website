import React from "react";
import styled from "styled-components";
import { BackgroundGradientRow } from "common/backgroundGradientRow";
import { Header } from "./components/header";
import { ScreenContainer } from "./components/screenContainer";
import { ProjectCard } from "./components/projectCard/projectCard";

export const ScreenProjects = () => {
  return (
      <BackgroundGradientRow topComponent={<Header />}>
        <Container>
          <ScreenContainer>
            <ProjectCard/>
          </ScreenContainer>
        </Container>
      </BackgroundGradientRow>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  height: 100%;
`;
